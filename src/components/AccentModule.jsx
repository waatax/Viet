import React, { useState, useEffect } from 'react';
import { Compass, Volume2, ArrowRight, RefreshCw, CheckCircle, Play, Sparkles, MapPin, Search, Filter, MessageSquare, Music, Radio, Volume1 } from 'lucide-react';
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
    }, 1300);
  };

  const playSingleWord = (word, accent, key) => {
    audioEngine.speak(word, { accent, key });
  };

  const playTonePitchComparison = (toneId, rowKey) => {
    audioEngine.playTonePitch(toneId, 'north');
    setTimeout(() => {
      audioEngine.playTonePitch(toneId, 'south');
    }, 750);
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
          {learningMode === 'zh' ? '2. 6大聲調南北調值分化 (含雙音朗讀)' : '2. Tone Divergence & Audio'}
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
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
            <h3 style={{ fontSize: '1.25em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: 0 }}>
              <RefreshCw size={20} color="var(--brand-accent)" />
              {learningMode === 'zh' ? '核心聲母與韻尾音變規律' : 'Core Phonetic Alternation Rules'}
            </h3>
            <span style={{ fontSize: '0.86em', color: 'var(--text-secondary)' }}>
              💡 點擊「聽南北對比」可依序聆聽河內北音與胡志明南音的明顯音變差異
            </span>
          </div>

          <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.25rem' }}>
            {accentDifferences.phoneticRules.map((rule, idx) => {
              const ruleKey = `rule_${idx}`;
              const isPlayingNorth = activeKey === `${ruleKey}_north`;
              const isPlayingSouth = activeKey === `${ruleKey}_south`;
              const isPlayingRule = isPlayingNorth || isPlayingSouth;

              const northTarget = rule.northAudioText || rule.audioText;
              const southTarget = rule.southAudioText || rule.audioText;

              return (
                <div key={idx} className={`learning-card ${isPlayingRule ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)', display: 'flex', flexDirection: 'column' }}>
                  {/* Card Header */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.8rem' }}>
                    <h4 style={{ color: 'var(--brand-accent)', fontSize: '1.18em', fontWeight: 800, margin: 0 }}>
                      {rule.rule}
                    </h4>
                    <button 
                      className={`control-btn ${isPlayingRule ? 'active' : ''}`}
                      style={{ fontSize: '0.8em', padding: '0.35rem 0.75rem', gap: '0.35rem', borderRadius: 'var(--radius-full)' }}
                      onClick={() => playAccentComparison(northTarget, southTarget, ruleKey)}
                      title="先聽北越標準音，再聽南越地道音"
                    >
                      <Volume2 size={15} color="var(--brand-accent)" />
                      <span>{learningMode === 'zh' ? '聽南北對比' : 'Listen Both'}</span>
                    </button>
                  </div>

                  {/* North Box */}
                  <div 
                    style={{ 
                      background: isPlayingNorth ? 'rgba(59, 130, 246, 0.12)' : 'var(--bg-card)', 
                      padding: '0.75rem 0.9rem', 
                      borderRadius: 'var(--radius-sm)', 
                      marginBottom: '0.6rem', 
                      borderLeft: '4px solid var(--brand-primary)',
                      border: isPlayingNorth ? '1.5px solid var(--brand-primary)' : '1px solid var(--border-color)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--brand-primary)', fontSize: '0.88em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        🏛️ {learningMode === 'zh' ? '北越 (河內音)：' : 'Northern: '}
                      </strong>
                      <button
                        className={`mini-btn ${isPlayingNorth ? 'playing' : ''}`}
                        onClick={() => playSingleWord(northTarget, 'north', `${ruleKey}_north`)}
                        style={{ padding: '0.2rem 0.55rem', fontSize: '0.78em', borderRadius: 'var(--radius-full)', background: 'var(--bg-main)', border: '1px solid var(--border-color)' }}
                        title="點擊朗讀北越音"
                      >
                        <Volume2 size={13} /> {northTarget}
                      </button>
                    </div> 
                    <div style={{ fontSize: '0.92em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                      {learningMode === 'zh' ? rule.northZh : rule.northEn}
                    </div>
                  </div>

                  {/* South Box */}
                  <div 
                    style={{ 
                      background: isPlayingSouth ? 'rgba(16, 185, 129, 0.12)' : 'var(--bg-card)', 
                      padding: '0.75rem 0.9rem', 
                      borderRadius: 'var(--radius-sm)', 
                      marginBottom: '0.85rem', 
                      borderLeft: '4px solid var(--brand-green)',
                      border: isPlayingSouth ? '1.5px solid var(--brand-green)' : '1px solid var(--border-color)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ color: 'var(--brand-green)', fontSize: '0.88em', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                        🌴 {learningMode === 'zh' ? '南越 (胡志明音)：' : 'Southern: '}
                      </strong>
                      <button
                        className={`mini-btn ${isPlayingSouth ? 'playing' : ''}`}
                        onClick={() => playSingleWord(southTarget, 'south', `${ruleKey}_south`)}
                        style={{ padding: '0.2rem 0.55rem', fontSize: '0.78em', borderRadius: 'var(--radius-full)', background: 'var(--bg-main)', border: '1px solid var(--border-color)' }}
                        title="點擊朗讀南越音"
                      >
                        <Volume2 size={13} /> {southTarget}
                      </button>
                    </div> 
                    <div style={{ fontSize: '0.92em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.25rem', lineHeight: 1.5 }}>
                      {learningMode === 'zh' ? rule.southZh : rule.southEn}
                    </div>
                  </div>

                  {/* Interactive Sub-Examples Chips */}
                  {rule.pairs && rule.pairs.length > 0 && (
                    <div style={{ background: 'var(--bg-card)', padding: '0.65rem 0.8rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.8rem', border: '1px dashed var(--border-color)' }}>
                      <div style={{ fontSize: '0.8em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.4rem', textTransform: 'uppercase' }}>
                        {learningMode === 'zh' ? '點擊單字對照朗讀：' : 'Click word pairs to compare:'}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                        {rule.pairs.map((p, pIdx) => {
                          const pNorthKey = `${ruleKey}_p_${pIdx}_n`;
                          const pSouthKey = `${ruleKey}_p_${pIdx}_s`;
                          const isPNorth = activeKey === pNorthKey;
                          const isPSouth = activeKey === pSouthKey;

                          return (
                            <div key={pIdx} style={{ display: 'inline-flex', alignItems: 'center', background: 'var(--bg-main)', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden', fontSize: '0.84em' }}>
                              <span style={{ padding: '0.25rem 0.5rem', fontWeight: 700, color: 'var(--text-primary)', borderRight: '1px solid var(--border-color)', background: 'rgba(0,0,0,0.03)' }}>
                                {p.displayWord || p.northWord}
                              </span>
                              <button
                                onClick={() => playSingleWord(p.northWord, 'north', pNorthKey)}
                                style={{ border: 'none', background: isPNorth ? 'var(--brand-primary)' : 'transparent', color: isPNorth ? '#fff' : 'var(--brand-primary)', padding: '0.25rem 0.5rem', cursor: 'pointer', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                                title={`北音 ${p.northIPA || ''}`}
                              >
                                🏛️ {p.northIPA || '北'}
                              </button>
                              <button
                                onClick={() => playSingleWord(p.southWord || p.northWord, 'south', pSouthKey)}
                                style={{ border: 'none', background: isPSouth ? 'var(--brand-green)' : 'transparent', color: isPSouth ? '#fff' : 'var(--brand-green)', padding: '0.25rem 0.5rem', cursor: 'pointer', fontWeight: 700, borderLeft: '1px solid var(--border-color)', display: 'inline-flex', alignItems: 'center', gap: '0.2rem' }}
                                title={`南音 ${p.southIPA || ''}`}
                              >
                                🌴 {p.southIPA || '南'}
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Footer */}
                  <div style={{ fontSize: '0.86em', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.4rem', borderTop: '1px solid var(--border-color)' }}>
                    <span>💡 {learningMode === 'zh' ? '完整例詞：' : 'Full example: '}<strong>{rule.example}</strong></span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* View 2: Tone Divergence (Hanoi 6 vs Saigon 5 with Audio) */}
      {activeSubTab === 'tones' && (
        <div className="simulator-box">
          <div style={{ marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Music color="var(--brand-gold)" />
              {learningMode === 'zh' ? '6 大聲調南北調值分化與問跌合流 (含示範發音與調值合成音)' : '6 Tones Regional Divergence & Tone Audio'}
            </h3>
            <p style={{ fontSize: '0.94em', color: 'var(--text-secondary)', lineHeight: 1.6, margin: 0 }}>
              {learningMode === 'zh'
                ? '北越河內完整保留 6 個獨立聲調，跌聲 (Ngã) 具有極具辨識度的喉頭緊閉頓斷音；南越胡志明則將「問聲 (Hỏi)」與「跌聲 (Ngã)」完全合流為同一種平緩轉折問調，實質上僅有 5 個調。'
                : 'Northern dialect preserves 6 distinct tones with glottal stops. Southern dialect merges Hỏi & Ngã into a single dipping tone (5 active tones).'}
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>{learningMode === 'zh' ? '聲調名稱' : 'Tone Name'}</th>
                  <th>🏛️ {learningMode === 'zh' ? '北越 (河內標準調值)' : 'North (Hanoi Standard)'}</th>
                  <th>🌴 {learningMode === 'zh' ? '南越 (胡志明商業調值)' : 'South (Saigon Tone)'}</th>
                  <th>{learningMode === 'zh' ? '南北雙音對比' : 'Compare Audio'}</th>
                  <th>{learningMode === 'zh' ? '純調值音高' : 'Harmonic Pitch'}</th>
                  <th>{learningMode === 'zh' ? '差異解析' : 'Distinction'}</th>
                </tr>
              </thead>
              <tbody>
                {accentDifferences.toneDifferences?.map((tDiff, idx) => {
                  const toneKey = `tone_diff_${tDiff.id || idx}`;
                  const isPlayingNorth = activeKey === `${toneKey}_north`;
                  const isPlayingSouth = activeKey === `${toneKey}_south`;
                  const isPlayingTone = isPlayingNorth || isPlayingSouth;
                  const isPlayingSynth = activeKey === `${tDiff.id}_north` || activeKey === `${tDiff.id}_south`;

                  return (
                    <tr key={idx} className={isPlayingTone || isPlayingSynth ? 'row-highlight' : ''}>
                      <td style={{ fontWeight: 800, color: 'var(--brand-primary)', whiteSpace: 'nowrap' }}>
                        <div>{tDiff.tone}</div>
                        <div style={{ fontSize: '0.8em', color: 'var(--text-muted)', fontWeight: 600 }}>
                          例: <strong>{tDiff.sampleWord}</strong>
                        </div>
                      </td>

                      {/* North Cell */}
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--brand-accent)', marginBottom: '0.35rem' }}>
                          {tDiff.northZh}
                        </div>
                        <button
                          className={`mini-btn ${isPlayingNorth ? 'playing' : ''}`}
                          onClick={() => playSingleWord(tDiff.northAudio || tDiff.sampleWord, 'north', `${toneKey}_north`)}
                          style={{ fontSize: '0.8em', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--brand-primary)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                          title="聆聽北越聲調發音"
                        >
                          <Volume2 size={13} />
                          <span>{tDiff.northAudio || tDiff.sampleWord}</span>
                        </button>
                      </td>

                      {/* South Cell */}
                      <td>
                        <div style={{ fontWeight: 600, color: 'var(--brand-green)', marginBottom: '0.35rem' }}>
                          {tDiff.southZh}
                        </div>
                        <button
                          className={`mini-btn ${isPlayingSouth ? 'playing' : ''}`}
                          onClick={() => playSingleWord(tDiff.southAudio || tDiff.sampleWord, 'south', `${toneKey}_south`)}
                          style={{ fontSize: '0.8em', padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-full)', background: 'var(--bg-main)', border: '1px solid var(--border-color)', color: 'var(--brand-green)', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                          title="聆聽南越聲調發音"
                        >
                          <Volume2 size={13} />
                          <span>{tDiff.southAudio || tDiff.sampleWord}</span>
                        </button>
                      </td>

                      {/* Compare Voice */}
                      <td>
                        <button 
                          className={`control-btn ${isPlayingTone ? 'active' : ''}`}
                          style={{ fontSize: '0.82em', padding: '0.35rem 0.7rem', gap: '0.3rem', whiteSpace: 'nowrap' }}
                          onClick={() => playAccentComparison(tDiff.northAudio || tDiff.sampleWord, tDiff.southAudio || tDiff.sampleWord, toneKey)}
                        >
                          <Volume2 size={14} color="var(--brand-accent)" />
                          <span>{learningMode === 'zh' ? '聽雙音' : 'Compare'}</span>
                        </button>
                      </td>

                      {/* Synthesizer Pitch */}
                      <td>
                        <button
                          className={`control-btn ${isPlayingSynth ? 'active' : ''}`}
                          style={{ fontSize: '0.82em', padding: '0.35rem 0.7rem', gap: '0.3rem', whiteSpace: 'nowrap' }}
                          onClick={() => playTonePitchComparison(tDiff.id || 'ngang', toneKey)}
                          title="播放 Web Audio API 南北音高軌跡合成音"
                        >
                          <Music size={14} color="var(--brand-gold)" />
                          <span>{learningMode === 'zh' ? '音高曲線' : 'Pitch'}</span>
                        </button>
                      </td>

                      {/* Explanation */}
                      <td style={{ fontSize: '0.9em', color: 'var(--text-secondary)', minWidth: '220px', lineHeight: 1.5 }}>
                        {tDiff.diffZh}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* View 3: Lexical Comparison Matrix (24+ Groups) */}
      {activeSubTab === 'matrix' && (
        <div className="simulator-box">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
            <div>
              <h3 style={{ fontSize: '1.25em', fontWeight: 800, margin: 0 }}>
                {learningMode === 'zh' ? '南北常用生活詞彙差異對照表 (24+組高頻矩陣)' : 'North vs South Lexical Matrix'}
              </h3>
              <p style={{ fontSize: '0.88em', color: 'var(--text-secondary)', margin: '0.25rem 0 0 0' }}>
                💡 點擊個別詞彙即可以該地方口音朗讀，點擊「聽雙音」可連續聆聽南北對照
              </p>
            </div>

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

                  // Parse primary word for playback in case of multiple slashes
                  const southWords = item.south.includes('/') ? item.south.split('/').map(s => s.trim()) : [item.south];
                  const northWords = item.north.includes('/') ? item.north.split('/').map(s => s.trim()) : [item.north];

                  const primaryNorth = northWords[0];
                  const primarySouth = southWords[0];

                  return (
                    <tr key={index} className={isPlayingRow ? 'row-highlight' : ''}>
                      <td>
                        <span className="tone-symbol" style={{ fontSize: '0.8em' }}>{item.category}</span>
                      </td>
                      <td style={{ fontWeight: 700 }}>
                        {learningMode === 'zh' ? item.meaningZh : item.meaningEn}
                      </td>

                      {/* North Column */}
                      <td>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {northWords.map((nw, nwIdx) => (
                            <span 
                              key={nwIdx}
                              style={{ color: 'var(--brand-primary)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'var(--bg-main)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}
                              onClick={() => playSingleWord(nw, 'north', `${rowKey}_north`)}
                              title="點擊以北越口音朗讀"
                            >
                              {nw}
                              <Volume2 size={13} className={isPlayingNorth ? 'playing-pulse' : ''} />
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* South Column */}
                      <td>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                          {southWords.map((sw, swIdx) => (
                            <span 
                              key={swIdx}
                              style={{ color: 'var(--brand-green)', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem', background: 'var(--bg-main)', padding: '0.2rem 0.55rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)' }}
                              onClick={() => playSingleWord(sw, 'south', `${rowKey}_south`)}
                              title="點擊以南越口音朗讀"
                            >
                              {sw}
                              <Volume2 size={13} className={isPlayingSouth ? 'playing-pulse' : ''} />
                            </span>
                          ))}
                        </div>
                      </td>

                      {/* Compare Action */}
                      <td>
                        <button 
                          className={`control-btn ${isPlayingRow ? 'active' : ''}`}
                          style={{ fontSize: '0.82em', padding: '0.35rem 0.75rem', gap: '0.35rem', whiteSpace: 'nowrap' }}
                          onClick={() => playAccentComparison(primaryNorth, primarySouth, rowKey)}
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
            {accentDifferences.regionalParticles?.map((reg, rIdx) => {
              const isNorthRegion = rIdx === 0;
              const regionAccent = isNorthRegion ? 'north' : 'south';

              return (
                <div key={rIdx} className="learning-card" style={{ background: 'var(--bg-main)' }}>
                  <h4 style={{ fontSize: '1.15em', fontWeight: 800, color: isNorthRegion ? 'var(--brand-primary)' : 'var(--brand-green)', marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>
                    {reg.region}
                  </h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {reg.particles.map((p, pIdx) => {
                      const pKey = `pt_${rIdx}_${pIdx}`;
                      const isPlayingParticle = activeKey === pKey;
                      const words = p.word.includes('/') ? p.word.split('/').map(w => w.trim()) : [p.word];

                      return (
                        <div key={pIdx} style={{ background: 'var(--bg-card)', padding: '0.75rem 1rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.75rem' }}>
                          <div>
                            <div style={{ fontSize: '1.15em', fontWeight: 900, color: isNorthRegion ? 'var(--brand-primary)' : 'var(--brand-green)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                              {p.word}
                            </div>
                            <div style={{ fontSize: '0.88em', color: 'var(--text-secondary)', marginTop: '0.15rem', lineHeight: 1.4 }}>
                              {p.usageZh}
                            </div>
                          </div>
                          <button
                            className={`speaker-btn mini-btn ${isPlayingParticle ? 'playing' : ''}`}
                            onClick={() => playSingleWord(words[0], regionAccent, pKey)}
                            title={`以${isNorthRegion ? '北越' : '南越'}口音朗讀`}
                          >
                            <Volume2 size={15} />
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default AccentModule;
