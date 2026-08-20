import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Bookmark, Check, Sparkles, Filter, ChevronDown, Play, Pause, Layers } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

const categoryIcons = {
  "問候與禮貌 / Greetings": "👋",
  "咖啡與飲品 / Cafe & Drinks": "☕",
  "餐飲與點餐 / Dining": "🍽️",
  "購物與殺價 / Shopping": "🛍️",
  "交通與出行 / Grab & Transport": "🚗",
  "飯店與住宿 / Hotel": "🏨",
  "機場與出入境 / Airport & Visa": "✈️",
  "放鬆與水療 / Hair Spa & Massage": "💆",
  "商務與職場 / Business": "💼",
  "醫療與急難 / Pharmacy & Emergency": "🏥",
  "居家與租屋 / Apartment & Living": "🏠",
  "旅遊與休閒 / Tourism & Travel": "🏝️",
  "熱炒與乾杯 / Nightlife & Cheers": "🍻",
  "情感與俗諺 / Idioms & Slang": "❤️",
  "社交閒聊與生活 / Small Talk": "💬",
  "旅遊與出行 / Travel & Transit": "🧳",
  "休閒娛樂與運動 / Leisure & Sports": "⚽",
  "時間與約定 / Time & Dates": "⏰",
  "餐飲與美食 / Dining & Food": "🍜",
  "日常短句速查 / Daily Expressions": "📝"
};

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
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + 48);
  };

  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [playMode, setPlayMode] = useState('zh-vi'); // 'zh-vi' | 'vi-zh' | 'vi-only'
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const [activePhraseIndex, setActivePhraseIndex] = useState(null);
  const isPlayingFullRef = React.useRef(false);
  const timerRef = React.useRef(null);
  
  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const playInSequence = (index, part = 'first', currentPlayMode = playMode, speed = playbackSpeed) => {
    const listToPlay = filteredPhrases; // Play the currently filtered list
    
    if (!isPlayingFullRef.current || index >= listToPlay.length) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActivePhraseIndex(null);
      return;
    }

    // Auto expand visibleCount to ensure active card is rendered in DOM
    if (index >= visibleCount) {
      setVisibleCount(prev => Math.max(prev, index + 24));
    }

    setActivePhraseIndex(index);
    const item = listToPlay[index];
    const nativeText = learningMode === 'zh' ? item.zh : item.en;
    const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

    if (currentPlayMode === 'vi-only') {
      audioEngine.speak(item.viet, {
        accent: selectedAccent,
        lang: 'vi',
        rate: speed,
        key: `seq_phrase_viet_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          const gap = speed < 0.85 ? 1400 : 1100;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
          }, gap);
        }
      });
    } else if (currentPlayMode === 'zh-vi') {
      // 1次中文 -> 1次越文 (Chinese first, then Vietnamese)
      if (part === 'first') {
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `seq_phrase_native_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index, 'second', currentPlayMode, speed);
            }, 350);
          }
        });
      } else {
        audioEngine.speak(item.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `seq_phrase_viet_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            const gap = speed < 0.85 ? 1500 : 1200;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
            }, gap);
          }
        });
      }
    } else {
      // 'vi-zh': 1次越文 -> 1次中文 (Vietnamese first, then Chinese)
      if (part === 'first') {
        audioEngine.speak(item.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `seq_phrase_viet_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index, 'second', currentPlayMode, speed);
            }, 350);
          }
        });
      } else {
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `seq_phrase_native_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            const gap = speed < 0.85 ? 1500 : 1200;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
            }, gap);
          }
        });
      }
    }
  };

  const handlePlayFull = (mode = 'zh-vi') => {
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActivePhraseIndex(null);
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }
    
    setPlayMode(mode);
    setIsPlayingFull(true);
    isPlayingFullRef.current = true;
    playInSequence(0, 'first', mode, playbackSpeed);
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
                {cat === 'all' 
                  ? (learningMode === 'zh' ? `全部類別 (${practicalPhrases.length})` : `All (${practicalPhrases.length})`) 
                  : `${categoryIcons[cat] || '💡'} ${learningMode === 'zh' ? cat.split('/')[0].trim() : (cat.split('/')[1]?.trim() || cat)}`}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Count Indicator Banner & Play Controls */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '1.2rem', 
        flexWrap: 'wrap', 
        gap: '0.8rem', 
        background: 'var(--bg-card)', 
        padding: '0.9rem 1.2rem', 
        borderRadius: '12px', 
        border: isPlayingFull ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)', 
        boxShadow: isPlayingFull ? '0 4px 16px rgba(var(--brand-primary-rgb, 239, 68, 68), 0.15)' : '0 2px 8px rgba(0,0,0,0.05)',
        transition: 'all 0.3s ease'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
          <div style={{ fontSize: '0.92em', color: 'var(--text-primary)', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Layers size={17} color="var(--brand-primary)" />
            {learningMode === 'zh' 
              ? `正在顯示 ${displayedPhrases.length} / ${filteredPhrases.length} 句` 
              : `Showing ${displayedPhrases.length} of ${filteredPhrases.length} phrases`}
          </div>
          {isPlayingFull && (
            <span style={{ 
              fontSize: '0.75em', 
              background: 'var(--brand-primary)', 
              color: '#fff', 
              padding: '0.2rem 0.55rem', 
              borderRadius: '10px', 
              fontWeight: 700,
              animation: 'pulse 1.5s infinite' 
            }}>
              {learningMode === 'zh' ? `▶ 播放中 #${(activePhraseIndex || 0) + 1}` : `▶ Playing #${(activePhraseIndex || 0) + 1}`}
            </span>
          )}
        </div>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Mode 1: Once Vietnamese, Once Chinese (越+中) */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'vi-zh' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('vi-zh')}
            style={{ 
              background: isPlayingFull && playMode === 'vi-zh' ? 'var(--brand-primary)' : '#d97706', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'vi-zh' ? 0.6 : 1,
              padding: '0.5rem 0.95rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isPlayingFull && playMode === 'vi-zh' ? '0 4px 12px rgba(217, 119, 6, 0.4)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title={learningMode === 'zh' ? '類別連續播放：先唸越文再唸中文' : 'Play Category: Viet then Native'}
          >
            {isPlayingFull && playMode === 'vi-zh' ? <Pause size={15} /> : <Play size={15} />}
            <span>
              {isPlayingFull && playMode === 'vi-zh'
                ? (learningMode === 'zh' ? '暫停' : 'Pause') 
                : (learningMode === 'zh' ? <>連續播放: 越+中</> : <>Play: Vi → Zh</>)}
            </span>
          </button>

          {/* Mode 2: Once Chinese, Once Vietnamese (中+越) */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'zh-vi' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('zh-vi')}
            style={{ 
              background: isPlayingFull && playMode === 'zh-vi' ? 'var(--brand-primary)' : '#059669', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'zh-vi' ? 0.6 : 1,
              padding: '0.5rem 0.95rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isPlayingFull && playMode === 'zh-vi' ? '0 4px 12px rgba(5, 150, 105, 0.4)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title={learningMode === 'zh' ? '類別連續播放：先唸中文再唸越文' : 'Play Category: Native then Viet'}
          >
            {isPlayingFull && playMode === 'zh-vi' ? <Pause size={15} /> : <Play size={15} />}
            <span>
              {isPlayingFull && playMode === 'zh-vi'
                ? (learningMode === 'zh' ? '暫停' : 'Pause') 
                : (learningMode === 'zh' ? <>連續播放: 中+越</> : <>Play: Zh → Vi</>)}
            </span>
          </button>

          {/* Mode 3: Vietnamese Only */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'vi-only' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('vi-only')}
            style={{ 
              background: isPlayingFull && playMode === 'vi-only' ? 'var(--brand-primary)' : '#7c3aed', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'vi-only' ? 0.6 : 1,
              padding: '0.5rem 0.85rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: isPlayingFull && playMode === 'vi-only' ? '0 4px 12px rgba(124, 58, 237, 0.4)' : '0 2px 4px rgba(0,0,0,0.1)'
            }}
            title={learningMode === 'zh' ? '類別連續播放：純越文沉浸式聽力' : 'Play Category: Viet Only'}
          >
            {isPlayingFull && playMode === 'vi-only' ? <Pause size={15} /> : <Play size={15} />}
            <span>
              {isPlayingFull && playMode === 'vi-only'
                ? (learningMode === 'zh' ? '暫停' : 'Pause') 
                : (learningMode === 'zh' ? <>純越文</> : <>Viet Only</>)}
            </span>
          </button>

          {/* Speed Toggle Chips */}
          <div className="speed-toggle-group" style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: '8px', padding: '2px', border: '1px solid var(--border-color)', marginLeft: '2px' }}>
            <button 
              className={`speed-chip ${playbackSpeed >= 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.9)}
              style={{
                background: playbackSpeed >= 0.85 ? 'var(--brand-primary)' : 'transparent',
                color: playbackSpeed >= 0.85 ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.35rem 0.6rem',
                fontSize: '0.8em',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600
              }}
              title="正常語速"
            >
              1.0x
            </button>
            <button 
              className={`speed-chip ${playbackSpeed < 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.7)}
              style={{
                background: playbackSpeed < 0.85 ? 'var(--brand-primary)' : 'transparent',
                color: playbackSpeed < 0.85 ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.35rem 0.6rem',
                fontSize: '0.8em',
                borderRadius: '6px',
                cursor: 'pointer',
                fontWeight: 600
              }}
              title="慢速精讀 (適合初學跟讀)"
            >
              0.75x
            </button>
          </div>
        </div>
      </div>

      {/* Phrase Cards Grid */}
      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))' }}>
        {displayedPhrases.map((phrase, idx) => {
          const phraseKey = `phrase_${idx}_${phrase.viet}`;
          const isPlaying = activeKey === phraseKey || activeKey === phrase.viet || activePhraseIndex === idx;
          const isSaved = savedPhrases.includes(phrase.viet);

          return (
            <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <span className="tone-symbol" style={{ fontSize: '0.78em', background: 'var(--bg-accent)', color: 'var(--brand-gold)' }}>
                  {`${categoryIcons[phrase.category] || '💡'} ${learningMode === 'zh' ? phrase.category.split('/')[0].trim() : (phrase.category.split('/')[1]?.trim() || phrase.category)}`}
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
