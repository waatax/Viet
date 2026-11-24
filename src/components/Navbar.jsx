import React, { useEffect, useState, useMemo, useRef } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Menu, X, Sparkles,
  Map, AudioLines, MessagesSquare, Layers3, Settings2, Star,
  Zap, ChevronRight, ChevronDown, Search, Headphones, Film, Music2, SlidersHorizontal, Target
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import { audioEngine } from '../services/audioEngine';
import { bookmarkService } from '../services/bookmarkService';
import { NAV_GROUPS } from '../config/navigation';
import { APP_VERSION } from '../config/release';

const FONT_SIZES = ['small', 'normal', 'large', 'xlarge', 'xxlarge'];
const getFontSizeLabel = (size, mode) => {
  if (mode === 'zh') {
    return size === 'small' ? '小' : (size === 'normal' ? '中' : (size === 'large' ? '大' : (size === 'xlarge' ? '特' : '超')));
  }
  return size === 'small' ? 'S' : (size === 'normal' ? 'M' : (size === 'large' ? 'L' : (size === 'xlarge' ? 'XL' : 'XXL')));
};

const FONT_SIZE_LABELS = {
  small: '88%',
  normal: '100%',
  large: '115%',
  xlarge: '130%',
  xxlarge: '145%'
};

const PRIMARY_STRIP_ITEMS = [
  { id: 'path', labelZh: '首頁', labelEn: 'Home', icon: Map },
  { id: 'ultra', labelZh: '母語超速特訓', labelEn: 'Ultralearn', icon: Flame },
  { id: 'songs', labelZh: '聽音樂學', labelEn: 'Songs', icon: Music2 },
  { id: 'listen', labelZh: '單字隨身聽', labelEn: 'Audio Lab', icon: Headphones },
  { id: 'conversation', labelZh: '情境會話', labelEn: 'Dialogues', icon: MessagesSquare },
  { id: 'flashcards', labelZh: '單字閃卡', labelEn: 'Flashcards', icon: Layers3 },
  { id: 'dialogvideo', labelZh: '影片課程', labelEn: 'Videos', icon: Film },
  { id: 'quest', labelZh: '越語闖關', labelEn: 'Quest', icon: Sparkles }
];

export const Navbar = ({
  theme,
  setTheme,
  fontSize,
  setFontSize,
  activeTab,
  setActiveTab,
  userStats,
  selectedAccent,
  setSelectedAccent,
  speechRate = 1.0,
  setSpeechRate,
  wordLookupEnabled = true,
  setWordLookupEnabled,
  wordLookupAutoSpeak = true,
  setWordLookupAutoSpeak,
  onOpenAchievements,
  onOpenDailyQuests,
  onOpenChapterFinder,
  onOpenAudioDiagnostic,
  onOpenBookmarks
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [prefsOpen, setPrefsOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);
  const [bookmarkCount, setBookmarkCount] = useState(() => bookmarkService.getCount());

  const prefsRef = useRef(null);
  const catalogRef = useRef(null);

  useEffect(() => {
    const unsubBm = bookmarkService.subscribe(items => {
      setBookmarkCount(items.length);
    });
    return () => {
      unsubBm();
    };
  }, []);

  useEffect(() => {
    const handleOutside = (e) => {
      if (prefsRef.current && !prefsRef.current.contains(e.target)) setPrefsOpen(false);
      if (catalogRef.current && !catalogRef.current.contains(e.target)) setCatalogOpen(false);
    };
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setPrefsOpen(false);
        setCatalogOpen(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCatalogOpen(false);
  }, [activeTab]);

  const stepFontSize = (delta) => {
    audioEngine.playHaptic('selection');
    const currentIndex = FONT_SIZES.indexOf(fontSize);
    const validIdx = currentIndex === -1 ? 1 : currentIndex;
    const nextIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, validIdx + delta));
    setFontSize(FONT_SIZES[nextIndex]);
  };

  const isDark = theme === 'dark';
  const selectTheme = (next) => {
    audioEngine.playHaptic('selection');
    setTheme(next);
  };

  const toggleTheme = () => {
    selectTheme(isDark ? 'light' : 'dark');
  };

  const currentLevel = gamificationEngine.calculateLevel(userStats.xp);
  const dailyQuests = gamificationEngine.getDailyQuests();
  const completedQuestsCount = dailyQuests.filter(q => q.completed).length;

  const isPrimaryTab = PRIMARY_STRIP_ITEMS.some(item => item.id === activeTab);
  const currentGroup = useMemo(() => {
    return NAV_GROUPS.find(g => g.items.some(item => item.id === activeTab)) || null;
  }, [activeTab]);

  return (
    <header className="header-container viet-header-v2">
      {/* Row 1: Clean Utility Bar */}
      <nav className="navbar viet-navbar-v2" aria-label={learningMode === 'zh' ? '主要導覽與學習設定' : 'Primary navigation and learning settings'}>
        <div className="nav-content">
          <div className="nav-brand-and-finder">
            <button
              className="brand-logo"
              onClick={() => { audioEngine.playHaptic('tap'); setActiveTab('path'); }}
              aria-label={t('brandName')}
            >
              <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
              <span className="brand-copy">
                <span className="brand-title-line">
                  <strong>{t('brandName')}</strong>
                  <span className="brand-ver-badge">v{APP_VERSION}</span>
                </span>
              </span>
            </button>

            <button
              className="nav-chapter-finder-btn"
              onClick={onOpenChapterFinder}
              title={learningMode === 'zh' ? '搜尋全站單字、會話、歌曲與課程 (Ctrl+K)' : 'Search lessons, words & songs (Ctrl+K)'}
            >
              <Search size={15} className="finder-search-icon" />
              <span className="finder-btn-text">{learningMode === 'zh' ? '搜尋單字、會話、歌曲…' : 'Search site…'}</span>
              <kbd className="finder-kbd-shortcut">Ctrl K</kbd>
            </button>
          </div>

          {/* Mobile Quick Actions */}
          <div className="nav-mobile-actions">
            <button
              className="icon-control"
              onClick={onOpenChapterFinder}
              aria-label="搜尋全站內容"
              title="搜尋全站內容"
            >
              <Search size={18} />
            </button>

            <button
              className="icon-control"
              onClick={toggleTheme}
              aria-label={isDark ? '切換至亮色模式' : '切換至深色模式'}
              title={isDark ? '切換至亮色模式' : '切換至深色模式'}
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              className="icon-control menu-toggle"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav-drawer"
              aria-label={menuOpen ? '關閉目錄' : '開啟全部目錄'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Right Control Hub (Streamlined) */}
          <div id="header-settings" className="header-settings">
            <div className="controls-group">
              {/* 1-Click Light / Dark Segmented Theme Switch */}
              <div className="theme-segmented-pill" role="group" aria-label={learningMode === 'zh' ? '背景主題切換' : 'Theme switcher'}>
                <button
                  type="button"
                  className={`theme-seg-btn ${!isDark ? 'active' : ''}`}
                  onClick={() => selectTheme('light')}
                  aria-pressed={!isDark}
                  title={learningMode === 'zh' ? '亮色模式' : 'Light Mode'}
                >
                  <Sun size={14} />
                  <span>{learningMode === 'zh' ? '亮色' : 'Light'}</span>
                </button>
                <button
                  type="button"
                  className={`theme-seg-btn ${isDark ? 'active' : ''}`}
                  onClick={() => selectTheme('dark')}
                  aria-pressed={isDark}
                  title={learningMode === 'zh' ? '深色模式' : 'Dark Mode'}
                >
                  <Moon size={14} />
                  <span>{learningMode === 'zh' ? '深色' : 'Dark'}</span>
                </button>
              </div>

              {/* Accent Quick Switcher */}
              <button
                className={`control-btn accent-toggle-btn accent-${selectedAccent}`}
                onClick={() => {
                  audioEngine.playHaptic('selection');
                  setSelectedAccent(prev => prev === 'north' ? 'south' : 'north');
                }}
                title={selectedAccent === 'north' ? '目前：河內標準音（點擊切換西貢音）' : '目前：西貢南越音（點擊切換河內音）'}
              >
                <span className="accent-icon">{selectedAccent === 'north' ? '🏛️' : '🌴'}</span>
                <span className="accent-label-full">{selectedAccent === 'north' ? '河內音' : '西貢音'}</span>
                <span className="accent-label-short">{selectedAccent === 'north' ? '北' : '南'}</span>
              </button>

              {/* Word Bank Trigger */}
              <button
                className={`control-btn bookmarks-toggle-btn ${bookmarkCount > 0 ? 'has-bookmarks' : ''}`}
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  if (onOpenBookmarks) onOpenBookmarks();
                }}
                title={learningMode === 'zh' ? '個人生詞本 (Ctrl+B)' : 'Word Bank (Ctrl+B)'}
              >
                <Star size={14} fill={bookmarkCount > 0 ? '#eab308' : 'none'} color={bookmarkCount > 0 ? '#eab308' : 'currentColor'} />
                <span className="bookmarks-pill-label">{learningMode === 'zh' ? '生詞本' : 'Saved'}</span>
                {bookmarkCount > 0 && <span className="bookmarks-header-count">{bookmarkCount}</span>}
              </button>

              {/* Compact Learner Progress Pill */}
              <button
                className="learner-hub-pill"
                onClick={onOpenAchievements}
                title={learningMode === 'zh' ? '查看學習進度、每日任務與勳章' : 'Progress & Achievements'}
              >
                <span className="hub-stat-item streak-stat">
                  <Flame size={13} className="streak-flame-animated" /> {userStats.streak}天
                </span>
                <span className="hub-stat-divider">·</span>
                <span className="hub-stat-item xp-stat">
                  <Trophy size={13} /> {userStats.xp}
                </span>
              </button>

              {/* Preferences Popover (Font Size, Speed, Language, Quests, Audio Lab) */}
              <div className="nav-popover-wrap" ref={prefsRef}>
                <button
                  type="button"
                  className={`control-btn nav-prefs-trigger ${prefsOpen ? 'is-open' : ''}`}
                  onClick={() => { audioEngine.playHaptic('tap'); setPrefsOpen(o => !o); setCatalogOpen(false); }}
                  aria-expanded={prefsOpen}
                  aria-label={learningMode === 'zh' ? '顯示與學習偏好設定' : 'Display & study preferences'}
                  title={learningMode === 'zh' ? '字級、語速、語言與工具' : 'Font, speed, language & tools'}
                >
                  <SlidersHorizontal size={15} />
                  <span className="prefs-btn-label">{learningMode === 'zh' ? '設定' : 'Prefs'}</span>
                </button>

                {prefsOpen && (
                  <div className="nav-prefs-popover" role="dialog" aria-label={learningMode === 'zh' ? '學習偏好設定' : 'Study Preferences'}>
                    <div className="prefs-pop-row">
                      <span className="prefs-pop-label"><Type size={14} /> {learningMode === 'zh' ? '字級大小' : 'Font Size'}</span>
                      <div className="drawer-font-stepper">
                        <button
                          type="button"
                          className="drawer-font-stepper-btn"
                          onClick={() => stepFontSize(-1)}
                          disabled={fontSize === 'small'}
                          aria-label="縮小字體"
                        >A-</button>
                        <span className="drawer-font-stepper-val">{FONT_SIZE_LABELS[fontSize] || '100%'}</span>
                        <button
                          type="button"
                          className="drawer-font-stepper-btn"
                          onClick={() => stepFontSize(1)}
                          disabled={fontSize === 'xxlarge'}
                          aria-label="放大字體"
                        >A+</button>
                      </div>
                    </div>

                    <div className="prefs-pop-row">
                      <span className="prefs-pop-label"><Settings2 size={14} /> {learningMode === 'zh' ? '發音語速' : 'Speech Rate'}</span>
                      <button
                        type="button"
                        className={`prefs-pop-chip ${speechRate <= 0.85 ? 'is-active' : ''}`}
                        onClick={() => {
                          audioEngine.playHaptic('tap');
                          if (setSpeechRate) setSpeechRate(speechRate <= 0.85 ? 1.0 : 0.75);
                        }}
                      >
                        {speechRate <= 0.85 ? '🐢 0.75x 慢速' : '🐰 1.0x 原速'}
                      </button>
                    </div>

                    <div className="prefs-pop-row">
                      <span className="prefs-pop-label"><Globe size={14} /> {learningMode === 'zh' ? '介面語言' : 'Interface'}</span>
                      <button
                        type="button"
                        className="prefs-pop-chip"
                        onClick={() => toggleLearningMode()}
                      >
                        {learningMode === 'zh' ? '繁體中文 → EN' : 'English → 中文'}
                      </button>
                    </div>

                    {setWordLookupEnabled && (
                      <div className="prefs-pop-row">
                        <span className="prefs-pop-label"><Sparkles size={14} /> {learningMode === 'zh' ? '指字/點字翻譯' : 'Word Lookup'}</span>
                        <button
                          type="button"
                          className={`prefs-pop-chip ${wordLookupEnabled ? 'is-active' : ''}`}
                          onClick={() => {
                            audioEngine.playHaptic('tap');
                            setWordLookupEnabled((v) => !v);
                          }}
                          aria-pressed={wordLookupEnabled}
                        >
                          {wordLookupEnabled
                            ? (learningMode === 'zh' ? '✨ 開啟' : '✨ ON')
                            : (learningMode === 'zh' ? '已關閉' : 'OFF')}
                        </button>
                      </div>
                    )}

                    {wordLookupEnabled && setWordLookupAutoSpeak && (
                      <div className="prefs-pop-row">
                        <span className="prefs-pop-label"><AudioLines size={14} /> {learningMode === 'zh' ? '點字自動讀音' : 'Click Audio'}</span>
                        <button
                          type="button"
                          className={`prefs-pop-chip ${wordLookupAutoSpeak ? 'is-active' : ''}`}
                          onClick={() => {
                            audioEngine.playHaptic('tap');
                            setWordLookupAutoSpeak((v) => !v);
                          }}
                          aria-pressed={wordLookupAutoSpeak}
                        >
                          {wordLookupAutoSpeak
                            ? (learningMode === 'zh' ? '🔊 開啟' : '🔊 ON')
                            : (learningMode === 'zh' ? '靜音' : 'Muted')}
                        </button>
                      </div>
                    )}

                    <div className="prefs-pop-divider" />

                    <button
                      type="button"
                      className="prefs-pop-action"
                      onClick={() => { setPrefsOpen(false); onOpenDailyQuests(); }}
                    >
                      <Target size={15} />
                      <span>{learningMode === 'zh' ? `每日挑戰 (${completedQuestsCount}/${dailyQuests.length})` : `Daily Quests (${completedQuestsCount}/${dailyQuests.length})`}</span>
                      <span className="prefs-pop-meta">Lv.{currentLevel}</span>
                    </button>

                    <button
                      type="button"
                      className="prefs-pop-action"
                      onClick={() => { setPrefsOpen(false); if (onOpenAudioDiagnostic) onOpenAudioDiagnostic(); }}
                    >
                      <AudioLines size={15} />
                      <span>{learningMode === 'zh' ? '音訊健康檢驗儀' : 'Audio Diagnostics'}</span>
                      <span className="prefs-pop-meta">4,005 音檔</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Row 2: Instant Learning Strip (Clean Single Row) */}
      <div className="desktop-categories-nav viet-quick-nav-strip" role="navigation" aria-label={learningMode === 'zh' ? '快速學習導覽' : 'Quick learning navigation'}>
        <div className="desktop-categories-content">
          {PRIMARY_STRIP_ITEMS.map(({ id, labelZh, labelEn, icon: Icon }) => {
            const isActive = activeTab === id;
            return (
              <button
                key={id}
                type="button"
                className={`nav-cat-btn ${isActive ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setActiveTab(id); }}
                aria-current={isActive ? 'page' : undefined}
              >
                <Icon size={15} strokeWidth={2.2} />
                <span className="nav-cat-label">{learningMode === 'zh' ? labelZh : labelEn}</span>
              </button>
            );
          })}

          {/* All Modules Mega-Dropdown Trigger */}
          <div className="nav-catalog-wrap" ref={catalogRef}>
            <button
              type="button"
              className={`nav-cat-btn nav-catalog-btn ${catalogOpen || (!isPrimaryTab && activeTab !== 'path') ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('selection'); setCatalogOpen(o => !o); setPrefsOpen(false); }}
              aria-expanded={catalogOpen}
            >
              <span>{learningMode === 'zh' ? '全部課程' : 'All Courses'}</span>
              <ChevronDown size={14} className={catalogOpen ? 'rotated' : ''} />
            </button>

            {catalogOpen && (
              <div className="nav-catalog-dropdown" role="menu">
                {NAV_GROUPS.filter(g => g.id !== 'dashboard').map(group => (
                  <div key={group.id} className="catalog-col">
                    <div className="catalog-col-title">{t(group.labelKey)}</div>
                    <div className="catalog-col-list">
                      {group.items.map(item => {
                        const ItemIcon = item.icon;
                        const active = activeTab === item.id;
                        return (
                          <button
                            key={item.id}
                            type="button"
                            className={`catalog-item-btn ${active ? 'active' : ''}`}
                            onClick={() => { audioEngine.playHaptic('selection'); setActiveTab(item.id); setCatalogOpen(false); }}
                          >
                            <ItemIcon size={15} />
                            <span>{t(item.labelKey)}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Contextual Sub-module bar: ONLY shown inside non-primary deep modules */}
      {activeTab !== 'path' && !isPrimaryTab && currentGroup && currentGroup.items.length > 1 && (
        <div className="subnav-modules-bar">
          <span className="subnav-group-label">
            {currentGroup.labelKey ? t(currentGroup.labelKey) : t('tabs.path')} <ChevronRight size={13} />
          </span>
          {currentGroup.items.map(item => {
            const Icon = item.icon;
            const isItemActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`subnav-item-chip ${isItemActive ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setActiveTab(item.id); }}
                role="tab"
                aria-selected={isItemActive}
              >
                <Icon size={14} />
                <span>{t(item.labelKey)}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Mobile Drawer Backdrop */}
      {menuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile Drawer Menu */}
      {menuOpen && (
        <div id="mobile-nav-drawer" className="mobile-nav-grouped-drawer">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">
              {learningMode === 'zh' ? '📚 全部學習模組與設定' : '📚 Courses & Settings'}
            </span>
            <button className="mobile-drawer-close" onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); }}>
              <X size={18} />
            </button>
          </div>

          <div className="mobile-drawer-settings-card">
            {/* Theme Row: Clean 2-mode Light / Dark */}
            <div className="drawer-setting-row">
              <span className="drawer-setting-label">
                {isDark ? <Moon size={14} /> : <Sun size={14} />} {learningMode === 'zh' ? '介面主題' : 'Theme'}
              </span>
              <div className="drawer-theme-pill-group">
                <button
                  className={`drawer-theme-pill ${!isDark ? 'active' : ''}`}
                  onClick={() => selectTheme('light')}
                >
                  <Sun size={13} /> {learningMode === 'zh' ? '亮色模式' : 'Light'}
                </button>
                <button
                  className={`drawer-theme-pill ${isDark ? 'active' : ''}`}
                  onClick={() => selectTheme('dark')}
                >
                  <Moon size={13} /> {learningMode === 'zh' ? '深色模式' : 'Dark'}
                </button>
              </div>
            </div>

            {/* Font Size Row */}
            <div className="drawer-setting-row">
              <span className="drawer-setting-label">
                <Type size={14} /> {learningMode === 'zh' ? '字級縮放' : 'Font Size'}
              </span>
              <div className="drawer-font-stepper">
                <button
                  className="drawer-font-stepper-btn"
                  onClick={() => stepFontSize(-1)}
                  disabled={fontSize === 'small'}
                  aria-label="縮小字體"
                >A-</button>
                <span className="drawer-font-stepper-val">{FONT_SIZE_LABELS[fontSize] || '100%'}</span>
                <button
                  className="drawer-font-stepper-btn"
                  onClick={() => stepFontSize(1)}
                  disabled={fontSize === 'xxlarge'}
                  aria-label="放大字體"
                >A+</button>
              </div>
            </div>

            {/* Accent & Speed Row */}
            <div className="drawer-setting-row">
              <button
                type="button"
                className="drawer-quick-toggle"
                onClick={() => {
                  audioEngine.playHaptic('selection');
                  setSelectedAccent(prev => prev === 'north' ? 'south' : 'north');
                }}
              >
                {selectedAccent === 'north' ? '🏛️ 河內音' : '🌴 西貢音'}
              </button>
              <button
                type="button"
                className="drawer-quick-toggle"
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  if (setSpeechRate) setSpeechRate(speechRate <= 0.85 ? 1.0 : 0.75);
                }}
              >
                {speechRate <= 0.85 ? '🐢 0.75x' : '🐰 1.0x'}
              </button>
              <button
                type="button"
                className="drawer-quick-toggle"
                onClick={() => toggleLearningMode()}
              >
                {learningMode === 'zh' ? '🌐 EN' : '🌐 中文'}
              </button>
            </div>
          </div>

          <button
            className="mobile-drawer-finder-btn"
            onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); onOpenChapterFinder(); }}
          >
            <Search size={16} />
            <span>{learningMode === 'zh' ? '全站搜尋 (單字、會話、歌曲)' : 'Search Site'}</span>
            <ChevronRight size={14} />
          </button>

          <button
            className="mobile-drawer-finder-btn"
            onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); if (onOpenBookmarks) onOpenBookmarks(); }}
          >
            <Star size={16} fill={bookmarkCount > 0 ? '#eab308' : 'none'} color="#eab308" />
            <span>{learningMode === 'zh' ? `個人生詞本 (${bookmarkCount})` : `Word Bank (${bookmarkCount})`}</span>
            <ChevronRight size={14} />
          </button>

          {NAV_GROUPS.map(group => (
            <div key={group.id} className="mobile-drawer-group-section">
              <div className="mobile-drawer-group-title">
                {group.labelKey ? t(group.labelKey) : t('tabs.path')}
              </div>
              <div className="mobile-drawer-grid">
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isItemActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      className={`mobile-drawer-item-btn ${isItemActive ? 'active' : ''}`}
                      onClick={() => { audioEngine.playHaptic('selection'); setActiveTab(item.id); setMenuOpen(false); }}
                    >
                      <Icon size={16} />
                      <span>{t(item.labelKey)}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ergonomic Mobile Bottom Navigation Bar */}
      <div className="mobile-bottom-nav" role="navigation" aria-label="行動端主要導航">
        <button
          className={`bottom-nav-item ${activeTab === 'path' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('path'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Map size={20} />
          <span>首頁</span>
          {activeTab === 'path' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${activeTab === 'ultra' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('ultra'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Flame size={20} />
          <span>母語特訓</span>
          {activeTab === 'ultra' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${activeTab === 'songs' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('songs'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Music2 size={20} />
          <span>聽音樂</span>
          {activeTab === 'songs' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${activeTab === 'listen' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('listen'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Headphones size={20} />
          <span>隨身聽</span>
          {activeTab === 'listen' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${menuOpen ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(prev => !prev); }}
        >
          <Menu size={20} />
          <span>全部</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
