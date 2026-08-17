import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useLanguage } from './context/LanguageContext';
import { gamificationEngine } from './utils/gamificationEngine';

const lazyNamed = (loader, exportName) => lazy(() => loader().then(module => ({ default: module[exportName] })));
const LearningPathModule = lazyNamed(() => import('./components/LearningPathModule'), 'LearningPathModule');
const AlphabetModule = lazyNamed(() => import('./components/AlphabetModule'), 'AlphabetModule');
const AccentModule = lazyNamed(() => import('./components/AccentModule'), 'AccentModule');
const ShoppingModule = lazyNamed(() => import('./components/ShoppingModule'), 'ShoppingModule');
const ConversationModule = lazyNamed(() => import('./components/ConversationModule'), 'ConversationModule');
const PhrasesModule = lazyNamed(() => import('./components/PhrasesModule'), 'PhrasesModule');
const FlashcardModule = lazyNamed(() => import('./components/FlashcardModule'), 'FlashcardModule');
const GrammarModule = lazyNamed(() => import('./components/GrammarModule'), 'GrammarModule');
const HanVietModule = lazyNamed(() => import('./components/HanVietModule'), 'HanVietModule');
const PronounModule = lazyNamed(() => import('./components/PronounModule'), 'PronounModule');
const QuizModule = lazyNamed(() => import('./components/QuizModule'), 'QuizModule');

const moduleIds = ['path', 'alphabet', 'accent', 'shopping', 'conversation', 'phrases', 'flashcards', 'grammar', 'hanviet', 'pronoun', 'quiz'];

const getModuleFromHash = () => {
  const moduleId = window.location.hash.replace(/^#\/?/, '');
  return moduleIds.includes(moduleId) ? moduleId : 'path';
};

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
  const [activeTab, setActiveTabState] = useState(getModuleFromHash);

  // Show Back To Top Button
  const [showBackToTop, setShowBackToTop] = useState(false);

  // User Gamification Stats
  const [userStats, setUserStats] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_user_stats');
      return saved ? JSON.parse(saved) : { xp: 0, streak: 1, lastLoginDate: '', masteredWords: [] };
    } catch {
      return { xp: 0, streak: 1, lastLoginDate: '', masteredWords: [] };
    }
  });

  const [levelUpData, setLevelUpData] = useState(null);

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

  // Effect: Process Daily Login Streak
  useEffect(() => {
    setUserStats(prev => {
      const { newStreak, newLastLoginDate, streakUpdated } = gamificationEngine.processLoginStreak(prev.lastLoginDate, prev.streak);
      if (streakUpdated) {
        return { ...prev, streak: newStreak, lastLoginDate: newLastLoginDate };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveTabState(getModuleFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setActiveTab = (moduleId) => {
    const nextModule = moduleIds.includes(moduleId) ? moduleId : 'path';
    setActiveTabState(nextModule);
    const nextHash = `#/${nextModule}`;
    if (window.location.hash !== nextHash) window.location.hash = nextHash;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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

  const updateUserStats = (action) => {
    if (typeof action === 'number') {
      // Legacy fallback
      setUserStats(prev => ({ ...prev, xp: prev.xp + action }));
      return;
    }

    if (action.type === 'ADD_XP') {
      setUserStats(prev => {
        const oldLevel = gamificationEngine.calculateLevel(prev.xp);
        const newXp = prev.xp + (action.payload || 0);
        const newLevel = gamificationEngine.calculateLevel(newXp);
        
        if (newLevel > oldLevel) {
          setLevelUpData({ level: newLevel });
        }
        
        return { ...prev, xp: newXp };
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <a className="skip-link" href="#main-content">跳至主要內容</a>
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

      {/* Main Learning Module View — wrapped in ErrorBoundary for graceful error handling */}
      <main id="main-content" className="main-content" tabIndex="-1">
        <ErrorBoundary>
          <Suspense fallback={<div className="module-loading" role="status">載入學習內容中…</div>}>
            {activeTab === 'path' && <LearningPathModule setActiveTab={setActiveTab} />}
            {activeTab === 'alphabet' && <AlphabetModule selectedAccent={selectedAccent} />}
            {/* AccentModule — supplementary dialect reference (進階 → 方言補充) */}
            {activeTab === 'accent' && <AccentModule selectedAccent={selectedAccent} setSelectedAccent={setSelectedAccent} />}
            {activeTab === 'shopping' && <ShoppingModule selectedAccent={selectedAccent} />}
            {activeTab === 'conversation' && <ConversationModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'phrases' && <PhrasesModule selectedAccent={selectedAccent} />}
            {activeTab === 'flashcards' && <FlashcardModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'grammar' && <GrammarModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'hanviet' && <HanVietModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'pronoun' && <PronounModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'quiz' && <QuizModule userStats={userStats} updateUserStats={updateUserStats} selectedAccent={selectedAccent} />}
          </Suspense>
        </ErrorBoundary>
      </main>

      {/* Floating Back To Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="speaker-btn back-to-top"
          title="回到頂端"
          aria-label="回到頁面頂端"
        >
          <ArrowUp size={20} />
        </button>
      )}

      {/* Level-Up Celebration Modal */}
      {levelUpData && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.75)',
          backdropFilter: 'blur(6px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          padding: '1rem'
        }}>
          <div style={{
            background: 'var(--bg-card)',
            border: '2px solid var(--brand-gold)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 2rem',
            maxWidth: '440px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 20px 50px rgba(234, 179, 8, 0.35)',
            animation: 'glowSuccess 1.5s infinite alternate'
          }}>
            <div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }}>🏆✨</div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-gold)', margin: '0 0 0.5rem' }}>
              LEVEL UP!
            </h2>
            <div style={{
              fontSize: '1.25rem',
              fontWeight: 800,
              color: 'var(--brand-primary)',
              marginBottom: '1rem'
            }}>
              等級晉升至 Lv. {levelUpData.level}
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
              恭喜您！您的越語神經元正在以倍速建立連結！解鎖全新成就勳章與榮耀稱號。
            </p>
            <button
              className="primary-action"
              style={{ width: '100%', padding: '0.85rem', fontSize: '1.05rem', fontWeight: 800 }}
              onClick={() => setLevelUpData(null)}
            >
              繼續征服越語 🚀
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
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
