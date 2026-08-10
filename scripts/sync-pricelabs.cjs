/**
 * Fetches daily prices from PriceLabs Customer API for each listing and writes
 * data/pricing-{id}.json. Mirrors the iCal sync pattern (scripts/sync-calendars.cjs).
 *
 * Required secrets / config:
 *   - PRICELABS_API_KEY            (env or GitHub Actions secret)
 *   - PRICELABS_FEEDS_JSON         (env / secret with the JSON below) OR
 *     scripts/pricelabs-feeds.config.json (gitignored local file)
 *
 *   Shape (see scripts/pricelabs-feeds.config.example.json):
 *   {
 *     "listings": {
 *       "4": { "pricelabsListingId": "abc123", "pms": "airbnb" },
 *       "5": { "pricelabsListingId": "def456", "pms": "airbnb" }
 *     }
 *   }
 *
 * Fallback strategy: if the API call for a listing fails, the existing
 * data/pricing-{id}.json is left untouched ("last good" prices). Only successful
 * fetches overwrite the file.
 *
 * Usage: npm run sync-pricelabs
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const PRICELABS_PRICES_URL = 'https://api.pricelabs.co/v1/listing_prices';

function loadConfig() {
    const raw = process.env.PRICELABS_FEEDS_JSON;
    if (raw && raw.trim()) {
        return JSON.parse(raw);
    }
    const local = path.join(__dirname, 'pricelabs-feeds.config.json');
    if (fs.existsSync(local)) {
        return JSON.parse(fs.readFileSync(local, 'utf8'));
    }
    return null;
}

function loadExistingPricing(listingId) {
    const file = path.join(DATA_DIR, `pricing-${listingId}.json`);
    if (!fs.existsSync(file)) return null;
    try {
        return JSON.parse(fs.readFileSync(file, 'utf8'));
    } catch {
        return null;
    }
}

function writePricingFile(listingId, payload) {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    const file = path.join(DATA_DIR, `pricing-${listingId}.json`);
    fs.writeFileSync(file, `${JSON.stringify(payload, null, 2)}\n`, 'utf8');
    console.log(`  Wrote ${path.relative(ROOT, file)} (${Object.keys(payload.prices || {}).length} dated prices)`);
}

/**
 * Pick the nightly rate guests should see.
 * PriceLabs returns `price` (final) and `user_price` (manual override; -1 = none).
 */
function pickNightlyPrice(row) {
    if (!row || typeof row !== 'object') return null;
    const user = row.user_price;
    if (typeof user === 'number' && Number.isFinite(user) && user > 0) {
        return Math.round(user);
    }
    const price = row.price;
    if (typeof price === 'number' && Number.isFinite(price) && price > 0) {
        return Math.round(price);
    }
    return null;
}

/**
 * POST https://api.pricelabs.co/v1/listing_prices
 * Headers: X-API-Key, Content-Type: application/json
 * Body: { listings: [{ id, pms }] }
 */
async function fetchPriceLabsForListing(apiKey, pricelabsListingId, entry = {}) {
    if (!apiKey || !apiKey.trim()) {
        throw new Error('PRICELABS_API_KEY is empty');
    }
    if (!pricelabsListingId || !String(pricelabsListingId).trim()) {
        throw new Error('pricelabsListingId is empty');
    }
    const pms = entry.pms && String(entry.pms).trim();
    if (!pms) {
        throw new Error('pms is required (e.g. "airbnb") — set it in PRICELABS_FEEDS_JSON');
    }

    const res = await fetch(PRICELABS_PRICES_URL, {
        method: 'POST',
        headers: {
            'X-API-Key': apiKey,
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            listings: [{ id: String(pricelabsListingId), pms }]
        })
    });

    if (!res.ok) {
        const text = await res.text().catch(() => '');
        throw new Error(`HTTP ${res.status} ${res.statusText}${text ? `: ${text.slice(0, 300)}` : ''}`);
    }

    const body = await res.json();
    const rows = Array.isArray(body) ? body : body.data || body.listings || [];
    const match =
        rows.find((r) => String(r.id) === String(pricelabsListingId)) ||
        rows[0];

    if (!match) {
        throw new Error('API returned no listing rows');
    }
    if (match.error || match.error_status) {
        throw new Error(
            `PriceLabs error for ${pricelabsListingId}: ${match.error_status || ''} ${match.error || ''}`.trim()
        );
    }

    const prices = {};
    const minStay = {};
    for (const row of match.data || []) {
        if (!row || !row.date) continue;
        const nightly = pickNightlyPrice(row);
        if (nightly != null) prices[row.date] = nightly;
        if (typeof row.min_stay === 'number' && Number.isFinite(row.min_stay) && row.min_stay > 0) {
            minStay[row.date] = Math.round(row.min_stay);
        }
    }

    return { prices, minStay, currency: match.currency || 'USD' };
}

async function main() {
    const config = loadConfig();
    if (!config || !config.listings) {
        console.error('ERROR: No PriceLabs config found. Set PRICELABS_FEEDS_JSON secret or add scripts/pricelabs-feeds.config.json');
        console.error('See scripts/pricelabs-feeds.config.example.json');
        process.exit(1);
    }
    const apiKey = process.env.PRICELABS_API_KEY;
    if (!apiKey || !apiKey.trim()) {
        console.error('ERROR: PRICELABS_API_KEY env var / secret is missing.');
        process.exit(1);
    }

    console.log('Syncing PriceLabs prices → data/pricing-{id}.json\n');

    let anySuccess = false;
    let anyFailure = false;

    for (const id of Object.keys(config.listings)) {
        const entry = config.listings[id] || {};
        const plId = entry.pricelabsListingId;
        console.log(`Listing ${id} (PriceLabs id: ${plId || 'MISSING'}, pms: ${entry.pms || 'MISSING'})`);

        if (!plId) {
            console.error('  Skipped: pricelabsListingId missing in config');
            anyFailure = true;
            continue;
        }

        try {
            const { prices, minStay, currency } = await fetchPriceLabsForListing(apiKey, plId, entry);
            const dateCount = Object.keys(prices || {}).length;
            if (dateCount === 0) {
                throw new Error('API returned 0 prices (refusing to overwrite last-good file)');
            }
            writePricingFile(id, {
                listingId: Number(id),
                pricelabsListingId: String(plId),
                pms: entry.pms || null,
                generatedAt: new Date().toISOString(),
                currency: currency || 'USD',
                source: 'pricelabs',
                prices,
                minStay: minStay || {}
            });
            anySuccess = true;
        } catch (e) {
            anyFailure = true;
            const existing = loadExistingPricing(id);
            if (existing) {
                console.error(`  FAIL: ${e.message}`);
                console.error(`  Keeping last-good file from ${existing.generatedAt || 'unknown date'} (${Object.keys(existing.prices || {}).length} dated prices)`);
            } else {
                console.error(`  FAIL: ${e.message}`);
                console.error('  No previous pricing-' + id + '.json on disk — site will fall back to config.js seasonalAdjustments.');
            }
        }
    }

    if (!anySuccess && anyFailure) {
        console.error('\nAll listings failed; surfacing as a workflow error so this does not pass silently.');
        process.exit(1);
    }

    console.log('\nDone.');
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
