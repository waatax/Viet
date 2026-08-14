import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { LearningPathModule } from './components/LearningPathModule';
import { AlphabetModule } from './components/AlphabetModule';
import { AccentModule } from './components/AccentModule';
import { ShoppingModule } from './components/ShoppingModule';
import { ConversationModule } from './components/ConversationModule';
import { PhrasesModule } from './components/PhrasesModule';
import { FlashcardModule } from './components/FlashcardModule';
import { GrammarModule } from './components/GrammarModule';
import { HanVietModule } from './components/HanVietModule';
import { PronounModule } from './components/PronounModule';
import { QuizModule } from './components/QuizModule';
import { useLanguage } from './context/LanguageContext';

export function App() {
  const { learningMode, t } = useLanguage();

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
  const [activeTab, setActiveTab] = useState('path');

  // User Gamification Stats
  const [userStats, setUserStats] = useState(() => {
    const saved = localStorage.getItem('viet_user_stats');
    return saved ? JSON.parse(saved) : { streak: 1, xp: 80, masteredWords: [] };
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
      {/* Top Navbar Header with Dual Subsystem, Theme & Font Controllers */}
      <Navbar 
        theme={theme}
        setTheme={setTheme}
        fontSize={fontSize}
        setFontSize={setFontSize}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        userStats={userStats}
        selectedAccent={selectedAccent}
        setSelectedAccent={setSelectedAccent}
      />

      {/* Main Learning Module View */}
      <main className="main-content">
        {activeTab === 'path' && <LearningPathModule setActiveTab={setActiveTab} />}
        {activeTab === 'alphabet' && <AlphabetModule selectedAccent={selectedAccent} />}
        {activeTab === 'accent' && <AccentModule selectedAccent={selectedAccent} setSelectedAccent={setSelectedAccent} />}
        {activeTab === 'shopping' && <ShoppingModule selectedAccent={selectedAccent} />}
        {activeTab === 'conversation' && <ConversationModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'phrases' && <PhrasesModule selectedAccent={selectedAccent} />}
        {activeTab === 'flashcards' && <FlashcardModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'grammar' && <GrammarModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'hanviet' && <HanVietModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'pronoun' && <PronounModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
        {activeTab === 'quiz' && <QuizModule userStats={userStats} updateUserStats={updateUserStats} selectedAccent={selectedAccent} />}
      </main>

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <strong>{learningMode === 'zh' ? '越語學習通 (雙子系統) | Chào Việt Nam!' : 'VietMaster Pro (Dual Subsystem) | Chào Việt Nam!'}</strong> 
            <span style={{ marginLeft: '0.5rem', opacity: 0.8 }}>
              {learningMode === 'zh' ? '— 台灣教育部課綱 · iVPT檢定 · 漢越音極速學習體系' : '— MOE Taiwan Curriculum · iVPT Standards · Han-Viet Cognates'}
            </span>
          </div>
          <div style={{ fontSize: '0.9em', color: 'var(--brand-gold)' }}>
            {learningMode === 'zh' ? '當前軌道：🇹🇼 中文學越文模式' : 'Active Track: 🌐 English Global Track'}
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
