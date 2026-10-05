import React, { useEffect, useState, useMemo } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpen, BookOpenText, UsersRound, BadgeCheck, BookMarked, Settings2, Star, Mic, Puzzle, Music, Zap, Brain, LifeBuoy, Award, Briefcase, ChevronRight, Search, Landmark
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import { audioEngine } from '../services/audioEngine';
import { NAV_GROUPS } from '../config/navigation';

const FONT_SIZES = ['small', 'normal', 'large', 'xlarge', 'xxlarge'];
const FONT_SIZE_LABELS = {
  small: '88%',
  normal: '100%',
  large: '114%',
  xlarge: '128%',
  xxlarge: '144%'
};

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
  onOpenAchievements,
  onOpenDailyQuests,
  onOpenChapterFinder,
  onOpenAudioDiagnostic
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const stepFontSize = (delta) => {
    audioEngine.playHaptic('selection');
    const currentIndex = FONT_SIZES.indexOf(fontSize);
    const validIdx = currentIndex === -1 ? 1 : currentIndex;
    const nextIndex = Math.max(0, Math.min(FONT_SIZES.length - 1, validIdx + delta));
    setFontSize(FONT_SIZES[nextIndex]);
  };

  const cycleTheme = () => {
    audioEngine.playHaptic('selection');
    setTheme(prev => {
      if (prev === 'light') return 'sepia';
      if (prev === 'sepia') return 'dark';
      return 'light';
    });
  };
  
  const { currentXpInLevel, requiredXpForNextLevel, progressPercent } = gamificationEngine.getLevelProgress(userStats.xp);
  const currentLevel = gamificationEngine.calculateLevel(userStats.xp);
  const shieldsCount = gamificationEngine.loadStreakShields();
  const dailyQuests = gamificationEngine.getDailyQuests();
  const completedQuestsCount = dailyQuests.filter(q => q.completed).length;

  const currentGroup = useMemo(() => {
    return NAV_GROUPS.find(g => g.items.some(item => item.id === activeTab)) || NAV_GROUPS[0];
  }, [activeTab]);

  const [selectedGroupId, setSelectedGroupId] = useState(currentGroup.id);

  useEffect(() => {
    setSelectedGroupId(currentGroup.id);
  }, [currentGroup.id]);

  useEffect(() => setMenuOpen(false), [activeTab]);

  const activeGroupObj = useMemo(() => {
    return NAV_GROUPS.find(g => g.id === selectedGroupId) || currentGroup;
  }, [selectedGroupId, currentGroup]);

  const handleSelectGroup = (group) => {
    audioEngine.playHaptic('selection');
    setSelectedGroupId(group.id);
    const hasActiveItem = group.items.some(it => it.id === activeTab);
    if (!hasActiveItem && group.items.length > 0) {
      setActiveTab(group.items[0].id);
    }
  };

  return (
    <header className="header-container">
      <nav className="navbar" aria-label={learningMode === 'zh' ? '主要導覽與學習設定' : 'Primary navigation and learning settings'}>
        <div className="nav-content">
          <div className="nav-brand-and-finder">
            {/* Brand Logo */}
            <button className="brand-logo" onClick={() => { audioEngine.playHaptic('tap'); setActiveTab('path'); }} aria-label={t('brandName')}>
              <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
              <span className="brand-copy">
                <span className="brand-title-line">
                  <strong>{t('brandName')}</strong>
                  <span className="brand-ver-badge">v2.6</span>
                </span>
                <small className="brand-tagline">{t('brandSub')}</small>
              </span>
            </button>

            {/* Desktop Chapter Quick Finder Button */}
            <button
              className="nav-chapter-finder-btn"
              onClick={onOpenChapterFinder}
              title={learningMode === 'zh' ? '快速搜尋全站 100+ 章節與課程 (快捷鍵: Ctrl+K)' : 'Search 100+ Chapters & Lessons (Ctrl+K)'}
            >
              <Search size={15} className="finder-search-icon" />
              <span className="finder-btn-text">{learningMode === 'zh' ? '全域查章節' : 'Search Chapters'}</span>
              <kbd className="finder-kbd-shortcut">Ctrl K</kbd>
            </button>
          </div>

          {/* Mobile Quick Action Buttons (Top Bar) */}
          <div className="nav-mobile-actions">
            <button
              className="mobile-finder-icon-btn"
              onClick={onOpenChapterFinder}
              title="搜尋章節"
              aria-label="搜尋章節"
            >
              <Search size={18} />
              <span>查章節</span>
            </button>

            <button
              className="mobile-xp-btn"
              onClick={onOpenAchievements}
              title="成就進度"
            >
              <Trophy size={14} /> {userStats.xp}
            </button>

            {/* Mobile Direct Font Resizing Stepper */}
            <div className="mobile-quick-font-stepper" aria-label="字級縮放">
              <button
                className="mobile-quick-font-btn"
                onClick={() => stepFontSize(-1)}
                disabled={fontSize === 'small'}
                title="縮小字體 (A-)"
                aria-label="縮小字體"
              >
                A-
              </button>
              <span className="mobile-quick-font-indicator" title={`字級: ${FONT_SIZE_LABELS[fontSize] || '100%'}`}>
                {fontSize === 'small' ? '小' : (fontSize === 'normal' ? '中' : (fontSize === 'large' ? '大' : (fontSize === 'xlarge' ? '特' : '超')))}
              </span>
              <button
                className="mobile-quick-font-btn"
                onClick={() => stepFontSize(1)}
                disabled={fontSize === 'xxlarge'}
                title="放大字體 (A+)"
                aria-label="放大字體"
              >
                A+
              </button>
            </div>

            <button
              className="icon-control"
              onClick={cycleTheme}
              aria-label={theme === 'sepia' ? t('sepiaTheme') : (theme === 'light' ? t('lightTheme') : t('darkTheme'))}
              title={theme === 'sepia' ? t('sepiaTheme') : (theme === 'light' ? t('lightTheme') : t('darkTheme'))}
            >
              {theme === 'light' && <Sun size={18} />}
              {theme === 'sepia' && <BookOpen size={18} />}
              {theme === 'dark' && <Moon size={18} />}
            </button>

            <button
              className="icon-control"
              onClick={() => {
                audioEngine.playHaptic('tap');
                if (onOpenAudioDiagnostic) onOpenAudioDiagnostic();
              }}
              title={learningMode === 'zh' ? '開啟音訊健康檢驗儀' : 'Audio Diagnostics'}
              aria-label="開啟音訊健康檢驗儀"
            >
              <AudioLines size={18} />
            </button>

            <button
              className="icon-control menu-toggle"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="header-settings"
              aria-label={menuOpen ? '關閉設定選單' : '開啟設定選單'}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Desktop Right Side Control Hub */}
          <div id="header-settings" className={`header-settings ${menuOpen ? 'is-open' : ''}`}>
            {/* Language Subsystem Switch */}
            <div className="track-badge-container">
              <button
                className="subsystem-switch-btn"
                onClick={() => toggleLearningMode()}
                title={learningMode === 'zh' ? '切換為英文介面 (English Mode)' : '切換為中文介面 (Chinese Mode)'}
              >
                <Globe size={15} />
                <span className="mode-text">{learningMode === 'zh' ? '中文' : 'English'}</span>
                <span className="switch-tag">{learningMode === 'zh' ? 'EN' : '中文'}</span>
              </button>
            </div>

            <div className="controls-group">
              {/* Consolidated Master Learner Hub Pill */}
              <button
                className="learner-hub-pill"
                onClick={onOpenAchievements}
                title={learningMode === 'zh' ? '查看學習進度、連續天數與勳章展示' : 'View Learning Stats & Achievements'}
              >
                <span className="hub-stat-item quest-stat" onClick={(e) => { e.stopPropagation(); onOpenDailyQuests(); }}>
                  🎯 {completedQuestsCount}/{dailyQuests.length}
                </span>
                <span className="hub-stat-divider quest-divider">•</span>
                <span className="hub-stat-item level-stat">
                  <Star size={13} /> Lv.{currentLevel}
                </span>
                <span className="hub-stat-divider level-divider">•</span>
                <span className="hub-stat-item streak-stat">
                  <Flame size={13} className="streak-flame-animated" /> {userStats.streak}天
                </span>
                <span className="hub-stat-divider streak-divider">•</span>
                <span className="hub-stat-item xp-stat">
                  <Trophy size={13} /> {userStats.xp}
                </span>
              </button>

              {/* Accent Quick Switcher (North vs South) */}
              <button
                className={`control-btn accent-toggle-btn accent-${selectedAccent}`}
                onClick={() => {
                  audioEngine.playHaptic('selection');
                  setSelectedAccent(prev => prev === 'north' ? 'south' : 'north');
                }}
                title={learningMode === 'zh'
                  ? (selectedAccent === 'north' ? '當前口音：河內標準音 (北越)。點擊切換為西貢商業音 (南越)' : '當前口音：西貢商業音 (南越)。點擊切換為河內標準音 (北越)')
                  : (selectedAccent === 'north' ? 'Accent: Hanoi (North). Click for Saigon (South)' : 'Accent: Saigon (South). Click for Hanoi (North)')}
                aria-label={selectedAccent === 'north' ? '口音：河內標準音' : '口音：西貢商業音'}
              >
                <span className="accent-icon">{selectedAccent === 'north' ? '🏛️' : '🌴'}</span>
                <span className="accent-label-full">{selectedAccent === 'north' ? '河內音' : '西貢音'}</span>
                <span className="accent-label-short">{selectedAccent === 'north' ? '北' : '南'}</span>
              </button>

              {/* Speech Speed Switcher (1.0x vs 0.75x) */}
              <button
                className={`control-btn speed-toggle-btn ${speechRate <= 0.85 ? 'is-slow' : 'is-normal'}`}
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  if (setSpeechRate) {
                    setSpeechRate(speechRate <= 0.85 ? 1.0 : 0.75);
                  }
                }}
                title={learningMode === 'zh' ? '點擊切換正常語速 (1.0x) 或慢速精聽 (0.75x)' : 'Toggle standard (1.0x) or slow study speed (0.75x)'}
                aria-label={speechRate <= 0.85 ? '慢速精聽 0.75x' : '標準語速 1.0x'}
              >
                <span className="speed-icon">{speechRate <= 0.85 ? '🐢' : '🐰'}</span>
                <span className="speed-label">{speechRate <= 0.85 ? '0.75x' : '1.0x'}</span>
              </button>

              {/* Audio Diagnostic Studio Trigger Button */}
              <button
                className="control-btn audio-diag-toggle-btn"
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  if (onOpenAudioDiagnostic) onOpenAudioDiagnostic();
                }}
                title={learningMode === 'zh' ? '開啟音訊引擎健康檢驗儀與發音沙盒 (4,005 完整音庫)' : 'Open Audio Diagnostic Studio (4,005 audio files)'}
                aria-label="開啟音訊健康檢驗儀"
              >
                <AudioLines size={14} />
                <span className="audio-diag-label">{learningMode === 'zh' ? '檢音儀' : 'Lab'}</span>
              </button>

              {/* Font Size Selector (Adaptive Stepper + Direct Options) */}
              <div className="font-size-selector" aria-label={t('fontSize')}>
                <button
                  className="size-option-btn stepper-btn"
                  onClick={() => stepFontSize(-1)}
                  disabled={fontSize === 'small'}
                  title="縮小字體 (A-)"
                  aria-label="縮小字體"
                >
                  A-
                </button>
                <div className="font-size-direct-list">
                  {FONT_SIZES.map((size) => (
                    <button
                      key={size}
                      className={`size-option-btn ${fontSize === size ? 'active' : ''}`}
                      onClick={() => { audioEngine.playHaptic('selection'); setFontSize(size); }}
                      aria-pressed={fontSize === size}
                      title={FONT_SIZE_LABELS[size]}
                    >
                      {size === 'small' ? '小' : (size === 'normal' ? '中' : (size === 'large' ? '大' : (size === 'xlarge' ? '特' : '超')))}
                    </button>
                  ))}
                </div>
                <span className="font-size-compact-indicator" title={`當前字級: ${FONT_SIZE_LABELS[fontSize] || '100%'}`}>
                  {fontSize === 'small' ? '小' : (fontSize === 'normal' ? '中' : (fontSize === 'large' ? '大' : (fontSize === 'xlarge' ? '特' : '超')))}
                </span>
                <button
                  className="size-option-btn stepper-btn"
                  onClick={() => stepFontSize(1)}
                  disabled={fontSize === 'xxlarge'}
                  title="放大字體 (A+)"
                  aria-label="放大字體"
                >
                  A+
                </button>
              </div>

              {/* Theme Toggle (3-state: Light / Sepia / Dark) */}
              <button
                className={`control-btn theme-toggle-btn theme-${theme}`}
                onClick={cycleTheme}
                title={theme === 'sepia' ? t('sepiaTheme') : (theme === 'light' ? t('lightTheme') : t('darkTheme'))}
                aria-label={theme === 'sepia' ? t('sepiaTheme') : (theme === 'light' ? t('lightTheme') : t('darkTheme'))}
              >
                {theme === 'light' && <Sun size={15} />}
                {theme === 'sepia' && <BookOpen size={15} />}
                {theme === 'dark' && <Moon size={15} />}
                <span className="theme-toggle-label">{theme === 'sepia' ? t('sepiaTheme') : (theme === 'light' ? t('lightTheme') : t('darkTheme'))}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Row 2: Desktop Categories Navigation Bar */}
      <div className="desktop-categories-nav" role="tablist" aria-label={learningMode === 'zh' ? '分類導覽' : 'Category navigation'}>
        <div className="desktop-categories-content">
          {NAV_GROUPS.map(group => {
            const isGroupActive = activeGroupObj.id === group.id;
            const groupLabel = group.labelKey ? t(group.labelKey) : t('tabs.path');
            const Icon = group.items[0]?.icon || Map;
            return (
              <button
                key={group.id}
                className={`nav-cat-btn ${isGroupActive ? 'active' : ''}`}
                onClick={() => handleSelectGroup(group)}
                role="tab"
                aria-selected={isGroupActive}
                title={groupLabel}
              >
                <Icon size={15} strokeWidth={2.2} />
                <span className="nav-cat-label">{groupLabel}</span>
                {group.items.length > 1 && (
                  <span className="cat-counter-badge">
                    {group.items.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Subnav Module Bar: Displays Sub-items of Active Group */}
      {activeGroupObj && activeGroupObj.items.length > 1 && (
        <div className="subnav-modules-bar">
          <span className="subnav-group-label">
            {activeGroupObj.labelKey ? t(activeGroupObj.labelKey) : t('tabs.path')} <ChevronRight size={13} />
          </span>
          {activeGroupObj.items.map(item => {
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

      {/* Mobile Drawer Backdrop overlay */}
      {menuOpen && (
        <div className="mobile-drawer-backdrop" onClick={() => setMenuOpen(false)} aria-hidden="true" />
      )}

      {/* Mobile Drawer Menu Organized by Groups */}
      {menuOpen && (
        <div className="mobile-nav-grouped-drawer">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">
              {learningMode === 'zh' ? '📚 全站模組與設定' : '📚 Modules & Settings'}
            </span>
            <button className="mobile-drawer-close" onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); }}>
              <X size={18} />
            </button>
          </div>

          {/* Mobile Reading & Display Settings Card */}
          <div className="mobile-drawer-settings-card">
            {/* Theme Row */}
            <div className="drawer-setting-row">
              <span className="drawer-setting-label">
                <Sun size={14} /> {learningMode === 'zh' ? '閱讀主題' : 'Theme'}
              </span>
              <div className="drawer-theme-pill-group">
                <button
                  className={`drawer-theme-pill ${theme === 'light' ? 'active' : ''}`}
                  onClick={() => { audioEngine.playHaptic('selection'); setTheme('light'); }}
                >
                  <Sun size={12} /> {learningMode === 'zh' ? '清朗' : 'Light'}
                </button>
                <button
                  className={`drawer-theme-pill ${theme === 'sepia' ? 'active' : ''}`}
                  onClick={() => { audioEngine.playHaptic('selection'); setTheme('sepia'); }}
                >
                  <BookOpen size={12} /> {learningMode === 'zh' ? '護眼' : 'Sepia'}
                </button>
                <button
                  className={`drawer-theme-pill ${theme === 'dark' ? 'active' : ''}`}
                  onClick={() => { audioEngine.playHaptic('selection'); setTheme('dark'); }}
                >
                  <Moon size={12} /> {learningMode === 'zh' ? '曜石' : 'Dark'}
                </button>
              </div>
            </div>

            {/* Font Size Stepper Row */}
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
                >
                  A-
                </button>
                <span className="drawer-font-stepper-val">
                  {FONT_SIZE_LABELS[fontSize] || '100%'}
                </span>
                <button
                  className="drawer-font-stepper-btn"
                  onClick={() => stepFontSize(1)}
                  disabled={fontSize === 'xxlarge'}
                  aria-label="放大字體"
                >
                  A+
                </button>
              </div>
            </div>

            {/* Accent & Speed Row */}
            <div className="drawer-setting-row" style={{ marginTop: '0.2rem' }}>
              <button
                onClick={() => {
                  audioEngine.playHaptic('selection');
                  setSelectedAccent(prev => prev === 'north' ? 'south' : 'north');
                }}
                style={{
                  flex: 1,
                  padding: '0.45rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: selectedAccent === 'north' ? 'rgba(59, 130, 246, 0.12)' : 'rgba(16, 185, 129, 0.12)',
                  color: selectedAccent === 'north' ? '#3b82f6' : '#10b981',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem',
                  cursor: 'pointer'
                }}
              >
                <span>{selectedAccent === 'north' ? '🏛️ 河內音' : '🌴 西貢音'}</span>
              </button>

              <button
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  if (setSpeechRate) {
                    setSpeechRate(speechRate <= 0.85 ? 1.0 : 0.75);
                  }
                }}
                style={{
                  flex: 1,
                  padding: '0.45rem',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid var(--border-color)',
                  background: speechRate <= 0.85 ? 'rgba(245, 158, 11, 0.14)' : 'var(--bg-subtle)',
                  color: speechRate <= 0.85 ? 'var(--brand-gold)' : 'var(--text-secondary)',
                  fontWeight: 800,
                  fontSize: '0.8rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.3rem',
                  cursor: 'pointer'
                }}
              >
                <span>{speechRate <= 0.85 ? '🐢 0.75x' : '🐰 1.0x'}</span>
              </button>
            </div>
          </div>

          {/* Quick Chapter Finder Trigger inside drawer */}
          <button
            className="mobile-drawer-finder-btn"
            onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); onOpenChapterFinder(); }}
          >
            <Search size={16} />
            <span>{learningMode === 'zh' ? '🔍 開啟全域章節速查盤 (100+ 章節)' : '🔍 Open Chapter Finder (100+ Lessons)'}</span>
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

      {/* Ergonomic Mobile Bottom Navigation Bar (< 768px) */}
      <div className="mobile-bottom-nav" role="navigation" aria-label="行動端主要導航">
        <button
          className={`bottom-nav-item ${activeTab === 'path' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('path'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Map size={20} />
          <span>學習首頁</span>
          {activeTab === 'path' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className="bottom-nav-item finder-trigger-bottom"
          onClick={() => { audioEngine.playHaptic('tap'); onOpenChapterFinder(); }}
        >
          <div className="bottom-finder-icon-wrap">
            <Search size={20} />
          </div>
          <span>查章節</span>
        </button>

        <button
          className={`bottom-nav-item ${activeTab === 'macropol' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('macropol'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Landmark size={20} />
          <span>越南政經</span>
          {activeTab === 'macropol' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${activeTab === 'business' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('selection'); setActiveTab('business'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
        >
          <Briefcase size={20} />
          <span>商務旗艦</span>
          {activeTab === 'business' && <span className="bottom-nav-indicator" />}
        </button>

        <button
          className={`bottom-nav-item ${menuOpen ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(prev => !prev); }}
        >
          <Menu size={20} />
          <span>全部目錄</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
