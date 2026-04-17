/**
 * Generate sitemap.xml from PROPERTIES in config.js so listing URLs stay in sync.
 *
 * - Includes homepage (SITE_BASE_URL) and one URL per property (/?listing=<id>).
 * - lastmod is the file's current UTC date (sitemaps need at most day precision).
 * - Commented-out properties are simply not in PROPERTIES, so they are excluded.
 *
 * Usage: npm run generate-sitemap (also runs in Deploy to GitHub Pages workflow).
 */

const fs = require('fs');
const path = require('path');

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

function main() {
    if (!SITE_BASE_URL || typeof SITE_BASE_URL !== 'string') {
        throw new Error('SITE_BASE_URL missing from config.js');
    }
    if (!Array.isArray(PROPERTIES)) {
        throw new Error('PROPERTIES missing or not an array in config.js');
    }

    const base = SITE_BASE_URL.replace(/\/$/, '');
    const lastmod = todayYmd();

    const urls = [];
    urls.push({ loc: `${base}/`, changefreq: 'weekly', priority: '1.0', lastmod });

    for (const p of PROPERTIES) {
        if (!p || typeof p.id === 'undefined') continue;
        urls.push({
            loc: `${base}/?listing=${encodeURIComponent(p.id)}`,
            changefreq: 'weekly',
            priority: '0.9',
            lastmod
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
    console.log(`Wrote ${path.relative(ROOT, outPath)} (${urls.length} urls: 1 home + ${urls.length - 1} listings)`);
}

main();
