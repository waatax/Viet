import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, Trophy, Flame, RefreshCw, XCircle, CheckCircle2, Play, ArrowRight, ShieldAlert, Sparkles, BookOpen } from 'lucide-react';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { gamificationEngine } from '../utils/gamificationEngine';
import './ToneGameModule.css';

const TONES = [
  { id: 'ngang', mark: ' ', nameVi: 'Ngang', nameZh: '平聲 (Ngang)', nameEn: 'Level Tone', pitch: '44', example: 'ma', color: '#3b82f6', contour: 'M 10 30 L 90 30' },
  { id: 'huyen', mark: 'ˋ', nameVi: 'Huyền', nameZh: '玄聲 (Huyền)', nameEn: 'Falling Tone', pitch: '31', example: 'mà', color: '#10b981', contour: 'M 10 20 Q 50 35 90 50' },
  { id: 'sac', mark: 'ˊ', nameVi: 'Sắc', nameZh: '銳聲 (Sắc)', nameEn: 'Rising Tone', pitch: '35', example: 'má', color: '#ef4444', contour: 'M 10 50 Q 50 35 90 15' },
  { id: 'hoi', mark: '?', nameVi: 'Hỏi', nameZh: '問聲 (Hỏi)', nameEn: 'Dipping Tone', pitch: '31-12', example: 'mả', color: '#f59e0b', contour: 'M 10 30 Q 40 55 60 50 Q 75 35 90 20' },
  { id: 'nga', mark: '~', nameVi: 'Ngã', nameZh: '跌聲 (Ngã)', nameEn: 'Broken Tone', pitch: '35-45', example: 'mã', color: '#8b5cf6', contour: 'M 10 35 Q 40 45 55 35 Q 70 50 90 15' },
  { id: 'nang', mark: '.', nameVi: 'Nặng', nameZh: '重聲 (Nặng)', nameEn: 'Heavy Tone', pitch: '21', example: 'mạ', color: '#64748b', contour: 'M 10 30 Q 50 48 85 55' },
];

// Difficulty 1: Base syllables
const BASE_SYLLABLES = ['ma', 'ba', 'ca', 'la', 'ta', 'nha', 'kha', 'pha', 'da', 'hoa'];
const generateCombinations = () => {
  const combos = [];
  BASE_SYLLABLES.forEach(base => {
    TONES.forEach(tone => {
      let word = base;
      if (tone.id === 'huyen') word = word.replace('a', 'à');
      if (tone.id === 'sac') word = word.replace('a', 'á');
      if (tone.id === 'hoi') word = word.replace('a', 'ả');
      if (tone.id === 'nga') word = word.replace('a', 'ã');
      if (tone.id === 'nang') word = word.replace('a', 'ạ');
      combos.push({ word, tone: tone.id, base, level: 'easy' });
    });
  });
  return combos;
};
const EASY_COMBOS = generateCombinations();

// Difficulty 2: Tricky Minimal Pairs (Hỏi vs Ngã, Sắc vs Nặng, Huyền vs Ngang)
const TRICKY_PAIRS = [
  { word: 'mả', tone: 'hoi', base: 'ma', hint: 'mả (墳墓 · 問聲降揚)', level: 'tricky' },
  { word: 'mã', tone: 'nga', base: 'ma', hint: 'mã (碼/馬 · 跌聲聲門微阻)', level: 'tricky' },
  { word: 'ngủ', tone: 'hoi', base: 'ngu', hint: 'ngủ (睡覺 · 問聲)', level: 'tricky' },
  { word: 'ngũ', tone: 'nga', base: 'ngu', hint: 'ngũ (五/軍伍 · 跌聲)', level: 'tricky' },
  { word: 'sữa', tone: 'nga', base: 'sua', hint: 'sữa (乳/奶 · 跌聲)', level: 'tricky' },
  { word: 'sửa', tone: 'hoi', base: 'sua', hint: 'sửa (修理 · 問聲)', level: 'tricky' },
  { word: 'má', tone: 'sac', base: 'ma', hint: 'má (媽媽/臉頰 · 銳聲急升)', level: 'tricky' },
  { word: 'mạ', tone: 'nang', base: 'ma', hint: 'mạ (秧苗 · 重聲急墜)', level: 'tricky' },
  { word: 'bán', tone: 'sac', base: 'ban', hint: 'bán (賣出 · 銳聲)', level: 'tricky' },
  { word: 'bạn', tone: 'nang', base: 'ban', hint: 'bạn (朋友 · 重聲)', level: 'tricky' },
  { word: 'cà', tone: 'huyen', base: 'ca', hint: 'cà (茄子/咖啡 · 玄聲低平)', level: 'tricky' },
  { word: 'ca', tone: 'ngang', base: 'ca', hint: 'ca (唱歌 · 平聲中高)', level: 'tricky' },
  { word: 'chủ', tone: 'hoi', base: 'chu', hint: 'chủ (主人/店東 · 問聲降揚)', level: 'tricky' },
  { word: 'chú', tone: 'sac', base: 'chu', hint: 'chú (叔叔/長輩 · 銳聲急升)', level: 'tricky' },
  { word: 'cả', tone: 'hoi', base: 'ca', hint: 'cả (全部/長兄 · 問聲)', level: 'tricky' },
  { word: 'cá', tone: 'sac', base: 'ca', hint: 'cá (魚肉 · 銳聲)', level: 'tricky' },
  { word: 'rùa', tone: 'huyen', base: 'rua', hint: 'rùa (烏龜 · 玄聲低沉平緩)', level: 'tricky' },
  { word: 'rủa', tone: 'hoi', base: 'rua', hint: 'rủa (咒罵 · 問聲起伏)', level: 'tricky' },
  { word: 'lấy', tone: 'sac', base: 'lay', hint: 'lấy (取得/娶妻 · 銳聲急促)', level: 'tricky' },
  { word: 'lạy', tone: 'nang', base: 'lay', hint: 'lạy (跪拜/頂禮 · 重聲短促斷聲)', level: 'tricky' }
];

// Difficulty 3: Real Everyday Words
const REAL_WORDS = [
  { word: 'phở', tone: 'hoi', base: 'pho', hint: 'phở (河粉)', level: 'real' },
  { word: 'bún', tone: 'sac', base: 'bun', hint: 'bún (米線)', level: 'real' },
  { word: 'cơm', tone: 'ngang', base: 'com', hint: 'cơm (米飯)', level: 'real' },
  { word: 'thịt', tone: 'nang', base: 'thit', hint: 'thịt (肉類)', level: 'real' },
  { word: 'tiền', tone: 'huyen', base: 'tien', hint: 'tiền (金錢)', level: 'real' },
  { word: 'nước', tone: 'sac', base: 'nuoc', hint: 'nước (水/國家)', level: 'real' },
  { word: 'đẹp', tone: 'nang', base: 'dep', hint: 'đẹp (美麗)', level: 'real' },
  { word: 'ngon', tone: 'ngang', base: 'ngon', hint: 'ngon (美味)', level: 'real' },
  { word: 'rẻ', tone: 'hoi', base: 're', hint: 'rẻ (便宜)', level: 'real' },
  { word: 'chữa', tone: 'nga', base: 'chua', hint: 'chữa (醫治)', level: 'real' },
  { word: 'bệnh', tone: 'nang', base: 'benh', hint: 'bệnh (疾病)', level: 'real' },
  { word: 'chào', tone: 'huyen', base: 'chao', hint: 'chào (問好)', level: 'real' }
];

export const ToneGameModule = ({ selectedAccent = 'north', updateUserStats }) => {
  const { learningMode } = useLanguage();
  const [difficulty, setDifficulty] = useState('easy'); // 'easy' | 'tricky' | 'real'
  const [gameActive, setGameActive] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [combo, setCombo] = useState(0);
  const [feedback, setFeedback] = useState(null); // 'correct' | 'wrong'
  const [mistakesList, setMistakesList] = useState([]);
  const [isReviewMode, setIsReviewMode] = useState(false);

  const getQuestionPool = () => {
    if (isReviewMode && mistakesList.length > 0) return mistakesList;
    if (difficulty === 'tricky') return TRICKY_PAIRS;
    if (difficulty === 'real') return REAL_WORDS;
    return EASY_COMBOS;
  };

  const startGame = () => {
    setScore(0);
    setLives(3);
    setCombo(0);
    setGameActive(true);
    setFeedback(null);
    setMistakesList([]);
    setIsReviewMode(false);
    nextQuestion();
  };

  const startReviewMode = () => {
    if (mistakesList.length === 0) return;
    setIsReviewMode(true);
    setScore(0);
    setLives(3);
    setCombo(0);
    setGameActive(true);
    setFeedback(null);
    nextQuestion(mistakesList);
  };

  const nextQuestion = (customPool) => {
    const pool = customPool || getQuestionPool();
    const randomIdx = Math.floor(Math.random() * pool.length);
    const question = pool[randomIdx];
    setCurrentQuestion(question);
    setFeedback(null);

    setTimeout(() => {
      playWord(question.word);
    }, 280);
  };

  const playWord = (wordText) => {
    const target = wordText || (currentQuestion && currentQuestion.word);
    if (target) {
      audioEngine.speak(target, { accent: selectedAccent });
    }
  };

  const handleToneGuess = (toneId) => {
    if (!gameActive || feedback || !currentQuestion) return;

    const isCorrect = toneId === currentQuestion.tone;
    const correctToneObj = TONES.find(t => t.id === currentQuestion.tone);

    if (isCorrect) {
      const newCombo = combo + 1;
      setScore(prev => prev + 10 + (combo * 5));
      setCombo(newCombo);
      setFeedback({ type: 'correct', toneObj: correctToneObj });
      audioEngine.playComboSound(newCombo);

      if (updateUserStats) updateUserStats({ type: 'ADD_XP', payload: 5 });

      if (newCombo >= 5) {
        gamificationEngine.checkAchievements({ xp: 50, streak: 1 }, { type: 'TONE_COMBO', combo: newCombo });
      }

      setTimeout(() => {
        nextQuestion();
      }, 1200);
    } else {
      setCombo(0);
      setLives(prev => prev - 1);
      setFeedback({ type: 'wrong', toneObj: correctToneObj });
      setMistakesList(prev => [...prev, currentQuestion]);
      audioEngine.playGentleError();

      // Play correct tone pitch so ear learns immediately
      setTimeout(() => {
        audioEngine.playTonePitch(currentQuestion.tone, selectedAccent);
      }, 500);

      if (lives <= 1) {
        setGameActive(false);
      } else {
        setTimeout(() => {
          nextQuestion();
        }, 2200);
      }
    }
  };

  return (
    <div className="module-container tone-game-module">
      <div className="section-header">
        <h2 className="section-title">
          <Music color="var(--brand-primary)" />
          {learningMode === 'zh' ? '聲調聽力特訓 2.0 (Tone Mastery Ear-Trainer)' : 'Tone Mastery Ear-Trainer 2.0'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '聽發音辨聲調，結合 3 級難度梯次、動態調值音高走勢與錯題精練，徹底征服 6 大聲調！'
            : 'Listen to spoken syllables, select the tone mark, and master Vietnamese tones with visual pitch contours!'}
        </p>
      </div>

      {/* Difficulty Selector Bar */}
      {!gameActive && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.65rem',
          flexWrap: 'wrap',
          marginBottom: '1.5rem'
        }}>
          {[
            { id: 'easy', labelZh: '🌱 入門：基礎單音節', labelEn: '🌱 Level 1: Syllables' },
            { id: 'tricky', labelZh: '⚡ 進階：易混聲調對決 (Hỏi vs Ngã)', labelEn: '⚡ Level 2: Tricky Pairs' },
            { id: 'real', labelZh: '🔥 大師：生活真實詞彙', labelEn: '🔥 Level 3: Real Words' }
          ].map(d => (
            <button
              key={d.id}
              onClick={() => setDifficulty(d.id)}
              style={{
                padding: '0.55rem 1.1rem',
                borderRadius: 'var(--radius-full)',
                border: difficulty === d.id ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: difficulty === d.id ? 'var(--bg-accent)' : 'var(--bg-card)',
                color: difficulty === d.id ? 'var(--brand-primary)' : 'var(--text-secondary)',
                fontWeight: difficulty === d.id ? 800 : 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease'
              }}
            >
              {learningMode === 'zh' ? d.labelZh : d.labelEn}
            </button>
          ))}
        </div>
      )}

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
          <div className="start-screen" style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.75rem' }}>🎧✨</div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 900, marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '準備好接受 6 大聲調的聽力考驗了嗎？' : 'Ready to train your ears on 6 tones?'}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 1.5rem' }}>
              {difficulty === 'easy' && (learningMode === 'zh' ? '入門關卡：透過 ma/ba 等基礎音節，打牢平聲、玄聲、銳聲、問聲、跌聲、重聲的聽覺直覺。' : 'Basic syllables ear training.')}
              {difficulty === 'tricky' && (learningMode === 'zh' ? '易混挑戰：專門鎖定台灣人最頭痛的 Hỏi (問聲) 與 Ngã (跌聲) 以及 Sắc 與 Nặng 的辨析。' : 'Targeted tricky minimal pairs: Hỏi vs Ngã, Sắc vs Nặng.')}
              {difficulty === 'real' && (learningMode === 'zh' ? '實戰關卡：直接聆聽 phở, bún, tiền, nước 等高頻生活單字辨調！' : 'Real everyday words ear training.')}
            </p>
            <button className="start-btn" onClick={startGame} style={{ padding: '0.85rem 2rem', fontSize: '1.05rem', fontWeight: 800 }}>
              <Play size={22} /> {learningMode === 'zh' ? '開始聽力特訓' : 'Start Ear Training'}
            </button>
          </div>
        ) : !gameActive && lives === 0 ? (
          <div className="game-over-screen" style={{ padding: '2.5rem 1rem', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-primary)' }}>
              {learningMode === 'zh' ? '本次特訓結束！' : 'Round Complete!'}
            </h3>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--brand-gold)', margin: '0.5rem 0 1.5rem' }}>
              {learningMode === 'zh' ? `最終得分：${score} 分` : `Final Score: ${score}`}
            </p>

            <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="start-btn" onClick={startGame}>
                <RefreshCw size={20} /> {learningMode === 'zh' ? '重新挑戰' : 'Play Again'}
              </button>
              {mistakesList.length > 0 && (
                <button
                  onClick={startReviewMode}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    background: 'var(--brand-accent)',
                    color: '#fff',
                    padding: '0.75rem 1.4rem',
                    borderRadius: 'var(--radius-full)',
                    fontWeight: 800,
                    cursor: 'pointer',
                    border: 'none'
                  }}
                >
                  <BookOpen size={18} /> {learningMode === 'zh' ? `錯題精練 (${mistakesList.length}題)` : `Review Mistakes (${mistakesList.length})`}
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="game-play-area">
            <button
              className="listen-big-btn audio-playing-glow"
              onClick={() => playWord()}
              title="點擊重播發音"
            >
              <Volume2 size={48} color="white" />
            </button>

            {/* Live Visual Feedback on Guess */}
            <div className="feedback-area" style={{ minHeight: '80px' }}>
              {feedback && feedback.type === 'correct' && (
                <div className="feedback correct" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.25rem', fontWeight: 900 }}>
                    <CheckCircle2 size={26} color="var(--brand-green)" />
                    <span>{learningMode === 'zh' ? '答對了！' : 'Correct!'}</span>
                    <span style={{ color: feedback.toneObj.color }}>{currentQuestion.word} ({feedback.toneObj.nameVi})</span>
                  </div>
                  {currentQuestion.hint && (
                    <small style={{ color: 'var(--text-secondary)' }}>{currentQuestion.hint}</small>
                  )}
                </div>
              )}

              {feedback && feedback.type === 'wrong' && (
                <div className="feedback wrong" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.3rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '1.15rem', fontWeight: 800 }}>
                    <XCircle size={24} color="#ef4444" />
                    <span>{learningMode === 'zh' ? '答錯了，正確答案是：' : 'It was: '}</span>
                    <strong style={{ color: feedback.toneObj.color, fontSize: '1.3rem' }}>{currentQuestion.word}</strong>
                    <span style={{ color: feedback.toneObj.color }}>({feedback.toneObj.nameVi} · {feedback.toneObj.pitch})</span>
                  </div>
                  {currentQuestion.hint && (
                    <small style={{ color: 'var(--text-secondary)' }}>{currentQuestion.hint}</small>
                  )}
                </div>
              )}

              {!feedback && (
                <div className="feedback placeholder" style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  🎵 仔細聆聽發音，選出正確的聲調符號
                </div>
              )}
            </div>

            {/* 6 Tones Selection Grid with Visual Contour Chips */}
            <div className="tone-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
              {TONES.map(tone => {
                const isSelectedAndWrong = feedback && feedback.type === 'wrong' && currentQuestion.tone !== tone.id;
                const isCorrectTone = feedback && currentQuestion.tone === tone.id;
                return (
                  <button
                    key={tone.id}
                    className="tone-btn"
                    style={{
                      borderTop: `4px solid ${tone.color}`,
                      background: isCorrectTone ? 'rgba(16, 185, 129, 0.15)' : 'var(--bg-card)',
                      borderColor: isCorrectTone ? 'var(--brand-green)' : (isSelectedAndWrong ? 'var(--border-color)' : tone.color),
                      transition: 'all 0.15s ease',
                      opacity: feedback && !isCorrectTone ? 0.6 : 1
                    }}
                    onClick={() => handleToneGuess(tone.id)}
                    disabled={!!feedback}
                  >
                    <div className="tone-mark" style={{ color: tone.color, fontSize: '1.7rem', fontWeight: 900 }}>
                      {tone.mark === ' ' ? 'a' : 'a' + tone.mark}
                    </div>
                    <div className="tone-name" style={{ fontWeight: 800, color: 'var(--text-primary)' }}>
                      {tone.nameVi}
                    </div>
                    <div className="tone-zh" style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      {learningMode === 'zh' ? tone.nameZh : tone.nameEn}
                    </div>
                    <div style={{ fontSize: '0.72rem', fontWeight: 800, color: tone.color, marginTop: '0.15rem' }}>
                      調值 {tone.pitch}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ToneGameModule;
