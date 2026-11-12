import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import React from 'react';
import TestRenderer, { act } from 'react-test-renderer';
import { LISTENING_LESSONS } from '../src/data/listeningLessons.js';
import { knowledgeGuides } from '../src/data/knowledgeGuides.js';
import { makeListeningRound, recordListeningCheck, readListeningStudy, saveListeningStudy } from '../src/services/listeningStudy.js';

const baseline = Object.values(knowledgeGuides).reduce((n, g) => n + g.rows.length, 0);
assert.equal(baseline, 200);
assert.ok(LISTENING_LESSONS.length / baseline >= .1, 'At least 10% additional teaching units');
assert.equal(new Set(LISTENING_LESSONS.map(l => l.id)).size, 24);
const packs = JSON.parse(fs.readFileSync('src/data/listeningPackManifest.json', 'utf8'));
for (const lesson of LISTENING_LESSONS) {
  assert.equal(lesson.lines.length, 4);
  for (const field of ['title', 'rule', 'trap', 'task']) assert.ok(lesson[field].length > 5, `${lesson.id}: ${field}`);
  for (const line of lesson.lines) for (const field of ['viet', 'zh', 'note']) assert.ok(line[field].trim());
  assert.equal(new Set(lesson.lines.map(l => l.zh)).size, 4, 'Distinct meaning options');
  const questions = makeListeningRound(lesson, () => .43);
  assert.equal(questions.length, 5);
  for (const q of questions) {
    assert.equal(new Set(q.options).size, q.options.length);
    assert.ok(q.answer >= 0 && q.answer < q.options.length && q.why);
    if (q.audio) assert.equal(q.options[q.answer], lesson.lines.find(l => l.viet === q.audio).zh);
  }
  for (const speed of [.75, 1, 1.25]) {
    const pack = packs[lesson.id][speed];
    assert.equal(fs.statSync(path.join('public/audio', pack.file)).size, pack.bytes);
    assert.ok(pack.seconds > 4);
  }
  assert.ok(packs[lesson.id][.75].seconds > packs[lesson.id][1].seconds);
  assert.ok(packs[lesson.id][1].seconds > packs[lesson.id][1.25].seconds);
  assert.ok(fs.readFileSync(`public/audio/listening/${lesson.id}.txt`, 'utf8').includes(lesson.rule));
}
let records = recordListeningCheck({}, 'test', true, 1000);
assert.equal(records.test.level, 1);
const firstDue = records.test.due;
records = recordListeningCheck(records, 'test', true, 2000);
assert.equal(records.test.level, 1, 'Early practice does not skip spacing');
assert.equal(records.test.due, firstDue);
records = recordListeningCheck(records, 'test', true, firstDue);
assert.equal(records.test.level, 2);
records = recordListeningCheck(records, 'test', false, firstDue + 1);
assert.equal(records.test.level, 0);
assert.equal(records.test.due, firstDue + 1 + 600000);
globalThis.localStorage = { getItem() { throw Error('blocked'); }, setItem() { throw Error('full'); } };
assert.deepEqual(readListeningStudy(), {});
assert.equal(saveListeningStudy(records), false);
const store = new Map();
globalThis.localStorage = { getItem: k => store.get(k) ?? null, setItem: (k, v) => store.set(k, v) };
store.set('viet_listening_study_v1', '{bad'); assert.deepEqual(readListeningStudy(), {});
store.clear();

fs.mkdirSync('scripts/cache', { recursive: true });
const output = path.resolve('scripts/cache/listening-ui-test.mjs');
await build({
  stdin: { contents: `export { default as Studio } from './src/components/ListeningStudio.jsx'; export * from './src/services/listeningSession.js'; export * from './src/services/dialoguePlayback.js'; export { audioEngine } from './src/services/audioEngine.js';`, resolveDir: process.cwd() },
  bundle: true, platform: 'node', format: 'esm', outfile: output, loader: { '.css': 'empty' }, external: ['react', 'react-dom', 'lucide-react'],
  define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' }, logLevel: 'error',
  plugins: [{ name: 'audio-double', setup(b) {
    b.onResolve({ filter: /audioEngine(?:\.js)?$/ }, () => ({ path: 'audio', namespace: 'mock' }));
    b.onLoad({ filter: /.*/, namespace: 'mock' }, () => ({ contents: `export const audioEngine={ calls:[], listeners:new Set(), stops:new Set(), subscribe(fn){this.listeners.add(fn);return()=>this.listeners.delete(fn)},onStop(fn){this.stops.add(fn);return()=>this.stops.delete(fn)},stop(){this.stops.forEach(f=>f())},preload(){},speak(text,options){this.calls.push({text,...options});this.pending=options.onEnd;},resolveManifestFile(){return 'vi.mp3'},resolveNativeFile(){return 'zh/test.mp3'},buildAudioUrl(f){return '/Viet/audio/'+f}};` }));
  } }]
});
const { Studio, playListeningLesson, getActiveSequencerSnapshot, setPlaybackPrefs, audioEngine } = await import(pathToFileURL(output));
setPlaybackPrefs({ speed: .75, loop: false, shadowPause: false, repeat: 1 });
const seq = playListeningLesson(LISTENING_LESSONS[0]);
seq.clearTimers();
const scheduled = [];
seq.later = (fn, ms) => { if (ms < 5000) scheduled.push(fn); };
assert.equal(audioEngine.calls.at(-1).rate, .75);
audioEngine.pending(); scheduled.shift()();
assert.equal(audioEngine.calls.at(-1).lang, 'zh');
assert.equal(audioEngine.calls.at(-1).rate, 1, 'Chinese must keep normal speed');
setPlaybackPrefs({ speed: 1.25 });
seq.jumpTo(1);
assert.equal(audioEngine.calls.at(-1).rate, 1.25);
seq.stop();

let ui;
const navigations = [];
await act(async () => { ui = TestRenderer.create(React.createElement(Studio, { onNavigate: id => navigations.push(id) })); });
const text = node => typeof node === 'string' ? node : node?.children?.map(text).join('') || '';
const button = label => ui.root.findAllByType('button').find(b => text(b).includes(label));
const click = async label => { const b = button(label); assert.ok(b, `button ${label}`); await act(async () => b.props.onClick()); };
assert.equal(ui.root.findAllByType('a').filter(a => a.props.href?.includes('word-needs-1.mp3')).length, 1);
await act(async () => ui.root.findAllByType('select')[1].props.onChange({ target: { value: '.75' } }));
assert.ok(ui.root.findAllByType('a').some(a => a.props.href?.includes('word-needs-0.75.mp3')));
await click('全部播放');
assert.equal(getActiveSequencerSnapshot().ctx.lessonId, 'word-needs');
await click('中越近似詞');
assert.equal(getActiveSequencerSnapshot().ctx.lessonId, 'word-needs', 'Browsing does not silently replace current queue');
await click('全部播放');
assert.equal(getActiveSequencerSnapshot().ctx.lessonId, 'han-study');
await click('前往完整');
assert.equal(navigations.at(-1), 'hanviet');
await act(async () => ui.unmount());
assert.equal(getActiveSequencerSnapshot().ctx.lessonId, 'han-study', 'Global session survives route unmount');
seq.stop();
store.clear();
await act(async () => { ui = TestRenderer.create(React.createElement(Studio, { onNavigate() {} })); });
const oldRandom = Math.random;
Math.random = () => .43;
await click('2 聽力挑戰');
Math.random = oldRandom;
const round = makeListeningRound(LISTENING_LESSONS[0], () => .43);
for (const [index, q] of round.entries()) {
  const options = ui.root.findAllByType('button').filter(b => b.parent?.props.className === 'listen-answers');
  await act(async () => options[q.answer].props.onClick());
  assert.ok(options.every(b => b.props.disabled), 'No duplicate submission');
  await click(index === round.length - 1 ? '看本回合結果' : '下一題');
}
assert.ok(JSON.stringify(ui.toJSON()).includes('5 / 5') || text(ui.root).includes('5 / 5'));
assert.equal(readListeningStudy()['word-needs'].correct, true);
await click('接著開口說');
assert.ok(text(ui.root).includes('沒有錄音辨識或自動發音評分'));
await act(async () => ui.unmount());
store.clear();
await act(async () => { ui = TestRenderer.create(React.createElement(Studio, { onNavigate() {} })); });
Math.random = () => .43;
await click('2 聽力挑戰');
Math.random = oldRandom;
for (const [index, q] of round.entries()) {
  const options = ui.root.findAllByType('button').filter(b => b.parent?.props.className === 'listen-answers');
  const choice = index === 0 ? (q.answer + 1) % q.options.length : q.answer;
  await act(async () => options[choice].props.onClick());
  await click(index === round.length - 1 ? '看本回合結果' : '下一題');
}
assert.equal(readListeningStudy()['word-needs'].correct, false);
await click('只重練錯題');
const retryOptions = ui.root.findAllByType('button').filter(b => b.parent?.props.className === 'listen-answers');
await act(async () => retryOptions[round[0].answer].props.onClick());
await click('看本回合結果');
assert.equal(readListeningStudy()['word-needs'].correct, false, 'A one-question retry must not award full mastery');
assert.ok(text(ui.root).includes('再做完整 5 題挑戰'));
await act(async () => ui.unmount());
console.log('PASS: +12% capsules, 72 MP3 assets, 120 quiz items, speed separation, cross-route playback, downloads, complete quiz flow and spaced review.');
