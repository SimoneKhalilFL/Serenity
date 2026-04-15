import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const configPath = path.join(__dirname, '..', 'config.js');

const failed = `090f0877.jpg,0e0a0d67.jpg,0ec9b11c.jpg,117f441c.jpg,1b519b28.jpg,2bec6699.jpg,3c584155.jpg,3c716954.jpg,3e63f938.jpg,472c2fe5.jpg,5c293fa8.jpg,6f7e6d52.jpg,719448c2.jpg,7aa056fb.jpg,7b54e981.jpg,81f8bb9b.jpg,90-78ccf3bc.jpg,9157ff48.jpg,918021c5.jpg,924c0c7c.jpg,998cec71.jpg,a24ebfb0.jpg,b3b13e60.jpg,be96f548.jpg,d2843323.jpg,d44bfb2a.jpg,d548880b.jpg,d7fbd137.jpg,dff8a87a.jpg,e527901f.jpg,fb52c712.jpg,ff37bf77.jpg`.split(',');

const ok = `02c6975d.jpg,130850e8.jpg,145de5db.jpg,23712c93.jpg,29feb307.jpg,2e26ea7e.jpg,3ec14d3a.jpg,4c733aa2.jpg,523b06b4.jpg,53fc2fa5.jpg,60f18eb1.jpg,64995824.jpg,651d5007.jpg,73fcfcbf.jpg,76a76394.jpg,83debb6c.jpg,84b5d288.jpg,86666fbd.jpg,873e4db7.jpg,8faf312a.jpg,90-12d3aab3.jpg,90-dd9eff64.jpg,98a48f5c.jpg,a3ede817.jpg,be8d0080.jpg,c8091c0a.jpg,ca39c448.jpg,d6bf8bed.jpg,e6b37388.jpg,fd026101.jpg,ffced2f9.jpg`.split(',');

let text = fs.readFileSync(configPath, 'utf8');
let n = 0;
failed.forEach((bad, i) => {
  const good = ok[i % ok.length];
  if (bad === good) return;
  const re = new RegExp(`46259605/${bad.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'g');
  const before = text;
  text = text.replace(re, `46259605/${good}`);
  if (text !== before) n++;
});
fs.writeFileSync(configPath, text);
console.log('Replacements applied:', n);
