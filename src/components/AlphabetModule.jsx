import React, { useState } from 'react';
import { Volume2, Music, Sparkles, Filter, Info } from 'lucide-react';
import { vietnameseAlphabet, vietnameseTones } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';

export const AlphabetModule = ({ selectedAccent }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTone, setSelectedTone] = useState(null);

  const filteredAlphabet = vietnameseAlphabet.filter(item => {
    if (activeFilter === 'vowel') return item.type === 'vowel';
    if (activeFilter === 'consonant') return item.type === 'consonant';
    return true;
  });

  const handleSpeak = (text) => {
    audioEngine.speak(text, { accent: selectedAccent });
  };

  const handlePlayToneSynth = (toneId, exampleText) => {
    setSelectedTone(toneId);
    audioEngine.playTonePitch(toneId);
    setTimeout(() => {
      audioEngine.speak(exampleText, { accent: selectedAccent });
    }, 400);
  };

  return (
    <div className="module-container">
      {/* 1. 6 Tones Pitch Visualizer Header */}
      <div className="section-header">
        <h2 className="section-title">
          <Music color="var(--brand-primary)" />
          越南語 6 大聲調 (Thanh điệu) 聲調發音音高圖
        </h2>
        <p className="section-desc">
          聲調是越南語的核心！點擊下方聲調卡片可聆聽正確調型與合成 pitch 音高曲線變化。
        </p>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', marginBottom: '3rem' }}>
        {vietnameseTones.map((tone) => (
          <div 
            key={tone.id} 
            className="learning-card"
            style={{ 
              borderLeft: `5px solid ${tone.color}`,
              borderColor: selectedTone === tone.id ? tone.color : 'var(--border-color)',
              transform: selectedTone === tone.id ? 'scale(1.02)' : 'none'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25em', fontWeight: 800 }}>{tone.name}</h3>
                <span className="tone-symbol" style={{ color: tone.color }}>{tone.symbol}</span>
              </div>
              <button 
                className="speaker-btn" 
                onClick={() => handlePlayToneSynth(tone.id, tone.example)}
                title="播放聲調與範例音"
              >
                <Volume2 size={20} />
              </button>
            </div>

            <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              <strong>音高特徵：</strong> {tone.pitchDescription} ({tone.contour})
            </div>
            
            <div style={{ background: 'var(--bg-accent)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem' }}>
              <strong>發音範例：</strong> <span style={{ fontSize: '1.2em', fontWeight: 800, color: tone.color }}>{tone.example}</span> ({tone.meaning})
            </div>

            <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
              💡 {tone.zhHint}
            </div>
          </div>
        ))}
      </div>

      {/* 2. Alphabet Grid & Vowels/Consonants Master */}
      <div className="section-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">
              <Sparkles color="var(--brand-gold)" />
              29 個越南文字母與母音/輔音全表
            </h2>
            <p className="section-desc">包含標音 IPA、南北口音讀法對比與標準對應發音</p>
          </div>

          {/* Filter options */}
          <div className="controls-group">
            <Filter size={16} color="var(--text-muted)" />
            <button 
              className={`control-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              全部字母 (29)
            </button>
            <button 
              className={`control-btn ${activeFilter === 'vowel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('vowel')}
            >
              元音/母音 (Vowels)
            </button>
            <button 
              className={`control-btn ${activeFilter === 'consonant' ? 'active' : ''}`}
              onClick={() => setActiveFilter('consonant')}
            >
              輔音/子音 (Consonants)
            </button>
          </div>
        </div>
      </div>

      <div className="grid-cards">
        {filteredAlphabet.map((item, index) => (
          <div key={index} className="learning-card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span className="char-big">{item.char}</span>
              <button 
                className="speaker-btn" 
                onClick={() => handleSpeak(`${item.char}, ${item.example}`)}
                title={`播放 ${item.char} 發音`}
              >
                <Volume2 size={20} />
              </button>
            </div>

            <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
              字母名：<span style={{ color: 'var(--brand-accent)' }}>{item.name}</span>
            </div>

            <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
              單字例：<strong>{item.example}</strong> ({item.meaning})
            </div>

            <div style={{ background: 'var(--bg-accent)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85em' }}>
              <div style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>北越：{item.north}</div>
              <div style={{ color: 'var(--brand-green)', fontWeight: 600 }}>南越：{item.south}</div>
            </div>

            <div style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
              <Info size={12} style={{ display: 'inline', marginRight: '3px' }} />
              {item.hint}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
