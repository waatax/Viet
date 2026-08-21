import fs from 'fs';

const content = fs.readFileSync('src/index.css', 'utf-8');
const lines = content.split('\n');

function findAndPrint(term) {
  console.log(`=== Matches for ${term} ===`);
  lines.forEach((line, idx) => {
    if (line.includes(term)) {
      console.log(`Line ${idx + 1}: ${line}`);
      for (let j = Math.max(0, idx - 2); j <= Math.min(lines.length - 1, idx + 15); j++) {
        console.log(`  ${j + 1}: ${lines[j]}`);
      }
    }
  });
}

findAndPrint('.app-container');
findAndPrint('.navbar');
findAndPrint('.top-nav');
