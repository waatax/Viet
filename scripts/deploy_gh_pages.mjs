import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');

// Always trigger a fresh build to ensure dist matches the latest clean code
console.log('📦 Building project before deployment...');
execSync('npm run build', { stdio: 'inherit' });

// 🛡️ Pre-flight Security Guard: Ensure no private/local/planning files leaked into dist
console.log('🛡️ Running pre-flight security audit on dist folder...');
const forbiddenPatterns = [/local/i, /core/i, /curriculum/i, /\.md$/i, /\.log$/i, /\.pyc$/i, /report/i];

function auditDir(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    for (const pattern of forbiddenPatterns) {
      if (pattern.test(entry.name)) {
        throw new Error(`🚨 SECURITY VIOLATION: Confidential/Local file detected in dist: ${entry.name}. Deployment aborted!`);
      }
    }
    if (entry.isDirectory()) {
      auditDir(fullPath);
    }
  }
}

auditDir(distDir);
console.log('✅ Security audit passed: No confidential, planning, or local files found in dist.');

console.log('🚀 Deploying clean dist folder to GitHub Pages (gh-pages branch)...');

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
