import React, { useEffect, useMemo, useRef, useState } from 'react';
import { CheckCircle2, XCircle, Headphones, Lightbulb, ArrowRight, Eye } from 'lucide-react';
import { audioEngine } from '../../services/audioEngine';
import {
  RATINGS, TONES, previewIntervals, buildOptions, diagnoseConfusion, compareVietnamese, toneOf
} from '../../services/flashcardScheduler';
import { ToneWord, ToneRibbon, AudioButtons, CardDetails } from './VocabParts';

const MODE_PROMPT = {
  flip: '看越文，先在心裡說出中文意思，再翻面核對',
  choice: '這個字是什麼意思？',
  listen: '只聽聲音：你聽到的是哪個意思？',
  reverse: '哪一個越文是這個意思？注意聲調符號',
  type: '聽發音、看意思，打出越文（可不打聲調）'
};

const toneName = (id) => `${TONES[id].zh}${TONES[id].symbol}`;

/** Explains a wrong (or partly wrong) answer in learner terms — the "why", not just the key. */
export const Diagnosis = ({ answer, chosen, typed, accent, activeKey, learningMode }) => {
  const lines = [];
  if (typed !== undefined) {
    const cmp = compareVietnamese(typed, answer.viet);
    if (cmp.kind === 'tone' || cmp.kind === 'marks') {
      lines.push(cmp.typedNoMarks
        ? '字母全對，只是沒有標聲調與符號。越語的聲調會改變意思，請對照下方每個音節的聲調。'
        : '字母拼對了，但聲調或母音符號不同：');
      cmp.details.forEach((d, i) => {
        if (d.kind === 'tone') lines.push(<span key={`t${i}`}>第 {d.index + 1} 個音節：你寫 <b lang="vi">{d.given}</b>（{toneName(d.givenTone)}），正確是 <b lang="vi">{d.target}</b>（{toneName(d.targetTone)}）。</span>);
        if (d.kind === 'vowel') lines.push(<span key={`v${i}`}>母音符號：<b lang="vi">{d.given}</b> 與 <b lang="vi">{d.target}</b> 是不同的母音，不能互換。</span>);
      });
    } else if (cmp.kind === 'spelling') {
      lines.push(<span key="sp">拼法很接近，差一兩個字母。正確寫法是 <b lang="vi">{answer.viet}</b>，請逐字對照後再念一次。</span>);
    } else {
      lines.push(<span key="df">和正確答案 <b lang="vi">{answer.viet}</b> 差異較大，代表這個字還沒記牢——這很正常，它會在幾張卡後再出現一次。</span>);
    }
  } else if (chosen) {
    const d = diagnoseConfusion(answer, chosen);
    const meaning = (w) => (learningMode === 'zh' ? w.zh : (w.en || w.zh));
    if (d.kind === 'tone-twin') {
      lines.push(<span key="tt">這兩個字<b>字母完全相同、只差聲調</b>：<b lang="vi">{chosen.viet}</b>＝{meaning(chosen)}；<b lang="vi">{answer.viet}</b>＝{meaning(answer)}。</span>);
      d.details.filter((x) => x.kind === 'tone').forEach((x, i) => lines.push(<span key={`tx${i}`}>{toneName(x.givenTone)} ↔ {toneName(x.targetTone)}：先比較兩個音，再跟讀正確的那個。</span>));
    } else if (d.kind === 'mark-twin') {
      lines.push(<span key="mt"><b lang="vi">{chosen.viet}</b> 和 <b lang="vi">{answer.viet}</b> 只差母音符號或聲調（例如 u／ư、o／ơ），在越語裡是不同的字。</span>);
    } else if (d.kind === 'look-alike') {
      lines.push(<span key="la">字形很像：<b lang="vi">{chosen.viet}</b>（{meaning(chosen)}）與 <b lang="vi">{answer.viet}</b>（{meaning(answer)}）只差一兩個字母。</span>);
    } else if (d.kind === 'same-pos') {
      lines.push(<span key="sp">兩個都是{d.pos}，容易一起記混：<b lang="vi">{chosen.viet}</b>＝{meaning(chosen)}；<b lang="vi">{answer.viet}</b>＝{meaning(answer)}。用下方例句把正確的字放回情境裡。</span>);
    } else {
      lines.push(<span key="rt">你選的 <b lang="vi">{chosen.viet}</b> 是「{meaning(chosen)}」。這屬於一時想不起來，先看例句、聽兩次，它稍後會再出現。</span>);
    }
  }
  return (
    <div className="fs-diagnosis">
      <p className="fs-diagnosis-title"><Lightbulb size={16} aria-hidden="true" /> 為什麼會錯？</p>
      <ul>{lines.map((line, i) => <li key={i}>{line}</li>)}</ul>
      {chosen && (
        <div className="fs-compare">
          <span>比一比：</span>
          <button type="button" className="fs-compare-btn wrong" onClick={() => audioEngine.speak(chosen.viet, { accent, key: `fs_cmp_${chosen.id}` })} aria-label={`播放你選的 ${chosen.viet}`}>
            ▶ <span lang="vi">{chosen.viet}</span>
          </button>
          <button type="button" className="fs-compare-btn right" onClick={() => audioEngine.speak(answer.viet, { accent, key: `fs_cmp_${answer.id}` })} aria-label={`播放正確的 ${answer.viet}`}>
            ▶ <span lang="vi">{answer.viet}</span>
          </button>
        </div>
      )}
      {answer.hanViet && answer.verified && <p className="fs-hook">記憶鉤：漢越音「{answer.hanViet}」，可以從中文字聯想意思。</p>}
    </div>
  );
};

/**
 * One study card. Calls onAnswer({ q, correct, chosen?, typed? }) exactly once, then onNext().
 */
export const StudyCard = ({ card, srs, mode, pool, accent, activeKey, learningMode = 'zh', onAnswer, onNext, position }) => {
  const [revealed, setRevealed] = useState(false);
  const [chosen, setChosen] = useState(null);
  const [typed, setTyped] = useState('');
  const [typedResult, setTypedResult] = useState(null);
  const [rated, setRated] = useState(null);
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const answeredRef = useRef(false);

  const options = useMemo(() => {
    if (mode === 'choice' || mode === 'listen') return buildOptions(card, pool, { kind: 'meaning', salt: position });
    if (mode === 'reverse') return buildOptions(card, pool, { kind: 'form', salt: position });
    return [];
  }, [card, pool, mode, position]);

  const intervals = useMemo(() => previewIntervals(srs, Date.now(), { zh: learningMode === 'zh' }), [srs, learningMode]);
  const meaning = learningMode === 'zh' ? card.zh : (card.en || card.zh);
  const answered = rated !== null || chosen !== null || typedResult !== null;

  useEffect(() => {
    rootRef.current?.focus({ preventScroll: true });
    if (mode === 'listen' || mode === 'type') {
      const t = setTimeout(() => audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` }), 260);
      return () => clearTimeout(t);
    }
    return undefined;
  }, [card.id, mode, accent, card.viet]);

  useEffect(() => {
    if (mode === 'type' && window.matchMedia?.('(pointer: fine)').matches) inputRef.current?.focus({ preventScroll: true });
  }, [mode, card.id]);

  const once = (result) => {
    if (answeredRef.current) return;
    answeredRef.current = true;
    onAnswer(result);
  };

  const handleRate = (rating) => {
    if (!revealed || rated) return;
    setRated(rating.id);
    once({ q: rating.q, correct: rating.q >= 3, rating: rating.id });
    setTimeout(onNext, 160);
  };

  const handleChoose = (opt) => {
    if (chosen) return;
    setChosen(opt);
    const correct = opt.id === card.id;
    if (correct) audioEngine.playComboSound(2); else audioEngine.playGentleError();
    if (mode !== 'listen' || !correct) audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` });
    once({ q: correct ? 4 : 0, correct, chosen: opt });
  };

  const handleTypeSubmit = (e) => {
    e.preventDefault();
    if (typedResult || !typed.trim()) return;
    const cmp = compareVietnamese(typed, card.viet);
    setTypedResult(cmp);
    const q = cmp.kind === 'exact' ? 4 : (cmp.kind === 'tone' || cmp.kind === 'marks') ? 3 : 0;
    if (q >= 4) audioEngine.playComboSound(2); else audioEngine.playGentleError();
    audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` });
    once({ q, correct: q >= 3, typed, partial: q === 3 });
  };

  const reveal = () => {
    if (revealed) return;
    setRevealed(true);
    audioEngine.playHaptic('tap');
    audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` });
  };

  useEffect(() => {
    const onKey = (e) => {
      const tag = e.target?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if ((e.code === 'Space' || e.key === 'Enter') && tag === 'BUTTON') return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'r' || e.key === 'R') { audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` }); return; }
      if (e.key === 's' || e.key === 'S') { audioEngine.speak(card.viet, { accent, rate: 0.7, key: `fs_word_${card.id}_s` }); return; }
      const digit = Number(e.key);
      if (mode === 'flip') {
        if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); if (!revealed) reveal(); return; }
        if (revealed && digit >= 1 && digit <= 4) { e.preventDefault(); handleRate(RATINGS[digit - 1]); }
        return;
      }
      if (!answered && digit >= 1 && digit <= options.length) { e.preventDefault(); handleChoose(options[digit - 1]); return; }
      if (answered && (e.key === 'Enter' || e.code === 'Space')) { e.preventDefault(); onNext(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const showWord = mode !== 'listen' || answered;
  const isCorrectChoice = chosen && chosen.id === card.id;

  return (
    <article ref={rootRef} tabIndex={-1} className={`fs-card mode-${mode} ${answered ? 'is-answered' : ''}`} aria-labelledby={`fs-prompt-${card.id}`}>
      <header className="fs-card-head">
        <p id={`fs-prompt-${card.id}`} className="fs-card-prompt">{MODE_PROMPT[mode]}</p>
        <span className="fs-card-meta">
          {card.rank ? <span>#{card.rank}</span> : null}
          {card.cefr ? <span>{card.cefr}</span> : null}
        </span>
      </header>

      {/* ── Prompt face ── */}
      <div className="fs-face">
        {mode === 'listen' && !answered && (
          <button type="button" className="fs-listen-orb" onClick={() => audioEngine.speak(card.viet, { accent, key: `fs_word_${card.id}_n` })} aria-label="再聽一次">
            <Headphones size={36} aria-hidden="true" />
            <span>再聽一次（R）</span>
          </button>
        )}
        {(mode === 'reverse' || mode === 'type') && !answered && (
          <p className="fs-prompt-meaning">{meaning}</p>
        )}
        {showWord && !((mode === 'reverse' || mode === 'type') && !answered) && (
          <div className="fs-word-block">
            <ToneWord text={card.viet} className="fs-word" />
            <AudioButtons text={card.viet} accent={accent} keyPrefix={`fs_word_${card.id}`} activeKey={activeKey} size="lg" />
          </div>
        )}
        {showWord && (mode !== 'reverse' && mode !== 'type' || answered) && <ToneRibbon text={card.viet} />}
        {mode === 'type' && !answered && (
          <div className="fs-word-block">
            <AudioButtons text={card.viet} accent={accent} keyPrefix={`fs_word_${card.id}`} activeKey={activeKey} size="lg" labelZh="聽發音" />
          </div>
        )}
      </div>

      {/* ── Interaction ── */}
      {mode === 'flip' && !revealed && (
        <button type="button" className="fs-primary fs-reveal" onClick={reveal}>
          <Eye size={18} aria-hidden="true" /> 顯示答案 <kbd>Space</kbd>
        </button>
      )}

      {mode === 'flip' && revealed && (
        <>
          <CardDetails card={card} accent={accent} activeKey={activeKey} learningMode={learningMode} />
          <div className="fs-rating" role="group" aria-label="你記得多少？">
            {RATINGS.map((r) => (
              <button key={r.id} type="button" className={`fs-rate ${r.tone} ${rated === r.id ? 'is-picked' : ''}`} onClick={() => handleRate(r)} disabled={!!rated}>
                <span className="fs-rate-label">{learningMode === 'zh' ? r.labelZh : r.labelEn}</span>
                <span className="fs-rate-interval">{intervals[r.id]}</span>
                <kbd>{r.key}</kbd>
              </button>
            ))}
          </div>
        </>
      )}

      {options.length > 0 && (
        <div className={`fs-options ${mode === 'reverse' ? 'is-vietnamese' : ''}`} role="group" aria-label="選項">
          {options.map((opt, i) => {
            const isAnswer = opt.id === card.id;
            const state = !chosen ? '' : isAnswer ? 'is-right' : chosen.id === opt.id ? 'is-wrong' : 'is-dim';
            return (
              <button key={opt.id} type="button" className={`fs-option ${state}`} onClick={() => handleChoose(opt)} disabled={!!chosen}>
                <kbd>{i + 1}</kbd>
                <span className="fs-option-text" lang={mode === 'reverse' ? 'vi' : undefined}>
                  {mode === 'reverse' ? opt.viet : (learningMode === 'zh' ? opt.zh : (opt.en || opt.zh))}
                </span>
                {chosen && isAnswer && <CheckCircle2 size={18} aria-hidden="true" />}
                {chosen && !isAnswer && chosen.id === opt.id && <XCircle size={18} aria-hidden="true" />}
                {chosen && mode === 'reverse' && (
                  <span className="fs-option-sub">{learningMode === 'zh' ? opt.zh : (opt.en || opt.zh)}</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {mode === 'type' && (
        <form className="fs-type" onSubmit={handleTypeSubmit}>
          <label htmlFor={`fs-type-${card.id}`} className="sr-only">輸入越文</label>
          <input
            id={`fs-type-${card.id}`}
            ref={inputRef}
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            disabled={!!typedResult}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
            lang="vi"
            placeholder="例如：cam on 或 cảm ơn"
          />
          {!typedResult && <button type="submit" className="fs-primary" disabled={!typed.trim()}>檢查</button>}
        </form>
      )}

      {/* ── Feedback ── */}
      {answered && mode !== 'flip' && (
        <div className="fs-feedback" role="status" aria-live="polite">
          {(isCorrectChoice || typedResult?.kind === 'exact') && (
            <p className="fs-verdict ok"><CheckCircle2 size={18} aria-hidden="true" /> 答對了！下次會隔 {intervals.good} 再考你。</p>
          )}
          {typedResult && (typedResult.kind === 'tone' || typedResult.kind === 'marks') && (
            <p className="fs-verdict partial"><Lightbulb size={18} aria-hidden="true" /> 幾乎對了！字母正確，聲調再加強就完美了。</p>
          )}
          {((chosen && !isCorrectChoice) || (typedResult && typedResult.kind !== 'exact')) && (
            <>
              {chosen && !isCorrectChoice && <p className="fs-verdict bad"><XCircle size={18} aria-hidden="true" /> 正確答案是 <b lang="vi">{card.viet}</b>＝{meaning}</p>}
              {typedResult && typedResult.kind !== 'exact' && typedResult.kind !== 'tone' && typedResult.kind !== 'marks' && (
                <p className="fs-verdict bad"><XCircle size={18} aria-hidden="true" /> 正確寫法：<b lang="vi">{card.viet}</b></p>
              )}
              <Diagnosis
                answer={card}
                chosen={chosen && !isCorrectChoice ? chosen : null}
                typed={typedResult ? typed : undefined}
                accent={accent}
                activeKey={activeKey}
                learningMode={learningMode}
              />
              <p className="fs-requeue-note">這張卡會在幾張後再出現一次，趁記憶還新鮮時再提取，效果最好。</p>
            </>
          )}
          <CardDetails card={card} accent={accent} activeKey={activeKey} learningMode={learningMode} />
          <button type="button" className="fs-primary fs-next" onClick={onNext}>
            繼續 <ArrowRight size={18} aria-hidden="true" /> <kbd>Enter</kbd>
          </button>
        </div>
      )}
      {mode === 'flip' && !revealed && card.verified === false && (
        <p className="fs-unverified">此階層釋義來自開放辭典，尚未逐條人工校對，僅供參考。</p>
      )}
      <span className="sr-only">{`聲調：${[...card.viet.split(/\s+/)].map((s) => TONES[toneOf(s)].zh).join('、')}`}</span>
    </article>
  );
};
