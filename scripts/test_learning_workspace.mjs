import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { knowledgeGuides } from '../src/data/knowledgeGuides.js';
import { knowledgeBridge, bridgeChecks } from '../src/data/knowledgeBridge.js';
import { subjectSparks, allModuleMasteryItems, getKnowledgePointMasteryItem } from '../src/data/knowledgeMasteryData.js';
import {
  normalizeBridge,
  reviewBridge,
  loadBridge,
  saveBridge,
  loadModuleMasteredPoints,
  recordPointMastery,
  loadLovedSubjects,
  toggleLovedSubject
} from '../src/services/bridgeProgress.js';

const SIMPLIFIED = /[们这个说话时间么过还没对为发会东车门开关见马鱼鸡买卖钱银饭馆汤点请谢问题号码电话机宾饮药医价贵乐欢听读写习网络视频软质报单账户员签证]/;
const MAINLAND = ['視頻', '質量', '信息', '軟件', '出租車', '網絡', '默認', '增值稅', '稅號', '服務員', '地鐵', '屏幕', '短信', '摩托車', '登機牌', '托運', '塑料', '渠道', '鼠標'];

const day = 86400000, now = 1800000000000;
assert.equal(Object.values(knowledgeGuides).reduce((n, g) => n + g.rows.length, 0), 200);
assert.ok((200 - 180) / 180 >= .1, 'Frozen knowledge baseline: 180, +11.11%');
for (const [id, row] of Object.entries(knowledgeBridge)) {
  assert.deepEqual(knowledgeGuides[id].rows[9], row.slice(0, 4));
  const [vi, options, answer, why] = bridgeChecks[id];
  assert.equal(vi, row[1]); assert.equal(options[answer], row[2]);
  assert.equal(new Set(options).size, 3); assert.ok(why.includes(row[3]));
}

// Verify all 20 subject sparks and all 200 listen-read-speak mastery items
const moduleIds = Object.keys(knowledgeGuides);
assert.equal(Object.keys(subjectSparks).length, 20, '20 subject sparks');
let totalMasteryItems = 0;
for (const id of moduleIds) {
  const spark = subjectSparks[id];
  assert.ok(spark, `subjectSparks[${id}] exists`);
  for (const field of ['disciplineName', 'badge', 'sparkHook', 'ahaInsight', 'listenGuide', 'readGuide', 'speakGuide', 'joyAffirmation']) {
    assert.ok(typeof spark[field] === 'string' && spark[field].trim().length >= 6, `${id}.${field} complete`);
    const simp = spark[field].match(SIMPLIFIED);
    assert.ok(!simp, `${id}.${field} contains simplified char: ${simp?.[0]}`);
    for (const mTerm of MAINLAND) {
      assert.ok(!spark[field].includes(mTerm), `${id}.${field} contains mainland term: ${mTerm}`);
    }
  }

  const items = allModuleMasteryItems[id];
  assert.equal(items.length, 10, `${id} has 10 listen-read-speak mastery items`);
  items.forEach((item, idx) => {
    assert.equal(item.index, idx);
    assert.equal(item.concept, knowledgeGuides[id].rows[idx][0]);
    assert.ok(item.spokenVi?.trim(), `${id}[${idx}] spokenVi`);
    assert.ok(item.zh?.trim(), `${id}[${idx}] zh`);
    assert.equal(item.listeningCheck[1].length, 3, `${id}[${idx}] 3 listening options`);
    assert.equal(new Set(item.listeningCheck[1]).size, 3, `${id}[${idx}] distinct listening options`);
    assert.equal(item.listeningCheck[1][item.listeningCheck[2]], item.zh, `${id}[${idx}] listening answer matches meaning`);
    assert.equal(item.readingCheck.options.length, 3, `${id}[${idx}] 3 reading options`);
    assert.equal(new Set(item.readingCheck.options).size, 3, `${id}[${idx}] distinct reading options`);
    assert.equal(item.readingCheck.options[item.readingCheck.answer], item.rule, `${id}[${idx}] reading answer matches rule`);
    assert.ok(item.speakingTask?.trim().length >= 8, `${id}[${idx}] speakingTask`);
    assert.equal(item.speakingCues.length, 3, `${id}[${idx}] 3 speaking self-check cues`);
    totalMasteryItems++;
  });
}
assert.equal(totalMasteryItems, 200, '200 total listen-read-speak mastery items verified');
assert.equal(getKnowledgePointMasteryItem('phrases', 0).concept, knowledgeGuides.phrases.rows[0][0]);

let progress = reviewBridge(null, true, now);
assert.deepEqual(progress, { level: 1, completed: 1, due: now + day });
assert.deepEqual(reviewBridge(progress, true, now + 1000), progress, 'early success cannot farm levels');
progress = reviewBridge(progress, true, progress.due);
assert.equal(progress.level, 2); assert.equal(progress.due, now + 4 * day);
progress = reviewBridge(progress, true, progress.due);
assert.equal(progress.level, 3); assert.equal(progress.due, now + 11 * day);
assert.equal(reviewBridge(progress, false, now).level, 0, 'needs-help resets interval');
assert.deepEqual(normalizeBridge({ level: Infinity, due: NaN, completed: -4 }), {level:0,due:0,completed:0});
const memory = new Map();
globalThis.localStorage = { getItem: k => memory.get(k) ?? null, setItem: (k,v) => memory.set(k,v) };
assert.equal(saveBridge('phrases', progress), true);
assert.equal(loadBridge('phrases').level, 3);
assert.equal(loadBridge('grammar').level, 0);
memory.set('viet_bridge_v1_phrases', '{invalid');
assert.equal(loadBridge('phrases').level, 0);

// Test per-point mastery and loved subjects persistence
memory.clear();
assert.deepEqual(loadModuleMasteredPoints('phrases', 10), []);
recordPointMastery('phrases', 2, true, 10);
recordPointMastery('phrases', 7, true, 10);
assert.deepEqual(loadModuleMasteredPoints('phrases', 10), [2, 7]);
assert.equal(toggleLovedSubject('phrases').loved, true);
assert.deepEqual(loadLovedSubjects(), ['phrases']);
assert.equal(toggleLovedSubject('phrases').loved, false);
assert.deepEqual(loadLovedSubjects(), []);

fs.mkdirSync('scripts/cache', { recursive: true });
const outfile = path.resolve('scripts/cache/workspace-test.mjs');
await build({ stdin: { contents: `export { default as Sprint } from './src/components/KnowledgeSprint.jsx'; export { default as Hub } from './src/components/HomeLearningHub.jsx'; export { audioEngine } from './src/services/audioEngine.js';`, resolveDir: process.cwd(), loader: 'js' }, outfile, bundle: true, platform:'node', format:'esm', external:['react','react-dom','react/jsx-runtime','lucide-react'], loader:{'.css':'empty'}, define:{'import.meta.env':'{"BASE_URL":"/Viet/"}'}, logLevel:'error' });
const { Sprint, Hub, audioEngine } = await import(pathToFileURL(outfile).href);
let spoken = [];
audioEngine.speak = (text, opts) => { spoken.push([text, opts]); };
const textOf = node => node.children.map(c => typeof c === 'string' ? c : textOf(c)).join('');
let renderer;
const click = text => { const b = renderer.root.findAllByType('button').find(b => textOf(b).includes(text)); assert.ok(b, `button: ${text}`); assert.ok(!b.props.disabled, `enabled: ${text}`); act(() => b.props.onClick()); };
function mount(props = {}) { memory.clear(); act(() => { renderer = TestRenderer.create(React.createElement(Sprint, {moduleId:'phrases',accent:'north',...props})); }); }
function enterSpeaking(wrong = false) {
  click('準備好了');
  assert.ok(renderer.root.findAllByType('button').filter(b => b.props['aria-pressed'] !== undefined).every(b => b.props.disabled));
  click('播放無字幕題目');
  assert.equal(spoken.at(-1)[0], knowledgeBridge.phrases[1]);
  click(bridgeChecks.phrases[1][wrong ? (bridgeChecks.phrases[2]+1)%3 : bridgeChecks.phrases[2]]);
  click('下一步');
}
mount(); enterSpeaking(); click('能獨立說出');
assert.equal(loadBridge('phrases').level, 1, 'successful complete cycle earns first level');
assert.ok(loadModuleMasteredPoints('phrases', 10).includes(9), 'point 10 recorded as mastered');
act(() => renderer.unmount());

// Verify switching to knowledge point #1 (index 0) and completing Listen + Read + Speak
mount({ selectedPointIndex: 0 });
const item0 = getKnowledgePointMasteryItem('phrases', 0);
click(item0.readingCheck.options[item0.readingCheck.answer]);
assert.ok(JSON.stringify(renderer.toJSON()).includes('讀懂結構了'));
click('準備好了');
click('播放無字幕題目');
assert.equal(spoken.at(-1)[0], item0.listeningCheck[0]);
click(item0.listeningCheck[1][item0.listeningCheck[2]]);
click('下一步');
click('原速帶讀跟說');
assert.equal(spoken.at(-1)[0], item0.spokenVi);
click('能獨立說出');
assert.ok(loadModuleMasteredPoints('phrases', 10).includes(0), 'point 1 recorded as mastered');
act(() => renderer.unmount());

mount(); enterSpeaking(); click('我想過了'); click('收起提示'); click('練習完成');
assert.equal(loadBridge('phrases').level, 0, 'hiding a used hint never earns independent mastery');
act(() => renderer.unmount());
mount(); enterSpeaking(true); click('練習完成');
assert.equal(loadBridge('phrases').level, 0, 'incorrect listening requires consolidation');
act(() => renderer.unmount());
mount(); enterSpeaking();
globalThis.localStorage = { getItem() {throw Error('blocked');}, setItem() {throw Error('quota');} };
click('能獨立說出');
assert.ok(JSON.stringify(renderer.toJSON()).includes('儲存空間不可用'));
act(() => renderer.unmount());
let selected;
act(() => { renderer = TestRenderer.create(React.createElement(Hub, {onStartStudy: id => selected=id, onNavigate: id => selected=id})); });
click('開始今天'); assert.equal(selected, 'phrases');
click('用挑戰'); assert.equal(selected, 'quest');
act(() => renderer.unmount());
delete globalThis.localStorage;
console.log('PASS: 20 subject sparks + 200 listen-read-speak knowledge points verified; 1/3/7-day scheduling, per-point mastery, reading check, shadowing, and home routing all pass.');
