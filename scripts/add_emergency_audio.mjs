import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const audioDir = path.resolve('public/audio');
const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

async function fetchAudio(text, retries = 3) {
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
      await new Promise(r => setTimeout(r, 400 * (i + 1)));
    }
  }
  return null;
}

const phrases = [
  'Tôi bị sốt cao.',
  'Tôi bị đau đầu dữ dội.',
  'Tôi bị đau bụng và tiêu chảy.',
  'Tôi bị buồn nôn và chóng mặt.',
  'Tôi bị đau dạ dày.',
  'Tôi bị dị ứng phát ban ngứa.',
  'Tôi bị ho và đau họng.',
  'Tôi bị khó thở và tức ngực.',
  'Tôi bị say nắng và mất nước.',
  'Cho tôi thuốc giảm đau và hạ sốt.',
  'Cứu hỏa',
  'Cấp cứu y tế'
];

console.log(`Synthesizing ${phrases.length} phrases for emergency kit...`);

for (const phrase of phrases) {
  const cleaned = phrase.trim();
  const hash = getHash(cleaned);
  const fileName = `${hash}.mp3`;
  const filePath = path.join(audioDir, fileName);

  if (!fs.existsSync(filePath)) {
    process.stdout.write(`Fetching: "${cleaned}"... `);
    const buf = await fetchAudio(cleaned);
    if (buf) {
      fs.writeFileSync(filePath, buf);
      process.stdout.write(`OK (${buf.length} bytes)\n`);
    } else {
      process.stdout.write(`FAILED\n`);
    }
    await new Promise(r => setTimeout(r, 150));
  } else {
    console.log(`Already exists: ${fileName}`);
  }

  manifest[cleaned] = fileName;
  manifest[cleaned.toLowerCase()] = fileName;
  const stripped = cleaned.replace(/[.,?!;:…]+$/g, '').trim();
  if (stripped) {
    manifest[stripped] = fileName;
    manifest[stripped.toLowerCase()] = fileName;
  }
}

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log('Emergency audio generation complete!');
