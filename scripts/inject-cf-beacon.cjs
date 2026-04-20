/**
 * Inject the Cloudflare Web Analytics beacon token into HTML files at deploy
 * time, reading CLOUDFLARE_BEACON_TOKEN from the environment.
 *
 * Behavior:
 *   - token set:    replace every __CF_BEACON_TOKEN__ with the real token.
 *   - token unset:  strip the entire <!-- CF_BEACON_START --> … <!-- CF_BEACON_END --> block
 *                   so no broken script tag ships. Analytics just doesn't load.
 *   - Never fails; analytics is optional infrastructure.
 *
 * Usage:
 *   CLOUDFLARE_BEACON_TOKEN=xyz node scripts/inject-cf-beacon.cjs
 *   node scripts/inject-cf-beacon.cjs    # strips the block (dev/local builds)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const STATIC_HTML_FILES = ['index.html', 'privacy.html', 'terms.html', '404.html'];
const PLACEHOLDER = '__CF_BEACON_TOKEN__';
const BLOCK_RE = /[ \t]*<!--\s*CF_BEACON_START\s*-->[\s\S]*?<!--\s*CF_BEACON_END\s*-->\n?/g;

function discoverHtmlFiles() {
    // Always process the known static pages, then append any generated
    // listing-<id>.html share pages that exist at the repo root so they also
    // get the beacon (they embed the same CF_BEACON_START/END marker block).
    const files = new Set(STATIC_HTML_FILES);
    for (const name of fs.readdirSync(ROOT)) {
        if (/^listing-\d+\.html$/i.test(name)) files.add(name);
    }
    return Array.from(files);
}

function main() {
    const rawToken = (process.env.CLOUDFLARE_BEACON_TOKEN || '').trim();
    const hasToken = rawToken.length > 0;
    const mode = hasToken ? 'inject' : 'strip';

    let updated = 0;
    const htmlFiles = discoverHtmlFiles();
    for (const rel of htmlFiles) {
        const abs = path.join(ROOT, rel);
        if (!fs.existsSync(abs)) continue;
        const before = fs.readFileSync(abs, 'utf8');
        let after;
        if (hasToken) {
            if (!before.includes(PLACEHOLDER)) {
                console.log(`  ${rel}: no placeholder (already injected or block missing)`);
                continue;
            }
            after = before.split(PLACEHOLDER).join(rawToken);
        } else {
            if (!BLOCK_RE.test(before)) {
                console.log(`  ${rel}: no CF_BEACON block to strip`);
                BLOCK_RE.lastIndex = 0;
                continue;
            }
            BLOCK_RE.lastIndex = 0;
            after = before.replace(BLOCK_RE, '');
        }
        if (after !== before) {
            fs.writeFileSync(abs, after, 'utf8');
            updated += 1;
            console.log(`  ${rel}: ${mode}ed`);
        }
    }
    console.log(`CF beacon: ${mode} -> ${updated} file(s) touched (token ${hasToken ? 'present' : 'missing, block stripped'}).`);
}

main();
