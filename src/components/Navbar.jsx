import React, { useEffect, useState, useMemo } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked, Settings2, Star, Mic, Puzzle, Music, Zap, Brain, LifeBuoy, Award, Briefcase, ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
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
  onOpenDailyQuests
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
            <button className="brand-logo" onClick={() => setActiveTab('path')} aria-label={t('brandName')}>
              <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
              <span className="brand-copy">
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                  <strong>{t('brandName')}</strong>
                  <span style={{ fontSize: '0.65rem', fontWeight: 800, background: 'rgba(234, 179, 8, 0.18)', color: 'var(--brand-gold)', border: '1px solid var(--brand-gold)', borderRadius: 'var(--radius-full)', padding: '0.05rem 0.4rem', lineHeight: 1.3 }}>v2.6</span>
                </span>
                <small>{t('brandSub')}</small>
              </span>
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
                      <span style={{
                        fontSize: '0.7rem',
                        opacity: 0.8,
                        background: isGroupActive ? 'rgba(255,255,255,0.25)' : 'var(--bg-card-hover)',
                        padding: '0.05rem 0.35rem',
                        borderRadius: 'var(--radius-full)',
                        marginLeft: '0.1rem'
                      }}>
                        {group.items.length}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="nav-mobile-actions">
            <button
              className="mobile-xp-btn"
              onClick={onOpenDailyQuests}
              title="每日任務"
              style={{
                background: 'rgba(239, 68, 68, 0.15)',
                border: '1px solid var(--brand-primary)',
                borderRadius: 'var(--radius-full)',
                padding: '0.3rem 0.6rem',
                color: 'var(--brand-primary)',
                fontWeight: 800,
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                cursor: 'pointer'
              }}
            >
              🎯 {completedQuestsCount}/{dailyQuests.length}
            </button>
            <button
              className="mobile-xp-btn"
              onClick={onOpenAchievements}
              title="成就展示"
              style={{
                background: 'rgba(234,179,8,0.15)',
                border: '1px solid var(--brand-gold)',
                borderRadius: 'var(--radius-full)',
                padding: '0.3rem 0.65rem',
                color: 'var(--brand-gold)',
                fontWeight: 800,
                fontSize: '0.82rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.3rem',
                cursor: 'pointer'
              }}
            >
              <Trophy size={14} /> {userStats.xp}
            </button>
            <button
              className="icon-control"
              onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}
              aria-label={theme === 'light' ? t('darkTheme') : t('lightTheme')}
            >
              {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
            </button>
            <button
              className="icon-control menu-toggle"
              onClick={() => setMenuOpen(open => !open)}
              aria-expanded={menuOpen}
              aria-controls="header-settings"
              aria-label={menuOpen ? '關閉設定選單' : '開啟設定選單'}
            >
              {menuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>

          <div id="header-settings" className={`header-settings ${menuOpen ? 'is-open' : ''}`}>
            <div className="track-badge-container">
              <button className="subsystem-switch-btn" onClick={() => toggleLearningMode()}>
                <Globe size={16} />
                <span className="mode-text">{learningMode === 'zh' ? '中文學越文' : 'English Track'}</span>
                <span className="switch-tag">{learningMode === 'zh' ? 'EN' : '中文'}</span>
              </button>
            </div>

            <div className="controls-group">
              <button
                className="control-btn stat-pill"
                onClick={onOpenDailyQuests}
                title={learningMode === 'zh' ? '查看每日任務與打卡防護罩' : 'View Daily Quests & Streak Shields'}
                style={{
                  cursor: 'pointer',
                  background: 'rgba(239, 68, 68, 0.12)',
                  border: '1px solid var(--brand-primary)',
                  color: 'var(--brand-primary)',
                  fontWeight: 800
                }}
              >
                🎯 任務 {completedQuestsCount}/{dailyQuests.length}
                <span style={{ fontSize: '0.78rem', color: 'var(--brand-gold)', marginLeft: '0.2rem' }}>
                  🛡️{shieldsCount}
                </span>
              </button>

              <button
                className="control-btn stat-pill level-pill"
                onClick={onOpenAchievements}
                title={learningMode === 'zh' ? '查看成就與等級進度' : 'View Achievements & Level'}
                style={{ cursor: 'pointer', border: 'none' }}
              >
                <Star size={16} /> Lv. {currentLevel}
              </button>
              <span className="control-btn stat-pill streak-pill" title="連續學習天數"><Flame size={16} /> {userStats.streak} {t('days')}</span>
              <button
                className="stat-pill xp-pill-container"
                onClick={onOpenAchievements}
                title={learningMode === 'zh' ? '查看成就勳章展示櫃' : 'Open Achievements Showcase'}
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-accent)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', cursor: 'pointer' }}
              >
                <span className="xp-pill-text" title="累積學習經驗值" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85em', fontWeight: 'bold', color: 'var(--brand-gold)' }}>
                  <Trophy size={14} /> {userStats.xp} {t('xp')}
                </span>
                <div className="xp-progress-bar" style={{ width: '100%', height: '4px', background: 'var(--bg-main)', borderRadius: '2px', marginTop: '2px', overflow: 'hidden' }}>
                  <div className="xp-progress-fill" style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--brand-gold)', transition: 'width 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)', animation: 'shimmer 2s infinite' }} />
                  </div>
                </div>
              </button>
              <div className="font-size-selector" aria-label={t('fontSize')}>
                <Type size={14} aria-hidden="true" />
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
              <button className="control-btn theme-toggle-btn" onClick={() => setTheme(prev => (prev === 'light' ? 'dark' : 'light'))}>
                {theme === 'light' ? <Moon size={17} /> : <Sun size={17} />}
                <span>{theme === 'light' ? t('darkTheme') : t('lightTheme')}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Subnav Module Bar: Displays Sub-items of Active Group */}
      {activeGroupObj && activeGroupObj.items.length > 0 && (
        <div className="subnav-modules-bar">
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem', paddingRight: '0.4rem', borderRight: '1px solid var(--border-color)' }}>
            {activeGroupObj.labelKey ? t(activeGroupObj.labelKey) : t('tabs.path')} <ChevronRight size={13} />
          </span>
          {activeGroupObj.items.map(item => {
            const Icon = item.icon;
            const isItemActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                className={`subnav-item-chip ${isItemActive ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
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

      {/* Mobile Menu Drawer Organized by Groups */}
      {menuOpen && (
        <div className="mobile-nav-grouped-drawer" style={{
          background: 'var(--bg-card)',
          borderBottom: '2px solid var(--border-color)',
          padding: '1rem',
          maxHeight: '75vh',
          overflowY: 'auto'
        }}>
          {NAV_GROUPS.map(group => (
            <div key={group.id} style={{ marginBottom: '1.2rem' }}>
              <div style={{
                fontSize: '0.85rem',
                fontWeight: 800,
                color: 'var(--brand-primary)',
                marginBottom: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                {group.labelKey ? t(group.labelKey) : t('tabs.path')}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.5rem' }}>
                {group.items.map(item => {
                  const Icon = item.icon;
                  const isItemActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => { setActiveTab(item.id); setMenuOpen(false); }}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.45rem',
                        padding: '0.6rem 0.8rem',
                        borderRadius: 'var(--radius-sm)',
                        border: isItemActive ? '1.5px solid var(--brand-accent)' : '1px solid var(--border-color)',
                        background: isItemActive ? 'var(--bg-accent)' : 'var(--bg-main)',
                        color: isItemActive ? 'var(--brand-accent)' : 'var(--text-primary)',
                        fontWeight: isItemActive ? 800 : 600,
                        fontSize: '0.88rem',
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
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
    </header>
  );
};

export default Navbar;
