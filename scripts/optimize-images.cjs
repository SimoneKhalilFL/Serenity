#!/usr/bin/env node
/**
 * Batch image optimizer.
 *
 * For each .jpg/.jpeg/.png/.webp under images/lodging matching a pattern:
 *   - Rotate by EXIF (so portrait photos stay portrait)
 *   - Resize longest side to MAX_DIM (preserves aspect ratio; no upscaling)
 *   - Re-encode as JPEG via mozjpeg at given quality
 *   - Replace the file; if input was PNG/WEBP, write a .jpg sibling and
 *     remove the original so paths become consistently .jpg
 *
 * Usage:
 *   node scripts/optimize-images.cjs [--pattern=<glob>] [--quality=80] [--max=2000] [--dry]
 *
 * Examples:
 *   node scripts/optimize-images.cjs --pattern=ms-*
 *   node scripts/optimize-images.cjs --pattern=ms-*.jpg --quality=85
 *   node scripts/optimize-images.cjs --dry
 */
'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const args = Object.fromEntries(
    process.argv.slice(2).map((a) => {
        const m = a.match(/^--([^=]+)=?(.*)$/);
        return m ? [m[1], m[2] === '' ? true : m[2]] : [a, true];
    })
);

const PATTERN = String(args.pattern || 'ms-*');
const QUALITY = Number(args.quality || 80);
const MAX_DIM = Number(args.max || 2000);
const DRY = Boolean(args.dry);
const ROOT = path.join(process.cwd(), 'images', 'lodging');

function patternToRegex(glob) {
    const esc = glob.replace(/[-\/\\^$+?.()|[\]{}]/g, '\\$&').replace(/\*/g, '.*');
    return new RegExp('^' + esc + '$', 'i');
}
const rx = patternToRegex(PATTERN);

function listCandidates() {
    return fs
        .readdirSync(ROOT)
        .filter((f) => rx.test(f) && /\.(jpe?g|png|webp)$/i.test(f))
        .map((f) => path.join(ROOT, f));
}

const kb = (n) => Math.round(n / 1024);

async function optimize(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    const inputBuffer = fs.readFileSync(filePath);
    const before = inputBuffer.length;

    const out = await sharp(inputBuffer, { failOn: 'none' })
        .rotate()
        .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality: QUALITY, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toBuffer();

    const after = out.length;
    const isLossless = ext === '.png' || ext === '.webp';
    let outPath = filePath;
    if (isLossless) {
        outPath = filePath.replace(/\.(png|webp)$/i, '.jpg');
        if (fs.existsSync(outPath) && outPath !== filePath) {
            throw new Error(`Would overwrite existing file: ${outPath}`);
        }
    }

    // Guard: if re-encoding would grow a JPEG input, keep the original.
    // (Small/heavily-compressed JPEGs sometimes gain size from mozjpeg's baseline overhead.)
    const grew = after >= before;
    const skip = !isLossless && grew;

    if (!DRY && !skip) {
        fs.writeFileSync(outPath, out);
        if (isLossless && outPath !== filePath) {
            fs.unlinkSync(filePath);
        }
    }

    return {
        input: path.basename(filePath),
        output: path.basename(outPath),
        before,
        after: skip ? before : after,
        renamed: !skip && outPath !== filePath,
        skipped: skip
    };
}

(async () => {
    const files = listCandidates();
    if (!files.length) {
        console.error(`No files matched pattern '${PATTERN}' in ${ROOT}`);
        process.exit(2);
    }
    console.log(`Pattern: ${PATTERN}`);
    console.log(`Quality: ${QUALITY} | Max dim: ${MAX_DIM}px | Dry run: ${DRY}`);
    console.log(`Files:   ${files.length}`);
    console.log('-'.repeat(80));

    let totalBefore = 0;
    let totalAfter = 0;
    const renames = [];
    const failures = [];

    for (const f of files) {
        try {
            const r = await optimize(f);
            totalBefore += r.before;
            totalAfter += r.after;
            const pct = Math.round((1 - r.after / r.before) * 100);
            const tag = r.renamed ? ` [renamed -> ${r.output}]` : '';
            console.log(`  ${r.input.padEnd(32)} ${String(kb(r.before)).padStart(5)} KB -> ${String(kb(r.after)).padStart(5)} KB (-${pct}%)${tag}`);
            if (r.renamed) renames.push({ from: r.input, to: r.output });
        } catch (err) {
            failures.push({ file: path.basename(f), err: err.message });
            console.error(`  ${path.basename(f).padEnd(32)} FAILED: ${err.message}`);
        }
    }

    console.log('-'.repeat(80));
    const pct = totalBefore ? Math.round((1 - totalAfter / totalBefore) * 100) : 0;
    console.log(`Total before: ${kb(totalBefore)} KB`);
    console.log(`Total after:  ${kb(totalAfter)} KB`);
    console.log(`Saved:        ${kb(totalBefore - totalAfter)} KB (${pct}%)`);
    if (renames.length) {
        console.log(`\nRenamed (update config.js):`);
        for (const r of renames) console.log(`  ${r.from} -> ${r.to}`);
    }
    if (failures.length) {
        console.log(`\nFailures: ${failures.length}`);
        process.exit(1);
    }
})().catch((err) => {
    console.error(err);
    process.exit(1);
});
