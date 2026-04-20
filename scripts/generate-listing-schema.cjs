/**
 * Generate static homepage (Organization/WebSite/ItemList) + per-listing
 * JSON-LD (VacationRental + BreadcrumbList) and inject into index.html so
 * Googlebot sees complete structured data in the raw HTML (no JS render
 * required).
 *
 * Logic lives in scripts/lib/listing-schema.cjs and is shared with
 * scripts/generate-listing-pages.cjs so canonical URLs, descriptions, and
 * schema shape stay in sync across the homepage, per-listing share pages,
 * and app.js runtime output.
 *
 * Usage: npm run generate-listing-schema (also runs in Deploy to GitHub Pages workflow).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const {
    PROPERTIES,
    buildVacationRentalSchema,
    buildBreadcrumbSchema,
    buildHomepageGraph,
    serialize,
    safeJsonForScript
} = require('./lib/listing-schema.cjs');

const MARKER_START = '<!-- LISTINGS_SCHEMA_START -->';
const MARKER_END = '<!-- LISTINGS_SCHEMA_END -->';

function main() {
    if (!Array.isArray(PROPERTIES) || PROPERTIES.length === 0) {
        throw new Error('PROPERTIES missing or empty in config.js');
    }

    const htmlPath = path.join(ROOT, 'index.html');
    let html = fs.readFileSync(htmlPath, 'utf8');

    // 1. Populate the existing #site-schema-jsonld element with the homepage graph.
    //    We reuse the same element that app.js refreshHomepageJsonLd() overwrites at runtime
    //    so Googlebot sees the graph in raw HTML AND there is no duplicate ItemList on the page.
    const homeSchema = buildHomepageGraph();
    const homeJson = safeJsonForScript(serialize(homeSchema));
    const siteRe = /<script type="application\/ld\+json" id="site-schema-jsonld">[\s\S]*?<\/script>/;
    if (!siteRe.test(html)) {
        throw new Error('index.html is missing <script id="site-schema-jsonld"> — add it back so this script can populate it.');
    }
    html = html.replace(siteRe, `<script type="application/ld+json" id="site-schema-jsonld">${homeJson}</script>`);

    // 2. Inject per-listing VacationRental + BreadcrumbList blocks between the markers.
    const blocks = [];
    for (const p of PROPERTIES) {
        if (!p || typeof p.id === 'undefined') continue;
        const vr = buildVacationRentalSchema(p);
        const bc = buildBreadcrumbSchema(p);
        blocks.push(`<script type="application/ld+json" data-schema="listing-${p.id}">${safeJsonForScript(serialize(vr))}</script>`);
        blocks.push(`<script type="application/ld+json" data-schema="breadcrumb-${p.id}">${safeJsonForScript(serialize(bc))}</script>`);
    }

    const injected = `${MARKER_START}\n    ${blocks.join('\n    ')}\n    ${MARKER_END}`;

    if (!html.includes(MARKER_START) || !html.includes(MARKER_END)) {
        throw new Error(`index.html is missing ${MARKER_START} and/or ${MARKER_END} markers. Add them inside <head> so this script knows where to inject.`);
    }
    const re = new RegExp(`${MARKER_START}[\\s\\S]*?${MARKER_END}`);
    html = html.replace(re, injected);

    fs.writeFileSync(htmlPath, html, 'utf8');

    console.log(`Injected static JSON-LD: 1 homepage graph (in #site-schema-jsonld) + ${PROPERTIES.length} listings × 2 (VacationRental + BreadcrumbList).`);
}

main();
