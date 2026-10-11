import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Star, X, Search, Volume2, Trash2, Copy, Check, Play,
  RotateCw, ArrowRight, BookOpen, Layers, Award, Sparkles,
  Download, HelpCircle, CheckCircle2, ChevronRight, ChevronLeft
} from 'lucide-react';
import { bookmarkService } from '../services/bookmarkService';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import './BookmarksModal.css';

export default function BookmarksModal({ isOpen, onClose, selectedAccent = 'north', updateUserStats }) {
  const { learningMode, t } = useLanguage();
  const [bookmarks, setBookmarks] = useState(() => bookmarkService.getAll());
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [copiedId, setCopiedId] = useState(null);
  const [playingKey, setPlayingKey] = useState(null);

  // Practice / Drill Mode
  const [isPracticeMode, setIsPracticeMode] = useState(false);
  const [practiceIndex, setPracticeIndex] = useState(0);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [practiceScore, setPracticeScore] = useState({ mastered: 0, review: 0 });
  const [isPracticeFinished, setIsPracticeFinished] = useState(false);

  useEffect(() => {
    const unsub = bookmarkService.subscribe(newItems => {
      setBookmarks(newItems);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsubAudio = audioEngine.subscribe(state => {
      setPlayingKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubAudio();
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsPracticeMode(false);
      setIsPracticeFinished(false);
      setPracticeIndex(0);
      setIsAnswerRevealed(false);
      setPracticeScore({ mastered: 0, review: 0 });
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setSelectedCategory('all');
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const categories = useMemo(() => {
    return [
      { id: 'all', labelZh: '全部收藏', labelEn: 'All Items' },
      { id: 'vocab', labelZh: '🌟 單字庫', labelEn: 'Vocab' },
      { id: 'sentence', labelZh: '💬 實戰金句', labelEn: 'Phrases' },
      { id: 'business', labelZh: '💼 職場商務', labelEn: 'Business' },
      { id: 'emergency', labelZh: '🚨 生活急救', labelEn: 'Emergency' },
      { id: 'grammar', labelZh: '📚 核心語法', labelEn: 'Grammar' }
    ];
  }, []);

  const filteredBookmarks = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return bookmarks.filter(item => {
      const cat = (item.category || item.module || '').toLowerCase();
      let matchCat = true;
      if (selectedCategory === 'vocab') {
        matchCat = cat.includes('字') || cat.includes('vocab') || item.module === 'flashcards';
      } else if (selectedCategory === 'sentence') {
        matchCat = cat.includes('句') || cat.includes('phrase') || item.module === 'phrases' || item.module === 'conversation' || item.module === 'topics';
      } else if (selectedCategory === 'business') {
        matchCat = cat.includes('商') || cat.includes('business');
      } else if (selectedCategory === 'emergency') {
        matchCat = cat.includes('急') || cat.includes('emergency') || cat.includes('醫');
      } else if (selectedCategory === 'grammar') {
        matchCat = cat.includes('語法') || cat.includes('grammar') || item.module === 'grammar';
      }

      if (!matchCat) return false;
      if (!q) return true;

      const viet = (item.viet || '').toLowerCase();
      const zh = (item.zh || '').toLowerCase();
      const en = (item.en || '').toLowerCase();
      const hanViet = (item.hanViet || '').toLowerCase();
      return viet.includes(q) || zh.includes(q) || en.includes(q) || hanViet.includes(q);
    });
  }, [bookmarks, selectedCategory, searchQuery]);

  if (!isOpen) return null;

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const handleCopy = (item) => {
    const textToCopy = `${item.viet}\n${item.zh || ''}${item.hanViet ? ` (${item.hanViet})` : ''}`;
    navigator.clipboard?.writeText(textToCopy);
    setCopiedId(item.id || item.viet);
    audioEngine.playHaptic('tap');
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleRemove = (item) => {
    audioEngine.playHaptic('tap');
    bookmarkService.remove(item.id || item.viet);
  };

  const handleClearAll = () => {
    if (window.confirm(learningMode === 'zh' ? '確定要清空所有收藏的生詞與金句嗎？' : 'Are you sure you want to clear all bookmarks?')) {
      audioEngine.playHaptic('warning');
      bookmarkService.clear();
    }
  };

  const handleExportMarkdown = () => {
    audioEngine.playHaptic('success');
    let md = `# 🇻🇳 我的越南語學習生詞本 (Viet Learning Hub Word Bank)\n\n`;
    md += `*匯出日期：${new Date().toLocaleDateString()} | 總計：${bookmarks.length} 個收藏項目*\n\n`;
    md += `| 越南語 (Tiếng Việt) | 中文釋義 (Ý Nghĩa) | 漢越音 / 筆記 (Ghi Chú) |\n`;
    md += `|---|---|---|\n`;
    bookmarks.forEach(b => {
      md += `| **${b.viet}** | ${b.zh || '-'} | ${b.hanViet || b.category || '-'} |\n`;
    });
    navigator.clipboard?.writeText(md);
    alert(learningMode === 'zh' ? '✅ 已成功將生詞筆記以 Markdown 表格格式複製到剪貼簿！' : '✅ Word bank successfully copied as Markdown table!');
  };

  // Practice Mode Actions
  const currentPracticeItem = filteredBookmarks[practiceIndex];

  const handlePracticeAnswer = (isMastered) => {
    if (isMastered) {
      audioEngine.playComboSound(2);
      setPracticeScore(prev => ({ ...prev, mastered: prev.mastered + 1 }));
    } else {
      audioEngine.playGentleError();
      setPracticeScore(prev => ({ ...prev, review: prev.review + 1 }));
    }

    if (practiceIndex + 1 < filteredBookmarks.length) {
      setPracticeIndex(prev => prev + 1);
      setIsAnswerRevealed(false);
    } else {
      setIsPracticeFinished(true);
      audioEngine.playLevelUpFanfare();
      if (updateUserStats) {
        updateUserStats({
          type: 'ADD_XP',
          payload: Math.min(60, filteredBookmarks.length * 5)
        });
      }
    }
  };

  return (
    <div className="bookmarks-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="bookmarks-modal-card" onClick={e => e.stopPropagation()}>
        <div className="ios-sheet-grabber" />

        {/* Header */}
        <div className="bookmarks-modal-header">
          <div className="bookmarks-header-title-box">
            <div className="bookmarks-badge">
              <Star size={14} className="star-icon-anim" fill="currentColor" />
              <span>{learningMode === 'zh' ? '個人生詞本與收藏庫' : 'Personal Word Bank'}</span>
              <span className="bookmarks-count-pill">{bookmarks.length}</span>
            </div>
            <h2>
              {isPracticeMode 
                ? (learningMode === 'zh' ? '🎯 收藏快測閃卡特訓' : '🎯 Flashcard Drill') 
                : (learningMode === 'zh' ? '我的越語筆記精選' : 'Saved Vocabulary & Phrases')}
            </h2>
          </div>

          <div className="bookmarks-header-actions">
            {!isPracticeMode && bookmarks.length > 0 && (
              <>
                <button
                  className="bm-header-btn practice-trigger-btn"
                  onClick={() => {
                    audioEngine.playHaptic('selection');
                    setIsPracticeMode(true);
                    setPracticeIndex(0);
                    setIsAnswerRevealed(false);
                    setIsPracticeFinished(false);
                  }}
                  title={learningMode === 'zh' ? '以閃卡模式複習收藏的單字與金句' : 'Practice with Flashcards'}
                >
                  <Sparkles size={15} />
                  <span>{learningMode === 'zh' ? '閃卡測驗' : 'Practice'}</span>
                </button>
                <button
                  className="bm-header-btn"
                  onClick={handleExportMarkdown}
                  title={learningMode === 'zh' ? '匯出生詞表為 Markdown 筆記' : 'Export as Markdown'}
                >
                  <Download size={15} />
                  <span>{learningMode === 'zh' ? '匯出' : 'Export'}</span>
                </button>
              </>
            )}

            {isPracticeMode && (
              <button
                className="bm-header-btn"
                onClick={() => {
                  audioEngine.playHaptic('tap');
                  setIsPracticeMode(false);
                }}
              >
                <BookOpen size={15} />
                <span>{learningMode === 'zh' ? '返回列表' : 'List View'}</span>
              </button>
            )}

            <button className="bm-close-btn" onClick={() => { audioEngine.playHaptic('tap'); onClose(); }} aria-label="Close modal">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {!isPracticeMode ? (
          <>
            {/* Filter and Search Bar */}
            <div className="bookmarks-controls-bar">
              <div className="bookmarks-search-wrap">
                <Search size={16} className="bm-search-icon" />
                <input
                  type="text"
                  className="bookmarks-search-input"
                  placeholder={learningMode === 'zh' ? '搜尋收藏的越語單字、句子或中文意思…' : 'Search saved phrases or definitions...'}
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                />
                {searchQuery && (
                  <button className="bm-search-clear" onClick={() => setSearchQuery('')}>
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="bookmarks-cat-chips">
                {categories.map(cat => (
                  <button
                    key={cat.id}
                    className={`bm-cat-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                    onClick={() => {
                      audioEngine.playHaptic('selection');
                      setSelectedCategory(cat.id);
                    }}
                  >
                    {learningMode === 'zh' ? cat.labelZh : cat.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Bookmarks List Container */}
            <div className="bookmarks-list-scroller">
              {filteredBookmarks.length === 0 ? (
                <div className="bookmarks-empty-state">
                  <div className="bm-empty-icon">⭐</div>
                  <h3>{bookmarks.length === 0 ? (learningMode === 'zh' ? '尚無收藏內容' : 'No Bookmarks Yet') : (learningMode === 'zh' ? '無符合條件的收藏' : 'No Matching Items')}</h3>
                  <p>
                    {bookmarks.length === 0
                      ? (learningMode === 'zh' 
                          ? '在萬詞庫、實戰生活情境、商務出差或語法單元中，點擊任何 ⭐ 圖示，即可將生詞與高頻金句收錄於此！' 
                          : 'Click any star icon across the modules to save words and phrases to your personal collection!')
                      : (learningMode === 'zh' ? '嘗試更換分類或清除搜尋關鍵字。' : 'Try switching categories or clearing search keywords.')}
                  </p>
                </div>
              ) : (
                <div className="bookmarks-grid">
                  {filteredBookmarks.map((item, idx) => {
                    const isPlaying = playingKey === (item.id || item.viet);
                    const isCopied = copiedId === (item.id || item.viet);
                    return (
                      <div key={item.id || idx} className="bookmark-card">
                        <div className="bm-card-top">
                          <span className="bm-card-tag">{item.category || item.tag || '收藏'}</span>
                          <div className="bm-card-actions">
                            <button
                              className="bm-action-icon-btn"
                              onClick={() => handleCopy(item)}
                              title={learningMode === 'zh' ? '複製整條句子與翻譯' : 'Copy'}
                            >
                              {isCopied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                            </button>
                            <button
                              className="bm-action-icon-btn remove-btn"
                              onClick={() => handleRemove(item)}
                              title={learningMode === 'zh' ? '從收藏移除' : 'Remove'}
                            >
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </div>

                        <div className="bm-card-body">
                          <div className="bm-viet-row">
                            <h4 className="bm-viet-text">{item.viet}</h4>
                            <button
                              className={`bm-play-btn ${isPlaying ? 'is-playing' : ''}`}
                              onClick={() => handleSpeak(item.viet, item.id || item.viet)}
                              title="真人語音朗讀"
                            >
                              <Volume2 size={16} />
                            </button>
                          </div>

                          {item.zh && <p className="bm-zh-text">{item.zh}</p>}
                          {item.en && <p className="bm-en-text">{item.en}</p>}
                          {item.hanViet && (
                            <div className="bm-hanviet-tag">
                              <span>漢越:</span> {item.hanViet}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Footer with Clear and Stats */}
            {bookmarks.length > 0 && (
              <div className="bookmarks-modal-footer">
                <span className="bm-footer-stats">
                  {learningMode === 'zh' 
                    ? `顯示 ${filteredBookmarks.length} / ${bookmarks.length} 個生詞項目` 
                    : `Showing ${filteredBookmarks.length} of ${bookmarks.length} items`}
                </span>
                <button className="bm-clear-all-btn" onClick={handleClearAll}>
                  <Trash2 size={13} />
                  <span>{learningMode === 'zh' ? '清空生詞庫' : 'Clear All'}</span>
                </button>
              </div>
            )}
          </>
        ) : (
          /* Practice Flashcard Mode */
          <div className="bookmarks-practice-container">
            {!isPracticeFinished && currentPracticeItem ? (
              <div className="bm-practice-card-box">
                <div className="bm-practice-progress-bar">
                  <div
                    className="bm-practice-progress-fill"
                    style={{ width: `${((practiceIndex + 1) / filteredBookmarks.length) * 100}%` }}
                  />
                </div>

                <div className="bm-practice-meta">
                  <span className="bm-practice-step">
                    {practiceIndex + 1} / {filteredBookmarks.length}
                  </span>
                  <span className="bm-practice-tag">{currentPracticeItem.category || '生詞測試'}</span>
                </div>

                {/* Question Side */}
                <div className="bm-practice-card-main">
                  <h3 className="bm-practice-viet">{currentPracticeItem.viet}</h3>
                  <button
                    className="bm-practice-audio-btn"
                    onClick={() => handleSpeak(currentPracticeItem.viet, currentPracticeItem.id || currentPracticeItem.viet)}
                  >
                    <Volume2 size={20} />
                    <span>播放標準發音</span>
                  </button>

                  {/* Reveal Button */}
                  {!isAnswerRevealed ? (
                    <button
                      className="bm-reveal-answer-btn"
                      onClick={() => {
                        audioEngine.playHaptic('tap');
                        setIsAnswerRevealed(true);
                      }}
                    >
                      <Sparkles size={16} />
                      <span>查看釋義與中文解析</span>
                    </button>
                  ) : (
                    /* Revealed Answer Box */
                    <div className="bm-revealed-box">
                      <div className="bm-revealed-zh">{currentPracticeItem.zh}</div>
                      {currentPracticeItem.en && <div className="bm-revealed-en">{currentPracticeItem.en}</div>}
                      {currentPracticeItem.hanViet && (
                        <div className="bm-revealed-hanviet">
                          <strong>漢越音根：</strong>{currentPracticeItem.hanViet}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Score / Self Evaluation Buttons */}
                {isAnswerRevealed && (
                  <div className="bm-practice-actions-row">
                    <button
                      className="bm-eval-btn review-btn"
                      onClick={() => handlePracticeAnswer(false)}
                    >
                      <span>🔄 再練一次</span>
                    </button>
                    <button
                      className="bm-eval-btn master-btn"
                      onClick={() => handlePracticeAnswer(true)}
                    >
                      <span>✅ 熟記掌握</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              /* Finish Screen */
              <div className="bm-practice-finish-card">
                <div className="bm-finish-emoji">🎉🏆</div>
                <h3>{learningMode === 'zh' ? '生詞特訓圓滿達成！' : 'Practice Completed!'}</h3>
                <p>
                  {learningMode === 'zh'
                    ? `您已完成所有 ${filteredBookmarks.length} 個收藏項目的記憶強化！獲得 +${Math.min(60, filteredBookmarks.length * 5)} 學習經驗值。`
                    : `You reviewed all ${filteredBookmarks.length} items! Earned XP.`}
                </p>
                <div className="bm-finish-score-pill">
                  <span>✅ 熟記：{practiceScore.mastered}</span>
                  <span>•</span>
                  <span>🔄 需複習：{practiceScore.review}</span>
                </div>
                <div className="bm-finish-actions">
                  <button
                    className="primary-action"
                    onClick={() => {
                      audioEngine.playHaptic('tap');
                      setPracticeIndex(0);
                      setIsAnswerRevealed(false);
                      setIsPracticeFinished(false);
                      setPracticeScore({ mastered: 0, review: 0 });
                    }}
                  >
                    <span>🔄 重新特訓一輪</span>
                  </button>
                  <button
                    className="secondary-action"
                    onClick={() => {
                      audioEngine.playHaptic('tap');
                      setIsPracticeMode(false);
                    }}
                  >
                    <span>返回收藏列表</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
