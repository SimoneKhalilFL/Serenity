/**
 * Inject the Microsoft Clarity project ID into HTML files at deploy time,
 * reading CLARITY_PROJECT_ID from the environment.
 *
 * Behavior:
 *   - ID set:    replace every __CLARITY_PROJECT_ID__ with the real ID.
 *   - ID unset:  strip the entire <!-- CLARITY_START --> … <!-- CLARITY_END -->
 *                block so no broken script tag ships. Clarity just doesn't load.
 *   - Never fails; analytics is optional infrastructure.
 *
 * Input hardening:
 *   CLARITY_PROJECT_ID may be set to either
 *     (a) the bare ID (e.g. "r7a8b9c0de"), or
 *     (b) the full <script>(function(c,l,a,r,i,t,y){…})(window,document,
 *         "clarity","script","r7a8b9c0de");</script> snippet Microsoft's
 *         dashboard shows under "Install tracking code".
 *   We extract the innermost ID from (b) and validate the result looks like a
 *   safe HTML/JS-literal value (lowercase alnum/dash/underscore, 6-32 chars).
 *   If it doesn't, we log a warning and strip the block so we never ship
 *   nested-script garbage that leaks as visible page text — same failure mode
 *   we hit with CLOUDFLARE_BEACON_TOKEN in April 2026.
 *
 * Usage:
 *   CLARITY_PROJECT_ID=abc123 node scripts/inject-clarity.cjs
 *   node scripts/inject-clarity.cjs    # strips the block (dev/local builds)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const STATIC_HTML_FILES = ['index.html', 'privacy.html', 'terms.html', '404.html'];
const PLACEHOLDER = '__CLARITY_PROJECT_ID__';
const BLOCK_RE = /[ \t]*<!--\s*CLARITY_START\s*-->[\s\S]*?<!--\s*CLARITY_END\s*-->\n?/g;

// Clarity project IDs are short lowercase alnum strings (typically 9-12 chars,
// e.g. "r7a8b9c0de"). Allow any URL-safe alnum/dash/underscore run of 6-32 chars
// to be forward-compatible. Rejects anything containing whitespace, quotes,
// angle brackets, parens, or semicolons — those are the characters that would
// break out of the "clarity","script","..." call if interpolated raw.
const BARE_ID_RE = /^[A-Za-z0-9_-]{6,32}$/;

// Tolerate the common copy/paste footgun: the full Clarity install snippet
// ...window, document, "clarity", "script", "abc123xyz")... Grab the last
// string literal passed into the IIFE (the project ID).
const EMBEDDED_ID_RE = /["']clarity["']\s*,\s*["']script["']\s*,\s*["']([A-Za-z0-9_-]{6,32})["']/i;

function extractId(raw) {
    const value = (raw || '').trim();
    if (!value) return '';
    // Fast path: already a bare ID.
    if (BARE_ID_RE.test(value)) return value;
    // Recover from full-snippet paste.
    const m = EMBEDDED_ID_RE.exec(value);
    if (m && m[1] && BARE_ID_RE.test(m[1])) {
        console.warn(`  CLARITY_PROJECT_ID looked like a full snippet — extracted bare ID (${m[1].length} chars).`);
        return m[1];
    }
    return '';
}

function discoverHtmlFiles() {
    // Process the known static pages, plus any listing-<id>.html share pages.
    const files = new Set(STATIC_HTML_FILES);
    for (const name of fs.readdirSync(ROOT)) {
        if (/^listing-\d+\.html$/i.test(name)) files.add(name);
    }
    return Array.from(files);
}

function main() {
    const rawEnv = process.env.CLARITY_PROJECT_ID || '';
    const rawId = extractId(rawEnv);
    const envPresent = rawEnv.trim().length > 0;
    const hasId = rawId.length > 0;
    if (envPresent && !hasId) {
        console.warn('  CLARITY_PROJECT_ID is set but did not parse as a valid project ID — stripping Clarity block. Set the secret to just the ID value (e.g. r7a8b9c0de from the Clarity dashboard), not the full <script> snippet.');
    }
    const mode = hasId ? 'inject' : 'strip';

    let updated = 0;
    const htmlFiles = discoverHtmlFiles();
    for (const rel of htmlFiles) {
        const abs = path.join(ROOT, rel);
        if (!fs.existsSync(abs)) continue;
        const before = fs.readFileSync(abs, 'utf8');
        let after;
        if (hasId) {
            if (!before.includes(PLACEHOLDER)) {
                console.log(`  ${rel}: no placeholder (already injected or block missing)`);
                continue;
            }
            after = before.split(PLACEHOLDER).join(rawId);
        } else {
            if (!BLOCK_RE.test(before)) {
                console.log(`  ${rel}: no CLARITY block to strip`);
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
    console.log(`Clarity: ${mode} -> ${updated} file(s) touched (id ${hasId ? 'present' : 'missing, block stripped'}).`);
}

main();
