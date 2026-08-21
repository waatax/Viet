import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, Bookmark, BookOpen, Play, Pause } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const ScenarioVocabDeck = ({ scenario, selectedAccent }) => {
  const { learningMode } = useLanguage();
  const [activeKey, setActiveKey] = useState(null);
  const [activeVocabIndex, setActiveVocabIndex] = useState(null);
  
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [playMode, setPlayMode] = useState('zh-vi'); // 'zh-vi' | 'vi-zh' | 'vi-only'
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const isPlayingFullRef = useRef(false);
  const timerRef = useRef(null);

  const vocabList = scenario.vocab || [];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => {
      unsubscribe();
      isPlayingFullRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Reset when scenario changes
  useEffect(() => {
    isPlayingFullRef.current = false;
    if (timerRef.current) clearTimeout(timerRef.current);
    audioEngine.stop();
    setIsPlayingFull(false);
    setActiveVocabIndex(null);
  }, [scenario.id]);

  const playInSequence = (index, part = 'first', currentPlayMode = playMode, speed = playbackSpeed) => {
    const listToPlay = vocabList;
    
    if (!isPlayingFullRef.current || index >= listToPlay.length) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveVocabIndex(null);
      return;
    }

    setActiveVocabIndex(index);
    const item = listToPlay[index];
    const nativeText = learningMode === 'zh' ? item.zh : item.en;
    const nativeLang = learningMode === 'zh' ? 'zh' : 'en';

    if (currentPlayMode === 'vi-only') {
      audioEngine.speak(item.viet, {
        accent: selectedAccent,
        lang: 'vi',
        rate: speed,
        key: `seq_vocab_viet_${index}`,
        onEnd: () => {
          if (!isPlayingFullRef.current) return;
          const gap = speed < 0.85 ? 1300 : 1000;
          timerRef.current = setTimeout(() => {
            if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
          }, gap);
        }
      });
    } else if (currentPlayMode === 'zh-vi') {
      // 1次中文 -> 1次越文 (Chinese first, then Vietnamese)
      if (part === 'first') {
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `seq_vocab_native_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index, 'second', currentPlayMode, speed);
            }, 300);
          }
        });
      } else {
        audioEngine.speak(item.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `seq_vocab_viet_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            const gap = speed < 0.85 ? 1400 : 1100;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
            }, gap);
          }
        });
      }
    } else {
      // 'vi-zh': 1次越文 -> 1次中文 (Vietnamese first, then Chinese)
      if (part === 'first') {
        audioEngine.speak(item.viet, {
          accent: selectedAccent,
          lang: 'vi',
          rate: speed,
          key: `seq_vocab_viet_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index, 'second', currentPlayMode, speed);
            }, 300);
          }
        });
      } else {
        audioEngine.speak(nativeText, {
          lang: nativeLang,
          rate: speed,
          key: `seq_vocab_native_${index}`,
          onEnd: () => {
            if (!isPlayingFullRef.current) return;
            const gap = speed < 0.85 ? 1400 : 1100;
            timerRef.current = setTimeout(() => {
              if (isPlayingFullRef.current) playInSequence(index + 1, 'first', currentPlayMode, speed);
            }, gap);
          }
        });
      }
    }
  };

  const handlePlayFull = (mode = 'zh-vi') => {
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveVocabIndex(null);
      if (timerRef.current) clearTimeout(timerRef.current);
      audioEngine.stop();
      return;
    }
    
    setPlayMode(mode);
    setIsPlayingFull(true);
    isPlayingFullRef.current = true;
    playInSequence(0, 'first', mode, playbackSpeed);
  };

  const handlePlayVocab = (text, key) => {
    // If playing continuous, stop it
    if (isPlayingFull) {
      setIsPlayingFull(false);
      isPlayingFullRef.current = false;
      setActiveVocabIndex(null);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    audioEngine.speak(text, { accent: selectedAccent, rate: playbackSpeed, key });
  };

  if (vocabList.length === 0) {
    return null;
  }

  return (
    <div className="vocab-deck-wrapper">
      <div className="vocab-deck-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <BookOpen size={18} color="var(--brand-accent)" />
          <h4 style={{ margin: 0 }}>{learningMode === 'zh' ? `情境高頻核心字彙與發音 (${vocabList.length} 個字)` : `Scenario Essential Vocabulary (${vocabList.length})`}</h4>
        </div>
        
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
          {/* Mode 1: Once Chinese, Once Vietnamese (中+越) */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'zh-vi' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('zh-vi')}
            style={{ 
              background: isPlayingFull && playMode === 'zh-vi' ? 'var(--brand-primary)' : 'var(--brand-green)', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'zh-vi' ? 0.6 : 1,
              padding: '0.4rem 0.8rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
            title={learningMode === 'zh' ? '每單字先播中文釋義，再播越文發音 (最佳聽背)' : 'Play 1x Chinese then 1x Vietnamese'}
          >
            {isPlayingFull && playMode === 'zh-vi' ? <Pause size={14} /> : <Play size={14} />}
            <span>
              {isPlayingFull && playMode === 'zh-vi'
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? <>播放: 中+越 (一次中文一次越文)</> : <>Play: Zh → Vi</>)}
            </span>
          </button>

          {/* Mode 2: Once Vietnamese, Once Chinese (越+中) */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'vi-zh' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('vi-zh')}
            style={{ 
              background: isPlayingFull && playMode === 'vi-zh' ? 'var(--brand-primary)' : 'var(--brand-gold)', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'vi-zh' ? 0.6 : 1,
              padding: '0.4rem 0.8rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
            title={learningMode === 'zh' ? '每單字先播越文發音，再播中文翻譯' : 'Play 1x Vietnamese then 1x Chinese'}
          >
            {isPlayingFull && playMode === 'vi-zh' ? <Pause size={14} /> : <Play size={14} />}
            <span>
              {isPlayingFull && playMode === 'vi-zh'
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? <>播放: 越+中</> : <>Play: Vi → Zh</>)}
            </span>
          </button>

          {/* Mode 3: Vietnamese Only (純越文) */}
          <button 
            className={`control-btn play-full-btn ${isPlayingFull && playMode === 'vi-only' ? 'playing' : ''}`}
            onClick={() => handlePlayFull('vi-only')}
            style={{ 
              background: isPlayingFull && playMode === 'vi-only' ? 'var(--brand-primary)' : 'var(--brand-accent, #8b5cf6)', 
              color: '#fff',
              opacity: isPlayingFull && playMode !== 'vi-only' ? 0.6 : 1,
              padding: '0.4rem 0.8rem',
              fontSize: '0.85em',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
            title={learningMode === 'zh' ? '純越文連續聽力' : 'Vietnamese Only'}
          >
            {isPlayingFull && playMode === 'vi-only' ? <Pause size={14} /> : <Play size={14} />}
            <span>
              {isPlayingFull && playMode === 'vi-only'
                ? (learningMode === 'zh' ? '暫停播放' : 'Pause') 
                : (learningMode === 'zh' ? <>播放: 純越文</> : <>Play: Viet</>)}
            </span>
          </button>

          {/* Speed Toggle Chips */}
          <div className="speed-toggle-group" style={{ display: 'inline-flex', background: 'var(--bg-secondary)', borderRadius: '6px', padding: '2px', border: '1px solid var(--border-color)' }}>
            <button 
              className={`speed-chip ${playbackSpeed >= 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.9)}
              style={{
                background: playbackSpeed >= 0.85 ? 'var(--brand-accent)' : 'transparent',
                color: playbackSpeed >= 0.85 ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.25rem 0.55rem',
                fontSize: '0.78em',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
              }}
              title="正常語速"
            >
              1.0x
            </button>
            <button 
              className={`speed-chip ${playbackSpeed < 0.85 ? 'active' : ''}`}
              onClick={() => setPlaybackSpeed(0.7)}
              style={{
                background: playbackSpeed < 0.85 ? 'var(--brand-accent)' : 'transparent',
                color: playbackSpeed < 0.85 ? '#fff' : 'var(--text-secondary)',
                border: 'none',
                padding: '0.25rem 0.55rem',
                fontSize: '0.78em',
                borderRadius: '4px',
                cursor: 'pointer',
                fontWeight: 600
              }}
              title="慢速精讀 (適合初學跟讀)"
            >
              0.75x
            </button>
          </div>
        </div>
      </div>

      <div className="vocab-cards-grid">
        {vocabList.map((item, idx) => {
          const itemKey = `vocab_${idx}_${item.viet}`;
          const isPlaying = activeKey === itemKey || activeKey === item.viet || activeVocabIndex === idx;
          return (
            <div key={idx} className={`vocab-card-item ${isPlaying ? 'playing-card' : ''}`}>
              <div className="vocab-card-top">
                <div className="vocab-viet">{item.viet}</div>
                <button 
                  className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`} 
                  onClick={() => handlePlayVocab(item.viet, itemKey)}
                  title="播放單字發音"
                >
                  <Volume2 size={15} />
                </button>
              </div>

              {item.phonetic && (
                <div className="vocab-phonetic">{item.phonetic}</div>
              )}

              <div className="vocab-meaning">
                {learningMode === 'zh' ? item.zh : item.en}
              </div>

              {item.note && (
                <div className="vocab-note">
                  💡 {item.note}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
