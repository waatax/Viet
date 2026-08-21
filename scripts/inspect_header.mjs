import fs from 'fs';

const content = fs.readFileSync('src/index.css', 'utf-8');
const lines = content.split('\n');

for (let i = 205; i <= 270; i++) {
  console.log(`${i}: ${lines[i - 1]}`);
}
