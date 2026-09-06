import React, { useState, useMemo, useEffect, useRef } from 'react';
import {
  Search, X, Layers, ChevronRight, Clock, Award,
  BookOpen, Sparkles, Filter, CheckCircle2, ArrowRight
} from 'lucide-react';
import { SYLLABUS_REGISTRY, SYLLABUS_CATEGORIES } from '../config/syllabusRegistry';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../services/audioEngine';
import './ChapterFinderModal.css';

export default function ChapterFinderModal({ isOpen, onClose, onSelectChapter }) {
  const { learningMode, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = 'hidden';
      setSelectedCardIndex(0);
    } else {
      document.body.style.overflow = '';
      setSearchQuery('');
      setSelectedCategory('all');
      setSelectedCardIndex(0);
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Keyboard shortcut listener: ESC to close, Arrow keys to navigate, Enter to select
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'Escape') {
        audioEngine.playHaptic('tap');
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        audioEngine.playHaptic('tap');
        setSelectedCardIndex(prev => Math.min(prev + 1, Math.max(0, filteredChapters.length - 1)));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        audioEngine.playHaptic('tap');
        setSelectedCardIndex(prev => Math.max(prev - 1, 0));
      } else if (e.key === 'Enter') {
        if (filteredChapters[selectedCardIndex]) {
          e.preventDefault();
          handleItemClick(filteredChapters[selectedCardIndex]);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, filteredChapters, selectedCardIndex]);

  // Filter items
  const filteredChapters = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return SYLLABUS_REGISTRY.filter(item => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      if (!matchCat) return false;
      if (!q) return true;

      const titleZh = item.titleZh?.toLowerCase() || '';
      const titleVi = item.titleVi?.toLowerCase() || '';
      const titleEn = item.titleEn?.toLowerCase() || '';
      const descZh = item.descZh?.toLowerCase() || '';
      const descVi = item.descVi?.toLowerCase() || '';
      const catZh = item.categoryLabelZh?.toLowerCase() || '';

      return titleZh.includes(q) ||
             titleVi.includes(q) ||
             titleEn.includes(q) ||
             descZh.includes(q) ||
             descVi.includes(q) ||
             catZh.includes(q);
    });
  }, [searchQuery, selectedCategory]);

  if (!isOpen) return null;

  const handleItemClick = (chapter) => {
    audioEngine.playHaptic('selection');
    onSelectChapter(chapter);
    onClose();
  };

  return (
    <div className="chapter-finder-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="chapter-finder-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="ios-sheet-grabber finder-grabber" />
        {/* Header Bar */}
        <div className="finder-header">
          <div className="finder-title-area">
            <div className="finder-title-badge">
              <Sparkles size={14} className="sparkle-icon" />
              <span>{learningMode === 'zh' ? '全域章節導航總覽' : 'Global Syllabus & Chapter Navigator'}</span>
            </div>
            <h2>{learningMode === 'zh' ? '想學哪個章節？快速搜尋直達' : 'Find Any Lesson & Jump Directly'}</h2>
          </div>
          <button className="finder-close-btn" onClick={() => { audioEngine.playHaptic('tap'); onClose(); }} aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Search Box */}
        <div className="finder-search-wrapper">
          <Search size={19} className="search-icon" />
          <input
            ref={inputRef}
            type="text"
            className="finder-search-input"
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setSelectedCardIndex(0); }}
            placeholder={learningMode === 'zh' ? '輸入關鍵字搜尋：例如「咖啡」、「海關」、「紅發票」、「談判」、「聲調」...' : 'Search chapters, e.g. "coffee", "customs", "invoice", "tones"...'}
          />
          {searchQuery && (
            <button className="finder-clear-btn" onClick={() => { audioEngine.playHaptic('tap'); setSearchQuery(''); setSelectedCardIndex(0); }} aria-label="Clear search">
              <X size={16} />
            </button>
          )}
          <div className="finder-kbd-hint">ESC 關閉 · ↑↓ 導航 · Enter 選取</div>
        </div>

        {/* Category Pills */}
        <div className="finder-category-scroll">
          {SYLLABUS_CATEGORIES.map(cat => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                className={`finder-cat-chip ${isActive ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic('selection'); setSelectedCategory(cat.id); setSelectedCardIndex(0); }}
              >
                <span>{learningMode === 'zh' ? cat.labelZh : cat.labelVi}</span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="finder-results-bar">
          <span>{learningMode === 'zh' ? `找到 ${filteredChapters.length} 個課程章節` : `Found ${filteredChapters.length} chapters`}</span>
          {searchQuery && (
            <button className="clear-filter-link" onClick={() => { audioEngine.playHaptic('tap'); setSearchQuery(''); setSelectedCategory('all'); setSelectedCardIndex(0); }}>
              {learningMode === 'zh' ? '重設搜尋' : 'Reset search'}
            </button>
          )}
        </div>

        {/* Chapter Cards List */}
        <div className="finder-cards-list">
          {filteredChapters.length === 0 ? (
            <div className="finder-empty-state">
              <p>{learningMode === 'zh' ? `找不到符合「${searchQuery}」的章節` : `No lessons match "${searchQuery}"`}</p>
              <small>{learningMode === 'zh' ? '試試其他關鍵字，或點擊上方「全部章節」查看完整清單' : 'Try searching different keywords or select All Chapters'}</small>
            </div>
          ) : (
            filteredChapters.map((chapter, idx) => (
              <div
                key={chapter.id}
                className={`finder-card-item ${idx === selectedCardIndex ? 'keyboard-active' : ''}`}
                onMouseEnter={() => setSelectedCardIndex(idx)}
                onClick={() => handleItemClick(chapter)}
              >
                <div className="card-top-row">
                  <span className="card-category-pill">
                    {learningMode === 'zh' ? chapter.categoryLabelZh : chapter.categoryLabelVi}
                  </span>
                  <div className="card-meta-pills">
                    {chapter.level && <span className="card-level-tag">{chapter.level}</span>}
                    {chapter.readTime && (
                      <span className="card-time-tag">
                        <Clock size={11} /> {chapter.readTime}
                      </span>
                    )}
                    {chapter.badge && <span className="card-custom-badge">{chapter.badge}</span>}
                  </div>
                </div>

                <div className="card-title-row">
                  <h3 className="card-title-zh">{chapter.titleZh}</h3>
                  <div className="card-title-vi">{chapter.titleVi}</div>
                </div>

                <p className="card-desc">
                  {learningMode === 'zh' ? chapter.descZh : chapter.descVi}
                </p>

                <div className="card-footer-action">
                  <span className="action-hint">
                    {learningMode === 'zh' ? '點擊立即進入學習' : 'Click to jump & start'}
                  </span>
                  <div className="action-arrow">
                    <ArrowRight size={15} />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
