/**
 * Compose an on-brand social post from the unique asset catalog and publish
 * it to Facebook + Instagram via the Meta Graph API. No human approval step.
 *
 * Surfaces: feed (9:00 AM), story (12:00 PM), reel (5:00 PM) America/Chicago.
 * Prefer unused catalog media. If a surface is empty, generate from unused
 * lodging stills (Ken Burns for Reels). Recycle the oldest asset only if
 * nothing unused remains. Open nights may appear on feed.
 *
 * Config:
 *   META_PAGE_ACCESS_TOKEN   required to publish
 *   META_PAGE_ID             or scripts/social-meta.config.json
 *   META_IG_USER_ID          optional — Facebook-only if missing
 *   SOCIAL_POST_ENABLED      "false" pauses publishing
 *   SOCIAL_DRY_RUN           "1" / --dry-run prints without publishing
 *   SOCIAL_SURFACE           feed | story | reel | auto
 *   SOCIAL_SLOT              auto | openings | lifestyle | proof
 *
 * Usage:
 *   npm run social-openings
 *   npm run social-post:dry
 *   npm run social-post:plan
 *   npm run social-post -- --surface feed --slot openings
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const {
    chicagoTodayYmd,
    computePortfolioOpenings
} = require('./social-openings.cjs');

const ROOT = path.join(__dirname, '..');
const DATA_DIR = path.join(ROOT, 'data');
const LOG_FILE = path.join(DATA_DIR, 'social-post-log.json');
const USED_FILE = path.join(DATA_DIR, 'social-used-media.json');
const CATALOG_FILE = path.join(__dirname, 'social-catalog.json');
const SITE_ORIGIN = 'https://stayatflorida.com';
const GRAPH_DEFAULT = 'v21.0';
const LOG_KEEP = 200;
const GITHUB_RAW = 'https://raw.githubusercontent.com/SimoneKhalilFL/Serenity/main';

const LISTING_IDS = [4, 5];

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

function loadCatalog() {
    const raw = JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8'));
    const assets = Array.isArray(raw.assets) ? raw.assets : [];
    if (!assets.length) throw new Error('social-catalog.json has no assets');
    return assets;
}

function loadUsed() {
    if (!fs.existsSync(USED_FILE)) return { paths: [], families: [] };
    try {
        const raw = JSON.parse(fs.readFileSync(USED_FILE, 'utf8'));
        return {
            paths: Array.isArray(raw.paths) ? raw.paths : [],
            families: Array.isArray(raw.families) ? raw.families : []
        };
    } catch {
        return { paths: [], families: [] };
    }
}

function writeUsed(used) {
    const uniq = (arr) => [...new Set(arr.filter(Boolean))].sort();
    fs.writeFileSync(
        USED_FILE,
        `${JSON.stringify({ paths: uniq(used.paths), families: uniq(used.families) }, null, 2)}\n`,
        'utf8'
    );
}

function usedFromHistory(usedFile, log) {
    const paths = new Set(usedFile.paths);
    const families = new Set(usedFile.families);
    for (const p of log.posts) {
        if (p.photoRel) paths.add(p.photoRel);
        if (p.videoRel) paths.add(p.videoRel);
        if (p.family) families.add(p.family);
        for (const f of p.burns || []) families.add(f);
        if (p.imageUrl && p.imageUrl.includes('/images/')) {
            const idx = p.imageUrl.indexOf('/images/');
            paths.add(p.imageUrl.slice(idx + 1));
        }
    }
    return { paths, families };
}

function assetKeys(asset) {
    return [asset.family, ...(asset.burns || [])].filter(Boolean);
}

function isAvailable(asset, used) {
    if (used.paths.has(asset.path)) return false;
    if (used.families.has(asset.family)) return false;
    // Reels also drop if any source still family already ran. Feed stills only
    // care about their own family so sibling photos stay available.
    if (asset.surface === 'reel') {
        return !(asset.burns || []).some((k) => used.families.has(k));
    }
    return true;
}

function markUsed(used, asset) {
    used.paths.add(asset.path);
    for (const src of asset.sources || []) used.paths.add(src);
    for (const k of assetKeys(asset)) used.families.add(k);
}

function parseArgs(argv) {
    const out = { slot: 'auto', surface: 'auto', dryRun: false, planDays: 0 };
    for (let i = 0; i < argv.length; i += 1) {
        const a = argv[i];
        if (a === '--dry-run') out.dryRun = true;
        if (a === '--slot' && argv[i + 1]) {
            out.slot = argv[i + 1];
            i += 1;
        }
        if (a === '--surface' && argv[i + 1]) {
            out.surface = argv[i + 1];
            i += 1;
        }
        if (a === '--plan') {
            out.planDays = Number(argv[i + 1] || 14);
            if (argv[i + 1] && !argv[i + 1].startsWith('-')) i += 1;
        }
    }
    if (process.env.SOCIAL_DRY_RUN === '1') out.dryRun = true;
    if (process.env.SOCIAL_SLOT) out.slot = process.env.SOCIAL_SLOT;
    if (process.env.SOCIAL_SURFACE) out.surface = process.env.SOCIAL_SURFACE;
    return out;
}

function weekdayInChicago(now = new Date()) {
    const day = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Chicago',
        weekday: 'short'
    }).format(now);
    return { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[day];
}

function resolveSurface(requested, scheduleCron) {
    const want = String(requested || 'auto').toLowerCase();
    if (want === 'feed' || want === 'story' || want === 'reel') return want;
    if (scheduleCron === '0 17 * * *') return 'story';
    if (scheduleCron === '0 22 * * *') return 'reel';
    return 'feed';
}

function resolveSlot(requested, surface) {
    const want = String(requested || 'auto').toLowerCase();
    if (want === 'openings' || want === 'lifestyle' || want === 'proof') return want;
    if (surface !== 'feed') return 'lifestyle';
    const wd = weekdayInChicago();
    if (wd === 6) return 'proof';
    return 'lifestyle';
}

function lastFeaturedListing(log, surface) {
    for (let i = log.posts.length - 1; i >= 0; i -= 1) {
        const row = log.posts[i];
        if (row.listingId && (!surface || row.surface === surface || row.slot === surface)) {
            return Number(row.listingId);
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

function listingForToday(log, todayYmd) {
    const today = log.posts.filter((p) => p.date === todayYmd && p.listingId);
    if (today.length) return Number(today[0].listingId);
    return pickListing(LISTING_IDS, lastFeaturedListing(log, 'feed'));
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

function publicMediaUrl(site, relPath) {
    const clean = relPath.replace(/^\//, '');
    if (clean.startsWith('images/')) {
        return `${site.baseUrl}/${clean}`;
    }
    return `${GITHUB_RAW}/${clean.split('/').map(encodeURIComponent).join('/')}`;
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

function usedQuotes(log) {
    return new Set(log.posts.map((p) => p.quoteKey).filter(Boolean));
}

function composeFromAsset(site, listing, asset, campaign, openings, quote) {
    const url = listingUrl(site, listing.id, campaign);
    const market = marketName(listing);
    const paras = [];
    if (quote) {
        paras.push(`"${quote.quote}" — ${quote.author}, on ${listing.title}.`);
    } else {
        paras.push(asset.hook);
        paras.push(...(asset.lines || []));
    }
    if (asset.surface === 'feed' && openings && openings.promotable && openings.promotable.length) {
        const labels = openings.promotable.slice(0, 3).map((r) => r.label).join('; ');
        paras.push(`Open nights: ${labels}.`);
    }
    paras.push(`${listing.title}. ${market}.`);
    paras.push(`Plan your stay → ${url}`);
    return joinCaption(paras);
}

function pickAsset(catalog, surface, listingId, used) {
    const pool = catalog.filter(
        (a) => a.surface === surface && Number(a.listingId) === Number(listingId) && isAvailable(a, used)
    );
    return pool[0] || null;
}

const GEN_HOOKS = {
    feed: [
        { hook: 'The view does the talking.', lines: ['Gulf-front, owner-hosted. The water stays in the frame.'] },
        { hook: 'This is the stay.', lines: ['A real home above the Gulf, not a hotel hallway.'] },
        { hook: 'Keep the balcony door open.', lines: ['Coffee, then the water. That is the morning.'] }
    ],
    story: [
        { hook: 'Nowhere you need to be.', lines: ['The Gulf is the itinerary.'] },
        { hook: 'Stay for this.', lines: ['Owner-hosted on Florida\'s Gulf Coast.'] },
        { hook: 'The Gulf is the amenity.', lines: ['Come back sandy.'] }
    ],
    reel: [
        { hook: 'Beach. Balcony. Repeat.', lines: ['Vacation does not need to be complicated.'] },
        { hook: 'Come inside.', lines: ['Then go straight to the water.'] },
        { hook: 'This could be your week.', lines: ['Owner-hosted. Gulf-front.'] }
    ]
};

function lodgingPrefixRe(listingId) {
    return Number(listingId) === 4 ? /^(tw[-_])/i : /^(ms[-_]|MS[-_]|MS[A-Z])/;
}

function catalogPaths(catalog) {
    const s = new Set();
    for (const a of catalog) {
        if (a.path) s.add(a.path);
        for (const src of a.sources || []) s.add(src);
    }
    return s;
}

function lodgingScore(rel) {
    const n = rel.toLowerCase();
    if (/bath|laundry/.test(n)) return 0;
    if (/gym|pickle|hottub/.test(n)) return 1;
    if (/kitchen|dining|bedroom|master|guest/.test(n)) return 2;
    if (/living|pool|outdoor|building/.test(n)) return 3;
    if (/balcony|gulf|beach|sunset|view|hero|coffee/.test(n)) return 4;
    return 2;
}

function listUnusedLodging(listingId, used, catalog) {
    const dir = path.join(ROOT, 'images', 'lodging');
    if (!fs.existsSync(dir)) return [];
    const prefix = lodgingPrefixRe(listingId);
    const taken = catalogPaths(catalog);
    return fs
        .readdirSync(dir)
        .filter((name) => /\.(jpe?g|png|webp)$/i.test(name))
        .filter((name) => prefix.test(name))
        .filter((name) => !/chatgpt|gmail|collections/i.test(name))
        .map((name) => `images/lodging/${name}`)
        .filter((rel) => !used.paths.has(rel) && !taken.has(rel))
        .sort((a, b) => lodgingScore(b) - lodgingScore(a) || a.localeCompare(b));
}

function generatedCopy(surface, seed) {
    const pool = GEN_HOOKS[surface] || GEN_HOOKS.feed;
    let h = 0;
    for (let i = 0; i < seed.length; i += 1) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
    return pool[h % pool.length];
}

function makeGeneratedAsset({ surface, listingId, relPath, sources, todayYmd }) {
    const stem = path.basename(relPath, path.extname(relPath)).toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const copy = generatedCopy(surface, relPath);
    return {
        id: `gen-${surface}-${listingId}-${stem}`,
        listingId: Number(listingId),
        surface,
        family: `gen-${stem}`,
        burns: (sources || []).map((src) => `gen-${path.basename(src, path.extname(src)).toLowerCase().replace(/[^a-z0-9]+/g, '-')}`),
        path: relPath,
        hook: copy.hook,
        lines: copy.lines,
        generated: true,
        generatedOn: todayYmd,
        sources: sources || [relPath]
    };
}

function proposeGenerated(catalog, surface, listingId, used, todayYmd) {
    const unused = listUnusedLodging(listingId, used, catalog);
    if (surface === 'feed' || surface === 'story') {
        if (!unused.length) return null;
        const rel = unused[0];
        return {
            asset: makeGeneratedAsset({ surface, listingId, relPath: rel, todayYmd }),
            sources: [rel]
        };
    }
    if (unused.length < 2) return null;
    const sources = unused.slice(0, 3);
    const name = `reel-auto-${listingId}-${todayYmd.replace(/-/g, '')}`;
    const relPath = `docs/social/schedule-ready/reels/${name}.mp4`;
    return {
        asset: makeGeneratedAsset({ surface, listingId, relPath, sources, todayYmd }),
        sources
    };
}

function lastUsedIndex(log, pathRel) {
    for (let i = log.posts.length - 1; i >= 0; i -= 1) {
        const p = log.posts[i];
        if (p.photoRel === pathRel || p.videoRel === pathRel || p.imageUrl && p.imageUrl.endsWith(pathRel)) {
            return i;
        }
    }
    return -1;
}

function recycleAsset(catalog, surface, listingId, log, todayYmd) {
    const pool = catalog.filter(
        (a) => a.surface === surface && Number(a.listingId) === Number(listingId)
    );
    if (!pool.length) return null;
    const ranked = pool
        .map((asset) => {
            const idx = lastUsedIndex(log, asset.path);
            const lastDate = idx >= 0 ? log.posts[idx].date : '1970-01-01';
            return { asset, idx, lastDate };
        })
        .filter((row) => row.lastDate !== todayYmd)
        .sort((a, b) => {
            if (a.lastDate !== b.lastDate) return a.lastDate < b.lastDate ? -1 : 1;
            return a.idx - b.idx;
        });
    return ranked[0] ? ranked[0].asset : pool[0];
}

function resolveAsset({ catalog, surface, listingId, used, log, todayYmd }) {
    const unused = pickAsset(catalog, surface, listingId, used);
    if (unused) return { asset: unused, origin: 'catalog', sources: [] };

    const generated = proposeGenerated(catalog, surface, listingId, used, todayYmd);
    if (generated) {
        return { asset: generated.asset, origin: 'generate', sources: generated.sources };
    }

    const recycled = recycleAsset(catalog, surface, listingId, log, todayYmd);
    if (recycled) return { asset: recycled, origin: 'recycle', sources: [] };

    return null;
}

function writeCatalog(assets) {
    const raw = fs.existsSync(CATALOG_FILE) ? JSON.parse(fs.readFileSync(CATALOG_FILE, 'utf8')) : { repo: 'SimoneKhalilFL/Serenity', assets: [] };
    raw.assets = assets;
    fs.writeFileSync(CATALOG_FILE, `${JSON.stringify(raw, null, 2)}\n`, 'utf8');
}

function persistGeneratedAsset(catalog, asset) {
    if (catalog.some((a) => a.id === asset.id || a.path === asset.path)) return catalog;
    catalog.push(asset);
    writeCatalog(catalog);
    return catalog;
}

function generateReelFile(name, sources) {
    const script = path.join(__dirname, 'generate-reels.py');
    const args = [script, '--from', name, ...sources.map((rel) => path.join(ROOT, rel))];
    let result = spawnSync('python', args, { encoding: 'utf8' });
    if (result.error && result.error.code === 'ENOENT') {
        result = spawnSync('python3', args, { encoding: 'utf8' });
    }
    if (result.status !== 0) {
        const err = (result.stderr || result.stdout || result.error && result.error.message || 'ffmpeg/python failed').slice(-1500);
        throw new Error(`Reel generate failed for ${name}: ${err}`);
    }
    const dest = path.join(ROOT, 'docs', 'social', 'schedule-ready', 'reels', `${name}.mp4`);
    if (!fs.existsSync(dest)) throw new Error(`Reel generate did not write ${dest}`);
    return dest;
}

function inventoryLeft(catalog, used) {
    const out = { feed: 0, story: 0, reel: 0 };
    for (const a of catalog) {
        if (isAvailable(a, used)) out[a.surface] += 1;
    }
    return out;
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

async function publishFacebookPhoto(meta, imageUrl, caption) {
    return graphPost(graphUrl(meta.graphVersion, meta.pageId, 'photos'), {
        url: imageUrl,
        caption,
        access_token: meta.token
    });
}

async function publishFacebookStory(meta, imageUrl) {
    const photo = await graphPost(graphUrl(meta.graphVersion, meta.pageId, 'photos'), {
        url: imageUrl,
        published: 'false',
        access_token: meta.token
    });
    const photoId = photo.id || photo.post_id;
    if (!photoId) throw new Error('Facebook unpublished photo missing id');
    return graphPost(graphUrl(meta.graphVersion, meta.pageId, 'photo_stories'), {
        photo_id: photoId,
        access_token: meta.token
    });
}

async function publishFacebookVideo(meta, videoUrl, caption) {
    return graphPost(graphUrl(meta.graphVersion, meta.pageId, 'videos'), {
        file_url: videoUrl,
        description: caption,
        access_token: meta.token
    });
}

async function waitForIgContainer(meta, creationId, tries = 30) {
    const url = `https://graph.facebook.com/${meta.graphVersion}/${creationId}`;
    for (let i = 0; i < tries; i += 1) {
        const status = await graphGet(url, {
            fields: 'status_code,status',
            access_token: meta.token
        });
        if (status.status_code === 'FINISHED') return;
        if (status.status_code === 'ERROR') {
            throw new Error(`Instagram container error: ${status.status || 'unknown'}`);
        }
        await new Promise((r) => setTimeout(r, 3000));
    }
    throw new Error('Instagram container timed out');
}

async function publishInstagramMedia(meta, fields) {
    const created = await graphPost(graphUrl(meta.graphVersion, meta.igUserId, 'media'), {
        ...fields,
        access_token: meta.token
    });
    await waitForIgContainer(meta, created.id);
    return graphPost(graphUrl(meta.graphVersion, meta.igUserId, 'media_publish'), {
        creation_id: created.id,
        access_token: meta.token
    });
}

function buildPost({ site, slot, surface, todayYmd, log, catalog, used }) {
    const month = todayYmd.slice(0, 7);
    const alreadyToday = log.posts.some((p) => {
        if (p.date !== todayYmd) return false;
        const postedSurface = p.surface || 'feed';
        return postedSurface === surface;
    });
    if (alreadyToday) {
        return { skip: true, reason: `Already posted ${surface} for ${todayYmd}` };
    }
    const listingId = listingForToday(log, todayYmd);
    const listing = propertyById(site, listingId);
    const openingsRows = computePortfolioOpenings(LISTING_IDS, todayYmd);
    const openings = openingsRows.find((r) => r.listingId === listingId) || { promotable: [] };

    let effectiveSlot = slot;
    if (slot === 'openings' && (!openings.promotable || !openings.promotable.length)) {
        effectiveSlot = 'lifestyle';
    }

    const includeOpenings = effectiveSlot !== 'proof'
        && surface === 'feed'
        && openings.promotable
        && openings.promotable.length > 0;

    const resolved = resolveAsset({ catalog, surface, listingId, used, log, todayYmd });
    if (!resolved) {
        return {
            skip: true,
            reason: `No ${surface} media for listing ${listingId} — catalog empty, nothing to generate, nothing to recycle.`
        };
    }
    const asset = resolved.asset;
    if (resolved.origin === 'generate' && !catalog.some((a) => a.id === asset.id || a.path === asset.path)) {
        catalog.push(asset);
    }

    const campaign = `${surface}-${effectiveSlot}-${month}`;
    let quote = null;
    let quoteKey = null;
    if (effectiveSlot === 'proof' && surface === 'feed') {
        const seen = usedQuotes(log);
        const quotes = fiveStarQuotes(site, listingId).filter((q) => !seen.has(`${listingId}:${q.quote}`));
        if (quotes.length) {
            quote = quotes[0];
            quoteKey = `${listingId}:${quote.quote}`;
        }
    }

    const caption = composeFromAsset(
        site,
        listing,
        asset,
        campaign,
        includeOpenings ? openings : { promotable: [] },
        quote
    );
    assertCaptionSafe(caption);

    const mediaUrl = publicMediaUrl(site, asset.path);
    const fingerprint = resolved.origin === 'recycle'
        ? `${surface}|${asset.id}|${asset.path}|recycle|${todayYmd}`
        : `${surface}|${asset.id}|${asset.path}`;

    return {
        skip: false,
        origin: resolved.origin,
        sources: resolved.sources || [],
        slot: effectiveSlot,
        requestedSlot: slot,
        surface,
        listingId,
        propertyName: listing.title,
        caption,
        imageUrl: asset.surface === 'reel' ? null : mediaUrl,
        videoUrl: asset.surface === 'reel' ? mediaUrl : null,
        photoRel: asset.surface === 'reel' ? null : asset.path,
        videoRel: asset.surface === 'reel' ? asset.path : null,
        assetId: asset.id,
        family: asset.family,
        burns: assetKeys(asset),
        fingerprint,
        campaign,
        quoteKey,
        openings: includeOpenings ? openings.promotable.map((r) => r.label) : [],
        asset
    };
}

function printDraft(draft) {
    console.log(`Surface: ${draft.surface}`);
    console.log(`Origin: ${draft.origin || 'catalog'}`);
    if (draft.sources && draft.sources.length) console.log(`Sources: ${draft.sources.join(', ')}`);
    console.log(`Slot: ${draft.requestedSlot} → ${draft.slot}`);
    console.log(`Property: ${draft.propertyName} (${draft.listingId})`);
    console.log(`Asset: ${draft.assetId}  family=${draft.family}`);
    console.log(`Media: ${draft.photoRel || draft.videoRel}`);
    console.log(`URL: ${draft.imageUrl || draft.videoUrl}`);
    if (draft.openings.length) console.log(`Openings: ${draft.openings.join('; ')}`);
    console.log('--- caption ---');
    console.log(draft.caption);
    console.log('---------------');
}

function planDays(days, site, catalog, log, used) {
    const rows = [];
    const simLog = { posts: log.posts.map((p) => ({ ...p })) };
    const simUsed = {
        paths: new Set(used.paths),
        families: new Set(used.families)
    };
    const today = chicagoTodayYmd();
    for (let i = 0; i < days; i += 1) {
        const dt = new Date(`${today}T12:00:00Z`);
        dt.setUTCDate(dt.getUTCDate() + i);
        const ymd = dt.toISOString().slice(0, 10);
        const dayPosts = [];
        for (const surface of ['feed', 'story', 'reel']) {
            const slot = resolveSlot('auto', surface);
            const draft = buildPost({
                site,
                slot,
                surface,
                todayYmd: ymd,
                log: simLog,
                catalog,
                used: simUsed
            });
            if (draft.skip) {
                dayPosts.push({ surface, skip: draft.reason });
                continue;
            }
            markUsed(simUsed, draft.asset);
            simLog.posts.push({
                date: ymd,
                surface,
                listingId: draft.listingId,
                photoRel: draft.photoRel,
                videoRel: draft.videoRel,
                family: draft.family,
                burns: draft.burns,
                quoteKey: draft.quoteKey
            });
            dayPosts.push({
                surface,
                origin: draft.origin,
                property: draft.propertyName,
                asset: draft.assetId,
                media: draft.photoRel || draft.videoRel,
                openings: draft.openings
            });
        }
        rows.push({ date: ymd, posts: dayPosts });
    }
    return rows;
}

async function publishDraft(meta, draft) {
    const result = {
        facebookPostId: null,
        instagramMediaId: null,
        instagramError: null,
        facebookError: null
    };

    if (draft.surface === 'feed') {
        const fb = await publishFacebookPhoto(meta, draft.imageUrl, draft.caption);
        result.facebookPostId = fb.post_id || fb.id || null;
        if (meta.igUserId) {
            const ig = await publishInstagramMedia(meta, {
                image_url: draft.imageUrl,
                caption: draft.caption
            });
            result.instagramMediaId = ig.id || null;
        } else {
            result.instagramError = 'META_IG_USER_ID not set';
        }
        return result;
    }

    if (draft.surface === 'story') {
        try {
            const fb = await publishFacebookStory(meta, draft.imageUrl);
            result.facebookPostId = fb.post_id || fb.id || null;
        } catch (err) {
            result.facebookError = err.message;
        }
        if (meta.igUserId) {
            const ig = await publishInstagramMedia(meta, {
                image_url: draft.imageUrl,
                media_type: 'STORIES'
            });
            result.instagramMediaId = ig.id || null;
        } else {
            result.instagramError = 'META_IG_USER_ID not set';
        }
        if (!result.facebookPostId && !result.instagramMediaId) {
            throw new Error(`Story failed on both channels. FB: ${result.facebookError || 'none'} IG: ${result.instagramError || 'none'}`);
        }
        return result;
    }

    const fb = await publishFacebookVideo(meta, draft.videoUrl, draft.caption);
    result.facebookPostId = fb.id || fb.post_id || null;
    if (meta.igUserId) {
        const ig = await publishInstagramMedia(meta, {
            video_url: draft.videoUrl,
            media_type: 'REELS',
            caption: draft.caption,
            share_to_feed: 'true'
        });
        result.instagramMediaId = ig.id || null;
    } else {
        result.instagramError = 'META_IG_USER_ID not set';
    }
    return result;
}

async function main() {
    const args = parseArgs(process.argv.slice(2));
    const enabled = String(process.env.SOCIAL_POST_ENABLED || 'true').toLowerCase() !== 'false';
    const todayYmd = chicagoTodayYmd();
    const site = loadSite();
    const log = loadLog();
    const catalog = loadCatalog();
    const usedFile = loadUsed();
    const used = usedFromHistory(usedFile, log);

    if (args.planDays > 0) {
        const plan = planDays(args.planDays, site, catalog, log, used);
        for (const day of plan) {
            console.log(`\n${day.date}`);
            for (const p of day.posts) {
                if (p.skip) {
                    console.log(`  ${p.surface}: SKIP ${p.skip}`);
                } else {
                    const open = p.openings && p.openings.length ? ` | openings ${p.openings.join('; ')}` : '';
                    const origin = p.origin && p.origin !== 'catalog' ? ` [${p.origin}]` : '';
                    console.log(`  ${p.surface}: ${p.property} — ${p.asset} — ${p.media}${origin}${open}`);
                }
            }
        }
        const left = inventoryLeft(catalog, used);
        console.log(`\nUnused now: feed ${left.feed}, story ${left.story}, reel ${left.reel}`);
        return;
    }

    const surface = resolveSurface(args.surface, process.env.SOCIAL_SCHEDULE_CRON || '');
    const slot = resolveSlot(args.slot, surface);
    const draft = buildPost({ site, slot, surface, todayYmd, log, catalog, used });

    if (draft.skip) {
        console.log(`SKIP: ${draft.reason}`);
        return;
    }

    printDraft(draft);
    const left = inventoryLeft(catalog, used);
    console.log(`Unused remaining after this pick: feed ${left.feed - (surface === 'feed' ? 1 : 0)}, story ${left.story - (surface === 'story' ? 1 : 0)}, reel ${left.reel - (surface === 'reel' ? 1 : 0)}`);

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

    const already = draft.origin !== 'recycle' && log.posts.some((p) => p.fingerprint === draft.fingerprint || p.assetId === draft.assetId);
    if (already) {
        console.log(`SKIP: already posted asset ${draft.assetId}`);
        return;
    }

    if (draft.origin === 'generate' && draft.surface === 'reel') {
        const name = path.basename(draft.videoRel, '.mp4');
        console.log(`Generating Reel ${name} from ${draft.sources.join(', ')}`);
        try {
            generateReelFile(name, draft.sources);
            persistGeneratedAsset(catalog, draft.asset);
        } catch (err) {
            console.error(`Generate failed, recycling instead: ${err.message}`);
            const recycled = recycleAsset(catalog, draft.surface, draft.listingId, log, todayYmd);
            if (!recycled) throw err;
            draft.origin = 'recycle';
            draft.asset = recycled;
            draft.assetId = recycled.id;
            draft.family = recycled.family;
            draft.burns = assetKeys(recycled);
            draft.photoRel = recycled.surface === 'reel' ? null : recycled.path;
            draft.videoRel = recycled.surface === 'reel' ? recycled.path : null;
            draft.imageUrl = recycled.surface === 'reel' ? null : publicMediaUrl(site, recycled.path);
            draft.videoUrl = recycled.surface === 'reel' ? publicMediaUrl(site, recycled.path) : null;
            draft.fingerprint = `${draft.surface}|${recycled.id}|${recycled.path}|recycle|${todayYmd}`;
            draft.caption = composeFromAsset(
                site,
                propertyById(site, draft.listingId),
                recycled,
                draft.campaign,
                draft.openings.length ? { promotable: draft.openings.map((label) => ({ label })) } : { promotable: [] },
                null
            );
            assertCaptionSafe(draft.caption);
            printDraft(draft);
        }
    } else if (draft.origin === 'generate') {
        persistGeneratedAsset(catalog, draft.asset);
    }

    const published = await publishDraft(meta, draft);
    console.log(`Facebook: ${published.facebookPostId || published.facebookError || 'none'}`);
    if (published.instagramMediaId) console.log(`Instagram: ${published.instagramMediaId}`);
    if (published.instagramError) console.error(`Instagram note: ${published.instagramError}`);

    const result = {
        date: todayYmd,
        postedAt: new Date().toISOString(),
        surface: draft.surface,
        slot: draft.slot,
        requestedSlot: draft.requestedSlot,
        listingId: draft.listingId,
        propertyName: draft.propertyName,
        assetId: draft.assetId,
        family: draft.family,
        burns: draft.burns,
        fingerprint: draft.fingerprint,
        campaign: draft.campaign,
        imageUrl: draft.imageUrl,
        videoUrl: draft.videoUrl,
        photoRel: draft.photoRel,
        videoRel: draft.videoRel,
        caption: draft.caption,
        quoteKey: draft.quoteKey,
        openings: draft.openings,
        origin: draft.origin,
        sources: draft.sources,
        facebookPostId: published.facebookPostId,
        facebookError: published.facebookError,
        instagramMediaId: published.instagramMediaId,
        instagramError: published.instagramError
    };

    log.posts.push(result);
    writeLog(log);
    markUsed(used, draft.asset);
    writeUsed({ paths: [...used.paths], families: [...used.families] });
    console.log(`Logged ${path.relative(ROOT, LOG_FILE)}`);
}

module.exports = {
    buildPost,
    resolveSlot,
    resolveSurface,
    assertCaptionSafe,
    pickAsset,
    resolveAsset,
    planDays
};

if (require.main === module) {
    main().catch((err) => {
        console.error(err);
        process.exit(1);
    });
}
