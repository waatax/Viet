import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import { Volume2, Star, X } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { bookmarkService } from '../services/bookmarkService';
import {
  detectWordAtPoint,
  getCachedDictionary,
  isIgnoredElement,
  isInteractiveClickTarget,
  loadWordDictionary,
  lookupSelectedPhrase,
  preloadWordDictionaryIdle
} from '../services/vietWordLookupService';
import './VietWordLookup.css';

const HOVER_DWELL_MS = 190;
const HOVER_LEAVE_GRACE_MS = 260;
const VIEWPORT_PAD = 12;
const POPOVER_GAP = 10;

export function VietWordLookup({
  enabled = true,
  autoSpeakOnClick = true,
  selectedAccent = 'north',
  activeTab = ''
}) {
  const [entry, setEntry] = useState(null); // { word, normalized, zh, hanViet, posFull, tones, breakdown, rect, hitRect, pinned }
  const [popoverPos, setPopoverPos] = useState({ top: -9999, left: -9999, ready: false });
  const [isPlaying, setIsPlaying] = useState(false);
  const [playingAccent, setPlayingAccent] = useState(null);
  const [savedTick, setSavedTick] = useState(0);

  const popoverRef = useRef(null);
  const hoverTimerRef = useRef(null);
  const leaveTimerRef = useRef(null);
  const isPointerInPopoverRef = useRef(false);
  const entryRef = useRef(null);
  const lastScrollYRef = useRef(0);

  useEffect(() => {
    entryRef.current = entry;
  }, [entry]);

  // Clear popover on disable or tab change
  useEffect(() => {
    if (!enabled) {
      setEntry(null);
      return;
    }
    preloadWordDictionaryIdle();
  }, [enabled]);

  useEffect(() => {
    setEntry(null);
  }, [activeTab]);

  // Subscribe to audioEngine playing state and bookmark updates
  useEffect(() => {
    if (!enabled) return;
    const unsubAudio = audioEngine.subscribe((state) => {
      const current = entryRef.current;
      if (!current) {
        setIsPlaying(false);
        return;
      }
      const matchKey = `vwl_${current.normalized}`;
      const active = Boolean(state.isPlaying && (state.activeKey === matchKey || state.activeText === current.word));
      setIsPlaying(active);
      if (active) setPlayingAccent(state.accent || selectedAccent);
    });
    const unsubBm = bookmarkService.subscribe(() => {
      setSavedTick((t) => t + 1);
    });
    return () => {
      unsubAudio();
      unsubBm();
    };
  }, [enabled, selectedAccent]);

  const clearTimers = useCallback(() => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    if (leaveTimerRef.current) {
      clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = null;
    }
  }, []);

  const dismiss = useCallback(() => {
    clearTimers();
    isPointerInPopoverRef.current = false;
    setEntry(null);
  }, [clearTimers]);

  const speakWord = useCallback((word, normalized, accentOverride = null, rateOverride = null) => {
    if (!word) return;
    const accent = accentOverride || selectedAccent || 'north';
    audioEngine.playHaptic('tap');
    const opts = {
      accent,
      key: `vwl_${normalized}`
    };
    if (rateOverride) opts.rate = rateOverride;
    audioEngine.speak(word, opts);
  }, [selectedAccent]);

  // Compute viewport-safe popover coordinates whenever entry changes
  useLayoutEffect(() => {
    if (!entry || !entry.rect || !popoverRef.current) {
      setPopoverPos({ top: -9999, left: -9999, ready: false });
      return;
    }
    const popRect = popoverRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const anchor = entry.hitRect || entry.rect;

    // Prefer above the word; flip below if not enough room at top
    let top = anchor.top - popRect.height - POPOVER_GAP;
    if (top < VIEWPORT_PAD) {
      top = anchor.bottom + POPOVER_GAP;
    }
    if (top + popRect.height > vh - VIEWPORT_PAD) {
      top = Math.max(VIEWPORT_PAD, vh - popRect.height - VIEWPORT_PAD);
    }

    let left = anchor.left + anchor.width / 2 - popRect.width / 2;
    left = Math.max(VIEWPORT_PAD, Math.min(left, vw - popRect.width - VIEWPORT_PAD));

    setPopoverPos({ top: Math.round(top), left: Math.round(left), ready: true });
  }, [entry]);

  // Global lightweight delegated event listeners
  useEffect(() => {
    if (!enabled) return;

    const scheduleLeaveClose = () => {
      if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
      leaveTimerRef.current = setTimeout(() => {
        if (!isPointerInPopoverRef.current && entryRef.current && !entryRef.current.pinned) {
          setEntry(null);
        }
      }, HOVER_LEAVE_GRACE_MS);
    };

    const handlePointerMove = (e) => {
      // Hover lookup is only for mouse/pen pointers (touch uses tap/click)
      if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;

      // If pointer is inside our popover, keep it open
      if (popoverRef.current && popoverRef.current.contains(e.target)) {
        if (leaveTimerRef.current) {
          clearTimeout(leaveTimerRef.current);
          leaveTimerRef.current = null;
        }
        return;
      }

      // If pinned by explicit click, don't override on hover
      if (entryRef.current && entryRef.current.pinned) return;

      if (hoverTimerRef.current) {
        clearTimeout(hoverTimerRef.current);
        hoverTimerRef.current = null;
      }

      const target = e.target;
      if (!target || isIgnoredElement(target)) {
        if (entryRef.current && !entryRef.current.pinned) {
          scheduleLeaveClose();
        }
        return;
      }

      const x = e.clientX;
      const y = e.clientY;

      hoverTimerRef.current = setTimeout(async () => {
        const dict = getCachedDictionary() || (await loadWordDictionary());
        if (!dict) return;
        // Re-check pinned state after async load
        if (entryRef.current && entryRef.current.pinned) return;

        const hit = detectWordAtPoint(x, y, dict);
        if (hit) {
          if (leaveTimerRef.current) {
            clearTimeout(leaveTimerRef.current);
            leaveTimerRef.current = null;
          }
          setEntry((prev) => {
            if (
              prev &&
              !prev.pinned &&
              prev.normalized === hit.normalized &&
              Math.abs(prev.rect.top - hit.rect.top) < 4 &&
              Math.abs(prev.rect.left - hit.rect.left) < 4
            ) {
              return prev;
            }
            return { ...hit, pinned: false };
          });
        } else if (entryRef.current && !entryRef.current.pinned) {
          scheduleLeaveClose();
        }
      }, HOVER_DWELL_MS);
    };

    const handleClick = (e) => {
      // Ignore clicks inside our own popover
      if (popoverRef.current && popoverRef.current.contains(e.target)) return;

      // Ignore if user just dragged a text selection (handled by mouseup)
      const sel = window.getSelection ? window.getSelection() : null;
      if (sel && sel.toString().trim().length > 0) return;

      // Don't hijack buttons, links, inputs, or ignored UI regions
      if (isIgnoredElement(e.target) || isInteractiveClickTarget(e.target)) {
        if (entryRef.current) dismiss();
        return;
      }

      const clientX = e.clientX;
      const clientY = e.clientY;
      const applyHit = (dict) => {
        if (!dict) return;
        const hit = detectWordAtPoint(clientX, clientY, dict);
        if (hit) {
          clearTimers();
          setEntry({ ...hit, pinned: true });
          if (autoSpeakOnClick) {
            speakWord(hit.word, hit.normalized);
          }
        } else if (entryRef.current) {
          dismiss();
        }
      };

      // Fast synchronous path: preserves iOS Safari / WebKit user-gesture stack for instant audio playback
      const cached = getCachedDictionary();
      if (cached) {
        applyHit(cached);
      } else {
        loadWordDictionary().then(applyHit);
      }
    };

    const handleMouseUp = async (e) => {
      if (popoverRef.current && popoverRef.current.contains(e.target)) return;
      if (isIgnoredElement(e.target)) return;

      const sel = window.getSelection ? window.getSelection() : null;
      if (!sel || sel.isCollapsed) return;
      const selectedText = sel.toString().trim();
      if (!selectedText || selectedText.length > 48) return;

      const dict = getCachedDictionary() || (await loadWordDictionary());
      if (!dict) return;

      const hit = lookupSelectedPhrase(selectedText, dict);
      if (!hit) return;

      try {
        const range = sel.getRangeAt(0);
        const r = range.getBoundingClientRect();
        if (r.width === 0 && r.height === 0) return;
        const rect = { top: r.top, bottom: r.bottom, left: r.left, right: r.right, width: r.width, height: r.height };
        clearTimers();
        setEntry({ ...hit, rect, hitRect: rect, pinned: true });
      } catch {
        // ignore invalid selection range
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && entryRef.current) {
        dismiss();
      }
    };

    const handleScroll = () => {
      if (!entryRef.current) return;
      const dy = Math.abs(window.scrollY - lastScrollYRef.current);
      if (dy > 18) {
        lastScrollYRef.current = window.scrollY;
        dismiss();
      }
    };

    lastScrollYRef.current = window.scrollY;

    document.addEventListener('pointermove', handlePointerMove, { passive: true });
    document.addEventListener('click', handleClick);
    document.addEventListener('mouseup', handleMouseUp, { passive: true });
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', dismiss, { passive: true });

    return () => {
      clearTimers();
      document.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('click', handleClick);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', dismiss);
    };
  }, [enabled, autoSpeakOnClick, clearTimers, dismiss, speakWord]);

  if (!enabled || !entry) return null;

  // Read bookmark status (savedTick ensures reactivity on toggle)
  const isSaved = savedTick >= 0 && bookmarkService.isBookmarked(entry.word);

  const handleToggleBookmark = (e) => {
    e.stopPropagation();
    audioEngine.playHaptic('selection');
    bookmarkService.toggle({
      viet: entry.word,
      zh: entry.zh || '',
      hanViet: entry.hanViet || '',
      category: entry.posFull || '即時查字',
      module: 'word-lookup',
      tag: '即時查字'
    });
  };

  return (
    <>
      {/* Non-intrusive highlight underline over the exact matched Vietnamese word */}
      {entry.hitRect && (
        <div
          className="viet-word-highlight"
          aria-hidden="true"
          style={{
            top: `${entry.hitRect.top - 1}px`,
            left: `${entry.hitRect.left - 2}px`,
            width: `${entry.hitRect.width + 4}px`,
            height: `${entry.hitRect.height + 2}px`
          }}
        />
      )}

      {/* Floating translation & pronunciation card */}
      <div
        ref={popoverRef}
        className="viet-word-popover"
        role="dialog"
        aria-label={`越南文單字翻譯：${entry.word}`}
        data-no-word-lookup="true"
        style={{
          top: `${popoverPos.top}px`,
          left: `${popoverPos.left}px`,
          visibility: popoverPos.ready ? 'visible' : 'hidden'
        }}
        onPointerEnter={() => {
          isPointerInPopoverRef.current = true;
          if (leaveTimerRef.current) {
            clearTimeout(leaveTimerRef.current);
            leaveTimerRef.current = null;
          }
        }}
        onPointerLeave={() => {
          isPointerInPopoverRef.current = false;
          if (!entry.pinned) {
            if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
            leaveTimerRef.current = setTimeout(() => {
              if (!isPointerInPopoverRef.current && entryRef.current && !entryRef.current.pinned) {
                setEntry(null);
              }
            }, 180);
          }
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="vwl-header">
          <div className="vwl-word-group">
            <span className="vwl-word">{entry.word}</span>
            {entry.posFull && <span className="vwl-pos">{entry.posFull}</span>}
          </div>
          <div className="vwl-header-actions">
            <button
              type="button"
              className={`vwl-icon-btn ${isSaved ? 'is-saved' : ''}`}
              onClick={handleToggleBookmark}
              title={isSaved ? '已收藏到生詞本（點擊取消）' : '收藏到生詞本'}
              aria-label={isSaved ? '取消收藏' : '收藏到生詞本'}
            >
              <Star size={14} fill={isSaved ? '#eab308' : 'none'} />
            </button>
            <button
              type="button"
              className="vwl-icon-btn"
              onClick={dismiss}
              title="關閉 (Esc)"
              aria-label="關閉單字翻譯視窗"
            >
              <X size={14} />
            </button>
          </div>
        </div>

        <div className="vwl-meaning-row">
          {entry.zh ? (
            <span className="vwl-zh">{entry.zh}</span>
          ) : (
            <span className="vwl-zh-muted">尚無內建簡譯，可點下方聆聽讀音</span>
          )}
          {entry.hanViet && (
            <span className="vwl-hanviet" title="漢越詞同源字">
              漢越：{entry.hanViet}
            </span>
          )}
        </div>

        {/* Syllable morpheme breakdown for multi-word compounds */}
        {entry.breakdown && entry.breakdown.length > 1 && (
          <div className="vwl-breakdown" aria-label="單字拆解">
            {entry.breakdown.map((b, idx) => (
              <span key={`${b.syllable}_${idx}`} className="vwl-breakdown-item">
                <span className="vwl-breakdown-syl">{b.syllable}</span>
                <span>{b.zh}</span>
              </span>
            ))}
          </div>
        )}

        {/* Tone badges per syllable */}
        {entry.tones && entry.tones.length > 0 && (
          <div className="vwl-tones" aria-label="聲調提示">
            {entry.tones.map((t, idx) => (
              <span key={`${t.syllable}_${idx}`} className="vwl-tone-chip">
                <span className="vwl-tone-dot" style={{ backgroundColor: t.color }} />
                <span>{entry.tones.length > 1 ? `${t.syllable} ` : ''}{t.name}</span>
              </span>
            ))}
          </div>
        )}

        {/* Word Pronunciation Controls (North / South / Slow) */}
        <div className="vwl-audio-row">
          <button
            type="button"
            className={`vwl-speak-btn ${isPlaying ? 'is-playing' : ''}`}
            onClick={() => speakWord(entry.word, entry.normalized, selectedAccent)}
            title="播放單字讀音"
          >
            <Volume2 size={14} />
            <span>{isPlaying ? '播放中...' : '單字讀音'}</span>
          </button>

          <button
            type="button"
            className="vwl-mini-btn"
            onClick={() => speakWord(entry.word, entry.normalized, selectedAccent, 0.72)}
            title="慢速讀音 (0.72x)"
          >
            🐢 慢
          </button>

          <button
            type="button"
            className={`vwl-mini-btn ${(isPlaying ? playingAccent : selectedAccent) === 'north' ? 'is-active' : ''}`}
            onClick={() => speakWord(entry.word, entry.normalized, 'north')}
            title="河內北越讀音"
          >
            北
          </button>

          <button
            type="button"
            className={`vwl-mini-btn ${(isPlaying ? playingAccent : selectedAccent) === 'south' ? 'is-active' : ''}`}
            onClick={() => speakWord(entry.word, entry.normalized, 'south')}
            title="西貢南越讀音"
          >
            南
          </button>
        </div>
      </div>
    </>
  );
}

export default VietWordLookup;
