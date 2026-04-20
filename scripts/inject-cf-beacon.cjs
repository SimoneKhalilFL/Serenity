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
 * Input hardening:
 *   CLOUDFLARE_BEACON_TOKEN may be set to either
 *     (a) the bare token (e.g. "1599185943244f0abe9776d5cbe2f467"), or
 *     (b) the full HTML snippet Cloudflare's dashboard shows under "Install the JavaScript snippet":
 *         <!-- Cloudflare Web Analytics --><script defer ... data-cf-beacon='{"token": "..."}'></script><!-- End Cloudflare Web Analytics -->
 *   We extract the bare token from (b) and validate the result looks like a safe
 *   HTML-attribute value (hex/alnum, no angle brackets or quotes). If it doesn't,
 *   we log a warning and strip the block so we never ship nested-script garbage
 *   that renders "}'> as visible page text.
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

// Accept the token Cloudflare actually gives you: typically a 32-char hex string,
// but allow any URL-safe alphanumeric/dash/underscore run of 8+ chars to be
// forward-compatible. Rejects anything containing whitespace, quotes, angle
// brackets, or JSON punctuation — those are the characters that would break out
// of the data-cf-beacon='{"token": "..."}' attribute if interpolated raw.
const BARE_TOKEN_RE = /^[A-Za-z0-9_-]{8,128}$/;
// Tolerate the common copy/paste footgun: the full <script data-cf-beacon='{"token": "..."}'></script>
// block. Find the first innermost token JSON and extract it.
const EMBEDDED_TOKEN_RE = /data-cf-beacon\s*=\s*['"]\s*\{\s*"token"\s*:\s*"([^"<>]+)"\s*\}\s*['"]/i;

function extractToken(raw) {
    const value = (raw || '').trim();
    if (!value) return '';
    // Fast path: already a bare token.
    if (BARE_TOKEN_RE.test(value)) return value;
    // Recover from full-snippet paste. Walk the regex in a loop so that if the
    // user somehow pasted a snippet-within-a-snippet (the exact bug this block
    // was added to repair), we keep drilling until we reach the innermost bare
    // token.
    let candidate = value;
    for (let i = 0; i < 5; i += 1) {
        const m = EMBEDDED_TOKEN_RE.exec(candidate);
        if (!m) break;
        candidate = m[1].trim();
    }
    if (candidate && candidate !== value && BARE_TOKEN_RE.test(candidate)) {
        console.warn(`  CLOUDFLARE_BEACON_TOKEN looked like a full snippet — extracted bare token (${candidate.length} chars).`);
        return candidate;
    }
    return '';
}

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
    const rawEnv = process.env.CLOUDFLARE_BEACON_TOKEN || '';
    const rawToken = extractToken(rawEnv);
    const envPresent = rawEnv.trim().length > 0;
    const hasToken = rawToken.length > 0;
    if (envPresent && !hasToken) {
        console.warn('  CLOUDFLARE_BEACON_TOKEN is set but did not parse as a valid token — stripping beacon block. Set the secret to just the token value (e.g. 1599185943244f0abe9776d5cbe2f467), not the full <script> snippet.');
    }
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
