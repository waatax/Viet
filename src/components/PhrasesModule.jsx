import React, { useState } from 'react';
import { BookOpen, Search, Volume2, Bookmark, Check } from 'lucide-react';
import { practicalPhrases } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const PhrasesModule = ({ selectedAccent }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [savedPhrases, setSavedPhrases] = useState([]);

  const categories = ['all', ...new Set(practicalPhrases.map(p => p.category))];

  const filteredPhrases = practicalPhrases.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.viet.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.zh.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (viet) => {
    setSavedPhrases(prev => 
      prev.includes(viet) ? prev.filter(p => p !== viet) : [...prev, viet]
    );
  };

  const handleSpeak = (text) => {
    audioEngine.speak(text, { accent: selectedAccent });
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <BookOpen color="var(--brand-primary)" />
          實用片語與生活生存短句速查 (Practical Phrases)
        </h2>
        <p className="section-desc">包含問候、交通、購物、求助等高頻實用句子</p>
      </div>

      {/* Search & Filter Bar */}
      <div className="simulator-box" style={{ padding: '1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          <div style={{ position: 'relative' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input 
              type="text"
              placeholder="搜尋片語或中文..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="control-btn"
              style={{ width: '100%', paddingLeft: '2.4rem', background: 'var(--bg-input)' }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map(cat => (
              <button 
                key={cat}
                className={`control-btn ${selectedCategory === cat ? 'active' : ''}`}
                style={{ background: selectedCategory === cat ? 'var(--brand-accent)' : 'var(--bg-card)', color: selectedCategory === cat ? '#fff' : 'var(--text-primary)' }}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === 'all' ? '全部分類' : cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phrase Cards */}
      <div className="grid-cards">
        {filteredPhrases.map((phrase, idx) => (
          <div key={idx} className="learning-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
              <span className="tone-symbol" style={{ fontSize: '0.8em' }}>{phrase.category}</span>
              <button 
                onClick={() => toggleBookmark(phrase.viet)}
                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: savedPhrases.includes(phrase.viet) ? 'var(--brand-gold)' : 'var(--text-muted)' }}
              >
                <Bookmark size={18} fill={savedPhrases.includes(phrase.viet) ? 'var(--brand-gold)' : 'transparent'} />
              </button>
            </div>

            <div style={{ fontSize: '1.25em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.25rem' }}>
              {phrase.viet}
            </div>

            <div style={{ fontSize: '1em', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
              {phrase.zh}
            </div>

            <div style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
              情境：{phrase.usage}
            </div>

            <button 
              className="speaker-btn"
              onClick={() => handleSpeak(phrase.viet)}
              style={{ marginTop: 'auto', alignSelf: 'flex-start' }}
            >
              <Volume2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
