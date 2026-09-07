export const EXPANDED_GRAMMAR_RULES = [
  {
    titleZh: '1. 基本 SVO 語序 (主詞 + 動詞 + 受詞)',
    titleEn: '1. Basic SVO Word Order',
    descriptionZh: '基本語序與中文完全相同，動詞不隨人稱、性別變形，直接以原形表達。',
    descriptionEn: 'Follows Subject + Verb + Object without verbal conjugation.',
    exampleVi: 'Tôi ăn cơm.',
    exampleZh: 'Tôi (我) + ăn (吃) + cơm (飯) = 我吃飯。'
  },
  {
    titleZh: '2. 形容詞後置修飾原則 (重要！)',
    titleEn: '2. Post-nominal Adjective Rule',
    descriptionZh: '與中文完全相反！形容詞、定語必須放置在名詞的「後面」進行修飾。',
    descriptionEn: 'Adjectives strictly follow the noun they modify.',
    exampleVi: 'Cà phê sữa đá',
    exampleZh: 'Cà phê (咖啡) + sữa (奶) + đá (冰) = 冰奶咖啡。'
  },
  {
    titleZh: '3. 三大時態標記 (Đã / Đang / Sẽ)',
    titleEn: '3. Tense Markers (Đã / Đang / Sẽ)',
    descriptionZh: '動詞前放置時態助詞：Đã (已/過去)、Đang (正在/進行)、Sẽ (將要/未來)。',
    descriptionEn: 'Pre-verbal aspect particles: Đã (past), Đang (progressive), Sẽ (future).',
    exampleVi: 'Tôi đang học tiếng Việt.',
    exampleZh: 'Tôi đang học tiếng Việt. (我正在學越南語。)'
  },
  {
    titleZh: '4. 被動與受益語氣 (Bị vs Được)',
    titleEn: '4. Passive (Bị vs Được)',
    descriptionZh: '遭遇不幸、非自願負面用 Bị；獲得好處、幸運正面用 Được。',
    descriptionEn: 'Use Bị for adverse experiences, Được for fortunate ones.',
    exampleVi: 'Anh ấy được thăng chức, còn tôi bị phạt.',
    exampleZh: 'Được thăng chức (升遷) vs Bị phạt (被罰)。'
  },
  {
    titleZh: '5. 經典量詞體系 (Cái, Con, Người, Chiếc)',
    titleEn: '5. Classifier System',
    descriptionZh: '「數詞 + 量詞 + 名詞」：cái (物品), con (動物/活物), người (人), chiếc (車船/成雙之一)。',
    descriptionEn: 'Numeral + Classifier + Noun syntax.',
    exampleVi: 'Hai con cá và một cái bàn.',
    exampleZh: 'Hai con cá (兩條魚) + một cái bàn (一張桌子)。'
  },
  {
    titleZh: '6. 萬能是非疑問句 (Có ... không?)',
    titleEn: '6. Yes/No Questions (Có ... không?)',
    descriptionZh: '句型：主詞 + Có + 動詞/形容詞 + Không? (意為「有沒有...？/ 是否...？」)。',
    descriptionEn: 'Universal question structure: S + có + V/Adj + không?',
    exampleVi: 'Bạn có khỏe không?',
    exampleZh: 'Bạn có khỏe không? (你身體好嗎？)'
  },
  {
    titleZh: '7. 三大否定詞 (Không, Chưa, Đừng)',
    titleEn: '7. Negation Words (Không, Chưa, Đừng)',
    descriptionZh: 'Không (不/非事實)、Chưa (尚未/將來可能發生)、Đừng (別/請勿/祈使句否定)。',
    descriptionEn: 'Không (no/not), Chưa (not yet), Đừng (do not/imperative).',
    exampleVi: 'Tôi chưa ăn cơm, đừng lo!',
    exampleZh: 'Chưa ăn (尚未吃) · Đừng lo (別擔心)。'
  },
  {
    titleZh: '8. 方向與動態介詞 (Đi, Đến, Về, Ở)',
    titleEn: '8. Motion & Prepositions',
    descriptionZh: 'Đi (去)、Đến/Tới (到達)、Về (返回家鄉)、Ở (在某處)。回到家鄉必用 Về。',
    descriptionEn: 'Đi (go), Đến (arrive), Về (return home), Ở (at/in).',
    exampleVi: 'Tôi đi làm, tối về nhà ở Hà Nội.',
    exampleZh: 'Đi làm (去上班) · Về nhà (回家) · Ở Hà Nội (在河內)。'
  },
  {
    titleZh: '9. 關係代詞與修飾子句 (Mà & Là)',
    titleEn: '9. Relative Particle & Copula (Mà & Là)',
    descriptionZh: 'Mà 用於連接修飾子句或表達轉折「便宜而且好看 (Rẻ mà đẹp)」；Là 為繫詞「是」，後接名詞不可省略。',
    descriptionEn: 'Mà connects relative clauses or contrast; Là is the essential copula "to be".',
    exampleVi: 'Người mà tôi gặp hôm qua là giám đốc.',
    exampleZh: 'Người mà tôi gặp (我昨天遇見的人) + là giám đốc (是總經理)。'
  },
  {
    titleZh: '10. 比較級與最高級 (Hơn vs Nhất)',
    titleEn: '10. Comparison & Superlatives (Hơn vs Nhất)',
    descriptionZh: '比較級：主詞 + 形容詞 + Hơn + 對象 (比...更...)；最高級：形容詞 + Nhất (最...)。',
    descriptionEn: 'Comparative: S + Adj + Hơn + Object; Superlative: Adj + Nhất.',
    exampleVi: 'Hà Nội lạnh hơn Sài Gòn, phở bò ngon nhất!',
    exampleZh: 'Lạnh hơn Sài Gòn (比西貢冷) · Ngon nhất (最好吃)。'
  }
];

import React, { useState, useEffect } from 'react';
import { Layers, Puzzle, CheckCircle, RefreshCw, Volume2, ArrowRight, Sparkles, CheckCircle2, XCircle } from 'lucide-react';
import { grammarRules, interactivePuzzles } from '../data/vietnameseData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';

export const GrammarModule = ({ selectedAccent, updateUserStats }) => {
  const { learningMode, loc, t } = useLanguage();
  const [puzzleIndex, setPuzzleIndex] = useState(0);
  const [userWords, setUserWords] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  const currentPuzzle = interactivePuzzles[puzzleIndex] || interactivePuzzles[0];

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => {
      setActiveKey(state.isPlaying ? state.activeKey : null);
    });
    return () => unsubscribe();
  }, []);

  const playSnapSound = () => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      const ctx = new AudioContext();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.5, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch (e) {
      console.error('Audio play failed', e);
    }
  };

  const handleAddWord = (word) => {
    if (!userWords.includes(word)) {
      playSnapSound();
      const newWords = [...userWords, word];
      setUserWords(newWords);

      if (newWords.length === currentPuzzle.correctOrder.length) {
        const isAnswerCorrect = newWords.join(' ') === currentPuzzle.correctOrder.join(' ');
        setIsCorrect(isAnswerCorrect);
        setIsCompleted(true);
        if (isAnswerCorrect) {
          if (updateUserStats) updateUserStats(20);
          audioEngine.speak(newWords.join(' '), { accent: selectedAccent, key: `puzzle_${currentPuzzle.id}` });
        }
      }
    }
  };

  const handleRemoveWord = (word) => {
    setUserWords(userWords.filter(w => w !== word));
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleResetPuzzle = () => {
    setUserWords([]);
    setIsCompleted(false);
    setIsCorrect(null);
  };

  const handleNextPuzzle = () => {
    handleResetPuzzle();
    setPuzzleIndex((prev) => (prev + 1) % interactivePuzzles.length);
  };

  const playSpeech = (text, key) => {
    audioEngine.speak(text, { accent: selectedAccent, key });
  };

  return (
    <div className="module-container">
      <div className="section-header">
        <h2 className="section-title">
          <Layers color="var(--brand-primary)" />
          {learningMode === 'zh' ? '越南語語法核心法則與互動拼句積木練習器' : 'Vietnamese Grammar Rules & Sentence Builder'}
        </h2>
        <p className="section-desc">
          {learningMode === 'zh'
            ? '掌握 S+V+O 語序、形容詞後置修飾、量詞及時態助詞（đã/đang/sẽ）。點擊單字積木完成拼句挑戰！'
            : 'Master SVO order, post-nominal adjectives, classifiers, and tense markers with interactive builder exercises.'}
        </p>
      </div>

      {/* 知識點 完整解釋: SVO & Tense Markers */}
      <div className="educational-block" style={{ background: 'var(--bg-accent)', padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '2rem', borderLeft: '4px solid var(--brand-primary)' }}>
        <h3 style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Sparkles size={20} color="var(--brand-primary)" />
          {learningMode === 'zh' ? '核心知識點：SVO 語序與時態標記' : 'Key Concepts: SVO Structure & Tense Markers'}
        </h3>
        <div style={{ display: 'grid', gap: '1.5rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>1. {learningMode === 'zh' ? 'SVO 基本語序 (主詞 + 動詞 + 受詞)' : 'SVO Basic Structure (Subject + Verb + Object)'}</h4>
            <p>{learningMode === 'zh' ? '越南語與英文和中文一樣，基本語序為 SVO。最大的不同在於「修飾語後置」，例如名詞的形容詞必須放在名詞的「後面」。' : 'Vietnamese shares the SVO structure with English. The biggest difference is that adjectives and modifiers come AFTER the noun.'}</p>
            <div style={{ background: 'var(--bg-main)', padding: '0.75rem', borderRadius: '4px', marginTop: '0.5rem', fontSize: '0.9em', border: '1px solid var(--border-color)' }}>
              <strong>{learningMode === 'zh' ? '例：' : 'Ex: '}</strong>Tôi (I) + ăn (eat) + táo (apple).<br/>
              <strong>{learningMode === 'zh' ? '修飾後置：' : 'Post-modifier: '}</strong>áo (shirt) + trắng (white) = áo trắng (white shirt).
            </div>
          </div>
          <div>
            <h4 style={{ fontWeight: 700, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>2. {learningMode === 'zh' ? '三大時態助詞 (đã / đang / sẽ)' : 'The 3 Main Tense Markers (đã / đang / sẽ)'}</h4>
            <p>{learningMode === 'zh' ? '越南語的動詞不隨時態變形，而是透過在動詞前面加上時態助詞來表示過去、現在、未來。' : 'Vietnamese verbs do not conjugate. Instead, time is indicated by placing a tense marker BEFORE the verb.'}</p>
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <li><strong style={{ color: 'var(--brand-primary)' }}>Đã</strong> + Verb: {learningMode === 'zh' ? '過去式 (已...)' : 'Past tense (did/has done)'}</li>
              <li><strong style={{ color: 'var(--brand-green)' }}>Đang</strong> + Verb: {learningMode === 'zh' ? '現在進行式 (正在...)' : 'Present continuous (is doing)'}</li>
              <li><strong style={{ color: 'var(--brand-gold)' }}>Sẽ</strong> + Verb: {learningMode === 'zh' ? '未來式 (將會...)' : 'Future tense (will do)'}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 1. Grammar Rules Grid */}
      <div className="grid-cards" style={{ marginBottom: '2.5rem' }}>
        {EXPANDED_GRAMMAR_RULES.map((rule, idx) => {
          const ruleKey = `grammar_rule_${idx}`;
          const isPlaying = activeKey === ruleKey;
          return (
            <div key={idx} className={`learning-card ${isPlaying ? 'playing-card' : ''}`}>
              <h3 style={{ fontSize: '1.2em', fontWeight: 800, color: 'var(--brand-accent)', marginBottom: '0.5rem' }}>
                {learningMode === 'zh' ? rule.titleZh : rule.titleEn}
              </h3>
              <p style={{ fontSize: '0.92em', color: 'var(--text-secondary)', marginBottom: '0.8rem', lineHeight: 1.55 }}>
                {learningMode === 'zh' ? rule.descriptionZh : rule.descriptionEn}
              </p>
              <div style={{ background: 'var(--bg-accent)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', fontSize: '0.92em', fontWeight: 700, color: 'var(--brand-primary)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                <span>
                  💡 {learningMode === 'zh' ? '實例：' : 'Example: '}
                  {learningMode === 'zh' ? rule.exampleZh : rule.exampleEn}
                </span>
                <button
                  className={`speaker-btn mini-btn ${isPlaying ? 'playing' : ''}`}
                  onClick={() => playSpeech(rule.exampleVi, ruleKey)}
                  title="聆聽範例發音"
                >
                  <Volume2 size={15} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Interactive Sentence Builder Puzzle */}
      <div className="simulator-box">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '1.2rem' }}>
          <h3 style={{ fontSize: '1.25em', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Puzzle color="var(--brand-gold)" />
            {learningMode === 'zh' ? '語法拼句挑戰 (Sentence Builder)' : 'Sentence Builder Challenge'}
          </h3>
          <span style={{ fontSize: '0.85em', fontWeight: 800, color: 'var(--brand-accent)' }}>
            {puzzleIndex + 1} / {interactivePuzzles.length}
          </span>
        </div>

        <div style={{ background: 'var(--bg-main)', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.85em', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '0.3rem' }}>
            🎯 {learningMode === 'zh' ? '目標翻譯句子：' : 'Target Meaning:'}
          </div>
          <div style={{ fontSize: '1.3em', fontWeight: 900, color: 'var(--text-primary)' }}>
            {learningMode === 'zh' ? currentPuzzle.targetZh : currentPuzzle.targetEn}
          </div>
        </div>

        {/* User Constructed Sentence Drop Zone */}
        <div 
          className={isCompleted ? (isCorrect ? 'glow-success' : 'shake-error') : ''}
          style={{ minHeight: '70px', padding: '1rem', background: 'var(--bg-card)', border: '2px dashed var(--border-color)', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', gap: '0.6rem', alignItems: 'center', marginBottom: '1.5rem' }}>
          {userWords.length === 0 ? (
            <span style={{ color: 'var(--text-muted)', fontSize: '0.9em' }}>
              {learningMode === 'zh' ? '👇 點擊下方單字積木，依正確越語語序排列句子...' : '👇 Click word blocks below to construct the sentence in correct order...'}
            </span>
          ) : (
            userWords.map((word, idx) => (
              <button
                key={idx}
                onClick={() => handleRemoveWord(word)}
                className="control-btn"
                style={{ background: 'var(--brand-accent)', color: '#fff', fontWeight: 800, fontSize: '1.05em', padding: '0.5rem 1rem' }}
                title="點擊移出此詞"
              >
                {word} ✕
              </button>
            ))
          )}
        </div>

        {/* Available Word Blocks */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginBottom: '1.5rem' }}>
          {currentPuzzle.words.map((word, idx) => {
            const isUsed = userWords.includes(word);
            return (
              <button
                key={idx}
                disabled={isUsed}
                onClick={() => handleAddWord(word)}
                className="control-btn"
                style={{
                  opacity: isUsed ? 0.35 : 1,
                  cursor: isUsed ? 'not-allowed' : 'pointer',
                  fontWeight: 700,
                  fontSize: '1.05em',
                  padding: '0.5rem 1rem'
                }}
              >
                {word}
              </button>
            );
          })}
        </div>

        {/* Evaluation Banner */}
        {isCompleted && (
          <div style={{ background: isCorrect ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)', border: `1.5px solid ${isCorrect ? 'var(--brand-green)' : 'var(--brand-primary)'}`, padding: '1rem 1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              {isCorrect ? <CheckCircle2 size={22} color="var(--brand-green)" /> : <XCircle size={22} color="var(--brand-primary)" />}
              <span style={{ fontWeight: 800, fontSize: '1em', color: isCorrect ? 'var(--brand-green)' : 'var(--brand-primary)' }}>
                {isCorrect 
                  ? (learningMode === 'zh' ? '🎉 拼句完全正確！(+20 XP)' : '🎉 Correct Sentence! (+20 XP)') 
                  : (learningMode === 'zh' ? '語序有誤，請重試或參考文法規則。' : 'Incorrect order, please retry.')}
              </span>
            </div>

            <div style={{ display: 'flex', gap: '0.6rem' }}>
              <button className="control-btn" onClick={handleResetPuzzle}>
                <RefreshCw size={15} />
                <span>{learningMode === 'zh' ? '重試' : 'Retry'}</span>
              </button>
              {isCorrect && (
                <button className="control-btn" style={{ background: 'var(--brand-accent)', color: '#fff' }} onClick={handleNextPuzzle}>
                  <span>{learningMode === 'zh' ? '下一題' : 'Next'}</span>
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
