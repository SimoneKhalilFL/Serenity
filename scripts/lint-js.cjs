/**
 * Run `node --check` on every tracked JS/CJS file (except node_modules).
 * Fast, dependency-free syntax validation before commit/push or in CI.
 */

const { execSync } = require('child_process');
const { spawnSync } = require('child_process');
const path = require('path');

// Docs/snippet files that are intentionally not valid top-level JS (e.g. bare object literal).
const IGNORE = new Set([
    'READY_TO_PASTE_CONFIG.js'
]);

function tracked() {
    try {
        const out = execSync('git ls-files -- "*.js" "*.cjs"', { encoding: 'utf8' });
        return out
            .split(/\r?\n/)
            .map((s) => s.trim())
            .filter(Boolean)
            .filter((f) => !f.startsWith('node_modules/'))
            .filter((f) => !IGNORE.has(f));
    } catch (e) {
        console.error('git ls-files failed; are you inside a git repo?', e.message);
        process.exit(2);
    }
}

function main() {
    const files = tracked();
    if (files.length === 0) {
        console.log('No JS files to check.');
        return;
    }
    let fail = 0;
    for (const f of files) {
        const r = spawnSync(process.execPath, ['--check', f], { stdio: 'inherit' });
        if (r.status !== 0) {
            console.error(`Syntax error in ${f}`);
            fail = 1;
        }
    }
    if (fail) {
        console.error(`\nlint:js failed. Fix the syntax errors above.`);
        process.exit(1);
    }
    console.log(`lint:js OK (${files.length} files).`);
}

main();
