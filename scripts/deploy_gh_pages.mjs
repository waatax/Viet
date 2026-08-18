import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

if (!fs.existsSync(distDir)) {
  console.log('Building project before deployment...');
  execSync('npm run build', { stdio: 'inherit' });
}

console.log('🚀 Deploying dist folder to GitHub Pages (gh-pages branch)...');

const gitDirInDist = path.join(distDir, '.git');
if (fs.existsSync(gitDirInDist)) {
  fs.rmSync(gitDirInDist, { recursive: true, force: true });
}

// Initialize temporary git repository inside dist
execSync('git init', { cwd: distDir, stdio: 'inherit' });
execSync('git checkout -B gh-pages', { cwd: distDir, stdio: 'inherit' });
execSync('git add -A', { cwd: distDir, stdio: 'inherit' });
execSync('git commit -m "deploy: build update ' + new Date().toISOString() + '"', { cwd: distDir, stdio: 'inherit' });

// Push directly to origin gh-pages
console.log('Pushing to origin gh-pages...');
execSync('git push -f https://github.com/waatax/Viet.git gh-pages', { cwd: distDir, stdio: 'inherit' });

// Clean up .git in dist
fs.rmSync(gitDirInDist, { recursive: true, force: true });

console.log('✅ Successfully published to GitHub Pages!');
