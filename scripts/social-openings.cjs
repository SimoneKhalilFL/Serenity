/**
 * Invert data/availability-{id}.json into bookable night ranges.
 *
 * Usage: npm run social-openings
 * Required by scripts/social-post.cjs (no network, no secrets).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');

const MIN_PROMOTABLE_NIGHTS = 3;
const HORIZON_DAYS = 30;
const PEAK_WINDOWS = [
    { start: { m: 3, d: 1 }, end: { m: 4, d: 10 } },
    { start: { m: 6, d: 1 }, end: { m: 8, d: 10 } }
];
const PEAK_OCCUPANCY_SKIP = 0.8;

function chicagoTodayYmd(now = new Date()) {
    return new Intl.DateTimeFormat('en-CA', {
        timeZone: 'America/Chicago',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).format(now);
}

function parseYmd(ymd) {
    const [y, m, d] = String(ymd).split('-').map(Number);
    if (!y || !m || !d) throw new Error(`Invalid YMD: ${ymd}`);
    return { y, m, d };
}

function ymdFromParts(y, m, d) {
    return `${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

function addDaysYmd(ymd, days) {
    const { y, m, d } = parseYmd(ymd);
    const dt = new Date(Date.UTC(y, m - 1, d + days));
    return ymdFromParts(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
}

function lastDayOfMonth(ymd) {
    const { y, m } = parseYmd(ymd);
    const dt = new Date(Date.UTC(y, m, 0));
    return ymdFromParts(dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate());
}

function compareYmd(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}

function daysInclusive(start, end) {
    const a = parseYmd(start);
    const b = parseYmd(end);
    const ms = Date.UTC(b.y, b.m - 1, b.d) - Date.UTC(a.y, a.m - 1, a.d);
    return Math.round(ms / 86400000) + 1;
}

function enumerateYmd(start, end) {
    const out = [];
    let cursor = start;
    while (compareYmd(cursor, end) <= 0) {
        out.push(cursor);
        cursor = addDaysYmd(cursor, 1);
    }
    return out;
}

function monthName(ymd) {
    const { y, m, d } = parseYmd(ymd);
    return new Date(Date.UTC(y, m - 1, d)).toLocaleString('en-US', {
        month: 'long',
        timeZone: 'UTC'
    });
}

function formatDay(ymd) {
    const { d } = parseYmd(ymd);
    return String(d);
}

function formatRange(start, end) {
    const a = parseYmd(start);
    const b = parseYmd(end);
    if (a.y === b.y && a.m === b.m) {
        if (start === end) return `${monthName(start)} ${formatDay(start)}`;
        return `${monthName(start)} ${formatDay(start)}–${formatDay(end)}`;
    }
    return `${monthName(start)} ${formatDay(start)} – ${monthName(end)} ${formatDay(end)}`;
}

function sellWindow(todayYmd = chicagoTodayYmd()) {
    const monthEnd = lastDayOfMonth(todayYmd);
    const horizon = addDaysYmd(todayYmd, HORIZON_DAYS);
    const end = compareYmd(horizon, monthEnd) >= 0 ? horizon : monthEnd;
    return { start: todayYmd, end };
}

function inPeakWindow(ymd) {
    const { m, d } = parseYmd(ymd);
    const key = m * 100 + d;
    return PEAK_WINDOWS.some((w) => {
        const from = w.start.m * 100 + w.start.d;
        const to = w.end.m * 100 + w.end.d;
        return key >= from && key <= to;
    });
}

function loadAvailability(listingId) {
    const file = path.join(DATA_DIR, `availability-${listingId}.json`);
    if (!fs.existsSync(file)) {
        throw new Error(`Missing ${path.relative(ROOT, file)}`);
    }
    const raw = JSON.parse(fs.readFileSync(file, 'utf8'));
    const set = new Set(raw.unavailableDates || []);
    return {
        listingId: Number(raw.listingId || listingId),
        generatedAt: raw.generatedAt || null,
        unavailable: set
    };
}

function rangesFromUnavailable(unavailable, windowStart, windowEnd) {
    const days = enumerateYmd(windowStart, windowEnd);
    const ranges = [];
    let runStart = null;
    let prev = null;

    const flush = (endYmd) => {
        if (!runStart) return;
        const nights = daysInclusive(runStart, endYmd);
        ranges.push({
            start: runStart,
            end: endYmd,
            nights,
            label: formatRange(runStart, endYmd),
            promotable: nights >= MIN_PROMOTABLE_NIGHTS
        });
        runStart = null;
    };

    for (const day of days) {
        const blocked = unavailable.has(day);
        if (!blocked) {
            if (!runStart) runStart = day;
            prev = day;
            continue;
        }
        if (runStart && prev) flush(prev);
        prev = day;
    }
    if (runStart && prev) flush(prev);
    return ranges;
}

function occupancy(unavailable, windowStart, windowEnd) {
    const days = enumerateYmd(windowStart, windowEnd);
    if (days.length === 0) return 0;
    const blocked = days.filter((d) => unavailable.has(d)).length;
    return blocked / days.length;
}

function computeListingOpenings(listingId, todayYmd = chicagoTodayYmd()) {
    const { start, end } = sellWindow(todayYmd);
    const avail = loadAvailability(listingId);
    const ranges = rangesFromUnavailable(avail.unavailable, start, end);
    const occ = occupancy(avail.unavailable, start, end);
    const peak = inPeakWindow(todayYmd);
    const skipOpeningsForPeak = peak && occ >= PEAK_OCCUPANCY_SKIP;
    return {
        listingId: avail.listingId,
        generatedAt: avail.generatedAt,
        window: { start, end },
        occupancy: Math.round(occ * 1000) / 1000,
        peak,
        skipOpeningsForPeak,
        ranges,
        promotable: skipOpeningsForPeak ? [] : ranges.filter((r) => r.promotable)
    };
}

function computePortfolioOpenings(listingIds, todayYmd = chicagoTodayYmd()) {
    return listingIds.map((id) => computeListingOpenings(id, todayYmd));
}

function printReport(rows) {
    for (const row of rows) {
        console.log(`Listing ${row.listingId}`);
        console.log(`  Window ${row.window.start} → ${row.window.end}`);
        console.log(`  Occupancy ${(row.occupancy * 100).toFixed(0)}%  peak=${row.peak}  skipOpenings=${row.skipOpeningsForPeak}`);
        if (row.generatedAt) console.log(`  Availability generated ${row.generatedAt}`);
        if (row.ranges.length === 0) {
            console.log('  No open nights in window');
            continue;
        }
        for (const r of row.ranges) {
            const flag = r.promotable ? 'promote' : 'skip (<3 nights)';
            console.log(`  ${r.label}  (${r.nights} nights)  ${flag}`);
        }
        console.log('');
    }
}

module.exports = {
    MIN_PROMOTABLE_NIGHTS,
    chicagoTodayYmd,
    sellWindow,
    formatRange,
    computeListingOpenings,
    computePortfolioOpenings
};

if (require.main === module) {
    const ids = [4, 5];
    const rows = computePortfolioOpenings(ids);
    printReport(rows);
}
