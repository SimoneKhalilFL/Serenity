/**
 * Fetches iCal feeds per listing, merges blocked nights, writes data/availability-{id}.json.
 *
 * Config (pick one):
 *   - Env: CALENDAR_FEEDS_JSON — full JSON string (GitHub Actions secret).
 *   - File: scripts/calendar-feeds.config.json (copy from .example.json; gitignored if secrets).
 *
 * Usage: npm run sync-calendars
 */

const fs = require('fs');
const path = require('path');
const ical = require('node-ical');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

function loadConfig() {
    const raw = process.env.CALENDAR_FEEDS_JSON;
    if (raw && raw.trim()) {
        return JSON.parse(raw);
    }
    const local = path.join(__dirname, 'calendar-feeds.config.json');
    if (fs.existsSync(local)) {
        return JSON.parse(fs.readFileSync(local, 'utf8'));
    }
    return null;
}

function formatYmd(date) {
    const y = date.getFullYear();
    const m = String(date.getMonth() + 1).padStart(2, '0');
    const d = String(date.getDate()).padStart(2, '0');
    return `${y}-${m}-${d}`;
}

/** Expand each booked night from [start, end) per iCal all-day convention. */
function addNightsFromEvent(ev, set) {
    if (ev.type !== 'VEVENT') return;
    if (String(ev.status || '').toUpperCase() === 'CANCELLED') return;

    if (ev.rrule) {
        try {
            const instances = ical.expandRecurringEvent(ev, {
                from: new Date(Date.now() - 86400000 * 365),
                to: new Date(Date.now() + 86400000 * 365 * 4),
                expandOngoing: true
            });
            for (const inst of instances) {
                addNightsFromRange(inst.start, inst.end, set);
            }
        } catch (e) {
            console.warn(`  [warn] rrule expand skipped: ${e.message}`);
        }
        return;
    }
    addNightsFromRange(ev.start, ev.end, set);
}

function addNightsFromRange(start, end, set) {
    if (!start) return;
    const s = start instanceof Date ? new Date(start) : new Date(start);
    let e;
    if (end) {
        e = end instanceof Date ? new Date(end) : new Date(end);
    } else {
        e = new Date(s);
        e.setDate(e.getDate() + 1);
    }
    const cur = new Date(s.getFullYear(), s.getMonth(), s.getDate());
    const endDay = new Date(e.getFullYear(), e.getMonth(), e.getDate());
    while (cur < endDay) {
        set.add(formatYmd(cur));
        cur.setDate(cur.getDate() + 1);
    }
}

async function fetchIcs(url) {
    const res = await fetch(url, {
        redirect: 'follow',
        headers: { 'User-Agent': 'SerenityRentals-calendar-sync/1.0' }
    });
    if (!res.ok) {
        throw new Error(`HTTP ${res.status} for ${url.slice(0, 80)}…`);
    }
    return res.text();
}

function parseBlockedDates(icsText) {
    const data = ical.sync.parseICS(icsText);
    const set = new Set();
    for (const k of Object.keys(data)) {
        addNightsFromEvent(data[k], set);
    }
    return Array.from(set).sort();
}

async function mergeFeeds(feedUrls) {
    const set = new Set();
    const sourceLabels = [];
    for (let i = 0; i < feedUrls.length; i++) {
        const url = feedUrls[i];
        if (!url || !String(url).trim()) continue;
        try {
            const text = await fetchIcs(url);
            const dates = parseBlockedDates(text);
            dates.forEach((d) => set.add(d));
            sourceLabels.push(`feed${i + 1}`);
            console.log(`  OK ${dates.length} blocked nights from feed ${i + 1}`);
        } catch (e) {
            console.error(`  FAIL feed ${i + 1}: ${e.message}`);
        }
    }
    return { dates: Array.from(set).sort(), sourceLabels };
}

function writeAvailabilityFile(listingId, dates, sources) {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const out = {
        listingId: Number(listingId),
        generatedAt: new Date().toISOString(),
        sources,
        unavailableDates: dates
    };
    const file = path.join(DATA_DIR, `availability-${listingId}.json`);
    fs.writeFileSync(file, `${JSON.stringify(out, null, 2)}\n`, 'utf8');
    console.log(`  Wrote ${path.relative(ROOT, file)} (${dates.length} dates)`);
}

async function main() {
    const config = loadConfig();
    if (!config || !config.listings) {
        console.log('No calendar config found. Set CALENDAR_FEEDS_JSON or add scripts/calendar-feeds.config.json');
        console.log('See scripts/calendar-feeds.config.example.json');
        process.exit(0);
    }

    const listings = config.listings;
    console.log('Syncing iCal feeds → data/availability-{id}.json\n');

    for (const id of Object.keys(listings)) {
        const entry = listings[id];
        const feeds = Array.isArray(entry.feeds) ? entry.feeds : [];
        if (feeds.length === 0) {
            console.log(`Listing ${id}: no feeds, writing empty unavailableDates`);
            writeAvailabilityFile(id, [], []);
            continue;
        }
        console.log(`Listing ${id} (${feeds.length} feed(s))`);
        const { dates, sourceLabels } = await mergeFeeds(feeds);
        writeAvailabilityFile(id, dates, sourceLabels);
    }

    console.log('\nDone.');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
