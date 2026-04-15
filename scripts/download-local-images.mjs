/**
 * One-time: pull media.vrbo.com URLs from config.js, download to images/,
 * then rewrite config to use relative paths (images/lodging/<file>).
 */
import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import crypto from 'crypto';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const configPath = path.join(root, 'config.js');
const outDir = path.join(root, 'images', 'lodging');

function fetchBuffer(url) {
    return new Promise((resolve, reject) => {
        const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                return fetchBuffer(res.headers.location).then(resolve).catch(reject);
            }
            if (res.statusCode !== 200) {
                reject(new Error(`HTTP ${res.statusCode} ${url}`));
                return;
            }
            const chunks = [];
            res.on('data', (c) => chunks.push(c));
            res.on('end', () => resolve(Buffer.concat(chunks)));
        });
        req.on('error', reject);
        req.setTimeout(60000, () => {
            req.destroy();
            reject(new Error('timeout'));
        });
    });
}

function safeNameFromUrl(url, used) {
    const base = path.basename(new URL(url).pathname) || 'photo.jpg';
    const ext = path.extname(base) || '.jpg';
    const stem = path.basename(base, ext).replace(/[^a-zA-Z0-9._-]+/g, '-').slice(0, 80);
    let name = stem + ext;
    let n = 1;
    while (used.has(name)) {
        name = `${stem}-${n}${ext}`;
        n++;
    }
    used.add(name);
    return name;
}

async function main() {
    const text = fs.readFileSync(configPath, 'utf8');
    const urls = [...new Set((text.match(/https:\/\/media\.vrbo\.com\/[^"'`\s]+/g) || []))];
    console.log('Unique VRBO image URLs:', urls.length);

    fs.mkdirSync(outDir, { recursive: true });
    const used = new Set();
    const map = new Map();

    for (const url of urls) {
        const localName = safeNameFromUrl(url, used);
        const dest = path.join(outDir, localName);
        const rel = `images/lodging/${localName}`.replace(/\\/g, '/');
        if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
            console.log('skip (exists):', localName);
            map.set(url, rel);
            continue;
        }
        try {
            const buf = await fetchBuffer(url);
            fs.writeFileSync(dest, buf);
            console.log('ok', localName, buf.length);
            map.set(url, rel);
        } catch (e) {
            console.error('FAIL', url, e.message);
        }
    }

    let newText = text;
    for (const [url, rel] of map) {
        const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        newText = newText.replace(new RegExp(escaped, 'g'), rel);
    }

    fs.writeFileSync(configPath, newText);
    console.log('Updated', configPath);
}

main().catch((e) => {
    console.error(e);
    process.exit(1);
});
