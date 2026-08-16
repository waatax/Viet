import React, { useEffect, useState } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Volume2, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck
} from 'lucide-react';
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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [activeTab]);

  const navItems = [
    { id: 'path', label: t('tabs.path'), icon: Map },
    { id: 'alphabet', label: t('tabs.alphabet'), icon: Languages },
    { id: 'accent', label: t('tabs.accent'), icon: AudioLines },
    { id: 'shopping', label: t('tabs.shopping'), icon: ShoppingBag },
    { id: 'conversation', label: t('tabs.conversation'), icon: MessagesSquare },
    { id: 'phrases', label: t('tabs.phrases'), icon: MessageSquareText },
    { id: 'flashcards', label: t('tabs.flashcards'), icon: Layers3 },
    { id: 'grammar', label: t('tabs.grammar'), icon: BookOpenText },
    { id: 'hanviet', label: t('tabs.hanviet'), icon: BookOpenText },
    { id: 'pronoun', label: t('tabs.pronoun'), icon: UsersRound },
    { id: 'quiz', label: t('tabs.quiz'), icon: BadgeCheck }
  ];

  return (
    <header className="header-container">
      <nav className="navbar" aria-label={learningMode === 'zh' ? '主要導覽與學習設定' : 'Primary navigation and learning settings'}>
        <div className="nav-content">
          <button className="brand-logo" onClick={() => setActiveTab('path')} aria-label={t('brandName')}>
            <span className="flag-badge" aria-hidden="true"><span>★</span> VIỆT</span>
            <span className="brand-copy">
              <strong>{t('brandName')}</strong>
              <small>{t('brandSub')}</small>
            </span>
          </button>

          <div className="nav-mobile-actions">
            <span className="mobile-xp"><Trophy size={15} /> {userStats.xp}</span>
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
              <button className="subsystem-switch-btn" onClick={toggleLearningMode}>
                <Globe size={16} />
                <span className="mode-text">{learningMode === 'zh' ? '中文學越文' : 'English Track'}</span>
                <span className="switch-tag">{learningMode === 'zh' ? 'EN' : '中文'}</span>
              </button>

              <div className="accent-quick-toggle" aria-label={learningMode === 'zh' ? '口音選擇' : 'Accent selection'}>
                <Volume2 size={15} aria-hidden="true" />
                <button className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`} onClick={() => setSelectedAccent('north')}>
                  {t('northAccent')}
                </button>
                <button className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`} onClick={() => setSelectedAccent('south')}>
                  {t('southAccent')}
                </button>
              </div>
            </div>

            <div className="controls-group">
              <span className="control-btn stat-pill streak-pill" title="連續學習天數"><Flame size={16} /> {userStats.streak} {t('days')}</span>
              <span className="control-btn stat-pill xp-pill" title="累積學習經驗值"><Trophy size={16} /> {userStats.xp} {t('xp')}</span>
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

      <div className={`tabs-navigation ${menuOpen ? 'settings-open' : ''}`}>
        <div className="tabs-wrapper" role="tablist" aria-label={learningMode === 'zh' ? '學習模組' : 'Learning modules'}>
          {navItems.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              className={`tab-item ${activeTab === id ? 'active' : ''}`}
              onClick={() => setActiveTab(id)}
              role="tab"
              aria-selected={activeTab === id}
            >
              <Icon size={17} strokeWidth={2} aria-hidden="true" />
              <span>{label}</span>
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
