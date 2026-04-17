/**
 * Append ?v=<deploy-stamp> to styles.css and app.js references in HTML files so a
 * new deploy invalidates stale browser caches without waiting for users to hard-refresh.
 *
 * Stamp priority:
 *   1. GITHUB_SHA (set by GitHub Actions, short-form) — unique per deploy
 *   2. process.env.DEPLOY_STAMP — manual override
 *   3. Date().toISOString() prefix YYYYMMDDHHmm — local dev fallback
 *
 * Usage: npm run cache-bust (runs in Deploy to GitHub Pages workflow).
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const TARGETS = ['styles.css', 'app.js', 'config.js'];
const HTML_FILES = ['index.html', 'privacy.html', 'terms.html', '404.html'];

function deployStamp() {
    const sha = (process.env.GITHUB_SHA || '').trim();
    if (sha) return sha.slice(0, 10);
    if (process.env.DEPLOY_STAMP) return String(process.env.DEPLOY_STAMP).trim();
    const d = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    return `${d.getUTCFullYear()}${pad(d.getUTCMonth() + 1)}${pad(d.getUTCDate())}${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}`;
}

function bustOne(html, file, stamp) {
    // Match href="styles.css", href="./styles.css", src="app.js", etc. Preserve any existing ?query; replace or append v=.
    const re = new RegExp(`((?:href|src)=\")((?:\\./)?${file.replace(/\./g, '\\.')})(\\?[^"]*)?(\")`, 'g');
    return html.replace(re, (_m, attr, pathStr, query, end) => {
        if (query) {
            const q = query.replace(/([?&])v=[^&]*/g, '$1').replace(/[?&]$/, '');
            const sep = q.endsWith('?') || q === '' ? (q ? '' : '?') : '&';
            return `${attr}${pathStr}${q}${sep}v=${stamp}${end}`;
        }
        return `${attr}${pathStr}?v=${stamp}${end}`;
    });
}

function main() {
    const stamp = deployStamp();
    let totalChanges = 0;

    for (const htmlFile of HTML_FILES) {
        const p = path.join(ROOT, htmlFile);
        if (!fs.existsSync(p)) continue;
        let html = fs.readFileSync(p, 'utf8');
        const before = html;
        for (const t of TARGETS) {
            html = bustOne(html, t, stamp);
        }
        if (html !== before) {
            fs.writeFileSync(p, html, 'utf8');
            totalChanges++;
            console.log(`Stamped ${htmlFile} with v=${stamp}`);
        }
    }

    console.log(`Cache-bust complete: ${totalChanges} file(s) updated, stamp=${stamp}`);
}

main();
