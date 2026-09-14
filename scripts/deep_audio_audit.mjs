import fs from 'fs';
import path from 'path';

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

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

function hasAudio(text) {
  if (!text) return true;
  const raw = String(text).trim();
  const cl = cleanText(raw);
  if (!cl) return true;
  return !!(
    manifest[raw] ||
    manifest[raw.toLowerCase()] ||
    manifest[cl] ||
    manifest[cl.toLowerCase()] ||
    manifest[raw.replace(/[.,?!;:…]+$/g, '').trim()] ||
    manifest[cl.replace(/[.,?!;:…]+$/g, '').trim()]
  );
}

const auditMap = new Map();

function registerCheck(category, raw) {
  if (!raw || typeof raw !== 'string') return;
  const t = raw.trim();
  if (t.length <= 1) return;
  const cl = cleanText(t);
  if (!cl) return;
  if (!hasAudio(t)) {
    if (!auditMap.has(cl)) {
      auditMap.set(cl, { category, raw: t, cleaned: cl });
    }
  }
}

// 1. situationalScenarios.js
import { situationalScenarios } from '../src/data/situationalScenarios.js';
situationalScenarios.forEach(sc => {
  if (sc.dialogues) sc.dialogues.forEach(d => registerCheck(`Scenario [${sc.id}] Dialogue`, d.viet));
  const vList = sc.vocabulary || sc.vocab || [];
  vList.forEach(v => registerCheck(`Scenario [${sc.id}] Vocab`, v.viet || v.word));
  if (sc.rolePlay?.steps) {
    sc.rolePlay.steps.forEach(st => {
      if (st.partnerPromptVi) registerCheck(`Scenario [${sc.id}] RolePlay Prompt`, st.partnerPromptVi);
      if (st.options) st.options.forEach(opt => registerCheck(`Scenario [${sc.id}] RolePlay Option`, opt.viet || opt.textVi));
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
  corporatePronounHierarchy,
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
});
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

// 4. businessData.js
import {
  tradeShowGuide,
  interactiveNegotiations,
  executiveSurvivalGuide,
  nhauCultureGuide,
  executiveHanVietRoots,
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

// 5. macroData.js
import {
  macroVocabularyGlossary
} from '../src/data/macroData.js';

if (macroVocabularyGlossary) {
  macroVocabularyGlossary.forEach(m => {
    if (m.termVi) registerCheck('MacroGlossary', m.termVi);
  });
}

// 6. Components with known inline speech
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

console.log('=== COMPREHENSIVE AUDIO AUDIT SUMMARY ===');
console.log('Total unique missing phrases found:', auditMap.size);

const byCat = {};
auditMap.forEach(item => {
  const cat = item.category.split(' ')[0];
  byCat[cat] = (byCat[cat] || 0) + 1;
});
console.log('Missing by category group:', byCat);

console.log('\n--- Full Missing List ---');
let i = 1;
auditMap.forEach(item => {
  console.log(`[${i++}] [${item.category}] "${item.raw}"`);
});
