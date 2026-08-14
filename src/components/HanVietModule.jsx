import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Volume2, Sparkles, Award, ArrowRight, Layers } from 'lucide-react';
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
    const term = searchTerm.toLowerCase();
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
          {learningMode === 'zh' ? '漢越音百字根庫 (Hán Việt Explorer)' : 'Sino-Vietnamese Root Explorer (Hán Việt)'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '越南語高達 40% - 70% 的詞彙為「漢越詞」。掌握常見字根音律規律，即可成倍速記海量高階詞彙！'
            : 'Over 40%-70% of formal Vietnamese vocabulary derives from Sino-Vietnamese (Hán Việt) cognates. Master core roots to rapidly decode thousands of advanced words.'}
        </p>
      </div>

      {/* Secret Weapon Knowledge Card */}
      <div className="simulator-box" style={{ background: 'var(--bg-card)', borderLeft: '4px solid var(--brand-accent)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem' }}>
          <Sparkles size={20} color="var(--brand-accent)" />
          <h3 style={{ fontSize: '1.15em', fontWeight: 800 }}>
            {learningMode === 'zh' ? '💡 漢越音極速記詞秘笈' : '💡 Why Sino-Vietnamese Cognates Matter'}
          </h3>
        </div>
        <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
          {learningMode === 'zh'
            ? '例：記住 Quốc (國) + Tế (際) = Quốc tế (國際)；Quốc (國) + Gia (家) = Quốc gia (國家)；Kinh (經) + Tế (濟) = Kinh tế (經濟)！'
            : 'Example: Master Quốc (Nation) + Tế (Across) = Quốc tế (International); Quốc (Nation) + Gia (Home/State) = Quốc gia (Country); Kinh (Manage) + Tế (Economy) = Kinh tế (Economy)!'}
        </p>
      </div>

      {/* Search Bar */}
      <div style={{ margin: '1.5rem 0', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', background: 'var(--bg-card)', borderRadius: 'var(--radius-md)', padding: '0.6rem 1rem', border: '1px solid var(--border-color)' }}>
          <Search size={18} color="var(--text-muted)" style={{ marginRight: '0.6rem' }} />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={learningMode === 'zh' ? '搜尋字根、漢字或釋義 (如: Quốc, 學, 經濟)...' : 'Search root, Chinese character, or meaning...'}
            style={{ width: '100%', background: 'transparent', border: 'none', color: 'var(--text-primary)', outline: 'none', fontSize: '0.95rem' }}
          />
          {searchTerm && (
            <button onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Main Grid: Left Root List + Right Detail Compounds */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        {/* Left: Root Picker Cards */}
        <div>
          <h3 style={{ fontSize: '1.1em', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <BookOpen size={18} color="var(--brand-primary)" />
            {learningMode === 'zh' ? '核心字根列表' : 'Core Roots'} ({filteredRoots.length})
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '0.8rem' }}>
            {filteredRoots.map((r, idx) => {
              const isSelected = selectedRoot.root === r.root;
              return (
                <div
                  key={idx}
                  onClick={() => setSelectedRoot(r)}
                  style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: isSelected ? 'var(--bg-accent)' : 'var(--bg-card)',
                    border: `1.5px solid ${isSelected ? 'var(--brand-accent)' : 'var(--border-color)'}`,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: isSelected ? '0 4px 12px rgba(217, 119, 6, 0.15)' : 'none'
                  }}
                >
                  <div style={{ fontSize: '1.25em', fontWeight: 900, color: 'var(--brand-primary)' }}>
                    {r.root}
                  </div>
                  <div style={{ fontSize: '0.95em', fontWeight: 700, color: 'var(--brand-gold)', margin: '0.2rem 0' }}>
                    {r.han}
                  </div>
                  <div style={{ fontSize: '0.8em', color: 'var(--text-muted)' }}>
                    {loc(r, 'meaning')}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: Selected Root Explorer & Compounds */}
        <div>
          <h3 style={{ fontSize: '1.1em', fontWeight: 800, marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <Award size={18} color="var(--brand-gold)" />
            {learningMode === 'zh' ? '組詞拓展與朗讀' : 'Compound Words & Pronunciation'}
          </h3>

          {selectedRoot && (
            <div className="learning-card" style={{ background: 'var(--bg-card)', padding: '1.5rem' }}>
              {/* Root Title & Play */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem', marginBottom: '1rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <span style={{ fontSize: '1.8em', fontWeight: 900, color: 'var(--brand-primary)' }}>
                      {selectedRoot.root}
                    </span>
                    <span style={{ fontSize: '1.2em', fontWeight: 800, background: 'var(--bg-accent)', padding: '0.2rem 0.6rem', borderRadius: 'var(--radius-sm)', color: 'var(--brand-accent)' }}>
                      {selectedRoot.han}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.95em', color: 'var(--text-secondary)', marginTop: '0.4rem' }}>
                    {loc(selectedRoot, 'meaning')}
                  </p>
                </div>
                <button
                  className={`control-btn ${activeKey === `root_${selectedRoot.root}` ? 'active' : ''}`}
                  onClick={() => playWord(selectedRoot.root, `root_${selectedRoot.root}`)}
                  style={{ background: 'var(--brand-primary)', color: '#fff', padding: '0.6rem 1rem' }}
                  title="朗讀字根"
                >
                  <Volume2 size={18} />
                  <span>發音</span>
                </button>
              </div>

              {/* Compound Words List */}
              <h4 style={{ fontSize: '0.95em', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.8rem', textTransform: 'uppercase' }}>
                {learningMode === 'zh' ? '相關衍生組詞 (點擊朗讀)' : 'Derived Compound Words (Click to listen)'}
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                {selectedRoot.compounds.map((cmp, i) => {
                  const cmpKey = `cmp_${cmp.viet}`;
                  const isPlayingThis = activeKey === cmpKey;
                  return (
                    <div
                      key={i}
                      onClick={() => playWord(cmp.viet, cmpKey)}
                      className={isPlayingThis ? 'playing-card' : ''}
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.85rem 1rem',
                        background: 'var(--bg-main)',
                        borderRadius: 'var(--radius-sm)',
                        border: `1px solid ${isPlayingThis ? 'var(--brand-accent)' : 'var(--border-color)'}`,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                          <span>{cmp.viet}</span>
                          <ArrowRight size={14} color="var(--brand-accent)" />
                          <span style={{ color: 'var(--brand-gold)', fontSize: '0.95em' }}>
                            {learningMode === 'zh' ? cmp.zh : cmp.en}
                          </span>
                        </div>
                      </div>
                      <button
                        className={`speaker-btn mini-btn ${isPlayingThis ? 'playing' : ''}`}
                        style={{ border: 'none', background: 'transparent', color: 'var(--brand-accent)' }}
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
    </div>
  );
};
