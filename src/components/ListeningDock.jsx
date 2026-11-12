import React, { useSyncExternalStore, useCallback } from 'react';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  RotateCcw,
  Square,
  Gauge,
  X,
  Volume2
} from 'lucide-react';
import {
  DialogueSequencer,
  subscribeActiveSequencer,
  getActiveSequencerSnapshot,
  setPlaybackPrefs
} from '../services/dialoguePlayback';
import './ListeningDock.css';

// Backward compatibility for HanVietModule
let hanVietSequencer;
export function listenToHanViet(lines, accent, fromIndex = 0, single = false) {
  if (!lines || !lines.length || fromIndex < 0) return;
  hanVietSequencer ??= new DialogueSequencer();
  const options = {
    lines,
    accent,
    nativeLang: 'zh',
    title: '漢越詞',
    module: 'hanviet',
    mode: 'vi-zh',
    fromIndex
  };
  if (single) {
    hanVietSequencer.updateContext(options);
    hanVietSequencer.setLines(lines);
    hanVietSequencer.playSingleLine(fromIndex);
  } else {
    hanVietSequencer.start(options);
  }
}

export function ListeningDock() {
  const snapshot = useSyncExternalStore(subscribeActiveSequencer, getActiveSequencerSnapshot);

  const handleScrollToActive = useCallback(() => {
    if (!snapshot) return;
    const idx = snapshot.state?.index;
    if (idx === undefined || idx < 0) return;

    // Search for element matching the active line index
    const target =
      document.querySelector(`[data-line-index="${idx}"]`) ||
      document.querySelector(`[data-index="${idx}"]`) ||
      document.querySelector('.dpb-active-line') ||
      document.querySelector('.playing-card') ||
      document.querySelector('.fs-row.is-playing');

    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      target.classList.add('dock-target-ping');
      setTimeout(() => target.classList.remove('dock-target-ping'), 1400);
    }
  }, [snapshot]);

  if (!snapshot || !snapshot.sequencer || snapshot.state.status === 'idle') {
    return null;
  }

  const { state, currentLine, ctx, prefs, sequencer } = snapshot;
  const isPlaying = state.status === 'playing';
  const total = state.total || sequencer.lines?.length || 1;
  const currentIndex = Math.max(0, state.index);

  const viText = currentLine?.viet || '';
  const nativeText = currentLine?.native || currentLine?.zh || currentLine?.en || '';
  const title = ctx.title || '';
  const moduleType = ctx.module || 'dialogue';
  const speed = prefs.speed || 1.0;

  // Determine module display label & icon
  let typeLabel = '會話';
  let typeIcon = '💬';
  if (moduleType === 'phrase' || title.includes('片語') || title.includes('短句')) {
    typeLabel = '片語';
    typeIcon = '📝';
  } else if (moduleType === 'vocab' || title.includes('單字') || title.includes('字彙')) {
    typeLabel = '單字';
    typeIcon = '🗂️';
  } else if (moduleType === 'hanviet' || title.includes('漢越')) {
    typeLabel = '漢越詞';
    typeIcon = '🏛️';
  }

  // Determine speaking state badge
  let partLabel = '越文原音';
  let partTone = 'vi';
  let partIcon = '🇻🇳';

  if (state.error) {
    partLabel = '音訊未完成，請重聽';
    partTone = 'error';
    partIcon = '⚠️';
  } else if (!isPlaying) {
    partLabel = '已暫停';
    partTone = 'paused';
    partIcon = '⏸️';
  } else if (state.part === 'native') {
    partLabel = ctx.nativeLang === 'zh' ? '中文翻譯' : 'English';
    partTone = 'native';
    partIcon = ctx.nativeLang === 'zh' ? '🇹🇼' : '🇬🇧';
  } else if (state.part === 'shadow') {
    partLabel = '換你跟讀';
    partTone = 'shadow';
    partIcon = '🎙️';
  } else if (state.part === 'loop') {
    partLabel = '即將重播';
    partTone = 'loop';
    partIcon = '🔁';
  } else if (prefs.repeat > 1) {
    partLabel = `越文 ${state.rep + 1}/${prefs.repeat}`;
  }

  return (
    <aside
      className={`learning-dock active-mode-${state.mode || 'vi-zh'}`}
      role="region"
      aria-label="語音學習播放器"
    >
      {/* Top row / meta information bar */}
      <div className="learning-dock-header">
        <div className="learning-dock-tags">
          <span className="learning-dock-type-pill">
            <span aria-hidden="true">{typeIcon}</span>
            <span>{typeLabel}{title ? ` · ${title}` : ''}</span>
          </span>
          <span className="learning-dock-counter">
            第 {currentIndex + 1} / {total} {typeLabel === '單字' ? '字' : '句'}
          </span>
          <span className={`learning-dock-part-pill tone-${partTone}`}>
            <span aria-hidden="true">{partIcon}</span>
            <span>{partLabel}</span>
          </span>
        </div>

        {/* Speed button in header for 1-click speed switching */}
        <button
          type="button"
          className="learning-dock-speed-pill"
          onClick={() => sequencer.cycleSpeed()}
          title={`目前語速 ${speed}x，點擊切換 (0.6x → 0.75x → 1.0x → 1.2x)`}
          aria-label={`目前語速 ${speed}x，點擊切換`}
        >
          <Gauge size={13} aria-hidden="true" />
          <span>{speed}x</span>
        </button>
      </div>

      {/* Synchronous Bilingual Text Display: Vietnamese + Chinese */}
      <div
        className="learning-dock-bilingual"
        onClick={handleScrollToActive}
        title="點擊捲動至對應內容"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScrollToActive(); }}
      >
        <div className={`learning-dock-vi ${state.part === 'vi' && isPlaying ? 'is-speaking' : ''}`} lang="vi">
          <span className="learning-dock-lang-tag">🇻🇳</span>
          <span className="learning-dock-vi-text">{viText || '（準備發音）'}</span>
        </div>

        {nativeText ? (
          <div className={`learning-dock-native ${state.part === 'native' && isPlaying ? 'is-speaking' : ''}`}>
            <span className="learning-dock-lang-tag">{ctx.nativeLang === 'zh' ? '🇹🇼' : '🇬🇧'}</span>
            <span className="learning-dock-native-text">{nativeText}</span>
          </div>
        ) : null}
      </div>

      {/* Complete Playback Transport Controls */}
      <div className="learning-dock-controls" role="group" aria-label="播放控制">
        <button
          type="button"
          className="dock-ctrl-btn btn-prev"
          disabled={currentIndex <= 0}
          onClick={() => sequencer.prev()}
          title="上一句 / 上一項"
          aria-label="上一句"
        >
          <SkipBack size={17} />
          <span className="dock-btn-label">上一句</span>
        </button>

        <button
          type="button"
          className={`dock-ctrl-btn btn-main ${isPlaying ? 'is-playing' : 'is-paused'}`}
          onClick={() => sequencer.togglePause()}
          title={isPlaying ? '暫停 (Space)' : '繼續播放 (Space)'}
          aria-label={isPlaying ? '暫停' : '繼續播放'}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          <span className="dock-btn-label">{isPlaying ? '暫停' : '播放'}</span>
        </button>

        {/* Replay this sentence: PROMINENT & NEVER HIDDEN on mobile */}
        <button
          type="button"
          className="dock-ctrl-btn btn-replay"
          onClick={() => sequencer.replay()}
          title="重複這句 / 重聽本項 (R)"
          aria-label="重複這句"
        >
          <RotateCcw size={17} />
          <span className="dock-btn-label">重複這句</span>
        </button>

        <button
          type="button"
          className="dock-ctrl-btn btn-next"
          disabled={currentIndex + 1 >= total}
          onClick={() => sequencer.next()}
          title="下一句 / 下一項"
          aria-label="下一句"
        >
          <SkipForward size={17} />
          <span className="dock-btn-label">下一句</span>
        </button>

        <button
          type="button"
          className="dock-ctrl-btn btn-stop"
          onClick={() => sequencer.stop()}
          title="停止播放"
          aria-label="停止播放"
        >
          <Square size={15} />
          <span className="dock-btn-label">停止</span>
        </button>
      </div>
    </aside>
  );
}

export default ListeningDock;
