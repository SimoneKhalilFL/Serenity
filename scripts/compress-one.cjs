#!/usr/bin/env node
/**
 * One-file JPEG compression test using sharp + mozjpeg.
 *
 * Usage:
 *   node scripts/compress-one.cjs <path-to-jpg> [quality=80]
 *
 * Overwrites the file in place. Original is preserved in git history.
 */
'use strict';

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
    const target = process.argv[2];
    const quality = Number(process.argv[3] || 80);

    if (!target) {
        console.error('Usage: node scripts/compress-one.cjs <file.jpg> [quality]');
        process.exit(2);
    }

    const abs = path.resolve(target);
    if (!fs.existsSync(abs)) {
        console.error(`File not found: ${abs}`);
        process.exit(2);
    }

    const MAX_DIM = Number(process.argv[4] || 2000);

    const inputBuffer = fs.readFileSync(abs);
    const beforeBytes = inputBuffer.length;
    const meta = await sharp(inputBuffer).metadata();

    const buffer = await sharp(inputBuffer, { failOn: 'none' })
        .rotate()
        .resize({ width: MAX_DIM, height: MAX_DIM, fit: 'inside', withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true, chromaSubsampling: '4:4:4' })
        .toBuffer();

    fs.writeFileSync(abs, buffer);
    const afterBytes = buffer.length;
    const outMeta = await sharp(buffer).metadata();
    console.log(`Resize:   max ${MAX_DIM}px (output ${outMeta.width} x ${outMeta.height})`);

    const kb = (n) => Math.round(n / 1024);
    const pct = Math.round((1 - afterBytes / beforeBytes) * 100);
    console.log(`File:     ${path.basename(abs)}`);
    console.log(`Dims:     ${meta.width} x ${meta.height}`);
    console.log(`Quality:  ${quality} (mozjpeg, 4:4:4)`);
    console.log(`Before:   ${kb(beforeBytes)} KB`);
    console.log(`After:    ${kb(afterBytes)} KB`);
    console.log(`Saved:    ${kb(beforeBytes - afterBytes)} KB (${pct}%)`);
}

main().catch((err) => {
    console.error(err);
    process.exit(1);
});
