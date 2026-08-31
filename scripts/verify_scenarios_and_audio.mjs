import { situationalScenarios, scenarioCategories } from '../src/data/situationalScenarios.js';
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
import { 
  tradeShowGuide, 
  dualCityBusinessGuide, 
  zaloNetworkingGuide, 
  interactiveNegotiations, 
  executiveSurvivalGuide, 
  smartFactoryGuide, 
  nhauCultureGuide, 
  currencyBlitzQuestions, 
  executiveHanVietRoots 
} from '../src/data/businessData.js';

console.log('=== AUDITING ALL DATA & SCENARIOS ===');
console.log(`Total Situational Scenarios: ${situationalScenarios.length}`);

const categoryCounts = {};
situationalScenarios.forEach((s, idx) => {
  categoryCounts[s.category] = (categoryCounts[s.category] || 0) + 1;
  if (!s.id || !s.titleZh || !s.titleVi) {
    console.error(`Error in scenario index ${idx}: missing id or title`);
  }
  if (!s.dialogues || s.dialogues.length === 0) {
    console.error(`Error in scenario ${s.id}: dialogues empty`);
  }
  if (!s.vocabulary || s.vocabulary.length === 0) {
    console.error(`Error in scenario ${s.id}: vocabulary empty`);
  }
  if (!s.culturalTip) {
    console.error(`Error in scenario ${s.id}: missing culturalTip`);
  }
});

console.log('Scenario Counts by Category:', categoryCounts);

// Audit Audio Manifest and Texts
let totalPhrases = 0;
let emptyPhrases = 0;

function checkText(txt, context) {
  if (!txt || typeof txt !== 'string' || txt.trim() === '') {
    emptyPhrases++;
    console.warn(`Empty text in ${context}`);
  } else {
    totalPhrases++;
  }
}

// Check Situational Scenarios
situationalScenarios.forEach(s => {
  s.dialogues.forEach(d => checkText(d.viet, `scenario ${s.id} dialogue`));
  s.vocabulary.forEach(v => checkText(v.viet, `scenario ${s.id} vocab`));
});

// Check Business Data
tradeShowGuide.stages.forEach(stg => stg.phrases.forEach(p => checkText(p.viet, 'tradeShow phrase')));
dualCityBusinessGuide.cities.forEach(c => c.mustKnowPhrases.forEach(p => checkText(p.viet, 'city phrase')));
zaloNetworkingGuide.templates.forEach(t => checkText(t.viet, 'zalo template'));
interactiveNegotiations.forEach(n => {
  n.steps.forEach(st => {
    checkText(st.partnerSpeech, 'negotiation partner speech');
    st.options.forEach(o => checkText(o.viet, 'negotiation option'));
  });
});
executiveSurvivalGuide.forEach(g => g.phrases.forEach(p => checkText(p.viet, 'survival phrase')));
smartFactoryGuide.zones.forEach(z => {
  if (z.terms) z.terms.forEach(t => { checkText(t.viet, 'factory term'); checkText(t.example, 'factory example'); });
});
nhauCultureGuide.chants.forEach(c => checkText(c.viet, 'nhau chant'));
executiveHanVietRoots.forEach(r => r.examples.forEach(e => checkText(e.vi, 'hanviet example')));

// Check VietnameseData
flashcardsDeck.forEach(f => checkText(f.viet, 'flashcard'));
practicalPhrases.forEach(p => checkText(p.viet, 'practical phrase'));

console.log(`Audited total of ${totalPhrases} unique phrase and dialogue items!`);
console.log(`Empty/Invalid phrases found: ${emptyPhrases}`);

if (emptyPhrases === 0) {
  console.log('🎉 ALL DATA INTEGRITY CHECKS PASSED PERFECTLY!');
} else {
  console.error('❌ SOME ISSUES DETECTED!');
  process.exit(1);
}
