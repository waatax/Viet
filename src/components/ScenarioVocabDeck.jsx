import React, { useState, useEffect } from 'react';
import { Volume2, Sparkles, Bookmark, BookOpen } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const ScenarioVocabDeck = ({ scenario, selectedAccent }) => {
  const { learningMode } = useLanguage();
  const [activeKey, setActiveKey] = useState(null);
  const vocabList = scenario.vocab || [];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const handlePlayVocab = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key });
  };

  if (vocabList.length === 0) {
    return null;
  }

  return (
    <div className="vocab-deck-wrapper">
      <div className="vocab-deck-header">
        <BookOpen size={18} color="var(--brand-accent)" />
        <h4>{learningMode === 'zh' ? '情境高頻核心字彙與發音' : 'Scenario Essential Vocabulary & Audio'}</h4>
      </div>

      <div className="vocab-cards-grid">
        {vocabList.map((item, idx) => {
          const itemKey = `vocab_${idx}_${item.viet}`;
          const isPlaying = activeKey === itemKey;
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
