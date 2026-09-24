import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Brain, Volume2, RotateCw, CheckCircle2, XCircle, ArrowRight, RefreshCw, 
  Sparkles, Award, Play, Pause, Search, ChevronLeft, ChevronRight, 
  ChevronsLeft, ChevronsRight, X, Headphones, AlertTriangle, BookOpen, 
  Music, Type, AudioLines, Zap, Check, HelpCircle, Layers3, Lightbulb
} from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { SITUATIONAL_TOPICS } from '../data/situationalTopicsData';
import { TIER_DEFINITIONS, FREQUENCY_VOCABULARY, TIER_STATS } from '../data/frequencyVocabularyData';
import { CONFUSABLE_PAIRS, CONFUSABLE_CATEGORIES, CONFUSABLE_STATS } from '../data/confusableDeckData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { srsEngine } from '../services/srsEngine';
import './FlashcardModule.css';

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

const getToneColor = (tone) => {
  switch (tone) {
    case 'ngang': return '#3b82f6';
    case 'huyen': return '#10b981';
    case 'sac': return '#ef4444';
    case 'hoi': return '#f59e0b';
    case 'nga': return '#8b5cf6';
    case 'nang': return '#64748b';
    default: return 'var(--brand-accent)';
  }
};

export const FlashcardModule = ({ selectedAccent, updateUserStats, setActiveTab }) => {
  const { learningMode, loc, t } = useLanguage();
  
  // Master Deck Mode: 'frequency' (10k Graded Vocab) vs 'confusables' (相近似字·攣生對比記憶庫)
  const [activeMasterMode, setActiveMasterMode] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.mode === 'confusables') {
          return 'confusables';
        }
      }
    } catch {}
    return 'frequency';
  });

  // ── Confusables Mode State ──
  const [selectedConfusableCategory, setSelectedConfusableCategory] = useState(() => {
    try {
      const saved = sessionStorage.getItem('viet_target_chapter');
      if (saved) {
        const item = JSON.parse(saved);
        if (item.targetParam?.confusableType) {
          return item.targetParam.confusableType;
        }
      }
    } catch {}
    return 'all';
  });
  const [confusableIndex, setConfusableIndex] = useState(0);
  const [isAbPlaying, setIsAbPlaying] = useState(false);
  const [activeSpeakingWord, setActiveSpeakingWord] = useState(null);
  const [drillState, setDrillState] = useState({});
  const isAbPlayingRef = useRef(false);
  const abTimerRef = useRef(null);

  // ── Frequency Mode State ──
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

  // Jump from Chapter Finder
  useEffect(() => {
    const handleJump = (e) => {
      const chap = e.detail;
      if (chap?.targetParam?.mode === 'confusables') {
        setActiveMasterMode('confusables');
        if (chap.targetParam.confusableType) {
          setSelectedConfusableCategory(chap.targetParam.confusableType);
        }
        setConfusableIndex(0);
      } else if (chap?.targetParam?.tier) {
        setActiveMasterMode('frequency');
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
        { id: '交通出行', labelZh: '🚗 交通出行', labelEn: '🚗 Transport' },
        { id: '社交日常', labelZh: '💬 社交日常', labelEn: '💬 Social' },
        { id: '漢越核心', labelZh: '📖 漢越核心', labelEn: '📖 Han-Viet' }
      ];
    }
    const catMap = new Map();
    tierDeck.forEach(w => {
      if (w.category) {
        catMap.set(w.category, (catMap.get(w.category) || 0) + 1);
      }
    });
    const list = [{ id: 'all', labelZh: `全部 (${tierDeck.length})`, labelEn: `All (${tierDeck.length})` }];
    catMap.forEach((cnt, cat) => {
      list.push({ id: cat, labelZh: `${cat} (${cnt})`, labelEn: `${cat} (${cnt})` });
    });
    return list;
  }, [selectedTier, tierDeck]);

  const availablePos = useMemo(() => {
    if (selectedTier === 'curated') return [];
    const posMap = new Map();
    tierDeck.forEach(w => {
      if (w.pos) {
        posMap.set(w.pos, (posMap.get(w.pos) || 0) + 1);
      }
    });
    const list = [{ id: 'all', labelZh: '全詞性', labelEn: 'All POS' }];
    posMap.forEach((cnt, pos) => {
      list.push({ id: pos, labelZh: `${pos} (${cnt})`, labelEn: `${pos} (${cnt})` });
    });
    return list;
  }, [selectedTier, tierDeck]);

  // Filter deck based on query, category, POS
  const filteredDeck = useMemo(() => {
    let result = tierDeck;
    if (selectedCategory !== 'all') {
      result = result.filter(w => w.category === selectedCategory);
    }
    if (selectedPos !== 'all') {
      result = result.filter(w => w.pos === selectedPos);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(w => 
        (w.viet && w.viet.toLowerCase().includes(q)) ||
        (w.zh && w.zh.toLowerCase().includes(q)) ||
        (w.en && w.en.toLowerCase().includes(q)) ||
        (w.hanViet && w.hanViet.toLowerCase().includes(q))
      );
    }
    return result;
  }, [tierDeck, selectedCategory, selectedPos, searchQuery]);

  // SRS Filter & Counts
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

  // ── Confusables Filtered Deck ──
  const filteredConfusables = useMemo(() => {
    return CONFUSABLE_PAIRS.filter(p => {
      if (selectedConfusableCategory !== 'all' && p.type !== selectedConfusableCategory) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase().trim();
      const matchTitle = p.titleZh.toLowerCase().includes(q) || p.titleEn.toLowerCase().includes(q);
      const matchWords = p.words.some(w => 
        w.viet.toLowerCase().includes(q) || 
        w.zh.toLowerCase().includes(q) || 
        (w.hanViet && w.hanViet.toLowerCase().includes(q))
      );
      const matchHook = p.mnemonicHookZh.toLowerCase().includes(q);
      return matchTitle || matchWords || matchHook;
    });
  }, [selectedConfusableCategory, searchQuery]);

  const currentConfusablePair = filteredConfusables[confusableIndex] || filteredConfusables[0];

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
    setConfusableIndex(0);
    setIsAbPlaying(false);
    isAbPlayingRef.current = false;
    if (abTimerRef.current) clearTimeout(abTimerRef.current);
    setActiveSpeakingWord(null);
  }, [selectedConfusableCategory]);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => {
      unsubscribe();
      isPlayingDeckRef.current = false;
      isAbPlayingRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (abTimerRef.current) clearTimeout(abTimerRef.current);
    };
  }, []);

  const currentCard = reviewDeck[currentIndex] || reviewDeck[0];

  // Frequency Mode Auto-Play Logic
  const playDeckInSequence = (index, part = 'first', currentPlayMode = 'zh-vi', speed = 0.9) => {
    if (!isPlayingDeckRef.current || index >= reviewDeck.length) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      return;
    }

    const card = reviewDeck[index];
    if (!card) {
      setIsPlayingDeck(false);
      isPlayingDeckRef.current = false;
      return;
    }

    setCurrentIndex(index);
    const nativeText = learningMode === 'zh' ? card.zh : (card.en || card.zh);
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
          const gap = speed < 0.85 ? 1800 : 1400;
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

  // ── Confusables A/B Audio Switcher ──
  const handlePlayAbAudio = (pair) => {
    if (isAbPlaying) {
      setIsAbPlaying(false);
      isAbPlayingRef.current = false;
      if (abTimerRef.current) clearTimeout(abTimerRef.current);
      audioEngine.stop();
      setActiveSpeakingWord(null);
      return;
    }

    const currentP = pair || currentConfusablePair;
    if (!currentP || !currentP.words || currentP.words.length === 0) return;

    setIsAbPlaying(true);
    isAbPlayingRef.current = true;

    const playSequence = (idx) => {
      if (!isAbPlayingRef.current) {
        setActiveSpeakingWord(null);
        return;
      }
      if (idx >= currentP.words.length) {
        setIsAbPlaying(false);
        isAbPlayingRef.current = false;
        setActiveSpeakingWord(null);
        return;
      }

      const wordObj = currentP.words[idx];
      setActiveSpeakingWord(wordObj.viet);

      audioEngine.speak(wordObj.viet, {
        accent: selectedAccent,
        lang: 'vi',
        rate: 0.82,
        key: `conf_${currentP.id}_${idx}`,
        onEnd: () => {
          if (!isAbPlayingRef.current) return;
          abTimerRef.current = setTimeout(() => {
            if (isAbPlayingRef.current) {
              playSequence(idx + 1);
            }
          }, 450);
        }
      });
    };

    playSequence(0);
  };

  const handleStepConfusable = (delta) => {
    if (isAbPlaying) {
      setIsAbPlaying(false);
      isAbPlayingRef.current = false;
      if (abTimerRef.current) clearTimeout(abTimerRef.current);
      audioEngine.stop();
      setActiveSpeakingWord(null);
    }
    const nextIdx = Math.max(0, Math.min(filteredConfusables.length - 1, confusableIndex + delta));
    setConfusableIndex(nextIdx);
  };

  const handleConfusableAnswer = (quality) => {
    const currentPair = filteredConfusables[confusableIndex];
    if (currentPair) {
      if (updateUserStats && quality > 0) updateUserStats(quality > 0 ? 10 : 2);
      const updated = srsEngine.reviewCard(currentPair.id, quality);
      setSrsData(prev => ({
        ...prev,
        [currentPair.id]: updated
      }));
      audioEngine.playHaptic(quality >= 3 ? 'success' : 'tap');
    }

    setTimeout(() => {
      if (confusableIndex < filteredConfusables.length - 1) {
        setConfusableIndex(prev => prev + 1);
      } else {
        setConfusableIndex(0);
      }
      setActiveSpeakingWord(null);
      setIsAbPlaying(false);
      isAbPlayingRef.current = false;
      if (abTimerRef.current) clearTimeout(abTimerRef.current);
    }, 180);
  };

  const handleAnswerDrill = (pairId, optionIndex, correctIndex) => {
    const isCorrect = optionIndex === correctIndex;
    setDrillState(prev => ({
      ...prev,
      [pairId]: {
        selectedIndex: optionIndex,
        isCorrect,
        answered: true
      }
    }));

    if (isCorrect) {
      audioEngine.playHaptic('success');
      if (updateUserStats) updateUserStats(5);
    } else {
      audioEngine.playHaptic('error');
    }
  };

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

  const handlersRef = useRef({ 
    handleCardClick: null, 
    handleAnswer: null, 
    handlePlayAbAudio: null, 
    handleConfusableAnswer: null,
    handleStepConfusable: null,
    activeMasterMode: 'frequency'
  });

  useEffect(() => {
    handlersRef.current = { 
      handleCardClick, 
      handleAnswer, 
      handlePlayAbAudio, 
      handleConfusableAnswer, 
      handleStepConfusable,
      activeMasterMode 
    };
  }, [handleCardClick, handleAnswer, handlePlayAbAudio, handleConfusableAnswer, handleStepConfusable, activeMasterMode]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      const { activeMasterMode, handleCardClick, handleAnswer, handlePlayAbAudio, handleConfusableAnswer, handleStepConfusable } = handlersRef.current;

      if (activeMasterMode === 'confusables') {
        if (e.code === 'Space') {
          e.preventDefault();
          handlePlayAbAudio();
        } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
          handleStepConfusable(-1);
        } else if (e.code === 'ArrowRight' || e.code === 'KeyD') {
          handleStepConfusable(1);
        } else if (e.code === 'Digit1' || e.code === 'Numpad1') {
          handleConfusableAnswer(0);
        } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
          handleConfusableAnswer(3);
        } else if (e.code === 'Digit3' || e.code === 'Numpad3') {
          handleConfusableAnswer(4);
        } else if (e.code === 'Digit4' || e.code === 'Numpad4') {
          handleConfusableAnswer(5);
        }
      } else {
        if (e.code === 'Space' || e.code === 'Enter') {
          e.preventDefault();
          handleCardClick();
        } else if (e.code === 'Digit1' || e.code === 'Numpad1' || e.code === 'ArrowLeft' || e.code === 'KeyA') {
          handleAnswer(0);
        } else if (e.code === 'Digit2' || e.code === 'Numpad2') {
          handleAnswer(3);
        } else if (e.code === 'Digit3' || e.code === 'Numpad3' || e.code === 'ArrowRight' || e.code === 'KeyD') {
          handleAnswer(4);
        } else if (e.code === 'Digit4' || e.code === 'Numpad4') {
          handleAnswer(5);
        }
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
    <div className="module-container flashcard-module-wrapper">
      <div className="section-header">
        <h2 className="section-title">
          <Brain color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越語核心記憶工坊與 Leitner 間隔重複閃卡系統' : 'Memory Engineering Hub & Leitner Spaced Flashcards'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '結合第二語言習得 (SLA) 與認知心理學，提供萬詞全頻階梯字庫與專為中文母語者設計的「相近似字·攣生記憶卡」。'
            : 'SLA-backed memory engineering: comprehensive 10k frequency tiers and tailored Confusable & Minimal Pairs Mnemonic Lab for Chinese learners.'}
        </p>
      </div>

      {/* ── Master Deck Mode Switcher ── */}
      <div className="fc-master-mode-switch" style={{ maxWidth: '640px', margin: '0 auto 1.5rem' }}>
        <button
          className={`fc-mode-pill-btn ${activeMasterMode === 'frequency' ? 'active' : ''}`}
          onClick={() => {
            audioEngine.playHaptic('selection');
            setActiveMasterMode('frequency');
          }}
        >
          <Layers3 size={18} />
          <span>{learningMode === 'zh' ? '全頻分級字庫 (10,000字)' : 'Frequency Lexicon'}</span>
          <span className="badge-pill-count">10k</span>
        </button>

        <button
          className={`fc-mode-pill-btn ${activeMasterMode === 'confusables' ? 'active' : ''}`}
          onClick={() => {
            audioEngine.playHaptic('selection');
            setActiveMasterMode('confusables');
            setConfusableIndex(0);
          }}
        >
          <Zap size={18} />
          <span>{learningMode === 'zh' ? '相近似字·攣生記憶卡 (中文專用)' : 'Confusables & Minimal Pairs'}</span>
          <span className="badge-pill-count">{CONFUSABLE_STATS.totalPairs}組</span>
        </button>
      </div>

      {/* ─────────────────────────────────────────────────────────────
          MODE A: 相近似字·攣生對比記憶卡系統 (Confusables Mnemonic Lab)
          ───────────────────────────────────────────────────────────── */}
      {activeMasterMode === 'confusables' && (
        <div>
          {/* Confusables Category Filter Bar */}
          <div className="confusable-cat-bar">
            {CONFUSABLE_CATEGORIES.map(cat => {
              const count = cat.id === 'all' ? CONFUSABLE_PAIRS.length : CONFUSABLE_PAIRS.filter(p => p.type === cat.id).length;
              return (
                <button
                  key={cat.id}
                  className={`confusable-cat-chip ${selectedConfusableCategory === cat.id ? 'active' : ''}`}
                  onClick={() => {
                    audioEngine.playHaptic('selection');
                    setSelectedConfusableCategory(cat.id);
                  }}
                >
                  <span>{learningMode === 'zh' ? cat.labelZh : cat.labelEn}</span>
                  <span style={{ opacity: 0.7, fontSize: '0.75rem' }}>({count})</span>
                </button>
              );
            })}
          </div>

          {/* Progress & Quick Step Bar */}
          <div style={{ maxWidth: '680px', margin: '0 auto 1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.92em', background: 'var(--bg-card)', padding: '0.65rem 1rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              <button
                onClick={() => handleStepConfusable(-5)}
                title="往前 5 組"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <ChevronsLeft size={18} />
              </button>
              <button
                onClick={() => handleStepConfusable(-1)}
                title="上一組"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <ChevronLeft size={18} />
              </button>
              <strong style={{ color: 'var(--brand-accent)', margin: '0 0.5rem' }}>
                {confusableIndex + 1} / {filteredConfusables.length}
              </strong>
              <button
                onClick={() => handleStepConfusable(1)}
                title="下一組"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <ChevronRight size={18} />
              </button>
              <button
                onClick={() => handleStepConfusable(5)}
                title="往後 5 組"
                style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-secondary)' }}
              >
                <ChevronsRight size={18} />
              </button>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-green)', fontWeight: 800 }}>
              <Award size={16} />
              <span>{learningMode === 'zh' ? '已掌握：' : 'Mastered: '}</span>
              <span>{filteredConfusables.filter(p => srsData[p.id]?.interval >= 14).length} 組</span>
            </div>
          </div>

          {/* Confusable Main Stage Card */}
          {currentConfusablePair && (
            <div className="confusable-stage-card" style={{ maxWidth: '780px', margin: '0 auto' }}>
              <div className="confusable-stage-header">
                <div>
                  <span className="confusable-type-badge" style={{ background: 'rgba(139, 92, 246, 0.12)', color: 'var(--brand-accent)' }}>
                    <Sparkles size={14} />
                    {learningMode === 'zh' ? currentConfusablePair.categoryLabelZh : currentConfusablePair.categoryLabelEn}
                  </span>
                  <h3 style={{ fontSize: '1.45rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.4rem 0 0.2rem' }}>
                    {currentConfusablePair.titleZh}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
                    {learningMode === 'zh' ? currentConfusablePair.summaryZh : currentConfusablePair.summaryEn}
                  </p>
                </div>

                {/* Instant A/B Extreme Audio Switcher Button */}
                <button
                  className={`ab-audio-btn ${isAbPlaying ? 'playing' : ''}`}
                  onClick={() => handlePlayAbAudio(currentConfusablePair)}
                  title={learningMode === 'zh' ? '依序播放 A 與 B 發音，訓練微差聽覺敏銳度' : 'Cycle through minimal pair sounds'}
                >
                  {isAbPlaying ? <Pause size={16} /> : <Headphones size={16} />}
                  <span>{isAbPlaying ? (learningMode === 'zh' ? '暫停對比' : 'Pause A/B') : (learningMode === 'zh' ? '🎧 A/B 極限聽音切換' : 'Listen A/B Pair')}</span>
                </button>
              </div>

              {/* Side-by-Side Dual / Multi Words Grid */}
              <div className="confusable-words-grid">
                {currentConfusablePair.words.map((w, idx) => {
                  const isSpeaking = activeSpeakingWord === w.viet || activeKey === `conf_${currentConfusablePair.id}_${idx}`;
                  const toneColor = getToneColor(w.tone);
                  return (
                    <div
                      key={idx}
                      className={`confusable-word-tile ${isSpeaking ? 'active-speaking' : ''}`}
                      onClick={() => {
                        audioEngine.speak(w.viet, { accent: selectedAccent, key: `conf_${currentConfusablePair.id}_${idx}` });
                        setActiveSpeakingWord(w.viet);
                      }}
                      title="點擊單獨朗讀此字"
                    >
                      <div className="confusable-viet-word">
                        <span>{w.viet}</span>
                        <Volume2 size={18} style={{ color: isSpeaking ? 'var(--brand-primary)' : 'var(--text-muted)' }} />
                      </div>
                      <div className="confusable-ipa-badge">{w.ipa}</div>
                      <div 
                        className="confusable-tone-tag"
                        style={{ background: `${toneColor}15`, color: toneColor, border: `1px solid ${toneColor}40` }}
                      >
                        {w.toneNameZh || w.tone} · {w.pitch}
                      </div>
                      <div className="confusable-zh-def">{learningMode === 'zh' ? w.zh : w.en}</div>
                      {w.hanViet && (
                        <div className="confusable-hanviet-tag">
                          🏛️ {w.hanViet}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Mnemonic Hook Accordion Box (💡 記憶法靈魂口訣) */}
              <div className="mnemonic-hook-box">
                <div className="mnemonic-hook-title">
                  <Lightbulb size={18} />
                  <span>{learningMode === 'zh' ? '華語學習者靈魂記憶口訣 (Mnemonic Hook)' : 'Mnemonic Memory Rhyme'}</span>
                </div>
                <div className="mnemonic-hook-text">
                  {currentConfusablePair.mnemonicHookZh}
                </div>
              </div>

              {/* Pitfall & Han-Viet Insight Grid */}
              <div className="pitfall-insight-grid">
                <div className="pitfall-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', color: '#dc2626', marginBottom: '0.35rem' }}>
                    <AlertTriangle size={15} />
                    <span>{learningMode === 'zh' ? '華語母語者常犯陷阱' : 'Chinese Learner Pitfall'}</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {currentConfusablePair.pitfallAlertZh}
                  </div>
                </div>

                <div className="hanviet-card">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '0.9rem', color: '#059669', marginBottom: '0.35rem' }}>
                    <BookOpen size={15} />
                    <span>{learningMode === 'zh' ? '漢越音韻與歷史溯源' : 'Etymology & Phonology'}</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {currentConfusablePair.hanVietInsightZh}
                  </div>
                </div>
              </div>

              {/* Master Co-occurrence Sentence Box ("一句辨雙詞" 對比共現神句) */}
              <div className="master-sentence-box">
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase', marginBottom: '0.35rem' }}>
                  🌟 {learningMode === 'zh' ? '「一句辨雙詞」對比共現神句 (Master Sentence)' : 'Master Co-occurrence Sentence'}
                </div>
                <div className="master-sentence-viet">
                  {currentConfusablePair.masterSentence}
                </div>
                <div className="master-sentence-zh">
                  {learningMode === 'zh' ? currentConfusablePair.masterSentenceZh : currentConfusablePair.masterSentenceEn}
                </div>
                <button
                  className="master-sentence-play-btn"
                  onClick={() => audioEngine.speak(currentConfusablePair.masterSentence, { accent: selectedAccent, key: `conf_sent_${currentConfusablePair.id}` })}
                  title="朗讀整句對比例句"
                >
                  <Volume2 size={18} />
                </button>
              </div>

              {/* Interactive Active Discrimination Mini-Drill */}
              {currentConfusablePair.drill && (
                <div className="confusable-drill-container">
                  <div className="drill-question-title">
                    <HelpCircle size={18} color="var(--brand-accent)" />
                    <span>{learningMode === 'zh' ? '🧠 隨堂極速辨析微測驗 (Active Discrimination Mini-Drill)' : 'Active Discrimination Mini-Drill'}</span>
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.85rem' }}>
                    {currentConfusablePair.drill.questionZh}
                  </div>

                  <div className="drill-options-grid">
                    {currentConfusablePair.drill.options.map((opt, optIdx) => {
                      const pairDrill = drillState[currentConfusablePair.id];
                      const isAnswered = pairDrill?.answered;
                      const isSelected = pairDrill?.selectedIndex === optIdx;
                      const isCorrect = optIdx === currentConfusablePair.drill.correctIndex;
                      
                      let btnClass = 'drill-opt-btn';
                      if (isAnswered) {
                        if (isCorrect) btnClass += ' correct';
                        else if (isSelected) btnClass += ' wrong';
                      }

                      return (
                        <button
                          key={optIdx}
                          className={btnClass}
                          disabled={isAnswered}
                          onClick={() => handleAnswerDrill(currentConfusablePair.id, optIdx, currentConfusablePair.drill.correctIndex)}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {drillState[currentConfusablePair.id]?.answered && (
                    <div className={`drill-feedback-box ${drillState[currentConfusablePair.id].isCorrect ? 'correct' : 'wrong'}`}>
                      {drillState[currentConfusablePair.id].isCorrect ? (
                        <>
                          <CheckCircle2 size={16} />
                          <strong>太神了，辨析完全正確！+5 XP 獲得！</strong>
                        </>
                      ) : (
                        <>
                          <XCircle size={16} />
                          <strong>別灰心，再聽聽看發音微差：</strong>
                        </>
                      )}
                      <span>{currentConfusablePair.drill.explanationZh}</span>
                    </div>
                  )}
                </div>
              )}

              {/* SRS Memory Rating Action Bar */}
              <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '1.25rem' }}>
                <button 
                  className="control-btn"
                  style={{ background: '#ef4444', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  onClick={() => handleConfusableAnswer(0)}
                  title="快捷鍵: 1"
                >
                  <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>1</span>
                  <span>{learningMode === 'zh' ? '生疏 (Again) · 1d' : 'Again · 1d'}</span>
                </button>

                <button 
                  className="control-btn"
                  style={{ background: '#f59e0b', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  onClick={() => handleConfusableAnswer(3)}
                  title="快捷鍵: 2"
                >
                  <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>2</span>
                  <span>{learningMode === 'zh' ? '困難 (Hard) · 3d' : 'Hard · 3d'}</span>
                </button>

                <button 
                  className="control-btn"
                  style={{ background: '#3b82f6', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  onClick={() => handleConfusableAnswer(4)}
                  title="快捷鍵: 3"
                >
                  <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>3</span>
                  <span>{learningMode === 'zh' ? '良好 (Good) · 6d' : 'Good · 6d'}</span>
                </button>

                <button 
                  className="control-btn"
                  style={{ background: 'var(--brand-green)', color: '#fff', padding: '0.6rem 1rem', fontSize: '0.92em', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.35rem' }}
                  onClick={() => handleConfusableAnswer(5)}
                  title="快捷鍵: 4"
                >
                  <span style={{ opacity: 0.8, fontSize: '0.8em', background: 'rgba(0,0,0,0.2)', padding: '0.1rem 0.35rem', borderRadius: '3px' }}>4</span>
                  <span>{learningMode === 'zh' ? '容易 (Easy) · 14d+' : 'Easy · 14d+'}</span>
                </button>
              </div>

              {/* Keyboard Shortcut Hints */}
              <div style={{ textAlign: 'center', marginTop: '1rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                ⌨️ {learningMode === 'zh' 
                  ? '快捷鍵：[空白鍵] A/B 聽音對比 · [← / →] 上下一組 · [1] 生疏 · [2] 困難 · [3] 良好 · [4] 容易' 
                  : 'Shortcuts: [Space] A/B Audio · [← / →] Prev/Next · [1] Again · [2] Hard · [3] Good · [4] Easy'}
              </div>
            </div>
          )}
        </div>
      )}

      {/* ─────────────────────────────────────────────────────────────
          MODE B: 全頻高頻分級字庫閃卡 (Frequency Lexicon Deck)
          ───────────────────────────────────────────────────────────── */}
      {activeMasterMode === 'frequency' && (
        <div>
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
                placeholder={learningMode === 'zh' ? '搜尋字彙、漢越音或中文釋義…' : 'Search vocab, Han-Viet, or meaning...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.45rem 2rem 0.45rem 2.2rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  fontSize: '0.9em',
                  color: 'var(--text-primary)'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '10px', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex', alignItems: 'center' }}
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Quick Card Jumper Form */}
            <form onSubmit={handleJump} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <input
                type="number"
                placeholder={`1-${reviewDeck.length}`}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                min="1"
                max={reviewDeck.length}
                style={{
                  width: '80px',
                  padding: '0.4rem 0.6rem',
                  borderRadius: '6px',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-card)',
                  fontSize: '0.85em',
                  textAlign: 'center'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '6px',
                  border: 'none',
                  background: 'var(--brand-accent)',
                  color: '#fff',
                  fontSize: '0.85em',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {learningMode === 'zh' ? '跳轉' : 'Go'}
              </button>
            </form>
          </div>

          {/* Category Filter Chips Bar */}
          <div style={{ maxWidth: '850px', margin: '0 auto 0.75rem', display: 'flex', gap: '0.4rem', flexWrap: 'wrap', justifyContent: 'center' }}>
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
      )}
    </div>
  );
};
