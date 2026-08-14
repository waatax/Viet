import React, { useState } from 'react';
import { Compass, Volume2, ArrowRight, RefreshCw, CheckCircle } from 'lucide-react';
import { accentDifferences } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const AccentModule = ({ selectedAccent, setSelectedAccent }) => {
  const [playingItem, setPlayingItem] = useState(null);

  const playAccentComparison = (wordNorth, wordSouth) => {
    // First speak with northern accent hint
    setPlayingItem('north');
    audioEngine.speak(wordNorth, { accent: 'north' });

    // Then speak with southern accent hint after 1 second
    setTimeout(() => {
      setPlayingItem('south');
      audioEngine.speak(wordSouth || wordNorth, { accent: 'south' });
      setTimeout(() => setPlayingItem(null), 1000);
    }, 1200);
  };

  return (
    <div className="module-container">
      {/* Interactive Accent Switcher Banner */}
      <div className="accent-banner">
        <div>
          <h2 style={{ fontSize: '1.4em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Compass color="var(--brand-primary)" />
            南北越口音與習慣用語對比中心
          </h2>
          <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem' }}>
            當前全局學習發音偏好：<strong>{selectedAccent === 'north' ? '北越河內音 (Giọng Bắc)' : '南越胡志明音 (Giọng Nam)'}</strong>
          </p>
        </div>

        <div className="accent-toggle-group">
          <button 
            className={`accent-btn ${selectedAccent === 'north' ? 'active' : ''}`}
            onClick={() => setSelectedAccent('north')}
          >
            🇻🇳 北越音 (Giọng Bắc)
          </button>
          <button 
            className={`accent-btn ${selectedAccent === 'south' ? 'active' : ''}`}
            onClick={() => setSelectedAccent('south')}
          >
            🇻🇳 南越音 (Giọng Nam)
          </button>
        </div>
      </div>

      {/* Phonetic Rules Comparison Card */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <RefreshCw size={20} color="var(--brand-accent)" />
          核心發音音變規則 (Phonetic Rules)
        </h3>

        <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
          {accentDifferences.phoneticRules.map((rule, idx) => (
            <div key={idx} className="learning-card" style={{ background: 'var(--bg-main)' }}>
              <h4 style={{ color: 'var(--brand-accent)', fontSize: '1.1em', marginBottom: '0.5rem', fontWeight: 700 }}>
                字母/組合：{rule.rule}
              </h4>
              <div style={{ background: 'var(--bg-card)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>北越發音：</strong> {rule.north}
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
                <strong style={{ color: 'var(--brand-green)' }}>南越發音：</strong> {rule.south}
              </div>
              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
                💡 實例：{rule.example}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Vocabulary Comparison Matrix Table */}
      <div className="simulator-box">
        <h3 style={{ fontSize: '1.25em', fontWeight: 800, marginBottom: '1rem' }}>
          南北常用詞彙差異對照表 (Vocabulary Matrix)
        </h3>

        <div style={{ overflowX: 'auto' }}>
          <table className="comparison-table">
            <thead>
              <tr>
                <th>類別</th>
                <th>中文涵義</th>
                <th>北越用語 (Giọng Bắc)</th>
                <th>南越用語 (Giọng Nam)</th>
                <th>南北雙音發音對比</th>
              </tr>
            </thead>
            <tbody>
              {accentDifferences.wordComparisonMatrix.map((item, index) => (
                <tr key={index}>
                  <td>
                    <span className="tone-symbol" style={{ fontSize: '0.85em' }}>{item.category}</span>
                  </td>
                  <td style={{ fontWeight: 700 }}>{item.meaning}</td>
                  <td style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>{item.north}</td>
                  <td style={{ color: 'var(--brand-green)', fontWeight: 700 }}>{item.south}</td>
                  <td>
                    <button 
                      className="control-btn"
                      style={{ fontSize: '0.8em', padding: '0.3rem 0.6rem' }}
                      onClick={() => playAccentComparison(item.north, item.south)}
                    >
                      <Volume2 size={14} color="var(--brand-accent)" />
                      <span>比較發音</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
