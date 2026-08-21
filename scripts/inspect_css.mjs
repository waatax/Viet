import fs from 'fs';

const content = fs.readFileSync('src/index.css', 'utf-8');
const lines = content.split('\n');

function printRange(start, count) {
  console.log(`--- Lines ${start} to ${start + count} ---`);
  for (let i = start - 1; i < Math.min(lines.length, start + count); i++) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}

// Check lines around 600-640 (main-content), 1680-1760 (main-content & home-hero), 2230-2320 (media queries)
printRange(600, 40);
printRange(1680, 70);
printRange(2230, 80);
