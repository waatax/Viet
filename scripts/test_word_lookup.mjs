/**
 * Automated tests for Vietnamese hover/click word lookup, tone analysis,
 * longest-match compound resolution, English false-positive filtering, and dictionary integrity.
 */
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  analyzeVietnameseTones,
  detectSyllableTone,
  lookupSelectedPhrase,
  lookupTokenInText
} from '../src/services/vietWordLookupService.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DICT_PATH = path.resolve(__dirname, '..', 'public', 'data', 'vi-zh-dict.json');

assert.ok(fs.existsSync(DICT_PATH), 'public/data/vi-zh-dict.json must exist');
const rawJson = fs.readFileSync(DICT_PATH, 'utf8');
const rawBytes = Buffer.byteLength(rawJson, 'utf8');
assert.ok(rawBytes < 500 * 1024, `Dictionary should stay compact (<500KB), got ${(rawBytes / 1024).toFixed(1)}KB`);

const dict = JSON.parse(rawJson);
const entryCount = Object.keys(dict).length;
assert.ok(entryCount >= 9500, `Dictionary should have >= 9500 entries, got ${entryCount}`);

// 1. Tone detection across all 6 tones & modified vowels
assert.equal(detectSyllableTone('ma').id, 'ngang');
assert.equal(detectSyllableTone('má').id, 'sac');
assert.equal(detectSyllableTone('mà').id, 'huyen');
assert.equal(detectSyllableTone('mả').id, 'hoi');
assert.equal(detectSyllableTone('mã').id, 'nga');
assert.equal(detectSyllableTone('mạ').id, 'nang');
assert.equal(detectSyllableTone('tiếng').id, 'sac');
assert.equal(detectSyllableTone('Việt').id, 'nang');
assert.equal(detectSyllableTone('phở').id, 'hoi');
assert.equal(detectSyllableTone('sữa').id, 'nga');
assert.equal(detectSyllableTone('đường').id, 'huyen');

const tones = analyzeVietnameseTones('cảm ơn');
assert.equal(tones.length, 2);
assert.equal(tones[0].id, 'hoi');
assert.equal(tones[1].id, 'ngang');

// 2. Longest-match compound lookup
{
  const sentence = 'Tôi rất cảm ơn bạn!';
  const camIdx = sentence.indexOf('cảm') + 1;
  const onIdx = sentence.indexOf('ơn') + 1;
  const res1 = lookupTokenInText(sentence, camIdx, dict);
  const res2 = lookupTokenInText(sentence, onIdx, dict);

  assert.ok(res1 && res1.found, 'Should find "cảm ơn" when hovering "cảm"');
  assert.equal(res1.word, 'cảm ơn');
  assert.ok(res1.zh.includes('謝'), `Expected 謝謝 in gloss, got: ${res1.zh}`);
  assert.equal(res1.hanViet, '感恩');
  assert.equal(res2.word, 'cảm ơn', 'Should also find "cảm ơn" when hovering "ơn"');
}

// 3. 3-word compound lookup
{
  const sentence = 'Không có gì, chúc bạn vui vẻ!';
  const res = lookupTokenInText(sentence, sentence.indexOf('có'), dict);
  assert.ok(res && res.found);
  assert.equal(res.word, 'Không có gì');
  assert.ok(res.zh.includes('不客氣'), `Expected 不客氣, got: ${res.zh}`);
}

// 4. Single-word lookup & punctuation boundary safety
{
  const sentence = 'Xin, chào bạn.';
  const res = lookupTokenInText(sentence, 1, dict);
  assert.ok(res && res.word !== 'Xin, chào', 'Must not merge compounds across punctuation');

  const food = 'Phở bò rất ngon!';
  const phoRes = lookupTokenInText(food, 1, dict);
  assert.ok(phoRes && phoRes.found && phoRes.zh.includes('河粉'), `Expected 河粉, got ${phoRes?.zh}`);
}

// 5. English UI & acronym false-positive protection
for (const eng of [
  'Flashcards',
  'Home',
  'Audio Lab',
  'Top 1,000',
  'XP',
  'FDI',
  'SM-2 Retention',
  'You can click here to learn Vietnamese'
]) {
  for (let i = 0; i < eng.length; i++) {
    const res = lookupTokenInText(eng, i, dict);
    assert.equal(res, null, `English text "${eng}" at offset ${i} should not trigger Vietnamese popup (got ${res?.word})`);
  }
}

// 6. Unknown Vietnamese word with diacritics still offers tone & pronunciation fallback
{
  const res = lookupTokenInText('Xin chào Ngọctrâmxyz!', 10, dict);
  assert.ok(res && res.found === false && res.word === 'Ngọctrâmxyz');
  assert.equal(res.tones[0].id, 'nang');
}

// 7. Selected phrase lookup
{
  const sel1 = lookupSelectedPhrase('bánh mì', dict);
  assert.ok(sel1 && sel1.found && sel1.zh.includes('麵包'));

  const sel2 = lookupSelectedPhrase('tôi ăn phở', dict);
  assert.ok(sel2 && sel2.found && sel2.breakdown.length === 3);
}

console.log(`PASS test_word_lookup: ${entryCount} entries (${(rawBytes / 1024).toFixed(1)} KB), all assertions passed.`);
