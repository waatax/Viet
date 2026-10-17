import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

fs.mkdirSync(path.resolve('scripts/cache'), { recursive: true });
const temporary = fs.mkdtempSync(path.resolve('scripts/cache/playback-test-'));
try {
  const outfile = path.join(temporary, 'test.mjs');
  await build({
    stdin: { contents: `export * from './src/services/dialoguePlayback.js'; export { situationalScenarios } from './src/data/situationalScenarios.js'; export { SITUATIONAL_TOPICS } from './src/data/situationalTopicsData.js'; export { multiScenarios, numbersAndCurrency } from './src/data/vietnameseData.js'; export { FAST_TRACK_DAYS } from './src/components/FastTrackModule.jsx'; export { audioEngine } from './src/services/audioEngine.js';`, resolveDir: process.cwd() },
    bundle: true, platform: 'node', format: 'esm', outfile,
    loader: { '.css': 'empty', '.jsx': 'jsx' },
    external: ['react', 'react-dom', 'lucide-react'],
    define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
    plugins: [{ name: 'controlled-audio', setup(builder) {
      builder.onResolve({ filter: /audioEngine(?:\.js)?$/ }, () => ({ path: 'engine', namespace: 'test' }));
      builder.onLoad({ filter: /.*/, namespace: 'test' }, () => ({ contents: `
        export const audioEngine = {
          calls: [], pending: null, stops: new Set(),
          subscribe() { return () => {}; },
          onStop(fn) { this.stops.add(fn); return () => this.stops.delete(fn); },
          stop() { this.stops.forEach(fn => fn()); }, preload() {},
          speak(text, options) { this.calls.push({ text, lang: options.lang }); this.pending = options.onEnd; }
        };` }));
    } }]
  });
  const { DialogueSequencer, setPlaybackPrefs, situationalScenarios, SITUATIONAL_TOPICS, multiScenarios, numbersAndCurrency, FAST_TRACK_DAYS, audioEngine } = await import(pathToFileURL(outfile));
  setPlaybackPrefs({ repeat: 1, shadowPause: false, loop: false, autoNext: false });
  const create = () => {
    const seq = new DialogueSequencer();
    let tasks = [];
    seq.clearTimers = () => { tasks = []; };
    seq.later = (fn, ms) => {
      const token = seq.token;
      tasks.push({ ms, run: () => { if (token === seq.token && seq.state.status === 'playing') fn(); } });
    };
    seq.drain = () => {
      let steps = 0;
      while (seq.state.status === 'playing') {
        assert.ok(++steps < 10000, 'playback must finish');
        if (audioEngine.pending) {
          const end = audioEngine.pending;
          audioEngine.pending = null;
          end();
        } else {
          tasks.sort((a, b) => a.ms - b.ms);
          assert.ok(tasks.length, 'playing sequence must have a next step');
          tasks.shift().run();
        }
      }
    };
    return seq;
  };
  let groups = 0;
  const allConversations = [
    ...situationalScenarios,
    ...multiScenarios.flatMap(s => (s.dialogues || []).map(d => ({ id: `multi:${d.id}`, dialogue: d.lines }))),
    ...SITUATIONAL_TOPICS.flatMap(s => (s.dialogues || []).map(d => ({ id: `topic:${d.id}`, dialogue: d.lines }))),
    ...FAST_TRACK_DAYS.map(d => ({ id: `day:${d.day}`, dialogue: d.dialogue })),
    ...(numbersAndCurrency.bankingDialogues || []).map((d, i) => ({ id: `bank:${i}`, dialogue: d.lines })),
    { id: 'shopping', dialogue: numbersAndCurrency.highFrequencyShopping?.items || [] }
  ];
  for (const scenario of allConversations) {
    const sections = scenario.dialogueSections?.length ? scenario.dialogueSections : [{ lines: scenario.dialogues || scenario.dialogue || [] }];
    for (const section of sections) {
      const lines = section.lines.filter(line => line.viet || line.vi);
      if (!lines.length) continue;
      assert.ok(lines.every(line => line.zh?.trim()), `${scenario.id}: every conversation line needs a Chinese translation`);
      groups++;
      for (const mode of ['vi-only', 'vi-zh']) {
        const seq = create();
        audioEngine.calls = [];
        seq.start({ lines, mode, nativeLang: 'zh' });
        seq.drain();
        const expected = lines.flatMap(line => [
          { text: line.viet || line.vi, lang: 'vi' },
          ...(mode === 'vi-zh' && line.zh ? [{ text: line.zh, lang: 'zh' }] : [])
        ]);
        assert.deepEqual(audioEngine.calls, expected, `${scenario.id}: ${mode}`);
        seq.destroy();
      }
    }
  }
  const seq = create();
  const lines = [{ vi: 'Xin chào.', zh: '你好。' }, { vi: 'Cảm ơn.', zh: '謝謝。' }];
  seq.start({ lines, mode: 'vi-zh' });
  const staleEnd = audioEngine.pending;
  seq.pause();
  staleEnd();
  assert.equal(seq.state.status, 'paused');
  seq.setMode('vi-only');
  audioEngine.calls = [];
  seq.resume();
  seq.drain();
  assert.deepEqual(audioEngine.calls.map(call => call.lang), ['vi', 'vi']);
  seq.playSingleLine(1, 'vi-zh');
  seq.drain();
  assert.equal(seq.state.status, 'idle');
  seq.destroy();
  console.log(`PASS: ${groups} conversation sections in both modes; pause, stale callbacks, resume, mode switch and single-line playback.`);
} finally {
  fs.rmSync(temporary, { recursive: true, force: true });
}
