const fs = require('fs');
const path = require('path');
const manifest = require('../src/data/audioManifest.json');
const entries = Object.entries(manifest);

console.log('=== Deep Audio Verification ===');
console.log('Total manifest entries:', entries.length);

let validCount = 0;
let invalidCount = 0;
let invalidFiles = [];

entries.forEach(([text, file]) => {
  const filePath = path.join(__dirname, '..', 'public', 'audio', file);
  const exists = fs.existsSync(filePath);
  
  if (!exists) {
    invalidCount++;
    invalidFiles.push({ text: text.substring(0, 50), file, reason: 'MISSING' });
    return;
  }
  
  const size = fs.statSync(filePath).size;
  if (size < 500) {
    invalidCount++;
    invalidFiles.push({ text: text.substring(0, 50), file, reason: 'TOO_SMALL', size });
    return;
  }
  
  // Check MP3 header
  const buf = Buffer.alloc(4);
  const fd = fs.openSync(filePath, 'r');
  fs.readSync(fd, buf, 0, 4, 0);
  fs.closeSync(fd);
  
  const isID3 = buf[0] === 0x49 && buf[1] === 0x44 && buf[2] === 0x33;
  const isMPEG = buf[0] === 0xFF && (buf[1] & 0xE0) === 0xE0;
  
  if (!isID3 && !isMPEG) {
    invalidCount++;
    invalidFiles.push({ text: text.substring(0, 50), file, reason: 'BAD_HEADER', header: buf.toString('hex') });
    return;
  }
  
  validCount++;
});

console.log('Valid MP3 files:', validCount);
console.log('Invalid files:', invalidCount);

if (invalidFiles.length > 0) {
  console.log('\nInvalid file details:');
  invalidFiles.forEach(f => {
    console.log('  ' + f.reason + ': ' + f.file + ' - "' + f.text + '"');
  });
}

// Check orphan files
const manifestFiles = new Set(Object.values(manifest));
const diskFiles = fs.readdirSync(path.join(__dirname, '..', 'public', 'audio')).filter(f => f.endsWith('.mp3'));
const orphans = diskFiles.filter(f => !manifestFiles.has(f));
console.log('\nOrphan files (on disk but not in manifest):', orphans.length);

// Size stats
const totalDiskSize = diskFiles.reduce((s, f) => s + fs.statSync(path.join(__dirname, '..', 'public', 'audio', f)).size, 0);
const orphanSize = orphans.reduce((s, f) => s + fs.statSync(path.join(__dirname, '..', 'public', 'audio', f)).size, 0);
console.log('Total disk size:', (totalDiskSize / 1024 / 1024).toFixed(2), 'MB');
console.log('Orphan size:', (orphanSize / 1024 / 1024).toFixed(2), 'MB');
console.log('Could save:', ((orphanSize / totalDiskSize) * 100).toFixed(1) + '% by removing orphans');

console.log('\n=== RESULT: ' + (invalidCount === 0 ? 'ALL MANIFEST AUDIO FILES VALID' : invalidCount + ' ISSUES FOUND') + ' ===');
