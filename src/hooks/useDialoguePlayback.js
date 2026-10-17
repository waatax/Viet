import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  DialogueSequencer,
  getPlaybackPrefs,
  setPlaybackPrefs,
  subscribePlaybackPrefs
} from '../services/dialoguePlayback';

const IDLE_STATE = { status: 'idle', mode: 'vi-zh', index: -1, part: null, rep: 0, total: 0, runs: 0 };

/**
 * React binding for DialogueSequencer.
 *
 * @param {object}   opts
 * @param {Array}    opts.lines       dialogue lines ({ viet|vi, zh, en })
 * @param {string}   opts.accent      'north' | 'south'
 * @param {string}   opts.nativeLang  'zh' | 'en' (language of the translation pass)
 * @param {string}   opts.title       shown on lock-screen controls
 * @param {Function} opts.onComplete  called after the last line ({ mode, runs })
 */
export function useDialoguePlayback({ lines = [], accent = 'north', nativeLang = 'zh', title = '', onComplete } = {}) {
  const [state, setState] = useState(IDLE_STATE);
  const [prefs, setPrefsState] = useState(getPlaybackPrefs);
  const seqRef = useRef(null);
  const linesRef = useRef(lines);
  const onCompleteRef = useRef(onComplete);
  linesRef.current = lines;
  onCompleteRef.current = onComplete;

  // Created in an effect (not during render) so StrictMode's mount/unmount/mount stays clean
  useEffect(() => {
    const seq = new DialogueSequencer(next => setState(next));
    seqRef.current = seq;
    return () => {
      seq.destroy();
      if (seqRef.current === seq) seqRef.current = null;
    };
  }, []);

  useEffect(() => subscribePlaybackPrefs(next => setPrefsState(next)), []);

  useEffect(() => {
    seqRef.current?.updateContext({
      accent,
      nativeLang,
      title,
      onComplete: info => onCompleteRef.current?.(info)
    });
  }, [accent, nativeLang, title]);

  // A different script (scenario / section / filter switch) ends whatever was playing
  const signature = useMemo(
    () => JSON.stringify([accent, nativeLang, lines.map(l => [l.viet || l.vi || '', nativeLang === 'zh' ? l.zh : (l.en || l.zh)])]),
    [lines, nativeLang, accent]
  );
  useEffect(() => {
    const seq = seqRef.current;
    if (!seq) return;
    seq.stop();
    seq.setLines(linesRef.current, nativeLang);
  }, [signature]);

  const play = useCallback((mode = 'vi-zh', fromIndex = 0) => {
    seqRef.current?.start({ lines: linesRef.current, mode, fromIndex });
  }, []);

  /** Main mode buttons: idle → start, same mode → pause/resume, other mode → switch in place */
  const toggleMode = useCallback((mode) => {
    const seq = seqRef.current;
    if (!seq) return;
    const { status, mode: current } = seq.state;
    if (status === 'idle') {
      seq.start({ lines: linesRef.current, mode, fromIndex: 0 });
    } else if (mode === current) {
      seq.togglePause();
    } else {
      seq.setMode(mode);
      if (seq.state.status === 'paused') seq.resume();
    }
  }, []);

  const playFrom = useCallback((index, mode) => {
    const seq = seqRef.current;
    if (!seq) return;
    if (seq.state.status === 'idle') {
      seq.start({ lines: linesRef.current, mode: mode || seq.state.mode, fromIndex: index });
    } else {
      seq.jumpTo(index, mode || seq.state.mode);
    }
  }, []);

  const playSingleLine = useCallback((index, mode = 'vi-zh') => {
    seqRef.current?.playSingleLine(index, mode);
  }, []);

  const pause = useCallback(() => seqRef.current?.pause(), []);
  const resume = useCallback(() => seqRef.current?.resume(), []);
  const togglePause = useCallback(() => seqRef.current?.togglePause(), []);
  const stop = useCallback(() => seqRef.current?.stop(), []);
  const next = useCallback(() => seqRef.current?.next(), []);
  const prev = useCallback(() => seqRef.current?.prev(), []);
  const replay = useCallback(() => seqRef.current?.replay(), []);

  return {
    ...state,
    total: state.total || lines.filter(l => l.viet || l.vi).length,
    isActive: state.status !== 'idle',
    isPlaying: state.status === 'playing',
    isPaused: state.status === 'paused',
    nativeLang,
    prefs,
    setPrefs: setPlaybackPrefs,
    play,
    toggleMode,
    playFrom,
    playSingleLine,
    pause,
    resume,
    togglePause,
    stop,
    next,
    prev,
    replay
  };
}

/**
 * Keeps the line being spoken on screen without fighting the reader: only scrolls when the
 * line has left the comfortable middle band of the viewport.
 */
export function useFollowActiveLine(containerRef, activeIndex, enabled = true) {
  useEffect(() => {
    if (!enabled || activeIndex < 0 || typeof window === 'undefined') return;
    const el = containerRef.current?.querySelector(`[data-line-index="${activeIndex}"]`);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const topLimit = 96;
    const bottomLimit = window.innerHeight - 170;
    if (rect.top < topLimit || rect.bottom > bottomLimit) {
      const reduceMotion = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
      el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    }
  }, [containerRef, activeIndex, enabled]);
}
