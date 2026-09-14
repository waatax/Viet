import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

async function fetchAudio(text) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });
    if (res.ok) {
      const buf = await res.arrayBuffer();
      if (buf.byteLength > 200) return Buffer.from(buf);
    }
  } catch (e) {}
  return null;
}

const extraPhrases = [
  'Vâng ạ',
  'bốn mươi lăm',
  'một trăm nghìn đồng',
  'một trăm ngàn đồng',
  'hai triệu rưỡi'
];

for (const p of extraPhrases) {
  const hash = getHash(p);
  const fileName = `${hash}.mp3`;
  const filePath = path.join(audioDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`Downloading extra phrase: "${p}"...`);
    const buf = await fetchAudio(p);
    if (buf) {
      fs.writeFileSync(filePath, buf);
      console.log(`  Saved ${fileName} (${buf.length} bytes)`);
    }
  }
  manifest[p] = fileName;
  manifest[p.toLowerCase()] = fileName;
}

// Normalize all entries
console.log('Normalizing manifest (adding lowercased and stripped punctuation versions)...');
const keys = Object.keys(manifest);
keys.forEach(k => {
  const file = manifest[k];
  const trimmed = k.trim();
  const lower = trimmed.toLowerCase();
  manifest[lower] = file;

  const stripped = trimmed.replace(/[.,?!;:…]+$/g, '').trim();
  if (stripped) {
    manifest[stripped] = file;
    manifest[stripped.toLowerCase()] = file;
  }
});

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Updated manifest saved. Total entries: ${Object.keys(manifest).length}`);
