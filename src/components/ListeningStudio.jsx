import React, { useEffect, useState, useSyncExternalStore } from 'react';
import { Headphones, Play, Pause, Download, ArrowRight, Check, RotateCcw, Eye, EyeOff, Volume2, Trophy, BookOpen, Home } from 'lucide-react';
import { LISTENING_LESSONS, LISTENING_KINDS } from '../data/listeningLessons';
import packs from '../data/listeningPackManifest.json';
import { audioEngine } from '../services/audioEngine';
import { getPlaybackPrefs, setPlaybackPrefs, subscribePlaybackPrefs, subscribeActiveSequencer, getActiveSequencerSnapshot } from '../services/dialoguePlayback';
import { playListeningLesson, readListeningBookmark } from '../services/listeningSession';
import { makeListeningRound, readListeningStudy, recordListeningCheck, saveListeningStudy } from '../services/listeningStudy';
import AudioDownloads from './AudioDownloads';
import './ListeningStudio.css';

const downloadUrl = file => `${import.meta.env.BASE_URL}audio/${file}`;
export default function ListeningStudio({ onNavigate }) {
  const [bookmark] = useState(readListeningBookmark);
  const [lessonId, setLessonId] = useState(() => LISTENING_LESSONS.find(l => l.id === bookmark?.lessonId)?.id || LISTENING_LESSONS[0].id);
  const lesson = LISTENING_LESSONS.find(l => l.id === lessonId) || LISTENING_LESSONS[0];
  const kind = LISTENING_KINDS.find(k => k.id === lesson.kind);
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState('listen');
  const [hidden, setHidden] = useState(false);
  const [downloadSpeed, setDownloadSpeed] = useState(1);
  const [records, setRecords] = useState(readListeningStudy);
  const [storageOk, setStorageOk] = useState(true);
  const [round, setRound] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState(null);
  const [results, setResults] = useState([]);
  const [speakingDone, setSpeakingDone] = useState(false);
  const snapshot = useSyncExternalStore(subscribeActiveSequencer, getActiveSequencerSnapshot, () => null);
  const prefs = useSyncExternalStore(subscribePlaybackPrefs, getPlaybackPrefs, getPlaybackPrefs);
  const active = snapshot?.ctx.lessonId === lesson.id;
  const isPlaying = active && snapshot.state.status === 'playing';
  const filtered = LISTENING_LESSONS.filter(l => l.kind === lesson.kind && `${l.title} ${l.rule} ${l.lines.map(x => x.viet + x.zh).join(' ')}`.toLowerCase().includes(query.toLowerCase().trim()));
  const due = LISTENING_LESSONS.filter(l => records[l.id] && records[l.id].due <= Date.now());
  const earned = LISTENING_LESSONS.filter(l => records[l.id]?.correct).length;
  const pack = packs[lesson.id]?.[downloadSpeed];
  const question = round?.[questionIndex];
  const finished = round && questionIndex >= round.length;

  useEffect(() => { setStorageOk(saveListeningStudy(records)); }, [records]);
  const selectLesson = id => {
    setLessonId(id); setTab('listen'); setHidden(false); setRound(null); setAnswer(null); setResults([]); setSpeakingDone(false);
  };
  const startRound = (questions = makeListeningRound(lesson)) => {
    audioEngine.stop(); setRound(questions); setQuestionIndex(0); setAnswer(null); setResults([]); setTab('challenge');
  };
  const submitAnswer = index => {
    if (answer !== null || !question) return;
    audioEngine.stop(); setAnswer(index);
    setResults(previous => [...previous, { question, correct: index === question.answer }]);
  };
  const nextQuestion = () => {
    audioEngine.stop();
    if (questionIndex + 1 === round.length) {
      // Remediation is useful, but only a complete five-item round earns a mastery stamp.
      const fullRound = round.length === lesson.lines.length + 1;
      const correct = fullRound && results.every(r => r.correct);
      if (fullRound || results.some(r => !r.correct)) setRecords(previous => recordListeningCheck(previous, lesson.id, correct));
    }
    setQuestionIndex(i => i + 1); setAnswer(null);
  };
  const play = (mode = 'vi-zh') => { setPlaybackPrefs({ autoNext: false }); playListeningLesson(lesson, { mode }); };

  return <section className="listen-studio" aria-labelledby="listen-title">
    <div className="listen-breadcrumb"><button onClick={() => onNavigate('path')}><Home size={16} /> 學習首頁</button><span>／ 隨身聽學習站</span><span className="listen-new">24 堂新微課</span></div>
    <header className="listen-hero">
      <div><span className="listen-eyebrow"><Headphones size={17} /> 把零碎時間，變成聽得懂的越南語</span><h1 id="listen-title">按下播放。<br /><em>讓越南語走進生活。</em></h1><p>單字、會話、漢越近似詞。每句先越文、再中文，聽懂後再挑戰自己。</p>
        <div className="listen-hero-actions"><button className="listen-primary" onClick={() => play()}><Play size={20} /> 立即聽這課・越＋中</button>{bookmark && LISTENING_LESSONS.some(l => l.id === bookmark.lessonId) && <button onClick={() => { const saved = LISTENING_LESSONS.find(l => l.id === bookmark.lessonId); selectLesson(saved.id); playListeningLesson(saved, { fromIndex: bookmark.index }); }}><RotateCcw size={17} /> 接著上次聽</button>}</div>
      </div>
      <div className="listen-journey" aria-label="學習流程：聽懂、回想、開口、隔日複習"><span className="listen-journey-title">每天一小課 · 聽完更記得</span><ol><li><span>01</span><strong>聽懂</strong><small>越文 → 中文</small></li><li><span>02</span><strong>回想</strong><small>遮字聽力挑戰</small></li><li><span>03</span><strong>開口</strong><small>換一個詞說看看</small></li><li><span>04</span><strong>複習</strong><small>1 → 3 → 7 天</small></li></ol></div>
    </header>
    <nav className="listen-kinds" aria-label="聆聽教材類型">{LISTENING_KINDS.map(k => <button key={k.id} aria-pressed={lesson.kind === k.id} onClick={() => { selectLesson(LISTENING_LESSONS.find(l => l.kind === k.id).id); setQuery(''); }}><span aria-hidden="true">{k.icon}</span><span><strong>{k.title}<small>越＋中</small></strong><small>{k.subtitle}</small></span><ArrowRight size={18} /></button>)}</nav>
    <div className="listen-progress"><span><Trophy size={18} /> 已取得 {earned} / 24 個全對印章</span><progress value={earned} max="24" aria-label="全對課程進度" /><button disabled={!due.length} onClick={() => { selectLesson(due[0].id); startRound(makeListeningRound(due[0])); }}>到期複習 {due.length} 課 <ArrowRight size={15} /></button></div>
    {!storageOk && <p role="status">瀏覽器無法儲存進度；本次仍可學習，但關閉後不會保留。</p>}
    <div className="listen-layout">
      <aside className="listen-library" aria-label="微課清單"><div className="listen-library-heading"><h2>{kind.title}小課</h2><span>8 課</span></div><label className="listen-search">搜尋這條路線<input type="search" value={query} onChange={e => setQuery(e.target.value)} placeholder="例如：需要、點餐、學費" /></label><div className="listen-lesson-list">{filtered.map(l => <button key={l.id} aria-current={lesson.id === l.id ? 'true' : undefined} onClick={() => selectLesson(l.id)}><span aria-hidden="true">{l.icon}</span><span><strong>{l.title}</strong><small>{Math.ceil((packs[l.id]?.[1]?.seconds || 60) / 60)} 分鐘音檔 · 4 組越中</small></span>{records[l.id]?.correct && <Check size={17} aria-label="曾全對" />}</button>)}{!filtered.length && <p>沒有符合的微課，試試另一個關鍵字。</p>}</div><button className="listen-more" onClick={() => onNavigate(kind.route)}>前往完整{kind.title}教材 <ArrowRight size={16} /></button></aside>
      <article className="listen-workbench">
        <header className="listen-lesson-heading"><span className="listen-lesson-icon" aria-hidden="true">{lesson.icon}</span><div><small>{kind.title} · 約 3 分鐘練習</small><h2>{lesson.title}</h2></div></header>
        <div className="listen-tabs" role="group" aria-label="本課步驟"><button aria-pressed={tab === 'listen'} onClick={() => setTab('listen')}><Headphones size={17} /> 1 聽與讀</button><button aria-pressed={tab === 'challenge'} onClick={() => round ? setTab('challenge') : startRound()}><Trophy size={17} /> 2 聽力挑戰</button><button aria-pressed={tab === 'speak'} onClick={() => setTab('speak')}><Volume2 size={17} /> 3 開口活用</button></div>
        {tab === 'listen' && <>
          <div className="listen-play-panel"><button className="listen-primary" onClick={() => active ? snapshot.sequencer.togglePause() : play()}>{isPlaying ? <Pause size={20} /> : <Play size={20} />}{isPlaying ? '暫停' : active ? '繼續聽' : '全部播放・越 → 中'}</button><label>越南語速度<select value={prefs.speed} onChange={e => setPlaybackPrefs({ speed: Number(e.target.value) })}>{[0.6, 0.75, 1, 1.2, 1.25].map(speed => <option value={speed} key={speed}>{speed}×{speed === 1 ? ' 原速' : ''}</option>)}</select></label><span>中文固定 1×<small>調速於下一段越文生效</small></span></div>
          <div className="listen-options"><button aria-pressed={hidden} onClick={() => setHidden(!hidden)}>{hidden ? <Eye size={16} /> : <EyeOff size={16} />}{hidden ? '顯示字幕' : '遮住字幕'}</button><button onClick={() => play('vi-only')}>進階：只聽越文</button><label><input type="checkbox" checked={prefs.shadowPause} onChange={e => setPlaybackPrefs({ shadowPause: e.target.checked })} /> 留時間跟讀</label><label><input type="checkbox" checked={prefs.loop} onChange={e => setPlaybackPrefs({ loop: e.target.checked })} /> 循環本課</label></div>
          <ol className="listen-lines">{lesson.lines.map((line, index) => <li key={line.viet} data-listening-lesson={lesson.id} data-line-index={index} className={active && snapshot.state.index === index ? 'is-current' : ''}><span className="listen-line-number">{String(index + 1).padStart(2, '0')}</span><div><small>{line.note}</small><strong lang="vi">{hidden ? '聽聲音，試著回想' : line.viet}</strong><p>{hidden ? '字幕已遮住' : line.zh}</p></div><button onClick={() => playListeningLesson(lesson, { fromIndex: index, single: true })} aria-label={`播放第 ${index + 1} 組越文與中文`}><Play size={19} /><span>越＋中</span></button><button className="listen-from" onClick={() => playListeningLesson(lesson, { fromIndex: index })} aria-label={`從第 ${index + 1} 組連播`}>從這裡聽 <ArrowRight size={14} /></button></li>)}</ol>
          <div className="listen-insight"><BookOpen size={21} /><div><h3>中文母語者的理解捷徑</h3><p>{lesson.rule}</p><p className="listen-trap">留意：{lesson.trap}</p></div></div>
          <div className="listen-download"><div><h3><Download size={19} /> 整課帶走，離線也能聽</h3><p>真正的雙語 MP3：越文後接中文，已加入停頓。中文維持原速。</p></div><label>下載檔案的越語速度<select value={downloadSpeed} onChange={e => setDownloadSpeed(Number(e.target.value))}><option value="0.75">0.75× 慢速</option><option value="1">1× 原速</option><option value="1.25">1.25× 挑戰</option></select></label>{pack && <a className="listen-primary" href={downloadUrl(pack.file)} download={`${lesson.id}-vi-zh-${downloadSpeed}x.mp3`}><Download size={17} /> 下載越中 MP3 · {(pack.bytes / 1024 / 1024).toFixed(1)} MB</a>}<a href={downloadUrl(`listening/${lesson.id}.txt`)} download>下載中越對照講義</a><small>合成語音。檔案下載與網站播放設定各自獨立；單一 MP3 無法在外部播放器分語言調速，請先選好版本。</small></div>
          <AudioDownloads lines={lesson.lines} />
          <button className="listen-next" onClick={() => startRound()}>聽懂了，開始 5 題挑戰 <ArrowRight size={18} /></button>
        </>}
        {tab === 'challenge' && !finished && question && <div className="listen-challenge"><div className="listen-challenge-meta"><span>第 {questionIndex + 1} / {round.length} 題</span><span>答錯可以重練，不扣生命值</span></div><progress value={questionIndex} max={round.length} aria-label="本回合答題進度" /><h3>{question.prompt}</h3>{question.audio && <button className="listen-question-audio" onClick={() => audioEngine.speak(question.audio, { lang: 'vi', rate: prefs.speed })}><Volume2 size={27} /> 聽題目（越文）</button>}<div className="listen-answers">{question.options.map((option, index) => <button key={option} disabled={answer !== null} className={answer !== null ? index === question.answer ? 'is-correct' : index === answer ? 'is-wrong' : '' : ''} onClick={() => submitAnswer(index)}><span>{index + 1}</span>{option}</button>)}</div>{answer !== null && <div className="listen-feedback" role="status"><strong>{answer === question.answer ? '答對了！' : '沒關係，找到差別就進步了。'}</strong><p>{question.why}</p><button className="listen-primary" onClick={nextQuestion}>{questionIndex + 1 === round.length ? '看本回合結果' : '下一題'} <ArrowRight size={17} /></button></div>}</div>}
        {tab === 'challenge' && finished && <div className="listen-result"><Trophy size={42} /><h3>這一輪，你答對 {results.filter(r => r.correct).length} / {round.length} 題</h3><p>{results.every(r => r.correct) ? (round.length === 5 ? '全對印章已點亮。明天再回想一次，讓記憶更穩。' : '錯題已練對！再做完整 5 題挑戰，就能取得印章。') : '錯題是下一步的線索。先看解說，再遮字重聽。'}</p><div>{results.filter(r => !r.correct).map(r => <p key={r.question.id}>{r.question.why}</p>)}</div>{results.some(r => !r.correct) && <button onClick={() => startRound(results.filter(r => !r.correct).map(r => r.question))}><RotateCcw size={16} /> 只重練錯題</button>}<button onClick={() => startRound()}>完整再挑戰</button><button className="listen-primary" onClick={() => setTab('speak')}>接著開口說 <ArrowRight size={17} /></button><small>進度存在這個瀏覽器。全對印章代表本課練習成果，不代表語言檢定能力。</small></div>}
        {tab === 'speak' && <div className="listen-speaking"><span className="listen-eyebrow">把「認得」變成「會用」</span><h3>換一個條件，說給自己聽</h3><p>{lesson.task}</p><div className="listen-insight"><Volume2 size={23} /><p>{lesson.trap}</p></div><ol><li>先聽示範，注意聲調與詞尾。</li><li>遮住原文，完成上面的替換任務。</li><li>對照教材，自查意思、詞序與聲調。</li></ol><button onClick={() => play()}><Play size={17} /> 再聽越中示範</button><label className="listen-speaking-check"><input type="checkbox" checked={speakingDone} onChange={e => setSpeakingDone(e.target.checked)} /> 我已不看稿說一次，並完成自我核對。</label>{speakingDone && <p role="status">開口完成！不用追求一次完美，明天再說一次。</p>}<small>此處是自我檢核，沒有錄音辨識或自動發音評分。</small><button className="listen-next" onClick={() => { const index = LISTENING_LESSONS.findIndex(l => l.id === lesson.id); selectLesson(LISTENING_LESSONS[(index + 1) % LISTENING_LESSONS.length].id); }}>下一堂微課 <ArrowRight size={17} /></button></div>}
      </article>
    </div>
  </section>;
}
