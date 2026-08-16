import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { 
  vietnameseAlphabet, 
  vietnameseTones, 
  accentDifferences, 
  numbersAndCurrency, 
  hanVietRoots, 
  pronounKinshipData, 
  multiScenarios, 
  practicalPhrases, 
  flashcardsDeck, 
  grammarRules, 
  interactivePuzzles, 
  quizzes 
} from '../src/data/vietnameseData.js';
import { situationalScenarios } from '../src/data/situationalScenarios.js';

const audioDir = path.resolve('public/audio');
if (!fs.existsSync(audioDir)) {
  fs.mkdirSync(audioDir, { recursive: true });
}

function cleanText(text) {
  if (!text) return '';
  let cleaned = String(text);
  cleaned = cleaned.replace(/\([^)]*[\u4e00-\u9fa5A-Za-z]+[^)]*\)/g, ' ');
  cleaned = cleaned.replace(/（[^）]*[\u4e00-\u9fa5A-Za-z]+[^）]*）/g, ' ');
  cleaned = cleaned.replace(/\[[^\]]*\]/g, ' ');
  cleaned = cleaned.replace(/[\u4e00-\u9fa5]/g, ' ');
  cleaned = cleaned.replace(/[，。！？；：（）「」『』、《》“”‘’…—]/g, ' ');
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*(?:đ|₫|VND)(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} đồng `);
  cleaned = cleaned.replace(/(\d+[\d.,]*)\s*k(?![a-zA-Zà-ỹÀ-Ỹ])/gi, (_, num) => `${num} nghìn `);
  cleaned = cleaned.replace(/NT\$/gi, ' ');
  cleaned = cleaned.replace(/\$/g, ' ');
  cleaned = cleaned.replace(/~/g, ' ');
  cleaned = cleaned.replace(/[—_=+*#@$%^&|\\/<>]/g, ' ');
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  return cleaned;
}

function getHash(text) {
  return crypto.createHash('md5').update(text).digest('hex').slice(0, 12);
}

const audioSet = new Set();
function addPhrase(text) {
  if (!text) return;
  const cleaned = cleanText(text);
  if (cleaned && cleaned.length > 0) {
    audioSet.add(cleaned);
  }
}

// 1. Numbers & Currency
if (numbersAndCurrency?.baseNumbers) {
  numbersAndCurrency.baseNumbers.forEach(n => {
    addPhrase(n.viet);
  });
}
if (numbersAndCurrency?.unitsScale) {
  numbersAndCurrency.unitsScale.forEach(u => {
    addPhrase(u.viet);
    if (u.viet.includes('/')) {
      u.viet.split('/').forEach(p => addPhrase(p));
    }
  });
}
if (numbersAndCurrency?.priceBrackets) {
  numbersAndCurrency.priceBrackets.forEach(b => {
    b.examples.forEach(e => addPhrase(e.viet));
  });
}
if (numbersAndCurrency?.bankingDialogues) {
  numbersAndCurrency.bankingDialogues.forEach(d => {
    d.lines.forEach(l => addPhrase(l.viet));
  });
}

// Common numbers
[
  'Không', 'Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười',
  'Mười một', 'Mười hai', 'Mười ba', 'Mười bốn', 'Mười lăm', 'Mười sáu', 'Mười bảy', 'Mười tám', 'Mười chín',
  'Hai mươi', 'Hai mươi mốt', 'Hai mươi lăm', 'Năm mươi', 'Năm mươi lăm', 'Năm mươi nghìn đồng',
  'Năm trăm nghìn đồng', 'Mười triệu đồng', 'Một trăm triệu đồng', 'Một tỷ đồng', 'Hai tỷ năm trăm triệu đồng', 'Năm tỷ đồng', 'Mười tỷ đồng'
].forEach(n => addPhrase(n));

// 2. Tones
if (vietnameseTones) {
  vietnameseTones.forEach(t => {
    addPhrase(t.example);
  });
}

// 3. Alphabet
if (vietnameseAlphabet) {
  vietnameseAlphabet.forEach(item => {
    addPhrase(`${item.name}. ${item.example}.`);
    addPhrase(item.name);
    addPhrase(item.example);
    const charFirst = item.char.split(' ')[0];
    addPhrase(charFirst);
  });
}

// 4. Accent differences
if (accentDifferences?.phoneticRules) {
  accentDifferences.phoneticRules.forEach(r => {
    addPhrase(r.audioText || r.example);
  });
}
if (accentDifferences?.wordComparisonMatrix) {
  accentDifferences.wordComparisonMatrix.forEach(w => {
    addPhrase(w.north);
    addPhrase(w.south);
    if (w.south.includes('/')) {
      w.south.split('/').forEach(p => addPhrase(p));
    }
  });
}

// 5. Han-Viet roots & compounds
if (hanVietRoots) {
  hanVietRoots.forEach(r => {
    addPhrase(r.root);
    r.compounds.forEach(c => addPhrase(c.viet));
  });
}

// 6. Pronouns
if (pronounKinshipData) {
  pronounKinshipData.forEach(p => {
    addPhrase(p.pronoun);
    addPhrase(`Chào ${p.pronoun} ạ`);
  });
}
[
  'Chào Anh! Em rất vui được gặp anh.',
  'Chào Chị! Em có thể giúp gì cho chị?',
  'Chào Em! Anh mời em uống cà phê nhé.',
  'Chào Em! Chị mời em uống cà phê nhé.',
  'Chào Bạn! Hôm nay mình cùng đi ăn nhé.',
  'Cháu chào Chú ạ! Chú đi đâu đấy ạ?',
  'Em chào Cô ạ! Hôm nay bài học rất hay.',
  'Cháu kính chào Ông ạ! Chúc Ông dồi dào sức khỏe.',
  'Cháu kính chào Bà ạ! Chúc Bà dồi dào sức khỏe.',
  'Rất hân hạnh được hợp tác với quý công ty.'
].forEach(s => addPhrase(s));

// 7. MultiScenarios & Practical Phrases
if (multiScenarios) {
  multiScenarios.forEach(ms => {
    ms.dialogues.forEach(d => {
      d.lines.forEach(l => addPhrase(l.viet));
    });
  });
}

if (practicalPhrases) {
  practicalPhrases.forEach(p => addPhrase(p.viet));
}

// 8. Flashcards
if (flashcardsDeck) {
  flashcardsDeck.forEach(fc => {
    addPhrase(fc.viet);
    addPhrase(fc.example);
  });
}

// 9. Grammar & Puzzles
if (grammarRules) {
  grammarRules.forEach(gr => {
    if (gr.exampleZh) addPhrase(gr.exampleZh);
    if (gr.exampleEn) addPhrase(gr.exampleEn);
  });
}
if (interactivePuzzles) {
  interactivePuzzles.forEach(ip => {
    addPhrase(ip.correctOrder.join(' '));
  });
}

// 10. Situational Scenarios (Dialogue 1, Dialogue 2, RolePlay Steps & Options, Vocab)
if (situationalScenarios) {
  situationalScenarios.forEach(sc => {
    // Both dialogue sections
    if (sc.dialogueSections) {
      sc.dialogueSections.forEach(sec => {
        sec.lines.forEach(l => addPhrase(l.viet));
      });
    }
    // Backward compatibility check
    if (sc.dialogues) {
      sc.dialogues.forEach(d => addPhrase(d.viet));
    }
    // Role play prompts and all user options
    if (sc.rolePlay?.steps) {
      sc.rolePlay.steps.forEach(st => {
        addPhrase(st.partnerPromptVi);
        st.userOptions.forEach(opt => addPhrase(opt.textVi));
      });
    }
    // Core vocabulary
    if (sc.vocab) {
      sc.vocab.forEach(v => addPhrase(v.viet));
    }
  });
}

// 11. Quizzes
if (quizzes) {
  quizzes.forEach(q => {
    if (q.questionVi) addPhrase(q.questionVi);
    if (q.audioPrompt) addPhrase(q.audioPrompt);
    if (q.options) {
      q.options.forEach(opt => {
        if (opt.viet) addPhrase(opt.viet);
      });
    }
  });
}


console.log(`Total unique phrases to prepare for full audio bank: ${audioSet.size}`);

async function fetchAudioWithRetry(text, retries = 4) {
  const url = `https://translate.google.com/translate_tts?ie=UTF-8&tl=vi&client=tw-ob&q=${encodeURIComponent(text)}`;
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        }
      });
      if (res.ok) {
        const buffer = await res.arrayBuffer();
        if (buffer.byteLength > 500) {
          return Buffer.from(buffer);
        }
      }
    } catch (e) {
      // delay before retry
      await new Promise(r => setTimeout(r, 600 * (i + 1)));
    }
  }
  return null;
}

const manifest = {};
const phrases = Array.from(audioSet);

async function run() {
  let successCount = 0;
  let skippedCount = 0;
  let failCount = 0;

  for (let i = 0; i < phrases.length; i++) {
    const phrase = phrases[i];
    const hash = getHash(phrase);
    const filename = `${hash}.mp3`;
    const filepath = path.join(audioDir, filename);

    manifest[phrase] = filename;

    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 500) {
      skippedCount++;
      continue;
    }

    process.stdout.write(`[${i + 1}/${phrases.length}] Downloading "${phrase.slice(0, 40)}..." `);
    const audioData = await fetchAudioWithRetry(phrase);
    if (audioData) {
      fs.writeFileSync(filepath, audioData);
      successCount++;
      console.log(`OK (${audioData.length} bytes)`);
    } else {
      failCount++;
      console.log(`FAILED!`);
    }

    // Gentle throttle
    await new Promise(r => setTimeout(r, 90));
  }

  // Write manifest file to src/data/audioManifest.json
  const manifestPath = path.resolve('src/data/audioManifest.json');
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));

  console.log(`\n========================================`);
  console.log(`Audio Bank Build Summary:`);
  console.log(`Total Target Phrases: ${phrases.length}`);
  console.log(`Newly Downloaded: ${successCount}`);
  console.log(`Existing Verified: ${skippedCount}`);
  console.log(`Failed: ${failCount}`);
  console.log(`Manifest saved to: ${manifestPath}`);
  console.log(`========================================\n`);
}

run();
