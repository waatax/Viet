import { execFileSync } from 'node:child_process';

// GitHub Actions is the single deployment path. Never overwrite the gh-pages branch.
const branch = execFileSync('git', ['branch', '--show-current'], { encoding: 'utf8' }).trim();
if (!['main', 'master'].includes(branch)) {
  console.error('Please merge into main or master before deploying.');
  process.exit(1);
}
const changes = execFileSync('git', ['status', '--porcelain', '--untracked-files=no'], { encoding: 'utf8' }).trim();
if (changes) {
  console.error('Please commit tracked changes before deploying so the published version can be verified.');
  process.exit(1);
}
execFileSync('git', ['push', 'origin', branch], { stdio: 'inherit' });
console.log('Source pushed. GitHub Actions builds, deploys and verifies GitHub Pages.');
console.log('After the workflow succeeds, run npm run verify:pages to confirm the published revision.');
