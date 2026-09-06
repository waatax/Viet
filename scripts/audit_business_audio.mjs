import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import * as businessData from '../src/data/businessData.js';

const manifestPath = path.resolve('src/data/audioManifest.json');
const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const audioDir = path.resolve('public/audio');

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

const items = [];

function record(text, category, metadata = {}) {
  if (!text || typeof text !== 'string') return;
  const clean = cleanText(text);
  if (!clean || !/[a-zA-Zà-ỹÀ-Ỹ]/.test(clean)) return;
  items.push({
    raw: text,
    clean,
    category,
    ...metadata
  });
}

// 1. Trade Shows
if (businessData.tradeShowGuide) {
  businessData.tradeShowGuide.expoVenues?.forEach(v => {
    record(v.nameVi, 'tradeShow.venue.name');
    record(v.addressVi, 'tradeShow.venue.address');
  });
  businessData.tradeShowGuide.stages?.forEach(stg => {
    record(stg.stageNameVi || stg.stageNameZh, 'tradeShow.stageName');
    stg.phrases?.forEach(p => record(p.viet, 'tradeShow.phrase', { zh: p.zh }));
  });
}

// 2. Dual City
if (businessData.dualCityBusinessGuide) {
  businessData.dualCityBusinessGuide.cities?.forEach(c => {
    record(c.cityNameVi, 'dualCity.cityName');
    c.mustKnowPhrases?.forEach(p => record(p.viet, 'dualCity.phrase', { zh: p.zh }));
  });
}

// 3. Zalo
if (businessData.zaloNetworkingGuide) {
  businessData.zaloNetworkingGuide.templates?.forEach(t => {
    record(t.viet, 'zalo.template', { zh: t.zh });
  });
}

// 4. Commercial Docs
if (businessData.realWorldCommercialDocuments) {
  businessData.realWorldCommercialDocuments.forEach(doc => {
    record(doc.docTypeVi, 'doc.docType');
    record(doc.headerVi, 'doc.header');
    doc.clauses?.forEach(c => {
      record(c.titleVi, 'doc.clause.title');
      record(c.contentVi, 'doc.clause.content', { zh: c.contentZh });
    });
  });
}

// 5. Negotiation Arena
if (businessData.interactiveNegotiations) {
  businessData.interactiveNegotiations.forEach(n => {
    n.steps?.forEach((st, idx) => {
      record(st.partnerSpeech, 'negotiation.partnerSpeech', { step: idx + 1, zh: st.partnerSpeechZh });
      st.options?.forEach(opt => {
        record(opt.viet, 'negotiation.option', { zh: opt.zh, trustDelta: opt.trustDelta });
      });
    });
  });
}

// 6. Business Exam (iVPT)
if (businessData.businessProficiencyTest) {
  businessData.businessProficiencyTest.forEach((q, idx) => {
    record(q.questionVi, 'exam.questionVi', { qIdx: idx + 1, zh: q.questionZh });
    q.options?.forEach((opt, oIdx) => {
      if (typeof opt === 'string' && /[a-zA-Zà-ỹÀ-Ỹ]/.test(opt)) {
        record(opt, 'exam.option', { qIdx: idx + 1, oIdx });
      }
    });
  });
}

// 7. Executive Survival & VAT
if (businessData.executiveSurvivalGuide) {
  businessData.executiveSurvivalGuide.forEach(g => {
    g.phrases?.forEach(p => record(p.viet, 'survival.phrase', { zh: p.zh }));
  });
}

// 8. Smart Factory
if (businessData.smartFactoryGuide) {
  businessData.smartFactoryGuide.zones?.forEach(z => {
    z.parks?.forEach(p => record(p.name, 'factory.park'));
    z.terms?.forEach(t => {
      record(t.viet, 'factory.term', { zh: t.zh });
      record(t.example, 'factory.example', { zh: t.zh });
    });
  });
}

// 9. Nhau Banquet
if (businessData.nhauCultureGuide) {
  businessData.nhauCultureGuide.chants?.forEach(c => {
    record(c.viet, 'nhau.chant', { zh: c.zh });
  });
}

// 10. Currency Blitz
if (businessData.currencyBlitzQuestions) {
  businessData.currencyBlitzQuestions.forEach(q => {
    record(q.questionVi, 'currency.questionVi');
    q.options?.forEach(o => {
      if (typeof o === 'string' && /[a-zA-Zà-ỹÀ-Ỹ]/.test(o)) {
        record(o, 'currency.option');
      }
    });
  });
}

// 11. Han-Viet Roots
if (businessData.executiveHanVietRoots) {
  businessData.executiveHanVietRoots.forEach(r => {
    r.examples?.forEach(e => {
      record(e.vi, 'hanviet.example', { zh: e.zh });
    });
  });
}

console.log(`Total Business Items Scanned: ${items.length}`);

let inManifest = 0;
let fileOnDisk = 0;
let missingManifest = [];
let missingOnDisk = [];

for (const item of items) {
  const file = manifest[item.clean] || manifest[item.raw.trim()] || manifest[item.raw];
  if (!file) {
    missingManifest.push(item);
  } else {
    inManifest++;
    const fullPath = path.join(audioDir, file);
    if (fs.existsSync(fullPath) && fs.statSync(fullPath).size > 200) {
      fileOnDisk++;
    } else {
      missingOnDisk.push({ ...item, file });
    }
  }
}

console.log(`In Manifest: ${inManifest} / ${items.length} (${((inManifest / items.length) * 100).toFixed(1)}%)`);
console.log(`File on Disk (>200B): ${fileOnDisk} / ${items.length} (${((fileOnDisk / items.length) * 100).toFixed(1)}%)`);
console.log(`Missing in Manifest: ${missingManifest.length}`);
console.log(`Missing on Disk: ${missingOnDisk.length}`);

if (missingManifest.length > 0) {
  console.log('\n--- SAMPLE MISSING IN MANIFEST ---');
  missingManifest.slice(0, 20).forEach(m => {
    console.log(`[${m.category}] Raw: "${m.raw}" => Clean: "${m.clean}"`);
  });
}

const summaryByCategory = {};
items.forEach(it => {
  const file = manifest[it.clean] || manifest[it.raw.trim()] || manifest[it.raw];
  const ok = file && fs.existsSync(path.join(audioDir, file)) && fs.statSync(path.join(audioDir, file)).size > 200;
  if (!summaryByCategory[it.category]) {
    summaryByCategory[it.category] = { total: 0, ok: 0, missing: 0 };
  }
  summaryByCategory[it.category].total++;
  if (ok) summaryByCategory[it.category].ok++;
  else summaryByCategory[it.category].missing++;
});

console.log('\n--- BREAKDOWN BY CATEGORY ---');
console.table(summaryByCategory);
