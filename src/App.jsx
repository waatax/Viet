import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles, Keyboard, Heart } from 'lucide-react';
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
import { audioEngine } from './services/audioEngine';

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

  // Show Back To Top Button
  const [showBackToTop, setShowBackToTop] = useState(false);

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

  // Effect: Window scroll listener for back-to-top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const updateUserStats = (addXp) => {
    setUserStats(prev => ({
      ...prev,
      xp: prev.xp + addXp
    }));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="speaker-btn"
          style={{
            position: 'fixed',
            bottom: '2rem',
            right: '2rem',
            width: '46px',
            height: '46px',
            zIndex: 99,
            background: 'var(--brand-accent)',
            color: '#fff',
            boxShadow: '0 6px 20px rgba(0,0,0,0.25)'
          }}
          title="回到頂端"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Footer */}
      <footer className="footer">
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05em', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🇻🇳 越語學習通 (雙子系統) · Chào Việt Nam!</span>
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {learningMode === 'zh' 
                ? '台灣教育部東南亞語文課綱 · iVPT 國際越語檢定 · 漢越音音韻體系 · 打造最信達雅之越語學習旗艦' 
                : 'MOE Taiwan Southeast Asian Language Curriculum · iVPT Standards · Sino-Vietnamese Etymology'}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ fontSize: '0.86em', color: 'var(--brand-gold)', fontWeight: 700, background: 'var(--bg-accent)', padding: '0.35rem 0.8rem', borderRadius: 'var(--radius-full)' }}>
              {learningMode === 'zh' ? '當前軌道：🇹🇼 中文越語雙軌深度模式' : 'Active Track: 🌐 English Global Mode'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
