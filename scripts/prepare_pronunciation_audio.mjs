import fs from 'node:fs';
import crypto from 'node:crypto';
import { pronunciationDecks } from '../src/data/pronunciationCards.js';

const manifestPath = 'src/data/audioManifest.json';
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const words = [...new Set(Object.values(pronunciationDecks).flat().map(card => card.word))];
const lookup = new Map(Object.entries(manifest).map(([word, file]) => [word.toLowerCase(), file]));
let added = 0;
for (const word of words) {
  const existing = lookup.get(word.toLowerCase());
  if (existing && fs.statSync('public/audio/' + existing).size > 200) continue;
  if (!process.argv.includes('--generate')) throw new Error('Missing pronunciation clip: ' + word);
  const file = crypto.createHash('md5').update(word).digest('hex').slice(0, 12) + '.mp3';
  const url = new URL('https://translate.google.com/translate_tts');
  url.search = new URLSearchParams({ ie: 'UTF-8', tl: 'vi', client: 'tw-ob', q: word });
  const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
  if (!response.ok || !response.headers.get('content-type')?.startsWith('audio/')) {
    throw new Error('Vietnamese TTS failed for ' + word + ' (' + response.status + ')');
  }
  const bytes = Buffer.from(await response.arrayBuffer());
  if (bytes.length <= 200) throw new Error('Empty pronunciation clip: ' + word);
  fs.writeFileSync('public/audio/' + file, bytes);
  manifest[word] = file;
  lookup.set(word.toLowerCase(), file);
  added++;
}
if (added) fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log(words.length + ' distinct spoken examples covered, ' + added + ' clips added.');
