/**
 * Generate 1200x630 Open Graph preview cards for the homepage and each
 * active property. Output: images/og/default.jpg, images/og/listing-<id>.jpg.
 *
 * Composites the property's cover photo with a dark gradient overlay and a
 * white title + subtitle block. Meant to run at deploy time (and locally
 * via `npm run generate-og-images`) so social previews on
 * Facebook / Messenger / WhatsApp / LinkedIn / Twitter look branded.
 *
 * Dependencies: sharp (devDependency).
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const ROOT = path.join(__dirname, '..');
const { PROPERTIES } = require(path.join(ROOT, 'config.js'));

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;
const OUT_DIR = path.join(ROOT, 'images', 'og');
const HOME_BG_REL = 'images/lodging/tw-01-beach-view.jpg';

function escapeXml(s) {
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

function getFirstImage(images) {
    if (Array.isArray(images)) return images[0] || null;
    if (images && typeof images === 'object') {
        for (const k of Object.keys(images)) {
            const list = images[k];
            if (Array.isArray(list) && list.length) return list[0];
        }
    }
    return null;
}

function getCoverImagePath(property) {
    if (property && typeof property.coverImage === 'string' && property.coverImage) {
        return property.coverImage;
    }
    return getFirstImage(property ? property.images : null);
}

/** Split a title into up to maxLines lines of <=maxCharsPerLine chars, on word
 *  boundaries. Overflow beyond maxLines is merged into the last line and
 *  truncated with an ellipsis if it exceeds the width. */
function wrapTitle(text, maxCharsPerLine, maxLines) {
    const words = String(text).trim().split(/\s+/);
    const lines = [];
    let current = '';
    for (const word of words) {
        if (!current) { current = word; continue; }
        const candidate = current + ' ' + word;
        if (candidate.length <= maxCharsPerLine) {
            current = candidate;
        } else {
            lines.push(current);
            current = word;
        }
    }
    if (current) lines.push(current);
    if (lines.length <= maxLines) return lines;
    const head = lines.slice(0, maxLines - 1);
    const tail = lines.slice(maxLines - 1).join(' ');
    const truncatedTail = tail.length > maxCharsPerLine
        ? tail.slice(0, Math.max(0, maxCharsPerLine - 1)).trimEnd() + '…'
        : tail;
    return [...head, truncatedTail];
}

function buildOverlaySVG({ titleLines, subtitle, tag, brand }) {
    const fontStack = "Inter, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif";
    const titleStartY = 350 + (titleLines.length === 1 ? 40 : 0);
    const titleTSpans = titleLines
        .map((line, i) => `<tspan x="64" dy="${i === 0 ? 0 : 84}">${escapeXml(line)}</tspan>`)
        .join('');
    const tagChip = tag
        ? `<g transform="translate(64, ${titleStartY + 84 * titleLines.length + 34})">
               <rect width="${Math.max(220, 18 + tag.length * 11)}" height="42" rx="21" ry="21" fill="#0EA5E9"/>
               <text x="${Math.max(110, 9 + tag.length * 5.5)}" y="28" text-anchor="middle" font-family="${fontStack}" font-size="20" font-weight="600" fill="#FFFFFF" letter-spacing="0.5">${escapeXml(tag)}</text>
           </g>`
        : '';

    return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
    <defs>
        <linearGradient id="shade" x1="0" y1="1" x2="0" y2="0">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.82"/>
            <stop offset="55%" stop-color="#000000" stop-opacity="0.45"/>
            <stop offset="100%" stop-color="#000000" stop-opacity="0.05"/>
        </linearGradient>
        <linearGradient id="leftShade" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stop-color="#000000" stop-opacity="0.55"/>
            <stop offset="65%" stop-color="#000000" stop-opacity="0.00"/>
        </linearGradient>
    </defs>
    <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#leftShade)"/>
    <rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="url(#shade)"/>

    <g transform="translate(64, 56)">
        <circle cx="16" cy="16" r="13" fill="#F59E0B" opacity="0.95"/>
        <circle cx="16" cy="16" r="8" fill="#FBBF24"/>
        <text x="42" y="22" font-family="${fontStack}" font-size="22" font-weight="700" fill="#FFFFFF" letter-spacing="2.5">${escapeXml(brand)}</text>
    </g>

    <text font-family="${fontStack}" font-size="72" font-weight="700" fill="#FFFFFF">
        <tspan y="${titleStartY}">${titleTSpans}</tspan>
    </text>

    <text x="64" y="${titleStartY + 84 * titleLines.length + 6}" font-family="${fontStack}" font-size="32" font-weight="400" fill="#E5F3FB">${escapeXml(subtitle)}</text>

    ${tagChip}
</svg>`;
}

async function renderCard(bgAbsPath, outPath, { title, subtitle, tag, brand }) {
    if (!fs.existsSync(bgAbsPath)) {
        throw new Error(`Background image missing: ${path.relative(ROOT, bgAbsPath)}`);
    }
    const titleLines = wrapTitle(title, 26, 2);
    const overlaySvg = Buffer.from(buildOverlaySVG({ titleLines, subtitle, tag, brand }));

    const bgBuffer = await sharp(bgAbsPath)
        .resize(OG_WIDTH, OG_HEIGHT, { fit: 'cover', position: 'attention' })
        .toBuffer();

    await sharp(bgBuffer)
        .composite([{ input: overlaySvg, top: 0, left: 0 }])
        .jpeg({ quality: 82, mozjpeg: true })
        .toFile(outPath);

    const { size } = fs.statSync(outPath);
    console.log(`  ${path.relative(ROOT, outPath)}  (${Math.round(size / 1024)} KB)`);
}

async function main() {
    fs.mkdirSync(OUT_DIR, { recursive: true });
    console.log('Generating Open Graph preview cards (1200x630)...');

    await renderCard(
        path.join(ROOT, HOME_BG_REL),
        path.join(OUT_DIR, 'default.jpg'),
        {
            title: 'Gulf-Front Florida Stays',
            subtitle: 'Panama City Beach & Destin — by owner',
            tag: 'BOOK DIRECT · NO OTA FEES',
            brand: 'SERENITY RENTALS'
        }
    );

    for (const p of PROPERTIES) {
        const rel = getCoverImagePath(p);
        if (!rel) {
            console.warn(`  [skip] listing-${p.id}: no cover image`);
            continue;
        }
        const bgPath = path.join(ROOT, rel);
        const outPath = path.join(OUT_DIR, `listing-${p.id}.jpg`);
        const tag = [
            p.bedrooms ? `${p.bedrooms} BR` : null,
            p.bathrooms ? `${p.bathrooms} BA` : null,
            p.maxGuests ? `SLEEPS ${p.maxGuests}` : null
        ].filter(Boolean).join(' · ');
        const cardTitle = (typeof p.listingHeadline === 'string' && p.listingHeadline.trim())
            ? p.listingHeadline.replace(/\u2014/g, '—')
            : p.title;
        await renderCard(bgPath, outPath, {
            title: cardTitle,
            subtitle: p.location || '',
            tag: tag || 'BOOK DIRECT',
            brand: 'SERENITY RENTALS'
        });
    }

    console.log('OG card generation complete.');
}

main().catch((err) => {
    console.error('generate-og-images failed:', err && err.message ? err.message : err);
    process.exit(1);
});
