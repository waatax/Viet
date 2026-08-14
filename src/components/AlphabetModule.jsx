import React, { useState, useEffect } from 'react';
import { Volume2, Music, Sparkles, Filter, Info, Play, VolumeX, Activity, Compass } from 'lucide-react';
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
    }, 650);
  };

  // Tone Pitch SVG Contour Definitions for all 6 tones
  const getToneSvgData = (toneId, color) => {
    switch (toneId) {
      case 'ngang': // Level flat 33-44
        return {
          path: "M 20 35 L 180 35",
          dots: [{ cx: 20, cy: 35 }, { cx: 180, cy: 35 }],
          desc: "44 → 44 平緩高音"
        };
      case 'huyen': // Deep gentle drop 31-21
        return {
          path: "M 20 22 Q 100 42 180 56",
          dots: [{ cx: 20, cy: 22 }, { cx: 180, cy: 56 }],
          desc: "31 → 21 舒緩下沉"
        };
      case 'sac': // High sharp rise 35-45
        return {
          path: "M 20 54 Q 100 38 180 14",
          dots: [{ cx: 20, cy: 54 }, { cx: 180, cy: 14 }],
          desc: "35 → 45 昂揚急升"
        };
      case 'hoi': // Dipping and rising 312-35
        return {
          path: "M 20 30 Q 80 58 110 56 Q 145 42 180 20",
          dots: [{ cx: 20, cy: 30 }, { cx: 110, cy: 56 }, { cx: 180, cy: 20 }],
          desc: "31 → 12 → 35 降後微揚"
        };
      case 'nga': // Rising with glottal inflection 35-45 (vocal brake)
        return {
          path: "M 20 38 Q 65 48 90 40 Q 110 56 140 26 L 180 14",
          dots: [{ cx: 20, cy: 38 }, { cx: 90, cy: 40 }, { cx: 180, cy: 14 }],
          desc: "35 → ~ 45 聲門微阻重升"
        };
      case 'nang': // Abrupt heavy low drop with glottal stop 21-11
        return {
          path: "M 20 36 Q 80 52 140 60",
          dots: [{ cx: 20, cy: 36 }, { cx: 140, cy: 60 }],
          desc: "21 → 11 驟降急煞"
        };
      default:
        return { path: "M 20 35 L 180 35", dots: [], desc: "" };
    }
  };

  return (
    <div className="module-container">
      {/* 1. 6 Tones Pitch Visualizer Header */}
      <div className="section-header">
        <h2 className="section-title">
          <Music color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越南語 6 大聲調 (Thanh điệu) 與音高曲線合成器' : 'Vietnamese 6 Tones (Thanh điệu) & Pitch Contour Synthesizer'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '聲調是越南語的靈魂與詞義關鍵！點擊下方聲調卡片，觸發 Web Audio 音高振盪器與標準人聲朗讀，透過音高軌跡直觀感知調值走勢。'
            : 'Tones distinguish word meanings. Click any tone card to trigger the real-time pitch oscillator followed by native voice pronunciation.'}
        </p>
      </div>

      <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', marginBottom: '3rem' }}>
        {vietnameseTones.map((tone) => {
          const isPlayingThisTone = activeKey === tone.id || activeKey === `tone_${tone.id}`;
          const svgData = getToneSvgData(tone.id, tone.color);

          return (
            <div 
              key={tone.id} 
              className="learning-card"
              style={{ 
                borderLeft: `5px solid ${tone.color}`,
                borderColor: selectedTone === tone.id ? tone.color : 'var(--border-color)',
                transform: isPlayingThisTone ? 'scale(1.025)' : (selectedTone === tone.id ? 'scale(1.015)' : 'none'),
                boxShadow: isPlayingThisTone ? `0 8px 26px ${tone.color}35` : 'var(--card-shadow)',
                transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.6rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.22em', fontWeight: 800 }}>
                    {loc(tone, 'name')}
                  </h3>
                  <span className="tone-symbol" style={{ color: tone.color, marginTop: '0.2rem' }}>{loc(tone, 'symbol')}</span>
                </div>
                <button 
                  className={`speaker-btn ${isPlayingThisTone ? 'playing' : ''}`}
                  onClick={() => handlePlayToneSynth(tone.id, tone.example)}
                  title={t('common.listenPitch')}
                >
                  <Volume2 size={18} />
                </button>
              </div>

              {/* SVG Tone Pitch Curve Visualization Box */}
              <div className="tone-contour-svg-box">
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72em', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>
                  <span>音高 5 (高)</span>
                  <span style={{ fontWeight: 700, color: tone.color }}>{svgData.desc}</span>
                  <span>音高 1 (低)</span>
                </div>
                <svg className="tone-pitch-svg" viewBox="0 0 200 70">
                  {/* Background grid levels 5, 4, 3, 2, 1 */}
                  <line x1="10" y1="14" x2="190" y2="14" className="tone-pitch-grid-line" />
                  <line x1="10" y1="28" x2="190" y2="28" className="tone-pitch-grid-line" />
                  <line x1="10" y1="42" x2="190" y2="42" className="tone-pitch-grid-line" />
                  <line x1="10" y1="56" x2="190" y2="56" className="tone-pitch-grid-line" />

                  {/* Main Pitch Contour Path */}
                  <path 
                    d={svgData.path} 
                    className="tone-pitch-path" 
                    stroke={tone.color}
                    style={{
                      strokeDasharray: isPlayingThisTone ? '300' : 'none',
                      strokeDashoffset: isPlayingThisTone ? '0' : 'none',
                      animation: isPlayingThisTone ? 'toneDraw 0.65s ease forwards' : 'none'
                    }}
                  />

                  {/* Pitch Control Dots */}
                  {svgData.dots.map((dot, dIdx) => (
                    <circle 
                      key={dIdx} 
                      cx={dot.cx} 
                      cy={dot.cy} 
                      r={isPlayingThisTone ? 5.5 : 4.5} 
                      fill={tone.color} 
                      className="tone-pitch-dot"
                    />
                  ))}
                </svg>
              </div>

              <div style={{ fontSize: '0.88em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                <strong>{learningMode === 'zh' ? '調值特徵：' : 'Pitch: '}</strong> 
                {loc(tone, 'pitchDescription')} ({loc(tone, 'contour')})
              </div>
              
              <div style={{ background: 'var(--bg-accent)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', marginBottom: '0.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <strong>{learningMode === 'zh' ? '範例字：' : 'Example: '}</strong> 
                  <span style={{ fontSize: '1.25em', fontWeight: 800, color: tone.color, marginLeft: '0.35rem' }}>{tone.example}</span> 
                  <span style={{ marginLeft: '0.45rem', color: 'var(--text-secondary)', fontSize: '0.92em' }}>({learningMode === 'zh' ? tone.meaningZh : tone.meaningEn})</span>
                </div>
                <button 
                  className="control-btn"
                  style={{ padding: '0.25rem 0.65rem', fontSize: '0.8em' }}
                  onClick={() => audioEngine.speak(tone.example, { accent: selectedAccent, key: `tone_${tone.id}` })}
                  title="僅聽人聲發音"
                >
                  <Volume2 size={13} />
                  <span>{learningMode === 'zh' ? '人聲' : 'Voice'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.82em', color: 'var(--text-muted)', marginTop: 'auto' }}>
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
              {learningMode === 'zh' ? '包含國際音標 IPA、南北越口音對比與精準發音要訣' : 'Includes IPA phonetics, Hanoi vs Saigon accents, and pronunciation hints'}
            </p>
          </div>

          {/* Filter options */}
          <div className="controls-group">
            <Filter size={15} color="var(--text-muted)" />
            <button 
              className={`control-btn ${activeFilter === 'all' ? 'active' : ''}`}
              onClick={() => setActiveFilter('all')}
              style={{ background: activeFilter === 'all' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'all' ? '#fff' : 'inherit' }}
            >
              {learningMode === 'zh' ? '全部字母 (29)' : 'All (29)'}
            </button>
            <button 
              className={`control-btn ${activeFilter === 'vowel' ? 'active' : ''}`}
              onClick={() => setActiveFilter('vowel')}
              style={{ background: activeFilter === 'vowel' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'vowel' ? '#fff' : 'inherit' }}
            >
              {learningMode === 'zh' ? '母音 (Vowels)' : 'Vowels'}
            </button>
            <button 
              className={`control-btn ${activeFilter === 'consonant' ? 'active' : ''}`}
              onClick={() => setActiveFilter('consonant')}
              style={{ background: activeFilter === 'consonant' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'consonant' ? '#fff' : 'inherit' }}
            >
              {learningMode === 'zh' ? '子音/輔音 (Consonants)' : 'Consonants'}
            </button>
          </div>
        </div>
      </div>

      <div className="grid-cards">
        {filteredAlphabet.map((item, index) => {
          const isPlayingThisChar = activeKey === item.char;
          return (
            <div key={index} className={`learning-card ${isPlayingThisChar ? 'playing-card' : ''}`}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                <span className="char-big">{item.char}</span>
                <button 
                  className={`speaker-btn ${isPlayingThisChar ? 'playing' : ''}`} 
                  onClick={() => handleSpeakAlphabet(item)}
                  title={`播放 ${item.char} 發音與例詞`}
                >
                  <Volume2 size={18} />
                </button>
              </div>

              <div style={{ fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                {learningMode === 'zh' ? '讀音名：' : 'Letter Name: '}
                <span style={{ color: 'var(--brand-accent)' }}>{item.name}</span>
                <span style={{ fontSize: '0.86em', color: 'var(--text-muted)', marginLeft: '0.5rem', fontFamily: 'var(--font-family-mono)' }}>{item.ipa}</span>
              </div>

              <div style={{ fontSize: '0.92em', color: 'var(--text-secondary)', marginBottom: '0.6rem' }}>
                {learningMode === 'zh' ? '例詞：' : 'Example: '}
                <strong>{item.example}</strong> ({learningMode === 'zh' ? item.meaningZh : item.meaningEn})
              </div>

              <div style={{ background: 'var(--bg-accent)', padding: '0.6rem', borderRadius: 'var(--radius-sm)', fontSize: '0.84em', display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                <div style={{ color: 'var(--brand-primary)', fontWeight: 600 }}>
                  🏛️ {learningMode === 'zh' ? '北越：' : 'North: '}{loc(item, 'north')}
                </div>
                <div style={{ color: 'var(--brand-green)', fontWeight: 600 }}>
                  🌴 {learningMode === 'zh' ? '南越：' : 'South: '}{loc(item, 'south')}
                </div>
              </div>

              <div style={{ fontSize: '0.8em', color: 'var(--text-muted)', marginTop: '0.6rem' }}>
                <Info size={12} style={{ display: 'inline', marginRight: '4px' }} />
                {learningMode === 'zh' ? item.hintZh : item.hintEn}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
