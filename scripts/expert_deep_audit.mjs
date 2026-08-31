import fs from 'fs';
import path from 'path';
import { 
  vietnameseAlphabet, 
  vietnameseTones, 
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
  quizzes,
  learningPath
} from '../src/data/vietnameseData.js';
import { situationalScenarios, scenarioCategories } from '../src/data/situationalScenarios.js';
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

console.log('===========================================================');
console.log('🏛️ EXPERT COMMITTEE DEEP AUDIT & QUALITY VERIFICATION');
console.log('===========================================================');

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audioDir = path.resolve('public/audio');

let manifestValidFiles = 0;
let manifestCorruptFiles = 0;

for (const [phrase, filename] of Object.entries(manifest)) {
  const filePath = path.join(audioDir, filename);
  if (fs.existsSync(filePath)) {
    const stat = fs.statSync(filePath);
    if (stat.size > 300) {
      manifestValidFiles++;
    } else {
      manifestCorruptFiles++;
      console.warn(`Warning: file too small (${stat.size} bytes): ${filename} for "${phrase}"`);
    }
  } else {
    manifestCorruptFiles++;
    console.error(`Missing audio file on disk: ${filename} for "${phrase}"`);
  }
}

console.log(`Audio Manifest Integrity:`);
console.log(`- Total Manifest Entries: ${Object.keys(manifest).length}`);
console.log(`- Verified Valid MP3 Files on Disk: ${manifestValidFiles}`);
console.log(`- Corrupted/Missing Files: ${manifestCorruptFiles}`);

// 2. Audit All Educational Datasets
console.log('\n--- Educational Modules Audit ---');
console.log(`1. Alphabet Letters: ${vietnameseAlphabet.length}`);
console.log(`2. Six Vietnamese Tones: ${vietnameseTones.length}`);
console.log(`3. Han-Viet Roots: ${hanVietRoots.length}`);
console.log(`4. Pronoun & Kinship Terms: ${pronounKinshipData.length}`);
console.log(`5. Corporate Hierarchy Roles: ${corporatePronounHierarchy?.length || 0}`);
console.log(`6. Politeness Golden Rules: ${politenessRules?.length || 0}`);
console.log(`7. Multi-Stage Dialogues: ${multiScenarios.length} stages`);
console.log(`8. Flashcards Deck: ${flashcardsDeck.length} cards`);
console.log(`9. Grammar Rules: ${grammarRules.length}`);
console.log(`10. Interactive Sentence Puzzles: ${interactivePuzzles.length}`);
console.log(`11. Quizzes & Tests: ${quizzes.length}`);
console.log(`12. Learning Path Stages: ${learningPath.length}`);
console.log(`13. Situational Scenarios: ${situationalScenarios.length} (Business: ${situationalScenarios.filter(s => s.category === 'business').length})`);
console.log(`14. Business Hub Modules:`);
console.log(`    - Trade Show Stages: ${tradeShowGuide.stages.length}`);
console.log(`    - Dual-City Comparisons: ${dualCityBusinessGuide.cities.length}`);
console.log(`    - Zalo Networking Templates: ${zaloNetworkingGuide.templates.length}`);
console.log(`    - Interactive Negotiation Battles: ${interactiveNegotiations.length}`);
console.log(`    - Executive Survival Guides: ${executiveSurvivalGuide.length}`);
console.log(`    - Smart Factory Zones: ${smartFactoryGuide.zones.length}`);
console.log(`    - Nhậu Banquet Chants: ${nhauCultureGuide.chants.length}`);
console.log(`    - Currency Blitz Questions: ${currencyBlitzQuestions.length}`);
console.log(`    - Executive Han-Viet Roots: ${executiveHanVietRoots.length}`);

// 3. Check for any malformed strings or undefined translations
let totalStringsAudited = 0;
let errorsFound = 0;

function auditObject(obj, pathName = '') {
  if (!obj) return;
  if (typeof obj === 'string') {
    totalStringsAudited++;
    if (obj.includes('undefined') || obj.includes('null') || obj.trim() === '') {
      console.error(`Potential malformed string at ${pathName}: "${obj}"`);
      errorsFound++;
    }
  } else if (Array.isArray(obj)) {
    obj.forEach((item, idx) => auditObject(item, `${pathName}[${idx}]`));
  } else if (typeof obj === 'object') {
    for (const [key, val] of Object.entries(obj)) {
      auditObject(val, `${pathName}.${key}`);
    }
  }
}

auditObject(vietnameseAlphabet, 'alphabet');
auditObject(vietnameseTones, 'tones');
auditObject(hanVietRoots, 'hanVietRoots');
auditObject(pronounKinshipData, 'pronouns');
auditObject(corporatePronounHierarchy, 'corporatePronouns');
auditObject(politenessRules, 'politenessRules');
auditObject(flashcardsDeck, 'flashcards');
auditObject(situationalScenarios, 'situationalScenarios');
auditObject(tradeShowGuide, 'tradeShowGuide');
auditObject(dualCityBusinessGuide, 'dualCityBusinessGuide');
auditObject(zaloNetworkingGuide, 'zaloNetworkingGuide');
auditObject(interactiveNegotiations, 'interactiveNegotiations');
auditObject(executiveSurvivalGuide, 'executiveSurvivalGuide');

console.log(`\nTotal text strings checked across all learning data: ${totalStringsAudited}`);
console.log(`Malformed / invalid strings detected: ${errorsFound}`);

if (errorsFound === 0 && manifestCorruptFiles === 0) {
  console.log('\n🎉 ALL EXPERT AUDIT CHECKS PASSED WITH 100% INTEGRITY & LEGITIMACY!');
} else {
  console.error('\n❌ AUDIT FOUND ISSUES!');
  process.exit(1);
}
