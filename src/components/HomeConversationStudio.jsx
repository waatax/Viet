import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Play,
  Volume2,
  Download,
  CheckCircle2,
  ArrowRight,
  Bookmark,
  Copy,
  Check,
  Globe2,
  HardDrive,
  Headphones,
  Flame,
  Lightbulb,
  Search,
  ChevronLeft,
  ChevronRight,
  Sparkles
} from 'lucide-react';
import { DialoguePlaybackBar, PlaybackPartChip } from './DialoguePlaybackBar';
import { PLAYBACK_LESSONS, getLessonSections, countLessonLines } from '../data/conversationLibrary';
import { SCENARIO_EXEGESIS } from '../data/scenarioExegesisData';
import { audioEngine } from '../services/audioEngine';
import { offlineAudioService } from '../services/offlineAudioService';
import { bookmarkService } from '../services/bookmarkService';
import { getPlaybackPrefs } from '../services/dialoguePlayback';
import { useDialoguePlayback, useFollowActiveLine } from '../hooks/useDialoguePlayback';
import { getSpeakerVisual } from './DialoguePlayer';
import { useLanguage } from '../context/LanguageContext';
import './HomeConversationStudio.css';

// 11 Highest-Frequency Real-Life Practical Scenarios for Fast Homepage Learning
const TOP_CURATED_SCENARIOS = [
  { id: 'cafe', icon: '☕', labelZh: '咖啡點單', subZh: '滴漏冰奶咖·少糖少冰' },
  { id: 'pho', icon: '🍜', labelZh: '河粉點單', subZh: '生牛肉河粉·油條九層塔' },
  { id: 'banhmi', icon: '🥖', labelZh: '法國麵包', subZh: '內餡客製·微辣不加香菜' },
  { id: 'taxi', icon: '🚕', labelZh: 'Grab 叫車', subZh: '指示轉彎·靠邊停放' },
  { id: 'market', icon: '🛒', labelZh: '市集殺價', subZh: '詢問單價·四步折價法' },
  { id: 'hotel', icon: '🏨', labelZh: '飯店入住', subZh: '訂房憑證·早餐密碼' },
  { id: 'airport', icon: '✈️', labelZh: '機場海關', subZh: '行李託運·出境登機門' },
  { id: 'pharmacy', icon: '💊', labelZh: '藥局就醫', subZh: '感冒發燒·一日三次' },
  { id: 'factory_tour', icon: '🏭', labelZh: '工廠品保', subZh: '產線進度·AQL抽驗' },
  { id: 'business_negotiation', icon: '💼', labelZh: '商務合約', subZh: '會議談判·名片遞交' },
  { id: 'vietnam_geography', icon: '🇻🇳', labelZh: '風土民情', subZh: '南北文化·區域習俗' }
];

const CURATED_IDS = new Set(TOP_CURATED_SCENARIOS.map(s => s.id));


const matchesCategoryFilter = (scenario, catId) => {
  if (catId === 'all') return true;
  if (catId === 'curated') return CURATED_IDS.has(scenario.id);
  if (catId === 'daily_social') {
    return ['daily', 'meeting', 'chat', 'leisure', 'sports'].includes(scenario.category);
  }
  if (catId === 'health_bank') {
    return ['health', 'emergency', 'banking'].includes(scenario.category);
  }
  return scenario.category === catId;
};

// Counts are derived from the data so the tabs never drift from the library
const HOME_SCENARIO_CATEGORIES = [
  { id: 'curated', labelZh: '⭐ 首頁精選', labelEn: '⭐ Top Picks' },
  { id: 'fasttrack', labelZh: '⚡ 7天速成', labelEn: '⚡ 7-Day Fast-Track' },
  { id: 'stage', labelZh: '🎓 5階分級', labelEn: '🎓 5-Stage Graded' },
  { id: 'topic', labelZh: '🗣️ 主題對話', labelEn: '🗣️ Topic Dialogues' },
  { id: 'dining', labelZh: '🍜 餐飲美食', labelEn: '🍜 Dining & Cafe' },
  { id: 'travel', labelZh: '🚕 交通住宿', labelEn: '🚕 Travel & Hotel' },
  { id: 'daily_social', labelZh: '🛍️ 購物社交', labelEn: '🛍️ Daily & Social' },
  { id: 'health_bank', labelZh: '🏥 醫療金融急難', labelEn: '🏥 Health & Banking' },
  { id: 'business', labelZh: '💼 商務工廠', labelEn: '💼 Business & Factory' },
  { id: 'business_trip', labelZh: '🧳 出差實用句', labelEn: '🧳 Business Trip Sets' },
  { id: 'all', labelZh: '📚 全部會話', labelEn: '📚 All' }
].map(cat => ({ ...cat, count: PLAYBACK_LESSONS.filter(s => matchesCategoryFilter(s, cat.id)).length }));

const TOTAL_LESSONS = PLAYBACK_LESSONS.length;
const TOTAL_LINES = PLAYBACK_LESSONS.reduce((sum, lesson) => sum + countLessonLines(lesson), 0);

const loadHomeStudy = () => {
  try {
    const saved = JSON.parse(localStorage.getItem('viet_home_study') || '{}');
    const scenario = PLAYBACK_LESSONS.find(s => s.id === saved.scenarioId);
    return {
      scenarioId: scenario?.id || 'cafe',
      sectionId: getLessonSections(scenario).some(s => s.id === saved.sectionId) ? saved.sectionId : 'all',
      showTranslation: saved.showTranslation !== false,
      categoryFilter: saved.categoryFilter || 'curated'
    };
  } catch {
    return { scenarioId: 'cafe', sectionId: 'all', showTranslation: true, categoryFilter: 'curated' };
  }
};

export const HomeConversationStudio = ({
  selectedAccent = 'north',
  onSelectAccent,
  setActiveTab,
  updateUserStats
}) => {
  const { learningMode } = useLanguage();
  const [savedStudy] = useState(loadHomeStudy);
  const [activeScenarioId, setActiveScenarioId] = useState(savedStudy.scenarioId);
  const [sectionId, setSectionId] = useState(savedStudy.sectionId);
  const [showTranslation, setShowTranslation] = useState(savedStudy.showTranslation);
  const [categoryFilter, setCategoryFilter] = useState(savedStudy.categoryFilter || 'curated');
  const [searchQuery, setSearchQuery] = useState('');
  const pendingAutoStartRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(
        'viet_home_study',
        JSON.stringify({ scenarioId: activeScenarioId, sectionId, showTranslation, categoryFilter })
      );
    } catch {}
  }, [activeScenarioId, sectionId, showTranslation, categoryFilter]);

  // Filtered scenarios for quick selector
  const filteredScenarios = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PLAYBACK_LESSONS.filter(s => {
      if (!q && !matchesCategoryFilter(s, categoryFilter)) return false;
      if (!q) return true;
      return (
        (s.titleZh && s.titleZh.toLowerCase().includes(q)) ||
        (s.titleVi && s.titleVi.toLowerCase().includes(q)) ||
        (s.titleEn && s.titleEn.toLowerCase().includes(q)) ||
        (s.tagZh && s.tagZh.toLowerCase().includes(q)) ||
        (s.summaryZh && s.summaryZh.toLowerCase().includes(q))
      );
    });
  }, [categoryFilter, searchQuery]);

  // Active scenario object
  const activeScenario = useMemo(() => {
    return PLAYBACK_LESSONS.find(s => s.id === activeScenarioId) || PLAYBACK_LESSONS[0];
  }, [activeScenarioId]);

  const sections = useMemo(() => getLessonSections(activeScenario), [activeScenario]);

  // Include every section by default; a learner can also practise a single section.
  const dialogueLines = useMemo(() => {
    return sections.filter(section => sectionId === 'all' || section.id === sectionId)
      .flatMap(section => section.lines || []);
  }, [sections, sectionId]);

  // Navigate to previous or next scenario in current list (or all scenarios)
  const navPool = useMemo(() => {
    return filteredScenarios.length > 0 ? filteredScenarios : PLAYBACK_LESSONS;
  }, [filteredScenarios]);

  const currentPoolIdx = useMemo(() => {
    const idx = navPool.findIndex(s => s.id === activeScenarioId);
    return idx >= 0 ? idx : 0;
  }, [navPool, activeScenarioId]);

  const handleStepScenario = (delta, autoPlayMode = null) => {
    if (!navPool.length) return;
    const nextIdx = (currentPoolIdx + delta + navPool.length) % navPool.length;
    const nextSc = navPool[nextIdx];
    if (nextSc) {
      if (autoPlayMode) {
        pendingAutoStartRef.current = { scenarioId: nextSc.id, mode: autoPlayMode };
      }
      setActiveScenarioId(nextSc.id);
      setSectionId('all');
    }
  };

  // Dialogue sequencer hook
  const player = useDialoguePlayback({
    lines: dialogueLines,
    accent: selectedAccent,
    nativeLang: learningMode === 'zh' ? 'zh' : 'en',
    title: activeScenario?.titleZh || '情境會話',
    onComplete: ({ mode }) => {
      audioEngine.playHaptic('celebrate');
      if (updateUserStats) updateUserStats(25);
      if (getPlaybackPrefs().autoNext && navPool.length > 1) {
        handleStepScenario(1, mode);
      }
    }
  });

  // Auto-start playback when advancing to next scenario via autoNext
  useEffect(() => {
    const pending = pendingAutoStartRef.current;
    if (pending && pending.scenarioId === activeScenarioId && dialogueLines.length > 0) {
      pendingAutoStartRef.current = null;
      const timer = setTimeout(() => {
        player.play(pending.mode || 'vi-zh', 0);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [activeScenarioId, dialogueLines, player]);

  const containerRef = useRef(null);
  useFollowActiveLine(containerRef, player.index, player.isPlaying);

  // Offline Caching & Storage States
  const [isAutoCache, setIsAutoCache] = useState(() => offlineAudioService.isAutoCacheEnabled());
  const [cacheStatus, setCacheStatus] = useState({ total: 0, cachedCount: 0, isFullyCached: false, percent: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadMessage, setDownloadMessage] = useState('');
  const downloadRequestRef = useRef(0);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [bookmarkedSet, setBookmarkedSet] = useState(new Set());

  // Check scenario cache status when active scenario or accent changes
  useEffect(() => {
    let isMounted = true;
    downloadRequestRef.current++;
    setIsDownloading(false);
    setDownloadMessage('');
    setCacheStatus({ total: 0, cachedCount: 0, isFullyCached: false, percent: 0 });
    const refresh = () => offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent).then(status => {
      if (isMounted) setCacheStatus(status);
    });
    refresh();
    const unsubscribe = offlineAudioService.subscribe(refresh);
    return () => { isMounted = false; downloadRequestRef.current++; unsubscribe(); };
  }, [dialogueLines, selectedAccent]);

  // Refresh bookmarks status
  useEffect(() => {
    const set = new Set();
    dialogueLines.forEach(l => {
      const viet = l.viet || l.vi;
      if (viet && bookmarkService.isBookmarked(viet)) {
        set.add(viet);
      }
    });
    setBookmarkedSet(set);
  }, [dialogueLines]);

  const handleToggleAutoCache = (e) => {
    const checked = e.target.checked;
    setIsAutoCache(checked);
    offlineAudioService.setAutoCacheEnabled(checked);
    audioEngine.playHaptic('tap');
  };

  const handleDownloadScenarioAudio = async () => {
    const request = ++downloadRequestRef.current;
    const isCurrent = () => request === downloadRequestRef.current;
    audioEngine.playHaptic('selection');
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadMessage('');

    try {
      await offlineAudioService.cacheScenarioAudio(dialogueLines, selectedAccent, ({ percent }) => {
        if (isCurrent()) setDownloadProgress(percent);
      });
      const updated = await offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent);
      if (!isCurrent()) return;
      setCacheStatus(updated);
      setDownloadMessage(updated.isFullyCached ? '本情境已可離線播放。' : '部分音檔尚未儲存，請確認網路後再試一次。');
      if (updated.isFullyCached) audioEngine.playHaptic('success');
    } catch (e) {
      if (isCurrent()) setDownloadMessage('無法儲存音檔，請確認網路與瀏覽器儲存空間後再試一次。');
    } finally {
      if (isCurrent()) setIsDownloading(false);
    }
  };

  const handlePlayLineVi = (line, idx) => {
    audioEngine.playHaptic('tap');
    player.playSingleLine(idx, 'vi-only');
    if (updateUserStats) updateUserStats(2);
  };

  const handlePlayLineViZh = (line, idx) => {
    audioEngine.playHaptic('tap');
    player.playSingleLine(idx, 'vi-zh');
    if (updateUserStats) updateUserStats(3);
  };

  const handlePlayLineZh = (line) => {
    const zh = line.zh;
    if (!zh) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(zh, { lang: 'zh' });
  };

  const handleCopySentence = (line, idx) => {
    const text = `${line.viet || line.vi}\n${line.zh || ''}`;
    navigator.clipboard?.writeText(text);
    audioEngine.playHaptic('tap');
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleToggleBookmark = (line) => {
    const viet = line.viet || line.vi;
    if (!viet) return;
    audioEngine.playHaptic('tap');
    const isAdded = bookmarkService.toggle({
      viet,
      chinese: line.zh || '',
      english: line.en || '',
      category: '會話金句',
      source: activeScenario?.titleZh || '情境會話'
    });
    setBookmarkedSet(prev => {
      const next = new Set(prev);
      if (isAdded) next.add(viet);
      else next.delete(viet);
      return next;
    });
  };

  // Scenario Exegesis Lore Data (if available for this scenario)
  const exegesis = useMemo(() => {
    return SCENARIO_EXEGESIS[activeScenarioId] || null;
  }, [activeScenarioId]);

  return (
    <section className="home-conv-studio" aria-labelledby="studio-main-heading">
      {/* 1. Header Area with Quality Badges & Accent Switcher */}
      <div className="studio-header">
        <div className="studio-title-group">
          <div className="studio-badge-row">
            <span className="studio-pill primary">
              <Flame size={12} fill="currentColor" /> {learningMode === 'zh' ? '首頁第一優先 · 隨點隨聽' : 'Top Priority Play & Learn'}
            </span>
            <span className="studio-pill gold">
              <Headphones size={12} /> {learningMode === 'zh' ? '純越文 / 越文+中文 雙模式' : 'Pure Viet & Viet+Chinese'}
            </span>
            <span className="studio-pill green">
              <HardDrive size={12} /> {learningMode === 'zh' ? '正統越語發音 · 台灣繁體常用語' : 'Authentic Viet & Taiwan Mandarin'}
            </span>
          </div>

          <h2 id="studio-main-heading" className="studio-title">
            <span>🇻🇳</span>
            <span>{learningMode === 'zh' ? `播放學習 · ${TOTAL_LESSONS} 組會話、${TOTAL_LINES} 句雙模式音檔` : `Play & Learn · ${TOTAL_LESSONS} conversation sets, ${TOTAL_LINES} lines`}</span>
          </h2>

          <p className="studio-subtitle">
            {learningMode === 'zh'
              ? '一鍵選擇「越文＋中文（台灣繁體導讀）」快速聽懂句意，或切換「純越文」沉浸練聽力。支援單句精聽、跟讀停頓與全自動跨篇連播！'
              : 'Instant dual-mode audio learning: switch seamlessly between Pure Vietnamese and Vietnamese + Chinese narration with shadowing pause and auto-advance.'}
          </p>
        </div>

        {/* Accent Quick Switcher */}
        {onSelectAccent && (
          <div className="studio-accent-box" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-input)', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
            <Globe2 size={15} color="var(--brand-primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '切換發音：' : 'Voice: '}
            </span>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'north' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('north'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🇻🇳 河內標準音
            </button>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'south' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('south'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🌴 南越偏好
            </button>
          </div>
        )}
      </div>

      {/* 2. Prominent Hero Quick-Play Mode Cards + Lesson Switcher */}
      <div className="studio-hero-play-strip">
        <div className="studio-lesson-status-bar">
          <div className="studio-lesson-info">
            <span className="studio-lesson-icon">{activeScenario?.icon || '💬'}</span>
            <div>
              <div className="studio-current-lesson">
                {learningMode === 'zh' ? '正在學習：' : 'Current Lesson: '}
                <strong>{learningMode === 'zh' ? activeScenario?.titleZh : (activeScenario?.titleEn || activeScenario?.titleZh)}</strong>
                <span className="studio-line-count-badge">{dialogueLines.length} {learningMode === 'zh' ? '句對話' : 'lines'}</span>
              </div>
              {activeScenario?.summaryZh && (
                <div className="studio-lesson-summary">
                  {learningMode === 'zh' ? activeScenario.summaryZh : (activeScenario.summaryEn || activeScenario.summaryZh)}
                </div>
              )}
            </div>
          </div>

          <div className="studio-lesson-step-btns">
            <button
              type="button"
              className="studio-step-btn"
              onClick={() => { audioEngine.playHaptic('tap'); handleStepScenario(-1); }}
              title={learningMode === 'zh' ? '切換至上一篇會話' : 'Previous conversation'}
            >
              <ChevronLeft size={16} />
              <span>{learningMode === 'zh' ? '上一篇' : 'Prev'}</span>
            </button>
            <span className="studio-pool-counter">
              {currentPoolIdx + 1} / {navPool.length}
            </span>
            <button
              type="button"
              className="studio-step-btn"
              onClick={() => { audioEngine.playHaptic('tap'); handleStepScenario(1); }}
              title={learningMode === 'zh' ? '切換至下一篇會話' : 'Next conversation'}
            >
              <span>{learningMode === 'zh' ? '下一篇' : 'Next'}</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* One-Click Dual-Mode Launch Banner */}
        <div className="studio-dual-launch-grid">
          <button
            type="button"
            className={`studio-launch-card vi-zh ${player.mode === 'vi-zh' ? 'selected-mode' : ''} ${player.isPlaying && player.mode === 'vi-zh' ? 'playing-now' : ''}`}
            onClick={() => {
              audioEngine.playHaptic('selection');
              if (player.isPlaying && player.mode === 'vi-zh') {
                player.pause();
              } else {
                player.play('vi-zh', player.isActive ? player.index : 0);
              }
            }}
          >
            <div className="launch-card-icon">🎧</div>
            <div className="launch-card-text">
              <strong>
                {player.isPlaying && player.mode === 'vi-zh'
                  ? (learningMode === 'zh' ? '⏸ 暫停「越文＋中文」對照播放' : '⏸ Pause Viet + Chinese')
                  : (learningMode === 'zh' ? '▶ 一鍵播放：越文＋中文（雙語對照）' : '▶ Play Viet + Chinese')}
              </strong>
              <span>
                {learningMode === 'zh'
                  ? '每句先讀正統越語、再讀台灣繁體中文導讀，通勤免看螢幕也能聽懂'
                  : 'Listen to authentic Vietnamese followed by native translation'}
              </span>
            </div>
          </button>

          <button
            type="button"
            className={`studio-launch-card vi-only ${player.mode === 'vi-only' ? 'selected-mode' : ''} ${player.isPlaying && player.mode === 'vi-only' ? 'playing-now' : ''}`}
            onClick={() => {
              audioEngine.playHaptic('selection');
              if (player.isPlaying && player.mode === 'vi-only') {
                player.pause();
              } else {
                player.play('vi-only', player.isActive ? player.index : 0);
              }
            }}
          >
            <div className="launch-card-icon">🇻🇳</div>
            <div className="launch-card-text">
              <strong>
                {player.isPlaying && player.mode === 'vi-only'
                  ? (learningMode === 'zh' ? '⏸ 暫停「純越文」沉浸播放' : '⏸ Pause Pure Vietnamese')
                  : (learningMode === 'zh' ? '▶ 一鍵播放：純越文（母語沉浸）' : '▶ Play Pure Vietnamese')}
              </strong>
              <span>
                {learningMode === 'zh'
                  ? '全篇純越南語連續朗讀，訓練真實語感、聽力盲測與開口跟讀'
                  : 'Continuous pure Vietnamese audio for listening immersion & shadowing'}
              </span>
            </div>
          </button>
        </div>
      </div>

      {/* Master Sequencer Bar with Speed, Repeat, Shadowing Pause, Loop & Auto-Next */}
      <DialoguePlaybackBar
        player={player}
        lines={dialogueLines}
        title={activeScenario?.titleZh}
        learningMode={learningMode}
        autoNextLabel={learningMode === 'zh' ? '自動連播下一篇會話' : 'Auto-play next conversation'}
        xpHint="+25 XP"
      />

      {/* 3. Category Filter Tabs & Search Bar for the whole playback library */}
      <div className="studio-filter-section">
        <div className="studio-category-tabs" role="tablist" aria-label="情境分類篩選">
          {HOME_SCENARIO_CATEGORIES.map(cat => {
            const isCatActive = !searchQuery.trim() && categoryFilter === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={isCatActive}
                className={`studio-cat-tab ${isCatActive ? 'active' : ''}`}
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  setCategoryFilter(cat.id);
                  setSearchQuery('');
                  const list = PLAYBACK_LESSONS.filter(s => matchesCategoryFilter(s, cat.id));
                  if (list.length > 0 && !list.some(s => s.id === activeScenarioId)) {
                    setActiveScenarioId(list[0].id);
                    setSectionId('all');
                  }
                }}
              >
                {learningMode === 'zh' ? cat.labelZh : cat.labelEn} ({cat.count})
              </button>
            );
          })}
        </div>

        <div className="studio-search-and-select">
          <div className="studio-search-wrap">
            <Search size={15} className="studio-search-icon" />
            <input
              type="search"
              className="studio-search-input"
              placeholder={learningMode === 'zh' ? `搜尋 ${TOTAL_LESSONS} 組會話（如：咖啡、殺價、銀行、發票、工廠...）` : `Search ${TOTAL_LESSONS} conversations...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="搜尋情境會話"
            />
          </div>

          <div className="scenario-dropdown-wrap">
            <select
              className="scenario-select"
              value={activeScenarioId}
              onChange={(e) => {
                audioEngine.playHaptic('selection');
                setActiveScenarioId(e.target.value);
                setSectionId('all');
              }}
              aria-label="選擇其他情境"
            >
              <option value="" disabled>快速跳轉全部 {TOTAL_LESSONS} 組會話</option>
              {PLAYBACK_LESSONS.map((s, idx) => (
                <option key={s.id} value={s.id}>
                  {idx + 1}. {s.icon || '💬'} {s.titleZh}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* 4. Scenario Quick-Selector Chips */}
      <div className="scenario-quick-selector" role="group" aria-label="情境切換">
        {categoryFilter === 'curated' && !searchQuery.trim()
          ? TOP_CURATED_SCENARIOS.map(sc => {
              const isActive = activeScenarioId === sc.id;
              return (
                <button
                  key={sc.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`scenario-chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    audioEngine.playHaptic('tap');
                    setActiveScenarioId(sc.id);
                    setSectionId('all');
                  }}
                  title={sc.subZh}
                >
                  <span style={{ fontSize: '1.15rem' }}>{sc.icon}</span>
                  <span>{sc.labelZh}</span>
                </button>
              );
            })
          : filteredScenarios.map(sc => {
              const isActive = activeScenarioId === sc.id;
              return (
                <button
                  key={sc.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`scenario-chip-btn ${isActive ? 'active' : ''}`}
                  onClick={() => {
                    audioEngine.playHaptic('tap');
                    setActiveScenarioId(sc.id);
                    setSectionId('all');
                  }}
                  title={sc.titleZh}
                >
                  <span style={{ fontSize: '1.1rem' }}>{sc.icon || '💬'}</span>
                  <span>{sc.tagZh ? `${sc.tagZh} · ` : ''}{sc.titleZh.length > 14 ? `${sc.titleZh.slice(0, 14)}…` : sc.titleZh}</span>
                </button>
              );
            })}
      </div>

      {/* 5. Practice Options & Offline Cache Toolbar */}
      <div className="studio-practice-options">
        <label>會話段落
          <select value={sectionId} onChange={e => setSectionId(e.target.value)}>
            <option value="all">全部段落（{sections.reduce((n, s) => n + (s.lines?.length || 0), 0)} 句）</option>
            {sections.map((section, index) => <option key={section.id} value={section.id}>{section.titleZh || section.title || `第 ${index + 1} 段`}（{section.lines?.length || 0} 句）</option>)}
          </select>
        </label>
        <label><input type="checkbox" checked={showTranslation} onChange={e => setShowTranslation(e.target.checked)} />顯示台灣繁體中文翻譯與發音提示</label>
        <p>💡 建議三步學習法：① 先播「越文＋中文」聽懂語意 → ② 改播「純越文」並隱藏翻譯練聽力 → ③ 開啟「跟讀停頓」開口說一次。</p>
      </div>
      <div className="studio-toolbar">
        <div className="toolbar-right">
          {/* Offline Audio Caching & Preload Controls */}
          <div className="offline-group">
            {/* Auto-Cache Option Switch */}
            <label className="offline-checkbox-label" title="開啟後，每次點擊播放音檔即自動下載儲存在瀏覽器，離線或無網路時依舊能順暢播放">
              <input
                type="checkbox"
                checked={isAutoCache}
                onChange={handleToggleAutoCache}
              />
              <span>{learningMode === 'zh' ? '播過即存離線' : 'Auto-cache offline'}</span>
            </label>

            {/* One-Click Preload Download Button */}
            <button
              className={`offline-download-btn ${cacheStatus.isFullyCached ? 'ready' : ''}`}
              onClick={handleDownloadScenarioAudio}
              disabled={isDownloading || !offlineAudioService.isSupported}
              title={learningMode === 'zh' ? '一鍵將當前情境的所有越語與中文音檔完整下載至離線快取' : 'Download all dialogue audio clips for offline use'}
            >
              {isDownloading ? (
                <>
                  <Download size={14} className="animate-spin" />
                  <span>{learningMode === 'zh' ? `下載中 ${downloadProgress}%` : `Saving ${downloadProgress}%`}</span>
                </>
              ) : cacheStatus.isFullyCached ? (
                <>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>{learningMode === 'zh' ? `離線已就緒 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Ready Offline (${cacheStatus.cachedCount})`}</span>
                </>
              ) : (
                <>
                  <Download size={14} />
                  <span>{learningMode === 'zh' ? `一鍵下載離線 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Download (${cacheStatus.cachedCount}/${cacheStatus.total})`}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <p role="status" className="studio-voice-note">{!offlineAudioService.isSupported ? '目前瀏覽器不支援離線儲存，仍可線上播放。' : downloadMessage}</p>

      {/* 6. Sentence-by-Sentence Interactive Card Deck */}
      <div className="dialogue-card-deck" ref={containerRef}>
        {dialogueLines.map((line, idx) => {
          const isCurrentActive = player.isActive && player.index === idx;
          const speakerInfo = getSpeakerVisual(line.speakerVi || line.speaker || '', line.role || '', learningMode);
          const vietText = line.viet || line.vi || '';
          const zhText = line.zh || '';
          const isBookmarked = bookmarkedSet.has(vietText);

          return (
            <div
              key={idx}
              data-line-index={idx}
              className={`sentence-card ${isCurrentActive ? `active-speaking dpb-active-line part-${player.part}` : ''}`}
            >
              <div className="sentence-card-top">
                <div className="speaker-badge-wrap">
                  <div className="speaker-avatar" style={{ background: speakerInfo.bg, border: `1.5px solid ${speakerInfo.border}` }}>
                    {speakerInfo.icon}
                  </div>
                  <span className="speaker-name-vi">{line.speakerVi || line.speaker || `Câu ${idx + 1}`}</span>
                  <span className="speaker-name-zh">({line.speakerZh || (line.speakerVi || line.speaker ? speakerInfo.roleName : `第 ${idx + 1} 句`)})</span>
                  {isCurrentActive && (
                    <PlaybackPartChip player={player} learningMode={learningMode} />
                  )}
                </div>

                <div className="sentence-actions">
                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleCopySentence(line, idx)}
                    title="複製越文與中文"
                  >
                    {copiedIndex === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>

                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleToggleBookmark(line)}
                    title={isBookmarked ? '從生詞本移除' : '收藏至生詞本'}
                    style={{ color: isBookmarked ? '#eab308' : undefined }}
                  >
                    <Bookmark size={14} fill={isBookmarked ? '#eab308' : 'none'} />
                  </button>
                </div>
              </div>

              <div className="sentence-card-body">
                <div className="sentence-text-vi dpb-viet-text" lang="vi">{vietText}</div>
                {showTranslation && (
                  <>
                    <div className="sentence-text-zh dpb-native-text" lang="zh-TW">{zhText}</div>
                    {(line.northTip || line.southTip || line.grammarNote || line.hanViet) && (
                      <div className="sentence-pedagogy-notes">
                        {line.hanViet && (
                          <span className="sentence-note-chip hanviet">📖 漢越詞：{line.hanViet}</span>
                        )}
                        {line.grammarNote && (
                          <span className="sentence-note-chip grammar">💡 句型：{line.grammarNote}</span>
                        )}
                        {line.northTip && (
                          <span className="sentence-note-chip north">🇻🇳 發音/用法：{line.northTip}</span>
                        )}
                        {line.southTip && (
                          <span className="sentence-note-chip south">🌴 在地提示：{line.southTip}</span>
                        )}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Individual Audio Triggers: Pure Viet, Viet + Chinese, Chinese Only, Play From Here */}
              <div className="sentence-audio-btns">
                <button
                  type="button"
                  className={`audio-chip-play vizh-btn ${isCurrentActive && player.mode === 'vi-zh' ? 'active' : ''}`}
                  onClick={() => handlePlayLineViZh(line, idx)}
                  title="單句播放：先聽正統越語、再聽台灣繁體中文導讀"
                >
                  <Headphones size={13} />
                  <span>越+中雙語</span>
                </button>

                <button
                  type="button"
                  className={`audio-chip-play ${isCurrentActive && player.mode === 'vi-only' ? 'active' : ''}`}
                  onClick={() => handlePlayLineVi(line, idx)}
                  title="單獨播放這句純越語母語發音"
                >
                  <Volume2 size={13} />
                  <span>純越文</span>
                  <span style={{ fontSize: '0.72rem', opacity: 0.75 }}>
                    {selectedAccent === 'north' ? '(北越音)' : '(南越偏好)'}
                  </span>
                </button>

                {zhText && (
                  <button
                    type="button"
                    className="audio-chip-play zh-btn"
                    onClick={() => handlePlayLineZh(line)}
                    title="單獨播放台灣繁體中文導讀原音"
                  >
                    <Volume2 size={13} color="#10b981" />
                    <span>中文導讀</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>🇹🇼</span>
                  </button>
                )}

                <button
                  type="button"
                  className="audio-chip-play continue-btn"
                  style={{ marginLeft: 'auto' }}
                  onClick={() => player.playFrom(idx, player.mode || 'vi-zh')}
                  title="以此句為起點，依目前模式連續播放到結尾"
                >
                  <Play size={12} />
                  <span style={{ fontSize: '0.76rem', fontWeight: 700 }}>從此句接續連播 ➔</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <details className="studio-voice-note"><summary>語音與離線播放說明</summary>
      <p>音檔快取可供已開啟的頁面離線播放；重新開啟網站仍可能需要網路。瀏覽器可能依儲存空間或隱私設定清除快取。</p>
      <p className="studio-voice-note">語音優先使用預錄的越南語（HoaiMy / NamMinh 標準發音）與台灣繁體中文（HsiaoChen 台灣華語）合成音檔。南越偏好若無專屬音檔，會使用現有標準越語，不以改寫拼字模擬口音。</p>
      </details>

      {/* 7. In-Depth Teaching Lore & Exegesis Section */}
      <div className="studio-lore-card">
        <div className="lore-header">
          <h3 className="lore-title">
            <Lightbulb size={18} color="var(--brand-gold)" />
            <span>{learningMode === 'zh' ? '學會這段對話：句型公式、在地文化與關鍵詞彙點讀' : 'Pedagogical Lore & Insider Notes'}</span>
          </h3>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
            {activeScenario?.titleVi}
          </span>
        </div>

        <div className="lore-grid">
          {/* Formulas / Grammar Patterns */}
          <div className="lore-box">
            <h4>
              <span>📌</span>
              <span>{learningMode === 'zh' ? '核心句型公式' : 'Core Sentence Patterns'}</span>
            </h4>
            {exegesis?.coreFormulas && exegesis.coreFormulas.length > 0 ? (
              exegesis.coreFormulas.map((f, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.86rem' }}>{f.formulaVi}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{f.explainZh || f.formulaZh}</div>
                </div>
              ))
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '先挑一句自己用得到的話，聽完再跟讀，最後替換餐點、地點或數字練習。請求物品可用「Cho tôi + 名詞」；禮貌程度也取決於稱謂（Anh/Chị/Em）與句尾敬語「ạ」。'
                  : '"Cho tôi + verb/noun" is the standard polite opener in daily requests.'}
              </p>
            )}
          </div>

          {/* Cultural Insights & Secrets */}
          <div className="lore-box">
            <h4>
              <span>💡</span>
              <span>{learningMode === 'zh' ? '在地互動提醒' : 'Cultural Secrets'}</span>
            </h4>
            {activeScenario?.culturalTip?.contentZh ? (
              Array.isArray(activeScenario.culturalTip.contentZh) ? (
                <ul>
                  {activeScenario.culturalTip.contentZh.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              ) : (
                <p>{activeScenario.culturalTip.contentZh}</p>
              )
            ) : exegesis?.culturalNotes ? (
              <ul>
                {exegesis.culturalNotes.slice(0, 3).map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '稱謂會依年齡與關係調整。Anh、chị 常用來稱呼年紀稍長的男性、女性；em 用於較年輕的人。不確定時，可以先禮貌詢問對方怎麼稱呼。'
                  : 'Vietnamese address forms strictly follow kinship terms.'}
              </p>
            )}
          </div>

          {/* Key Scenario Vocabulary */}
          {(activeScenario?.vocab || activeScenario?.vocabulary || []).length > 0 && <div className="lore-box">
            <h4>
              <span>📖</span>
              <span>{learningMode === 'zh' ? '關鍵生詞點讀（點擊聽越語發音）' : 'Key Vocabulary'}</span>
            </h4>
            <div className="studio-vocab-list">
              {(activeScenario?.vocab || activeScenario?.vocabulary || []).slice(0, 8).map((word, i) => (
                <button
                  key={i}
                  type="button"
                  className="studio-vocab-chip"
                  onClick={() => {
                    const vi = word.viet || word.vi || word.word;
                    if (vi) {
                      audioEngine.playHaptic('tap');
                      audioEngine.speak(vi, { accent: selectedAccent, lang: 'vi' });
                    }
                  }}
                  title="點擊聽越南語發音"
                >
                  <span className="studio-vocab-vi">{word.viet || word.vi || word.word}</span>
                  <span className="studio-vocab-zh">{word.zh || word.meaning}</span>
                  <Volume2 size={11} color="var(--brand-primary)" />
                </button>
              ))}
            </div>
          </div>}
        </div>
      </div>

      {/* 8. Navigation Portal to Deep Conversation Module */}
      <div className="studio-portal-banner">
        <div className="portal-text">
          <span>想進行互動角色扮演、查看實體菜單，或探索更多深度專題？</span>
        </div>
        <button
          type="button"
          className="portal-btn"
          onClick={() => {
            audioEngine.playHaptic('selection');
            if (setActiveTab && activeScenario?.moduleTab) {
              setActiveTab(activeScenario.moduleTab);
            } else if (setActiveTab) {
              sessionStorage.setItem('viet_target_chapter', JSON.stringify({
                moduleId: 'conversation',
                targetParam: { scenarioId: activeScenarioId }
              }));
              setActiveTab('conversation');
            }
          }}
        >
          <span>{activeScenario?.moduleTab === 'business' ? '進入商務出差旗艦模組' : activeScenario?.moduleTab === 'topics' ? '進入主題精熟模組深入練習' : '進入完整情境對話與角色扮演館'}</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default HomeConversationStudio;

