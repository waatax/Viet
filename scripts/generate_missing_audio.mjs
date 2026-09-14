import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

const manifestPath = path.resolve('src/data/audioManifest.json');
let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {
    console.error('Failed to parse existing manifest:', e);
  }
}

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

const missingListPath = path.resolve('scripts/missing_audio_list.json');
const missingList = JSON.parse(fs.readFileSync(missingListPath, 'utf8'));

console.log(`Starting generation for ${missingList.length} missing audio phrases...`);

async function fetchAudioSingleChunk(text, retries = 3) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (buffer.byteLength > 200) {
          return Buffer.from(buffer);
        }
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  return null;
}

async function fetchAudio(text) {
  if (!text) return null;
  if (text.length <= 150) {
    return await fetchAudioSingleChunk(text);
  }
  // Split long sentence by punctuation
  const parts = text.split(/([.,?!;:…]+)/).filter(p => p.trim().length > 0);
  const chunks = [];
  let curr = '';
  for (const part of parts) {
    if ((curr + part).length > 120) {
      if (curr.trim()) chunks.push(curr.trim());
      curr = part;
    } else {
      curr += part;
    }
  }
  if (curr.trim()) chunks.push(curr.trim());

  const buffers = [];
  for (const chunk of chunks) {
    const buf = await fetchAudioSingleChunk(chunk);
    if (buf) buffers.push(buf);
    await new Promise(r => setTimeout(r, 150));
  }
  return buffers.length > 0 ? Buffer.concat(buffers) : null;
}

let generatedCount = 0;
let failedCount = 0;

for (let i = 0; i < missingList.length; i++) {
  const item = missingList[i];
  const targetText = item.cleaned;
  const hash = getHash(targetText);
  const fileName = `${hash}.mp3`;
  const filePath = path.join(audioDir, fileName);

  let success = false;
  if (fs.existsSync(filePath) && fs.statSync(filePath).size > 200) {
    success = true;
  } else {
    process.stdout.write(`[${i + 1}/${missingList.length}] Downloading: "${targetText.slice(0, 40)}"... `);
    const buffer = await fetchAudio(targetText);
    if (buffer) {
      fs.writeFileSync(filePath, buffer);
      process.stdout.write(`OK (${buffer.length} bytes)\n`);
      generatedCount++;
      success = true;
    } else {
      process.stdout.write(`FAILED\n`);
      failedCount++;
    }
    // Polite delay between requests
    await new Promise(r => setTimeout(r, 120));
  }

  if (success) {
    manifest[targetText] = fileName;
    manifest[targetText.toLowerCase()] = fileName;
    if (item.raw) {
      manifest[item.raw] = fileName;
      manifest[item.raw.toLowerCase()] = fileName;
    }
    const stripped = targetText.replace(/[.,?!;:…]+$/g, '').trim();
    if (stripped) {
      manifest[stripped] = fileName;
      manifest[stripped.toLowerCase()] = fileName;
    }
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`\n=== GENERATION FINISHED ===`);
console.log(`New files downloaded: ${generatedCount}`);
console.log(`Failed: ${failedCount}`);
console.log(`Total entries in manifest now: ${Object.keys(manifest).length}`);
