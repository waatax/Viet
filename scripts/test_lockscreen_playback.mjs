/**
 * Locked-phone simulation for the dialogue player (what a real-device lock-screen test exercises):
 *   - document.hidden is true and timers are frozen (setTimeout never fires, as on a locked phone),
 *     so every step must chain from the previous clip's `ended` event;
 *   - lock-screen buttons arrive through navigator.mediaSession action handlers;
 *   - the lock-screen title / state follow the current sentence.
 * Runs over every conversation set on the homepage in both modes.
 */
import assert from 'node:assert/strict';
import { build } from 'esbuild';
import { pathToFileURL } from 'node:url';
import fs from 'node:fs';
import path from 'node:path';

fs.mkdirSync(path.resolve('scripts/cache'), { recursive: true });
const temporary = fs.mkdtempSync(path.resolve('scripts/cache/lockscreen-test-'));

// ---- locked-phone environment (installed before the modules load)
const frozenTimers = [];
const realSetTimeout = globalThis.setTimeout;
globalThis.setTimeout = (fn, ms) => { frozenTimers.push({ fn, ms }); return frozenTimers.length; };
globalThis.clearTimeout = () => {};
globalThis.document = { hidden: true, addEventListener() {}, removeEventListener() {} };
const mediaSession = {
  handlers: {},
  metadata: null,
  playbackState: 'none',
  setActionHandler(action, handler) { this.handlers[action] = handler; }
};
Object.defineProperty(globalThis, 'navigator', { value: { mediaSession }, configurable: true });
globalThis.window = globalThis;
globalThis.MediaMetadata = class { constructor(init) { Object.assign(this, init); } };

const flush = () => new Promise(resolve => setImmediate(resolve));

try {
  const outfile = path.join(temporary, 'test.mjs');
  await build({
    stdin: { contents: `export * from './src/services/dialoguePlayback.js'; export { PLAYBACK_LESSONS, getLessonSections } from './src/data/conversationLibrary.js'; export { audioEngine } from './src/services/audioEngine.js';`, resolveDir: process.cwd() },
    bundle: true, platform: 'node', format: 'esm', outfile,
    loader: { '.css': 'empty', '.jsx': 'jsx' },
    external: ['react', 'react-dom', 'lucide-react'],
    define: { 'import.meta.env': '{"BASE_URL":"/Viet/"}' },
    plugins: [{ name: 'locked-audio', setup(builder) {
      builder.onResolve({ filter: /audioEngine(?:\.js)?$/ }, () => ({ path: 'engine', namespace: 'test' }));
      builder.onLoad({ filter: /.*/, namespace: 'test' }, () => ({ contents: `
        export const audioEngine = {
          calls: [], autoEnd: true, pending: null, stops: new Set(),
          subscribe() { return () => {}; },
          onStop(fn) { this.stops.add(fn); return () => this.stops.delete(fn); },
          stop() { this.pending = null; this.stops.forEach(fn => fn()); }, preload() {},
          speak(text, options) {
            this.calls.push({ text, lang: options.lang });
            // the shared <audio> element fires 'ended' even while the screen is locked
            if (this.autoEnd) queueMicrotask(() => options.onEnd?.());
            else this.pending = options.onEnd;
          }
        };` }));
    } }]
  });
  const mod = await import(pathToFileURL(outfile));
  const { DialogueSequencer, setPlaybackPrefs, PLAYBACK_LESSONS, getLessonSections, audioEngine: stub } = mod;
  setPlaybackPrefs({ repeat: 1, shadowPause: false, loop: false, autoNext: false, speed: 1 });

  const playToEnd = async (seq) => {
    for (let i = 0; i < 20000 && seq.state.status === 'playing'; i++) await flush();
  };

  // 1. Every homepage set completes in both modes with the screen locked and timers frozen
  let sections = 0;
  for (const lesson of PLAYBACK_LESSONS) {
    for (const section of getLessonSections(lesson)) {
      const lines = (section.lines || []).filter(l => l.viet || l.vi);
      if (!lines.length) continue;
      for (const mode of ['vi-zh', 'vi-only']) {
        const seq = new DialogueSequencer();
        seq.updateContext({ title: lesson.titleZh, nativeLang: 'zh', accent: 'north' });
        const before = frozenTimers.length;
        seq.start({ lines, mode, fromIndex: 0 });
        assert.equal(mediaSession.playbackState, 'playing', `${lesson.id}: lock screen shows playing`);
        await playToEnd(seq);
        assert.equal(seq.state.status, 'idle', `${lesson.id}/${section.id}/${mode}: finished while locked`);
        // only watchdog timers may be scheduled; no step may depend on a frozen timer
        assert.ok(frozenTimers.slice(before).every(t => t.ms >= 2000), `${lesson.id}: only watchdogs use timers while hidden`);
        seq.destroy();
        sections++;
      }
    }
  }

  // 2. Spoken order while locked: vi, zh per line (vi-zh) and vi only (vi-only)
  const sample = getLessonSections(PLAYBACK_LESSONS.find(l => l.id === 'cafe'))[0].lines;
  const spoken = [];
  const capture = new DialogueSequencer();
  capture.updateContext({ title: 'cafe', nativeLang: 'zh', accent: 'north' });
  const startCalls = stub.calls.length;
  capture.start({ lines: sample, mode: 'vi-zh' });
  await playToEnd(capture);
  spoken.push(...stub.calls.slice(startCalls));
  assert.deepEqual(spoken.map(c => c.lang), sample.flatMap(() => ['vi', 'zh']), 'vi-zh speaks every line then its translation');
  const viOnlyStart = stub.calls.length;
  capture.start({ lines: sample, mode: 'vi-only' });
  await playToEnd(capture);
  assert.deepEqual(stub.calls.slice(viOnlyStart).map(c => c.lang), sample.map(() => 'vi'), 'vi-only never plays Chinese');
  capture.destroy();

  // 3. Lock-screen buttons: pause / play / next / previous / stop and the displayed title
  stub.autoEnd = false;
  const seq = new DialogueSequencer();
  seq.updateContext({ title: '咖啡點單', nativeLang: 'zh', accent: 'north' });
  seq.start({ lines: sample, mode: 'vi-zh' });
  assert.equal(mediaSession.metadata.title, sample[0].viet, 'lock screen shows the current sentence');
  assert.match(mediaSession.metadata.artist, /越→中 逐句對照 · 1\//, 'lock screen shows mode and position');
  mediaSession.handlers.pause();
  assert.equal(seq.state.status, 'paused');
  assert.equal(mediaSession.playbackState, 'paused');
  mediaSession.handlers.play();
  assert.equal(seq.state.status, 'playing');
  mediaSession.handlers.nexttrack();
  assert.equal(seq.state.index, 1, 'next track goes to sentence 2');
  assert.equal(mediaSession.metadata.title, sample[1].viet);
  mediaSession.handlers.previoustrack();
  assert.equal(seq.state.index, 0, 'previous track returns to sentence 1');
  stub.pending?.(); // sentence 1 Vietnamese ends while locked → translation starts without timers
  await flush();
  assert.equal(seq.state.part, 'native', 'translation follows while locked');
  mediaSession.handlers.stop();
  assert.equal(seq.state.status, 'idle');
  assert.equal(mediaSession.playbackState, 'none');
  seq.destroy();

  console.log(`PASS: locked-screen playback of ${sections} section runs (vi-zh + vi-only) with frozen timers; lock-screen play/pause/next/previous/stop and now-playing title.`);
} finally {
  globalThis.setTimeout = realSetTimeout;
  fs.rmSync(temporary, { recursive: true, force: true });
}
