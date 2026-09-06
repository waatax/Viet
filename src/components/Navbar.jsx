import React, { useEffect, useState, useMemo } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked, Settings2, Star, Mic, Puzzle, Music, Zap, Brain, LifeBuoy, Award, Briefcase, ChevronRight, Search, Landmark
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import { audioEngine } from '../services/audioEngine';
import { NAV_GROUPS } from '../config/navigation';

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
  onOpenAchievements,
  onOpenDailyQuests,
  onOpenChapterFinder
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  
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
          <div className="nav-brand-and-modules">
            {/* Brand Logo */}
            <button className="brand-logo" onClick={() => { audioEngine.playHaptic('tap'); setActiveTab('path'); }} aria-label={t('brandName')}>
              <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
              <span className="brand-copy">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <strong>{t('brandName')}</strong>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(234, 179, 8, 0.18)', color: 'var(--brand-gold)', border: '1px solid var(--brand-gold)', borderRadius: 'var(--radius-full)', padding: '0.05rem 0.4rem', lineHeight: 1.3 }}>v2.6</span>
                </span>
                <small>{t('brandSub')}</small>
              </span>
            </button>

            {/* Desktop Chapter Quick Finder Button */}
            <button
              className="nav-chapter-finder-btn"
              onClick={onOpenChapterFinder}
              title={learningMode === 'zh' ? '快速搜尋全站 100+ 章節與課程 (快捷鍵: Ctrl+K)' : 'Search 100+ Chapters & Lessons (Ctrl+K)'}
            >
              <Search size={15} className="finder-search-icon" />
              <span>{learningMode === 'zh' ? '全域查章節' : 'Search Chapters'}</span>
              <kbd className="finder-kbd-shortcut">Ctrl K</kbd>
            </button>

            {/* Desktop Top Level Category Group Navigation */}
            <div className="nav-categories-bar" role="tablist" aria-label={learningMode === 'zh' ? '分類導覽' : 'Category navigation'}>
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
                    <span>{groupLabel}</span>
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

            <button
              className="icon-control"
              onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? t('darkTheme') : t('lightTheme')}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
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
              <button className="subsystem-switch-btn" onClick={() => toggleLearningMode()}>
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
                <span className="hub-stat-divider">•</span>
                <span className="hub-stat-item level-stat">
                  <Star size={13} /> Lv.{currentLevel}
                </span>
                <span className="hub-stat-divider">•</span>
                <span className="hub-stat-item streak-stat">
                  <Flame size={13} /> {userStats.streak}天
                </span>
                <span className="hub-stat-divider">•</span>
                <span className="hub-stat-item xp-stat">
                  <Trophy size={13} /> {userStats.xp}
                </span>
              </button>

              {/* Font Size Selector */}
              <div className="font-size-selector" aria-label={t('fontSize')}>
                <Type size={13} aria-hidden="true" />
                {['small', 'normal', 'large', 'xlarge'].map((size, index) => (
                  <button
                    key={size}
                    className={`size-option-btn ${fontSize === size ? 'active' : ''}`}
                    onClick={() => setFontSize(size)}
                    aria-pressed={fontSize === size}
                  >
                    {t(['sizeSmall', 'sizeNormal', 'sizeLarge', 'sizeXLarge'][index])}
                  </button>
                ))}
              </div>

              {/* Theme Toggle */}
              <button
                className="control-btn theme-toggle-btn"
                onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
                title={theme === 'light' ? t('darkTheme') : t('lightTheme')}
              >
                {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
                <span>{theme === 'light' ? t('darkTheme') : t('lightTheme')}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

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

      {/* Mobile Drawer Menu Organized by Groups */}
      {menuOpen && (
        <div className="mobile-nav-grouped-drawer">
          <div className="mobile-drawer-header">
            <span className="mobile-drawer-title">
              {learningMode === 'zh' ? '📚 全站模組選單' : '📚 All Learning Modules'}
            </span>
            <button className="mobile-drawer-close" onClick={() => { audioEngine.playHaptic('tap'); setMenuOpen(false); }}>
              <X size={18} />
            </button>
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
