/**
 * Compose an on-brand social post from live availability and publish it
 * to Facebook + Instagram via the Meta Graph API. No human approval step.
 *
 * Config:
 *   META_PAGE_ACCESS_TOKEN   required to publish
 *   META_PAGE_ID             or scripts/social-meta.config.json
 *   META_IG_USER_ID          optional — Facebook-only if missing
 *   SOCIAL_POST_ENABLED      "false" pauses publishing
 *   SOCIAL_DRY_RUN           "1" / --dry-run prints without publishing
 *
 * Usage:
 *   npm run social-openings
 *   npm run social-post:dry
 *   npm run social-post -- --slot openings
 */

const fs = require('fs');
const path = require('path');
const {
    chicagoTodayYmd,
    computePortfolioOpenings
} = require('./social-openings.cjs');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const LOG_FILE = path.join(DATA_DIR, 'social-post-log.json');
const SITE_ORIGIN = 'https://stayatflorida.com';
const GRAPH_DEFAULT = 'v21.0';
const DEDUPE_DAYS = 12;
const LOG_KEEP = 40;

const LISTING_IDS = [4, 5];

/** Slot-aware pools. Lifestyle prefers the clean morning-balcony crops. */
const PHOTO_POOL = {
    4: {
        lifestyle: [
            'images/lodging/tw-balcony-coffee.png',
            'images/lodging/tw-balcony-sunset.png',
            'images/lodging/tw-hero-view.png',
            'images/lodging/tw-dining-sunset.png',
            'images/lodging/tw-01-beach-view.jpg'
        ],
        default: [
            'images/lodging/tw-hero-view.png',
            'images/lodging/tw-balcony-sunset.png',
            'images/lodging/tw-balcony-coffee.png',
            'images/lodging/tw-01-beach-view.jpg',
            'images/lodging/tw-dining-sunset.png'
        ]
    },
    5: {
        // Locked feed crop for daily lifestyle (emotion creative).
        lifestyle: ['images/lodging/ms-morning-balcony-4x5.jpg'],
        default: [
            'images/lodging/ms-morning-balcony-4x5.jpg',
            'images/lodging/MS_Balcony_Coffee_person.png',
            'images/lodging/MS-FullView-1.png',
            'images/lodging/MS-Balcony-1.png',
            'images/lodging/MS_Balcony_Dinner_Setup.png',
            'images/lodging/ms-beach-view.jpg',
            'images/lodging/ms-10-sunset-view.jpg',
            'images/lodging/ms-06-gulf-balcony.png'
        ]
    }
};

const HASHTAGS = '#StayAtFlorida #PanamaCityBeach #MiramarBeach #GulfCoast';

const FORBIDDEN = [
    /serenity rentals/i,
    /fun in the sun/i,
    /\bamazing\b/i,
    /\bparadise\b/i,
    /limited time/i,
    /\d+\s*%\s*off/i,
    /book now before/i,
    /only \d+ (nights?|left)/i,
    /spring break/i,
    /8th-?floor/i,
    /21st-?floor/i,
    /majestic sun 811/i,
    /[\u{1F300}-\u{1FAFF}]/u
];

function loadSite() {
    const { PROPERTIES, REVIEWS, SITE_BASE_URL } = require(path.join(ROOT, 'config.js'));
    return {
        properties: PROPERTIES,
        reviews: REVIEWS,
        baseUrl: String(SITE_BASE_URL || SITE_ORIGIN).replace(/\/$/, '')
    };
}

function propertyById(site, id) {
    const p = site.properties.find((row) => Number(row.id) === Number(id));
    if (!p) throw new Error(`Unknown listing ${id} in config.js`);
    return p;
}

function marketName(property) {
    return String(property.location || '').replace(/,?\s*Florida$/i, '').trim();
}

function listingUrl(site, id, campaign) {
    const utm = new URLSearchParams({
        utm_source: 'social',
        utm_medium: 'social',
        utm_campaign: campaign
    });
    return `${site.baseUrl}/listing-${id}.html?${utm.toString()}`;
}

function loadMetaConfig() {
    const local = path.join(__dirname, 'social-meta.config.json');
    let file = {};
    if (fs.existsSync(local)) {
        file = JSON.parse(fs.readFileSync(local, 'utf8'));
    }
    return {
        pageId: process.env.META_PAGE_ID || file.pageId || '',
        igUserId: process.env.META_IG_USER_ID || file.igUserId || '',
        graphVersion: process.env.META_GRAPH_VERSION || file.graphVersion || GRAPH_DEFAULT,
        token: process.env.META_PAGE_ACCESS_TOKEN || file.pageAccessToken || ''
    };
}

function loadLog() {
    if (!fs.existsSync(LOG_FILE)) return { posts: [] };
    try {
        const raw = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
        return { posts: Array.isArray(raw.posts) ? raw.posts : [] };
    } catch {
        return { posts: [] };
    }
}

function writeLog(log) {
    if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
    const trimmed = { posts: log.posts.slice(-LOG_KEEP) };
    fs.writeFileSync(LOG_FILE, `${JSON.stringify(trimmed, null, 2)}\n`, 'utf8');
}

function parseArgs(argv) {
    const out = { slot: 'auto', dryRun: false };
    for (let i = 0; i < argv.length; i += 1) {
        const a = argv[i];
        if (a === '--dry-run') out.dryRun = true;
        if (a === '--slot' && argv[i + 1]) {
            out.slot = argv[i + 1];
            i += 1;
        }
    }
    if (process.env.SOCIAL_DRY_RUN === '1') out.dryRun = true;
    if (process.env.SOCIAL_SLOT) out.slot = process.env.SOCIAL_SLOT;
    return out;
}

function weekdayInChicago(now = new Date()) {
    const day = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'short'
    }).format(now);
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[day];
}

function resolveSlot(requested) {
    const want = String(requested || 'auto').toLowerCase();
    if (want === 'openings' || want === 'lifestyle' || want === 'proof') return want;
    const wd = weekdayInChicago();
    if (wd === 2) return 'openings';
    if (wd === 6) return 'proof';
    return 'lifestyle';
}

function isoWeekKey(ymd) {
    const { y, m, d } = (() => {
        const [yy, mm, dd] = ymd.split('-').map(Number);
        return { y: yy, m: mm, d: dd };
    })();
    const date = new Date(Date.UTC(y, m - 1, d));
    const dayNum = date.getUTCDay() || 7;
    date.setUTCDate(date.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(date.getUTCFullYear(), 0, 1));
    const week = Math.ceil(((date - yearStart) / 86400000 + 1) / 7);
    return `${date.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

function hashPick(seed, items) {
    if (!items.length) throw new Error('hashPick: empty list');
    let h = 0;
    for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    return items[h % items.length];
}

function recentFingerprints(log, todayYmd) {
    const cutoff = (() => {
        const [y, m, d] = todayYmd.split('-').map(Number);
        const dt = new Date(Date.UTC(y, m - 1, d - DEDUPE_DAYS));
        return `${dt.getUTCFullYear()}-${String(dt.getUTCMonth() + 1).padStart(2, '0')}-${String(dt.getUTCDate()).padStart(2, '0')}`;
    })();
    return new Set(
        log.posts
            .filter((p) => p.date && p.date >= cutoff)
            .map((p) => p.fingerprint)
            .filter(Boolean)
    );
}

function lastFeaturedListing(log, slot) {
    for (let i = log.posts.length - 1; i >= 0; i -= 1) {
        if (log.posts[i].slot === slot && log.posts[i].listingId) {
            return Number(log.posts[i].listingId);
        }
    }
    return null;
}

function pickListing(ids, lastId) {
    if (ids.length === 1) return ids[0];
    if (lastId && ids.includes(lastId)) {
        return ids.find((id) => id !== lastId) || ids[0];
    }
    return ids[0];
}

function assertCaptionSafe(caption) {
    for (const re of FORBIDDEN) {
        if (re.test(caption)) {
            throw new Error(`Caption failed brand scan (${re}): ${caption}`);
        }
    }
}

function joinCaption(paragraphs) {
    return `${paragraphs.filter(Boolean).join('\n\n')}\n\n${HASHTAGS}`;
}

function composeOpenings(site, listing, openings, campaign) {
    const ranges = openings.promotable.slice(0, 3);
    const labels = ranges.map((r) => r.label).join('; ');
    const url = listingUrl(site, listing.id, campaign);
    const market = marketName(listing);
    const variants = [
        [
            `${listing.title} in ${market} has space this month.`,
            `Open nights: ${labels}.`,
            `Owner-hosted. Check dates at ${url}`
        ],
        [
            `A quieter stretch of ${market} is open at ${listing.title}.`,
            `${labels}.`,
            `See the calendar at ${url}`
        ],
        [
            `${listing.title} — Gulf-front, ${market}. Dates still open: ${labels}.`,
            `Book direct at ${url}`
        ]
    ];
    return joinCaption(hashPick(campaign + listing.id, variants));
}

function composeLifestyle(site, listing, campaign) {
    const url = listingUrl(site, listing.id, campaign);
    const market = marketName(listing);
    // Emotion caption locked to the morning-balcony creative (emoji stripped).
    // See docs/social/ads/ms-morning-balcony/README.md.
    return joinCaption([
        `No alarm clock needed. Just coffee, Gulf views, and nowhere you need to be.`,
        `Escape to ${market} and spend your mornings overlooking turquoise water from your own private balcony.`,
        `${listing.title}. Owner-hosted. ${url}`
    ]);
}

function fiveStarQuotes(site, listingId) {
    const rows = site.reviews[listingId] || site.reviews[String(listingId)] || [];
    return rows
        .filter((r) => Number(r.rating) >= 5 && r.comment && r.author)
        .map((r) => {
            let quote = String(r.comment).replace(/\s+/g, ' ').trim();
            if (quote.length > 180) {
                const cut = quote.slice(0, 177);
                const lastSpace = cut.lastIndexOf(' ');
                quote = `${cut.slice(0, lastSpace > 80 ? lastSpace : 177).trim()}…`;
            }
            return { author: String(r.author).split(/\s+/)[0], quote };
        })
        .filter((r) => r.quote.length >= 40)
        .filter((r) => !FORBIDDEN.some((re) => re.test(r.quote)));
}

function composeProof(site, listing, campaign) {
    const url = listingUrl(site, listing.id, campaign);
    const quotes = fiveStarQuotes(site, listing.id);
    const picked = quotes.length
        ? hashPick(campaign, quotes)
        : { author: 'a recent guest', quote: 'The view is the reason we came back.' };
    return joinCaption([
        `"${picked.quote}" — ${picked.author}, on ${listing.title}.`,
        `Owner-hosted on Florida's Gulf Coast. Dates and rates at ${url}`
    ]);
}

function publicImageUrl(site, relPath) {
    return `${site.baseUrl}/${relPath.replace(/^\//, '')}`;
}

function pickPhoto(listingId, seed, slot = 'default') {
    const entry = PHOTO_POOL[listingId];
    if (!entry) throw new Error(`No photo pool for listing ${listingId}`);
    const pool = Array.isArray(entry)
        ? entry
        : entry[slot] || entry.lifestyle || entry.default;
    if (!pool || !pool.length) throw new Error(`Empty photo pool for listing ${listingId} slot ${slot}`);
    return hashPick(seed, pool);
}

function graphUrl(version, objectId, edge) {
    return `https://graph.facebook.com/${version}/${objectId}/${edge}`;
}

async function graphPost(url, params) {
    const body = new URLSearchParams(params);
    const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body
    });
    const json = await res.json();
    if (!res.ok || json.error) {
        const msg = json.error ? `${json.error.message} (${json.error.code})` : res.statusText;
        throw new Error(`Meta API ${res.status}: ${msg}`);
    }
    return json;
}

async function graphGet(url, params) {
    const qs = new URLSearchParams(params);
    const res = await fetch(`${url}?${qs.toString()}`);
    const json = await res.json();
    if (!res.ok || json.error) {
        const msg = json.error ? `${json.error.message} (${json.error.code})` : res.statusText;
        throw new Error(`Meta API ${res.status}: ${msg}`);
    }
    return json;
}

async function publishFacebook(meta, imageUrl, caption) {
    return graphPost(graphUrl(meta.graphVersion, meta.pageId, 'photos'), {
        url: imageUrl,
        caption,
        access_token: meta.token
    });
}

async function waitForIgContainer(meta, creationId) {
    const url = `https://graph.facebook.com/${meta.graphVersion}/${creationId}`;
    for (let i = 0; i < 12; i += 1) {
        const status = await graphGet(url, {
            fields: 'status_code,status',
            access_token: meta.token
        });
        if (status.status_code === 'FINISHED') return;
        if (status.status_code === 'ERROR') {
            throw new Error(`Instagram container error: ${status.status || 'unknown'}`);
        }
        await new Promise((r) => setTimeout(r, 2000));
    }
    throw new Error('Instagram container timed out');
}

async function publishInstagram(meta, imageUrl, caption) {
    const created = await graphPost(graphUrl(meta.graphVersion, meta.igUserId, 'media'), {
        image_url: imageUrl,
        caption,
        access_token: meta.token
    });
    await waitForIgContainer(meta, created.id);
    return graphPost(graphUrl(meta.graphVersion, meta.igUserId, 'media_publish'), {
        creation_id: created.id,
        access_token: meta.token
    });
}

function buildPost({ site, slot, todayYmd, log }) {
    const week = isoWeekKey(todayYmd);
    const month = todayYmd.slice(0, 7);
    const campaign = `${slot}-${month}`;
    const openingsRows = computePortfolioOpenings(LISTING_IDS, todayYmd);
    const byId = new Map(openingsRows.map((r) => [r.listingId, r]));

    let effectiveSlot = slot;
    let listingId;

    if (slot === 'openings') {
        const eligible = openingsRows
            .filter((r) => r.promotable.length > 0)
            .map((r) => r.listingId);
        if (eligible.length === 0) {
            effectiveSlot = 'lifestyle';
            // Lifestyle defaults to Westlight morning-balcony creative.
            listingId = 5;
        } else {
            listingId = pickListing(eligible, lastFeaturedListing(log, 'openings'));
        }
    } else if (slot === 'lifestyle') {
        // Locked emotion creative: Westlight morning balcony crops + caption.
        listingId = 5;
    } else {
        listingId = pickListing(LISTING_IDS, lastFeaturedListing(log, slot));
    }

    const listing = propertyById(site, listingId);
    const openings = byId.get(listingId);
    const photoSlot = effectiveSlot === 'lifestyle' ? 'lifestyle' : 'default';
    const photoRel = pickPhoto(listingId, `${week}-${effectiveSlot}-${listingId}`, photoSlot);
    const imageUrl = publicImageUrl(site, photoRel);

    let caption;
    if (effectiveSlot === 'openings') {
        caption = composeOpenings(site, listing, openings, campaign);
    } else if (effectiveSlot === 'proof') {
        caption = composeProof(site, listing, campaign);
    } else {
        caption = composeLifestyle(site, listing, campaign);
    }
    assertCaptionSafe(caption);

    const rangeKey = (openings.promotable || []).map((r) => `${r.start}_${r.end}`).join(',');
    const fingerprint = `${effectiveSlot}|${listingId}|${week}|${rangeKey}`;

    return {
        slot: effectiveSlot,
        requestedSlot: slot,
        listingId,
        propertyName: listing.title,
        caption,
        imageUrl,
        photoRel,
        fingerprint,
        campaign,
        openings: openings.promotable.map((r) => r.label)
    };
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    const enabled = String(process.env.SOCIAL_POST_ENABLED || 'true').toLowerCase() !== 'false';
    const todayYmd = chicagoTodayYmd();
    const site = loadSite();
    const log = loadLog();
    const slot = resolveSlot(args.slot);
    const draft = buildPost({ site, slot, todayYmd, log });

    console.log(`Slot: ${draft.requestedSlot} → ${draft.slot}`);
    console.log(`Property: ${draft.propertyName} (${draft.listingId})`);
    console.log(`Photo: ${draft.photoRel}`);
    console.log(`Image URL: ${draft.imageUrl}`);
    if (draft.openings.length) console.log(`Openings: ${draft.openings.join('; ')}`);
    console.log('--- caption ---');
    console.log(draft.caption);
    console.log('---------------');

    const seen = recentFingerprints(log, todayYmd);
    if (seen.has(draft.fingerprint)) {
        console.log(`SKIP: already posted ${draft.fingerprint} within ${DEDUPE_DAYS} days`);
        return;
    }

    if (!enabled) {
        console.log('SKIP: SOCIAL_POST_ENABLED=false');
        return;
    }

    const meta = loadMetaConfig();
    if (args.dryRun) {
        console.log('DRY RUN: not publishing.');
        return;
    }

    if (!meta.token || !meta.pageId) {
        const scheduled = process.env.GITHUB_EVENT_NAME === 'schedule';
        const msg = 'META_PAGE_ACCESS_TOKEN and META_PAGE_ID are required to publish. See docs/brand/SOCIAL.md.';
        if (scheduled) {
            console.log(`SKIP: ${msg}`);
            return;
        }
        console.error(`ERROR: ${msg}`);
        console.error('Dry-run with npm run social-post:dry');
        process.exit(1);
    }

    const result = {
        date: todayYmd,
        postedAt: new Date().toISOString(),
        slot: draft.slot,
        requestedSlot: draft.requestedSlot,
        listingId: draft.listingId,
        propertyName: draft.propertyName,
        fingerprint: draft.fingerprint,
        campaign: draft.campaign,
        imageUrl: draft.imageUrl,
        caption: draft.caption,
        facebookPostId: null,
        instagramMediaId: null,
        instagramError: null
    };

    const fb = await publishFacebook(meta, draft.imageUrl, draft.caption);
    result.facebookPostId = fb.post_id || fb.id || null;
    console.log(`Facebook: ${result.facebookPostId}`);

    if (meta.igUserId) {
        try {
            const ig = await publishInstagram(meta, draft.imageUrl, draft.caption);
            result.instagramMediaId = ig.id || null;
            console.log(`Instagram: ${result.instagramMediaId}`);
        } catch (err) {
            result.instagramError = err.message;
            console.error(`Instagram failed (Facebook still published): ${err.message}`);
        }
    } else {
        result.instagramError = 'META_IG_USER_ID not set';
        console.log('Instagram skipped (no META_IG_USER_ID).');
    }

    log.posts.push(result);
    writeLog(log);
    console.log(`Logged ${path.relative(ROOT, LOG_FILE)}`);
}

module.exports = { buildPost, resolveSlot, assertCaptionSafe };

if (require.main === module) {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
