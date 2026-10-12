/**
 * Dialogue Playback Sequencer (情境會話雙模式播放引擎)
 *
 * Plays a list of dialogue lines in one of two study modes:
 *  - 'vi-zh'   逐句對照：一遍越文、一遍中文 (each Vietnamese line, then its translation)
 *  - 'vi-only' 純越文沉浸：只播越南語
 *
 * On top of that: per-line Vietnamese repetition, shadowing pauses sized to the line just heard,
 * single-dialogue loop, speed, pause/resume, prev/next/replay/jump, a stall watchdog for
 * speech engines that never fire `onend`, next-line preloading and lock-screen media controls.
 * Only one sequencer plays at a time; any other audio started elsewhere ends the sequence.
 */
import { audioEngine } from './audioEngine';

export const PLAY_MODES = ['vi-zh', 'vi-only'];
export const SPEED_OPTIONS = [0.6, 0.75, 1.0, 1.2];
export const REPEAT_OPTIONS = [1, 2, 3];

const PREFS_KEY = 'viet_dialogue_playback_prefs_v1';
export const DEFAULT_PREFS = {
  speed: 1.0,
  repeat: 1,
  shadowPause: false,
  loop: false,
  autoNext: false
};

const GAP_MS = {
  betweenReps: 450,
  viToNative: 320,
  betweenLines: 650,
  betweenLinesSlow: 900,
  loopRestart: 1400
};

// ---------------------------------------------------------------------------
// Shared, persisted preferences (one learner = one set of habits across modules)
// ---------------------------------------------------------------------------
let sharedPrefs = null;
const prefListeners = new Set();

export const getPlaybackPrefs = () => {
  if (!sharedPrefs) {
    sharedPrefs = { ...DEFAULT_PREFS };
    try {
      const raw = localStorage.getItem(PREFS_KEY);
      if (raw) sharedPrefs = { ...DEFAULT_PREFS, ...JSON.parse(raw) };
    } catch (e) {}
  }
  return sharedPrefs;
};

export const setPlaybackPrefs = (partial) => {
  sharedPrefs = { ...getPlaybackPrefs(), ...partial };
  // Loop one dialogue vs. advance to the next one are mutually exclusive
  if (partial.loop) sharedPrefs.autoNext = false;
  if (partial.autoNext) sharedPrefs.loop = false;
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(sharedPrefs));
  } catch (e) {}
  prefListeners.forEach(fn => fn(sharedPrefs));
  return sharedPrefs;
};

export const subscribePlaybackPrefs = (fn) => {
  prefListeners.add(fn);
  return () => prefListeners.delete(fn);
};

// Rough upper bound for how long a clip can take; past this we assume `onEnd` was lost
const watchdogMs = (text, lang, rate) => {
  const perChar = lang === 'vi' ? 170 : 400;
  return Math.max(6000, ((text || '').length * perChar) / Math.max(rate, 0.5) + 4000);
};

let activeSequencer = null;
let sequencerCount = 0;

export class DialogueSequencer {
  constructor(onChange) {
    this.id = `dlg${++sequencerCount}`;
    this.onChange = onChange;
    this.lines = [];
    this.ctx = { accent: 'north', nativeLang: 'zh', title: '', onComplete: null };
    this.state = { status: 'idle', mode: 'vi-zh', index: -1, part: null, rep: 0, total: 0, runs: 0 };
    this.token = 0;
    this.timers = new Set();
    this.selfStopping = false;
    this.singleLineOnly = false;

    this.unsubscribeState = audioEngine.subscribe(this.handleEngineState);
    this.unsubscribeStop = audioEngine.onStop(this.handleExternalStop);
  }

  // ---------------------------------------------------------------- state
  setState(patch) {
    this.state = { ...this.state, ...patch };
    if (this.onChange) this.onChange(this.state);
  }

  get prefs() {
    return getPlaybackPrefs();
  }

  updateContext(ctx) {
    this.ctx = { ...this.ctx, ...ctx };
  }

  setLines(rawLines, nativeLang = this.ctx.nativeLang) {
    this.lines = (rawLines || [])
      .map(line => ({
        viet: line.viet || line.vi || '',
        native: (nativeLang === 'zh' ? line.zh : (line.en || line.zh)) || ''
      }))
      .filter(line => line.viet);
    if (this.state.total !== this.lines.length) this.setState({ total: this.lines.length });
  }

  // ---------------------------------------------------------------- engine coordination
  handleEngineState = (engineState) => {
    if (this.state.status !== 'playing') return;
    const key = engineState.activeKey ? String(engineState.activeKey) : '';
    // Someone else started speaking (single-line button, flashcard, tone synth...) → yield
    if (engineState.isPlaying && key && !key.startsWith(`${this.id}:`)) {
      this.halt();
    }
  };

  handleExternalStop = () => {
    if (this.selfStopping) return;
    if (this.state.status === 'playing') this.halt();
  };

  silenceEngine() {
    this.selfStopping = true;
    try {
      audioEngine.stop();
    } finally {
      this.selfStopping = false;
    }
  }

  clearTimers() {
    this.timers.forEach(t => clearTimeout(t));
    this.timers.clear();
  }

  /**
   * Schedules the next step. Hidden pages (screen off, other tab) get their timers throttled —
   * Chrome can delay them by up to a minute — so gaps are skipped there and the next clip chains
   * straight from the previous clip's `ended` event. Waits that must really wait (watchdog,
   * shadowing pause) pass { evenWhenHidden: true }.
   */
  later(fn, ms, { evenWhenHidden = false } = {}) {
    const token = this.token;
    const run = () => {
      if (token === this.token && this.state.status === 'playing') fn();
    };
    if (!evenWhenHidden && typeof document !== 'undefined' && document.hidden) {
      Promise.resolve().then(run);
      return;
    }
    const timer = setTimeout(() => {
      this.timers.delete(timer);
      run();
    }, ms);
    this.timers.add(timer);
  }

  // ---------------------------------------------------------------- transport
  start({ lines, mode = 'vi-zh', fromIndex = 0, ...ctx } = {}) {
    if (activeSequencer && activeSequencer !== this) activeSequencer.halt();
    activeSequencer = this;
    this.singleLineOnly = false;

    if (ctx) this.updateContext(ctx);
    if (lines) this.setLines(lines, this.ctx.nativeLang);
    if (!this.lines.length) return;

    this.token++;
    this.clearTimers();
    const index = Math.min(Math.max(fromIndex, 0), this.lines.length - 1);
    this.setState({ status: 'playing', mode: PLAY_MODES.includes(mode) ? mode : 'vi-zh', index, part: null, rep: 0 });
    this.bindMediaSession();
    this.runLine(index);
  }

  playSingleLine(index, mode = 'vi-zh') {
    if (activeSequencer && activeSequencer !== this) activeSequencer.halt();
    activeSequencer = this;
    this.singleLineOnly = true;

    if (!this.lines.length) return;

    this.token++;
    this.clearTimers();
    const targetIdx = Math.min(Math.max(index, 0), this.lines.length - 1);
    this.setState({ status: 'playing', mode: PLAY_MODES.includes(mode) ? mode : 'vi-zh', index: targetIdx, part: null, rep: 0 });
    this.bindMediaSession();
    this.runLine(targetIdx);
  }

  pause() {
    if (this.state.status !== 'playing') return;
    this.token++;
    this.clearTimers();
    this.silenceEngine();
    this.setState({ status: 'paused', part: null });
    this.syncMediaSessionState();
  }

  resume() {
    if (this.state.status !== 'paused') return;
    if (activeSequencer && activeSequencer !== this) activeSequencer.halt();
    activeSequencer = this;
    this.token++;
    this.setState({ status: 'playing' });
    this.bindMediaSession();
    this.runLine(Math.max(this.state.index, 0));
  }

  togglePause() {
    if (this.state.status === 'playing') this.pause();
    else if (this.state.status === 'paused') this.resume();
  }

  stop() {
    const wasActive = this.state.status !== 'idle';
    this.token++;
    this.clearTimers();
    if (wasActive) this.silenceEngine();
    this.release();
  }

  /** Ends the sequence without touching the engine (another sound has taken over) */
  halt() {
    this.token++;
    this.clearTimers();
    this.release();
  }

  release() {
    if (this.state.status !== 'idle' || this.state.index !== -1) {
      this.setState({ status: 'idle', index: -1, part: null, rep: 0 });
    }
    if (activeSequencer === this) {
      activeSequencer = null;
      this.unbindMediaSession();
    }
  }

  jumpTo(index, mode = this.state.mode) {
    if (!this.lines.length) return;
    this.singleLineOnly = false;
    if (this.state.status === 'idle' || mode !== this.state.mode) {
      this.start({ mode, fromIndex: index });
      return;
    }
    if (activeSequencer && activeSequencer !== this) activeSequencer.halt();
    activeSequencer = this;
    this.token++;
    this.setState({ status: 'playing' });
    this.runLine(Math.min(Math.max(index, 0), this.lines.length - 1));
  }

  next() {
    if (this.state.status === 'idle') return;
    if (this.state.index + 1 < this.lines.length) this.jumpTo(this.state.index + 1);
  }

  prev() {
    if (this.state.status === 'idle') return;
    this.jumpTo(Math.max(this.state.index - 1, 0));
  }

  replay() {
    if (this.state.status === 'idle') return;
    this.jumpTo(Math.max(this.state.index, 0));
  }

  setMode(mode) {
    if (!PLAY_MODES.includes(mode) || mode === this.state.mode) return;
    if (this.state.status === 'idle') {
      this.setState({ mode });
      return;
    }
    const wasPaused = this.state.status === 'paused';
    this.setState({ mode });
    if (!wasPaused) this.jumpTo(Math.max(this.state.index, 0), mode);
    this.bindMediaSession();
  }

  destroy() {
    this.stop();
    this.unsubscribeState?.();
    this.unsubscribeStop?.();
    this.onChange = null;
  }

  // ---------------------------------------------------------------- sequencing
  runLine(index) {
    if (index >= this.lines.length) {
      this.finish();
      return;
    }
    this.preloadAround(index);
    this.speakPart(index, 'vi', 0);
  }

  speakPart(index, part, rep) {
    this.token++;
    this.clearTimers();
    const token = this.token;
    const line = this.lines[index];
    const isVi = part === 'vi';
    const text = isVi ? line.viet : line.native;
    this.setState({ index, part, rep });
    this.updateMediaMetadata();

    if (!text) {
      this.afterPart(index, part, rep, 0);
      return;
    }

    const rate = isVi ? this.prefs.speed : 1.0;
    const lang = isVi ? 'vi' : this.ctx.nativeLang;
    const startedAt = Date.now();
    let ended = false;
    const handleEnd = () => {
      if (ended || token !== this.token || this.state.status !== 'playing') return;
      ended = true;
      this.afterPart(index, part, rep, Date.now() - startedAt);
    };

    this.later(handleEnd, watchdogMs(text, lang, rate), { evenWhenHidden: true });
    audioEngine.speak(text, {
      lang,
      accent: isVi ? this.ctx.accent : undefined,
      rate,
      key: `${this.id}:${index}:${part}:${rep}`,
      onEnd: handleEnd
    });
  }

  afterPart(index, part, rep, elapsedMs) {
    const { repeat, shadowPause, speed } = this.prefs;
    const lineGap = speed < 0.85 ? GAP_MS.betweenLinesSlow : GAP_MS.betweenLines;
    this.clearTimers();

    if (part === 'vi') {
      if (rep + 1 < repeat) {
        this.later(() => this.speakPart(index, 'vi', rep + 1), GAP_MS.betweenReps);
        return;
      }
      if (shadowPause) {
        // Give the learner as long as the line itself took, plus breathing room
        const wait = Math.min(12000, Math.max(1800, elapsedMs * 1.15 + 700));
        this.setState({ part: 'shadow' });
        this.later(() => this.afterVietnamese(index, lineGap), wait, { evenWhenHidden: true });
        return;
      }
      this.afterVietnamese(index, lineGap);
      return;
    }

    // Translation finished: if single line only, release cleanly
    if (this.singleLineOnly) {
      this.token++;
      this.release();
      return;
    }

    // Translation finished → next line
    this.later(() => this.runLine(index + 1), lineGap);
  }

  afterVietnamese(index, lineGap) {
    if (this.state.mode === 'vi-zh' && this.lines[index]?.native) {
      this.later(() => this.speakPart(index, 'native', 0), GAP_MS.viToNative);
    } else {
      if (this.singleLineOnly) {
        this.token++;
        this.release();
        return;
      }
      this.later(() => this.runLine(index + 1), lineGap);
    }
  }

  finish() {
    const runs = this.state.runs + 1;
    this.setState({ runs });
    try {
      this.ctx.onComplete?.({ mode: this.state.mode, runs });
    } catch (err) {
      console.error('Dialogue onComplete handler failed:', err);
    }
    // The completion handler may have started something else (e.g. the next scenario)
    if (activeSequencer !== this || this.state.status !== 'playing') return;

    if (this.prefs.loop) {
      this.setState({ part: 'loop' });
      this.later(() => this.runLine(0), GAP_MS.loopRestart);
      return;
    }
    this.token++;
    this.release();
  }

  preloadAround(index) {
    const { accent, nativeLang } = this.ctx;
    const current = this.lines[index];
    const upcoming = this.lines[index + 1];
    if (current?.native) audioEngine.preload(current.native, { lang: nativeLang });
    if (upcoming) {
      audioEngine.preload(upcoming.viet, { accent });
      if (upcoming.native && this.state.mode === 'vi-zh') audioEngine.preload(upcoming.native, { lang: nativeLang });
    }
  }

  // ---------------------------------------------------------------- lock-screen controls
  bindMediaSession() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
    const ms = navigator.mediaSession;
    const handlers = {
      play: () => this.resume(),
      pause: () => this.pause(),
      stop: () => this.stop(),
      previoustrack: () => this.prev(),
      nexttrack: () => this.next()
    };
    Object.entries(handlers).forEach(([action, fn]) => {
      try {
        ms.setActionHandler(action, fn);
      } catch (e) {}
    });
    this.updateMediaMetadata();
    this.syncMediaSessionState();
  }

  updateMediaMetadata() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator) || typeof window.MediaMetadata === 'undefined') return;
    if (activeSequencer !== this) return;
    const { index, mode, total } = this.state;
    const modeLabel = mode === 'vi-zh'
      ? (this.ctx.nativeLang === 'zh' ? '越→中 逐句對照' : 'Vietnamese → English')
      : (this.ctx.nativeLang === 'zh' ? '純越文沉浸' : 'Vietnamese only');
    try {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: this.lines[index]?.viet || this.ctx.title || 'Viet Learning Hub',
        artist: `${this.ctx.title || ''} · ${modeLabel}${index >= 0 ? ` · ${index + 1}/${total}` : ''}`,
        album: 'Viet Learning Hub'
      });
    } catch (e) {}
  }

  syncMediaSessionState() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
    try {
      navigator.mediaSession.playbackState = this.state.status === 'playing' ? 'playing' : (this.state.status === 'paused' ? 'paused' : 'none');
    } catch (e) {}
  }

  unbindMediaSession() {
    if (typeof navigator === 'undefined' || !('mediaSession' in navigator)) return;
    ['play', 'pause', 'stop', 'previoustrack', 'nexttrack'].forEach(action => {
      try {
        navigator.mediaSession.setActionHandler(action, null);
      } catch (e) {}
    });
    try {
      navigator.mediaSession.playbackState = 'none';
    } catch (e) {}
  }
}
