import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw, 
  Sparkles, Award, Play, Pause, Search, ChevronLeft, ChevronRight, 
  ChevronsLeft, ChevronsRight, X
} from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { SITUATIONAL_TOPICS } from '../data/situationalTopicsData';
import { TIER_DEFINITIONS, FREQUENCY_VOCABULARY, TIER_STATS } from '../data/frequencyVocabularyData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { srsEngine } from '../services/srsEngine';

const topicCategoryMap = {
  business_greeting: '商務職場',
  dining_restaurant: '餐飲美食',
  family_kinship: '家庭親屬',
  health_medical: '醫療健康',
  date_time_stay: '日期時間',
  pricing_bargaining: '購物殺價',
  numbers_scale: '數字量詞'
};

const topicCards = SITUATIONAL_TOPICS.flatMap(topic => 
  (topic.flashcardDeck || []).map(fc => ({
    ...fc,
    category: topicCategoryMap[topic.id] || '生活日常',
    icon: topic.icon
  }))
);

const curatedDeck = [...flashcardsDeck, ...topicCards];

const getCardIcon = (card) => {
  if (!card) return '💡';
  if (card.icon) return card.icon;
  const text = (card.zh + ' ' + card.viet + ' ' + (card.category || '')).toLowerCase();
  if (text.includes('cà phê')) return '☕';
  if (text.includes('phở') || text.includes('bún')) return '🍜';
  if (text.includes('bánh mì')) return '🥖';
  if (text.includes('cảm ơn') || text.includes('感謝')) return '🙏';
  if (text.includes('xin chào') || text.includes('你好')) return '👋';
  if (text.includes('bệnh viện') || text.includes('醫院')) return '🏥';
  if (text.includes('khách sạn') || text.includes('飯店')) return '🏨';
  if (text.includes('sân bay') || text.includes('機場')) return '✈️';
  if (text.includes('tiền') || text.includes('giá') || text.includes('đắt') || text.includes('錢') || text.includes('買')) return '💸';
  if (text.includes('công ty') || text.includes('hợp đồng') || text.includes('公司')) return '🏢';
  if (text.includes('hải sản')) return '🦀';
  if (text.includes('chúc mừng')) return '🎉';
  if (text.includes('nhậu')) return '🍻';
  const cats = {
    '問候與禮貌': '🤝',
    '購物殺價': '🛍️',
    '餐飲美食': '🍽️',
    '商務職場': '💼',
    '家庭親屬': '👨‍👩‍👧‍👦',
    '日期時間': '📅',
    '數字量詞': '🔢',
    '交通出行': '🚗',
    '飯店住宿': '🛌',
    '醫療健康': '💊',
    '社交日常': '💬',
    '漢越核心': '📖',
    '節慶祝福': '🏮',
    '道地口語': '🗣️',
    '核心人稱': '👤',
    '日常必備動詞': '⚡',
    '基礎描述': '🎨',
    '生活日常': '🏠',
    '經貿商務': '📊',
    '典範學術': '🎓',
    '修辭品格': '📜',
    '高階精通': '👑'
  };
  return cats[card.category] || '💡';
};

export const FlashcardModule = ({ selectedAccent, updateUserStats, setActiveTab }) => {
  const { learningMode, loc, t } = useLanguage();
  
  // Tier selection: 'curated' | 'top1k' | 'top3k' | 'top5k' | 'top10k' | 'all'
  const [selectedTier, setSelectedTier] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.tier) {
          sessionStorage.removeItem('viet_target_chapter');
          return item.targetParam.tier;
        }
      }
    } catch {}
    return 'top1k';
  });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPos, setSelectedPos] = useState('all');
  const [srsStatusFilter, setSrsStatusFilter] = useState('all'); // 'all' | 'due' | 'learning' | 'mastered'
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [srsData, setSrsData] = useState({});
  const [audioFirstMode, setAudioFirstMode] = useState(false);
  const [activeKey, setActiveKey] = useState(null);
  const [jumpInput, setJumpInput] = useState('');

  // Deck Autoplay state
  const [isPlayingDeck, setIsPlayingDeck] = useState(false);
  const [playMode, setPlayMode] = useState('zh-vi'); // 'zh-vi' | 'vi-zh' | 'vi-only'
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const isPlayingDeckRef = useRef(false);
  const timerRef = useRef(null);

  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.tier) {
        setSelectedTier(chap.targetParam.tier);
        setCurrentIndex(0);
        setIsFlipped(false);
      }
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  useEffect(() => {
    setSrsData(srsEngine.loadSrsData());
  }, []);

  // Compute base deck by tier
  const tierDeck = useMemo(() => {
    if (selectedTier === 'curated') {
      return curatedDeck;
    }
    if (selectedTier === 'all') {
      return FREQUENCY_VOCABULARY;
    }
    return FREQUENCY_VOCABULARY.filter(w => w.tier === selectedTier);
  }, [selectedTier]);

  // Compute available categories & POS in current tier
  const availableCategories = useMemo(() => {
    if (selectedTier === 'curated') {
      return [
        { id: 'all', labelZh: `全部 (${curatedDeck.length})`, labelEn: `All (${curatedDeck.length})` },
        { id: '購物殺價', labelZh: '🛍️ 購物殺價', labelEn: '🛍️ Shopping' },
        { id: '餐飲美食', labelZh: '🍜 餐飲美食', labelEn: '🍜 Food' },
        { id: '商務職場', labelZh: '💼 商務職場', labelEn: '💼 Business' },
        { id: '家庭親屬', labelZh: '👨‍👩‍👧‍👦 家庭親屬', labelEn: '👨‍👩‍👧‍👦 Family' },
        { id: '日期時間', labelZh: '📅 日期時間', labelEn: '📅 Dates' },
        { id: '數字量詞', labelZh: '🔢 數字量詞', labelEn: '🔢 Numbers' },
        { id: '醫療健康', labelZh: '💊 醫療健康', labelEn: '💊 Medical' },
        { id: '問候與禮貌', labelZh: '👋 問候禮貌', labelEn: '👋 Greetings' },
        { id: '交通出行', labelZh: '✈️ 交通出行', labelEn: '✈️ Transport' },
        { id: '飯店住宿', labelZh: '🏨 飯店住宿', labelEn: '🏨 Hotel' }
      ];
    }
    const catCounts = {};
    tierDeck.forEach(w => {
      const c = w.category || '一般';
      catCounts[c] = (catCounts[c] || 0) + 1;
    });
    const items = Object.entries(catCounts).map(([cat, count]) => ({
      id: cat,
      labelZh: `${cat} (${count})`,
      labelEn: `${cat} (${count})`
    }));
    return [{ id: 'all', labelZh: `全部分類 (${tierDeck.length})`, labelEn: `All (${tierDeck.length})` }, ...items.slice(0, 10)];
  }, [selectedTier, tierDeck]);

  // Filter deck by Category, POS, and Search Query
  const filteredDeck = useMemo(() => {
    let deck = tierDeck;
    const q = searchQuery.toLowerCase().trim();
    if (q) {
      deck = deck.filter(c => 
        (c.viet && c.viet.toLowerCase().includes(q)) ||
        (c.zh && c.zh.toLowerCase().includes(q)) ||
        (c.en && c.en.toLowerCase().includes(q)) ||
        (c.hanViet && c.hanViet.toLowerCase().includes(q))
      );
    }
    if (selectedCategory !== 'all') {
      if (selectedTier === 'curated' && selectedCategory === '購物殺價') {
        deck = deck.filter(c => c.category && (c.category.includes('購物') || c.category.includes('殺價')));
      } else {
        deck = deck.filter(c => c.category === selectedCategory);
      }
    }
    if (selectedPos !== 'all') {
      deck = deck.filter(c => c.pos === selectedPos);
    }
    return deck;
  }, [tierDeck, searchQuery, selectedCategory, selectedPos, selectedTier]);

  // Apply SRS filters
  const { reviewDeck, srsCounts } = useMemo(() => {
    const baseDeck = filteredDeck.length > 0 ? filteredDeck : tierDeck;
    const now = Date.now();
    const due = [];
    const learning = [];
    const mastered = [];

    baseDeck.forEach(card => {
      const data = srsData[card.id];
      if (data && data.dueDate && data.dueDate <= now) {
        due.push(card);
      }
      if (data && data.interval >= 14) {
        mastered.push(card);
      } else if (data && data.repetitions > 0) {
        learning.push(card);
      }
    });

    let selectedDeck = baseDeck;
    if (srsStatusFilter === 'due') {
      selectedDeck = due.length > 0 ? due : baseDeck.slice(0, 20);
    } else if (srsStatusFilter === 'learning') {
      selectedDeck = learning.length > 0 ? learning : baseDeck;
    } else if (srsStatusFilter === 'mastered') {
      selectedDeck = mastered.length > 0 ? mastered : baseDeck;
    }

    return {
      reviewDeck: selectedDeck.length > 0 ? selectedDeck : baseDeck,
      srsCounts: {
        all: baseDeck.length,
        due: due.length,
        learning: learning.length,
        mastered: mastered.length
      }
    };
  }, [filteredDeck, tierDeck, srsData, srsStatusFilter]);

  // Reset indices on tier/filter change
  useEffect(() => {
    setCurrentIndex(0);
    setIsFlipped(false);
    isPlayingDeckRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    audioEngine.stop();
    setIsPlayingDeck(false);
  }, [selectedTier, selectedCategory, selectedPos, searchQuery]);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => {
      unsubscribe();
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  const playDeckInSequence = (index, part = 'first', currentPlayMode = playMode, speed = playbackSpeed) => {
    if (!isPlayingDeckRef.current || index >= reviewDeck.length) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      return;
    }

    setCurrentIndex(index);
    const card = reviewDeck[index];
    const nativeText = learningMode === 'zh' ? card.zh : card.en;
    const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

    if (currentPlayMode === 'vi-only') {
      setIsFlipped(false);
      audioEngine.speak(card.viet, {
        accent: selectedAccent,
        lang: 'vi',
        rate: speed,
        key: `fc_seq_viet_${card.id}`,
        onEnd: () => {
          if (!isPlayingDeckRef.current) return;
          const gap = speed < 0.85 ? 1400 : 1100;
          timerRef.current = setTimeout(() => {
            if (isPlayingDeckRef.current) {
              if (index + 1 < reviewDeck.length) {
                playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
              } else {
                setIsPlayingDeck(false);
                isPlayingDeckRef.current = false;
              }
            }
          }, gap);
        }
      });
    } else if (currentPlayMode === 'zh-vi') {
      if (part === 'first') {
        setIsFlipped(true);
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `fc_seq_native_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                setIsFlipped(false);
                playDeckInSequence(index, 'second', currentPlayMode, speed);
              }
            }, 350);
          }
        });
      } else {
        setIsFlipped(false);
        audioEngine.speak(card.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `fc_seq_viet_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            const gap = speed < 0.85 ? 1600 : 1300;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                if (index + 1 < reviewDeck.length) {
                  playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
                } else {
                  setIsPlayingDeck(false);
                  isPlayingDeckRef.current = false;
                }
              }
            }, gap);
          }
        });
      }
    } else {
      if (part === 'first') {
        setIsFlipped(false);
        audioEngine.speak(card.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `fc_seq_viet_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                setIsFlipped(true);
                playDeckInSequence(index, 'second', currentPlayMode, speed);
              }
            }, 350);
          }
        });
      } else {
        setIsFlipped(true);
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `fc_seq_native_${card.id}`,
          onEnd: () => {
            if (!isPlayingDeckRef.current) return;
            const gap = speed < 0.85 ? 1600 : 1300;
            timerRef.current = setTimeout(() => {
              if (isPlayingDeckRef.current) {
                if (index + 1 < reviewDeck.length) {
                  setIsFlipped(false);
                  playDeckInSequence(index + 1, 'first', currentPlayMode, speed);
                } else {
                  setIsPlayingDeck(false);
                  isPlayingDeckRef.current = false;
                }
              }
            }, gap);
          }
        });
      }
    }
  };

  const handlePlayDeck = (mode = 'zh-vi') => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }

    setPlayMode(mode);
    setIsPlayingDeck(true);
    isPlayingDeckRef.current = true;
    playDeckInSequence(currentIndex, 'first', mode, playbackSpeed);
  };

  const handlersRef = useRef({ handleCardClick: null, handleAnswer: null });

  const handleCardClick = () => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    const nextFlipped = !isFlipped;
    setIsFlipped(nextFlipped);
    if (!isFlipped && currentCard) {
      audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
    }
  };

  const handleAnswer = (quality) => {
    if (isPlayingDeck) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    setIsFlipped(false);
    if (currentCard) {
      if (updateUserStats && quality > 0) updateUserStats(quality > 0 ? 10 : 2);
      const updated = srsEngine.reviewCard(currentCard.id, quality);
      setSrsData(prev => ({
        ...prev,
        [currentCard.id]: updated
      }));
    }

    setTimeout(() => {
      if (currentIndex < reviewDeck.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 180);
  };

  useEffect(() => {
    handlersRef.current = { handleCardClick, handleAnswer };
  }, [handleCardClick, handleAnswer]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        handlersRef.current.handleCardClick();
      } else if (e.code === 'Digit1' || e.code === 'Numpad1' || e.code === 'ArrowLeft' || e.code === 'KeyA') {
        handlersRef.current.handleAnswer(0);
      } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
        handlersRef.current.handleAnswer(3);
      } else if (e.code === 'Digit3' || e.code === 'Numpad3' || e.code === 'ArrowRight' || e.code === 'KeyD') {
        handlersRef.current.handleAnswer(4);
      } else if (e.code === 'Digit4' || e.code === 'Numpad4') {
        handlersRef.current.handleAnswer(5);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleJump = (e) => {
    e.preventDefault();
    const target = parseInt(jumpInput, 10);
    if (!isNaN(target) && target >= 1 && target <= reviewDeck.length) {
      setCurrentIndex(target - 1);
      setIsFlipped(false);
      setJumpInput('');
    }
  };

  const handleStep = (delta) => {
    const nextIdx = Math.max(0, Math.min(reviewDeck.length - 1, currentIndex + delta));
    setCurrentIndex(nextIdx);
    setIsFlipped(false);
  };

  const isCardPlaying = activeKey === `fc_${currentCard?.id}` || activeKey === currentCard?.viet || activeKey === `fc_seq_viet_${currentCard?.id}`;

  const tierButtons = [
    { id: 'top1k', labelZh: '🌟 Top 1,000 (A1-A2 基礎)', labelEn: '🌟 Top 1,000 (A1-A2)', color: '#10b981' },
    { id: 'top3k', labelZh: '🚀 Top 3,000 (B1 社交)', labelEn: '🚀 Top 3,000 (B1)', color: '#3b82f6' },
    { id: 'top5k', labelZh: '💼 Top 5,000 (B2 商務)', labelEn: '💼 Top 5,000 (B2)', color: '#8b5cf6' },
    { id: 'top10k', labelZh: '👑 Top 10,000 (C1-C2 精通)', labelEn: '👑 Top 10,000 (C1-C2)', color: '#f59e0b' },
    { id: 'curated', labelZh: '🎯 經典情境必背 (400張)', labelEn: '🎯 Core Scenarios (400)', color: '#06b6d4' },
    { id: 'all', labelZh: '📚 萬詞大辭庫 (10,000字)', labelEn: '📚 Full Lexicon (10k)', color: '#ec4899' }
  ];

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Brain color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越語核心分級字庫與 Leitner 間隔記憶 3D 閃卡' : 'Graded Frequency Vocabulary & 3D Leitner Flashcards'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '涵蓋 Top 1,000 / 3,000 / 5,000 / 10,000 字全階梯高頻詞庫。點擊卡片（或按空白鍵）3D 翻轉查看釋義、漢越對比與真實語境例句。'
            : 'Explore genuine graded vocabulary tiers (Top 1k, 3k, 5k, 10k). Flip cards to view definitions, Sino-Vietnamese roots, and native context sentences.'}
        </p>
      </div>

      {/* Tier Selector Bar */}
      <div style={{ maxWidth: '850px', margin: '0 auto 1.2rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {tierButtons.map(tb => (
          <button
            key={tb.id}
            onClick={() => {
              audioEngine.playHaptic('selection');
              setSelectedTier(tb.id);
              setSelectedCategory('all');
              setSelectedPos('all');
            }}
            style={{
              padding: '0.45rem 0.9rem',
              fontSize: '0.85rem',
              fontWeight: selectedTier === tb.id ? 800 : 600,
              borderRadius: 'var(--radius-full)',
              border: selectedTier === tb.id ? `2px solid ${tb.color}` : '1px solid var(--border-color)',
              background: selectedTier === tb.id ? `${tb.color}15` : 'var(--bg-card)',
              color: selectedTier === tb.id ? tb.color : 'var(--text-secondary)',
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem'
            }}
          >
            {learningMode === 'zh' ? tb.labelZh : tb.labelEn}
          </button>
        ))}
      </div>

      {/* Search Bar & Quick Navigation */}
      <div style={{ maxWidth: '720px', margin: '0 auto 1rem', display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '220px', position: 'relative', display: 'flex', alignItems: 'center' }}>
          <Search size={16} style={{ position: 'absolute', left: '10px', color: 'var(--text-muted)' }} />
          <input
            type="text"
            placeholder={learningMode === 'zh' ? '搜尋越文、中文、英文或漢越音...' : 'Search word, meaning, or Han-Viet...'}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '0.45rem 2rem 0.45rem 2.2rem',
              fontSize: '0.88rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)',
              outline: 'none'
            }}
          />
          {searchQuery && (
            <X 
              size={14} 
              style={{ position: 'absolute', right: '10px', cursor: 'pointer', color: 'var(--text-muted)' }} 
              onClick={() => setSearchQuery('')}
            />
          )}
        </div>

        {/* Jump to Index Form */}
        <form onSubmit={handleJump} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
          <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{learningMode === 'zh' ? '跳至' : 'Go'}:</span>
          <input
            type="number"
            min="1"
            max={reviewDeck.length}
            placeholder={`1-${reviewDeck.length}`}
            value={jumpInput}
            onChange={(e) => setJumpInput(e.target.value)}
            style={{
              width: '75px',
              padding: '0.4rem 0.5rem',
              fontSize: '0.85rem',
              textAlign: 'center',
              borderRadius: 'var(--radius-sm)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-card)',
              color: 'var(--text-primary)'
            }}
          />
          <button
            type="submit"
            style={{
              padding: '0.4rem 0.65rem',
              fontSize: '0.82rem',
              fontWeight: 700,
              borderRadius: 'var(--radius-sm)',
              border: 'none',
              background: 'var(--brand-primary)',
              color: '#fff',
              cursor: 'pointer'
            }}
          >
            OK
          </button>
        </form>
      </div>

      {/* Category Filter Chips */}
      <div style={{ maxWidth: '850px', margin: '0 auto 0.8rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {availableCategories.map(cat => (
          <button
            key={cat.id}
            className={`category-filter-chip ${selectedCategory === cat.id ? 'active' : ''}`}
            onClick={() => setSelectedCategory(cat.id)}
            style={{
              fontSize: '0.78em',
              padding: '0.3rem 0.65rem',
              borderRadius: 'var(--radius-full)'
            }}
          >
            {learningMode === 'zh' ? cat.labelZh : cat.labelEn}
          </button>
        ))}
      </div>

      {/* SRS Mastery Status Filter Bar */}
      <div style={{ maxWidth: '650px', margin: '0 auto 1rem', display: 'flex', gap: '0.45rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {[
          { id: 'all', labelZh: `📚 全部 (${srsCounts.all})`, labelEn: `All (${srsCounts.all})` },
          { id: 'due', labelZh: `⏰ 今日待複習 (${srsCounts.due})`, labelEn: `Due (${srsCounts.due})` },
          { id: 'learning', labelZh: `📖 學習中 (${srsCounts.learning})`, labelEn: `Learning (${srsCounts.learning})` },
          { id: 'mastered', labelZh: `🏆 已掌握 (${srsCounts.mastered})`, labelEn: `Mastered (${srsCounts.mastered})` }
        ].map(st => (
          <button
            key={st.id}
            onClick={() => {
              audioEngine.playHaptic('selection');
              setSrsStatusFilter(st.id);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            style={{
              fontSize: '0.82rem',
              padding: '0.3rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: srsStatusFilter === st.id ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
              background: srsStatusFilter === st.id ? 'var(--bg-accent)' : 'var(--bg-card)',
              color: srsStatusFilter === st.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
              fontWeight: srsStatusFilter === st.id ? 800 : 600,
              cursor: 'pointer',
              transition: 'all 0.15s ease'
            }}
          >
            {learningMode === 'zh' ? st.labelZh : st.labelEn}
          </button>
        ))}
      </div>

      {/* Continuous Unit Audio Playback Toolbar */}
      <div style={{ maxWidth: '650px', margin: '0 auto 1rem', display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
        {/* Mode 1: Once Chinese, Once Vietnamese (中+越) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'zh-vi' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('zh-vi')}
          style={{ 
            background: isPlayingDeck && playMode === 'zh-vi' ? 'var(--brand-primary)' : 'var(--brand-green)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'zh-vi' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '自動翻卡：每張先播中文釋義，再翻面播越文發音 (免動手通勤聽背)' : 'Play 1x Chinese then 1x Vietnamese'}
        >
          {isPlayingDeck && playMode === 'zh-vi' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'zh-vi'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 中+越</> : <>Play: Zh → Vi</>)}
          </span>
        </button>

        {/* Mode 2: Once Vietnamese, Once Chinese (越+中) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'vi-zh' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('vi-zh')}
          style={{ 
            background: isPlayingDeck && playMode === 'vi-zh' ? 'var(--brand-primary)' : 'var(--brand-gold)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'vi-zh' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '自動翻卡：每張先播越文發音，再翻面播中文釋義' : 'Play 1x Vietnamese then 1x Chinese'}
        >
          {isPlayingDeck && playMode === 'vi-zh' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'vi-zh'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 越+中</> : <>Play: Vi → Zh</>)}
          </span>
        </button>

        {/* Mode 3: Vietnamese Only (純越文) */}
        <button 
          className={`control-btn play-full-btn ${isPlayingDeck && playMode === 'vi-only' ? 'playing' : ''}`}
          onClick={() => handlePlayDeck('vi-only')}
          style={{ 
            background: isPlayingDeck && playMode === 'vi-only' ? 'var(--brand-primary)' : 'var(--brand-accent, #8b5cf6)', 
            color: '#fff',
            opacity: isPlayingDeck && playMode !== 'vi-only' ? 0.6 : 1,
            padding: '0.45rem 0.85rem',
            fontSize: '0.85em',
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            borderRadius: '6px',
            border: 'none',
            cursor: 'pointer'
          }}
          title={learningMode === 'zh' ? '沉浸式純越文單字連續聽力' : 'Vietnamese Only'}
        >
          {isPlayingDeck && playMode === 'vi-only' ? <Pause size={14} /> : <Play size={14} />}
          <span>
            {isPlayingDeck && playMode === 'vi-only'
              ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
              : (learningMode === 'zh' ? <>播放: 純越文</> : <>Play: Viet Only</>)}
          </span>
        </button>

        {/* Speed Toggle Chips */}
        <div className="speed-toggle-group" style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-color)' }}>
          <button 
            className={`speed-chip ${playbackSpeed >= 0.85 ? 'active' : ''}`}
            onClick={() => setPlaybackSpeed(0.9)}
            style={{
              background: playbackSpeed >= 0.85 ? 'var(--brand-accent)' : 'transparent',
              color: playbackSpeed >= 0.85 ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '0.25rem 0.55rem',
              fontSize: '0.78em',
              borderRadius: '4px',
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
              background: playbackSpeed < 0.85 ? 'var(--brand-accent)' : 'transparent',
              color: playbackSpeed < 0.85 ? '#fff' : 'var(--text-secondary)',
              border: 'none',
              padding: '0.25rem 0.55rem',
              fontSize: '0.78em',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 600
            }}
            title="慢速精讀"
          >
            0.75x
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
        <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontSize: '0.95em', fontWeight: 600, color: 'var(--text-primary)' }}>
          <input 
            type="checkbox" 
            checked={audioFirstMode} 
            onChange={(e) => setAudioFirstMode(e.target.checked)} 
            style={{ cursor: 'pointer' }}
          />
          {learningMode === 'zh' ? 'Audio First (聽音盲測)' : 'Audio First Mode'}
        </label>
      </div>

      {/* Progress & Quick Step Bar */}
      <div style={{ maxWidth: '620px', margin: '0 auto 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92em', background: 'var(--bg-card)', padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <button
            onClick={() => handleStep(-20)}
            title="往前 20 張"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            <ChevronsLeft size={18} />
          </button>
          <button
            onClick={() => handleStep(-1)}
            title="上一張"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            <ChevronLeft size={18} />
          </button>
          <strong style={{ color: 'var(--brand-accent)', margin: '0 0.4rem' }}>
            {currentIndex + 1} / {reviewDeck.length}
          </strong>
          <button
            onClick={() => handleStep(1)}
            title="下一張"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            <ChevronRight size={18} />
          </button>
          <button
            onClick={() => handleStep(20)}
            title="往後 20 張"
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
          >
            <ChevronsRight size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-green)', fontWeight: 800 }}>
          <Award size={16} />
          <span>{learningMode === 'zh' ? '已掌握：' : 'Mastered: '}</span>
          <span>{Object.values(srsData).filter(d => d.interval >= 14).length} {learningMode === 'zh' ? '字' : 'words'}</span>
        </div>
      </div>

      {/* 3D Flip Card Container */}
      {currentCard && (
        <div 
          className={`flashcard-container ${isFlipped ? 'flipped' : ''}`}
          onClick={handleCardClick}
          onKeyDown={(event) => {
            if (event.key === 'Enter' || event.key === ' ') {
              event.preventDefault();
              handleCardClick();
            }
          }}
          role="button"
          tabIndex="0"
          aria-label={learningMode === 'zh' ? '翻面查看答案' : 'Flip card to reveal answer'}
        >
          <div className="flashcard-inner">
            {/* Card Front (Vietnamese) */}
            <div className="flashcard-front">
              <div style={{ display: 'flex', gap: '0.4rem', marginBottom: '1.2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                {currentCard.rank && (
                  <span className="tone-symbol" style={{ background: 'var(--bg-accent)', color: 'var(--brand-primary)', fontWeight: 800 }}>
                    #{currentCard.rank}
                  </span>
                )}
                {currentCard.cefr && (
                  <span className="tone-symbol" style={{ background: 'rgba(59,130,246,0.1)', color: '#3b82f6', fontWeight: 800 }}>
                    {currentCard.cefr}
                  </span>
                )}
                {currentCard.pos && (
                  <span className="tone-symbol" style={{ background: 'rgba(16,185,129,0.1)', color: '#10b981', fontWeight: 700 }}>
                    {currentCard.pos}
                  </span>
                )}
                <span className="tone-symbol" style={{ background: 'var(--bg-accent)', color: 'var(--brand-gold)' }}>
                  {currentCard.category || '生活日常'}
                </span>
              </div>

              <div style={{ fontSize: '2.6em', fontWeight: 900, color: 'var(--brand-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem', lineHeight: 1.2 }}>
                {audioFirstMode && !isFlipped ? (
                  <span style={{ filter: 'blur(10px)', opacity: 0.6, userSelect: 'none' }}>{currentCard.viet}</span>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.2em', filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))' }}>{getCardIcon(currentCard)}</span>
                    <span>{currentCard.viet}</span>
                  </div>
                )}
                <Volume2 
                  size={26} 
                  className={isCardPlaying ? 'playing-pulse' : ''} 
                  style={{ color: isCardPlaying ? 'var(--brand-primary)' : 'var(--brand-accent)', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
                  }}
                />
              </div>

              {currentCard.hanViet && (
                <div style={{ fontSize: '1.05em', color: 'var(--brand-gold)', marginTop: '0.75rem', fontWeight: 800 }}>
                  {learningMode === 'zh' ? `漢越音：${currentCard.hanViet}` : `Sino-Vietnamese: ${currentCard.hanViet}`}
                </div>
              )}

              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span>💡 {t('common.cardFlipHint')} (按 Space 翻轉)</span>
              </div>
            </div>

            {/* Card Back (Meaning & Example) */}
            <div className="flashcard-back">
              <span className="tone-symbol" style={{ marginBottom: '0.8rem', background: 'var(--bg-card)' }}>
                {learningMode === 'zh' ? '釋義與情境例句' : 'Meaning & Context'}
              </span>

              {audioFirstMode && (
                <div style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
                  {currentCard.viet}
                </div>
              )}

              <div style={{ fontSize: '2em', fontWeight: 900, color: 'var(--brand-primary)', marginBottom: '0.6rem' }}>
                {learningMode === 'zh' ? currentCard.zh : currentCard.en}
              </div>

              {currentCard.example && (
                <div style={{ fontSize: '0.95em', color: 'var(--text-secondary)', marginBottom: '1rem', maxWidth: '460px', lineHeight: 1.5, background: 'rgba(0,0,0,0.03)', padding: '0.6rem 0.9rem', borderRadius: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>{currentCard.example}</strong>
                    <Volume2 
                      size={18} 
                      style={{ cursor: 'pointer', color: 'var(--brand-accent)', flexShrink: 0 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        audioEngine.speak(currentCard.example, { accent: selectedAccent, key: `fc_ex_${currentCard.id}` });
                      }}
                      title="朗讀例句"
                    />
                  </div>
                  {currentCard.exampleZh && learningMode === 'zh' && (
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.88em', marginTop: '0.3rem' }}>
                      {currentCard.exampleZh}
                    </div>
                  )}
                </div>
              )}

              <button 
                className={`speaker-btn ${isCardPlaying ? 'playing' : ''}`}
                onClick={(e) => {
                  e.stopPropagation();
                  audioEngine.speak(currentCard.viet, { accent: selectedAccent, key: `fc_${currentCard.id}` });
                }}
                title={t('common.listen')}
              >
                <Volume2 size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Action Buttons: Remembered vs Need Review */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1rem' }}>
        <button 
          className="control-btn"
          style={{ background: '#ef4444', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          onClick={() => handleAnswer(0)}
          title="鍵盤快捷鍵: 1 或 ←"
        >
          <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>1</span>
          <span>{learningMode === 'zh' ? '生疏 (Again) · 1d' : 'Again · 1d'}</span>
        </button>

        <button 
          className="control-btn"
          style={{ background: '#f59e0b', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          onClick={() => handleAnswer(3)}
          title="鍵盤快捷鍵: 2"
        >
          <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>2</span>
          <span>{learningMode === 'zh' ? '困難 (Hard) · 3d' : 'Hard · 3d'}</span>
        </button>

        <button 
          className="control-btn"
          style={{ background: '#3b82f6', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          onClick={() => handleAnswer(4)}
          title="鍵盤快捷鍵: 3 或 →"
        >
          <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>3</span>
          <span>{learningMode === 'zh' ? '良好 (Good) · 6d' : 'Good · 6d'}</span>
        </button>

        <button 
          className="control-btn"
          style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
          onClick={() => handleAnswer(5)}
          title="鍵盤快捷鍵: 4"
        >
          <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>4</span>
          <span>{learningMode === 'zh' ? '容易 (Easy) · 14d+' : 'Easy · 14d+'}</span>
        </button>
      </div>

      {/* Keyboard Shortcut Indicator */}
      <div style={{ textAlign: 'center', marginTop: '0.9rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
        ⌨️ {learningMode === 'zh' ? '鍵盤快捷鍵：[空白鍵] 翻轉 · [1 / ←] 重來 · [2] 困難 · [3 / →] 良好 · [4] 容易' : 'Shortcuts: [Space] Flip · [1/←] Again · [2] Hard · [3/→] Good · [4] Easy'}
      </div>
    </div>
  );
};
