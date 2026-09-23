import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

// Exact text cleaner matching audioEngine.cleanText
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

// Normalized manifest lookup
const normalizedManifest = new Map();
Object.entries(manifest).forEach(([text, file]) => {
  if (text && file) {
    const trimmed = text.trim();
    normalizedManifest.set(trimmed, file);
    normalizedManifest.set(trimmed.toLowerCase(), file);
    const stripped = trimmed.replace(/[.,?!;:…]+$/g, '').trim();
    if (stripped) {
      normalizedManifest.set(stripped, file);
      normalizedManifest.set(stripped.toLowerCase(), file);
    }
  }
});

function hasAudio(text) {
  if (!text) return true;
  const raw = String(text).trim();
  const cl = cleanText(raw);
  if (!cl) return true;

  const candidates = [
    raw,
    raw.toLowerCase(),
    cl,
    cl.toLowerCase(),
    raw.replace(/[.,?!;:…]+$/g, '').trim(),
    cl.replace(/[.,?!;:…]+$/g, '').trim(),
    `${cl}_north`,
    `${cl}_south`,
    `${raw}_north`,
    `${raw}_south`
  ];

  for (const cand of candidates) {
    const fileName = manifest[cand] || normalizedManifest.get(cand);
    if (fileName) {
      const filePath = path.resolve('public/audio', fileName);
      if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        if (stat.size > 200) {
          return true;
        }
      }
    }
  }
  return false;
}

const auditMap = new Map();

function registerCheck(category, raw) {
  if (!raw || typeof raw !== 'string') return;
  const t = raw.trim();
  if (t.length <= 1) return;
  const cl = cleanText(t);
  if (!cl || cl.length <= 1) return;
  if (!hasAudio(t)) {
    if (!auditMap.has(cl)) {
      auditMap.set(cl, { category, raw: t, cleaned: cl });
    }
  }
}

// 1. situationalScenarios.js
import { situationalScenarios } from '../src/data/situationalScenarios.js';
situationalScenarios.forEach(sc => {
  const dList = sc.dialogues || sc.dialogue || [];
  dList.forEach(d => registerCheck(`Scenario [${sc.id}] Dialogue`, d.viet || d.vi));
  
  const vList = sc.vocabulary || sc.vocab || [];
  vList.forEach(v => registerCheck(`Scenario [${sc.id}] Vocab`, v.viet || v.vi || v.word));
  
  const rp = sc.rolePlay || sc.roleplay;
  if (rp?.steps) {
    rp.steps.forEach(st => {
      if (st.partnerPromptVi) registerCheck(`Scenario [${sc.id}] RolePlay Prompt`, st.partnerPromptVi);
      const opts = st.options || st.userOptions || [];
      opts.forEach(opt => registerCheck(`Scenario [${sc.id}] RolePlay Option`, opt.viet || opt.textVi));
    });
  }
  if (sc.realMenu?.sections) {
    sc.realMenu.sections.forEach(sec => {
      if (sec.items) sec.items.forEach(it => registerCheck(`Scenario [${sc.id}] RealMenu`, it.nameVi));
    });
  }
  if (sc.cityGuides?.regions) {
    sc.cityGuides.regions.forEach(reg => {
      if (reg.nameVi) registerCheck(`Scenario [${sc.id}] CityGuide Region`, reg.nameVi);
      if (reg.cities) reg.cities.forEach(c => {
        if (c.nameVi) registerCheck(`Scenario [${sc.id}] CityGuide City`, c.nameVi);
      });
    });
  }
});

// 2. situationalTopicsData.js
import { SITUATIONAL_TOPICS } from '../src/data/situationalTopicsData.js';
SITUATIONAL_TOPICS.forEach(topic => {
  if (topic.quickGuide?.survivalTable) {
    topic.quickGuide.survivalTable.forEach(item => registerCheck(`Topic [${topic.id}] Survival`, item.viet));
  }
  if (topic.quickGuide?.sentencePatterns) {
    topic.quickGuide.sentencePatterns.forEach(p => {
      if (p.example) registerCheck(`Topic [${topic.id}] Pattern`, p.example);
    });
  }
  if (topic.dialogues) {
    topic.dialogues.forEach(d => {
      if (d.lines) d.lines.forEach(l => registerCheck(`Topic [${topic.id}] Dialogue`, l.viet));
    });
  }
  if (topic.flashcardDeck) {
    topic.flashcardDeck.forEach(fc => registerCheck(`Topic [${topic.id}] Flashcard`, fc.viet));
  }
  if (topic.deepLessons?.hanVietCognates) {
    topic.deepLessons.hanVietCognates.forEach(c => registerCheck(`Topic [${topic.id}] HanViet`, c.viet));
  }
});

// 3. vietnameseData.js
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
  politenessRules,
  multiScenarios,
  practicalPhrases,
  flashcardsDeck,
  grammarRules
} from '../src/data/vietnameseData.js';

if (practicalPhrases) practicalPhrases.forEach(p => registerCheck('PracticalPhrases', p.viet));
if (flashcardsDeck) flashcardsDeck.forEach(f => {
  registerCheck('FlashcardDeck', f.viet);
  if (f.exampleVi) registerCheck('FlashcardDeck Example', f.exampleVi);
});
if (vietnameseAlphabet) vietnameseAlphabet.forEach(a => {
  registerCheck('Alphabet', a.name);
  if (a.example) registerCheck('Alphabet Example', a.example);
  if (a.name && a.example) registerCheck('Alphabet Full', `${a.name}. ${a.example}.`);
});
if (vietnameseTones) vietnameseTones.forEach(t => {
  registerCheck('Tone', t.name);
  if (t.example) registerCheck('Tone Example', t.example);
});
if (vietnameseSingleVowels) vietnameseSingleVowels.forEach(v => {
  registerCheck('SingleVowel', v.vowel);
  if (v.example) registerCheck('SingleVowel Example', v.example);
});
if (vietnameseCompoundConsonants) vietnameseCompoundConsonants.forEach(c => {
  registerCheck('CompoundConsonant', c.consonant);
  if (c.example) registerCheck('CompoundConsonant Example', c.example);
});
if (vietnameseFinalConsonants) vietnameseFinalConsonants.forEach(c => {
  registerCheck('FinalConsonant', c.consonant);
  if (c.example) registerCheck('FinalConsonant Example', c.example);
});
if (vietnameseDiphthongsTriphthongs) vietnameseDiphthongsTriphthongs.forEach(d => {
  registerCheck('Diphthong', d.combo);
  if (d.example) registerCheck('Diphthong Example', d.example);
});
if (toneMinimalPairs) toneMinimalPairs.forEach(p => {
  if (p.word1) registerCheck('TonePair', p.word1);
  if (p.word2) registerCheck('TonePair', p.word2);
  if (p.example1) registerCheck('TonePair Ex1', p.example1);
  if (p.example2) registerCheck('TonePair Ex2', p.example2);
});
if (accentDifferences?.wordComparisonMatrix) {
  accentDifferences.wordComparisonMatrix.forEach(w => {
    if (w.north) registerCheck('Accent North', w.north);
    if (w.south) registerCheck('Accent South', w.south);
  });
}
if (accentDifferences?.toneDifferences) {
  accentDifferences.toneDifferences.forEach(t => {
    if (t.sampleWord) registerCheck('Accent Tone', t.sampleWord);
  });
}
if (accentDifferences?.phoneticRules) {
  accentDifferences.phoneticRules.forEach(r => {
    if (r.pairs) {
      r.pairs.forEach(p => {
        if (p.northWord) registerCheck('PhoneticPair North', p.northWord);
        if (p.southWord) registerCheck('PhoneticPair South', p.southWord);
      });
    }
  });
}
if (accentDifferences?.regionalParticles) {
  accentDifferences.regionalParticles.forEach(reg => {
    if (reg.particles) {
      reg.particles.forEach(pt => {
        if (pt.word) registerCheck('RegionalParticle', pt.word);
      });
    }
  });
}
if (pronounKinshipData) pronounKinshipData.forEach(p => registerCheck('Pronoun', p.pronoun));
if (numbersAndCurrency?.baseNumbers) numbersAndCurrency.baseNumbers.forEach(n => registerCheck('BaseNumber', n.viet));
if (numbersAndCurrency?.priceTiers) numbersAndCurrency.priceTiers.forEach(p => registerCheck('PriceTier', p.viet));
if (numbersAndCurrency?.bankingDialogues) {
  numbersAndCurrency.bankingDialogues.forEach(b => {
    if (b.dialogue) b.dialogue.forEach(d => registerCheck('BankingDialogue', d.viet));
  });
}
if (numbersAndCurrency?.highFrequencyShopping?.items) {
  numbersAndCurrency.highFrequencyShopping.items.forEach(it => registerCheck('ShoppingItem', it.viet));
}
if (grammarRules) grammarRules.forEach(g => {
  if (g.examples) g.examples.forEach(e => registerCheck('GrammarExample', e.viet));
});
if (hanVietRoots) hanVietRoots.forEach(r => {
  if (r.root) registerCheck('HanVietRoot', r.root);
  if (r.examples) r.examples.forEach(ex => {
    if (ex.vi) registerCheck('HanVietRoot Ex', ex.vi);
  });
});
if (politenessRules) politenessRules.forEach(p => {
  if (p.examples) p.examples.forEach(e => registerCheck('PolitenessExample', e.viet));
});
if (multiScenarios) multiScenarios.forEach(ms => {
  if (ms.dialogues) ms.dialogues.forEach(d => registerCheck('MultiScenario Dialogue', d.viet));
  if (ms.vocabulary) ms.vocabulary.forEach(v => registerCheck('MultiScenario Vocab', v.viet));
});

// 4. businessData.js
import {
  tradeShowGuide,
  interactiveNegotiations,
  executiveSurvivalGuide,
  nhauCultureGuide,
  executiveHanVietRoots,
  smartFactoryGuide,
  zaloNetworkingGuide,
  realWorldCommercialDocuments
} from '../src/data/businessData.js';

if (executiveSurvivalGuide) {
  executiveSurvivalGuide.forEach(g => {
    if (g.phrases) g.phrases.forEach(p => registerCheck('ExecutiveSurvival', p.viet));
  });
}
if (interactiveNegotiations) {
  interactiveNegotiations.forEach(n => {
    if (n.dialogue) n.dialogue.forEach(d => registerCheck('NegotiationDialogue', d.viet));
  });
}
if (tradeShowGuide?.pitchPhrases) {
  tradeShowGuide.pitchPhrases.forEach(p => registerCheck('TradeShowPitch', p.viet));
}
if (nhauCultureGuide?.phrases) {
  nhauCultureGuide.phrases.forEach(p => registerCheck('NhauPhrase', p.viet));
}
if (executiveHanVietRoots) {
  executiveHanVietRoots.forEach(r => {
    if (r.root) registerCheck('ExecHanVietRoot', r.root);
    if (r.examples) r.examples.forEach(ex => {
      if (ex.vi) registerCheck('ExecHanVietRoot Ex', ex.vi);
    });
  });
}
if (smartFactoryGuide?.keyPhrases) {
  smartFactoryGuide.keyPhrases.forEach(p => registerCheck('SmartFactory Phrase', p.viet));
}
if (zaloNetworkingGuide?.templates) {
  zaloNetworkingGuide.templates.forEach(t => registerCheck('ZaloTemplate', t.viet));
}
if (realWorldCommercialDocuments) {
  realWorldCommercialDocuments.forEach(doc => {
    if (doc.clauses) {
      doc.clauses.forEach(c => {
        if (c.titleVi) registerCheck('RealDoc Clause Title', c.titleVi);
        if (c.contentVi) registerCheck('RealDoc Clause Content', c.contentVi);
      });
    }
  });
}

// 5. macroData.js
import {
  macroVocabularyGlossary
} from '../src/data/macroData.js';

if (macroVocabularyGlossary) {
  macroVocabularyGlossary.forEach(m => {
    if (m.termVi) registerCheck('MacroGlossary', m.termVi);
  });
}

// 6. UI Components
const emergencyContent = fs.readFileSync(path.resolve('src/components/EmergencyKitModule.jsx'), 'utf8');
const vietRegex = /viet:\s*['"`]([^'"`]+)['"`]/g;
let match;
while ((match = vietRegex.exec(emergencyContent)) !== null) {
  registerCheck('EmergencyKitModule', match[1]);
}

const fastTrackContent = fs.readFileSync(path.resolve('src/components/FastTrackModule.jsx'), 'utf8');
while ((match = vietRegex.exec(fastTrackContent)) !== null) {
  registerCheck('FastTrackModule', match[1]);
}

// HanVietModule Sound Rules
const hanVietContent = fs.readFileSync(path.resolve('src/components/HanVietModule.jsx'), 'utf8');
const viRegex = /vi:\s*['"`]([^'"`]+)['"`]/g;
while ((match = viRegex.exec(hanVietContent)) !== null) {
  registerCheck('HanVietModule SoundRule', match[1]);
}

// FastTrack drills
const fastTrackDrills = [
  'Rất vui được gặp bạn!',
  'Cho tôi một ly cà phê sữa đá.',
  'Cái này bao nhiêu tiền một ký?',
  'Làm ơn cho tôi đến địa chỉ này.',
  'Chào anh, em là người Đài Loan.',
  'Hôm nay thời tiết đẹp quá nhỉ?',
  'Làm ơn giúp tôi với cảnh sát!'
];
fastTrackDrills.forEach(d => registerCheck('FastTrack Drill', d));

// Quizzes
import { quizzes } from '../src/data/vietnameseData.js';
if (quizzes) quizzes.forEach(q => {
  if (q.viet) registerCheck('Quiz Viet', q.viet);
  if (q.options) q.options.forEach(opt => {
    if (/^[A-Za-zà-ỹÀ-Ỹ\s,?.!]+$/.test(opt) && !/[\u4e00-\u9fa5]/.test(opt)) {
      registerCheck('Quiz Option', opt);
    }
  });
});

// GrammarModule Expanded Rules & Drills
const grammarContent = fs.readFileSync(path.resolve('src/components/GrammarModule.jsx'), 'utf8');
const exampleViRegex = /exampleVi:\s*['"`]([^'"`]+)['"`]/g;
while ((match = exampleViRegex.exec(grammarContent)) !== null) {
  registerCheck('Grammar Rule Example', match[1]);
}
const audioTextRegex = /audioText:\s*['"`]([^'"`]+)['"`]/g;
while ((match = audioTextRegex.exec(grammarContent)) !== null) {
  registerCheck('Grammar Drill AudioText', match[1]);
}
const textViRegex = /textVi:\s*['"`]([^'"`]+)['"`]/g;
while ((match = textViRegex.exec(grammarContent)) !== null) {
  registerCheck('Grammar Drill TextVi', match[1]);
}

// 7. FREQUENCY_VOCABULARY (Top 1,000 core foundation words)
import { FREQUENCY_VOCABULARY } from '../src/data/frequencyVocabularyData.js';
if (FREQUENCY_VOCABULARY) {
  const top1k = FREQUENCY_VOCABULARY.slice(0, 1000);
  top1k.forEach(item => {
    registerCheck('Top1k Vocab', item.viet);
  });
}

// ToneGameModule Tricky Pairs & Real Words
const TRICKY_PAIRS = [
  'mả', 'mã', 'ngủ', 'ngũ', 'sữa', 'sửa', 'má', 'mạ',
  'bán', 'bạn', 'cà', 'ca', 'chủ', 'chú', 'cả', 'cá',
  'rùa', 'rủa', 'lấy', 'lạy'
];
TRICKY_PAIRS.forEach(w => registerCheck('ToneGame Tricky', w));

const REAL_WORDS = [
  'phở', 'bún', 'cơm', 'thịt', 'tiền', 'nước', 'đẹp', 'ngon', 'rẻ', 'chữa', 'bệnh', 'chào'
];
REAL_WORDS.forEach(w => registerCheck('ToneGame Real', w));

console.log('=== COMPREHENSIVE AUDIO AUDIT V2 SUMMARY ===');
console.log('Total unique missing phrases found:', auditMap.size);

const byCat = {};
auditMap.forEach(item => {
  const cat = item.category.split(' ')[0];
  byCat[cat] = (byCat[cat] || 0) + 1;
});
console.log('Missing by category group:', byCat);

console.log('\n--- Full Missing Items ---');
let i = 1;
const missingList = [];
auditMap.forEach((item, cleaned) => {
  missingList.push(item);
  console.log(`[${i++}] [${item.category}] "${item.raw}" -> Cleaned: "${cleaned}"`);
});

fs.writeFileSync(
  path.resolve('scripts/missing_audio_list.json'),
  JSON.stringify(missingList, null, 2),
  'utf8'
);
console.log(`\nWrote ${missingList.length} items to scripts/missing_audio_list.json`);
