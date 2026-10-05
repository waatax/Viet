import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
const manifestPath = path.resolve('src/data/audioManifest.json');

const text = 'Tín';
const hash = crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
const fileName = `${hash}.mp3`;
const filePath = path.join(audioDir, fileName);

console.log(`Generating audio for "${text}" -> ${fileName}`);

const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;

async function run() {
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
    }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch audio: status ${res.status}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  if (buffer.length < 200) {
    throw new Error(`Fetched audio too small: ${buffer.length} bytes`);
  }

  fs.writeFileSync(filePath, buffer);
  console.log(`Saved MP3 (${buffer.length} bytes) to ${filePath}`);

  const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  manifest[text] = fileName;
  manifest[text.toLowerCase()] = fileName;
  manifest[`${text}_north`] = fileName;
  manifest[`${text}_south`] = fileName;

  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
  console.log(`Updated audioManifest.json successfully.`);
}

run().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
