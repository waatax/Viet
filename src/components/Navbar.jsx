import React, { useEffect, useState, useRef } from 'react';
import {
  Sun, Moon, Type, Flame, Trophy, Globe, Volume2, Menu, X,
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked, ChevronDown, Settings2, Star
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';

/* Icon registry used by the grouped navigation config */
const ICON_MAP = {
  Map, Languages, AudioLines, ShoppingBag, MessagesSquare, MessageSquareText,
  Layers3, BookOpenText, UsersRound, BadgeCheck, BookMarked
};

/*
 * Grouped navigation structure.
 * AccentModule is placed under 'advanced' as supplementary content —
 * dialect differences are important but not the main learning track.
 */
const NAV_GROUPS = [
  {
    id: 'dashboard',
    items: [{ id: 'path', labelKey: 'tabs.path', icon: Map }]
  },
  {
    id: 'basics',
    labelKey: 'tabs.groupBasics',
    items: [
      { id: 'alphabet', labelKey: 'tabs.alphabet', icon: Languages },
      { id: 'pronoun', labelKey: 'tabs.pronoun', icon: UsersRound }
    ]
  },
  {
    id: 'conv',
    labelKey: 'tabs.groupConversation',
    items: [
      { id: 'phrases', labelKey: 'tabs.phrases', icon: MessageSquareText },
      { id: 'conversation', labelKey: 'tabs.conversation', icon: MessagesSquare }
    ]
  },
  {
    id: 'practice',
    labelKey: 'tabs.groupPractice',
    items: [
      { id: 'flashcards', labelKey: 'tabs.flashcards', icon: Layers3 },
      { id: 'grammar', labelKey: 'tabs.grammar', icon: BookOpenText },
      { id: 'quiz', labelKey: 'tabs.quiz', icon: BadgeCheck }
    ]
  },
  {
    id: 'advanced',
    labelKey: 'tabs.groupAdvanced',
    items: [
      { id: 'hanviet', labelKey: 'tabs.hanviet', icon: BookOpenText },
      { id: 'shopping', labelKey: 'tabs.shopping', icon: ShoppingBag },
      { id: 'accent', labelKey: 'tabs.accent', icon: BookMarked }
    ]
  }
];

/* Dropdown sub-menu for grouped navigation */
const NavGroup = ({ group, activeTab, setActiveTab, t }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    if (open) document.addEventListener('pointerdown', handler);
    return () => document.removeEventListener('pointerdown', handler);
  }, [open]);

  const groupActive = group.items.some(item => item.id === activeTab);

  return (
    <div className={`nav-group ${open ? 'is-open' : ''}`} ref={ref}>
      <button
        className={`nav-group-trigger ${groupActive ? 'active' : ''}`}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        <span>{t(group.labelKey)}</span>
        <ChevronDown size={14} className={`chevron ${open ? 'rotated' : ''}`} />
      </button>
      {open && (
        <div className="nav-group-dropdown">
          {group.items.map(({ id, labelKey, icon: Icon }) => (
            <button
              key={id}
              className={`dropdown-item ${activeTab === id ? 'active' : ''}`}
              onClick={() => { setActiveTab(id); setOpen(false); }}
              role="tab"
              aria-selected={activeTab === id}
            >
              <Icon size={16} strokeWidth={2} aria-hidden="true" />
              <span>{t(labelKey)}</span>
              {/* Visual marker for supplementary dialect content */}
              {id === 'accent' && <span className="supplement-badge">{t('tabs.groupAdvanced').includes('進') ? '補充' : 'Suppl.'}</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
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
  setSelectedAccent
}) => {
  const { learningMode, toggleLearningMode, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  
  const { currentXpInLevel, requiredXpForNextLevel, progressPercent } = gamificationEngine.getLevelProgress(userStats.xp);
  const currentLevel = gamificationEngine.calculateLevel(userStats.xp);

  useEffect(() => setMenuOpen(false), [activeTab]);

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
            </div>

            <div className="controls-group">
              <span className="control-btn stat-pill level-pill" title="Current Level"><Star size={16} /> Lv. {currentLevel}</span>
              <span className="control-btn stat-pill streak-pill" title="連續學習天數"><Flame size={16} /> {userStats.streak} {t('days')}</span>
              <div className="stat-pill xp-pill-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'var(--bg-accent)', padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-md)' }}>
                <span className="xp-pill-text" title="累積學習經驗值" style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.85em', fontWeight: 'bold' }}>
                  <Trophy size={14} /> {userStats.xp} {t('xp')}
                </span>
                <div className="xp-progress-bar" style={{ width: '100%', height: '4px', background: 'var(--bg-primary)', borderRadius: '2px', marginTop: '2px', overflow: 'hidden' }}>
                  <div className="xp-progress-fill" style={{ width: `${progressPercent}%`, height: '100%', background: 'var(--brand-gold)' }}></div>
                </div>
              </div>
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

              {/* Accent toggle — moved to advanced settings area (demoted from primary) */}
              <div className="accent-advanced-toggle" aria-label={learningMode === 'zh' ? '發音口音偏好（進階）' : 'Pronunciation accent (advanced)'}>
                <Settings2 size={14} aria-hidden="true" />
                <span className="accent-label">{learningMode === 'zh' ? '口音' : 'Accent'}:</span>
                <button className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`} onClick={() => setSelectedAccent('north')}>
                  {t('northAccent')}
                </button>
                <button className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`} onClick={() => setSelectedAccent('south')}>
                  {t('southAccent')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Grouped Navigation Tabs */}
      <div className={`tabs-navigation ${menuOpen ? 'settings-open' : ''}`}>
        <div className="tabs-wrapper" role="tablist" aria-label={learningMode === 'zh' ? '學習模組' : 'Learning modules'}>
          {NAV_GROUPS.map(group => {
            // Dashboard is rendered as a standalone tab button
            if (group.id === 'dashboard') {
              const item = group.items[0];
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  className={`tab-item ${activeTab === item.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(item.id)}
                  role="tab"
                  aria-selected={activeTab === item.id}
                >
                  <Icon size={17} strokeWidth={2} aria-hidden="true" />
                  <span>{t(item.labelKey)}</span>
                </button>
              );
            }
            // Other groups rendered as dropdown menus
            return (
              <NavGroup
                key={group.id}
                group={group}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                t={t}
              />
            );
          })}
        </div>
      </div>
    </header>
  );
};
