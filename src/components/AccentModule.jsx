import React, { useState, useEffect } from 'react';
import { Compass, Volume2, ArrowRight, RefreshCw, CheckCircle, Play } from 'lucide-react';
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
      {/* Interactive Accent Switcher Banner */}
      <div className="accent-banner">
        <div>
          <h2 style={{ fontSize: '1.4em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Compass color="var(--brand-primary)" />
            {learningMode === 'zh' ? '南北越口音與習慣用語對比中心' : 'North vs South Vietnamese Dialect Center'}
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            {learningMode === 'zh' ? '全局發音偏好：' : 'Active Accent Preference: '}
            <strong>{selectedAccent === 'north' ? t('northAccent') : t('southAccent')}</strong>
          </p>
        </div>

        <div className="accent-toggle-group">
          <button 
            className={`accent-btn ${selectedAccent === 'north' ? 'active' : ''}`}
            onClick={() => setSelectedAccent('north')}
          >
            🇻🇳 {t('northAccent')}
          </button>
          <button 
            className={`accent-btn ${selectedAccent === 'south' ? 'active' : ''}`}
            onClick={() => setSelectedAccent('south')}
          >
            🇻🇳 {t('southAccent')}
          </button>
        </div>
      </div>

      {/* Phonetic Rules Comparison Card */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RefreshCw size={20} color="var(--brand-accent)" />
          {learningMode === 'zh' ? '核心發音音變規則 (Phonetic Rules)' : 'Core Phonetic Alternation Rules'}
        </h3>

        <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {accentDifferences.phoneticRules.map((rule, idx) => {
            const ruleKey = `rule_${idx}`;
            const isPlayingRule = activeKey === `${ruleKey}_north` || activeKey === `${ruleKey}_south`;

            return (
              <div key={idx} className={`learning-card ${isPlayingRule ? 'playing-card' : ''}`} style={{ background: 'var(--bg-main)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                  <h4 style={{ color: 'var(--brand-accent)', fontSize: '1.1em', fontWeight: 700 }}>
                    {learningMode === 'zh' ? '字母/組合：' : 'Letter / Cluster: '}{rule.rule}
                  </h4>
                  <button 
                    className={`speaker-btn ${isPlayingRule ? 'playing' : ''}`}
                    onClick={() => playAccentComparison(rule.audioText || rule.example, rule.audioText || rule.example, ruleKey)}
                    title="對比南北越此音範例朗讀"
                  >
                    <Volume2 size={16} />
                  </button>
                </div>

                <div style={{ background: 'var(--bg-card)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--brand-primary)' }}>
                    {learningMode === 'zh' ? '北越發音：' : 'Northern: '}
                  </strong> 
                  {learningMode === 'zh' ? rule.northZh : rule.northEn}
                </div>
                <div style={{ background: 'var(--bg-card)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                  <strong style={{ color: 'var(--brand-green)' }}>
                    {learningMode === 'zh' ? '南越發音：' : 'Southern: '}
                  </strong> 
                  {learningMode === 'zh' ? rule.southZh : rule.southEn}
                </div>
                <div style={{ fontSize: '0.85em', color: 'var(--text-muted)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.4rem' }}>
                  <span>💡 {learningMode === 'zh' ? '實例：' : 'Example: '}{rule.example}</span>
                  <div style={{ display: 'flex', gap: '0.3rem' }}>
                    <button 
                      className="control-btn"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.75em' }}
                      onClick={() => playSingleWord(rule.audioText || rule.example, 'north', `${ruleKey}_north`)}
                    >
                      北音
                    </button>
                    <button 
                      className="control-btn"
                      style={{ padding: '0.2rem 0.5rem', fontSize: '0.75em' }}
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
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem' }}>
          {learningMode === 'zh' ? '南北常用詞彙差異對照表 (Vocabulary Matrix)' : 'North vs South Lexical Differences Matrix'}
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>{learningMode === 'zh' ? '類別' : 'Category'}</th>
                <th>{learningMode === 'zh' ? '釋義' : 'Meaning'}</th>
                <th>{learningMode === 'zh' ? '北越用語 (Giọng Bắc)' : 'North (Hanoi)'}</th>
                <th>{learningMode === 'zh' ? '南越用語 (Giọng Nam)' : 'South (Saigon)'}</th>
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
                      <span className="tone-symbol" style={{ fontSize: '0.85em' }}>{item.category}</span>
                    </td>
                    <td style={{ fontWeight: 700 }}>
                      {learningMode === 'zh' ? item.meaningZh : item.meaningEn}
                    </td>
                    <td>
                      <span 
                        style={{ color: 'var(--brand-primary)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onClick={() => playSingleWord(item.north, 'north', `${rowKey}_north`)}
                        title="點擊朗讀北越詞彙"
                      >
                        {item.north}
                        <Volume2 size={13} className={isPlayingNorth ? 'playing-pulse' : ''} />
                      </span>
                    </td>
                    <td>
                      <span 
                        style={{ color: 'var(--brand-green)', fontWeight: 700, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}
                        onClick={() => playSingleWord(item.south, 'south', `${rowKey}_south`)}
                        title="點擊朗讀南越詞彙"
                      >
                        {item.south}
                        <Volume2 size={13} className={isPlayingSouth ? 'playing-pulse' : ''} />
                      </span>
                    </td>
                    <td>
                      <button 
                        className={`control-btn ${isPlayingRow ? 'active' : ''}`}
                        style={{ fontSize: '0.8em', padding: '0.3rem 0.6rem' }}
                        onClick={() => playAccentComparison(item.north, item.south, rowKey)}
                      >
                        <Volume2 size={14} color="var(--brand-accent)" />
                        <span>{learningMode === 'zh' ? '比較發音' : 'Listen Both'}</span>
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
