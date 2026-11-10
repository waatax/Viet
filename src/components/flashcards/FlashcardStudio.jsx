import React, { useEffect, useMemo, useState } from 'react';
import { Play, X, ListMusic, RotateCcw, Sparkles, Flame, Target, ChevronDown, BookOpen, GraduationCap } from 'lucide-react';
import { VOCABULARY, VOCAB_TIERS } from '../../data/vocabularyQuality';
import { audioEngine } from '../../services/audioEngine';
import { srsEngine } from '../../services/srsEngine';
import {
  schedule, buildSession, requeue, deckCounts, pickMode, forecast, STUDY_MODES
} from '../../services/flashcardScheduler';
import { StudyCard } from './StudyCard';
import { WordBrowser } from './WordBrowser';
import { ToneWord } from './VocabParts';
import './FlashcardStudio.css';

const PREFS_KEY = 'viet_fc_prefs_v2';
const loadPrefs = () => {
  try { return { tier: 'top1k', newPerSession: 10, mode: 'auto', allowTyping: true, ...JSON.parse(localStorage.getItem(PREFS_KEY) || '{}') }; }
  catch { return { tier: 'top1k', newPerSession: 10, mode: 'auto', allowTyping: true }; }
};

const TIER_META = {
  top1k: { short: 'Top 1,000', level: 'A1–A2 入門', tone: 'green' },
  top3k: { short: 'Top 3,000', level: 'B1 生活', tone: 'blue' },
  top5k: { short: 'Top 5,000', level: 'B2 職場', tone: 'violet' },
  top10k: { short: 'Top 10,000', level: 'C1 進階', tone: 'amber' },
  curated: { short: '情境必背', level: '旅遊與職場', tone: 'cyan' }
};

/**
 * Card-first vocabulary trainer: deck dashboard → study session → summary, plus a browsable list.
 */
export const FlashcardStudio = ({ accent = 'north', learningMode = 'zh', updateUserStats, curatedDeck = [], initialTier }) => {
  const knownTier = (t) => (TIER_META[t] ? t : null);
  const [prefs, setPrefs] = useState(() => {
    const saved = loadPrefs();
    return { ...saved, tier: knownTier(initialTier) || knownTier(saved.tier) || 'top1k' };
  });
  const [view, setView] = useState('home');
  const [srsData, setSrsData] = useState(() => srsEngine.loadSrsData());
  const [session, setSession] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const [showWhy, setShowWhy] = useState(false);

  useEffect(() => { try { localStorage.setItem(PREFS_KEY, JSON.stringify(prefs)); } catch { /* storage unavailable */ } }, [prefs]);
  useEffect(() => { if (knownTier(initialTier)) setPrefs((p) => ({ ...p, tier: initialTier })); }, [initialTier]);
  useEffect(() => audioEngine.subscribe((s) => setActiveKey(s.isPlaying ? s.activeKey : null)), []);
  useEffect(() => () => audioEngine.stop(), []);

  const tiers = useMemo(() => [
    ...VOCAB_TIERS.map((t) => ({ id: t.id, count: t.count, verified: t.verified })),
    { id: 'curated', count: curatedDeck.length, verified: curatedDeck.length }
  ], [curatedDeck.length]);

  const deck = useMemo(() => (prefs.tier === 'curated' ? curatedDeck : VOCABULARY.filter((w) => w.tier === prefs.tier)), [prefs.tier, curatedDeck]);
  const byId = useMemo(() => new Map(deck.map((c) => [String(c.id), c])), [deck]);
  const counts = useMemo(() => deckCounts(deck, srsData), [deck, srsData]);
  const weakIds = useMemo(() => deck.filter((c) => (srsData[c.id]?.lapses || 0) > 0 || srsData[c.id]?.interval === 0).map((c) => c.id), [deck, srsData]);
  const masteryPct = deck.length ? Math.round((counts.mastered / deck.length) * 100) : 0;
  const tierInfo = tiers.find((t) => t.id === prefs.tier);

  const start = (kind = 'today') => {
    const plan = kind === 'weak'
      ? buildSession({ deck, srsData, onlyIds: weakIds.slice(0, 20) })
      : kind === 'new'
        ? buildSession({ deck, srsData, newLimit: prefs.newPerSession, reviewLimit: 0 })
        : buildSession({ deck, srsData, newLimit: prefs.newPerSession });
    if (!plan.queue.length) return;
    audioEngine.playHaptic('selection');
    setSession({ queue: plan.queue.map(String), index: 0, results: [], misses: {}, startedAt: Date.now(), kind, startXp: 0 });
    setView('session');
    requestAnimationFrame(() => document.querySelector('.fs-root')?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
  };

  const currentId = session?.queue[session.index];
  const currentCard = currentId ? byId.get(currentId) : null;
  const currentMode = currentCard ? pickMode(currentCard, srsData[currentCard.id], prefs.mode, { allowTyping: prefs.allowTyping }) : 'flip';

  const handleAnswer = ({ q, correct, chosen, typed }) => {
    const card = currentCard;
    if (!card) return;
    const updated = schedule(srsData[card.id] || {}, q);
    const next = { ...srsEngine.loadSrsData(), [card.id]: updated };
    srsEngine.saveSrsData(next);
    setSrsData(next);
    if (updateUserStats) updateUserStats({ type: 'SRS_CARD_REVIEWED', payload: correct ? 10 : 3 });
    setSession((s) => {
      const firstTry = !s.results.some((r) => r.id === card.id);
      const misses = { ...s.misses };
      let queue = s.queue;
      if (q < 3 && (misses[card.id] || 0) < 3) {
        misses[card.id] = (misses[card.id] || 0) + 1;
        queue = requeue(s.queue, s.index, String(card.id), 3);
      }
      return { ...s, queue, misses, results: [...s.results, { id: card.id, q, correct, firstTry, mode: currentMode, chosen: chosen?.viet, typed }] };
    });
  };

  // Advance with a functional update: the rating callback may fire from a timer created before the
  // answer was recorded, so it must never overwrite the session with a stale copy.
  const handleNext = () => {
    audioEngine.stop();
    setSession((s) => (s ? { ...s, index: s.index + 1 } : s));
  };

  useEffect(() => {
    if (view !== 'session' || !session || session.index < session.queue.length) return;
    setSession((s) => ({ ...s, finishedAt: Date.now() }));
    setView('summary');
    if (updateUserStats) updateUserStats({ type: 'SRS_SESSION_COMPLETE', payload: 20 });
    audioEngine.playQuestCompleteSound?.();
  }, [session, view]);

  const exitSession = () => {
    audioEngine.stop();
    if (session?.results.length) setView('summary');
    else { setSession(null); setView('home'); }
  };

  const setPref = (key, value) => setPrefs((p) => ({ ...p, [key]: value }));

  // ── Session view ──────────────────────────────────────────────
  if (view === 'session' && session && currentCard) {
    const done = session.index;
    const total = session.queue.length;
    const firstTries = session.results.filter((r) => r.firstTry);
    const right = firstTries.filter((r) => r.correct).length;
    return (
      <div className="fs-root">
        <div className="fs-session-bar">
          <button type="button" className="fs-icon-btn" onClick={exitSession} aria-label="結束這回合"><X size={18} /></button>
          <div className="fs-progress" role="progressbar" aria-valuemin={0} aria-valuemax={total} aria-valuenow={done} aria-label="本回合進度">
            <span style={{ width: `${Math.round((done / total) * 100)}%` }} />
          </div>
          <span className="fs-session-count">{done + 1}<small>/{total}</small></span>
          <span className="fs-session-score" title="第一次就答對的比例">{firstTries.length ? `${right}/${firstTries.length} 答對` : '開始！'}</span>
        </div>
        <StudyCard
          key={`${currentCard.id}-${session.index}`}
          card={currentCard}
          srs={srsData[currentCard.id]}
          mode={currentMode}
          pool={deck}
          accent={accent}
          activeKey={activeKey}
          learningMode={learningMode}
          onAnswer={handleAnswer}
          onNext={handleNext}
          position={session.index}
        />
        <p className="fs-shortcuts">鍵盤：<kbd>Space</kbd> 翻面 · <kbd>1</kbd>–<kbd>4</kbd> 作答或評分 · <kbd>Enter</kbd> 繼續 · <kbd>R</kbd> 重播 · <kbd>S</kbd> 慢速</p>
      </div>
    );
  }

  if (view === 'session' && session && !currentCard) return <div className="fs-root" aria-busy="true" />;

  // ── Summary view ──────────────────────────────────────────────
  if (view === 'summary' && session) {
    const firstTries = session.results.filter((r) => r.firstTry);
    const right = firstTries.filter((r) => r.correct).length;
    const pct = firstTries.length ? Math.round((right / firstTries.length) * 100) : 0;
    const missedIds = [...new Set(session.results.filter((r) => !r.correct).map((r) => String(r.id)))];
    const learnedNew = firstTries.filter((r) => r.mode === 'flip' && !r.correct).length;
    const minutes = Math.max(1, Math.round(((session.finishedAt || Date.now()) - session.startedAt) / 60000));
    const tomorrow = forecast(srsData, deck.map((c) => c.id), Date.now(), 1);
    const message = pct >= 90 ? '記憶非常穩固，明天會更輕鬆。' : pct >= 70 ? '表現很好！錯的字已排進今天稍後與明天的複習。' : '答錯是記憶在升級：越費力想起來的字，記得越久。';
    return (
      <div className="fs-root">
        <section className="fs-summary" aria-labelledby="fs-summary-title">
          <p className="fs-eyebrow">本回合完成</p>
          <h3 id="fs-summary-title">{pct}% 第一次就答對</h3>
          <p className="fs-summary-msg">{message}</p>
          <dl className="fs-stats">
            <div><dt>練習卡數</dt><dd>{firstTries.length}</dd></div>
            <div><dt>重學次數</dt><dd>{session.results.length - firstTries.length}</dd></div>
            <div><dt>用時</dt><dd>{minutes} 分</dd></div>
            <div><dt>明天到期</dt><dd>{tomorrow}</dd></div>
          </dl>
          {missedIds.length > 0 && (
            <div className="fs-missed">
              <h4>需要再加強（{missedIds.length}）</h4>
              <ul>
                {missedIds.slice(0, 12).map((id) => {
                  const c = byId.get(id);
                  if (!c) return null;
                  return (
                    <li key={id}>
                      <button type="button" onClick={() => audioEngine.speak(c.viet, { accent, key: `fs_sum_${id}` })} aria-label={`播放 ${c.viet}`}>
                        <ToneWord text={c.viet} />
                      </button>
                      <span>{learningMode === 'zh' ? c.zh : (c.en || c.zh)}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
          {learnedNew > 0 && <p className="fs-summary-note">其中 {learnedNew} 個新字第一次沒想起來，這很正常——新字通常要 3–5 次間隔提取才會穩固。</p>}
          <div className="fs-summary-actions">
            {missedIds.length > 0 && (
              <button type="button" className="fs-primary" onClick={() => { setSession({ queue: missedIds, index: 0, results: [], misses: {}, startedAt: Date.now(), kind: 'retry' }); setView('session'); }}>
                <RotateCcw size={16} aria-hidden="true" /> 立刻再練錯的 {missedIds.length} 個
              </button>
            )}
            <button type="button" className={missedIds.length ? 'fs-ghost' : 'fs-primary'} onClick={() => start('today')}>
              <Play size={16} aria-hidden="true" /> 再來一回合
            </button>
            <button type="button" className="fs-ghost" onClick={() => { setSession(null); setView('home'); }}>回到牌組</button>
          </div>
        </section>
      </div>
    );
  }

  // ── Home & browse ─────────────────────────────────────────────
  const todayTotal = Math.min(counts.due, 60) + Math.min(counts.fresh, prefs.newPerSession);
  return (
    <div className="fs-root">
      <nav className="fs-tiers" aria-label="選擇詞彙階層">
        {tiers.map((t) => {
          const meta = TIER_META[t.id];
          return (
            <button
              key={t.id}
              type="button"
              className={`fs-tier tone-${meta.tone} ${prefs.tier === t.id ? 'is-on' : ''}`}
              aria-pressed={prefs.tier === t.id}
              onClick={() => { audioEngine.playHaptic('selection'); setPref('tier', t.id); }}
            >
              <span className="fs-tier-name">{meta.short}</span>
              <span className="fs-tier-level">{meta.level} · {t.count.toLocaleString()} 字</span>
            </button>
          );
        })}
      </nav>

      <div className="fs-tabs" role="tablist" aria-label="學習或瀏覽">
        <button type="button" role="tab" aria-selected={view !== 'browse'} className={view !== 'browse' ? 'is-on' : ''} onClick={() => setView('home')}>
          <GraduationCap size={16} aria-hidden="true" /> 今日學習
        </button>
        <button type="button" role="tab" aria-selected={view === 'browse'} className={view === 'browse' ? 'is-on' : ''} onClick={() => setView('browse')}>
          <ListMusic size={16} aria-hidden="true" /> 瀏覽與連播
        </button>
      </div>

      {view === 'browse' ? (
        <WordBrowser deck={deck} srsData={srsData} accent={accent} learningMode={learningMode} activeKey={activeKey} />
      ) : (
        <section className="fs-home" aria-label="今日學習">
          <div className="fs-today">
            <div className="fs-today-main">
              <p className="fs-eyebrow">{TIER_META[prefs.tier].short} · {TIER_META[prefs.tier].level}</p>
              <h3>{todayTotal > 0 ? `今天練 ${todayTotal} 張，約 ${Math.max(2, Math.round(todayTotal * 0.35))} 分鐘` : '這一階層今天全部完成！'}</h3>
              <ul className="fs-today-counts">
                <li className="due"><strong>{counts.due}</strong><span>待複習</span></li>
                <li className="fresh"><strong>{Math.min(counts.fresh, prefs.newPerSession)}</strong><span>新字</span></li>
                <li className="learning"><strong>{counts.learning}</strong><span>學習中</span></li>
                <li className="mastered"><strong>{counts.mastered}</strong><span>已穩固</span></li>
              </ul>
              <div className="fs-cta-row">
                <button type="button" className="fs-primary fs-start" onClick={() => start('today')} disabled={!todayTotal}>
                  <Play size={18} aria-hidden="true" /> 開始學習
                </button>
                {weakIds.length > 0 && (
                  <button type="button" className="fs-ghost" onClick={() => start('weak')}>
                    <Flame size={16} aria-hidden="true" /> 加強錯過的字（{Math.min(weakIds.length, 20)}）
                  </button>
                )}
                {counts.due > 0 && counts.fresh > 0 && (
                  <button type="button" className="fs-ghost" onClick={() => start('new')}>
                    <Sparkles size={16} aria-hidden="true" /> 只學新字
                  </button>
                )}
              </div>
            </div>
            <div className="fs-ring" style={{ '--pct': masteryPct }} role="img" aria-label={`已穩固 ${masteryPct}%`}>
              <span><strong>{masteryPct}%</strong><small>已穩固</small></span>
            </div>
          </div>

          <div className="fs-settings">
            <label className="fs-select">
              <span>練習方式</span>
              <select value={prefs.mode} onChange={(e) => setPref('mode', e.target.value)}>
                {STUDY_MODES.map((m) => <option key={m.id} value={m.id}>{m.labelZh}</option>)}
              </select>
              <ChevronDown size={14} aria-hidden="true" />
            </label>
            <div className="fs-seg small" role="group" aria-label="每回合新字數">
              <span className="fs-seg-label">新字／回合</span>
              {[5, 10, 20].map((n) => (
                <button key={n} type="button" className={prefs.newPerSession === n ? 'is-on' : ''} aria-pressed={prefs.newPerSession === n} onClick={() => setPref('newPerSession', n)}>{n}</button>
              ))}
            </div>
            <label className="fs-check">
              <input type="checkbox" checked={prefs.allowTyping} onChange={(e) => setPref('allowTyping', e.target.checked)} />
              <span>熟字加考聽寫拼字</span>
            </label>
          </div>
          <p className="fs-mode-desc"><Target size={14} aria-hidden="true" /> {STUDY_MODES.find((m) => m.id === prefs.mode)?.descZh}</p>
          {tierInfo && tierInfo.verified < tierInfo.count && (
            <p className="fs-unverified">此階層已清除套版假例句與英文佔位字；釋義來自開放辭典，尚未逐條人工校對。Top 1,000 已全部校對。</p>
          )}

          <details className="fs-why" open={showWhy} onToggle={(e) => setShowWhy(e.currentTarget.open)}>
            <summary><BookOpen size={16} aria-hidden="true" /> 為什麼這樣背比較記得住？</summary>
            <ul>
              <li><b>主動回想</b>：先自己想答案再看，比反覆看答案的長期記憶好得多（測驗效應）。</li>
              <li><b>間隔重複</b>：快忘記時再考一次，記住所需的總時間最少；按鈕上顯示的就是下次出現的時間。</li>
              <li><b>由易到難</b>：新字先翻卡認識，熟了改考聽音、看中選越與聽寫，難度跟著你的程度提高。</li>
              <li><b>錯了馬上解釋</b>：系統會分辨是聲調混淆、母音符號、拼字相近或詞義混淆，並在幾張後讓你再試一次。</li>
            </ul>
          </details>
        </section>
      )}
    </div>
  );
};
