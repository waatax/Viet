import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, Trophy, Flame, RefreshCw, XCircle, CheckCircle2, Play } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import './ToneGameModule.css';

const TONES = [
  { id: 'ngang', mark: ' ', nameVi: 'Ngang', nameZh: '平聲 (Ngang)', nameEn: 'Level Tone', example: 'ma', color: '#3b82f6' },
  { id: 'huyen', mark: 'ˋ', nameVi: 'Huyền', nameZh: '玄聲 (Huyền)', nameEn: 'Falling Tone', example: 'mà', color: '#10b981' },
  { id: 'sac', mark: 'ˊ', nameVi: 'Sắc', nameZh: '銳聲 (Sắc)', nameEn: 'Rising Tone', example: 'má', color: '#ef4444' },
  { id: 'hoi', mark: '?', nameVi: 'Hỏi', nameZh: '問聲 (Hỏi)', nameEn: 'Dipping Tone', example: 'mả', color: '#f59e0b' },
  { id: 'nga', mark: '~', nameVi: 'Ngã', nameZh: '跌聲 (Ngã)', nameEn: 'Broken Tone', example: 'mã', color: '#8b5cf6' },
  { id: 'nang', mark: '.', nameVi: 'Nặng', nameZh: '重聲 (Nặng)', nameEn: 'Heavy Tone', example: 'mạ', color: '#64748b' },
];

const BASE_SYLLABLES = ['ma', 'ba', 'ca', 'la', 'ta', 'nha', 'kha', 'pha', 'da', 'hoa'];

const generateCombinations = () => {
  const combos = [];
  BASE_SYLLABLES.forEach(base => {
    TONES.forEach(tone => {
      // Very crude generation just for the game logic.
      // A more robust approach uses the Vietnamese diacritic rules, 
      // but for these simple 'a' ending syllables, we can just map it.
      let word = base;
      if (tone.id === 'huyen') word = word.replace('a', 'à');
      if (tone.id === 'sac') word = word.replace('a', 'á');
      if (tone.id === 'hoi') word = word.replace('a', 'ả');
      if (tone.id === 'nga') word = word.replace('a', 'ã');
      if (tone.id === 'nang') word = word.replace('a', 'ạ');
      
      combos.push({ word, tone: tone.id, base });
    });
  });
  return combos;
};

const TONE_COMBOS = generateCombinations();

const ToneGameModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameActive, setGameActive] = useState(false);
  
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  
  const audioRef = useRef(null);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setCombo(0);
    setGameActive(true);
    setFeedback(null);
    nextQuestion();
  };

  const nextQuestion = () => {
    const randomIdx = Math.floor(Math.random() * TONE_COMBOS.length);
    const question = TONE_COMBOS[randomIdx];
    setCurrentQuestion(question);
    setFeedback(null);
    
    // Auto-play the word
    setTimeout(() => {
      playWord(question.word);
    }, 300);
  };

  const playWord = (wordText) => {
    audioEngine.speak(wordText || currentQuestion.word, { accent: selectedAccent });
  };

  const handleToneGuess = (toneId) => {
    if (!gameActive || feedback) return;

    if (toneId === currentQuestion.tone) {
      // Correct
      const newCombo = combo + 1;
      setScore(prev => prev + 10 + (combo * 5));
      setCombo(newCombo);
      setFeedback('correct');

      // Audio feedback
      audioEngine.playComboSound(newCombo);

      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 5 });

      // Check for achievements
      if (newCombo >= 5) {
        gamificationEngine.checkAchievements({ xp: 50, streak: 1 }, { type: 'TONE_COMBO', combo: newCombo });
      }
      
      setTimeout(() => {
        nextQuestion();
      }, 1000);
    } else {
      // Wrong
      setCombo(0);
      setLives(prev => prev - 1);
      setFeedback('wrong');

      // Audio error feedback
      audioEngine.playGentleError();
      
      if (lives <= 1) {
        setGameActive(false); // Game over
      } else {
        setTimeout(() => {
          nextQuestion();
        }, 1500);
      }
    }
  };

  return (
    <div className="module-container tone-game-module">
      <div className="section-header">
        <h2 className="section-title">
          <Music color="var(--brand-primary)" />
          {learningMode === 'zh' ? '聲調聽力特訓 (Tone Mastery Game)' : 'Tone Mastery Game'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '聽發音，選出正確的聲調符號。挑戰你的越南語聽力極限！'
            : 'Listen to the syllable and choose the correct tone mark. Train your ear!'}
        </p>
      </div>

      <div className="game-card">
        {/* HUD */}
        <div className="game-hud">
          <div className="score-box">
            <Trophy size={20} color="#f59e0b" />
            <span>{score}</span>
          </div>
          <div className="combo-box">
            <Flame size={20} color={combo >= 3 ? '#ef4444' : '#94a3b8'} className={combo >= 3 ? 'combo-fire' : ''} />
            <span>Combo: x{combo}</span>
          </div>
          <div className="lives-box">
            {[...Array(3)].map((_, i) => (
              <span key={i} className={`heart ${i < lives ? 'alive' : 'dead'}`}>❤️</span>
            ))}
          </div>
        </div>

        {!gameActive && lives > 0 ? (
          <div className="start-screen">
            <h3>{learningMode === 'zh' ? '準備好挑戰 6 個聲調了嗎？' : 'Ready to challenge the 6 tones?'}</h3>
            <button className="start-btn" onClick={startGame}>
              <Play size={24} /> {learningMode === 'zh' ? '開始遊戲' : 'Start Game'}
            </button>
          </div>
        ) : !gameActive && lives === 0 ? (
          <div className="game-over-screen">
            <h3>{learningMode === 'zh' ? '遊戲結束！' : 'Game Over!'}</h3>
            <p>{learningMode === 'zh' ? `總得分: ${score}` : `Final Score: ${score}`}</p>
            <button className="start-btn" onClick={startGame}>
              <RefreshCw size={24} /> {learningMode === 'zh' ? '再玩一次' : 'Play Again'}
            </button>
          </div>
        ) : (
          <div className="game-play-area">
            <button className="listen-big-btn" onClick={() => playWord()}>
              <Volume2 size={48} color="white" />
            </button>
            
            <div className="feedback-area">
              {feedback === 'correct' && <div className="feedback correct"><CheckCircle2 size={32}/> {learningMode === 'zh' ? '正確！' : 'Correct!'}</div>}
              {feedback === 'wrong' && <div className="feedback wrong"><XCircle size={32}/> {learningMode === 'zh' ? `答錯了！正確是 ${currentQuestion.word}` : `Wrong! It was ${currentQuestion.word}`}</div>}
              {!feedback && <div className="feedback placeholder">聽音辨調</div>}
            </div>

            <div className="tone-grid">
              {TONES.map(tone => (
                <button
                  key={tone.id}
                  className="tone-btn"
                  style={{ borderTop: `4px solid ${tone.color}` }}
                  onClick={() => handleGuess(tone.id)}
                  disabled={!!feedback}
                  onClickCapture={() => handleToneGuess(tone.id)}
                >
                  <div className="tone-mark" style={{ color: tone.color }}>{tone.mark === ' ' ? 'a' : 'a' + tone.mark}</div>
                  <div className="tone-name">{tone.nameVi}</div>
                  <div className="tone-zh">{learningMode === 'zh' ? tone.nameZh : tone.nameEn}</div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToneGameModule;
