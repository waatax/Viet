import React, { useState, useEffect } from 'react';
import { Compass, Volume2, ArrowRight, RefreshCw, CheckCircle, Play, Sparkles, MapPin } from 'lucide-react';
import { accentDifferences } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const AccentModule = ({ selectedAccent, setSelectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
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

  return (
    <div className="module-container">
      {/* Interactive Accent Switcher Hero Banner */}
      <div className="simulator-box" style={{ background: 'linear-gradient(135deg, var(--bg-card) 0%, var(--bg-accent) 100%)', border: '1.5px solid var(--border-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.2rem' }}>
          <div>
            <span style={{ fontSize: '0.82em', fontWeight: 800, color: 'var(--brand-gold)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
              DIALECT CENTER · GIỌNG BẮC & GIỌNG NAM
            </span>
            <h2 style={{ fontSize: '1.5em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '0.3rem 0' }}>
              <Compass color="var(--brand-primary)" />
              {learningMode === 'zh' ? '南北越口音與習慣用語對比中心' : 'North vs South Vietnamese Dialect Center'}
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.94em', maxWidth: '600px' }}>
              {learningMode === 'zh'
                ? '河內音（北越）聲調分明、規範嚴謹，為標準新聞檢定音；西貢音（南越）軟化輕快、商業交際廣泛。'
                : 'Hanoi dialect is standard for media & exams with 6 distinct tones; Saigon dialect merges tones with smooth glides for commerce.'}
            </p>
          </div>

          <div style={{ display: 'flex', background: 'var(--bg-card)', padding: '0.35rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)', gap: '0.3rem' }}>
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

      {/* Phonetic Rules Comparison Cards */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RefreshCw size={20} color="var(--brand-accent)" />
          {learningMode === 'zh' ? '核心發音音變規律 (Phonetic Alternation Rules)' : 'Core Phonetic Alternation Rules'}
        </h3>

        <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {accentDifferences.phoneticRules.map((rule, idx) => {
            const ruleKey = `rule_${idx}`;
            const isPlayingRule = activeKey === `${ruleKey}_north` || activeKey === `${ruleKey}_south`;

            return (
              <div key={idx} className={`learning-card ${isPlayingRule ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ color: 'var(--brand-accent)', fontSize: '1.15em', fontWeight: 800 }}>
                    {learningMode === 'zh' ? '字母群：' : 'Letter: '}{rule.rule}
                  </h4>
                  <button 
                    className={`speaker-btn mini-btn ${isPlayingRule ? 'playing' : ''}`}
                    onClick={() => playAccentComparison(rule.audioText || rule.example, rule.audioText || rule.example, ruleKey)}
                    title="對比南北越此音範例朗讀"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem', borderLeft: '3px solid var(--brand-primary)' }}>
                  <strong style={{ color: 'var(--brand-primary)', fontSize: '0.88em' }}>
                    🏛️ {learningMode === 'zh' ? '北越發音：' : 'Northern: '}
                  </strong> 
                  <div style={{ fontSize: '0.94em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {learningMode === 'zh' ? rule.northZh : rule.northEn}
                  </div>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.6rem', borderLeft: '3px solid var(--brand-green)' }}>
                  <strong style={{ color: 'var(--brand-green)', fontSize: '0.88em' }}>
                    🌴 {learningMode === 'zh' ? '南越發音：' : 'Southern: '}
                  </strong> 
                  <div style={{ fontSize: '0.94em', fontWeight: 600, color: 'var(--text-primary)', marginTop: '0.15rem' }}>
                    {learningMode === 'zh' ? rule.southZh : rule.southEn}
                  </div>
                </div>

                <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span>💡 {learningMode === 'zh' ? '例字：' : 'Ex: '}<strong>{rule.example}</strong></span>
                  <div style={{ display: 'flex', gap: '0.35rem' }}>
                    <button 
                      className="control-btn"
                      style={{ padding: '0.2rem 0.55rem', fontSize: '0.78em' }}
                      onClick={() => playSingleWord(rule.audioText || rule.example, 'north', `${ruleKey}_north`)}
                    >
                      北音
                    </button>
                    <button 
                      className="control-btn"
                      style={{ padding: '0.2rem 0.55rem', fontSize: '0.78em' }}
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

      {/* Vocabulary Comparison Matrix Table */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1.2rem' }}>
          {learningMode === 'zh' ? '南北常用生活詞彙差異對照表 (Vocabulary Matrix)' : 'North vs South Lexical Differences Matrix'}
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{learningMode === 'zh' ? '類別' : 'Category'}</th>
                <th>{learningMode === 'zh' ? '釋義' : 'Meaning'}</th>
                <th>🏛️ {learningMode === 'zh' ? '北越用語 (Giọng Bắc)' : 'North (Hanoi)'}</th>
                <th>🌴 {learningMode === 'zh' ? '南越用語 (Giọng Nam)' : 'South (Saigon)'}</th>
                <th>{learningMode === 'zh' ? '雙音對比' : 'Compare Audio'}</th>
              </tr>
            </thead>
            <tbody>
              {accentDifferences.wordComparisonMatrix.map((item, index) => {
                const rowKey = `matrix_${index}`;
                const isPlayingNorth = activeKey === `${rowKey}_north`;
                const isPlayingSouth = activeKey === `${rowKey}_south`;
                const isPlayingRow = isPlayingNorth || isPlayingSouth;

                return (
                  <tr key={index} className={isPlayingRow ? 'row-highlight' : ''}>
                    <td>
                      <span className="tone-symbol" style={{ fontSize: '0.82em' }}>{item.category}</span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      {learningMode === 'zh' ? item.meaningZh : item.meaningEn}
                    </td>
                    <td>
                      <span 
                        style={{ color: 'var(--brand-primary)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                        onClick={() => playSingleWord(item.north, 'north', `${rowKey}_north`)}
                        title="點擊朗讀北越詞彙"
                      >
                        {item.north}
                        <Volume2 size={14} className={isPlayingNorth ? 'playing-pulse' : ''} />
                      </span>
                    </td>
                    <td>
                      <span 
                        style={{ color: 'var(--brand-green)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
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
                        style={{ fontSize: '0.82em', padding: '0.32rem 0.65rem' }}
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
    </div>
  );
};
