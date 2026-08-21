import fs from 'fs';

const filePath = 'src/index.css';
let content = fs.readFileSync(filePath, 'utf-8');

const buggySnippet = `@media (min-width: 1024px) {
  .app-container {
    flex-direction: row;
    align-items: flex-start;
  }
}`;

if (content.includes(buggySnippet)) {
  content = content.replace(buggySnippet, `/* Desktop Full Width Layout */
.app-container {
  width: 100%;
}`);
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Successfully fixed .app-container flex-direction bug in index.css!');
} else {
  // Try regex replacement
  const regex = /@media\s*\(min-width:\s*1024px\)\s*\{\s*\.app-container\s*\{\s*flex-direction:\s*row;\s*align-items:\s*flex-start;\s*\}\s*\}/g;
  if (regex.test(content)) {
    content = content.replace(regex, `/* Desktop Full Width Layout */\n.app-container {\n  width: 100%;\n}`);
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log('Successfully fixed via regex!');
  } else {
    console.log('Snippet not found directly, checking lines...');
  }
}
