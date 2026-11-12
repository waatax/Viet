import React, { useSyncExternalStore } from 'react';
import { Pause, Play, SkipBack, SkipForward, X } from 'lucide-react';
import { DialogueSequencer } from '../services/dialoguePlayback';
import './ListeningDock.css';

const listeners = new Set();
let sequencer;
const subscribe = listener => {
  listeners.add(listener);
  return () => listeners.delete(listener);
};
const snapshot = () => sequencer?.state ?? null;

export function listenToHanViet(lines, accent, fromIndex = 0, single = false) {
  if (!lines.length || fromIndex < 0) return;
  sequencer ??= new DialogueSequencer(() => listeners.forEach(listener => listener()));
  const options = { lines, accent, nativeLang: 'zh', title: '漢越詞', mode: 'vi-zh', fromIndex };
  if (single) {
    sequencer.updateContext(options);
    sequencer.setLines(lines);
    sequencer.playSingleLine(fromIndex);
  } else {
    sequencer.start(options);
  }
}

export function ListeningDock() {
  const state = useSyncExternalStore(subscribe, snapshot);
  if (!state || state.status === 'idle') return null;
  const line = sequencer.lines[state.index];
  const playing = state.status === 'playing';

  return (
    <aside className="listening-dock" aria-label="通勤播放">
      <div className="listening-dock-copy">
        <strong lang="vi">{line?.viet}</strong>
        <span>{line?.native}</span>
        <small>{state.index + 1} / {state.total}{state.error && ' · 音訊未完成，請重試'}</small>
      </div>
      <div className="listening-dock-controls">
        <button type="button" aria-label="上一項" disabled={state.index <= 0} onClick={() => sequencer.prev()}><SkipBack /></button>
        <button type="button" aria-label={playing ? '暫停' : '繼續播放'} onClick={() => sequencer.togglePause()}>{playing ? <Pause /> : <Play />}</button>
        <button type="button" aria-label="下一項" disabled={state.index + 1 >= state.total} onClick={() => sequencer.next()}><SkipForward /></button>
        <button type="button" aria-label="停止播放" onClick={() => sequencer.stop()}><X /></button>
      </div>
    </aside>
  );
}
