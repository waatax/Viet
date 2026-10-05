import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

function cleanText(text) {
  if (!text) return '';
  let cleaned = String(text);
  cleaned = cleaned.replace(/\([^)]*\)/g, ' ');
  cleaned = cleaned.replace(/（[^）]*）/g, ' ');
  cleaned = cleaned.replace(/\[[^\]]*\]/g, ' ');
  cleaned = cleaned.replace(/[\u4e00-\u9fa5]/g, ' ');
  cleaned = cleaned.replace(/[，。！？；：（）「」『』、《》“”‘’…—]/g, ' ');
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*(?:đ|₫|VND)(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} đồng `);
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*k(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} nghìn `);
  cleaned = cleaned.replace(/NT\$/gi, ' ');
  cleaned = cleaned.replace(/\$/g, ' ');
  cleaned = cleaned.replace(/~/g, ' ');
  cleaned = cleaned.replace(/[—_=+*#@$%^&|\\/<>]/g, ' ');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

let addedCount = 0;
const entries = Object.entries(manifest);

entries.forEach(([key, file]) => {
  const cleaned = cleanText(key);
  if (cleaned && !manifest[cleaned]) {
    manifest[cleaned] = file;
    manifest[cleaned.toLowerCase()] = file;
    addedCount++;
  }

  const stripped = key.replace(/[.,?!;:…]+$/g, '').trim();
  if (stripped && !manifest[stripped]) {
    manifest[stripped] = file;
    manifest[stripped.toLowerCase()] = file;
  }

  if (cleaned) {
    const strippedCleaned = cleaned.replace(/[.,?!;:…]+$/g, '').trim();
    if (strippedCleaned && !manifest[strippedCleaned]) {
      manifest[strippedCleaned] = file;
      manifest[strippedCleaned.toLowerCase()] = file;
    }
  }
});

fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
console.log(`Enrichment complete! Added ${addedCount} cleaned keys. Total manifest keys: ${Object.keys(manifest).length}`);
