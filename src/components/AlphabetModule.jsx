import React, { useState, useEffect } from 'react';
import { Volume2, Music, Sparkles, Filter, Info, Play, VolumeX } from 'lucide-react';
import { vietnameseAlphabet, vietnameseTones } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const AlphabetModule = ({ selectedAccent }) => {
  const { learningMode, loc, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedTone, setSelectedTone] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const filteredAlphabet = vietnameseAlphabet.filter(item => {
    if (activeFilter === 'vowel') return item.type === 'vowel';
    if (activeFilter === 'consonant') return item.type === 'consonant';
    return true;
  });

  const handleSpeakAlphabet = (item) => {
    audioEngine.speakAlphabet(item, { accent: selectedAccent });
  };

  const handlePlayToneSynth = (toneId, exampleText) => {
    setSelectedTone(toneId);
    audioEngine.playTonePitch(toneId);
    setTimeout(() => {
      audioEngine.speak(exampleText, { accent: selectedAccent, key: `tone_${toneId}` });
    }, 600);
  };

  return (
    <div className="module-container">
      {/* 1. 6 Tones Pitch Visualizer Header */}
      <div className="section-header">
        <h2 className="section-title">
          <Music color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越南語 6 大聲調 (Thanh điệu) 與音高曲線合成器' : 'Vietnamese 6 Tones (Thanh điệu) & Pitch Synthesizer'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '聲調是越南語的靈魂！點擊下方聲調卡片，即時觸發 Web Audio 音高振盪器與標準人聲朗讀。'
            : 'Tones carry distinct lexical meaning. Click any tone card to trigger the real-time pitch oscillator followed by native voice pronunciation.'}
        </p>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', marginBottom: '3rem' }}>
        {vietnameseTones.map((tone) => {
          const isPlayingThisTone = activeKey === tone.id || activeKey === `tone_${tone.id}`;
          return (
            <div 
              key={tone.id} 
              className="learning-card"
              style={{ 
                borderLeft: `5px solid ${tone.color}`,
                borderColor: selectedTone === tone.id ? tone.color : 'var(--border-color)',
                transform: isPlayingThisTone ? 'scale(1.03)' : (selectedTone === tone.id ? 'scale(1.02)' : 'none'),
                boxShadow: isPlayingThisTone ? `0 8px 24px ${tone.color}33` : 'var(--shadow-sm)',
                transition: 'all 0.25s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.2em', fontWeight: 800 }}>
                    {loc(tone, 'name')}
                  </h3>
                  <span className="tone-symbol" style={{ color: tone.color }}>{loc(tone, 'symbol')}</span>
                </div>
                <button 
                  className={`speaker-btn ${isPlayingThisTone ? 'playing' : ''}`}
                  onClick={() => handlePlayToneSynth(tone.id, tone.example)}
                  title={t('common.listenPitch')}
                >
                  <Volume2 size={20} />
                </button>
              </div>

              <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <strong>{learningMode === 'zh' ? '音高特徵：' : 'Pitch: '}</strong> 
                {loc(tone, 'pitchDescription')} ({loc(tone, 'contour')})
              </div>
              
              <div style={{ background: 'var(--bg-accent)', padding: '0.6rem 0.8rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{learningMode === 'zh' ? '發音範例：' : 'Example: '}</strong> 
                  <span style={{ fontSize: '1.2em', fontWeight: 800, color: tone.color, marginLeft: '0.3rem' }}>{tone.example}</span> 
                  <span style={{ marginLeft: '0.4rem', color: 'var(--text-secondary)' }}>({learningMode === 'zh' ? tone.meaningZh : tone.meaningEn})</span>
                </div>
                <button 
                  className="control-btn"
                  style={{ padding: '0.25rem 0.6rem', fontSize: '0.8em' }}
                  onClick={() => audioEngine.speak(tone.example, { accent: selectedAccent, key: `tone_${tone.id}` })}
                  title="僅聽範例發音"
                >
                  <Volume2 size={14} />
                  <span>{learningMode === 'zh' ? '人聲' : 'Voice'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.85em', color: 'var(--text-muted)' }}>
                💡 {learningMode === 'zh' ? tone.hintZh : tone.hintEn}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Alphabet Grid & Vowels/Consonants Master */}
      <div className="section-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">
              <Sparkles color="var(--brand-gold)" />
              {learningMode === 'zh' ? '29 個越南文字母與母音/輔音全表' : '29 Vietnamese Letters & Full Phonetic Chart'}
            </h2>
            <p className="section-desc">
              {learningMode === 'zh' ? '包含國際音標 IPA、南北越口音對比與記憶口訣' : 'Includes IPA phonetics, Hanoi vs Saigon accents, and pronunciation hints'}
            </p>
          </div>

          {/* Filter options */}
          <div className="controls-group">
            <Filter size={16} color="var(--text-muted)" />
            <button 
              className={`control-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
            >
              {learningMode === 'zh' ? '全部字母 (29)' : 'All (29)'}
            </button>
            <button 
              className={`control-btn ${activeFilter === 'vowel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('vowel')}
            >
              {learningMode === 'zh' ? '元音/母音 (Vowels)' : 'Vowels'}
            </button>
            <button 
              className={`control-btn ${activeFilter === 'consonant' ? 'active' : ''}`}
              onClick={() => setActiveFilter('consonant')}
            >
              {learningMode === 'zh' ? '輔音/子音 (Consonants)' : 'Consonants'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid-cards">
        {filteredAlphabet.map((item, index) => {
          const isPlayingThisChar = activeKey === item.char;
          return (
            <div key={index} className={`learning-card ${isPlayingThisChar ? 'playing-card' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span className="char-big">{item.char}</span>
                <button 
                  className={`speaker-btn ${isPlayingThisChar ? 'playing' : ''}`} 
                  onClick={() => handleSpeakAlphabet(item)}
                  title={`播放 ${item.char} 發音與例詞`}
                >
                  <Volume2 size={20} />
                </button>
              </div>

              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.25rem' }}>
                {learningMode === 'zh' ? '字母名：' : 'Letter Name: '}
                <span style={{ color: 'var(--brand-accent)' }}>{item.name}</span>
                <span style={{ fontSize: '0.85em', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>{item.ipa}</span>
              </div>

              <div style={{ fontSize: '0.9em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                {learningMode === 'zh' ? '單字例：' : 'Example: '}
                <strong>{item.example}</strong> ({learningMode === 'zh' ? item.meaningZh : item.meaningEn})
              </div>

              <div style={{ background: 'var(--bg-accent)', padding: '0.5rem', borderRadius: 'var(--radius-sm)', fontSize: '0.85em' }}>
                <div style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                  {learningMode === 'zh' ? '北越：' : 'North: '}{loc(item, 'north')}
                </div>
                <div style={{ color: 'var(--brand-green)', fontWeight: 600 }}>
                  {learningMode === 'zh' ? '南越：' : 'South: '}{loc(item, 'south')}
                </div>
              </div>

              <div style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                <Info size={12} style={{ display: 'inline', marginRight: '3px' }} />
                {learningMode === 'zh' ? item.hintZh : item.hintEn}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
