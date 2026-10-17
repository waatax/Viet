import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Square,
  RotateCcw,
  Repeat,
  Mic,
  Gauge,
  Settings2,
  Languages,
  Headphones,
  ChevronsRight
} from 'lucide-react';
import { SPEED_OPTIONS, REPEAT_OPTIONS } from '../services/dialoguePlayback';
import { audioEngine } from '../services/audioEngine';
import './DialoguePlaybackBar.css';

const copy = {
  zh: {
    viZh: '越→中 逐句對照',
    viZhSub: '一遍越文 · 一遍中文',
    viOnly: '純越文 沉浸聽力',
    viOnlySub: '只播越南語原音',
    pause: '暫停',
    resume: '繼續播放',
    switchTo: '切換為此模式',
    line: (i, n) => `第 ${i} / ${n} 句`,
    partVi: '越文',
    partNative: '中文',
    partShadow: '換你跟讀',
    partLoop: '即將重播',
    paused: '已暫停',
    failed: '音訊未完成，請重試',
    prev: '上一句',
    next: '下一句',
    replay: '重聽本句',
    stop: '停止',
    speed: '語速',
    repeat: '越文重複',
    shadow: '跟讀停頓',
    loop: '單篇循環',
    settings: '播放設定',
    tip: '學習建議：先用「越→中」理解句意 → 再切「純越文」盲聽 → 開「跟讀停頓」開口練習。',
    region: '對話播放控制',
    audioError: '這句音訊尚未播放完成。請確認網路或音檔快取，再重聽本句；也可以自行切到下一句。',
    jump: (i) => `從第 ${i} 句開始播放`
  },
  en: {
    viZh: 'Viet → English',
    viZhSub: 'Vietnamese, then translation',
    viOnly: 'Vietnamese Only',
    viOnlySub: 'Immersion listening',
    pause: 'Pause',
    resume: 'Resume',
    switchTo: 'Switch to this mode',
    line: (i, n) => `Line ${i} / ${n}`,
    partVi: 'Vietnamese',
    partNative: 'English',
    partShadow: 'Your turn',
    partLoop: 'Looping',
    paused: 'Paused',
    failed: 'Audio incomplete — retry',
    prev: 'Previous line',
    next: 'Next line',
    replay: 'Replay line',
    stop: 'Stop',
    speed: 'Speed',
    repeat: 'Repeat Viet',
    shadow: 'Shadow pause',
    loop: 'Loop',
    settings: 'Playback settings',
    tip: 'Tip: listen in "Viet → English" first, then switch to "Vietnamese Only", then turn on shadow pauses and speak along.',
    region: 'Dialogue playback controls',
    audioError: 'This line could not finish playing. Check your connection or cached audio, then replay it. You can also choose the next line.',
    jump: (i) => `Play from line ${i}`
  }
};

export const getPlaybackCopy = (learningMode) => copy[learningMode === 'zh' ? 'zh' : 'en'];

/** Small chip describing what is being heard right now */
export const PlaybackPartChip = ({ player, learningMode, className = '' }) => {
  const t = getPlaybackCopy(learningMode);
  if (!player.isActive) return null;
  let icon = '🇻🇳';
  let label = t.partVi;
  let tone = 'vi';
  if (player.error) {
    icon = '⚠';
    label = t.failed;
    tone = 'paused';
  } else if (player.isPaused) {
    icon = '⏸';
    label = t.paused;
    tone = 'paused';
  } else if (player.part === 'native') {
    icon = learningMode === 'zh' ? '🇹🇼' : '🇬🇧';
    label = t.partNative;
    tone = 'native';
  } else if (player.part === 'shadow') {
    icon = '🎙️';
    label = t.partShadow;
    tone = 'shadow';
  } else if (player.part === 'loop') {
    icon = '🔁';
    label = t.partLoop;
    tone = 'loop';
  } else if (player.prefs.repeat > 1) {
    label = `${t.partVi} ${player.rep + 1}/${player.prefs.repeat}`;
  }
  return (
    <span className={`dpb-part-chip tone-${tone} ${className}`}>
      <span aria-hidden="true">{icon}</span>
      <span>{label}</span>
    </span>
  );
};

const ModeButton = ({ mode, player, learningMode, xpHint }) => {
  const t = getPlaybackCopy(learningMode);
  const isCurrent = player.isActive && player.mode === mode;
  const isOther = player.isActive && player.mode !== mode;
  const Icon = mode === 'vi-zh' ? Languages : Headphones;
  const label = mode === 'vi-zh' ? t.viZh : t.viOnly;
  let sub = mode === 'vi-zh' ? t.viZhSub : t.viOnlySub;
  if (isCurrent) sub = player.isPaused ? t.resume : t.pause;
  else if (isOther) sub = t.switchTo;

  return (
    <button
      type="button"
      className={`dpb-mode-btn mode-${mode} ${isCurrent ? 'is-current' : ''} ${isCurrent && player.isPlaying ? 'is-playing' : ''}`}
      onClick={() => {
        audioEngine.playHaptic('tap');
        player.toggleMode(mode);
      }}
      aria-pressed={isCurrent}
    >
      <span className="dpb-mode-icon" aria-hidden="true">
        {isCurrent ? (player.isPlaying ? <Pause size={18} /> : <Play size={18} />) : <Icon size={18} />}
      </span>
      <span className="dpb-mode-text">
        <span className="dpb-mode-label">
          {label}
          {xpHint && !player.isActive && <span className="dpb-xp hide-mobile">{xpHint}</span>}
        </span>
        <span className="dpb-mode-sub">{sub}</span>
      </span>
      {isCurrent && player.isPlaying && <span className="dpb-eq" aria-hidden="true"><i /><i /><i /></span>}
    </button>
  );
};

const TransportButtons = ({ player, learningMode, size = 17 }) => {
  const t = getPlaybackCopy(learningMode);
  const atStart = player.index <= 0;
  const atEnd = player.index >= player.total - 1;
  const tap = (fn) => () => {
    audioEngine.playHaptic('tap');
    fn();
  };
  return (
    <div className="dpb-transport-buttons">
      <button type="button" className="dpb-icon-btn" onClick={tap(player.prev)} disabled={atStart} aria-label={t.prev} title={t.prev}>
        <SkipBack size={size} />
      </button>
      <button
        type="button"
        className="dpb-icon-btn dpb-main-btn"
        onClick={tap(player.togglePause)}
        aria-label={player.isPlaying ? t.pause : t.resume}
        title={player.isPlaying ? t.pause : t.resume}
      >
        {player.isPlaying ? <Pause size={size + 2} /> : <Play size={size + 2} />}
      </button>
      <button type="button" className="dpb-icon-btn" onClick={tap(player.replay)} aria-label={t.replay} title={t.replay}>
        <RotateCcw size={size} />
      </button>
      <button type="button" className="dpb-icon-btn" onClick={tap(player.next)} disabled={atEnd} aria-label={t.next} title={t.next}>
        <SkipForward size={size} />
      </button>
      <button type="button" className="dpb-icon-btn dpb-stop-btn" onClick={tap(player.stop)} aria-label={t.stop} title={t.stop}>
        <Square size={size - 2} />
      </button>
    </div>
  );
};

const PlaybackSettings = ({ player, learningMode, autoNextLabel }) => {
  const t = getPlaybackCopy(learningMode);
  const { prefs, setPrefs } = player;
  const toggle = (key) => {
    audioEngine.playHaptic('selection');
    setPrefs({ [key]: !prefs[key] });
  };
  return (
    <div className="dpb-settings">
      <div className="dpb-setting-group" role="group" aria-label={t.speed}>
        <span className="dpb-setting-label"><Gauge size={14} /> {t.speed}</span>
        <div className="dpb-segmented">
          {SPEED_OPTIONS.map(speed => (
            <button
              key={speed}
              type="button"
              className={prefs.speed === speed ? 'active' : ''}
              aria-pressed={prefs.speed === speed}
              onClick={() => {
                audioEngine.playHaptic('selection');
                setPrefs({ speed });
              }}
            >
              {speed}x
            </button>
          ))}
        </div>
      </div>

      <div className="dpb-setting-group" role="group" aria-label={t.repeat}>
        <span className="dpb-setting-label"><Repeat size={14} /> {t.repeat}</span>
        <div className="dpb-segmented">
          {REPEAT_OPTIONS.map(repeat => (
            <button
              key={repeat}
              type="button"
              className={prefs.repeat === repeat ? 'active' : ''}
              aria-pressed={prefs.repeat === repeat}
              onClick={() => {
                audioEngine.playHaptic('selection');
                setPrefs({ repeat });
              }}
            >
              {repeat}×
            </button>
          ))}
        </div>
      </div>

      <div className="dpb-toggle-row">
        <button type="button" className={`dpb-toggle ${prefs.shadowPause ? 'on' : ''}`} aria-pressed={prefs.shadowPause} onClick={() => toggle('shadowPause')}>
          <Mic size={14} /> {t.shadow}
        </button>
        <button type="button" className={`dpb-toggle ${prefs.loop ? 'on' : ''}`} aria-pressed={prefs.loop} onClick={() => toggle('loop')}>
          <Repeat size={14} /> {t.loop}
        </button>
        {autoNextLabel && (
          <button type="button" className={`dpb-toggle ${prefs.autoNext ? 'on' : ''}`} aria-pressed={prefs.autoNext} onClick={() => toggle('autoNext')}>
            <ChevronsRight size={14} /> {autoNextLabel}
          </button>
        )}
      </div>
    </div>
  );
};

/**
 * Shared two-mode playback bar for every situational dialogue.
 *
 * Props:
 *  - player        result of useDialoguePlayback()
 *  - lines         the same lines given to the hook (used for progress tooltips & the dock)
 *  - learningMode  'zh' | 'en'
 *  - title         dialogue title for the floating dock
 *  - variant       'full' (settings always visible) | 'compact' (settings behind a toggle)
 *  - autoNextLabel shows an "auto-continue" toggle with this label when provided
 *  - xpHint        small reward hint on the idle mode buttons
 */
export const DialoguePlaybackBar = ({
  player,
  lines = [],
  learningMode = 'zh',
  title = '',
  variant = 'full',
  autoNextLabel,
  xpHint
}) => {
  const t = getPlaybackCopy(learningMode);
  const rootRef = useRef(null);
  const [inView, setInView] = useState(true);
  const [settingsOpen, setSettingsOpen] = useState(variant === 'full');

  useEffect(() => {
    const el = rootRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const observer = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), { threshold: 0.15 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const total = player.total || lines.length;
  const currentLine = player.index >= 0 ? lines.filter(l => l.viet || l.vi)[player.index] : null;
  const currentText = currentLine ? (currentLine.viet || currentLine.vi) : '';
  const showDock = player.isActive && !inView && typeof document !== 'undefined';

  return (
    <>
      <section
        ref={rootRef}
        className={`dpb dpb-${variant} ${player.isActive ? 'is-active' : ''}`}
        aria-label={t.region}
      >
        {player.error && <p className="dpb-error" role="alert">{t.audioError}</p>}
        <div className="dpb-modes" role="group">
          <ModeButton mode="vi-zh" player={player} learningMode={learningMode} xpHint={xpHint} />
          <ModeButton mode="vi-only" player={player} learningMode={learningMode} xpHint={xpHint} />
          {variant === 'compact' && (
            <button
              type="button"
              className={`dpb-icon-btn dpb-settings-toggle ${settingsOpen ? 'on' : ''}`}
              onClick={() => setSettingsOpen(open => !open)}
              aria-expanded={settingsOpen}
              aria-label={t.settings}
              title={t.settings}
            >
              <Settings2 size={17} />
            </button>
          )}
        </div>

        {player.isActive && (
          <div className="dpb-transport">
            <div className="dpb-status">
              <span className="dpb-line-count">{t.line(player.index + 1, total)}</span>
              <PlaybackPartChip player={player} learningMode={learningMode} />
            </div>
            <TransportButtons player={player} learningMode={learningMode} />
          </div>
        )}

        {player.isActive && total > 1 && (
          <div className="dpb-progress" role="group" aria-label={t.line(player.index + 1, total)}>
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                type="button"
                className={`dpb-seg ${i < player.index ? 'done' : ''} ${i === player.index ? 'current' : ''}`}
                onClick={() => player.playFrom(i)}
                aria-label={t.jump(i + 1)}
                title={t.jump(i + 1)}
              />
            ))}
          </div>
        )}

        {settingsOpen && <PlaybackSettings player={player} learningMode={learningMode} autoNextLabel={autoNextLabel} />}

        {variant === 'full' && !player.isActive && <p className="dpb-tip">💡 {t.tip}</p>}
      </section>

      {showDock && createPortal(
        <div className={`dpb-dock mode-${player.mode}`} role="region" aria-label={t.region}>
          <button
            type="button"
            className="dpb-dock-info"
            onClick={() => rootRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          >
            <span className="dpb-dock-meta">
              <span aria-hidden="true">{player.mode === 'vi-zh' ? (learningMode === 'zh' ? '🇻🇳→🇹🇼' : '🇻🇳→🇬🇧') : '🎧'}</span>
              <span>{t.line(player.index + 1, total)}</span>
              <PlaybackPartChip player={player} learningMode={learningMode} className="mini" />
            </span>
            <span className="dpb-dock-text">{currentText || title}</span>
          </button>
          <TransportButtons player={player} learningMode={learningMode} size={16} />
        </div>,
        document.body
      )}
    </>
  );
};

export default DialoguePlaybackBar;
