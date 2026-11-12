import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Search, X, Play, Pause, Star, ChevronDown } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import { DialogueSequencer } from '../../services/dialoguePlayback';
import { bookmarkService } from '../../services/bookmarkService';
import { cardStage } from '../../services/flashcardScheduler';
import { ToneWord, CardDetails } from './VocabParts';

const PAGE = 40;
const STATUS_FILTERS = [
  { id: 'all', label: '全部' },
  { id: 'new', label: '未學' },
  { id: 'learning', label: '學習中' },
  { id: 'mastered', label: '已穩固' },
  { id: 'starred', label: '收藏' }
];
const PLAY_MODES = [
  { id: 'vi-zh', label: '越 → 中' },
  { id: 'zh-vi', label: '中 → 越' },
  { id: 'vi', label: '純越文' },
  { id: 'x3', label: '越中 ×3' }
];

/** Dictionary-style list of the deck with hands-free continuous playback. */
export const WordBrowser = ({ deck, srsData, accent, learningMode = 'zh', activeKey }) => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState('all');
  const [pos, setPos] = useState('all');
  const [limit, setLimit] = useState(PAGE);
  const [openId, setOpenId] = useState(null);
  const [playMode, setPlayMode] = useState('vi-zh');
  const [speed, setSpeed] = useState(0.9);
  const [playingIndex, setPlayingIndex] = useState(-1);
  const [, setBookmarkTick] = useState(0);
  const playingRef = useRef(false);
  const timerRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => bookmarkService.subscribe(() => setBookmarkTick((n) => n + 1)), []);

  const posOptions = useMemo(() => {
    const counts = new Map();
    deck.forEach((w) => w.pos && counts.set(w.pos, (counts.get(w.pos) || 0) + 1));
    return [...counts.entries()].sort((a, b) => b[1] - a[1]);
  }, [deck]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return deck.filter((w) => {
      if (pos !== 'all' && w.pos !== pos) return false;
      if (status === 'starred' && !bookmarkService.isBookmarked(w.viet)) return false;
      if (status !== 'all' && status !== 'starred') {
        const stage = cardStage(srsData[w.id]);
        if (status === 'learning' ? !(stage === 'learning' || stage === 'relearn') : stage !== status) return false;
      }
      if (!q) return true;
      return [w.viet, w.zh, w.en, w.hanViet].some((f) => f && f.toLowerCase().includes(q));
    });
  }, [deck, query, status, pos, srsData]);

  useEffect(() => { setLimit(PAGE); }, [query, status, pos, deck]);

  const seqRef = useRef(null);
  useEffect(() => {
    const seq = new DialogueSequencer((s) => {
      setPlayingIndex(s.status === 'idle' ? -1 : s.index);
      if (s.index >= 0 && s.index >= limit) {
        setLimit(s.index + PAGE);
      }
    });
    seqRef.current = seq;
    return () => {
      seq.destroy();
    };
  }, [limit]);

  const stop = () => {
    seqRef.current?.stop();
    setPlayingIndex(-1);
  };
  useEffect(() => () => seqRef.current?.stop(), []);
  useEffect(() => { seqRef.current?.stop(); }, [filtered]);

  const togglePlay = (startAt = 0) => {
    const seq = seqRef.current;
    if (!seq) return;
    if (seq.state.status === 'playing') {
      seq.togglePause();
      return;
    }
    if (seq.state.status === 'paused') {
      seq.resume();
      return;
    }

    const lines = filtered.map((w) => ({
      viet: w.viet,
      native: learningMode === 'zh' ? (w.zh ? w.zh.split(' / ').slice(0, 2).join('，') : '') : (w.en || w.zh),
      zh: w.zh,
      en: w.en
    }));

    const mode = playMode === 'vi' ? 'vi-only' : (playMode === 'zh-vi' ? 'zh-vi' : 'vi-zh');
    seq.start({
      lines,
      mode,
      fromIndex: Math.max(0, startAt),
      accent,
      nativeLang: learningMode === 'zh' ? 'zh' : 'en',
      title: learningMode === 'zh' ? '分級單字庫' : 'Word Browser',
      module: 'vocab'
    });
  };

  useEffect(() => {
    if (playingIndex < 0) return;
    listRef.current?.querySelector(`[data-index="${playingIndex}"]`)?.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, [playingIndex]);

  const isPlaying = playingIndex >= 0;

  return (
    <section className="fs-browser" aria-label="瀏覽字庫">
      <div className="fs-browser-tools">
        <label className="fs-search">
          <Search size={16} aria-hidden="true" />
          <span className="sr-only">搜尋</span>
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="搜尋越文、中文、漢越音…" />
          {query && <button type="button" onClick={() => setQuery('')} aria-label="清除搜尋"><X size={14} /></button>}
        </label>
        <div className="fs-seg" role="group" aria-label="學習狀態">
          {STATUS_FILTERS.map((s) => (
            <button key={s.id} type="button" className={status === s.id ? 'is-on' : ''} aria-pressed={status === s.id} onClick={() => setStatus(s.id)}>{s.label}</button>
          ))}
        </div>
        <label className="fs-select">
          <span className="sr-only">詞性</span>
          <select value={pos} onChange={(e) => setPos(e.target.value)}>
            <option value="all">所有詞性</option>
            {posOptions.map(([p, n]) => <option key={p} value={p}>{p}（{n}）</option>)}
          </select>
          <ChevronDown size={14} aria-hidden="true" />
        </label>
      </div>

      <div className="fs-player" role="group" aria-label="連續播放">
        <button type="button" className={`fs-player-main ${isPlaying ? 'is-on' : ''}`} onClick={() => togglePlay(openId ? filtered.findIndex((w) => w.id === openId) : 0)} disabled={!filtered.length}>
          {isPlaying ? <Pause size={16} aria-hidden="true" /> : <Play size={16} aria-hidden="true" />}
          {isPlaying ? `暫停（${playingIndex + 1}/${filtered.length}）` : '連續播放'}
        </button>
        <div className="fs-seg small" role="group" aria-label="播放順序">
          {PLAY_MODES.map((m) => (
            <button key={m.id} type="button" className={playMode === m.id ? 'is-on' : ''} aria-pressed={playMode === m.id} onClick={() => { stop(); setPlayMode(m.id); }}>{m.label}</button>
          ))}
        </div>
        <div className="fs-seg small" role="group" aria-label="語速">
          {[0.9, 0.7].map((s) => (
            <button key={s} type="button" className={speed === s ? 'is-on' : ''} aria-pressed={speed === s} onClick={() => { stop(); setSpeed(s); }}>{s === 0.9 ? '正常' : '慢速'}</button>
          ))}
        </div>
        <span className="fs-player-hint">通勤免看螢幕：選好順序後按播放，可從展開的字開始。</span>
      </div>

      <p className="fs-count" aria-live="polite">{filtered.length.toLocaleString()} 個字</p>
      <ol className="fs-list" ref={listRef}>
        {filtered.slice(0, limit).map((w, i) => {
          const stage = cardStage(srsData[w.id]);
          const starred = bookmarkService.isBookmarked(w.viet);
          const open = openId === w.id;
          return (
            <li key={w.id} data-index={i} className={`fs-row ${open ? 'is-open' : ''} ${playingIndex === i ? 'is-playing' : ''}`}>
              <div className="fs-row-main">
                <button type="button" className="fs-row-toggle" aria-expanded={open} onClick={() => setOpenId(open ? null : w.id)}>
                  <span className={`fs-dot stage-${stage}`} title={{ new: '未學', learning: '學習中', relearn: '需重學', mastered: '已穩固' }[stage]} />
                  {w.rank ? <span className="fs-row-rank">{w.rank}</span> : null}
                  <ToneWord text={w.viet} className="fs-row-word" />
                  <span className="fs-row-zh">{learningMode === 'zh' ? w.zh : (w.en || w.zh)}</span>
                </button>
                <button type="button" className="fs-icon-btn" onClick={() => audioEngine.speak(w.viet, { accent, key: `fs_row_${w.id}` })} aria-label={`播放 ${w.viet}`}>
                  <Play size={14} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className={`fs-icon-btn star ${starred ? 'is-on' : ''}`}
                  aria-pressed={starred}
                  aria-label={starred ? `取消收藏 ${w.viet}` : `收藏 ${w.viet}`}
                  onClick={() => bookmarkService.toggle({ id: `fc_${w.id}`, viet: w.viet, zh: w.zh, en: w.en || '', category: w.category || '分級單字', module: 'flashcards', tag: '分級單字', hanViet: w.hanViet || '' })}
                >
                  <Star size={14} aria-hidden="true" fill={starred ? 'currentColor' : 'none'} />
                </button>
              </div>
              {open && <CardDetails card={w} accent={accent} activeKey={activeKey} learningMode={learningMode} />}
            </li>
          );
        })}
      </ol>
      {filtered.length > limit && (
        <button type="button" className="fs-ghost fs-more" onClick={() => setLimit((n) => n + PAGE)}>再顯示 {Math.min(PAGE, filtered.length - limit)} 個</button>
      )}
    </section>
  );
};
