import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { AlphabetModule } from './components/AlphabetModule';
import { AccentModule } from './components/AccentModule';
import { ShoppingModule } from './components/ShoppingModule';
import { ConversationModule } from './components/ConversationModule';
import { PhrasesModule } from './components/PhrasesModule';
import { FlashcardModule } from './components/FlashcardModule';
import { GrammarModule } from './components/GrammarModule';
import { QuizModule } from './components/QuizModule';
import { DeployGuide } from './components/DeployGuide';

export function App() {
  // Theme state: light or dark
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('viet_theme') || 'dark';
  });

  // Font size state: small, normal, large, xlarge
  const [fontSize, setFontSize] = useState(() => {
    return localStorage.getItem('viet_fontsize') || 'normal';
  });

  // Accent preference: north or south
  const [selectedAccent, setSelectedAccent] = useState(() => {
    return localStorage.getItem('viet_accent') || 'north';
  });

  // Active module tab
  const [activeTab, setActiveTab] = useState('alphabet');

  // User Gamification Stats
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('viet_user_stats');
    return saved ? JSON.parse(saved) : { streak: 1, xp: 50, masteredWords: [] };
  });

  // Effect: Sync Theme attribute to html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('viet_theme', theme);
  }, [theme]);

  // Effect: Sync Font Size attribute to html tag
  useEffect(() => {
    document.documentElement.setAttribute('data-font-size', fontSize);
    localStorage.setItem('viet_fontsize', fontSize);
  }, [fontSize]);

  // Effect: Sync Accent preference
  useEffect(() => {
    localStorage.setItem('viet_accent', selectedAccent);
  }, [selectedAccent]);

  // Effect: Persist Stats
  useEffect(() => {
    localStorage.setItem('viet_user_stats', JSON.stringify(userStats));
  }, [userStats]);

  const updateUserStats = (addXp) => {
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + addXp
    }));
  };

  return (
    <div className="app-container">
      {/* Top Navbar Header with Theme & Font Controllers */}
      <Navbar 
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userStats={userStats}
      />

      {/* Main Learning Module View */}
      <main className="main-content">
        {activeTab === 'alphabet' && <AlphabetModule selectedAccent={selectedAccent} />}
        {activeTab === 'accent' && <AccentModule selectedAccent={selectedAccent} setSelectedAccent={setSelectedAccent} />}
        {activeTab === 'shopping' && <ShoppingModule selectedAccent={selectedAccent} />}
        {activeTab === 'conversation' && <ConversationModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'phrases' && <PhrasesModule selectedAccent={selectedAccent} />}
        {activeTab === 'flashcards' && <FlashcardModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'grammar' && <GrammarModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'quiz' && <QuizModule userStats={userStats} updateUserStats={updateUserStats} selectedAccent={selectedAccent} />}
        {activeTab === 'deploy' && <DeployGuide />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong>越語學習通 | Chào Việt Nam!</strong> — 專業越南文學習與發音系統
          </div>
          <div>
            部署目標：<a href="https://waatax.github.io/Viet" target="_blank" rel="noreferrer" style={{ color: 'var(--brand-accent)', textDecoration: 'none' }}>waatax.github.io/Viet</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
