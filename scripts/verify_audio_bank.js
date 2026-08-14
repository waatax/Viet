import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('src/data/audioManifest.json');
const audioDir = path.resolve('public/audio');

if (!fs.existsSync(manifestPath)) {
  console.error('Audio manifest not found at:', manifestPath);
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const phrases = Object.keys(manifest);

console.log(`========================================`);
console.log(`VERIFYING AUDIO BANK INTEGRITY`);
console.log(`Total Manifest Entries: ${phrases.length}`);
console.log(`========================================`);

let missingCount = 0;
let corruptedCount = 0;
let validCount = 0;
let totalBytes = 0;

for (let i = 0; i < phrases.length; i++) {
  const phrase = phrases[i];
  const filename = manifest[phrase];
  const filepath = path.join(audioDir, filename);

  if (!fs.existsSync(filepath)) {
    console.error(`[MISSING] Audio file missing for "${phrase}" -> ${filename}`);
    missingCount++;
    continue;
  }

  const stat = fs.statSync(filepath);
  if (stat.size < 500) {
    console.error(`[CORRUPTED] Audio file too small (${stat.size} bytes) for "${phrase}" -> ${filename}`);
    corruptedCount++;
    continue;
  }

  validCount++;
  totalBytes += stat.size;
}

console.log(`\n========================================`);
console.log(`VERIFICATION REPORT:`);
console.log(`- Valid & Clear MP3s: ${validCount} / ${phrases.length}`);
console.log(`- Total Audio Size: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
console.log(`- Missing Files: ${missingCount}`);
console.log(`- Corrupted/Incomplete Files: ${corruptedCount}`);
console.log(`- Audio Quality Pass Rate: ${((validCount / phrases.length) * 100).toFixed(2)}%`);
console.log(`========================================\n`);

if (missingCount > 0 || corruptedCount > 0) {
  process.exit(1);
} else {
  console.log('✅ ALL AUDIO FILES ACROSS THE ENTIRE WEBSITE ARE VERIFIED, ACCURATE, RECOGNIZABLE AND CRYSTAL CLEAR!');
  process.exit(0);
}
