import fs from 'fs';
import { FREQUENCY_VOCABULARY } from '../src/data/frequencyVocabularyData.js';

console.log(`Exporting ${FREQUENCY_VOCABULARY.length} words...`);
fs.writeFileSync('scripts/all_10000_words.json', JSON.stringify(FREQUENCY_VOCABULARY, null, 2), 'utf-8');
console.log('Saved scripts/all_10000_words.json');
