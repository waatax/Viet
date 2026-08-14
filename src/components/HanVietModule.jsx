import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Sparkles, Award, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { hanVietRoots } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const HanVietModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRoot, setSelectedRoot] = useState(hanVietRoots[0]);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const filteredRoots = hanVietRoots.filter(r => {
    const term = searchTerm.toLowerCase().trim();
    if (!term) return true;
    return (
      r.root.toLowerCase().includes(term) ||
      r.han.toLowerCase().includes(term) ||
      (r.meaningZh && r.meaningZh.toLowerCase().includes(term)) ||
      (r.meaningEn && r.meaningEn.toLowerCase().includes(term))
    );
  });

  const playWord = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
    if (updateUserStats) updateUserStats(2);
  };

  return (
    <div className="module-container">
      {/* Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          {learningMode === 'zh' ? '漢越音百字根庫 (Hán Việt Cognates Explorer)' : 'Sino-Vietnamese Root Explorer (Hán Việt)'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '越南語高達 40% - 70% 的詞彙為「漢越詞」（源自中古漢語與唐宋音韻）。掌握字根對照規律，即可透過母語經驗倍速解鎖數千高階詞彙！'
            : '40%-70% of Vietnamese vocabulary originates from Sino-Vietnamese cognates. Master core roots to rapidly decode thousands of advanced words.'}
        </p>
      </div>

      {/* Secret Weapon Knowledge Card */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', borderLeft: '4px solid var(--brand-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Sparkles size={20} color="var(--brand-accent)" />
          <h3 style={{ fontSize: '1.18em', fontWeight: 800 }}>
            {learningMode === 'zh' ? '💡 漢越音倍速記詞秘笈（台越音韻超強關聯）' : '💡 The Sino-Vietnamese Accelerator'}
          </h3>
        </div>
        <p style={{ fontSize: '0.94em', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
          {learningMode === 'zh'
            ? '越語發音與台語/客語/古漢語音韻高度契合。例如：Quốc (國) + Tế (際) = Quốc tế (國際)；Kinh (經) + Tế (濟) = Kinh tế (經濟)；Đại (大) + Học (學) = Đại học (大學)！'
            : 'Example: Quốc (Nation) + Tế (International) = Quốc tế (International); Kinh (Manage) + Tế (Economy) = Kinh tế (Economy); Đại (Big) + Học (Study) = Đại học (University)!'}
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ margin: '1.5rem 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '0.75rem 1.2rem', border: '1.5px solid var(--border-color)', boxShadow: 'var(--shadow-xs)' }}>
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.75rem' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={learningMode === 'zh' ? '搜尋字根、漢字或釋義 (如: Quốc, 學, 經濟, 自由)...' : 'Search root, Chinese character, or meaning...'}
            style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', fontSize: '0.96rem' }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', fontWeight: 800 }}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left Root List + Right Detail Compounds */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
        {/* Left: Root Picker Cards */}
        <div>
          <h3 style={{ fontSize: '1.15em', fontWeight: 800, marginBottom: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <BookOpen size={18} color="var(--brand-primary)" />
            {learningMode === 'zh' ? '核心字根列表' : 'Core Roots'} ({filteredRoots.length})
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(135px, 1fr))', gap: '0.75rem', maxHeight: '560px', overflowY: 'auto', paddingRight: '0.3rem' }}>
            {filteredRoots.map((r, idx) => {
              const isSelected = selectedRoot?.root === r.root;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedRoot(r)}
                  aria-pressed={isSelected}
                  style={{
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--bg-accent)' : 'var(--bg-card)',
                    border: `1.5px solid ${isSelected ? 'var(--brand-accent)' : 'var(--border-color)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 14px rgba(37, 99, 235, 0.2)' : 'none',
                    transform: isSelected ? 'scale(1.02)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '1.3em', fontWeight: 900, color: 'var(--brand-primary)' }}>
                    {r.root}
                  </div>
                  <div style={{ fontSize: '0.95em', fontWeight: 800, color: 'var(--brand-gold)', margin: '0.15rem 0' }}>
                    {r.han}
                  </div>
                  <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>
                    {loc(r, 'meaning')}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right: Active Root Deep Breakdown & Compounds */}
        {selectedRoot && (
          <div className="simulator-box" style={{ margin: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
              <div>
                <span style={{ fontSize: '0.82em', fontWeight: 800, color: 'var(--brand-accent)', textTransform: 'uppercase' }}>
                  ACTIVE ROOT EXPLORATION
                </span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem', marginTop: '0.3rem' }}>
                  <span style={{ fontSize: '2.2em', fontWeight: 900, color: 'var(--brand-primary)' }}>{selectedRoot.root}</span>
                  <span style={{ fontSize: '1.6em', fontWeight: 800, color: 'var(--brand-gold)' }}>({selectedRoot.han})</span>
                </div>
                <div style={{ fontSize: '1em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                  {learningMode === 'zh' ? '釋義：' : 'Meaning: '}
                  <strong>{loc(selectedRoot, 'meaning')}</strong>
                </div>
              </div>

              <button
                className="speaker-btn"
                onClick={() => playWord(selectedRoot.root, `root_${selectedRoot.root}`)}
                title={`播放 ${selectedRoot.root} 發音`}
              >
                <Volume2 size={20} />
              </button>
            </div>

            {/* Phonological Rule Note */}
            {selectedRoot.phonologyNote && (
              <div style={{ background: 'var(--bg-main)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', marginBottom: '1.2rem', fontSize: '0.88em', color: 'var(--text-secondary)', borderLeft: '3px solid var(--brand-gold)' }}>
                📖 <strong>{learningMode === 'zh' ? '音韻考證：' : 'Phonetics: '}</strong>
                {learningMode === 'zh' ? selectedRoot.phonologyNoteZh : selectedRoot.phonologyNoteEn}
              </div>
            )}

            {/* Derived Compound Words Grid */}
            <h4 style={{ fontSize: '1.1em', fontWeight: 800, marginBottom: '0.8rem', color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '衍生高頻複合詞 (Compounds)' : 'Derived Compounds'}
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {selectedRoot.compounds?.map((c, cIdx) => {
                const isPlayingC = activeKey === c.viet;
                return (
                  <div
                    key={cIdx}
                    style={{
                      background: 'var(--bg-main)',
                      padding: '0.85rem 1.1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      gap: '0.75rem',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div>
                      <div style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-accent)' }}>
                        {c.viet}
                        <span style={{ fontSize: '0.85em', color: 'var(--brand-gold)', marginLeft: '0.5rem', fontWeight: 700 }}>
                          [{c.han}]
                        </span>
                      </div>
                      <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                        {learningMode === 'zh' ? c.zh : c.en}
                      </div>
                    </div>

                    <button
                      className={`speaker-btn mini-btn ${isPlayingC ? 'playing' : ''}`}
                      onClick={() => playWord(c.viet, c.viet)}
                      title={`朗讀 ${c.viet}`}
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
