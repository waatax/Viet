import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';

const expected = process.env.GITHUB_SHA || execFileSync('git', ['rev-parse', 'HEAD'], { encoding: 'utf8' }).trim();
const { version } = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
let lastError;
for (let attempt = 1; attempt <= 12; attempt++) {
  try {
    const url = new URL('https://waatax.github.io/Viet/release.json');
    url.searchParams.set('revision', expected);
    url.searchParams.set('attempt', String(attempt));
    const response = await fetch(url, { cache: 'no-store', signal: AbortSignal.timeout(10000) });
    if (!response.ok) throw new Error(`Release record returned HTTP ${response.status}`);
    const release = await response.json();
    if (release.revision !== expected || release.version !== version || !Number.isFinite(Date.parse(release.builtAt))) {
      throw new Error(`Published version does not match ${version} / ${expected}`);
    }
    console.log(`PASS: GitHub Pages serves v${release.version}, commit ${release.revision}, built ${release.builtAt}`);
    process.exit(0);
  } catch (error) {
    lastError = error;
    if (attempt === 1) console.log('Waiting for the published release record to reach GitHub Pages.');
    if (attempt < 12) await delay(5000);
  }
}
console.error(`FAIL: Could not verify the published release: ${lastError.message}`);
process.exitCode = 1;
