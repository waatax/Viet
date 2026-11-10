// Exports the learner-facing vocabulary (Top 1,000 corrections applied, noise rows removed)
// for the ear-training batch generator: scripts/generate_all_vocab_batches.py
import fs from 'fs';
import { VOCABULARY } from '../src/data/vocabularyQuality.js';

const rows = VOCABULARY.map(({ verified, exampleKind, note, ...w }) => w);
console.log(`Exporting ${rows.length} words...`);
fs.writeFileSync('scripts/all_10000_words.json', JSON.stringify(rows, null, 2), 'utf-8');
console.log('Saved scripts/all_10000_words.json');
