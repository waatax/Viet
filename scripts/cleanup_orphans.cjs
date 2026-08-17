/**
 * cleanup_orphans.cjs
 * Safely removes MP3 files from public/audio that are not referenced in audioManifest.json.
 * Creates a backup list before deletion for safety.
 */
const fs = require('fs');
const path = require('path');

const AUDIO_DIR = path.join(__dirname, '..', 'public', 'audio');
const MANIFEST_PATH = path.join(__dirname, '..', 'src', 'data', 'audioManifest.json');
const REPORT_PATH = path.join(__dirname, '..', 'orphan_cleanup_report.txt');

console.log('=== Orphan Audio File Cleanup ===\n');

// Load manifest
const manifest = JSON.parse(fs.readFileSync(MANIFEST_PATH, 'utf8'));
const manifestFiles = new Set(Object.values(manifest));
console.log(`Manifest entries: ${manifestFiles.size}`);

// Get all MP3 files on disk
const diskFiles = fs.readdirSync(AUDIO_DIR).filter(f => f.endsWith('.mp3'));
console.log(`MP3 files on disk: ${diskFiles.length}`);

// Find orphans
const orphans = diskFiles.filter(f => !manifestFiles.has(f));
console.log(`Orphan files found: ${orphans.length}`);

if (orphans.length === 0) {
  console.log('\nNo orphan files to clean up. Exiting.');
  process.exit(0);
}

// Calculate total orphan size
const orphanSize = orphans.reduce((sum, f) => {
  return sum + fs.statSync(path.join(AUDIO_DIR, f)).size;
}, 0);
console.log(`Total orphan size: ${(orphanSize / 1024 / 1024).toFixed(2)} MB\n`);

// Create backup report
const reportLines = [
  `Orphan Audio Cleanup Report`,
  `Date: ${new Date().toISOString()}`,
  `Total orphan files: ${orphans.length}`,
  `Total orphan size: ${(orphanSize / 1024 / 1024).toFixed(2)} MB`,
  ``,
  `Files removed:`,
  ...orphans.map(f => `  ${f} (${fs.statSync(path.join(AUDIO_DIR, f)).size} bytes)`)
];
fs.writeFileSync(REPORT_PATH, reportLines.join('\n'), 'utf8');
console.log(`Backup report saved to: ${REPORT_PATH}`);

// Delete orphan files
let deleted = 0;
let errors = 0;
for (const file of orphans) {
  try {
    fs.unlinkSync(path.join(AUDIO_DIR, file));
    deleted++;
  } catch (err) {
    console.error(`  Error deleting ${file}: ${err.message}`);
    errors++;
  }
}

console.log(`\nDeleted: ${deleted} files`);
if (errors > 0) console.log(`Errors: ${errors} files`);

// Verify final state
const remainingFiles = fs.readdirSync(AUDIO_DIR).filter(f => f.endsWith('.mp3'));
console.log(`\nRemaining MP3 files: ${remainingFiles.length}`);
console.log(`Expected (manifest): ${manifestFiles.size}`);
console.log(`Match: ${remainingFiles.length === manifestFiles.size ? '✓ YES' : '✗ NO'}`);

console.log('\n=== Cleanup Complete ===');
