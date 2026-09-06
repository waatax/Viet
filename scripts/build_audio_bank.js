import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { 
  vietnameseAlphabet, 
  vietnameseTones, 
  vietnameseSingleVowels,
  vietnameseCompoundConsonants,
  vietnameseFinalConsonants,
  vietnameseDiphthongsTriphthongs,
  toneMinimalPairs,
  accentDifferences, 
  numbersAndCurrency, 
  hanVietRoots, 
  pronounKinshipData, 
  corporatePronounHierarchy,
  politenessRules,
  multiScenarios, 
  practicalPhrases, 
  flashcardsDeck, 
  grammarRules, 
  interactivePuzzles, 
  quizzes 
} from '../src/data/vietnameseData.js';
import { situationalScenarios } from '../src/data/situationalScenarios.js';
import {
  tradeShowGuide,
  dualCityBusinessGuide,
  zaloNetworkingGuide,
  interactiveNegotiations,
  executiveSurvivalGuide,
  smartFactoryGuide,
  nhauCultureGuide,
  currencyBlitzQuestions,
  executiveHanVietRoots,
  realWorldCommercialDocuments,
  businessProficiencyTest
} from '../src/data/businessData.js';

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
const rawToCleanMap = new Map();
function addPhrase(text) {
  if (!text) return;
  const cleaned = cleanText(text);
  if (cleaned && cleaned.length > 0) {
    audioSet.add(cleaned);
    const trimmed = String(text).trim();
    if (trimmed) {
      rawToCleanMap.set(trimmed, cleaned);
    }
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
if (numbersAndCurrency?.priceTiers) {
  numbersAndCurrency.priceTiers.forEach(t => {
    addPhrase(t.viet);
  });
}
if (numbersAndCurrency?.highFrequencyShopping?.items) {
  numbersAndCurrency.highFrequencyShopping.items.forEach(p => {
    addPhrase(p.viet);
  });
}
if (numbersAndCurrency?.highFrequencyShopping?.vocabulary) {
  numbersAndCurrency.highFrequencyShopping.vocabulary.forEach(v => {
    addPhrase(v.viet);
  });
}
if (numbersAndCurrency?.shoppingPhrases) {
  numbersAndCurrency.shoppingPhrases.forEach(p => {
    addPhrase(p.viet);
  });
}

// Common numbers & Presets
[
  'Không', 'Một', 'Hai', 'Ba', 'Bốn', 'Năm', 'Sáu', 'Bảy', 'Tám', 'Chín', 'Mười',
  'Mười một', 'Mười hai', 'Mười ba', 'Mười bốn', 'Mười lăm', 'Mười sáu', 'Mười bảy', 'Mười tám', 'Mười chín',
  'Hai mươi', 'Hai mươi mốt', 'Hai mươi lăm', 'Ba mươi', 'Ba mươi lăm', 'Bốn mươi', 'Bốn mươi lăm',
  'Năm mươi', 'Năm mươi lăm', 'Sáu mươi', 'Sáu mươi lăm', 'Bảy mươi', 'Tám mươi', 'Chín mươi',
  'Một trăm', 'Hai trăm', 'Ba trăm', 'Bốn trăm', 'Năm trăm', 'Sáu trăm', 'Bảy trăm', 'Tám trăm', 'Chín trăm',
  'Ba mươi lăm nghìn đồng', 'Ba mươi lăm ngàn đồng',
  'Sáu mươi lăm nghìn đồng', 'Sáu mươi lăm ngàn đồng',
  'Ba trăm năm mươi nghìn đồng', 'Ba trăm năm mươi ngàn đồng',
  'Một triệu năm trăm nghìn đồng', 'Một triệu năm trăm ngàn đồng',
  'Hai mươi lăm triệu đồng', 'Hai mươi lăm triệu ngàn đồng',
  'Hai tỷ năm trăm triệu đồng',
  'Năm mươi nghìn đồng', 'Năm mươi ngàn đồng',
  'Năm trăm nghìn đồng', 'Năm trăm ngàn đồng',
  'Mười triệu đồng', 'Một trăm triệu đồng', 'Một tỷ đồng', 'Hai tỷ đồng', 'Năm tỷ đồng', 'Mười tỷ đồng',
  'đồng', 'nghìn', 'ngàn', 'triệu', 'tỷ', 'trăm', 'mười', 'mươi', 'lăm', 'mốt', 'linh', 'tư'
].forEach(n => addPhrase(n));

// 2. Tones
if (vietnameseTones) {
  vietnameseTones.forEach(t => {
    addPhrase(t.example);
  });
}
['Ma', 'Mà', 'Má', 'Mả', 'Mã', 'Mạ', 'Ba', 'Bà', 'Bá', 'Bả', 'Bã', 'Bạ'].forEach(n => addPhrase(n));

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

// 3.1 Single Vowels
if (vietnameseSingleVowels) {
  vietnameseSingleVowels.forEach(sv => {
    addPhrase(sv.vowel);
    if (sv.examples) {
      sv.examples.forEach(ex => addPhrase(ex.vi));
    }
  });
}

// 3.2 Compound Consonants
if (vietnameseCompoundConsonants) {
  vietnameseCompoundConsonants.forEach(cc => {
    addPhrase(cc.cluster);
    if (cc.examples) {
      cc.examples.forEach(ex => addPhrase(ex.vi));
    }
  });
}

// 3.3 Final Consonants
if (vietnameseFinalConsonants) {
  vietnameseFinalConsonants.forEach(grp => {
    if (grp.items) {
      grp.items.forEach(it => {
        if (it.examples) {
          it.examples.forEach(ex => addPhrase(ex.vi));
        }
      });
    }
  });
}

// 3.4 Diphthongs & Triphthongs
if (vietnameseDiphthongsTriphthongs) {
  vietnameseDiphthongsTriphthongs.forEach(grp => {
    if (grp.items) {
      grp.items.forEach(it => {
        if (it.examples) {
          it.examples.forEach(ex => addPhrase(ex.vi));
        }
      });
    }
  });
}

// 3.5 Tone Minimal Pairs
if (toneMinimalPairs) {
  toneMinimalPairs.forEach(mp => {
    if (mp.pairs) {
      mp.pairs.forEach(p => addPhrase(p.word));
    }
  });
}

// 3.6 Corporate Pronouns & Politeness Rules
if (corporatePronounHierarchy) {
  corporatePronounHierarchy.forEach(cp => {
    addPhrase(cp.roleVi);
    addPhrase(cp.addressingVi);
    addPhrase(cp.selfVi);
  });
}
if (politenessRules) {
  politenessRules.forEach(pr => {
    if (pr.sampleVi) addPhrase(pr.sampleVi);
  });
}

// 3.7 Real-World Commercial Documents & Exam
if (realWorldCommercialDocuments) {
  realWorldCommercialDocuments.forEach(doc => {
    if (doc.headerVi) addPhrase(doc.headerVi);
    if (doc.clauses) {
      doc.clauses.forEach(cl => {
        if (cl.titleVi) addPhrase(cl.titleVi);
        if (cl.contentVi) addPhrase(cl.contentVi);
      });
    }
  });
}
if (businessProficiencyTest) {
  businessProficiencyTest.forEach(test => {
    if (test.questionVi) addPhrase(test.questionVi);
  });
}

// 4. Accent differences & Regional Phonetics
if (accentDifferences?.toneDifferences) {
  accentDifferences.toneDifferences.forEach(td => {
    if (td.sampleWord) addPhrase(td.sampleWord);
    if (td.northAudio) addPhrase(td.northAudio);
    if (td.southAudio) addPhrase(td.southAudio);
  });
}
if (accentDifferences?.phoneticRules) {
  accentDifferences.phoneticRules.forEach(r => {
    if (r.audioText) addPhrase(r.audioText);
    if (r.northAudioText) addPhrase(r.northAudioText);
    if (r.southAudioText) addPhrase(r.southAudioText);
    if (r.pairs) {
      r.pairs.forEach(p => {
        if (p.northWord) addPhrase(p.northWord);
        if (p.southWord) addPhrase(p.southWord);
      });
    }
  });
}
if (accentDifferences?.wordComparisonMatrix) {
  accentDifferences.wordComparisonMatrix.forEach(w => {
    addPhrase(w.north);
    addPhrase(w.south);
    if (w.south.includes('/')) {
      w.south.split('/').forEach(p => addPhrase(p.trim()));
    }
    if (w.north.includes('/')) {
      w.north.split('/').forEach(p => addPhrase(p.trim()));
    }
  });
}
if (accentDifferences?.regionalParticles) {
  accentDifferences.regionalParticles.forEach(reg => {
    reg.particles.forEach(p => {
      addPhrase(p.word);
      if (p.word.includes('/')) {
        p.word.split('/').forEach(part => addPhrase(part.trim()));
      }
    });
  });
}
[
  'Da', 'Ya', 'Giờ', 'Yờ', 'Rắn', 'Vào', 'Vô', 'Dào', 'Vui vẻ', 'Dui dẻ', 'Về', 'Dề',
  'Trà', 'Cha', 'Sữa', 'Sửa', 'Xa', 'Mã', 'Mả', 'Đã', 'Đả', 'Nghĩ', 'Nghỉ',
  'Bán', 'Báng', 'Mắt', 'Mắc', 'Ăn', 'Ăng', 'Quá', 'Oá', 'Quên', 'Uên',
  'Bệnh', 'Bện', 'Chính', 'Chín', 'Thích', 'Thít', 'Muổng', 'Dỉa', 'Nón', 'Mền', 'Vớ', 'Dù', 'Gởi thơ', 'ĐTDĐ'
].forEach(p => addPhrase(p));

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

// 10. Situational Scenarios (Dialogue 1, Dialogue 2, RolePlay Steps & Options, Vocab, Titles, CityGuides, Menus)
if (situationalScenarios) {
  situationalScenarios.forEach(sc => {
    if (sc.titleVi) addPhrase(sc.titleVi);

    // Both dialogue sections
    if (sc.dialogueSections) {
      sc.dialogueSections.forEach(sec => {
        sec.lines?.forEach(l => addPhrase(l.viet));
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
        st.userOptions?.forEach(opt => addPhrase(opt.textVi));
      });
    }
    // Core vocabulary
    if (sc.vocab) {
      sc.vocab.forEach(v => addPhrase(v.viet));
    }
    if (sc.vocabulary) {
      sc.vocabulary.forEach(v => addPhrase(v.viet));
    }
    // Real menu dishes & items
    if (sc.realMenu?.sections) {
      sc.realMenu.sections.forEach(sec => {
        sec.items?.forEach(item => {
          if (item.nameVi) addPhrase(item.nameVi);
        });
      });
    }
    // City guides
    if (sc.cityGuides?.regions) {
      sc.cityGuides.regions.forEach(reg => {
        if (reg.nameVi) addPhrase(reg.nameVi);
        reg.cities?.forEach(c => {
          if (c.nameVi) addPhrase(c.nameVi);
        });
      });
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

// 12. Business & Trade Show Data
if (tradeShowGuide?.expoVenues) {
  tradeShowGuide.expoVenues.forEach(v => {
    addPhrase(v.nameVi);
    addPhrase(v.addressVi);
  });
}
if (tradeShowGuide?.stages) {
  tradeShowGuide.stages.forEach(stg => {
    if (stg.stageNameVi) addPhrase(stg.stageNameVi);
    stg.phrases?.forEach(p => addPhrase(p.viet));
  });
}
if (dualCityBusinessGuide?.cities) {
  dualCityBusinessGuide.cities.forEach(c => {
    if (c.cityNameVi) addPhrase(c.cityNameVi);
    c.mustKnowPhrases?.forEach(p => addPhrase(p.viet));
  });
}
if (zaloNetworkingGuide?.templates) {
  zaloNetworkingGuide.templates.forEach(t => addPhrase(t.viet));
}
if (interactiveNegotiations) {
  interactiveNegotiations.forEach(n => {
    n.steps?.forEach(st => {
      addPhrase(st.partnerSpeech);
      st.options?.forEach(opt => addPhrase(opt.viet));
    });
  });
}
if (executiveSurvivalGuide) {
  executiveSurvivalGuide.forEach(g => {
    g.phrases?.forEach(p => addPhrase(p.viet));
    if (g.sampleInvoiceTemplate) {
      addPhrase(g.sampleInvoiceTemplate.companyNameVi);
      addPhrase(g.sampleInvoiceTemplate.addressVi);
    }
  });
}
if (smartFactoryGuide?.zones) {
  smartFactoryGuide.zones.forEach(z => {
    if (z.parks) {
      z.parks.forEach(p => addPhrase(p.name));
    }
    if (z.terms) {
      z.terms.forEach(t => {
        addPhrase(t.viet);
        addPhrase(t.example);
      });
    }
  });
}
if (nhauCultureGuide?.chants) {
  nhauCultureGuide.chants.forEach(c => addPhrase(c.viet));
}
if (executiveHanVietRoots) {
  executiveHanVietRoots.forEach(r => {
    addPhrase(r.root);
    r.examples?.forEach(e => addPhrase(e.vi));
  });
}
if (realWorldCommercialDocuments) {
  realWorldCommercialDocuments.forEach(doc => {
    if (doc.docTypeVi) addPhrase(doc.docTypeVi);
    if (doc.headerVi) addPhrase(doc.headerVi);
    doc.clauses?.forEach(cl => {
      if (cl.titleVi) addPhrase(cl.titleVi);
      if (cl.contentVi) addPhrase(cl.contentVi);
    });
  });
}
if (businessProficiencyTest) {
  businessProficiencyTest.forEach(test => {
    if (test.questionVi) addPhrase(test.questionVi);
    test.options?.forEach(opt => {
      if (typeof opt === 'string' && /[a-zA-Zà-ỹÀ-Ỹ]/.test(opt)) {
        addPhrase(opt);
      }
    });
  });
}
if (currencyBlitzQuestions) {
  currencyBlitzQuestions.forEach(q => {
    if (q.questionVi) addPhrase(q.questionVi);
    q.options?.forEach(opt => {
      if (typeof opt === 'string' && /[a-zA-Zà-ỹÀ-Ỹ]/.test(opt)) {
        addPhrase(opt);
      }
    });
  });
}

// 13. Tone Game Combinations
const baseSyllables = ['ma', 'ba', 'ca', 'la', 'ta', 'nha', 'kha', 'pha', 'da', 'hoa'];
const toneIds = ['ngang', 'huyen', 'sac', 'hoi', 'nga', 'nang'];
baseSyllables.forEach(base => {
  toneIds.forEach(tone => {
    let word = base;
    if (tone === 'huyen') word = word.replace('a', 'à');
    if (tone === 'sac') word = word.replace('a', 'á');
    if (tone === 'hoi') word = word.replace('a', 'ả');
    if (tone === 'nga') word = word.replace('a', 'ã');
    if (tone === 'nang') word = word.replace('a', 'ạ');
    addPhrase(word);
  });
});

// 14. FastTrack & Emergency Kit Modules
try {
  const fastTrackContent = fs.readFileSync(path.resolve('src/components/FastTrackModule.jsx'), 'utf8');
  const emergencyContent = fs.readFileSync(path.resolve('src/components/EmergencyKitModule.jsx'), 'utf8');
  const vietRegex = /viet:\s*['"`]([^'"`]+)['"`]/g;
  let match;
  while ((match = vietRegex.exec(fastTrackContent)) !== null) {
    addPhrase(match[1]);
  }
  while ((match = vietRegex.exec(emergencyContent)) !== null) {
    addPhrase(match[1]);
  }
} catch (e) {
  console.warn('Could not read FastTrack or Emergency kit components:', e);
}

console.log(`Total unique phrases to prepare for full audio bank: ${audioSet.size}`);

async function fetchAudioSingleChunk(text, retries = 4) {
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
        if (buffer.byteLength > 200) {
          return Buffer.from(buffer);
        }
      }
    } catch (e) {
      await new Promise(r => setTimeout(r, 500 * (i + 1)));
    }
  }
  return null;
}

async function fetchAudioWithRetry(text) {
  if (!text) return null;
  if (text.length <= 150) {
    return await fetchAudioSingleChunk(text);
  }
  
  // Split long texts by punctuation (. ! ? ;)
  const sentences = text.match(/[^.!?;\n]+[.!?;\n]*/g) || [text];
  const chunks = [];
  let currentChunk = '';
  
  for (const s of sentences) {
    if ((currentChunk + ' ' + s).length > 140) {
      if (currentChunk.trim()) chunks.push(currentChunk.trim());
      currentChunk = s;
    } else {
      currentChunk += (currentChunk ? ' ' : '') + s;
    }
  }
  if (currentChunk.trim()) chunks.push(currentChunk.trim());
  
  const audioBuffers = [];
  for (const chunk of chunks) {
    const buf = await fetchAudioSingleChunk(chunk);
    if (buf) {
      audioBuffers.push(buf);
    }
    await new Promise(r => setTimeout(r, 60));
  }
  
  if (audioBuffers.length > 0) {
    return Buffer.concat(audioBuffers);
  }
  return null;
}

const manifestPath = path.resolve('src/data/audioManifest.json');
let manifest = {};
if (fs.existsSync(manifestPath)) {
  try {
    manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
  } catch (e) {}
}

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

    if (fs.existsSync(filepath) && fs.statSync(filepath).size > 200) {
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

  // Also map all raw text inputs to their audio filenames
  rawToCleanMap.forEach((cleaned, raw) => {
    const hash = getHash(cleaned);
    manifest[raw] = `${hash}.mp3`;
  });

  // Write manifest file to src/data/audioManifest.json
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
