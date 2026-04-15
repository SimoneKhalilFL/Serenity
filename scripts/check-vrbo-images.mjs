import https from 'https';

const base = 'https://media.vrbo.com/lodging/47000000/46260000/46259700/46259605/';
const files = `02c6975d.jpg
090f0877.jpg
0e0a0d67.jpg
0ec9b11c.jpg
117f441c.jpg
130850e8.jpg
145de5db.jpg
1b519b28.jpg
23712c93.jpg
29feb307.jpg
2bec6699.jpg
2e26ea7e.jpg
3c584155.jpg
3c716954.jpg
3e63f938.jpg
3ec14d3a.jpg
472c2fe5.jpg
4c733aa2.jpg
523b06b4.jpg
53fc2fa5.jpg
5c293fa8.jpg
60f18eb1.jpg
64995824.jpg
651d5007.jpg
6f7e6d52.jpg
719448c2.jpg
73fcfcbf.jpg
76a76394.jpg
7aa056fb.jpg
7b54e981.jpg
81f8bb9b.jpg
83debb6c.jpg
84b5d288.jpg
86666fbd.jpg
873e4db7.jpg
8faf312a.jpg
90-12d3aab3.jpg
90-78ccf3bc.jpg
90-dd9eff64.jpg
9157ff48.jpg
918021c5.jpg
924c0c7c.jpg
98a48f5c.jpg
998cec71.jpg
a24ebfb0.jpg
a3ede817.jpg
b3b13e60.jpg
be8d0080.jpg
be96f548.jpg
c8091c0a.jpg
ca39c448.jpg
d2843323.jpg
d44bfb2a.jpg
d548880b.jpg
d6bf8bed.jpg
d7fbd137.jpg
dff8a87a.jpg
e527901f.jpg
e6b37388.jpg
fb52c712.jpg
fd026101.jpg
ff37bf77.jpg
ffced2f9.jpg`.trim().split(/\s+/);

function head(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve(res.statusCode);
      res.resume();
    });
    req.on('error', () => resolve(0));
    req.setTimeout(7000, () => {
      req.destroy();
      resolve(0);
    });
    req.end();
  });
}

const ok = [];
const fail = [];
for (const f of files) {
  const url = base + f;
  const code = await head(url);
  if (code === 200) ok.push(f);
  else fail.push(f);
  process.stdout.write(code === 200 ? '.' : 'x');
}
console.log('\nOK', ok.length, 'FAIL', fail.length);
console.log('FAILED:', fail.join(', '));
console.log('OK_LIST:', ok.join(','));
