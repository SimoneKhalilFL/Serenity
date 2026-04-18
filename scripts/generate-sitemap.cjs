/**
 * Generate sitemap.xml from PROPERTIES in config.js so listing URLs stay in sync.
 *
 * - Includes homepage (SITE_BASE_URL), one URL per property (/?listing=<id>),
 *   and static pages (privacy.html, terms.html) when present.
 * - lastmod uses the file's git mtime when available, otherwise today's UTC date.
 * - Commented-out properties are simply not in PROPERTIES, so they are excluded.
 *
 * Usage: npm run generate-sitemap (also runs in Deploy to GitHub Pages workflow).
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const { PROPERTIES, SITE_BASE_URL } = require(path.join(ROOT, 'config.js'));

function escapeXml(value) {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function todayYmd() {
    const d = new Date();
    const y = d.getUTCFullYear();
    const m = String(d.getUTCMonth() + 1).padStart(2, '0');
    const day = String(d.getUTCDate()).padStart(2, '0');
    return `${y}-${m}-${day}`;
}

function lastCommitYmd(relPaths) {
    const files = (Array.isArray(relPaths) ? relPaths : [relPaths]).filter(Boolean);
    if (!files.length) return null;
    try {
        const out = execSync(`git log -1 --format=%cs -- ${files.map((f) => `"${f}"`).join(' ')}`, {
            cwd: ROOT,
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore']
        }).trim();
        return /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
    } catch (_) {
        return null;
    }
}

function main() {
    if (!SITE_BASE_URL || typeof SITE_BASE_URL !== 'string') {
        throw new Error('SITE_BASE_URL missing from config.js');
    }
    if (!Array.isArray(PROPERTIES)) {
        throw new Error('PROPERTIES missing or not an array in config.js');
    }

    const base = SITE_BASE_URL.replace(/\/$/, '');
    const today = todayYmd();

    // Listings share the freshness of index.html + config.js (whichever was touched most recently).
    const listingLastmod = lastCommitYmd(['index.html', 'config.js', 'app.js']) || today;
    const homeLastmod = listingLastmod;

    const urls = [];
    urls.push({ loc: `${base}/`, changefreq: 'weekly', priority: '1.0', lastmod: homeLastmod });

    for (const p of PROPERTIES) {
        if (!p || typeof p.id === 'undefined') continue;
        urls.push({
            loc: `${base}/?listing=${encodeURIComponent(p.id)}`,
            changefreq: 'weekly',
            priority: '0.9',
            lastmod: listingLastmod
        });
    }

    // Additional static pages. Any page that declares noindex in its head is
    // skipped so the sitemap does not contradict the page's own directive.
    const staticPages = [
        { file: 'privacy.html', priority: '0.3', changefreq: 'yearly' },
        { file: 'terms.html', priority: '0.3', changefreq: 'yearly' }
    ];
    for (const page of staticPages) {
        const absPath = path.join(ROOT, page.file);
        if (!fs.existsSync(absPath)) continue;
        const head = fs.readFileSync(absPath, 'utf8').slice(0, 4096);
        if (/<meta\s+name=["']robots["'][^>]*noindex/i.test(head)) continue;
        const mod = lastCommitYmd(page.file) || today;
        urls.push({
            loc: `${base}/${page.file}`,
            changefreq: page.changefreq,
            priority: page.priority,
            lastmod: mod
        });
    }

    const body = urls
        .map((u) => {
            return [
                '  <url>',
                `    <loc>${escapeXml(u.loc)}</loc>`,
                `    <lastmod>${u.lastmod}</lastmod>`,
                `    <changefreq>${u.changefreq}</changefreq>`,
                `    <priority>${u.priority}</priority>`,
                '  </url>'
            ].join('\n');
        })
        .join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;

    const outPath = path.join(ROOT, 'sitemap.xml');
    fs.writeFileSync(outPath, xml, 'utf8');
    const listingCount = PROPERTIES.filter((p) => p && typeof p.id !== 'undefined').length;
    const staticCount = urls.length - 1 - listingCount;
    console.log(`Wrote ${path.relative(ROOT, outPath)} (${urls.length} urls: 1 home + ${listingCount} listings + ${staticCount} static)`);
}

main();
