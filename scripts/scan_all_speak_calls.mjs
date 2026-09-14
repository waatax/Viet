import fs from 'fs';
import path from 'path';

const compDir = path.resolve('src/components');
const files = fs.readdirSync(compDir).filter(f => f.endsWith('.jsx'));

files.forEach(f => {
  const content = fs.readFileSync(path.join(compDir, f), 'utf8');
  const speakMatches = [];
  const lines = content.split('\n');
  lines.forEach((l, i) => {
    if (l.includes('audioEngine.speak')) {
      speakMatches.push({ lineNum: i + 1, text: l.trim() });
    }
  });
  if (speakMatches.length > 0) {
    console.log(`=== ${f} (${speakMatches.length} speak calls) ===`);
    speakMatches.forEach(m => console.log(`  L${m.lineNum}: ${m.text}`));
  }
});
