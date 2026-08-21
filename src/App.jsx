import React, { lazy, Suspense, useState, useEffect } from 'react';
import { ArrowUp, Settings2, Sparkles, Trophy, Award, X } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { ErrorBoundary } from './components/ErrorBoundary';
import { useLanguage } from './context/LanguageContext';
import { gamificationEngine } from './utils/gamificationEngine';
import { audioEngine } from './services/audioEngine';
import { MODULE_IDS } from './config/navigation';

const lazyNamed = (loader, exportName) => lazy(() => loader().then(module => ({ default: module[exportName] })));
const LearningPathModule = lazyNamed(() => import('./components/LearningPathModule'), 'LearningPathModule');
const FastTrackModule = lazyNamed(() => import('./components/FastTrackModule'), 'default');
const ScientificMethodModule = lazyNamed(() => import('./components/ScientificMethodModule'), 'default');
const EmergencyKitModule = lazyNamed(() => import('./components/EmergencyKitModule'), 'default');
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
const ShadowingModule = lazyNamed(() => import('./components/ShadowingModule'), 'default');
const SentenceBuilderModule = lazyNamed(() => import('./components/SentenceBuilderModule'), 'default');
const ToneGameModule = lazyNamed(() => import('./components/ToneGameModule'), 'default');
const AchievementsModal = lazyNamed(() => import('./components/AchievementsModal'), 'default');

const getModuleFromHash = () => {
  const moduleId = window.location.hash.replace(/^#\/?/, '');
  return MODULE_IDS.includes(moduleId) ? moduleId : 'path';
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

  // Achievements Modal Open State
  const [isAchievementsModalOpen, setIsAchievementsModalOpen] = useState(false);

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
  const [unlockedBadgeData, setUnlockedBadgeData] = useState(null);

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
      const updated = streakUpdated ? { ...prev, streak: newStreak, lastLoginDate: newLastLoginDate } : prev;
      
      // Check streak achievements
      if (streakUpdated) {
        const newBadges = gamificationEngine.checkAchievements(updated);
        if (newBadges.length > 0) {
          setUnlockedBadgeData(newBadges[0]);
          audioEngine.playBadgeUnlockSound();
        }
      }
      return updated;
    });
  }, []);

  useEffect(() => {
    const handleHashChange = () => setActiveTabState(getModuleFromHash());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setActiveTab = (moduleId) => {
    const nextModule = MODULE_IDS.includes(moduleId) ? moduleId : 'path';
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
      action = { type: 'ADD_XP', payload: action };
    }

    if (action.type === 'ADD_XP') {
      setUserStats(prev => {
        const oldLevel = gamificationEngine.calculateLevel(prev.xp);
        const newXp = prev.xp + (action.payload || 0);
        const newLevel = gamificationEngine.calculateLevel(newXp);
        const newStats = { ...prev, xp: newXp };

        // Level Up Trigger
        if (newLevel > oldLevel) {
          setLevelUpData({ level: newLevel });
          audioEngine.playLevelUpFanfare();
        }

        // Achievement Check
        const newlyUnlocked = gamificationEngine.checkAchievements(newStats, action);
        if (newlyUnlocked.length > 0) {
          setUnlockedBadgeData(newlyUnlocked[0]);
          audioEngine.playBadgeUnlockSound();
        }

        return newStats;
      });
    } else {
      // Non-XP action achievement check
      const newlyUnlocked = gamificationEngine.checkAchievements(userStats, action);
      if (newlyUnlocked.length > 0) {
        setUnlockedBadgeData(newlyUnlocked[0]);
        audioEngine.playBadgeUnlockSound();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app-container">
      <a className="skip-link" href="#main-content">跳至主要內容</a>

      {/* Top Navbar Header */}
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
        onOpenAchievements={() => setIsAchievementsModalOpen(true)}
      />

      {/* Main Learning Module View */}
      <main id="main-content" className="main-content" tabIndex="-1">
        <ErrorBoundary>
          <Suspense fallback={<div className="module-loading" role="status">載入學習內容中…</div>}>
            {activeTab === 'path' && <LearningPathModule setActiveTab={setActiveTab} />}
            {activeTab === 'fasttrack' && <FastTrackModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'science' && <ScientificMethodModule />}
            {activeTab === 'emergency' && <EmergencyKitModule selectedAccent={selectedAccent} />}
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
            {activeTab === 'shadowing' && <ShadowingModule selectedAccent={selectedAccent} />}
            {activeTab === 'sentence' && <SentenceBuilderModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
            {activeTab === 'tonegame' && <ToneGameModule selectedAccent={selectedAccent} updateUserStats={updateUserStats} />}
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

      {/* Achievement Unlocked Sparkle Modal */}
      {unlockedBadgeData && (
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
          zIndex: 99999,
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
            position: 'relative'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '0.5rem', animation: 'bounce 1s infinite' }}>
              {unlockedBadgeData.icon}
            </div>
            <div style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', marginBottom: '0.3rem' }}>
              ✨ ACHIEVEMENT UNLOCKED! ✨
            </div>
            <h2 style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0 0 0.5rem' }}>
              {learningMode === 'zh' ? unlockedBadgeData.titleZh : unlockedBadgeData.titleEn}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, marginBottom: '1.25rem' }}>
              {learningMode === 'zh' ? unlockedBadgeData.descZh : unlockedBadgeData.descEn}
            </p>
            <div style={{
              display: 'inline-block',
              background: 'rgba(234, 179, 8, 0.12)',
              border: '1px solid var(--brand-gold)',
              borderRadius: 'var(--radius-full)',
              padding: '0.35rem 1rem',
              color: 'var(--brand-gold)',
              fontWeight: 800,
              fontSize: '0.95rem',
              marginBottom: '1.5rem'
            }}>
              +{unlockedBadgeData.bonusXp} BONUS XP 獲得！
            </div>
            <button
              className="primary-action"
              style={{ width: '100%', padding: '0.8rem', fontSize: '1.05rem', fontWeight: 800 }}
              onClick={() => setUnlockedBadgeData(null)}
            >
              太棒了，收下勳章 🎖️
            </button>
          </div>
        </div>
      )}

      {/* Full Achievements Showcase Modal */}
      <Suspense fallback={null}>
        <AchievementsModal
          userStats={userStats}
          isOpen={isAchievementsModalOpen}
          onClose={() => setIsAchievementsModalOpen(false)}
        />
      </Suspense>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div>
            <div style={{ fontWeight: 800, fontSize: '1.05em', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span>🇻🇳 越語學習通 (科學研究團隊旗艦版) · Chào Việt Nam!</span>
            </div>
            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              {learningMode === 'zh' 
                ? '第二語言習得 (SLA) · 漢越音音韻體系 · SM-2 間隔重複 · 八角行為遊戲化心理學 · 打造大眾快樂溝通旗艦' 
                : 'SLA Methodology · Sino-Vietnamese Cognates · SM-2 Retention · Octalysis Gamification'}
            </div>
          </div>

          <div className="footer-settings-controls" style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
            <button
              className="secondary-action"
              onClick={() => setIsAchievementsModalOpen(true)}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Trophy size={14} color="var(--brand-gold)" />
              <span>{learningMode === 'zh' ? '成就勳章櫃' : 'Achievements'}</span>
            </button>

            <button
              className="secondary-action"
              onClick={() => setActiveTab('science')}
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.82rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}
            >
              <Sparkles size={14} color="var(--brand-primary)" />
              <span>{learningMode === 'zh' ? '科學方法中心' : 'Science Hub'}</span>
            </button>

            {/* Accent Preference */}
            <div className="accent-toggle-group" style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', background: 'var(--bg-input)', padding: '0.3rem 0.6rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
              <Settings2 size={15} color="var(--brand-primary)" />
              <span style={{ fontSize: '0.82em', fontWeight: 700, color: 'var(--text-secondary)' }}>
                {learningMode === 'zh' ? '口音：' : 'Accent: '}
              </span>
              <button
                className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('north')}
                style={{ cursor: 'pointer' }}
              >
                {t('northAccent')}
              </button>
              <button
                className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`}
                onClick={() => setSelectedAccent('south')}
                style={{ cursor: 'pointer' }}
              >
                {t('southAccent')}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
