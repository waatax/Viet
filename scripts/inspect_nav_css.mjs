import fs from 'fs';

const content = fs.readFileSync('src/index.css', 'utf-8');
const lines = content.split('\n');

function printRange(start, count) {
  console.log(`--- Lines ${start} to ${start + count} ---`);
  for (let i = start - 1; i < Math.min(lines.length, start + count); i++) {
    console.log(`${i + 1}: ${lines[i]}`);
  }
}

printRange(185, 30);
printRange(280, 50);
printRange(1640, 50);
