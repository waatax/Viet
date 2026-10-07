import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Volume2, Play, Pause, RotateCcw, RotateCw, SkipBack, SkipForward, 
  Download, CheckCircle2, Circle, Headphones, Sparkles, BookOpen, 
  Search, Check, List, LayoutGrid, Info, ArrowRight, Zap, RefreshCw, 
  Share2, VolumeX, AlertCircle, Layers
} from 'lucide-react';
import { 
  VOCAB_TIERS_CONFIG, 
  VOCAB_BATCHES_BY_TIER, 
  VOCAB_1000_BATCHES 
} from '../data/vocabBatchesData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './VocabAudioBatchSection.css';

export const VocabAudioBatchSection = ({ selectedAccent = 'north', onBackToCards }) => {
  const { learningMode, t } = useLanguage();

  // Active Tier state ('top1k' | 'top3k' | 'curated')
  const [selectedTier, setSelectedTier] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_active_vocab_tier');
      if (saved && (saved === 'top1k' || saved === 'top3k' || saved === 'curated')) return saved;
    } catch {}
    return 'top1k';
  });

  // Batches for current tier
  const batchesForTier = useMemo(() => {
    return VOCAB_BATCHES_BY_TIER[selectedTier] || VOCAB_1000_BATCHES || [];
  }, [selectedTier]);

  // Active Batch state (1 - N)
  const [selectedBatchId, setSelectedBatchId] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_active_vocab_batch');
      if (saved) {
        const val = parseInt(saved, 10);
        if (val >= 1) return val;
      }
    } catch {}
    return 1;
  });

  // Audio Player state
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [isLooping, setIsLooping] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [audioError, setAudioError] = useState(null);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [masteryFilter, setMasteryFilter] = useState('all'); // 'all' | 'unmastered' | 'mastered'
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'table'

  // Mastered Words persistence
  const [masteredMap, setMasteredMap] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_mastered_words');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  // Current batch object
  const currentBatch = useMemo(() => {
    return batchesForTier.find(b => b.batchId === selectedBatchId) || batchesForTier[0] || {};
  }, [batchesForTier, selectedBatchId]);

  // Audio Source URL resolution compatible with Vite BASE_URL & GitHub Pages
  const audioSrc = useMemo(() => {
    if (!currentBatch || !currentBatch.fileName) return '';
    const base = import.meta.env.BASE_URL.endsWith('/') 
      ? import.meta.env.BASE_URL 
      : import.meta.env.BASE_URL + '/';
    return `${base}audio/batches/${currentBatch.fileName}`;
  }, [currentBatch]);

  // Save selected batch and tier
  useEffect(() => {
    try {
      localStorage.setItem('viet_active_vocab_tier', selectedTier);
      localStorage.setItem('viet_active_vocab_batch', selectedBatchId.toString());
    } catch {}
  }, [selectedTier, selectedBatchId]);

  // When changing batch or tier, reset audio
  useEffect(() => {
    setAudioError(null);
    if (audioRef.current) {
      audioRef.current.playbackRate = playbackRate;
      if (isPlaying) {
        audioRef.current.play().catch(err => {
          console.warn('Audio play error on batch change:', err);
          setIsPlaying(false);
        });
      }
    }
  }, [selectedTier, selectedBatchId, audioSrc]);

  // Handle Play/Pause
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.playbackRate = playbackRate;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setAudioError(null);
      }).catch(err => {
        console.warn('Playback failed:', err);
        setAudioError('音訊加載中或瀏覽器限制自動播放，請點擊重試');
        setIsPlaying(false);
      });
    }
  };

  // Skip relative seconds (+10, -10)
  const skip = (delta) => {
    if (!audioRef.current) return;
    const newTime = Math.max(0, Math.min(duration || audioRef.current.duration || 0, audioRef.current.currentTime + delta));
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  // Change playback speed
  const changeSpeed = (rate) => {
    setPlaybackRate(rate);
    if (audioRef.current) {
      audioRef.current.playbackRate = rate;
    }
  };

  // Audio element events
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
      audioRef.current.playbackRate = playbackRate;
    }
  };

  const handleAudioEnded = () => {
    if (isLooping) {
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
      }
    } else if (autoAdvance && selectedBatchId < batchesForTier.length) {
      setSelectedBatchId(prev => prev + 1);
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
        }
      }, 500);
    } else {
      setIsPlaying(false);
    }
  };

  const handleScrub = (e) => {
    const val = parseFloat(e.target.value);
    setCurrentTime(val);
    if (audioRef.current) {
      audioRef.current.currentTime = val;
    }
  };

  // Toggle Word Mastery
  const toggleMastery = (wordId) => {
    setMasteredMap(prev => {
      const next = { ...prev, [wordId]: !prev[wordId] };
      try {
        localStorage.setItem('viet_mastered_words', JSON.stringify(next));
      } catch {}
      return next;
    });
    audioEngine.playHaptic('tap');
  };

  // Speak single word individually (auto-pauses background audio to prevent conflict)
  const speakSingleWord = (vietText, e) => {
    if (e) e.stopPropagation();
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    audioEngine.speak(vietText, { accent: selectedAccent, key: `batch_word_${vietText}` });
  };

  // Speak example sentence individually
  const speakExampleSentence = (exampleText, e) => {
    if (e) e.stopPropagation();
    if (audioRef.current && !audioRef.current.paused) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
    audioEngine.speak(exampleText, { accent: selectedAccent, key: `batch_ex_${exampleText}` });
  };

  // Format time mm:ss
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds < 0) return '00:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Filter words in current batch
  const filteredWords = useMemo(() => {
    if (!currentBatch || !currentBatch.words) return [];
    return currentBatch.words.filter(w => {
      // Mastery filter
      const isMastered = !!masteredMap[w.id];
      if (masteryFilter === 'mastered' && !isMastered) return false;
      if (masteryFilter === 'unmastered' && isMastered) return false;

      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const v = (w.viet || '').toLowerCase();
        const z = (w.zh || '').toLowerCase();
        const hv = (w.hanViet || '').toLowerCase();
        const en = (w.en || '').toLowerCase();
        return v.includes(q) || z.includes(q) || hv.includes(q) || en.includes(q);
      }
      return true;
    });
  }, [currentBatch, masteredMap, masteryFilter, searchQuery]);

  // Batch stats
  const batchMasteredCount = useMemo(() => {
    if (!currentBatch || !currentBatch.words) return 0;
    return currentBatch.words.filter(w => !!masteredMap[w.id]).length;
  }, [currentBatch, masteredMap]);

  // Tier stats
  const currentTierConfig = useMemo(() => {
    return VOCAB_TIERS_CONFIG.find(t => t.id === selectedTier) || VOCAB_TIERS_CONFIG[0];
  }, [selectedTier]);

  const tierTotalWords = currentTierConfig.wordsCount || batchesForTier.reduce((sum, b) => sum + (b.wordCount || 0), 0);
  const tierMasteredCount = useMemo(() => {
    let cnt = 0;
    batchesForTier.forEach(b => {
      (b.words || []).forEach(w => {
        if (masteredMap[w.id]) cnt++;
      });
    });
    return cnt;
  }, [batchesForTier, masteredMap]);

  return (
    <div className="vocab-batch-audio-section">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleAudioEnded}
        onError={() => setAudioError('音訊載入中，若暫時無聲請點擊重新整理')}
        preload="auto"
      />

      {/* ── Section Hero Header ── */}
      <div className="vba-hero-header">
        <div className="vba-badge-pill">
          <Headphones size={15} />
          <span>{learningMode === 'zh' ? '越南語高頻詞庫 · 全能磨耳朵特訓庫' : 'All-Tiers Audio Immersion Lab'}</span>
        </div>
        <h3 className="vba-hero-title">
          {learningMode === 'zh' ? '每 50 字獨立音檔 · (一次越文 + 一次中文) × 3 循環沈浸' : '50-Word Audio Batches · (Viet + Meaning) × 3 Repetition'}
        </h3>
        <p className="vba-hero-desc">
          {learningMode === 'zh' 
            ? '嚴格依據認知心理學「聽覺暫存 → 意象建立 → 肌肉跟讀 (Shadowing)」三遍黃金循環。支援基礎 Top 1k、社交 Top 3k 及經典情境字卡，隨時隨地戴上耳機高效磨耳朵！'
            : 'SLA neuro-immersion designed for ear training: themed batches of 50 words each. Each word repeats 3 times with crisp Vietnamese pronunciation and instant translation.'}
        </p>

        {/* Global Progress Bar for Current Tier */}
        <div className="vba-global-progress-card">
          <div className="vba-gp-info">
            <span className="vba-gp-label">
              <Sparkles size={14} color="#f59e0b" />
              {learningMode === 'zh' ? `${currentTierConfig.labelZh} 掌握進度` : 'Tier Mastery Progress'}
            </span>
            <span className="vba-gp-numbers">
              <strong>{tierMasteredCount}</strong> / {tierTotalWords} 字 ({((tierMasteredCount / (tierTotalWords || 1)) * 100).toFixed(1)}%)
            </span>
          </div>
          <div className="vba-gp-bar-bg">
            <div 
              className="vba-gp-bar-fill" 
              style={{ width: `${Math.min(100, (tierMasteredCount / (tierTotalWords || 1)) * 100)}%` }} 
            />
          </div>
        </div>
      </div>

      {/* ── Tier Level Switcher Pills ── */}
      <div className="vba-tier-selector-container">
        <div className="vba-tier-selector-header">
          <Layers size={16} color="var(--brand-primary)" />
          <span>{learningMode === 'zh' ? '選擇學習詞庫階梯 (Tier)' : 'Select Vocabulary Tier'}</span>
        </div>
        <div className="vba-tier-selector-pills">
          {VOCAB_TIERS_CONFIG.filter(t => ['top1k', 'top3k', 'curated'].includes(t.id)).map(tc => {
            const isActive = selectedTier === tc.id;
            return (
              <button
                key={tc.id}
                className={`vba-tier-pill ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setSelectedTier(tc.id);
                  setSelectedBatchId(1);
                  audioEngine.playHaptic('selection');
                }}
              >
                <span className="vba-tp-label">{learningMode === 'zh' ? tc.labelZh : tc.labelEn}</span>
                <span className="vba-tp-badge">{tc.batchesCount}組 · {tc.wordsCount}字</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Batches Selector Carousel / Grid ── */}
      <div className="vba-batches-selector-wrapper">
        <div className="vba-batches-selector-header">
          <h4 className="vba-sub-title">
            <BookOpen size={18} />
            {learningMode === 'zh' 
              ? `${currentTierConfig.labelZh} (共 ${batchesForTier.length} 組 · 每組 50 字)` 
              : `Batches in ${currentTierConfig.labelEn} (${batchesForTier.length} batches)`}
          </h4>
          <span className="vba-batches-count-pill">
            {learningMode === 'zh' ? `當前：第 ${selectedBatchId} 組 / ${batchesForTier.length}` : `Batch ${selectedBatchId} of ${batchesForTier.length}`}
          </span>
        </div>

        <div className="vba-batches-grid">
          {batchesForTier.map(b => {
            const isActive = b.batchId === selectedBatchId;
            const bWords = b.words || [];
            const bMastered = bWords.filter(w => !!masteredMap[w.id]).length;
            const bPercent = bWords.length > 0 ? Math.round((bMastered / bWords.length) * 100) : 0;

            return (
              <button
                key={`${selectedTier}_${b.batchId}`}
                className={`vba-batch-card-btn ${isActive ? 'active' : ''}`}
                onClick={() => {
                  setSelectedBatchId(b.batchId);
                  audioEngine.playHaptic('selection');
                }}
              >
                <div className="vba-bc-top">
                  <span className="vba-bc-badge">#{b.range}</span>
                  <span className="vba-bc-percent">{bPercent}%</span>
                </div>
                <div className="vba-bc-title">{learningMode === 'zh' ? b.titleZh : b.titleEn}</div>
                <div className="vba-bc-meta">
                  <span>⏱️ 約 {Math.round((b.duration || 450) / 60)} 分鐘</span>
                  <span>{bMastered}/{b.wordCount} 熟記</span>
                </div>
                <div className="vba-bc-mini-bar">
                  <div className="vba-bc-mini-fill" style={{ width: `${bPercent}%` }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Dedicated Sticky Audio Player Console ── */}
      <div className="vba-player-console">
        <div className="vba-player-top-row">
          <div className="vba-now-playing-meta">
            <div className="vba-np-batch-tag">
              <Headphones size={14} />
              <span>{learningMode === 'zh' ? currentBatch.titleZh : currentBatch.titleEn}</span>
              <span className="vba-np-words-tag">#{currentBatch.range}</span>
            </div>
            <div className="vba-np-hint">
              {learningMode === 'zh' 
                ? '🎧 正在播放 (一次越文 + 一次中文) × 3 循環磨耳朵' 
                : '🎧 Playing (1× Viet + 1× Translation) × 3 Cycles'}
            </div>
          </div>

          <div className="vba-player-actions">
            {/* Download MP3 */}
            <a 
              href={audioSrc} 
              download={currentBatch.fileName}
              className="vba-download-btn"
              title={learningMode === 'zh' ? '下載當前 50 字 MP3 離線隨身聽' : 'Download MP3'}
            >
              <Download size={15} />
              <span>{learningMode === 'zh' ? '下載 MP3' : 'MP3'}</span>
            </a>
          </div>
        </div>

        {/* Scrub Timeline Bar */}
        <div className="vba-scrub-bar-container">
          <input
            type="range"
            min={0}
            max={duration || currentBatch.duration || 100}
            step={0.1}
            value={currentTime}
            onChange={handleScrub}
            className="vba-scrub-slider"
          />
          <div className="vba-scrub-times">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration || currentBatch.duration || 0)}</span>
          </div>
        </div>

        {/* Control Buttons Cluster */}
        <div className="vba-controls-cluster">
          {/* Loop Batch Toggle */}
          <button
            className={`vba-ctrl-pill-btn ${isLooping ? 'active' : ''}`}
            onClick={() => {
              setIsLooping(!isLooping);
              audioEngine.playHaptic('tap');
            }}
            title={learningMode === 'zh' ? '單組批次循環播放' : 'Loop Batch'}
          >
            <RotateCcw size={15} />
            <span>{learningMode === 'zh' ? '單組循環' : 'Loop'}</span>
          </button>

          {/* Auto Advance Toggle */}
          <button
            className={`vba-ctrl-pill-btn ${autoAdvance ? 'active' : ''}`}
            onClick={() => {
              setAutoAdvance(!autoAdvance);
              audioEngine.playHaptic('tap');
            }}
            title={learningMode === 'zh' ? '播放完畢自動前往下一組' : 'Auto Next Batch'}
          >
            <SkipForward size={15} />
            <span>{learningMode === 'zh' ? '自動下組' : 'Auto-Next'}</span>
          </button>

          {/* Main Playback Buttons */}
          <div className="vba-main-play-group">
            <button 
              className="vba-step-btn" 
              onClick={() => skip(-10)} 
              title={learningMode === 'zh' ? '倒退 10 秒' : '-10s'}
            >
              <RotateCcw size={18} />
              <span className="vba-step-tag">10s</span>
            </button>

            <button 
              className={`vba-main-play-btn ${isPlaying ? 'playing' : ''}`}
              onClick={togglePlay}
              title={isPlaying ? '暫停 (Space)' : '播放 (Space)'}
            >
              {isPlaying ? <Pause size={26} fill="white" /> : <Play size={26} fill="white" style={{ marginLeft: 3 }} />}
            </button>

            <button 
              className="vba-step-btn" 
              onClick={() => skip(10)} 
              title={learningMode === 'zh' ? '快進 10 秒' : '+10s'}
            >
              <RotateCw size={18} />
              <span className="vba-step-tag">10s</span>
            </button>
          </div>

          {/* Speed Selector Buttons */}
          <div className="vba-speed-selector">
            {[0.75, 1.0, 1.25, 1.5].map(rate => (
              <button
                key={rate}
                className={`vba-speed-btn ${playbackRate === rate ? 'active' : ''}`}
                onClick={() => changeSpeed(rate)}
              >
                {rate}x
              </button>
            ))}
          </div>
        </div>

        {audioError && (
          <div className="vba-audio-warning">
            <AlertCircle size={15} />
            <span>{audioError}</span>
          </div>
        )}
      </div>

      {/* ── 50 Words Study Companion Section ── */}
      <div className="vba-wordlist-section">
        <div className="vba-wl-toolbar">
          <div className="vba-wl-title-area">
            <h4>
              <List size={18} />
              {learningMode === 'zh' ? `第 ${selectedBatchId} 組單字對照清單` : `Batch ${selectedBatchId} Word List`}
              <span className="vba-wl-count-badge">({filteredWords.length} / {currentBatch.wordCount || 50} 字)</span>
            </h4>
            <span className="vba-wl-mastery-status">
              已熟記：<strong>{batchMasteredCount}</strong> / {currentBatch.wordCount || 50}
            </span>
          </div>

          <div className="vba-wl-filters">
            {/* Search Input */}
            <div className="vba-search-box">
              <Search size={15} />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder={learningMode === 'zh' ? '搜尋本組越文/中文/漢越音...' : 'Search words...'}
              />
              {searchQuery && (
                <button className="vba-clear-search" onClick={() => setSearchQuery('')}>×</button>
              )}
            </div>

            {/* Filter Pill Tabs */}
            <div className="vba-filter-pills">
              <button
                className={`vba-fp-btn ${masteryFilter === 'all' ? 'active' : ''}`}
                onClick={() => setMasteryFilter('all')}
              >
                {learningMode === 'zh' ? '全部' : 'All'}
              </button>
              <button
                className={`vba-fp-btn ${masteryFilter === 'unmastered' ? 'active' : ''}`}
                onClick={() => setMasteryFilter('unmastered')}
              >
                {learningMode === 'zh' ? '未熟記' : 'Learning'}
              </button>
              <button
                className={`vba-fp-btn ${masteryFilter === 'mastered' ? 'active' : ''}`}
                onClick={() => setMasteryFilter('mastered')}
              >
                {learningMode === 'zh' ? '已掌握' : 'Mastered'}
              </button>
            </div>

            {/* View Mode Toggle */}
            <div className="vba-view-mode-toggle">
              <button
                className={`vba-vm-btn ${viewMode === 'cards' ? 'active' : ''}`}
                onClick={() => setViewMode('cards')}
                title={learningMode === 'zh' ? '卡片檢視' : 'Card View'}
              >
                <LayoutGrid size={16} />
              </button>
              <button
                className={`vba-vm-btn ${viewMode === 'table' ? 'active' : ''}`}
                onClick={() => setViewMode('table')}
                title={learningMode === 'zh' ? '列表檢視' : 'Table View'}
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* ── View 1: Cards View ── */}
        {viewMode === 'cards' && (
          <div className="vba-cards-grid">
            {filteredWords.map(word => {
              const isMastered = !!masteredMap[word.id];

              return (
                <div 
                  key={word.id} 
                  className={`vba-word-card ${isMastered ? 'mastered' : ''}`}
                >
                  <div className="vba-wc-header">
                    <span className="vba-wc-rank">#{word.rank}</span>
                    <div className="vba-wc-header-right">
                      {word.pos && <span className="vba-wc-pos">{word.pos}</span>}
                      {word.hanViet && (
                        <span className="vba-wc-hanviet">漢越: {word.hanViet}</span>
                      )}
                      <button
                        className={`vba-mastery-chk ${isMastered ? 'checked' : ''}`}
                        onClick={() => toggleMastery(word.id)}
                        title={isMastered ? '點擊標記為未熟記' : '點擊標記為已熟記'}
                      >
                        {isMastered ? <CheckCircle2 size={18} color="#10b981" /> : <Circle size={18} color="#94a3b8" />}
                      </button>
                    </div>
                  </div>

                  <div className="vba-wc-body">
                    <div className="vba-wc-viet-row">
                      <span className="vba-wc-viet">{word.viet}</span>
                      <button
                        className="vba-wc-speak-btn"
                        onClick={(e) => speakSingleWord(word.viet, e)}
                        title={learningMode === 'zh' ? '單獨聆聽發音' : 'Speak'}
                      >
                        <Volume2 size={17} />
                      </button>
                    </div>

                    <div className="vba-wc-zh">
                      {learningMode === 'zh' ? word.zh : (word.en || word.zh)}
                    </div>

                    {word.example && (
                      <div className="vba-wc-example-box">
                        <div className="vba-wc-ex-vi" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem' }}>
                          <span>{word.example}</span>
                          <button
                            className="vba-wc-speak-btn"
                            style={{ padding: '2px', width: '22px', height: '22px', flexShrink: 0 }}
                            onClick={(e) => speakExampleSentence(word.example, e)}
                            title={learningMode === 'zh' ? '聆聽例句發音' : 'Speak Example'}
                          >
                            <Volume2 size={13} />
                          </button>
                        </div>
                        {word.exampleZh && (
                          <div className="vba-wc-ex-zh">{word.exampleZh}</div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* ── View 2: Table View ── */}
        {viewMode === 'table' && (
          <div className="vba-table-container">
            <table className="vba-table">
              <thead>
                <tr>
                  <th style={{ width: '60px' }}>序號</th>
                  <th style={{ width: '180px' }}>越南文 (點擊發音)</th>
                  <th style={{ width: '90px' }}>詞性</th>
                  <th style={{ width: '100px' }}>漢越音</th>
                  <th>中文釋義 (口語念法)</th>
                  <th>實用例句</th>
                  <th style={{ width: '80px', textAlign: 'center' }}>掌握</th>
                </tr>
              </thead>
              <tbody>
                {filteredWords.map(word => {
                  const isMastered = !!masteredMap[word.id];

                  return (
                    <tr key={word.id} className={isMastered ? 'mastered' : ''}>
                      <td className="vba-td-rank">#{word.rank}</td>
                      <td className="vba-td-viet">
                        <button
                          className="vba-td-viet-btn"
                          onClick={(e) => speakSingleWord(word.viet, e)}
                        >
                          <Volume2 size={15} />
                          <span>{word.viet}</span>
                        </button>
                      </td>
                      <td>
                        {word.pos && <span className="vba-table-pos">{word.pos}</span>}
                      </td>
                      <td className="vba-td-hanviet">{word.hanViet || '-'}</td>
                      <td className="vba-td-zh">
                        <strong>{word.zh}</strong>
                        {word.zhSpoken && word.zhSpoken !== word.zh && (
                          <span className="vba-td-spoken"> (音檔念: {word.zhSpoken})</span>
                        )}
                      </td>
                      <td className="vba-td-example">
                        {word.example ? (
                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem' }}>
                            <div>
                              <div className="vba-ex-vi">{word.example}</div>
                              {word.exampleZh && <div className="vba-ex-zh">{word.exampleZh}</div>}
                            </div>
                            <button
                              className="vba-wc-speak-btn"
                              style={{ padding: '2px', width: '22px', height: '22px', flexShrink: 0 }}
                              onClick={(e) => speakExampleSentence(word.example, e)}
                              title={learningMode === 'zh' ? '聆聽例句發音' : 'Speak Example'}
                            >
                              <Volume2 size={13} />
                            </button>
                          </div>
                        ) : '-'}
                      </td>
                      <td style={{ textAlign: 'center' }}>
                        <button
                          className={`vba-mastery-chk ${isMastered ? 'checked' : ''}`}
                          onClick={() => toggleMastery(word.id)}
                        >
                          {isMastered ? <CheckCircle2 size={18} color="#10b981" /> : <Circle size={18} color="#94a3b8" />}
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {filteredWords.length === 0 && (
          <div className="vba-empty-state">
            <Search size={32} color="#94a3b8" />
            <p>{learningMode === 'zh' ? '沒有找到符合條件的單字' : 'No words match the filter'}</p>
          </div>
        )}
      </div>

      {/* ── SLA Educational Immersion Guide ── */}
      <div className="vba-sla-guide-card">
        <div className="vba-sla-icon">
          <Zap size={22} color="var(--brand-primary)" />
        </div>
        <div className="vba-sla-content">
          <h4>{learningMode === 'zh' ? '🧠 為什麼採用「(一次越文 + 一次中文) × 3 念三次」磨耳朵？' : 'Cognitive SLA Multi-Repetition Rationale'}</h4>
          <p>
            {learningMode === 'zh'
              ? '依據第二語言習得 (SLA) 與大腦神經語言學研究，單字純聽一次容易在「語意解碼」與「發音辨析」間產生認知過載。本特訓音檔設計之三遍循環機制：'
              : 'Triple-repetition SLA neuroscience: ensures phonological encoding, semantic mapping, and motor muscular internalization.'}
          </p>
          <div className="vba-sla-steps-grid">
            <div className="vba-sla-step-item">
              <span className="vba-sla-step-num">遍 1 · 識別</span>
              <p>大腦聆聽越語聲調與音素，迅速由中文建立初級語意錨點。</p>
            </div>
            <div className="vba-sla-step-item">
              <span className="vba-sla-step-num">遍 2 · 影子跟讀</span>
              <p>進行 Shadowing 口腔肌肉輕聲跟讀，加深聽覺迴路暫存。</p>
            </div>
            <div className="vba-sla-step-item">
              <span className="vba-sla-step-num">遍 3 · 本能反射</span>
              <p>完全脫離中文依賴，形成見字明意、聞音知語的直覺母語反射。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default VocabAudioBatchSection;
