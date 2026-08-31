import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2, Music, Sparkles, Filter, Info, Play, Activity,
  Compass, Layers, BookOpen, AlertTriangle, ShieldCheck, CheckCircle2
} from 'lucide-react';
import {
  vietnameseAlphabet,
  vietnameseTones,
  vietnameseSingleVowels,
  vietnameseCompoundConsonants,
  vietnameseFinalConsonants,
  vietnameseDiphthongsTriphthongs,
  toneMinimalPairs,
  tonePitfallGuide
} from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const AlphabetModule = ({ selectedAccent = 'north' }) => {
  const { learningMode, loc, t } = useLanguage();
  const [activePhoneticTab, setActivePhoneticTab] = useState('letters'); // 'letters' | 'compound' | 'finals' | 'diphthongs' | 'tones'
  const [activeFilter, setActiveFilter] = useState('all'); // 'all' | 'vowel' | 'consonant'
  const [selectedTone, setSelectedTone] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [activeMinimalPairIdx, setActiveMinimalPairIdx] = useState(0);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handleSpeak = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key: key || text });
  };

  const handleSpeakAlphabet = (item) => {
    audioEngine.speakAlphabet(item, { accent: selectedAccent });
  };

  const filteredAlphabet = vietnameseAlphabet.filter(item => {
    if (activeFilter === 'vowel') return item.type === 'vowel';
    if (activeFilter === 'consonant') return item.type === 'consonant';
    return true;
  });

  const playIdRef = useRef(0);

  // 6 Tones Ear-Trainer State
  const [trainerTarget, setTrainerTarget] = useState(null);
  const [trainerSelected, setTrainerSelected] = useState(null);
  const [trainerScore, setTrainerScore] = useState(0);
  const [trainerStreak, setTrainerStreak] = useState(0);

  const startNewEarTraining = () => {
    const randomTone = vietnameseTones[Math.floor(Math.random() * vietnameseTones.length)];
    setTrainerTarget(randomTone);
    setTrainerSelected(null);
    audioEngine.speak(randomTone.example.split(' ')[0], { accent: selectedAccent, key: `trainer_${randomTone.id}` });
  };

  const handlePlayTrainerSound = () => {
    if (trainerTarget) {
      audioEngine.speak(trainerTarget.example.split(' ')[0], { accent: selectedAccent, key: `trainer_${trainerTarget.id}` });
    } else {
      startNewEarTraining();
    }
  };

  const handleTrainerGuess = (toneId) => {
    if (trainerSelected !== null || !trainerTarget) return;
    setTrainerSelected(toneId);
    if (toneId === trainerTarget.id) {
      setTrainerScore(s => s + 1);
      setTrainerStreak(st => st + 1);
      audioEngine.playComboSound(2);
    } else {
      setTrainerStreak(0);
      audioEngine.playGentleError();
    }
  };

  const handlePlayToneSynth = (toneId, exampleText) => {
    setSelectedTone(toneId);
    audioEngine.playTonePitch(toneId, selectedAccent);
    
    const currentId = ++playIdRef.current;
    setTimeout(() => {
      if (playIdRef.current === currentId) {
        audioEngine.speak(exampleText, { accent: selectedAccent, key: `tone_${toneId}` });
      }
    }, 650);
  };

  // Tone Pitch SVG Contour Definitions for all 6 tones
  const getToneSvgData = (toneId, color) => {
    switch (toneId) {
      case 'ngang':
        return {
          path: "M 20 35 L 180 35",
          dots: [{ cx: 20, cy: 35 }, { cx: 180, cy: 35 }],
          desc: "44 → 44 平緩高音"
        };
      case 'huyen':
        return {
          path: "M 20 22 Q 100 42 180 56",
          dots: [{ cx: 20, cy: 22 }, { cx: 180, cy: 56 }],
          desc: "31 → 21 舒緩下沉"
        };
      case 'sac':
        return {
          path: "M 20 54 Q 100 38 180 14",
          dots: [{ cx: 20, cy: 54 }, { cx: 180, cy: 14 }],
          desc: "35 → 45 昂揚急升"
        };
      case 'hoi':
        return {
          path: "M 20 30 Q 80 58 110 56 Q 145 42 180 20",
          dots: [{ cx: 20, cy: 30 }, { cx: 110, cy: 56 }, { cx: 180, cy: 20 }],
          desc: "31 → 12 → 35 降後微揚"
        };
      case 'nga':
        return {
          path: "M 20 38 Q 65 48 90 40 Q 110 56 140 26 L 180 14",
          dots: [{ cx: 20, cy: 38 }, { cx: 90, cy: 40 }, { cx: 180, cy: 14 }],
          desc: "35 → ~ 45 聲門微阻重升"
        };
      case 'nang':
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
      {/* Main Header Banner */}
      <div className="section-header">
        <h2 className="section-title">
          <Sparkles color="var(--brand-gold)" />
          {learningMode === 'zh' ? '越語語音全能殿堂：字母 · 母音 · 子音 · 聲調' : 'Vietnamese Phonetics Master: Alphabet, Vowels, Consonants & 6 Tones'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '由台越語言學專家審定：涵蓋 29 字母、12 單母音、11 複子音、8 尾子音、32 雙/三母音與 6 大聲調最小對立矩陣，配備即時音頻合成與標準真人口語。'
            : 'Master Vietnamese pronunciation: 29 letters, 12 single vowels, 11 compound consonants, 8 final consonants, 32 diphthongs, and 6 tones minimal pairs.'}
        </p>
      </div>

      {/* 5-Tab Phonetic Subnav */}
      <div className="business-subnav" role="tablist" style={{ marginBottom: '2rem' }}>
        <button
          className={`biz-nav-tab ${activePhoneticTab === 'letters' ? 'active' : ''}`}
          onClick={() => setActivePhoneticTab('letters')}
        >
          <BookOpen size={17} />
          <span>{learningMode === 'zh' ? '🔤 29字母與單母音' : '🔤 Alphabet & Vowels'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activePhoneticTab === 'compound' ? 'active' : ''}`}
          onClick={() => setActivePhoneticTab('compound')}
        >
          <Layers size={17} />
          <span>{learningMode === 'zh' ? '🧩 11大複子音' : '🧩 Compound Consonants'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activePhoneticTab === 'finals' ? 'active' : ''}`}
          onClick={() => setActivePhoneticTab('finals')}
        >
          <ShieldCheck size={17} />
          <span>{learningMode === 'zh' ? '🔚 8大尾子音與入聲' : '🔚 Final Consonants'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activePhoneticTab === 'diphthongs' ? 'active' : ''}`}
          onClick={() => setActivePhoneticTab('diphthongs')}
        >
          <Music size={17} />
          <span>{learningMode === 'zh' ? '🎶 雙母音與三母音' : '🎶 Diphthongs'}</span>
        </button>
        <button
          className={`biz-nav-tab ${activePhoneticTab === 'tones' ? 'active' : ''}`}
          onClick={() => setActivePhoneticTab('tones')}
        >
          <Activity size={17} />
          <span>{learningMode === 'zh' ? '🎯 6大聲調與對比' : '🎯 6 Tones & Minimal Pairs'}</span>
        </button>
      </div>

      {/* ==================================================== */}
      {/* TAB 1: 29 ALPHABET & 12 SINGLE VOWELS */}
      {/* ==================================================== */}
      {activePhoneticTab === 'letters' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {/* 12 Single Vowels Showcase */}
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--brand-primary)' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.2rem', fontWeight: 900, color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Sparkles size={20} color="var(--brand-primary)" />
              {learningMode === 'zh' ? '🌟 越南語 12 大單母音口形與長短音精確對照' : '🌟 12 Single Vowels: Length & Articulation'}
            </h3>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              {learningMode === 'zh'
                ? '越語母音關鍵在於「長度 (Long vs Short)」與「圓唇度 (Rounded vs Unrounded)」。「a vs ă」與「ơ vs â」構成兩組經典長短音對立，長度不同代表完全不同的單字！'
                : 'Vietnamese distinguishes long vs short vowels (a vs ă, ơ vs â) and lip rounding.'}
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {vietnameseSingleVowels.map((sv, svIdx) => (
                <div
                  key={svIdx}
                  style={{
                    background: 'var(--bg-card)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.4rem'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                      <span style={{ fontSize: '1.6rem', fontWeight: 900, color: 'var(--brand-primary)' }}>{sv.vowel}</span>
                      <span style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>{sv.ipa}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.3rem' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-xs)', background: sv.length === 'long' ? 'rgba(5, 150, 105, 0.15)' : 'rgba(234, 179, 8, 0.15)', color: sv.length === 'long' ? 'var(--brand-green)' : 'var(--brand-gold)' }}>
                        {sv.length === 'long' ? '長母音' : '短母音 (急促)'}
                      </span>
                      <span style={{ fontSize: '0.75rem', fontWeight: 800, padding: '0.2rem 0.5rem', borderRadius: 'var(--radius-xs)', background: sv.lip === 'rounded' ? 'rgba(37, 99, 235, 0.15)' : 'rgba(107, 114, 128, 0.15)', color: sv.lip === 'rounded' ? 'var(--brand-accent)' : 'var(--text-muted)' }}>
                        {sv.lip === 'rounded' ? '圓唇 👄' : '不圓唇'}
                      </span>
                    </div>
                  </div>

                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                    {learningMode === 'zh' ? sv.descZh : sv.descEn}
                  </div>

                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.3rem' }}>
                    {sv.examples.map((ex, exIdx) => (
                      <button
                        key={exIdx}
                        onClick={() => handleSpeak(ex.vi, `sv_${svIdx}_${exIdx}`)}
                        style={{
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.3rem 0.6rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.35rem',
                          fontSize: '0.84rem'
                        }}
                      >
                        <strong style={{ color: 'var(--brand-primary)' }}>{ex.vi}</strong>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>({ex.zh})</span>
                        <Volume2 size={12} color="var(--brand-accent)" />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Full 29 Letters Grid */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.25rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                🔤 29 個官方標準越南文字母全表
              </h3>
              <div className="controls-group">
                <Filter size={15} color="var(--text-muted)" />
                <button
                  className={`control-btn ${activeFilter === 'all' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('all')}
                  style={{ background: activeFilter === 'all' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'all' ? '#fff' : 'inherit' }}
                >
                  全部 (29)
                </button>
                <button
                  className={`control-btn ${activeFilter === 'vowel' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('vowel')}
                  style={{ background: activeFilter === 'vowel' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'vowel' ? '#fff' : 'inherit' }}
                >
                  母音 (12)
                </button>
                <button
                  className={`control-btn ${activeFilter === 'consonant' ? 'active' : ''}`}
                  onClick={() => setActiveFilter('consonant')}
                  style={{ background: activeFilter === 'consonant' ? 'var(--brand-accent)' : 'var(--bg-card)', color: activeFilter === 'consonant' ? '#fff' : 'inherit' }}
                >
                  單子音 (17)
                </button>
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
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 2: 11 COMPOUND CONSONANTS */}
      {/* ==================================================== */}
      {activePhoneticTab === 'compound' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--brand-primary)' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              🧩 越南語 11 大核心複子音 (Phụ âm đôi / Phụ âm ghép)
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              複子音是外國人發音最大瓶頸！注意：「th」是齒齦強送氣音（同國語ㄊ，絕非英文 th）；「ng/ngh」為字首後鼻音；「tr」在南越捲舌、北越同化為 ch。
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
            {vietnameseCompoundConsonants.map((cc, idx) => (
              <div
                key={idx}
                style={{
                  background: 'var(--bg-card)',
                  padding: '1.25rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1.5px solid var(--border-color)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  boxShadow: 'var(--card-shadow)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-primary)' }}>{cc.cluster}</span>
                    <span style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', fontSize: '0.92rem' }}>{cc.ipa}</span>
                  </div>
                  <span style={{ fontSize: '0.8rem', fontWeight: 800, padding: '0.25rem 0.6rem', borderRadius: 'var(--radius-xs)', background: 'rgba(37, 99, 235, 0.12)', color: 'var(--brand-accent)' }}>
                    {cc.organZh}
                  </span>
                </div>

                <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                  {learningMode === 'zh' ? cc.descZh : cc.descEn}
                </div>

                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '0.6rem', marginTop: '0.2rem' }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--text-muted)', marginBottom: '0.4rem' }}>
                    🗣️ 高頻實戰單字範例：
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {cc.examples.map((ex, exIdx) => (
                      <button
                        key={exIdx}
                        onClick={() => handleSpeak(ex.vi, `cc_${idx}_${exIdx}`)}
                        style={{
                          background: 'var(--bg-input)',
                          border: '1px solid var(--border-color)',
                          borderRadius: 'var(--radius-xs)',
                          padding: '0.35rem 0.75rem',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.4rem',
                          fontSize: '0.88rem'
                        }}
                      >
                        <strong style={{ color: 'var(--brand-primary)' }}>{ex.vi}</strong>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>({ex.zh})</span>
                        <Volume2 size={13} color="var(--brand-accent)" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 3: 8 FINAL CONSONANTS */}
      {/* ==================================================== */}
      {activePhoneticTab === 'finals' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--brand-gold)' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-gold)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <AlertTriangle size={20} />
              {learningMode === 'zh' ? '🔚 8 大尾子音 (Âm cuối) 與入聲阻氣絕對鐵律' : '🔚 8 Final Consonants: Nasals vs Unreleased Stops'}
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              越南語的尾音分為<strong>「4大鼻音韻尾」</strong>與<strong>「4大入聲阻氣塞音」</strong>。遇到入聲字 (-p, -t, -c, -ch) 時，<strong>只做口形、絕不爆破氣流</strong>，且依據越語音韻法，<strong>入聲字只能搭配 Sắc (銳聲) 與 Nặng (重聲)</strong> 兩種短促聲調！
            </p>
          </div>

          {vietnameseFinalConsonants.map((group, gIdx) => (
            <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: group.category === 'stop' ? 'var(--brand-primary)' : 'var(--brand-green)' }}>
                {learningMode === 'zh' ? group.titleZh : group.titleEn}
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {group.items.map((it, itIdx) => (
                  <div
                    key={itIdx}
                    style={{
                      background: 'var(--bg-card)',
                      padding: '1.1rem',
                      borderRadius: 'var(--radius-md)',
                      border: group.category === 'stop' ? '1.5px solid rgba(218, 37, 28, 0.3)' : '1.5px solid rgba(5, 150, 105, 0.3)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '1.5rem', fontWeight: 900, color: group.category === 'stop' ? 'var(--brand-primary)' : 'var(--brand-green)' }}>
                        {it.final}
                      </span>
                      <span style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        {it.ipa}
                      </span>
                    </div>

                    <div style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                      {it.descZh}
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.3rem' }}>
                      {it.examples.map((ex, exIdx) => (
                        <button
                          key={exIdx}
                          onClick={() => handleSpeak(ex.vi, `final_${gIdx}_${itIdx}_${exIdx}`)}
                          style={{
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-xs)',
                            padding: '0.3rem 0.6rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.85rem'
                          }}
                        >
                          <strong style={{ color: 'var(--text-primary)' }}>{ex.vi}</strong>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>({ex.zh})</span>
                          <Volume2 size={12} color="var(--brand-accent)" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 4: 32 DIPHTHONGS & TRIPHTHONGS */}
      {/* ==================================================== */}
      {activePhoneticTab === 'diphthongs' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', borderLeft: '4px solid var(--brand-primary)' }}>
            <h3 style={{ margin: '0 0 0.5rem', fontSize: '1.25rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              🎶 越南語 32 大核心雙母音與三母音 (Nguyên âm đôi & Nguyên âm ba)
            </h3>
            <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5 }}>
              最關鍵的三大基石雙母音為 <strong>ia/iê/yê, ua/uô, ưa/ươ</strong>（前面母音為主音，後面滑向 ə/a）。其餘雙母音與三母音皆遵循自然滑音規律。
            </p>
          </div>

          {vietnameseDiphthongsTriphthongs.map((grp, gIdx) => (
            <div key={gIdx} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <h4 style={{ margin: 0, fontSize: '1.15rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                {learningMode === 'zh' ? grp.titleZh : grp.titleEn}
              </h4>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                {grp.items.map((it, itIdx) => (
                  <div
                    key={itIdx}
                    style={{
                      background: 'var(--bg-card)',
                      padding: '1rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-color)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.4rem'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <strong style={{ fontSize: '1.2rem', color: 'var(--brand-primary)' }}>{it.pattern}</strong>
                      <span style={{ fontFamily: 'var(--font-family-mono)', color: 'var(--text-muted)', fontSize: '0.88rem' }}>{it.ipa}</span>
                    </div>

                    <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>
                      {it.descZh}
                    </div>

                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap', marginTop: '0.3rem' }}>
                      {it.examples.map((ex, exIdx) => (
                        <button
                          key={exIdx}
                          onClick={() => handleSpeak(ex.vi, `diph_${gIdx}_${itIdx}_${exIdx}`)}
                          style={{
                            background: 'var(--bg-input)',
                            border: '1px solid var(--border-color)',
                            borderRadius: 'var(--radius-xs)',
                            padding: '0.25rem 0.55rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.35rem',
                            fontSize: '0.84rem'
                          }}
                        >
                          <strong style={{ color: 'var(--text-primary)' }}>{ex.vi}</strong>
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>({ex.zh})</span>
                          <Volume2 size={12} color="var(--brand-accent)" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ==================================================== */}
      {/* TAB 5: 6 TONES MINIMAL PAIRS & EAR-TRAINER */}
      {/* ==================================================== */}
      {activePhoneticTab === 'tones' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
          {/* 6 Tones Pitch Visualizer Cards */}
          <div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              🎼 6 大聲調 (Thanh điệu) 音高走勢圖與 Web Audio 振盪器
            </h3>
            <p style={{ margin: '0 0 1.25rem', fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
              點擊喇叭按鈕可依序觸發「音頻合成器音高曲線」與「真人標準發音」，直觀掌握五度標調法調值走勢！
            </p>

            <div className="grid-cards" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))' }}>
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
                        <line x1="10" y1="14" x2="190" y2="14" className="tone-pitch-grid-line" />
                        <line x1="10" y1="28" x2="190" y2="28" className="tone-pitch-grid-line" />
                        <line x1="10" y1="42" x2="190" y2="42" className="tone-pitch-grid-line" />
                        <line x1="10" y1="56" x2="190" y2="56" className="tone-pitch-grid-line" />

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
          </div>

          {/* 🌟 Complete Tone Minimal Pairs Master Deck */}
          <div style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1.5px solid var(--brand-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 900, color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={20} />
                  {learningMode === 'zh' ? '🎯 6 聲調最小對立矩陣 (Minimal Pairs Master Matrix)' : '🎯 6 Tones Minimal Pairs Matrix'}
                </h3>
                <small style={{ color: 'var(--text-muted)' }}>
                  相同子母音在 6 個不同聲調下的詞義完全切換，點擊任一單字即可聆聽標準發音！
                </small>
              </div>

              {/* Minimal Pair Base Selector */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {toneMinimalPairs.map((mp, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveMinimalPairIdx(idx)}
                    style={{
                      padding: '0.4rem 0.85rem',
                      borderRadius: 'var(--radius-full)',
                      border: activeMinimalPairIdx === idx ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                      background: activeMinimalPairIdx === idx ? 'var(--brand-primary)' : 'var(--bg-card)',
                      color: activeMinimalPairIdx === idx ? '#fff' : 'var(--text-primary)',
                      fontWeight: 800,
                      cursor: 'pointer',
                      fontSize: '0.9rem'
                    }}
                  >
                    字根 [{mp.base}]
                  </button>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '0.85rem' }}>
              {toneMinimalPairs[activeMinimalPairIdx].pairs.map((p, pIdx) => (
                <div
                  key={pIdx}
                  style={{
                    background: 'var(--bg-card)',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-color)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--brand-gold)' }}>
                    {p.toneName}
                  </span>
                  <span style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--brand-primary)' }}>
                    {p.word}
                  </span>
                  <span style={{ fontFamily: 'var(--font-family-mono)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    {p.ipa}
                  </span>
                  <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--text-primary)', margin: '0.2rem 0' }}>
                    {p.meaningZh}
                  </div>
                  <button
                    className="primary-action"
                    style={{ padding: '0.3rem 0.8rem', fontSize: '0.8rem', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.3rem' }}
                    onClick={() => handleSpeak(p.word, `mp_${activeMinimalPairIdx}_${pIdx}`)}
                  >
                    <Volume2 size={13} /> 播放
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* 6 Tones Ear-Trainer Interactive Sandbox */}
          <div style={{
            padding: '1.5rem',
            background: 'linear-gradient(135deg, rgba(234, 179, 8, 0.08) 0%, rgba(37, 99, 235, 0.08) 100%)',
            border: '1.5px solid var(--brand-gold)',
            borderRadius: 'var(--radius-lg)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', marginBottom: '1rem' }}>
              <div>
                <h3 style={{ fontSize: '1.25em', fontWeight: 900, color: 'var(--brand-gold)', margin: 0, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Activity size={22} />
                  {learningMode === 'zh' ? '👂 6 聲調盲聽辨音特訓 (Tone Ear-Trainer)' : '👂 6 Tones Ear-Trainer'}
                </h3>
                <span style={{ fontSize: '0.85em', color: 'var(--text-secondary)' }}>
                  {learningMode === 'zh' ? '點擊播放盲聽音檔，考驗耳朵對聲調音高走勢的直覺！' : 'Listen blindly and identify which tone was spoken!'}
                </span>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9em', fontWeight: 800, color: 'var(--text-primary)' }}>
                  得分：{trainerScore} | 連續答對：🔥 {trainerStreak}
                </span>
                <button
                  className="primary-action"
                  style={{ padding: '0.5rem 1.2rem', fontSize: '0.9em' }}
                  onClick={handlePlayTrainerSound}
                >
                  <Volume2 size={16} />
                  {trainerTarget ? (learningMode === 'zh' ? '再聽一次 🔊' : 'Replay 🔊') : (learningMode === 'zh' ? '開始出題 🎯' : 'Start Drill 🎯')}
                </button>
              </div>
            </div>

            {trainerTarget && (
              <div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.65rem', margin: '1rem 0' }}>
                  {vietnameseTones.map((tone) => {
                    const isSelected = trainerSelected === tone.id;
                    const isCorrect = tone.id === trainerTarget.id;
                    let bg = 'var(--bg-card)';
                    let border = `1.5px solid var(--border-color)`;
                    if (trainerSelected !== null) {
                      if (isCorrect) {
                        bg = 'rgba(16, 185, 129, 0.25)';
                        border = '1.5px solid #10b981';
                      } else if (isSelected) {
                        bg = 'rgba(239, 68, 68, 0.25)';
                        border = '1.5px solid #ef4444';
                      }
                    }
                    return (
                      <button
                        key={tone.id}
                        onClick={() => handleTrainerGuess(tone.id)}
                        style={{
                          padding: '0.75rem',
                          borderRadius: 'var(--radius-md)',
                          background: bg,
                          border: border,
                          cursor: trainerSelected === null ? 'pointer' : 'default',
                          fontWeight: 800,
                          textAlign: 'center',
                          color: 'var(--text-primary)',
                          transition: 'all 0.2s ease'
                        }}
                      >
                        <div style={{ fontSize: '1.1em', color: tone.color }}>{loc(tone, 'name')}</div>
                        <div style={{ fontSize: '0.82em', color: 'var(--text-muted)' }}>{loc(tone, 'symbol')}</div>
                      </button>
                    );
                  })}
                </div>

                {trainerSelected !== null && (
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem', background: 'var(--bg-main)', padding: '0.75rem 1.25rem', borderRadius: 'var(--radius-md)' }}>
                    <div style={{ fontSize: '0.95em', fontWeight: 700, color: trainerSelected === trainerTarget.id ? '#10b981' : '#ef4444' }}>
                      {trainerSelected === trainerTarget.id ? (
                        <>🎉 辨音正確！正確答案是 <strong>{loc(trainerTarget, 'name')} ({loc(trainerTarget, 'symbol')})</strong> · 例字：{trainerTarget.example}</>
                      ) : (
                        <>❌ 答錯囉！剛剛播放的是 <strong>{loc(trainerTarget, 'name')} ({loc(trainerTarget, 'symbol')})</strong> · 例字：{trainerTarget.example}</>
                      )}
                    </div>
                    <button
                      className="secondary-action"
                      style={{ padding: '0.4rem 0.9rem', fontSize: '0.85em' }}
                      onClick={startNewEarTraining}
                    >
                      下一題 ➔
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tone Pitfalls Guide */}
          <div style={{ background: 'var(--bg-card)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-color)' }}>
            <h3 style={{ margin: '0 0 1rem', fontSize: '1.2rem', fontWeight: 900, color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Compass size={20} />
              外國人常犯發音與聲調四大地雷指南 (Pronunciation Pitfalls)
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {tonePitfallGuide.map((pit, idx) => (
                <div key={idx} style={{ background: 'var(--bg-input)', padding: '1rem', borderRadius: 'var(--radius-sm)', borderLeft: '4px solid var(--brand-gold)' }}>
                  <strong style={{ display: 'block', fontSize: '0.92rem', color: 'var(--brand-primary)', marginBottom: '0.35rem' }}>
                    {learningMode === 'zh' ? pit.pitfallZh : pit.pitfallEn}
                  </strong>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.45, margin: '0 0 0.5rem' }}>
                    {pit.descZh}
                  </p>
                  <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--brand-green)', background: 'var(--bg-card)', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-xs)' }}>
                    💡 破解秘訣：{pit.tipZh}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AlphabetModule;
