import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Bookmark, Check, Sparkles, Filter, ChevronDown, Play, Pause, Layers } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const PhrasesModule = ({ selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [onlyBookmarked, setOnlyBookmarked] = useState(false);
  const [visibleCount, setVisibleCount] = useState(48);
  const [savedPhrases, setSavedPhrases] = useState(() => {
    try {
      const saved = localStorage.getItem('viet_saved_phrases');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    localStorage.setItem('viet_saved_phrases', JSON.stringify(savedPhrases));
  }, [savedPhrases]);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const categories = ['all', ...new Set(practicalPhrases.map(p => p.category))];

  const filteredPhrases = practicalPhrases.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesBookmark = !onlyBookmarked || savedPhrases.includes(item.viet);
    const q = searchQuery.toLowerCase().trim();
    
    if (!q) return matchesCategory && matchesBookmark;
    
    const matchesSearch = item.viet.toLowerCase().includes(q) || 
                          (item.zh && item.zh.toLowerCase().includes(q)) ||
                          (item.en && item.en.toLowerCase().includes(q)) ||
                          (item.usageZh && item.usageZh.toLowerCase().includes(q));
                          
    return matchesCategory && matchesBookmark && matchesSearch;
  });

  const displayedPhrases = filteredPhrases.slice(0, visibleCount);

  const toggleBookmark = (viet) => {
    setSavedPhrases(prev => 
      prev.includes(viet) ? prev.filter(p => p !== viet) : [...prev, viet]
    );
  };

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 48);
  };

  return (
    <div className="module-container">
      {/* Hero Header */}
      <div className="section-header">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <span style={{ fontSize: '0.8em', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              SURVIVAL PHRASEBOOK · {practicalPhrases.length}+ VERIFIED DIALOGIC PHRASES
            </span>
            <h2 className="section-title" style={{ marginTop: '0.2rem' }}>
              <BookOpen color="var(--brand-primary)" />
              {learningMode === 'zh' ? `實用生活片語與生存高頻短句庫 (${practicalPhrases.length}+句)` : `Essential Survival Phrases & Idioms (${practicalPhrases.length}+)`}
            </h2>
            <p className="section-desc">
              {learningMode === 'zh'
                ? `收錄 15 大情境領域共 ${practicalPhrases.length} 句道地越南短句，涵蓋問候初見、社交閒聊、咖啡點餐、旅遊住宿、運動健身、職場商務與道地俚語，配備原生雙口音發音`
                : `Comprehensive collection of ${practicalPhrases.length} essential Vietnamese phrases across 15 life domains with native audio.`}
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button
              className={`control-btn ${onlyBookmarked ? 'active' : ''}`}
              onClick={() => setOnlyBookmarked(prev => !prev)}
              style={{
                background: onlyBookmarked ? 'var(--brand-gold)' : 'var(--bg-card)',
                color: onlyBookmarked ? '#fff' : 'inherit',
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                padding: '0.5rem 1rem'
              }}
            >
              <Bookmark size={16} fill={onlyBookmarked ? '#fff' : 'none'} />
              <span>{learningMode === 'zh' ? `我的收藏 (${savedPhrases.length})` : `Bookmarks (${savedPhrases.length})`}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="simulator-box" style={{ padding: '1.25rem', marginBottom: '1.8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div className="search-input-wrapper">
            <Search size={18} className="search-icon" />
            <input 
              type="text"
              placeholder={learningMode === 'zh' ? `在 ${practicalPhrases.length} 句片語中即時搜尋 (例: 咖啡, 殺價, 護照, Grab, 謝謝)...` : 'Search 550+ phrases...'}
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setVisibleCount(48);
              }}
              className="scenario-search-input"
            />
          </div>

          {/* Category Chips Horizontal Scroll */}
          <div style={{ display: 'flex', gap: '0.45rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`control-btn ${selectedCategory === cat ? 'active' : ''}`}
                style={{ 
                  background: selectedCategory === cat ? 'var(--brand-accent)' : 'var(--bg-card)', 
                  color: selectedCategory === cat ? '#fff' : 'var(--text-primary)',
                  fontSize: '0.84em',
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-full)'
                }}
                onClick={() => {
                  setSelectedCategory(cat);
                  setVisibleCount(48);
                }}
              >
                {cat === 'all' ? (learningMode === 'zh' ? `全部類別 (${practicalPhrases.length})` : `All (${practicalPhrases.length})`) : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count Indicator Banner */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', fontSize: '0.9em', color: 'var(--text-secondary)' }}>
        <div>
          {learningMode === 'zh' 
            ? `正在顯示 ${displayedPhrases.length} / ${filteredPhrases.length} 句` 
            : `Showing ${displayedPhrases.length} of ${filteredPhrases.length} phrases`}
        </div>
        <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
          💡 點擊喇叭按鈕即可聆聽 {selectedAccent === 'north' ? '🏛️ 北越河內音' : '🌴 南越胡志明音'}
        </div>
      </div>

      {/* Phrase Cards Grid */}
      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
        {displayedPhrases.map((phrase, idx) => {
          const phraseKey = `phrase_${idx}_${phrase.viet}`;
          const isPlaying = activeKey === phraseKey || activeKey === phrase.viet;
          const isSaved = savedPhrases.includes(phrase.viet);

          return (
            <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span className="tone-symbol" style={{ fontSize: '0.78em', background: 'var(--bg-accent)', color: 'var(--brand-gold)' }}>
                  {phrase.category.split('/')[0].trim()}
                </span>
                <button 
                  onClick={() => toggleBookmark(phrase.viet)}
                  style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: isSaved ? 'var(--brand-gold)' : 'var(--text-muted)', transition: 'all 0.2s ease', padding: '0.2rem' }}
                  title={isSaved ? '已收藏' : '收藏此片語'}
                >
                  <Bookmark size={18} fill={isSaved ? 'var(--brand-gold)' : 'transparent'} />
                </button>
              </div>

              <div style={{ fontSize: '1.24em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.35rem', lineHeight: 1.4 }}>
                {phrase.viet}
              </div>

              <div style={{ fontSize: '0.94em', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                {learningMode === 'zh' ? phrase.zh : phrase.en}
              </div>

              <div style={{ fontSize: '0.82em', color: 'var(--text-muted)', marginBottom: '0.85rem' }}>
                💡 {learningMode === 'zh' ? `情境：${phrase.usageZh}` : `Usage: ${phrase.usageEn}`}
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button 
                  className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={() => handleSpeak(phrase.viet, phraseKey)}
                  title={t('common.listen')}
                >
                  <Volume2 size={16} />
                </button>
                <span style={{ fontSize: '0.75em', color: 'var(--text-muted)' }}>
                  #{idx + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredPhrases.length && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2.5rem' }}>
          <button
            className="control-btn"
            onClick={loadMore}
            style={{
              padding: '0.8rem 2.2rem',
              fontSize: '1em',
              fontWeight: 800,
              background: 'var(--brand-accent)',
              color: '#fff',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(var(--brand-accent-rgb), 0.3)'
            }}
          >
            <ChevronDown size={20} />
            <span>{learningMode === 'zh' ? `載入更多短句 (+48 句 / 剩餘 ${filteredPhrases.length - visibleCount} 句)` : `Load More (+48)`}</span>
          </button>
        </div>
      )}
    </div>
  );
};
