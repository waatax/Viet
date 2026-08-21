import React, { useEffect, useState, useRef } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Volume2, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked, ChevronDown, Settings2, Star, Mic, Puzzle, Music, Zap, Brain, LifeBuoy, Award
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
  onOpenAchievements
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { currentXpInLevel, requiredXpForNextLevel, progressPercent } = gamificationEngine.getLevelProgress(userStats.xp);
  const currentLevel = gamificationEngine.calculateLevel(userStats.xp);

  useEffect(() => setMenuOpen(false), [activeTab]);

  const renderNavItems = () => (
    <>
      {NAV_GROUPS.flatMap(group => 
        group.items.map(item => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              className={`tab-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
              role="tab"
              aria-selected={activeTab === item.id}
              title={group.labelKey ? `${t(group.labelKey)} - ${t(item.labelKey)}` : t(item.labelKey)}
            >
              <Icon size={17} strokeWidth={2} aria-hidden="true" />
              <span>{t(item.labelKey)}</span>
            </button>
          );
        })
      )}
    </>
  );

  return (
    <header className="header-container">
      <nav className="navbar" aria-label={learningMode === 'zh' ? '主要導覽與學習設定' : 'Primary navigation and learning settings'}>
        <div className="nav-content">
          <div className="nav-brand-and-modules">
            <button className="brand-logo" onClick={() => setActiveTab('path')} aria-label={t('brandName')}>
              <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
              <span className="brand-copy">
                <strong>{t('brandName')}</strong>
                <small>{t('brandSub')}</small>
              </span>
            </button>

            {/* Desktop Top Navigation Bar (Directly to the right of Brand Logo) */}
            <div className="desktop-nav-modules" role="tablist" aria-label={learningMode === 'zh' ? '學習模組導覽' : 'Learning modules navigation'}>
              {renderNavItems()}
            </div>
          </div>

          <div className="nav-mobile-actions">
            <button
              className="mobile-xp-btn"
              onClick={onOpenAchievements}
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

      {/* Mobile Bottom Navigation Bar (Visible only on mobile screens) */}
      <div className={`tabs-navigation mobile-only-tabs ${menuOpen ? 'settings-open' : ''}`}>
        <div className="tabs-wrapper" role="tablist" aria-label={learningMode === 'zh' ? '學習模組' : 'Learning modules'}>
          {renderNavItems()}
        </div>
      </div>
    </header>
  );
};
