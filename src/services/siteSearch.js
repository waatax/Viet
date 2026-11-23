import { SYLLABUS_REGISTRY } from '../config/syllabusRegistry.js';
import { knowledgeGuides } from '../data/knowledgeGuides.js';
import { VOCABULARY } from '../data/vocabularyQuality.js';
import { practicalPhrases } from '../data/vietnameseData.js';
import { pronunciationDecks, deckNames } from '../data/pronunciationCards.js';
import { LISTENING_LESSONS } from '../data/listeningLessons.js';
import { videoLessons } from '../data/videoLessons.js';
import dialogueVideoCatalog from '../data/dialogueVideoCatalog.json';
import { situationalScenarios } from '../data/situationalScenarios.js';
import { subjectSparks } from '../data/knowledgeMasteryData.js';

const fold = s => s.normalize('NFD').replace(/\p{M}/gu, '').replace(/đ/g, 'd');
const text = s => String(s ?? '').normalize('NFC').toLowerCase().trim();
function entry(id, moduleId, category, label, titleZh, titleVi, descZh, destination, titleEn = '') {
  return { id, moduleId, category, categoryLabelZh: label, categoryLabelVi: label, titleZh, titleVi, descZh, descVi: descZh, titleEn, destination };
}
const catalog = [
  ...SYLLABUS_REGISTRY.map(chapter => chapter.moduleId === 'alphabet' && chapter.targetParam?.tab
    ? {...chapter, targetParam: undefined, destination: {tab: chapter.targetParam.tab === 'alphabet' ? 'letters' : chapter.targetParam.tab}}
    : chapter),
  ...Object.entries(subjectSparks).map(([id,s]) => entry('module-'+id,id,'practice','學習單元',s.disciplineName,'',s.sparkHook,{})),
  entry('quest-home','quest','practice','遊戲評量','越語闖關挑戰','Duolingo Quest','關卡、遊戲、聽說讀練習',{}),
  ...videoLessons.map((name,i) => entry('film-'+i,'alphabet','basics','發音影片',`第 ${i} 課 · ${name}`,'',`第${i}課 YouTube 影片 播放清單 台灣華語 越文拼音`,{video:i})),
  ...dialogueVideoCatalog.videos.map(v => entry('dvideo-'+v.id,'dialogvideo','scenario','會話影片',`會話 ${String(v.no).padStart(2,'0')} · ${v.titleZh}`,v.sections.map(s=>s.preview).join(' · '),`${v.summaryZh} 會話影片 YouTube 播放清單 越文 中文 逐句`,{dialogVideo:v.id},v.titleEn)),
  ...Object.entries(pronunciationDecks).flatMap(([deck,cards]) => cards.map((c,index) =>
    entry('pron-'+deck+'-'+index,'alphabet','basics','發音閃卡',c.word,c.pattern,[deckNames[deck],c.cue,c.tip,c.answer].filter(Boolean).join(' · '),{deck,index}))),
  ...Object.entries(knowledgeGuides).flatMap(([moduleId,g]) => g.rows.map(([name,vi,zh,detail],point) =>
    entry('point-'+moduleId+'-'+point,moduleId,'practice','知識圖解',name,vi,[zh,detail].join(' · '),{point}))),
  ...LISTENING_LESSONS.map(l => entry('listen-'+l.id,'listen','practice','隨身聽',l.title,l.lines.map(x=>x.viet).join(' · '),l.rule+' '+l.lines.map(x=>x.zh).join(' '),{capsule:l.id})),
  ...practicalPhrases.map((p,i) => entry('phrase-'+i,'phrases','scenario','實用例句',p.zh,p.viet,p.usageZh,{phrase:p.viet},p.en)),
  ...situationalScenarios.flatMap(s => (s.dialogues || []).map((line,i) => ({
    ...entry('dialog-'+s.id+'-'+i,'conversation','scenario','情境對話',line.zh,line.viet,s.titleZh,undefined,line.en),
    targetParam:{scenarioId:s.id}
  }))),
  ...VOCABULARY.map(w => entry('word-'+w.id,'flashcards','vocab','核心詞彙',w.zh,w.viet,[w.hanViet,w.example,w.exampleZh].filter(Boolean).join(' · '),{word:w.viet,wordId:w.id,tier:w.tier},w.en))
];
const index = catalog.map(item => {
  const titles = [item.titleZh,item.titleVi,item.titleEn].filter(Boolean).map(text);
  const body = text([item.categoryLabelZh,item.descZh,item.descVi].filter(Boolean).join(' '));
  return { item,titles,folded:titles.map(fold),body:fold(body) };
});

export function searchSite(query, category='all') {
  const q=text(query);
  const matchesCategory=item=>category==='all'||item.category===category;
  if (!q) return SYLLABUS_REGISTRY.filter(matchesCategory);
  const terms=fold(q).split(/\s+/).filter(Boolean);
  const foldedQuery=fold(q);
  if (!terms.length) return [];
  const hits=[];
  for (const row of index) {
    if (!matchesCategory(row.item)) continue;
    const fields=[...row.folded,row.body];
    if (!terms.every(term=>fields.some(f=>f.includes(term)))) continue;
    const score=row.titles.includes(q)?0:row.folded.includes(foldedQuery)?1:
      row.titles.some(t=>t.includes(q))?2:row.folded.some(t=>t.includes(foldedQuery))?3:4;
    hits.push({item:row.item,score});
  }
  return hits.sort((a,b)=>a.score-b.score).map(hit=>hit.item);
}
