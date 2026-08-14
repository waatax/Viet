import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { useLanguage } from './context/LanguageContext';

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
const LiteratureModule = lazy(() => import('./components/LiteratureModule'));

const moduleIds = ['path', 'literature', 'alphabet', 'accent', 'shopping', 'conversation', 'phrases', 'flashcards', 'grammar', 'hanviet', 'pronoun', 'quiz'];

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

      {/* Main Learning Module View */}
      <main id="main-content" className="main-content" tabIndex="-1">
        <Suspense fallback={<div className="module-loading" role="status">載入學習內容中…</div>}>
          {activeTab === 'path' && <LearningPathModule setActiveTab={setActiveTab} />}
          {activeTab === 'literature' && <LiteratureModule accent={selectedAccent} onAddXp={updateUserStats} />}
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
        </Suspense>
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
