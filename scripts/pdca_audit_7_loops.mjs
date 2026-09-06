import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';

const projectRoot = 'c:/Users/User/OneDrive/文件/Antigravity/Viet';

// Import all data sources with file:// URLs
const { situationalScenarios } = await import(pathToFileURL(path.join(projectRoot, 'src/data/situationalScenarios.js')).href);
const vietData = await import(pathToFileURL(path.join(projectRoot, 'src/data/vietnameseData.js')).href);
const busData = await import(pathToFileURL(path.join(projectRoot, 'src/data/businessData.js')).href);

const manifestPath = path.join(projectRoot, 'src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audioDir = path.join(projectRoot, 'public/audio');
const existingAudioFiles = new Set(fs.readdirSync(audioDir));

// Also check audioEngine cleanText logic
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

function resolveAudio(rawText) {
  if (!rawText) return null;
  const rawClean = rawText.trim();
  const cleaned = cleanText(rawText);
  
  const candidates = [
    rawClean,
    rawClean.toLowerCase(),
    cleaned,
    cleaned.toLowerCase(),
    rawClean.replace(/[.,?!;:…]+$/g, '').trim(),
    cleaned.replace(/[.,?!;:…]+$/g, '').trim()
  ];
  
  for (const c of candidates) {
    if (c && manifest[c]) {
      const fn = manifest[c];
      if (existingAudioFiles.has(fn)) {
        const stat = fs.statSync(path.join(audioDir, fn));
        if (stat.size >= 500) {
          return { found: true, filename: fn, size: stat.size };
        } else {
          return { found: false, filename: fn, reason: `corrupt size ${stat.size}B` };
        }
      }
    }
  }
  return { found: false, reason: 'not in manifest or file missing' };
}

function auditVietnameseSpelling(text, context) {
  const issues = [];
  if (!text || typeof text !== 'string' || text.trim() === '') {
    issues.push('Empty text');
    return issues;
  }
  if (text.includes('undefined') || text.includes('null')) {
    issues.push('Contains broken string placeholder (undefined/null)');
  }
  if ((text.includes('(') && !text.includes(')')) || (text.includes('（') && !text.includes('）'))) {
    issues.push('Mismatched parentheses');
  }
  return issues;
}

const auditResults = {
  loop1: { name: 'Situational Dialogues & Roleplay (Conversation Module)', total: 0, missingAudio: [], spellingIssues: [] },
  loop2: { name: 'Business Hub & Trade Show / Factory / Negotiations', total: 0, missingAudio: [], spellingIssues: [] },
  loop3: { name: 'Alphabet, Vowels, Consonants, Tones & Tone Game', total: 0, missingAudio: [], spellingIssues: [] },
  loop4: { name: 'Pronouns, Politeness & Kinship Matrix', total: 0, missingAudio: [], spellingIssues: [] },
  loop5: { name: 'Han-Viet Cognates & Etymology System', total: 0, missingAudio: [], spellingIssues: [] },
  loop6: { name: 'Practical 1000+ Phrases, Flashcards, Numbers/Shopping & Grammar', total: 0, missingAudio: [], spellingIssues: [] },
  loop7: { name: 'FastTrack, Emergency Kit, Quizzes & Interactive UI', total: 0, missingAudio: [], spellingIssues: [] }
};

function recordItem(loopKey, text, context) {
  if (!text || typeof text !== 'string') return;
  const loop = auditResults[loopKey];
  loop.total++;
  
  const spellIssues = auditVietnameseSpelling(text, context);
  if (spellIssues.length > 0) {
    loop.spellingIssues.push({ text, context, issues: spellIssues });
  }
  
  const audioRes = resolveAudio(text);
  if (!audioRes || !audioRes.found) {
    loop.missingAudio.push({ text, context, reason: audioRes?.reason || 'missing' });
  }
}

// ----------------------------------------------------
// LOOP 1: Situational Dialogues & Roleplay
// ----------------------------------------------------
situationalScenarios.forEach(sc => {
  if (sc.titleVi) recordItem('loop1', sc.titleVi, `Scenario ${sc.id} titleVi`);
  
  if (sc.dialogueSections) {
    sc.dialogueSections.forEach((sec, sIdx) => {
      sec.lines?.forEach((l, lIdx) => {
        recordItem('loop1', l.viet, `Scenario ${sc.id} sec ${sec.id} line ${lIdx}`);
      });
    });
  }
  if (sc.dialogues) {
    sc.dialogues.forEach((d, dIdx) => {
      recordItem('loop1', d.viet, `Scenario ${sc.id} dialogue ${dIdx}`);
    });
  }
  if (sc.rolePlay?.steps) {
    sc.rolePlay.steps.forEach((st, stIdx) => {
      recordItem('loop1', st.partnerPromptVi, `Scenario ${sc.id} roleplay partner step ${stIdx}`);
      st.userOptions?.forEach((opt, oIdx) => {
        recordItem('loop1', opt.textVi, `Scenario ${sc.id} roleplay option step ${stIdx} opt ${oIdx}`);
      });
    });
  }
  if (sc.vocab) {
    sc.vocab.forEach((v, vIdx) => {
      recordItem('loop1', v.viet, `Scenario ${sc.id} vocab ${vIdx}`);
    });
  }
  if (sc.vocabulary) {
    sc.vocabulary.forEach((v, vIdx) => {
      recordItem('loop1', v.viet, `Scenario ${sc.id} vocabulary ${vIdx}`);
    });
  }
  if (sc.realMenu?.sections) {
    sc.realMenu.sections.forEach((sec, secIdx) => {
      sec.items?.forEach((it, itIdx) => {
        recordItem('loop1', it.nameVi, `Scenario ${sc.id} realMenu section ${secIdx} item ${itIdx}`);
      });
    });
  }
  if (sc.cityGuides?.regions) {
    sc.cityGuides.regions.forEach((reg, rIdx) => {
      recordItem('loop1', reg.nameVi, `Scenario ${sc.id} cityGuide region ${rIdx}`);
      reg.cities?.forEach((c, cIdx) => {
        recordItem('loop1', c.nameVi, `Scenario ${sc.id} cityGuide region ${rIdx} city ${cIdx}`);
      });
    });
  }
});

// ----------------------------------------------------
// LOOP 2: Business Hub
// ----------------------------------------------------
const {
  tradeShowGuide,
  dualCityBusinessGuide,
  zaloNetworkingGuide,
  interactiveNegotiations,
  executiveSurvivalGuide,
  smartFactoryGuide,
  nhauCultureGuide,
  executiveHanVietRoots,
  realWorldCommercialDocuments,
  businessProficiencyTest
} = busData;

if (tradeShowGuide?.stages) {
  tradeShowGuide.stages.forEach((stg, sIdx) => {
    stg.phrases?.forEach((p, pIdx) => recordItem('loop2', p.viet, `TradeShow stage ${sIdx} phrase ${pIdx}`));
  });
}
if (dualCityBusinessGuide?.cities) {
  dualCityBusinessGuide.cities.forEach((c, cIdx) => {
    c.mustKnowPhrases?.forEach((p, pIdx) => recordItem('loop2', p.viet, `DualCity ${c.id} phrase ${pIdx}`));
  });
}
if (zaloNetworkingGuide?.templates) {
  zaloNetworkingGuide.templates.forEach((t, tIdx) => {
    recordItem('loop2', t.viet, `Zalo template ${tIdx}`);
  });
}
if (interactiveNegotiations) {
  interactiveNegotiations.forEach((n, nIdx) => {
    n.steps?.forEach((st, stIdx) => {
      recordItem('loop2', st.partnerSpeech, `Negotiation ${n.id} step ${stIdx} partnerSpeech`);
      st.options?.forEach((opt, oIdx) => recordItem('loop2', opt.viet, `Negotiation ${n.id} step ${stIdx} opt ${oIdx}`));
    });
  });
}
if (executiveSurvivalGuide) {
  executiveSurvivalGuide.forEach((g, gIdx) => {
    g.phrases?.forEach((p, pIdx) => recordItem('loop2', p.viet, `Survival guide ${g.id} phrase ${pIdx}`));
  });
}
if (smartFactoryGuide?.zones) {
  smartFactoryGuide.zones.forEach((z, zIdx) => {
    z.terms?.forEach((t, tIdx) => {
      recordItem('loop2', t.viet, `Factory zone ${z.id} term ${tIdx}`);
      recordItem('loop2', t.example, `Factory zone ${z.id} example ${tIdx}`);
    });
  });
}
if (nhauCultureGuide?.chants) {
  nhauCultureGuide.chants.forEach((c, cIdx) => {
    recordItem('loop2', c.viet, `Nhau chant ${cIdx}`);
  });
}
if (realWorldCommercialDocuments) {
  realWorldCommercialDocuments.forEach((doc, dIdx) => {
    if (doc.headerVi) recordItem('loop2', doc.headerVi, `CommercialDoc ${doc.id} headerVi`);
    doc.clauses?.forEach((cl, clIdx) => {
      if (cl.titleVi) recordItem('loop2', cl.titleVi, `CommercialDoc ${doc.id} clause ${clIdx} titleVi`);
      if (cl.contentVi) recordItem('loop2', cl.contentVi, `CommercialDoc ${doc.id} clause ${clIdx} contentVi`);
    });
  });
}
if (businessProficiencyTest) {
  businessProficiencyTest.forEach((test, tIdx) => {
    if (test.questionVi) recordItem('loop2', test.questionVi, `ProficiencyTest ${test.id} questionVi`);
    test.options?.forEach((opt, oIdx) => {
      if (typeof opt === 'string' && /[à-ỹÀ-Ỹ]/.test(opt)) {
        recordItem('loop2', opt, `ProficiencyTest ${test.id} opt ${oIdx}`);
      }
    });
  });
}

// ----------------------------------------------------
// LOOP 3: Alphabet, Vowels, Consonants, Tones & Tone Game
// ----------------------------------------------------
const {
  vietnameseAlphabet,
  vietnameseTones,
  vietnameseSingleVowels,
  vietnameseCompoundConsonants,
  vietnameseFinalConsonants,
  vietnameseDiphthongsTriphthongs,
  toneMinimalPairs
} = vietData;

if (vietnameseAlphabet) {
  vietnameseAlphabet.forEach((item, idx) => {
    recordItem('loop3', item.name, `Alphabet item ${item.char} name`);
    recordItem('loop3', item.example, `Alphabet item ${item.char} example`);
    recordItem('loop3', `${item.name}. ${item.example}.`, `Alphabet item ${item.char} composite`);
  });
}
if (vietnameseTones) {
  vietnameseTones.forEach((t, idx) => {
    recordItem('loop3', t.example, `Tones item ${t.id} example`);
  });
}
if (vietnameseSingleVowels) {
  vietnameseSingleVowels.forEach((sv, idx) => {
    recordItem('loop3', sv.vowel, `SingleVowels item ${sv.vowel}`);
    sv.examples?.forEach((ex, eIdx) => recordItem('loop3', ex.vi, `SingleVowels ${sv.vowel} example ${eIdx}`));
  });
}
if (vietnameseCompoundConsonants) {
  vietnameseCompoundConsonants.forEach((cc, idx) => {
    recordItem('loop3', cc.cluster, `CompoundConsonant ${cc.cluster}`);
    cc.examples?.forEach((ex, eIdx) => recordItem('loop3', ex.vi, `CompoundConsonant ${cc.cluster} example ${eIdx}`));
  });
}
if (vietnameseFinalConsonants) {
  vietnameseFinalConsonants.forEach((grp, gIdx) => {
    grp.items?.forEach((it, iIdx) => {
      it.examples?.forEach((ex, eIdx) => recordItem('loop3', ex.vi, `FinalConsonant ${it.ending} example ${eIdx}`));
    });
  });
}
if (vietnameseDiphthongsTriphthongs) {
  vietnameseDiphthongsTriphthongs.forEach((grp, gIdx) => {
    grp.items?.forEach((it, iIdx) => {
      it.examples?.forEach((ex, eIdx) => recordItem('loop3', ex.vi, `Diphthong ${it.sound} example ${eIdx}`));
    });
  });
}
if (toneMinimalPairs) {
  toneMinimalPairs.forEach((mp, mIdx) => {
    mp.pairs?.forEach((p, pIdx) => recordItem('loop3', p.word, `ToneMinimalPair ${mp.id} pair ${pIdx}`));
  });
}

// Tone Game Syllables
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
    recordItem('loop3', word, `ToneGame combo ${base}_${tone}`);
  });
});

// ----------------------------------------------------
// LOOP 4: Pronouns & Politeness
// ----------------------------------------------------
const {
  pronounKinshipData,
  corporatePronounHierarchy,
  politenessRules
} = vietData;

if (pronounKinshipData) {
  pronounKinshipData.forEach((p, idx) => {
    recordItem('loop4', p.pronoun, `Pronoun item ${idx} pronoun`);
    recordItem('loop4', `Chào ${p.pronoun} ạ`, `Pronoun item ${idx} greeting`);
  });
}
if (corporatePronounHierarchy) {
  corporatePronounHierarchy.forEach((cp, idx) => {
    recordItem('loop4', cp.roleVi, `CorporatePronoun ${idx} roleVi`);
    recordItem('loop4', cp.addressingVi, `CorporatePronoun ${idx} addressingVi`);
    recordItem('loop4', cp.selfVi, `CorporatePronoun ${idx} selfVi`);
  });
}
if (politenessRules) {
  politenessRules.forEach((pr, idx) => {
    if (pr.sampleVi) recordItem('loop4', pr.sampleVi, `PolitenessRule ${idx} sampleVi`);
  });
}

// ----------------------------------------------------
// LOOP 5: Han-Viet Cognates
// ----------------------------------------------------
const { hanVietRoots } = vietData;
if (hanVietRoots) {
  hanVietRoots.forEach((r, idx) => {
    recordItem('loop5', r.root, `HanViet root ${idx}`);
    r.compounds?.forEach((c, cIdx) => recordItem('loop5', c.viet, `HanViet root ${idx} compound ${cIdx}`));
  });
}
if (executiveHanVietRoots) {
  executiveHanVietRoots.forEach((r, idx) => {
    r.examples?.forEach((e, eIdx) => recordItem('loop5', e.vi, `ExecutiveHanViet root ${idx} example ${eIdx}`));
  });
}

// ----------------------------------------------------
// LOOP 6: Practical Phrases, Flashcards, Numbers, Grammar
// ----------------------------------------------------
const {
  practicalPhrases,
  flashcardsDeck,
  numbersAndCurrency,
  interactivePuzzles,
  multiScenarios,
  accentDifferences
} = vietData;

if (practicalPhrases) {
  practicalPhrases.forEach((p, idx) => {
    recordItem('loop6', p.viet, `PracticalPhrase ${idx}`);
  });
}
if (flashcardsDeck) {
  flashcardsDeck.forEach((fc, idx) => {
    recordItem('loop6', fc.viet, `Flashcard ${idx} viet`);
    recordItem('loop6', fc.example, `Flashcard ${idx} example`);
  });
}
if (numbersAndCurrency?.baseNumbers) {
  numbersAndCurrency.baseNumbers.forEach((n, idx) => recordItem('loop6', n.viet, `BaseNumber ${idx}`));
}
if (numbersAndCurrency?.unitsScale) {
  numbersAndCurrency.unitsScale.forEach((u, idx) => {
    recordItem('loop6', u.viet, `UnitsScale ${idx}`);
    if (u.viet.includes('/')) {
      u.viet.split('/').forEach((part, pIdx) => recordItem('loop6', part.trim(), `UnitsScale ${idx} part ${pIdx}`));
    }
  });
}
if (numbersAndCurrency?.priceTiers) {
  numbersAndCurrency.priceTiers.forEach((t, idx) => recordItem('loop6', t.viet, `PriceTier ${idx}`));
}
if (numbersAndCurrency?.highFrequencyShopping?.items) {
  numbersAndCurrency.highFrequencyShopping.items.forEach((p, idx) => recordItem('loop6', p.viet, `ShoppingItem ${idx}`));
}
if (numbersAndCurrency?.highFrequencyShopping?.vocabulary) {
  numbersAndCurrency.highFrequencyShopping.vocabulary.forEach((v, idx) => recordItem('loop6', v.viet, `ShoppingVocab ${idx}`));
}
if (numbersAndCurrency?.shoppingPhrases) {
  numbersAndCurrency.shoppingPhrases.forEach((p, idx) => recordItem('loop6', p.viet, `ShoppingPhrase ${idx}`));
}
if (interactivePuzzles) {
  interactivePuzzles.forEach((ip, idx) => {
    recordItem('loop6', ip.correctOrder.join(' '), `Puzzle ${idx}`);
  });
}
if (multiScenarios) {
  multiScenarios.forEach((ms, mIdx) => {
    ms.dialogues?.forEach((d, dIdx) => {
      d.lines?.forEach((l, lIdx) => recordItem('loop6', l.viet, `MultiScenario ${ms.id} d ${dIdx} l ${lIdx}`));
    });
  });
}
if (accentDifferences?.wordComparisonMatrix) {
  accentDifferences.wordComparisonMatrix.forEach((w, idx) => {
    recordItem('loop6', w.north, `AccentMatrix ${idx} north`);
    recordItem('loop6', w.south, `AccentMatrix ${idx} south`);
    if (w.south.includes('/')) {
      w.south.split('/').forEach(p => recordItem('loop6', p.trim(), `AccentMatrix ${idx} south part`));
    }
    if (w.north.includes('/')) {
      w.north.split('/').forEach(p => recordItem('loop6', p.trim(), `AccentMatrix ${idx} north part`));
    }
  });
}

// ----------------------------------------------------
// LOOP 7: FastTrack, Emergency Kit, Quizzes & Interactive UI
// ----------------------------------------------------
const { quizzes } = vietData;
if (quizzes) {
  quizzes.forEach((q, qIdx) => {
    if (q.questionVi) recordItem('loop7', q.questionVi, `Quiz ${q.id} questionVi`);
    if (q.audioPrompt) recordItem('loop7', q.audioPrompt, `Quiz ${q.id} audioPrompt`);
    q.options?.forEach((opt, oIdx) => {
      if (opt.viet) recordItem('loop7', opt.viet, `Quiz ${q.id} opt ${oIdx}`);
    });
  });
}

const fastTrackContent = fs.readFileSync(path.join(projectRoot, 'src/components/FastTrackModule.jsx'), 'utf8');
const emergencyContent = fs.readFileSync(path.join(projectRoot, 'src/components/EmergencyKitModule.jsx'), 'utf8');

const vietRegex = /viet:\s*['"`]([^'"`]+)['"`]/g;
let match;
while ((match = vietRegex.exec(fastTrackContent)) !== null) {
  recordItem('loop7', match[1], 'FastTrackModule hardcoded phrase');
}
while ((match = vietRegex.exec(emergencyContent)) !== null) {
  recordItem('loop7', match[1], 'EmergencyKitModule hardcoded phrase');
}

// ----------------------------------------------------
// PRINT REPORT
// ----------------------------------------------------
console.log('\n======================================================');
console.log('         7-LOOP PDCA AUDIT SUMMARY REPORT             ');
console.log('======================================================\n');

let totalAllLoops = 0;
let totalMissingAllLoops = 0;
let totalSpellingAllLoops = 0;

const missingMap = new Map();

for (const [key, res] of Object.entries(auditResults)) {
  totalAllLoops += res.total;
  totalMissingAllLoops += res.missingAudio.length;
  totalSpellingAllLoops += res.spellingIssues.length;
  
  console.log(`[${key.toUpperCase()}] ${res.name}`);
  console.log(`  - Total Phrases Scanned: ${res.total}`);
  console.log(`  - Missing/Corrupted Audio: ${res.missingAudio.length}`);
  console.log(`  - Vietnamese Spelling/Format Issues: ${res.spellingIssues.length}`);
  
  if (res.missingAudio.length > 0) {
    res.missingAudio.forEach(item => {
      if (!missingMap.has(item.text)) {
        missingMap.set(item.text, []);
      }
      missingMap.get(item.text).push(`${key}: ${item.context}`);
    });
    console.log(`  - Sample Missing Audio:`);
    res.missingAudio.slice(0, 5).forEach(m => console.log(`      * "${m.text}" (${m.context}) -> ${m.reason}`));
  }
  
  if (res.spellingIssues.length > 0) {
    console.log(`  - Spelling Issues:`);
    res.spellingIssues.forEach(s => console.log(`      * "${s.text}" (${s.context}): ${s.issues.join(', ')}`));
  }
  console.log('------------------------------------------------------');
}

console.log(`\n======================================================`);
console.log(`GRAND TOTALS ACROSS ALL 7 PDCA LOOPS:`);
console.log(`- Total Teaching & Dialogue Phrases Audited: ${totalAllLoops}`);
console.log(`- Total Unique Missing Audio Phrases: ${missingMap.size}`);
console.log(`- Total Missing Audio References: ${totalMissingAllLoops}`);
console.log(`- Total Spelling / Format Anomalies: ${totalSpellingAllLoops}`);
console.log(`- Audio Coverage Rate: ${(((totalAllLoops - totalMissingAllLoops) / totalAllLoops) * 100).toFixed(2)}%`);
console.log(`======================================================\n`);

fs.writeFileSync('C:/Users/User/.gemini/antigravity/brain/11e36d51-84e9-4704-be89-e888cd1f44eb/scratch/missing_audio.json', JSON.stringify(Array.from(missingMap.entries()), null, 2));
