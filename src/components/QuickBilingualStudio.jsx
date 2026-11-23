import React, { useState, useSyncExternalStore, useRef, useEffect } from 'react';
import {
  Headphones, Play, Pause, Download, Volume2, RotateCcw,
  Sparkles, CheckCircle2, AlertTriangle, ArrowRight, BookOpen,
  Trophy, MessageSquare, Flame, Check, Loader2, Gauge, Zap
} from 'lucide-react';
import {
  QUICK_VOCABULARY_CATEGORIES,
  QUICK_CONVERSATION_TOPICS,
  QUICK_COGNATES_DATA,
  QUICK_ASSESSMENT_QUESTIONS
} from '../data/quickBilingualData';
import { audioEngine } from '../services/audioEngine';
import {
  DialogueSequencer,
  getPlaybackPrefs,
  setPlaybackPrefs,
  subscribePlaybackPrefs,
  subscribeActiveSequencer,
  getActiveSequencerSnapshot,
  SPEED_OPTIONS
} from '../services/dialoguePlayback';
import { downloadBilingualAudioPair } from '../utils/audioStitcher';
import './QuickBilingualStudio.css';

let studioSequencer = null;

export default function QuickBilingualStudio({ selectedAccent = 'north', updateUserStats }) {
  const [activeTab, setActiveTab] = useState('vocab'); // 'vocab' | 'conversation' | 'cognates' | 'quiz'
  const [selectedVocabCat, setSelectedVocabCat] = useState('dining');
  const [selectedConvoTopic, setSelectedConvoTopic] = useState('talk_coffee');
  const [downloadingId, setDownloadingId] = useState(null);

  // Playback state subscription
  const prefs = useSyncExternalStore(subscribePlaybackPrefs, getPlaybackPrefs, getPlaybackPrefs);
  const snapshot = useSyncExternalStore(subscribeActiveSequencer, getActiveSequencerSnapshot, () => null);

  const activeSequencer = snapshot?.sequencer;
  const isPlaying = snapshot?.state?.status === 'playing';
  const activeIndex = snapshot?.state?.index ?? -1;
  const isCurrentStudio = snapshot?.ctx?.module === 'quick-studio';

  // Gamified Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizScore, setQuizScore] = useState(0);
  const [combo, setCombo] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  // Current selected data
  const currentVocabCategory = QUICK_VOCABULARY_CATEGORIES.find(c => c.id === selectedVocabCat) || QUICK_VOCABULARY_CATEGORIES[0];
  const currentConvo = QUICK_CONVERSATION_TOPICS.find(t => t.id === selectedConvoTopic) || QUICK_CONVERSATION_TOPICS[0];

  // Initialize or get sequencer
  const getSequencer = () => {
    if (!studioSequencer) {
      studioSequencer = new DialogueSequencer();
    }
    return studioSequencer;
  };

  // Play a single pair (Vietnamese + Chinese)
  const playSinglePair = (viet, zh, id) => {
    audioEngine.playHaptic?.('tap');
    const seq = getSequencer();
    seq.start({
      lines: [{ viet, zh, native: zh }],
      accent: selectedAccent,
      nativeLang: 'zh',
      title: '雙語速聽',
      module: 'quick-studio',
      mode: 'vi-zh',
      fromIndex: 0
    });
    if (updateUserStats) updateUserStats(2);
  };

  // Play a sequence of items (e.g. category words, full dialogue, or cognates)
  const playSequence = (lines, title, mode = 'vi-zh') => {
    audioEngine.playHaptic?.('selection');
    const seq = getSequencer();
    seq.start({
      lines: lines.map(item => ({
        viet: item.viet,
        zh: item.zh,
        native: item.zh,
        speaker: item.role || item.speaker || ''
      })),
      accent: selectedAccent,
      nativeLang: 'zh',
      title: title || '雙語隨身聽',
      module: 'quick-studio',
      mode,
      fromIndex: 0
    });
    if (updateUserStats) updateUserStats(5);
  };

  // Download bilingual merged audio file
  const handleDownloadBilingual = async (viet, zh, id) => {
    audioEngine.playHaptic?.('tap');
    setDownloadingId(id);
    try {
      await downloadBilingualAudioPair({
        vietText: viet,
        zhText: zh,
        accent: selectedAccent,
        filename: `[越中合音]-${viet.replace(/[^\w\d\u00C0-\u024F\u1EA0-\u1EF9]+/g, '-')}-${zh.replace(/[^\w\d\u4e00-\u9fa5]+/g, '-')}`
      });
    } catch (err) {
      console.error('Download error:', err);
    } finally {
      setDownloadingId(null);
    }
  };

  // Quiz answer submission
  const handleAnswerQuiz = (choiceIdx) => {
    if (selectedAnswer !== null) return;
    const currentQ = QUICK_ASSESSMENT_QUESTIONS[quizIndex];
    setSelectedAnswer(choiceIdx);

    const isCorrect = choiceIdx === currentQ.answer;
    if (isCorrect) {
      const nextCombo = combo + 1;
      setCombo(nextCombo);
      setQuizScore(s => s + 1);
      audioEngine.playSuccessChime?.();
      audioEngine.playComboSound?.(nextCombo);
      if (updateUserStats) updateUserStats(15);
    } else {
      setCombo(0);
      audioEngine.playGentleError?.();
    }
  };

  const handleNextQuiz = () => {
    audioEngine.playHaptic?.('tap');
    if (quizIndex + 1 < QUICK_ASSESSMENT_QUESTIONS.length) {
      setQuizIndex(i => i + 1);
      setSelectedAnswer(null);
    } else {
      setQuizCompleted(true);
      audioEngine.playLevelUpFanfare?.();
    }
  };

  const handleRestartQuiz = () => {
    audioEngine.playHaptic?.('tap');
    setQuizIndex(0);
    setSelectedAnswer(null);
    setQuizScore(0);
    setCombo(0);
    setQuizCompleted(false);
  };

  return (
    <section className="quick-studio-card" aria-labelledby="quick-studio-title">
      {/* Hero Header */}
      <div className="quick-studio-hero">
        <div className="quick-studio-badge">
          <Sparkles size={16} aria-hidden="true" />
          <span>專屬中文母語者 · 隨身聽快播與下載工坊</span>
        </div>
        <h2 id="quick-studio-title">
          快速雙語隨身聽 · <em>聽懂、下載、無痛開口</em>
        </h2>
        <p className="quick-studio-subtitle">
          單字、會話、漢越近似詞。每項<strong>先越文原音、再台灣華語翻譯</strong>。支援越南語獨立調速、離線 MP3 與雙語合音一鍵打包下載。
        </p>

        {/* Global Playback Control Bar */}
        <div className="quick-playback-controls-panel">
          <div className="control-group-left">
            <button
              type="button"
              className="quick-play-main-btn"
              onClick={() => {
                if (isCurrentStudio && isPlaying) {
                  activeSequencer?.pause();
                } else if (isCurrentStudio && activeSequencer) {
                  activeSequencer?.resume();
                } else {
                  // Default to playing the current active category/convo
                  if (activeTab === 'vocab') {
                    playSequence(currentVocabCategory.words, currentVocabCategory.name);
                  } else if (activeTab === 'conversation') {
                    playSequence(currentConvo.dialogue, currentConvo.title);
                  } else {
                    const allPairs = QUICK_COGNATES_DATA[0].items.flatMap(i => i.pairs);
                    playSequence(allPairs, '漢越近似詞庫');
                  }
                }
              }}
              aria-label={isPlaying && isCurrentStudio ? '暫停播放' : '全部播放 (越文後接中文)'}
            >
              {isPlaying && isCurrentStudio ? <Pause size={20} /> : <Play size={20} />}
              <span>{isPlaying && isCurrentStudio ? '暫停' : '全部播放 · 越 → 中'}</span>
            </button>

            {/* Vietnamese Speech Rate Selector */}
            <div className="speed-control-wrapper">
              <label htmlFor="viet-rate-select" className="speed-label">
                <Gauge size={16} aria-hidden="true" />
                <span>越南語速</span>
              </label>
              <select
                id="viet-rate-select"
                value={prefs.speed}
                onChange={e => setPlaybackPrefs({ speed: Number(e.target.value) })}
                className="speed-select-box"
              >
                {SPEED_OPTIONS.map(rate => (
                  <option key={rate} value={rate}>
                    {rate}× {rate === 1.0 ? '(原速)' : rate < 1.0 ? '(放慢)' : '(挑戰)'}
                  </option>
                ))}
              </select>
              <span className="speed-tag-fixed">
                中文固定 1.0×
                <small>（中文不必調整）</small>
              </span>
            </div>
          </div>

          <div className="control-group-right">
            <label className="toggle-chip">
              <input
                type="checkbox"
                checked={prefs.shadowPause}
                onChange={e => setPlaybackPrefs({ shadowPause: e.target.checked })}
              />
              <span>留時間跟讀</span>
            </label>
            <label className="toggle-chip">
              <input
                type="checkbox"
                checked={prefs.loop}
                onChange={e => setPlaybackPrefs({ loop: e.target.checked })}
              />
              <span>循環連播</span>
            </label>
          </div>
        </div>
      </div>

      {/* Main 4 Navigation Tabs */}
      <nav className="quick-studio-nav" aria-label="學習類別切換">
        <button
          type="button"
          className={`quick-nav-btn ${activeTab === 'vocab' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic?.('tap'); setActiveTab('vocab'); }}
          aria-pressed={activeTab === 'vocab'}
        >
          <span className="quick-nav-icon">🌿</span>
          <div className="quick-nav-info">
            <strong>生活核心單字</strong>
            <small>點餐・交通・金錢・時間 (越+中)</small>
          </div>
        </button>

        <button
          type="button"
          className={`quick-nav-btn ${activeTab === 'conversation' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic?.('tap'); setActiveTab('conversation'); }}
          aria-pressed={activeTab === 'conversation'}
        >
          <span className="quick-nav-icon">💬</span>
          <div className="quick-nav-info">
            <strong>生活情境會話</strong>
            <small>咖啡廳・叫車・殺價・飯店 (越+中)</small>
          </div>
        </button>

        <button
          type="button"
          className={`quick-nav-btn ${activeTab === 'cognates' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic?.('tap'); setActiveTab('cognates'); }}
          aria-pressed={activeTab === 'cognates'}
        >
          <span className="quick-nav-icon">🧩</span>
          <div className="quick-nav-info">
            <strong>中越近似單字</strong>
            <small>70% 漢越同源詞・假朋友陷阱</small>
          </div>
        </button>

        <button
          type="button"
          className={`quick-nav-btn ${activeTab === 'quiz' ? 'active' : ''}`}
          onClick={() => { audioEngine.playHaptic?.('tap'); setActiveTab('quiz'); }}
          aria-pressed={activeTab === 'quiz'}
        >
          <span className="quick-nav-icon">🏆</span>
          <div className="quick-nav-info">
            <strong>遊戲化評量</strong>
            <small>聽音辨義・音律挑戰・連擊獎勵</small>
          </div>
        </button>
      </nav>

      {/* TAB 1: 單字 (越+中) */}
      {activeTab === 'vocab' && (
        <div className="quick-tab-content">
          {/* Sub-category selector */}
          <div className="vocab-subnav">
            {QUICK_VOCABULARY_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                type="button"
                className={`vocab-sub-chip ${selectedVocabCat === cat.id ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic?.('tap'); setSelectedVocabCat(cat.id); }}
              >
                <span>{cat.icon}</span>
                <span>{cat.name}</span>
                <span className="chip-count">({cat.words.length})</span>
              </button>
            ))}
          </div>

          <div className="section-toolbar">
            <div className="toolbar-info">
              <h3>{currentVocabCategory.icon} {currentVocabCategory.name}核心詞庫</h3>
              <p>{currentVocabCategory.desc}</p>
            </div>
            <button
              type="button"
              className="toolbar-play-all-btn"
              onClick={() => playSequence(currentVocabCategory.words, currentVocabCategory.name)}
            >
              <Play size={16} /> 全部連播・本類別
            </button>
          </div>

          {/* Cards Grid */}
          <div className="vocab-cards-grid">
            {currentVocabCategory.words.map((item, idx) => {
              const isCurrentPlaying = isCurrentStudio && activeIndex === idx;
              const isStitching = downloadingId === item.id;
              const viFile = audioEngine.resolveManifestFile(item.viet, selectedAccent);
              const zhFile = audioEngine.resolveNativeFile(item.zh, 'zh');

              return (
                <div
                  key={item.id}
                  className={`vocab-card ${isCurrentPlaying ? 'is-playing' : ''}`}
                  data-vocab-index={idx}
                >
                  <div className="vocab-card-header">
                    <span className="vocab-tone-pill">{item.tone}</span>
                    <span className="vocab-han-pill">{item.hanViet}</span>
                  </div>

                  <div className="vocab-card-body">
                    <strong className="vocab-viet" lang="vi">{item.viet}</strong>
                    <span className="vocab-ipa">{item.ipa}</span>
                    <p className="vocab-zh">{item.zh}</p>
                    <div className="vocab-tip-box">
                      <BookOpen size={14} aria-hidden="true" />
                      <span>{item.memoryTip}</span>
                    </div>
                  </div>

                  {/* Audio action footer */}
                  <div className="vocab-card-footer">
                    <button
                      type="button"
                      className="btn-play-single"
                      onClick={() => playSinglePair(item.viet, item.zh, item.id)}
                      title="聆聽：先越語原音，再中文翻譯"
                    >
                      <Volume2 size={16} />
                      <span>越＋中</span>
                    </button>

                    <div className="download-group">
                      {viFile && (
                        <a
                          href={audioEngine.buildAudioUrl(viFile)}
                          download={`vietnamese-${item.viet}.mp3`}
                          className="btn-dl-link"
                          title="下載越語 MP3"
                        >
                          <Download size={14} /> 越 MP3
                        </a>
                      )}
                      {zhFile && (
                        <a
                          href={audioEngine.buildAudioUrl(zhFile)}
                          download={`chinese-${item.zh}.mp3`}
                          className="btn-dl-link"
                          title="下載中文 MP3"
                        >
                          <Download size={14} /> 中 MP3
                        </a>
                      )}
                      <button
                        type="button"
                        className="btn-dl-bilingual"
                        disabled={isStitching}
                        onClick={() => handleDownloadBilingual(item.viet, item.zh, item.id)}
                        title="下載合成越中雙語合音 (WAV)"
                      >
                        {isStitching ? (
                          <Loader2 size={14} className="spin" />
                        ) : (
                          <Sparkles size={14} />
                        )}
                        <span>合音 ↓</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB 2: 會話 (越+中) */}
      {activeTab === 'conversation' && (
        <div className="quick-tab-content">
          <div className="convo-topic-selector">
            {QUICK_CONVERSATION_TOPICS.map(topic => (
              <button
                key={topic.id}
                type="button"
                className={`convo-topic-card ${selectedConvoTopic === topic.id ? 'active' : ''}`}
                onClick={() => { audioEngine.playHaptic?.('tap'); setSelectedConvoTopic(topic.id); }}
              >
                <span className="convo-topic-icon">{topic.icon}</span>
                <div className="convo-topic-meta">
                  <strong>{topic.title}</strong>
                  <small>{topic.location}</small>
                </div>
              </button>
            ))}
          </div>

          <div className="convo-studio-workbench">
            <header className="convo-workbench-header">
              <div>
                <span className="convo-eyebrow">情境演練目標：{currentConvo.goal}</span>
                <h3>{currentConvo.icon} {currentConvo.title}</h3>
              </div>
              <button
                type="button"
                className="toolbar-play-all-btn"
                onClick={() => playSequence(currentConvo.dialogue, currentConvo.title)}
              >
                <Play size={16} /> 播放整段情境對話（越＋中）
              </button>
            </header>

            {/* Line by line dialogue player */}
            <div className="dialogue-lines-list">
              {currentConvo.dialogue.map((line, idx) => {
                const isCurrentPlaying = isCurrentStudio && activeIndex === idx;
                const isStitching = downloadingId === `convo-${idx}`;
                const viFile = audioEngine.resolveManifestFile(line.viet, selectedAccent);
                const zhFile = audioEngine.resolveNativeFile(line.zh, 'zh');

                return (
                  <div
                    key={idx}
                    className={`dialogue-turn-row ${line.speaker === 'A' ? 'speaker-a' : 'speaker-b'} ${isCurrentPlaying ? 'is-speaking-turn' : ''}`}
                    data-line-index={idx}
                  >
                    <div className="speaker-avatar">
                      <span>{line.speaker === 'A' ? '👤' : '🧑‍💼'}</span>
                      <small>{line.role}</small>
                    </div>

                    <div className="turn-content">
                      <div className="turn-texts">
                        <strong className="turn-viet" lang="vi">{line.viet}</strong>
                        <p className="turn-zh">{line.zh}</p>
                      </div>
                      {line.tip && (
                        <div className="turn-etiquette-tip">
                          <Sparkles size={13} color="var(--brand-gold)" />
                          <span>文化禮儀點撥：{line.tip}</span>
                        </div>
                      )}
                    </div>

                    <div className="turn-actions">
                      <button
                        type="button"
                        className="btn-play-single"
                        onClick={() => playSinglePair(line.viet, line.zh, `convo-${idx}`)}
                        title="單句播放：越文原音 + 中文翻譯"
                      >
                        <Volume2 size={16} />
                        <span>越＋中</span>
                      </button>

                      <button
                        type="button"
                        className="btn-dl-bilingual"
                        disabled={isStitching}
                        onClick={() => handleDownloadBilingual(line.viet, line.zh, `convo-${idx}`)}
                        title="下載此句越中文雙語合音 (WAV)"
                      >
                        {isStitching ? <Loader2 size={13} className="spin" /> : <Download size={13} />}
                        <span>下載合音</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: 中越近似單字 (越+中) */}
      {activeTab === 'cognates' && (
        <div className="quick-tab-content">
          <div className="cognates-section-card">
            <div className="cognates-intro">
              <span className="cognates-hero-tag">💡 中文母語者的越語超級外掛</span>
              <h3>唐宋中古漢語借詞 · 解鎖 70% 越南語高階詞彙</h3>
              <p>
                越南語與現代華語、台語、客家話系出同源，共享龐大的漢越語音對應體系。
                只要掌握<strong>「字根串聯」</strong>與<strong>「聲調對應規律」</strong>，數千個單字直接無痛秒記！
              </p>
            </div>

            {/* Tone correspondence table */}
            <div className="tone-rules-banner">
              <h4>🎵 中古漢語四聲八調與越語六聲調對應速查表</h4>
              <div className="tone-rules-grid">
                <div className="rule-cell">
                  <span className="rule-tag">陰平 (清平)</span>
                  <strong>Thanh Ngang (平聲)</strong>
                  <small>心 Tâm · 江 Giang · 天 Thiên</small>
                </div>
                <div className="rule-cell">
                  <span className="rule-tag">陽平 (濁平)</span>
                  <strong>Thanh Huyền (玄聲 `)</strong>
                  <small>平 Bình · 南 Nam · 同 Đồng</small>
                </div>
                <div className="rule-cell">
                  <span className="rule-tag">陰上 (清上)</span>
                  <strong>Thanh Hỏi (問聲 ̉)</strong>
                  <small>草 Thảo · 考 Khảo · 海 Hải</small>
                </div>
                <div className="rule-cell">
                  <span className="rule-tag">陽上 (濁上)</span>
                  <strong>Thanh Ngã (跌聲 ̃)</strong>
                  <small>社 Xã · 語 Ngữ · 義 Nghĩa</small>
                </div>
                <div className="rule-cell">
                  <span className="rule-tag">陰去 / 陰入</span>
                  <strong>Thanh Sắc (銳聲 ˊ)</strong>
                  <small>進 Tiến · 氣 Khí · 國 Quốc</small>
                </div>
                <div className="rule-cell">
                  <span className="rule-tag">陽去 / 陽入</span>
                  <strong>Thanh Nặng (重聲 ̣)</strong>
                  <small>大 Đại · 道 Đạo · 學 Học</small>
                </div>
              </div>
            </div>

            {/* Roots Showcase */}
            <div className="roots-showcase-container">
              <h4>🏛️ 核心漢越字根家族（點擊即聽 越＋中 發音與下載）</h4>
              <div className="roots-grid">
                {QUICK_COGNATES_DATA[0].items.map((rootItem, rIdx) => (
                  <div key={rIdx} className="root-family-card">
                    <div className="root-family-header">
                      <span className="root-char">{rootItem.han}</span>
                      <div>
                        <strong className="root-viet" lang="vi">{rootItem.vietRoot}</strong>
                        <small className="root-mean">{rootItem.meaningZh}</small>
                      </div>
                    </div>
                    <p className="root-sound-rule">{rootItem.soundRuleZh}</p>

                    <div className="compound-pairs-list">
                      {rootItem.pairs.map((p, pIdx) => {
                        const isStitching = downloadingId === `cog-${rIdx}-${pIdx}`;
                        return (
                          <div key={pIdx} className="compound-pair-item">
                            <div className="compound-texts">
                              <strong lang="vi">{p.viet}</strong>
                              <span className="compound-zh">{p.zh}</span>
                              <small className="compound-note">{p.note}</small>
                            </div>
                            <div className="compound-actions">
                              <button
                                type="button"
                                className="btn-play-mini"
                                onClick={() => playSinglePair(p.viet, p.zh, `cog-${rIdx}-${pIdx}`)}
                                title="播放越中雙語"
                              >
                                <Volume2 size={14} /> 聽
                              </button>
                              <button
                                type="button"
                                className="btn-dl-mini"
                                disabled={isStitching}
                                onClick={() => handleDownloadBilingual(p.viet, p.zh, `cog-${rIdx}-${pIdx}`)}
                                title="下載越中合音"
                              >
                                {isStitching ? <Loader2 size={13} className="spin" /> : <Download size={13} />}
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* False Friends Pitfalls */}
            <div className="false-friends-container">
              <h4>⚠️ 漢越假朋友警示對照（千萬別照字面猜！）</h4>
              <div className="false-friends-grid">
                {QUICK_COGNATES_DATA[1].items.map((ff, idx) => (
                  <div key={idx} className="false-friend-card">
                    <div className="ff-header">
                      <strong className="ff-viet" lang="vi">{ff.viet}</strong>
                      <span className="ff-literal">字面：{ff.hanLiteral}</span>
                    </div>
                    <div className="ff-real">
                      <span className="real-label">真正現代意思：</span>
                      <strong>{ff.realMeaningZh}</strong>
                    </div>
                    <p className="ff-warning">{ff.trapWarningZh}</p>
                    <div className="ff-actions">
                      <button
                        type="button"
                        className="btn-play-mini"
                        onClick={() => playSinglePair(ff.viet, ff.realMeaningZh, `ff-${idx}`)}
                      >
                        <Volume2 size={14} /> 聽發音 (越＋中)
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: 遊戲化評量 (Gamified Assessment) */}
      {activeTab === 'quiz' && (
        <div className="quick-tab-content">
          <div className="quiz-container-card">
            {!quizCompleted ? (
              <>
                <div className="quiz-header-status">
                  <div className="quiz-meta-info">
                    <span className="quiz-badge">第 {quizIndex + 1} / {QUICK_ASSESSMENT_QUESTIONS.length} 題</span>
                    <span className="quiz-cat-pill">{QUICK_ASSESSMENT_QUESTIONS[quizIndex].category}</span>
                  </div>

                  <div className="quiz-combo-bar">
                    {combo > 1 && (
                      <div className="combo-indicator">
                        <Flame size={17} color="#f59e0b" />
                        <span>{combo} 連擊 COMBO!</span>
                      </div>
                    )}
                    <div className="score-pill">
                      <Trophy size={16} color="var(--brand-gold)" />
                      <span>得分: {quizScore * 20} 分</span>
                    </div>
                  </div>
                </div>

                <div className="quiz-question-box">
                  <div className="quiz-prompt-header">
                    <span className="prompt-label">越語音訊 / 關鍵詞：</span>
                    <strong className="prompt-viet" lang="vi">
                      {QUICK_ASSESSMENT_QUESTIONS[quizIndex].promptVi}
                    </strong>
                    <button
                      type="button"
                      className="btn-quiz-audio"
                      onClick={() => audioEngine.speak(QUICK_ASSESSMENT_QUESTIONS[quizIndex].promptVi, { lang: 'vi', rate: prefs.speed })}
                    >
                      <Volume2 size={18} /> 播放發音
                    </button>
                  </div>
                  <h3 className="quiz-question-title">{QUICK_ASSESSMENT_QUESTIONS[quizIndex].questionZh}</h3>
                </div>

                {/* Options List */}
                <div className="quiz-options-list">
                  {QUICK_ASSESSMENT_QUESTIONS[quizIndex].optionsZh.map((opt, oIdx) => {
                    const isSelected = selectedAnswer === oIdx;
                    const isCorrect = oIdx === QUICK_ASSESSMENT_QUESTIONS[quizIndex].answer;
                    let stateClass = '';
                    if (selectedAnswer !== null) {
                      if (isCorrect) stateClass = 'correct';
                      else if (isSelected) stateClass = 'wrong';
                    }

                    return (
                      <button
                        key={oIdx}
                        type="button"
                        disabled={selectedAnswer !== null}
                        className={`quiz-option-btn ${stateClass}`}
                        onClick={() => handleAnswerQuiz(oIdx)}
                      >
                        <span className="opt-marker">{String.fromCharCode(65 + oIdx)}</span>
                        <span className="opt-text">{opt}</span>
                        {selectedAnswer !== null && isCorrect && <Check size={18} color="#10b981" />}
                      </button>
                    );
                  })}
                </div>

                {/* Instant Feedback and Rationale */}
                {selectedAnswer !== null && (
                  <div className={`quiz-feedback-box ${selectedAnswer === QUICK_ASSESSMENT_QUESTIONS[quizIndex].answer ? 'is-correct' : 'is-wrong'}`} role="status">
                    <div className="feedback-title">
                      {selectedAnswer === QUICK_ASSESSMENT_QUESTIONS[quizIndex].answer ? (
                        <>
                          <CheckCircle2 size={20} color="#10b981" />
                          <strong>答對了！+15 XP 獎勵入帳！</strong>
                        </>
                      ) : (
                        <>
                          <AlertTriangle size={20} color="#ef4444" />
                          <strong>找到盲點了，記憶更深刻！</strong>
                        </>
                      )}
                    </div>
                    <p className="feedback-why">{QUICK_ASSESSMENT_QUESTIONS[quizIndex].why}</p>
                    <button
                      type="button"
                      className="quiz-next-btn"
                      onClick={handleNextQuiz}
                    >
                      <span>{quizIndex + 1 === QUICK_ASSESSMENT_QUESTIONS.length ? '查看評量結算' : '下一題'}</span>
                      <ArrowRight size={17} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              /* Quiz Completion Celebration */
              <div className="quiz-result-view">
                <div className="celebration-icon">🏆✨</div>
                <h2>評量挑戰圓滿完成！</h2>
                <p className="result-score-highlight">
                  您在本次測驗中答對了 <strong>{quizScore} / {QUICK_ASSESSMENT_QUESTIONS.length}</strong> 題！
                </p>
                <div className="result-badges-row">
                  <div className="result-badge-card">
                    <Zap size={22} color="var(--brand-gold)" />
                    <strong>+{quizScore * 15} XP 經驗值</strong>
                  </div>
                  <div className="result-badge-card">
                    <Sparkles size={22} color="#10b981" />
                    <strong>解鎖「漢越神經元大師」成就</strong>
                  </div>
                </div>
                <div className="result-actions">
                  <button
                    type="button"
                    className="btn-restart-quiz"
                    onClick={handleRestartQuiz}
                  >
                    <RotateCcw size={17} /> 再次挑戰鞏固記憶
                  </button>
                  <button
                    type="button"
                    className="btn-back-to-study"
                    onClick={() => setActiveTab('vocab')}
                  >
                    回到單字與會話隨身聽
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
