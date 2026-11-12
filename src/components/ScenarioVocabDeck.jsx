import React, { useState, useEffect, useRef } from 'react';
import { Volume2, Sparkles, Bookmark, BookOpen, Play, Pause, Star } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { DialogueSequencer } from '../services/dialoguePlayback';
import { useLanguage } from '../context/LanguageContext';
import { bookmarkService } from '../services/bookmarkService';

export const ScenarioVocabDeck = ({ scenario, selectedAccent }) => {
  const { learningMode } = useLanguage();
  const [activeKey, setActiveKey] = useState(null);
  const [activeVocabIndex, setActiveVocabIndex] = useState(null);
  const [isPlayingFull, setIsPlayingFull] = useState(false);
  const [playMode, setPlayMode] = useState('zh-vi'); // 'zh-vi' | 'vi-zh' | 'vi-only'
  const [playbackSpeed, setPlaybackSpeed] = useState(0.9);
  const seqRef = useRef(null);

  const vocabList = scenario.vocab || scenario.vocabulary || [];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // Initialize and manage sequencer
  useEffect(() => {
    const seq = new DialogueSequencer((s) => {
      setIsPlayingFull(s.status === 'playing');
      setActiveVocabIndex(s.status === 'idle' ? null : s.index);
    });
    seqRef.current = seq;
    return () => {
      seq.destroy();
    };
  }, []);

  // Follow active vocab card and scroll smoothly
  useEffect(() => {
    if (activeVocabIndex === null || activeVocabIndex < 0) return;
    const el = document.querySelector(`[data-vocab-index="${activeVocabIndex}"]`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeVocabIndex]);

  // Reset when scenario changes
  useEffect(() => {
    seqRef.current?.stop();
    setIsPlayingFull(false);
    setActiveVocabIndex(null);
  }, [scenario.id]);

  const handlePlayFull = (mode = 'zh-vi') => {
    const seq = seqRef.current;
    if (!seq) return;
    if (seq.state.status === 'playing' && playMode === mode) {
      seq.togglePause();
      return;
    }
    if (seq.state.status === 'paused' && playMode === mode) {
      seq.resume();
      return;
    }

    setPlayMode(mode);
    const lines = vocabList.map(v => ({
      viet: v.viet || v.vi,
      native: learningMode === 'zh' ? v.zh : (v.en || v.zh),
      zh: v.zh,
      en: v.en
    }));

    seq.start({
      lines,
      mode,
      fromIndex: activeVocabIndex !== null ? activeVocabIndex : 0,
      accent: selectedAccent,
      nativeLang: learningMode === 'zh' ? 'zh' : 'en',
      title: learningMode === 'zh' ? `${scenario.titleZh || '情境'} · 單字` : `${scenario.titleEn || 'Scenario'} · Vocab`,
      module: 'vocab'
    });
  };

  const handlePlayVocab = (text, key) => {
    seqRef.current?.stop();
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
          const vietText = item.viet || item.vi;
          const itemKey = `vocab_${idx}_${vietText}`;
          const isPlaying = activeKey === itemKey || activeKey === vietText || activeVocabIndex === idx;
          const phoneticText = item.phonetic || item.ipa;
          return (
            <div key={idx} data-vocab-index={idx} data-index={idx} className={`vocab-card-item ${isPlaying ? 'playing-card' : ''}`}>
              <div className="vocab-card-top">
                <div className="vocab-viet">{vietText}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <button 
                    className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`} 
                    onClick={() => handlePlayVocab(vietText, itemKey)}
                    title="播放單字發音"
                  >
                    <Volume2 size={15} />
                  </button>
                  <button
                    className="speaker-btn mini-btn"
                    onClick={() => {
                      audioEngine.playHaptic('tap');
                      bookmarkService.toggle({
                        id: `scn_vocab_${vietText}`,
                        viet: vietText,
                        zh: item.zh || '',
                        en: item.en || '',
                        category: scenario.titleZh || '情境生詞',
                        module: 'conversation',
                        tag: '情境單字',
                        note: item.note || ''
                      });
                    }}
                    title={bookmarkService.isBookmarked(vietText) ? '取消收藏' : '加入個人生詞本'}
                    style={{
                      color: bookmarkService.isBookmarked(vietText) ? '#eab308' : 'var(--text-muted)'
                    }}
                  >
                    <Star size={14} fill={bookmarkService.isBookmarked(vietText) ? '#eab308' : 'none'} />
                  </button>
                </div>
              </div>

              {phoneticText && (
                <div className="vocab-phonetic">{phoneticText}</div>
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
