import fs from 'fs';

const content = fs.readFileSync('src/index.css', 'utf-8');
const lines = content.split('\n');

lines.forEach((line, idx) => {
  if (line.includes('1024px')) {
    console.log(`Line ${idx + 1}: ${line}`);
    for (let j = Math.max(0, idx - 2); j <= Math.min(lines.length - 1, idx + 10); j++) {
      console.log(`  ${j + 1}: ${lines[j]}`);
    }
  }
});
