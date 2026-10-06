import fs from 'fs';
import { FREQUENCY_VOCABULARY } from '../src/data/frequencyVocabularyData.js';

const top1k = FREQUENCY_VOCABULARY.filter(w => w.tier === 'top1k');
console.log(`Found ${top1k.length} words in top1k.`);

// Check for missing zh and fix them
top1k.forEach(w => {
  if (w.viet === 'tôi' && (!w.zh || w.zh.trim() === '')) {
    w.zh = '我';
  }
  if (w.viet === 'sẽ' && (!w.zh || w.zh.trim() === '')) {
    w.zh = '將會';
  }
  if (w.viet === 'người' && (!w.zh || w.zh.trim() === '')) {
    w.zh = '人 / 人們';
  }
});

// Let's verify each word has viet and zh
let invalidCount = 0;
top1k.forEach((w, idx) => {
  if (!w.viet || !w.zh) {
    console.error(`Invalid item at ${idx}:`, w);
    invalidCount++;
  }
});

console.log(`Invalid items: ${invalidCount}`);

fs.writeFileSync('scripts/top1000_words.json', JSON.stringify(top1k, null, 2), 'utf-8');
console.log('Saved scripts/top1000_words.json');
