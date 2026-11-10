import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Volume2, CheckCircle2, XCircle, Pause, ChevronLeft, ChevronRight,
  Headphones, AlertTriangle, BookOpen, Zap, HelpCircle, Layers3, Lightbulb, Award
} from 'lucide-react';
import { flashcardsDeck } from '../data/vietnameseData';
import { SITUATIONAL_TOPICS } from '../data/situationalTopicsData';
import { CONFUSABLE_PAIRS, CONFUSABLE_CATEGORIES } from '../data/confusableDeckData';
import { audioEngine } from '../services/audioEngine';
import { useLanguage } from '../context/LanguageContext';
import { srsEngine } from '../services/srsEngine';
import { RATINGS, previewIntervals, MASTERED_INTERVAL } from '../services/flashcardScheduler';
import { ModuleMilestoneCard } from './ModuleMilestoneCard';
import { VocabAudioBatchSection } from './VocabAudioBatchSection';
import { FlashcardStudio } from './flashcards/FlashcardStudio';
import './FlashcardModule.css';

const topicCategoryMap = {
  business_greeting: '商務職場',
  dining_restaurant: '餐飲美食',
  family_kinship: '家庭親屬',
  health_medical: '醫療健康',
  date_time_stay: '日期時間',
  pricing_bargaining: '購物殺價',
  numbers_scale: '數字量詞'
};

const topicCards = SITUATIONAL_TOPICS.flatMap((topic) =>
  (topic.flashcardDeck || []).map((fc) => ({
    ...fc,
    category: topicCategoryMap[topic.id] || '生活日常',
    exampleZh: fc.exampleZh || '',
    note: fc.hintZh || ''
  }))
);

const curatedDeck = [
  ...flashcardsDeck.map((c) => ({ ...c, exampleKind: c.example ? 'sentence' : 'none', verified: true })),
  ...topicCards.map((c) => ({ ...c, exampleKind: c.example ? 'sentence' : 'none', verified: true }))
];

const getToneColor = (tone) => ({
  ngang: 'var(--tone-ngang)',
  huyen: 'var(--tone-huyen)',
  sac: 'var(--tone-sac)',
  hoi: 'var(--tone-hoi)',
  nga: 'var(--tone-nga)',
  nang: 'var(--tone-nang)'
}[tone] || 'var(--brand-accent)');

const readTarget = () => {
  try {
    const saved = sessionStorage.getItem('viet_target_chapter');
    return saved ? JSON.parse(saved)?.targetParam || null : null;
  } catch {
    return null;
  }
};

const modeFromTarget = (target) => {
  if (target?.mode === 'confusables') return 'confusables';
  if (target?.mode === 'audioBatches') return 'audioBatches';
  return 'frequency';
};

export const FlashcardModule = ({ selectedAccent = 'north', updateUserStats, setActiveTab }) => {
  const { learningMode } = useLanguage();
  const initialTarget = useMemo(readTarget, []);

  const [accent, setAccent] = useState(selectedAccent || 'north');
  useEffect(() => { if (selectedAccent) setAccent(selectedAccent); }, [selectedAccent]);

  const [activeMasterMode, setActiveMasterMode] = useState(() => modeFromTarget(initialTarget));
  const [studioTier, setStudioTier] = useState(() => initialTarget?.tier || undefined);
  const [selectedConfusableCategory, setSelectedConfusableCategory] = useState(() => initialTarget?.confusableType || 'all');
  const [confusableIndex, setConfusableIndex] = useState(0);
  const [isAbPlaying, setIsAbPlaying] = useState(false);
  const [activeSpeakingWord, setActiveSpeakingWord] = useState(null);
  const [drillState, setDrillState] = useState({});
  const [srsData, setSrsData] = useState(() => srsEngine.loadSrsData());
  const [activeKey, setActiveKey] = useState(null);
  const isAbPlayingRef = useRef(false);
  const abTimerRef = useRef(null);

  useEffect(() => {
    if (initialTarget?.tier) sessionStorage.removeItem('viet_target_chapter');
  }, [initialTarget]);

  // Jump from the global chapter finder
  useEffect(() => {
    const handleJump = (e) => {
      const target = e.detail?.targetParam;
      if (!target) return;
      setActiveMasterMode(modeFromTarget(target));
      if (target.confusableType) setSelectedConfusableCategory(target.confusableType);
      if (target.tier) setStudioTier(target.tier);
      setConfusableIndex(0);
    };
    window.addEventListener('viet_jump_chapter', handleJump);
    return () => window.removeEventListener('viet_jump_chapter', handleJump);
  }, []);

  useEffect(() => {
    const unsubscribe = audioEngine.subscribe((state) => setActiveKey(state.isPlaying ? state.activeKey : null));
    return () => {
      unsubscribe();
      isAbPlayingRef.current = false;
      clearTimeout(abTimerRef.current);
    };
  }, []);

  useEffect(() => {
    if (activeMasterMode === 'confusables') setSrsData(srsEngine.loadSrsData());
  }, [activeMasterMode]);

  // ── Confusables ──────────────────────────────────────────────
  const filteredConfusables = useMemo(
    () => CONFUSABLE_PAIRS.filter((p) => selectedConfusableCategory === 'all' || p.type === selectedConfusableCategory),
    [selectedConfusableCategory]
  );
  const pair = filteredConfusables[confusableIndex] || filteredConfusables[0];
  const pairIntervals = useMemo(() => previewIntervals(pair ? srsData[pair.id] : undefined), [pair, srsData]);

  const stopAb = () => {
    setIsAbPlaying(false);
    isAbPlayingRef.current = false;
    clearTimeout(abTimerRef.current);
    setActiveSpeakingWord(null);
  };

  useEffect(() => {
    setConfusableIndex(0);
    stopAb();
  }, [selectedConfusableCategory]);

  const handlePlayAb = () => {
    if (isAbPlaying) {
      stopAb();
      audioEngine.stop();
      return;
    }
    if (!pair?.words?.length) return;
    setIsAbPlaying(true);
    isAbPlayingRef.current = true;
    const playSequence = (idx) => {
      if (!isAbPlayingRef.current || idx >= pair.words.length) { stopAb(); return; }
      const w = pair.words[idx];
      setActiveSpeakingWord(w.viet);
      audioEngine.speak(w.viet, {
        accent,
        lang: 'vi',
        rate: 0.82,
        key: `conf_${pair.id}_${idx}`,
        onEnd: () => {
          if (!isAbPlayingRef.current) return;
          abTimerRef.current = setTimeout(() => playSequence(idx + 1), 450);
        }
      });
    };
    playSequence(0);
  };

  const stepConfusable = (delta) => {
    stopAb();
    audioEngine.stop();
    setConfusableIndex((i) => Math.max(0, Math.min(filteredConfusables.length - 1, i + delta)));
  };

  const rateConfusable = (rating) => {
    if (!pair) return;
    const updated = srsEngine.reviewCard(pair.id, rating.q);
    setSrsData((prev) => ({ ...prev, [pair.id]: updated }));
    if (updateUserStats) updateUserStats({ type: 'SRS_CARD_REVIEWED', payload: rating.q >= 3 ? 10 : 3 });
    audioEngine.playHaptic(rating.q >= 3 ? 'success' : 'tap');
    stopAb();
    setConfusableIndex((i) => (i < filteredConfusables.length - 1 ? i + 1 : 0));
  };

  const answerDrill = (optionIndex) => {
    if (!pair?.drill || drillState[pair.id]?.answered) return;
    const isCorrect = optionIndex === pair.drill.correctIndex;
    setDrillState((prev) => ({ ...prev, [pair.id]: { selectedIndex: optionIndex, isCorrect, answered: true } }));
    if (isCorrect) {
      audioEngine.playHaptic('success');
      if (updateUserStats) updateUserStats(5);
    } else {
      audioEngine.playGentleError();
    }
  };

  const handlersRef = useRef({});
  handlersRef.current = { handlePlayAb, stepConfusable, rateConfusable, pair, activeMasterMode, accent };

  useEffect(() => {
    const onKey = (e) => {
      const { activeMasterMode: mode, handlePlayAb: ab, stepConfusable: step, rateConfusable: rate, pair: p, accent: acc } = handlersRef.current;
      if (mode !== 'confusables') return;
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if ((e.code === 'Space' || e.key === 'Enter') && tag === 'BUTTON') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.code === 'Space') { e.preventDefault(); ab(); }
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'r' || e.key === 'R') { if (p) audioEngine.speak(p.masterSentence, { accent: acc, key: `conf_sent_${p.id}` }); }
      else if (/^[1-4]$/.test(e.key)) rate(RATINGS[Number(e.key) - 1]);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const switchMode = (mode) => {
    audioEngine.playHaptic('selection');
    audioEngine.stop();
    stopAb();
    setActiveMasterMode(mode);
  };

  const masteredPairs = filteredConfusables.filter((p) => srsData[p.id]?.interval >= MASTERED_INTERVAL).length;
  const drill = pair ? drillState[pair.id] : null;

  const modes = [
    { id: 'frequency', icon: Layers3, label: learningMode === 'zh' ? '單字學習' : 'Vocabulary', sub: learningMode === 'zh' ? '10,000 字分級' : '10k graded' },
    { id: 'confusables', icon: Zap, label: learningMode === 'zh' ? '易混字對比' : 'Confusables', sub: `${CONFUSABLE_PAIRS.length} ${learningMode === 'zh' ? '組' : 'sets'}` },
    { id: 'audioBatches', icon: Headphones, label: learningMode === 'zh' ? '磨耳朵' : 'Ear training', sub: learningMode === 'zh' ? '每 50 字一檔' : '50 words/file' }
  ];

  return (
    <div className="module-container flashcard-module-wrapper">
      <header className="fc-hero">
        <div>
          <h2 className="fc-hero-title">{learningMode === 'zh' ? '單字閃卡' : 'Vocabulary Flashcards'}</h2>
          <p className="fc-hero-sub">
            {learningMode === 'zh'
              ? 'Top 3,000 高頻字已逐條人工校對 · 間隔重複安排複習 · 答錯立刻說明原因'
              : 'Top 3,000 hand-checked · spaced repetition · every mistake explained'}
          </p>
        </div>
        <div className="fc-accent-switch" role="group" aria-label={learningMode === 'zh' ? '發音口音' : 'Accent'}>
          {[['north', '北部'], ['south', '南部']].map(([id, label]) => (
            <button key={id} type="button" className={accent === id ? 'is-on' : ''} aria-pressed={accent === id} onClick={() => { setAccent(id); audioEngine.playHaptic('selection'); }}>
              {label}
            </button>
          ))}
        </div>
      </header>

      <nav className="fc-modes" aria-label={learningMode === 'zh' ? '閃卡模式' : 'Flashcard modes'}>
        {modes.map(({ id, icon: Icon, label, sub }) => (
          <button key={id} type="button" className={`fc-mode ${activeMasterMode === id ? 'is-on' : ''}`} aria-pressed={activeMasterMode === id} onClick={() => switchMode(id)}>
            <Icon size={18} aria-hidden="true" />
            <span className="fc-mode-label">{label}</span>
            <span className="fc-mode-sub">{sub}</span>
          </button>
        ))}
      </nav>

      {activeMasterMode === 'frequency' && (
        <FlashcardStudio
          accent={accent}
          learningMode={learningMode}
          updateUserStats={updateUserStats}
          curatedDeck={curatedDeck}
          initialTier={studioTier}
        />
      )}

      {activeMasterMode === 'audioBatches' && <VocabAudioBatchSection selectedAccent={accent} />}

      {activeMasterMode === 'confusables' && (
        <div className="fc-confusables">
          <div className="confusable-cat-bar" role="group" aria-label="易混類型">
            {CONFUSABLE_CATEGORIES.map((cat) => {
              const count = cat.id === 'all' ? CONFUSABLE_PAIRS.length : CONFUSABLE_PAIRS.filter((p) => p.type === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  className={`confusable-cat-chip ${selectedConfusableCategory === cat.id ? 'active' : ''}`}
                  aria-pressed={selectedConfusableCategory === cat.id}
                  onClick={() => { audioEngine.playHaptic('selection'); setSelectedConfusableCategory(cat.id); }}
                >
                  <span>{learningMode === 'zh' ? cat.labelZh : cat.labelEn}</span>
                  <span className="confusable-cat-count">{count}</span>
                </button>
              );
            })}
          </div>

          <div className="fc-pager">
            <button type="button" className="fc-pager-btn" onClick={() => stepConfusable(-1)} disabled={confusableIndex === 0} aria-label="上一組">
              <ChevronLeft size={18} />
            </button>
            <span className="fc-pager-count">{Math.min(confusableIndex + 1, filteredConfusables.length)} / {filteredConfusables.length}</span>
            <button type="button" className="fc-pager-btn" onClick={() => stepConfusable(1)} disabled={confusableIndex >= filteredConfusables.length - 1} aria-label="下一組">
              <ChevronRight size={18} />
            </button>
            <span className="fc-pager-mastered"><Award size={15} aria-hidden="true" /> 已穩固 {masteredPairs} 組</span>
          </div>

          {pair && (
            <article className="confusable-stage-card" key={pair.id}>
              <div className="confusable-stage-header">
                <div>
                  <span className="confusable-type-badge">
                    {learningMode === 'zh' ? pair.categoryLabelZh : pair.categoryLabelEn}
                  </span>
                  <h3 className="confusable-title">{pair.titleZh}</h3>
                  <p className="confusable-summary">{learningMode === 'zh' ? pair.summaryZh : pair.summaryEn}</p>
                </div>
                <button type="button" className={`ab-audio-btn ${isAbPlaying ? 'playing' : ''}`} onClick={handlePlayAb}>
                  {isAbPlaying ? <Pause size={16} aria-hidden="true" /> : <Headphones size={16} aria-hidden="true" />}
                  <span>{isAbPlaying ? '停止' : '依序聽 A／B'}</span>
                  <kbd>Space</kbd>
                </button>
              </div>

              <div className="confusable-words-grid">
                {pair.words.map((w, idx) => {
                  const isSpeaking = activeSpeakingWord === w.viet || activeKey === `conf_${pair.id}_${idx}`;
                  const toneColor = getToneColor(w.tone);
                  return (
                    <button
                      key={idx}
                      type="button"
                      className={`confusable-word-tile ${isSpeaking ? 'active-speaking' : ''}`}
                      onClick={() => { audioEngine.speak(w.viet, { accent, key: `conf_${pair.id}_${idx}` }); setActiveSpeakingWord(w.viet); }}
                      aria-label={`播放 ${w.viet}：${w.zh}`}
                    >
                      <span className="confusable-viet-word" lang="vi" style={{ color: toneColor }}>
                        {w.viet}
                        <Volume2 size={18} aria-hidden="true" />
                      </span>
                      {w.ipa && <span className="confusable-ipa-badge">{w.ipa}</span>}
                      <span className="confusable-tone-tag" style={{ color: toneColor }}>
                        {w.toneNameZh || w.tone}{w.pitch ? ` · ${w.pitch}` : ''}
                      </span>
                      <span className="confusable-zh-def">{learningMode === 'zh' ? w.zh : w.en}</span>
                      {w.hanViet && <span className="confusable-hanviet-tag">漢越 {w.hanViet}</span>}
                    </button>
                  );
                })}
              </div>

              <div className="mnemonic-hook-box">
                <p className="mnemonic-hook-title"><Lightbulb size={17} aria-hidden="true" /> 記憶口訣</p>
                <p className="mnemonic-hook-text">{pair.mnemonicHookZh}</p>
              </div>

              <div className="pitfall-insight-grid">
                <div className="pitfall-card">
                  <p className="insight-title danger"><AlertTriangle size={15} aria-hidden="true" /> 華語母語者常犯</p>
                  <p className="insight-text">{pair.pitfallAlertZh}</p>
                </div>
                <div className="hanviet-card">
                  <p className="insight-title ok"><BookOpen size={15} aria-hidden="true" /> 字源與發音規律</p>
                  <p className="insight-text">{pair.hanVietInsightZh}</p>
                </div>
              </div>

              <div className="master-sentence-box">
                <p className="master-sentence-label">一句話同時用到這組字</p>
                <p className="master-sentence-viet" lang="vi">{pair.masterSentence}</p>
                <p className="master-sentence-zh">{learningMode === 'zh' ? pair.masterSentenceZh : pair.masterSentenceEn}</p>
                <button
                  type="button"
                  className="master-sentence-play-btn"
                  onClick={() => audioEngine.speak(pair.masterSentence, { accent, key: `conf_sent_${pair.id}` })}
                  aria-label="朗讀整句（R）"
                >
                  <Volume2 size={18} aria-hidden="true" />
                </button>
              </div>

              {pair.drill && (
                <div className="confusable-drill-container">
                  <p className="drill-question-title"><HelpCircle size={18} aria-hidden="true" /> 小測驗：{pair.drill.questionZh}</p>
                  <div className="drill-options-grid">
                    {pair.drill.options.map((opt, optIdx) => {
                      let cls = 'drill-opt-btn';
                      if (drill?.answered) {
                        if (optIdx === pair.drill.correctIndex) cls += ' correct';
                        else if (drill.selectedIndex === optIdx) cls += ' wrong';
                      }
                      return (
                        <button key={optIdx} type="button" className={cls} disabled={drill?.answered} onClick={() => answerDrill(optIdx)}>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                  {drill?.answered && (
                    <div className={`drill-feedback-box ${drill.isCorrect ? 'correct' : 'wrong'}`} role="status">
                      {drill.isCorrect ? <CheckCircle2 size={16} aria-hidden="true" /> : <XCircle size={16} aria-hidden="true" />}
                      <div>
                        <strong>{drill.isCorrect ? '答對了！+5 XP' : `正確答案：${pair.drill.options[pair.drill.correctIndex]}`}</strong>
                        <p>{pair.drill.explanationZh}</p>
                        {!drill.isCorrect && <p className="drill-retry-hint">先按「依序聽 A／B」比較兩個音，再把上面的口訣念一次。</p>}
                      </div>
                    </div>
                  )}
                </div>
              )}

              <div className="fc-pair-rating" role="group" aria-label="這組字你分得清楚嗎？">
                <p>這組字你分得清楚嗎？</p>
                <div className="fs-rating">
                  {RATINGS.map((r) => (
                    <button key={r.id} type="button" className={`fs-rate ${r.tone}`} onClick={() => rateConfusable(r)}>
                      <span className="fs-rate-label">{learningMode === 'zh' ? r.labelZh : r.labelEn}</span>
                      <span className="fs-rate-interval">{pairIntervals[r.id]}</span>
                      <kbd>{r.key}</kbd>
                    </button>
                  ))}
                </div>
              </div>
              <p className="fc-shortcuts">鍵盤：<kbd>Space</kbd> 聽 A／B · <kbd>←</kbd><kbd>→</kbd> 換組 · <kbd>R</kbd> 朗讀例句 · <kbd>1</kbd>–<kbd>4</kbd> 評分</p>
            </article>
          )}
        </div>
      )}

      <ModuleMilestoneCard
        currentModuleId="flashcards"
        moduleTitleZh="10,000 高頻分級詞庫（間隔重複）"
        moduleTitleEn="10,000 High-Frequency SRS Flashcards"
        nextModuleId="grammar"
        nextModuleTitleZh="30 大核心實用語法法則"
        nextModuleTitleEn="30 Core Grammar Rules"
        bonusXp={40}
        setActiveTab={setActiveTab}
        updateUserStats={updateUserStats}
        summaryHighlights={[
          '先主動回想再看答案，評分按鈕顯示真實的下次複習時間',
          'Top 3,000 高頻字逐條校對：現代常用義、完整例句與易錯提醒',
          '易混字對比：聲調雙胞胎、母音符號與漢越同源字一次分清'
        ]}
        relatedModules={[
          { id: 'hanviet', icon: '📖', titleZh: '漢越同源字根', descZh: '利用漢字偏旁倍速聯想' },
          { id: 'sentence', icon: '🧩', titleZh: '拼句特訓挑戰', descZh: '將背誦的單字拼成活句子' },
          { id: 'quiz', icon: '🏆', titleZh: '綜合模擬測驗', descZh: '即時檢驗詞彙量掌握度' }
        ]}
      />
    </div>
  );
};
