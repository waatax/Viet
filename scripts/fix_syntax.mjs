import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/data/vietnameseData.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Replace any duplicate closing object bracket
content = content.replace(/\}\s*,\s*\}\s*,\s*\{/g, '},\n  {');
content = content.replace(/\}\s*\r?\n\s*\}\s*,\s*\r?\n\s*\{/g, '},\n  {');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Regex normalization completed!');
