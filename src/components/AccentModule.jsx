import React, { useState, useEffect } from 'react';
import { Compass, Volume2, ArrowRight, RefreshCw, CheckCircle, Play, Sparkles, MapPin, Search, Filter, MessageSquare, Music } from 'lucide-react';
import { accentDifferences } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const AccentModule = ({ selectedAccent, setSelectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [activeSubTab, setActiveSubTab] = useState('rules'); // 'rules', 'tones', 'matrix', 'particles'
  const [searchWord, setSearchWord] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const playAccentComparison = (wordNorth, wordSouth, rowKey) => {
    audioEngine.speak(wordNorth, { accent: 'north', key: `${rowKey}_north` });

    setTimeout(() => {
      audioEngine.speak(wordSouth || wordNorth, { accent: 'south', key: `${rowKey}_south` });
    }, 1400);
  };

  const playSingleWord = (word, accent, key) => {
    audioEngine.speak(word, { accent, key });
  };

  const categories = ['all', ...new Set(accentDifferences.wordComparisonMatrix.map(w => w.category))];

  const filteredMatrix = accentDifferences.wordComparisonMatrix.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const q = searchWord.toLowerCase().trim();
    if (!q) return matchesCat;
    return (
      matchesCat && (
        item.north.toLowerCase().includes(q) ||
        item.south.toLowerCase().includes(q) ||
        item.meaningZh.toLowerCase().includes(q) ||
        (item.meaningEn && item.meaningEn.toLowerCase().includes(q))
      )
    );
  });

  return (
    <div className="module-container">
      {/* Interactive Accent Switcher Hero Banner */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', border: '1.5px solid var(--border-color)', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
          <div>
            <span style={{ fontSize: '0.8em', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DIALECT LAB · GIỌNG BẮC & GIỌNG NAM
            </span>
            <h2 style={{ fontSize: '1.5em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.3rem 0' }}>
              <Compass color="var(--brand-primary)" />
              {learningMode === 'zh' ? '南北越口音差異與習慣用語對比中心' : 'North vs South Vietnamese Dialect Center'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94em', maxWidth: '650px', lineHeight: 1.6 }}>
              {learningMode === 'zh' ? accentDifferences.overviewZh : accentDifferences.overviewEn}
            </p>
          </div>

          <div style={{ display: 'flex', background: 'var(--bg-card)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', gap: '0.35rem' }}>
            <button 
              className={`accent-chip ${selectedAccent === 'north' ? 'active' : ''}`}
              onClick={() => setSelectedAccent('north')}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.9em' }}
            >
              🏛️ {t('northAccent')}
            </button>
            <button 
              className={`accent-chip ${selectedAccent === 'south' ? 'active' : ''}`}
              onClick={() => setSelectedAccent('south')}
              style={{ padding: '0.5rem 1.2rem', fontSize: '0.9em' }}
            >
              🌴 {t('southAccent')}
            </button>
          </div>
        </div>
      </div>

      {/* Sub Navigation Bar */}
      <div style={{ display: 'flex', gap: '0.6rem', marginBottom: '1.5rem', flexWrap: 'wrap', overflowX: 'auto', paddingBottom: '0.2rem' }}>
        <button
          className={`control-btn ${activeSubTab === 'rules' ? 'active' : ''}`}
          style={{ background: activeSubTab === 'rules' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeSubTab === 'rules' ? '#fff' : 'inherit' }}
          onClick={() => setActiveSubTab('rules')}
        >
          <RefreshCw size={15} />
          {learningMode === 'zh' ? '1. 聲母/韻尾音變規則' : '1. Phonetic Rules'}
        </button>

        <button
          className={`control-btn ${activeSubTab === 'tones' ? 'active' : ''}`}
          style={{ background: activeSubTab === 'tones' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeSubTab === 'tones' ? '#fff' : 'inherit' }}
          onClick={() => setActiveSubTab('tones')}
        >
          <Music size={15} />
          {learningMode === 'zh' ? '2. 6大聲調南北調值分化' : '2. Tone Divergence'}
        </button>

        <button
          className={`control-btn ${activeSubTab === 'matrix' ? 'active' : ''}`}
          style={{ background: activeSubTab === 'matrix' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeSubTab === 'matrix' ? '#fff' : 'inherit' }}
          onClick={() => setActiveSubTab('matrix')}
        >
          <Compass size={15} />
          {learningMode === 'zh' ? '3. 常用生活詞彙矩陣 (24+組)' : '3. Lexical Matrix (24+)'}
        </button>

        <button
          className={`control-btn ${activeSubTab === 'particles' ? 'active' : ''}`}
          style={{ background: activeSubTab === 'particles' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeSubTab === 'particles' ? '#fff' : 'inherit' }}
          onClick={() => setActiveSubTab('particles')}
        >
          <MessageSquare size={15} />
          {learningMode === 'zh' ? '4. 獨特句末語氣詞' : '4. Modal Particles'}
        </button>
      </div>

      {/* View 1: Phonetic Alternation Rules */}
      {activeSubTab === 'rules' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <RefreshCw size={20} color="var(--brand-accent)" />
            {learningMode === 'zh' ? '核心聲母與韻尾音變規律' : 'Core Phonetic Alternation Rules'}
          </h3>

          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
            {accentDifferences.phoneticRules.map((rule, idx) => {
              const ruleKey = `rule_${idx}`;
              const isPlayingRule = activeKey === `${ruleKey}_north` || activeKey === `${ruleKey}_south`;

              return (
                <div key={idx} className={`learning-card ${isPlayingRule ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.6rem' }}>
                    <h4 style={{ color: 'var(--brand-accent)', fontSize: '1.18em', fontWeight: 800 }}>
                      {rule.rule}
                    </h4>
                    <button 
                      className={`speaker-btn mini-btn ${isPlayingRule ? 'playing' : ''}`}
                      onClick={() => playAccentComparison(rule.audioText || rule.example, rule.audioText || rule.example, ruleKey)}
                      title="對比南北越此音範例朗讀"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>

                  <div style={{ background: 'var(--bg-card)', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem', borderLeft: '3.5px solid var(--brand-primary)' }}>
                    <strong style={{ color: 'var(--brand-primary)', fontSize: '0.88em' }}>
                      🏛️ {learningMode === 'zh' ? '北越發音：' : 'Northern: '}
                    </strong> 
                    <div style={{ fontSize: '0.94em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                      {learningMode === 'zh' ? rule.northZh : rule.northEn}
                    </div>
                  </div>

                  <div style={{ background: 'var(--bg-card)', padding: '0.7rem 0.9rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.75rem', borderLeft: '3.5px solid var(--brand-green)' }}>
                    <strong style={{ color: 'var(--brand-green)', fontSize: '0.88em' }}>
                      🌴 {learningMode === 'zh' ? '南越發音：' : 'Southern: '}
                    </strong> 
                    <div style={{ fontSize: '0.94em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                      {learningMode === 'zh' ? rule.southZh : rule.southEn}
                    </div>
                  </div>

                  <div style={{ fontSize: '0.86em', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', flexWrap: 'wrap', gap: '0.4rem' }}>
                    <span>💡 {learningMode === 'zh' ? '例字：' : 'Ex: '}<strong>{rule.example}</strong></span>
                    <div style={{ display: 'flex', gap: '0.35rem' }}>
                      <button 
                        className="control-btn"
                        style={{ padding: '0.22rem 0.55rem', fontSize: '0.78em' }}
                        onClick={() => playSingleWord(rule.audioText || rule.example, 'north', `${ruleKey}_north`)}
                      >
                        北音
                      </button>
                      <button 
                        className="control-btn"
                        style={{ padding: '0.22rem 0.55rem', fontSize: '0.78em' }}
                        onClick={() => playSingleWord(rule.audioText || rule.example, 'south', `${ruleKey}_south`)}
                      >
                        南音
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* View 2: Tone Divergence (Hanoi 6 vs Saigon 5) */}
      {activeSubTab === 'tones' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Music color="var(--brand-gold)" />
            {learningMode === 'zh' ? '6 大聲調南北調值分化與問跌合流 (Tone Divergence)' : '6 Tones Regional Divergence'}
          </h3>
          <p style={{ fontSize: '0.94em', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
            {learningMode === 'zh'
              ? '北越河內完整保留 6 個獨立聲調，跌聲 (Ngã) 具有極具辨識度的中途喉門緊閉頓音；南越胡志明則將「問聲 (Hỏi)」與「跌聲 (Ngã)」合流為同一種平緩轉折問調，實質上僅有 5 個調。'
              : 'Northern dialect preserves 6 distinct tones with glottal stops. Southern dialect merges Hỏi & Ngã into a single dipping tone (5 active tones).'}
          </p>

          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{learningMode === 'zh' ? '聲調名稱' : 'Tone Name'}</th>
                  <th>🏛️ {learningMode === 'zh' ? '北越 (河內標準調值)' : 'North (Hanoi Standard)'}</th>
                  <th>🌴 {learningMode === 'zh' ? '南越 (胡志明商業調值)' : 'South (Saigon Tone)'}</th>
                  <th>{learningMode === 'zh' ? '南北調值差異精華解析' : 'Key Distinction'}</th>
                </tr>
              </thead>
              <tbody>
                {accentDifferences.toneDifferences?.map((tDiff, idx) => (
                  <tr key={idx}>
                    <td style={{ fontWeight: 800, color: 'var(--brand-primary)', whiteSpace: 'nowrap' }}>{tDiff.tone}</td>
                    <td style={{ fontWeight: 600, color: 'var(--brand-accent)' }}>{tDiff.northZh}</td>
                    <td style={{ fontWeight: 600, color: 'var(--brand-green)' }}>{tDiff.southZh}</td>
                    <td style={{ fontSize: '0.92em', color: 'var(--text-secondary)' }}>{tDiff.diffZh}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 3: Lexical Comparison Matrix (24+ Groups) */}
      {activeSubTab === 'matrix' && (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25em', fontWeight: 800 }}>
              {learningMode === 'zh' ? '南北常用生活詞彙差異對照表 (24+組高頻矩陣)' : 'North vs South Lexical Matrix'}
            </h3>

            {/* Search and Category Filter */}
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <div style={{ position: 'relative' }}>
                <Search size={16} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                  type="text"
                  placeholder={learningMode === 'zh' ? '搜尋詞彙 (如: 湯匙, 鳳梨)...' : 'Search word...'}
                  value={searchWord}
                  onChange={(e) => setSearchWord(e.target.value)}
                  style={{
                    padding: '0.4rem 0.8rem 0.4rem 2rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-main)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                style={{
                  padding: '0.4rem 0.8rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-color)',
                  background: 'var(--bg-main)',
                  color: 'var(--text-primary)',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  outline: 'none'
                }}
              >
                {categories.map(c => (
                  <option key={c} value={c}>{c === 'all' ? (learningMode === 'zh' ? '全部類別' : 'All Categories') : c}</option>
                ))}
              </select>
            </div>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{learningMode === 'zh' ? '分類' : 'Category'}</th>
                  <th>{learningMode === 'zh' ? '釋義' : 'Meaning'}</th>
                  <th>🏛️ {learningMode === 'zh' ? '北越用語 (Giọng Bắc)' : 'North (Hanoi)'}</th>
                  <th>🌴 {learningMode === 'zh' ? '南越用語 (Giọng Nam)' : 'South (Saigon)'}</th>
                  <th>{learningMode === 'zh' ? '雙音對比' : 'Compare Audio'}</th>
                </tr>
              </thead>
              <tbody>
                {filteredMatrix.map((item, index) => {
                  const rowKey = `matrix_${index}`;
                  const isPlayingNorth = activeKey === `${rowKey}_north`;
                  const isPlayingSouth = activeKey === `${rowKey}_south`;
                  const isPlayingRow = isPlayingNorth || isPlayingSouth;

                  return (
                    <tr key={index} className={isPlayingRow ? 'row-highlight' : ''}>
                      <td>
                        <span className="tone-symbol" style={{ fontSize: '0.8em' }}>{item.category}</span>
                      </td>
                      <td style={{ fontWeight: 700 }}>
                        {learningMode === 'zh' ? item.meaningZh : item.meaningEn}
                      </td>
                      <td>
                        <span 
                          style={{ color: 'var(--brand-primary)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                          onClick={() => playSingleWord(item.north, 'north', `${rowKey}_north`)}
                          title="點擊朗讀北越詞彙"
                        >
                          {item.north}
                          <Volume2 size={14} className={isPlayingNorth ? 'playing-pulse' : ''} />
                        </span>
                      </td>
                      <td>
                        <span 
                          style={{ color: 'var(--brand-green)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                          onClick={() => playSingleWord(item.south, 'south', `${rowKey}_south`)}
                          title="點擊朗讀南越詞彙"
                        >
                          {item.south}
                          <Volume2 size={14} className={isPlayingSouth ? 'playing-pulse' : ''} />
                        </span>
                      </td>
                      <td>
                        <button 
                          className={`control-btn ${isPlayingRow ? 'active' : ''}`}
                          style={{ fontSize: '0.82em', padding: '0.3rem 0.65rem' }}
                          onClick={() => playAccentComparison(item.north, item.south, rowKey)}
                        >
                          <Volume2 size={14} color="var(--brand-accent)" />
                          <span>{learningMode === 'zh' ? '聽雙音' : 'Listen Both'}</span>
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 4: Regional Modal Particles */}
      {activeSubTab === 'particles' && (
        <div className="simulator-box">
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageSquare color="var(--brand-accent)" />
            {learningMode === 'zh' ? '南北越特色句首/句末語氣詞速記' : 'Regional Modal & Polite Particles'}
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {accentDifferences.regionalParticles?.map((reg, rIdx) => (
              <div key={rIdx} className="learning-card" style={{ background: 'var(--bg-main)' }}>
                <h4 style={{ fontSize: '1.15em', fontWeight: 800, color: 'var(--brand-gold)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                  {reg.region}
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {reg.particles.map((p, pIdx) => (
                    <div key={pIdx} style={{ background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                      <div>
                        <div style={{ fontSize: '1.15em', fontWeight: 900, color: 'var(--brand-primary)' }}>
                          {p.word}
                        </div>
                        <div style={{ fontSize: '0.88em', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                          {p.usageZh}
                        </div>
                      </div>
                      <button
                        className="speaker-btn mini-btn"
                        onClick={() => playSingleWord(p.word, rIdx === 0 ? 'north' : 'south', `pt_${rIdx}_${pIdx}`)}
                        title="朗讀語氣詞"
                      >
                        <Volume2 size={15} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
