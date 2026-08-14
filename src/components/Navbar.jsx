import React from 'react';
import { Sun, Moon, Type, Flame, Trophy, Globe, Compass, Volume2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar = ({ 
  theme, 
  setTheme, 
  fontSize, 
  setFontSize, 
  activeTab, 
  setActiveTab,
  userStats,
  selectedAccent,
  setSelectedAccent
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    { id: 'path', label: t('tabs.path') },
    { id: 'alphabet', label: t('tabs.alphabet') },
    { id: 'accent', label: t('tabs.accent') },
    { id: 'shopping', label: t('tabs.shopping') },
    { id: 'conversation', label: t('tabs.conversation') },
    { id: 'phrases', label: t('tabs.phrases') },
    { id: 'flashcards', label: t('tabs.flashcards') },
    { id: 'grammar', label: t('tabs.grammar') },
    { id: 'hanviet', label: t('tabs.hanviet') },
    { id: 'pronoun', label: t('tabs.pronoun') },
    { id: 'quiz', label: t('tabs.quiz') }
  ];

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="nav-content">
          {/* Logo & Brand */}
          <div className="brand-logo" onClick={() => setActiveTab('path')} style={{ cursor: 'pointer' }}>
            <span className="flag-badge">🇻🇳 VIỆT</span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 900, letterSpacing: '0.5px' }}>{t('brandName')}</span>
              <span style={{ fontSize: '0.68em', color: 'var(--brand-gold)', opacity: 0.95, fontWeight: 700 }}>
                {t('brandSub')}
              </span>
            </div>
          </div>

          {/* Subsystem & Track Badge */}
          <div className="track-badge-container">
            <button 
              className="subsystem-switch-btn"
              onClick={toggleLearningMode}
              title={learningMode === 'zh' ? 'Switch to English learning track' : '切換至中文（漢越音）學習模式'}
            >
              <Globe size={15} color="var(--brand-gold)" />
              <span className="mode-text">
                {learningMode === 'zh' ? '🇹🇼 中文學越文 (含漢越音)' : '🌐 English Track'}
              </span>
              <span className="switch-tag">
                {learningMode === 'zh' ? '切換 EN' : 'Switch ZH'}
              </span>
            </button>

            {/* Accent Selector (North vs South) */}
            <div className="accent-quick-toggle">
              <Volume2 size={14} color="var(--text-muted)" />
              <button 
                className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('north')}
                title="河內標準發音"
              >
                {t('northAccent')}
              </button>
              <button 
                className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('south')}
                title="胡志明市商業發音"
              >
                {t('southAccent')}
              </button>
            </div>
          </div>

          {/* User Progress Stats & Control Center */}
          <div className="controls-group">
            {/* Gamification Stats */}
            <div className="control-btn stat-pill" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }} title="連續學習天數">
              <Flame size={15} color="var(--brand-primary)" />
              <span>{userStats.streak} {t('days')}</span>
            </div>

            <div className="control-btn stat-pill" style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }} title="獲得學習經驗值">
              <Trophy size={15} color="var(--brand-gold)" />
              <span>{userStats.xp} {t('xp')}</span>
            </div>

            {/* Font Size Adjuster Control */}
            <div className="font-size-selector" title={t('fontSize')}>
              <Type size={14} style={{ margin: 'auto 0.2rem', color: 'var(--text-muted)' }} />
              <button 
                className={`size-option-btn ${fontSize === 'small' ? 'active' : ''}`}
                onClick={() => setFontSize('small')}
              >
                {t('sizeSmall')}
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'normal' ? 'active' : ''}`}
                onClick={() => setFontSize('normal')}
              >
                {t('sizeNormal')}
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
              >
                {t('sizeLarge')}
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
                onClick={() => setFontSize('xlarge')}
              >
                {t('sizeXLarge')}
              </button>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button className="control-btn theme-toggle-btn" onClick={toggleTheme} title="切換亮面/暗面模式">
              {theme === 'light' ? (
                <>
                  <Moon size={15} color="var(--brand-purple)" />
                  <span className="theme-label">{t('darkTheme')}</span>
                </>
              ) : (
                <>
                  <Sun size={15} color="var(--brand-gold)" />
                  <span className="theme-label">{t('lightTheme')}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Module Navigation Tabs (10 Modules) */}
      <div className="tabs-navigation">
        <div className="tabs-wrapper">
          {navItems.map(item => (
            <button
              key={item.id}
              className={`tab-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
