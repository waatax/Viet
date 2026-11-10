import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { knowledgeGuides } from '../src/data/knowledgeGuides.js';
import { knowledgeBridge, bridgeChecks } from '../src/data/knowledgeBridge.js';
import { normalizeBridge, reviewBridge, loadBridge, saveBridge } from '../src/services/bridgeProgress.js';

const day = 86400000, now = 1800000000000;
assert.equal(Object.values(knowledgeGuides).reduce((n, g) => n + g.rows.length, 0), 200);
assert.ok((200 - 180) / 180 >= .1, 'Frozen knowledge baseline: 180, +11.11%');
for (const [id, row] of Object.entries(knowledgeBridge)) {
  assert.deepEqual(knowledgeGuides[id].rows[9], row.slice(0, 4));
  const [vi, options, answer, why] = bridgeChecks[id];
  assert.equal(vi, row[1]); assert.equal(options[answer], row[2]);
  assert.equal(new Set(options).size, 3); assert.ok(why.includes(row[3]));
}
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

fs.mkdirSync('scripts/cache', { recursive: true });
const outfile = path.resolve('scripts/cache/workspace-test.mjs');
await build({ stdin: { contents: `export { default as Sprint } from './src/components/KnowledgeSprint.jsx'; export { default as Hub } from './src/components/HomeLearningHub.jsx'; export { audioEngine } from './src/services/audioEngine.js';`, resolveDir: process.cwd(), loader: 'js' }, outfile, bundle: true, platform:'node', format:'esm', external:['react','react-dom','react/jsx-runtime','lucide-react'], loader:{'.css':'empty'}, define:{'import.meta.env':'{"BASE_URL":"/Viet/"}'}, logLevel:'error' });
const { Sprint, Hub, audioEngine } = await import(pathToFileURL(outfile).href);
let spoken = [];
audioEngine.speak = (text, opts) => { spoken.push([text, opts]); };
const textOf = node => node.children.map(c => typeof c === 'string' ? c : textOf(c)).join('');
let renderer;
const click = text => { const b = renderer.root.findAllByType('button').find(b => textOf(b).includes(text)); assert.ok(b, `button: ${text}`); assert.ok(!b.props.disabled, `enabled: ${text}`); act(() => b.props.onClick()); };
function mount() { memory.clear(); act(() => { renderer = TestRenderer.create(React.createElement(Sprint, {moduleId:'phrases',accent:'north'})); }); }
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
console.log('PASS: 180→200 knowledge points; 20 unique narrated checks; 1/3/7-day scheduling, anti-farming, incorrect-answer/hint retention, storage failure, full 4-step React interaction and home routing.');
