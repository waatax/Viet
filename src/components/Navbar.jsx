import React from 'react';
import { Sun, Moon, Type, Flame, Trophy, Globe, Compass, Volume2, Sparkles } from 'lucide-react';
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
    { id: 'path', label: t('tabs.path'), num: '0' },
    { id: 'alphabet', label: t('tabs.alphabet'), num: '1' },
    { id: 'accent', label: t('tabs.accent'), num: '2' },
    { id: 'shopping', label: t('tabs.shopping'), num: '3' },
    { id: 'conversation', label: t('tabs.conversation'), num: '4' },
    { id: 'phrases', label: t('tabs.phrases'), num: '5' },
    { id: 'flashcards', label: t('tabs.flashcards'), num: '6' },
    { id: 'grammar', label: t('tabs.grammar'), num: '7' },
    { id: 'hanviet', label: t('tabs.hanviet'), num: '8' },
    { id: 'pronoun', label: t('tabs.pronoun'), num: '9' },
    { id: 'quiz', label: t('tabs.quiz'), num: '10' }
  ];

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="nav-content">
          {/* Logo & Brand */}
          <div className="brand-logo" onClick={() => setActiveTab('path')} style={{ cursor: 'pointer' }}>
            <span className="flag-badge">
              <span style={{ fontSize: '1.1em' }}>🇻🇳</span> VIỆT
            </span>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontWeight: 900, letterSpacing: '-0.01em', lineHeight: 1.1 }}>{t('brandName')}</span>
              <span style={{ fontSize: '0.68em', color: 'var(--brand-gold)', opacity: 0.95, fontWeight: 700, letterSpacing: '0.3px' }}>
                {t('brandSub')}
              </span>
            </div>
          </div>

          {/* Subsystem & Track Badge */}
          <div className="track-badge-container">
            <button 
              className="subsystem-switch-btn"
              onClick={toggleLearningMode}
              title={learningMode === 'zh' ? 'Switch to English global learning track' : '切換至中文（台越對照・漢越音）模式'}
            >
              <Globe size={15} color="var(--brand-gold)" />
              <span className="mode-text">
                {learningMode === 'zh' ? '🇹🇼 中文學越文 (漢越音軌道)' : '🌐 English Track'}
              </span>
              <span className="switch-tag">
                {learningMode === 'zh' ? '切換 EN' : 'Switch ZH'}
              </span>
            </button>

            {/* Accent Selector (North vs South) */}
            <div className="accent-quick-toggle">
              <Volume2 size={13} color="var(--text-muted)" style={{ marginLeft: '0.2rem' }} />
              <button 
                className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('north')}
                title="河內標準發音 (Giọng Bắc)"
              >
                🏛️ {t('northAccent')}
              </button>
              <button 
                className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('south')}
                title="胡志明市商業發音 (Giọng Nam)"
              >
                🌴 {t('southAccent')}
              </button>
            </div>
          </div>

          {/* User Progress Stats & Control Center */}
          <div className="controls-group">
            {/* Gamification Stats */}
            <div className="control-btn stat-pill" style={{ borderColor: 'rgba(239, 68, 68, 0.35)' }} title="連續學習天數">
              <Flame size={16} color="var(--brand-primary)" className="streak-flame-animated" />
              <span>{userStats.streak} {t('days')}</span>
            </div>

            <div className="control-btn stat-pill" style={{ borderColor: 'rgba(234, 179, 8, 0.35)' }} title="累積學習經驗值">
              <Trophy size={16} color="var(--brand-gold)" />
              <span style={{ color: 'var(--brand-gold)' }}>{userStats.xp} {t('xp')}</span>
            </div>

            {/* Font Size Adjuster Control */}
            <div className="font-size-selector" title={t('fontSize')}>
              <Type size={13} style={{ margin: 'auto 0.2rem', color: 'var(--text-muted)' }} />
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
            <button className="control-btn theme-toggle-btn" onClick={toggleTheme} title="切換和紙亮面/墨色暗面主題">
              {theme === 'light' ? (
                <>
                  <Moon size={15} color="var(--brand-purple)" />
                  <span className="theme-label" style={{ fontSize: '0.86em' }}>{t('darkTheme')}</span>
                </>
              ) : (
                <>
                  <Sun size={15} color="var(--brand-gold)" />
                  <span className="theme-label" style={{ fontSize: '0.86em' }}>{t('lightTheme')}</span>
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
