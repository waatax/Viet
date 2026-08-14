import React from 'react';
import { Sun, Moon, Type, Sparkles, Flame, Trophy } from 'lucide-react';

export const Navbar = ({ 
  theme, 
  setTheme, 
  fontSize, 
  setFontSize, 
  activeTab, 
  setActiveTab,
  userStats 
}) => {

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navItems = [
    { id: 'alphabet', label: '1. 字母與6大聲調' },
    { id: 'accent', label: '2. 南北越口音對比' },
    { id: 'shopping', label: '3. 數字與購物換算' },
    { id: 'conversation', label: '4. 情境與商務會話' },
    { id: 'phrases', label: '5. 實用短句速查' },
    { id: 'flashcards', label: '6. 間隔記憶閃卡' },
    { id: 'grammar', label: '7. 語法與句型拼圖' },
    { id: 'quiz', label: '8. 測驗與學習統計' },
    { id: 'deploy', label: '🚀 發布指南 (GitHub Pages)' }
  ];

  return (
    <header className="header-container">
      <nav className="navbar">
        <div className="nav-content">
          {/* Logo & Brand */}
          <div className="brand-logo">
            <span className="flag-badge">🇻🇳 VIỆT</span>
            <span>越語學習通</span>
            <span style={{ fontSize: '0.65em', color: 'var(--brand-accent)', opacity: 0.9 }}>
              Chào Việt Nam!
            </span>
          </div>

          {/* User Progress Stats & Control Center */}
          <div className="controls-group">
            {/* Gamification Stats */}
            <div className="control-btn" style={{ background: 'var(--bg-accent)', borderColor: 'var(--brand-gold)' }}>
              <Flame size={16} color="var(--brand-primary)" />
              <span>連續 {userStats.streak} 天</span>
            </div>

            <div className="control-btn" style={{ background: 'var(--bg-accent)', borderColor: 'var(--brand-green)' }}>
              <Trophy size={16} color="var(--brand-gold)" />
              <span>{userStats.xp} XP</span>
            </div>

            {/* Font Size Adjuster Control */}
            <div className="font-size-selector" title="調整文字大小">
              <Type size={14} style={{ margin: 'auto 0.3rem', color: 'var(--text-muted)' }} />
              <button 
                className={`size-option-btn ${fontSize === 'small' ? 'active' : ''}`}
                onClick={() => setFontSize('small')}
              >
                小
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'normal' ? 'active' : ''}`}
                onClick={() => setFontSize('normal')}
              >
                中
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'large' ? 'active' : ''}`}
                onClick={() => setFontSize('large')}
              >
                大
              </button>
              <button 
                className={`size-option-btn ${fontSize === 'xlarge' ? 'active' : ''}`}
                onClick={() => setFontSize('xlarge')}
              >
                特大
              </button>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button className="control-btn" onClick={toggleTheme} title="切換亮面/暗面主題">
              {theme === 'light' ? (
                <>
                  <Moon size={16} color="var(--brand-purple)" />
                  <span>暗面主題</span>
                </>
              ) : (
                <>
                  <Sun size={16} color="var(--brand-gold)" />
                  <span>亮面主題</span>
                </>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Module Navigation Tabs */}
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
