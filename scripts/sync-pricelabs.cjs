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
 *       "4": { "pricelabsListingId": "abc123", "pms": "optional" },
 *       "5": { "pricelabsListingId": "def456" }
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
 * STUB — replace with the real PriceLabs Customer API call once your account has
 * API access enabled and you have the docs URL from Settings → API Details.
 *
 * Expected real behavior:
 *   - GET (or POST) the PriceLabs prices endpoint with X-API-Key: <PRICELABS_API_KEY>
 *   - Pass the pricelabsListingId, and a date range covering at least 12 months ahead
 *   - Receive a list of { date, price, min_stay? } objects
 *
 * Return shape this function MUST produce:
 *   {
 *     prices:  { "YYYY-MM-DD": <number USD>, ... },
 *     minStay: { "YYYY-MM-DD": <number>, ... }   // optional, empty {} if not used
 *   }
 *
 * Throw on any HTTP / parse error so the caller can preserve the last-good file.
 */
async function fetchPriceLabsForListing(apiKey, pricelabsListingId /* , entry */) {
    if (!apiKey || !apiKey.trim()) {
        throw new Error('PRICELABS_API_KEY is empty');
    }
    if (!pricelabsListingId || !String(pricelabsListingId).trim()) {
        throw new Error('pricelabsListingId is empty');
    }

    // ---------------------------------------------------------------------
    // TODO: Implement the actual API call once support@pricelabs.co enables
    // your Customer API and the docs URL is available under your account's
    // Settings → API Details → "How to use PriceLabs API" button.
    //
    // Sketch (adjust to match the actual spec PriceLabs provides):
    //
    //   const start = new Date();
    //   const end   = new Date(start.getTime() + 86400000 * 365);
    //   const url = `https://api.pricelabs.co/v1/listing_prices?listing_id=${encodeURIComponent(pricelabsListingId)}&date_from=${ymd(start)}&date_to=${ymd(end)}`;
    //   const res = await fetch(url, { headers: { 'X-API-Key': apiKey, 'Accept': 'application/json' } });
    //   if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    //   const body = await res.json();
    //   const prices  = {};
    //   const minStay = {};
    //   for (const row of body.data || []) {
    //       if (row.date && typeof row.price === 'number') prices[row.date] = row.price;
    //       if (row.date && typeof row.min_stay === 'number') minStay[row.date] = row.min_stay;
    //   }
    //   return { prices, minStay };
    // ---------------------------------------------------------------------

    throw new Error(
        'PriceLabs API call is not implemented yet. Enable Customer API at ' +
        'https://app.pricelabs.co (email support@pricelabs.co), then fill in ' +
        'fetchPriceLabsForListing() in scripts/sync-pricelabs.cjs using the ' +
        'docs from your account\'s Settings → API Details.'
    );
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
        console.log(`Listing ${id} (PriceLabs id: ${plId || 'MISSING'})`);

        if (!plId) {
            console.error('  Skipped: pricelabsListingId missing in config');
            anyFailure = true;
            continue;
        }

        try {
            const { prices, minStay } = await fetchPriceLabsForListing(apiKey, plId, entry);
            const dateCount = Object.keys(prices || {}).length;
            if (dateCount === 0) {
                throw new Error('API returned 0 prices (refusing to overwrite last-good file)');
            }
            writePricingFile(id, {
                listingId: Number(id),
                pricelabsListingId: String(plId),
                generatedAt: new Date().toISOString(),
                currency: 'USD',
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
