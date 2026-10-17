import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Play,
  Volume2,
  Download,
  CheckCircle2,
  ArrowRight,
  Bookmark,
  Copy,
  Check,
  Globe2,
  HardDrive,
  Headphones,
  Flame,
  Lightbulb
} from 'lucide-react';
import { DialoguePlaybackBar } from './DialoguePlaybackBar';
import { situationalScenarios } from '../data/situationalScenarios';
import { SCENARIO_EXEGESIS } from '../data/scenarioExegesisData';
import { audioEngine } from '../services/audioEngine';
import { offlineAudioService } from '../services/offlineAudioService';
import { bookmarkService } from '../services/bookmarkService';
import { useDialoguePlayback, useFollowActiveLine } from '../hooks/useDialoguePlayback';
import { getSpeakerVisual } from './DialoguePlayer';
import { useLanguage } from '../context/LanguageContext';
import './HomeConversationStudio.css';

// 10 Highest-Frequency Real-Life Practical Scenarios for Fast Homepage Learning
const TOP_CURATED_SCENARIOS = [
  { id: 'cafe', icon: '☕', labelZh: '咖啡點單', subZh: '滴漏冰奶咖·少糖少冰' },
  { id: 'pho', icon: '🍜', labelZh: '河粉點單', subZh: '生牛肉河粉·油條九層塔' },
  { id: 'banhmi', icon: '🥖', labelZh: '法國麵包', subZh: '內餡客製·微辣不加香菜' },
  { id: 'taxi', icon: '🚕', labelZh: 'Grab 叫車', subZh: '指示轉彎·靠邊停放' },
  { id: 'market', icon: '🛒', labelZh: '市集殺價', subZh: '詢問單價·四步折價法' },
  { id: 'hotel', icon: '🏨', labelZh: '飯店入住', subZh: '訂房憑證·早餐密碼' },
  { id: 'airport', icon: '✈️', labelZh: '機場海關', subZh: '行李託運·出境登機門' },
  { id: 'pharmacy', icon: '💊', labelZh: '藥局就醫', subZh: '感冒發燒·一日三次' },
  { id: 'factory_tour', icon: '🏭', labelZh: '工廠品保', subZh: '產線進度·AQL抽驗' },
  { id: 'business_negotiation', icon: '💼', labelZh: '商務合約', subZh: '會議談判·名片遞交' },
  { id: 'vietnam_geography', icon: '🇻🇳', labelZh: '風土民情', subZh: '南北文化·區域習俗' }
];

export const HomeConversationStudio = ({
  selectedAccent = 'north',
  onSelectAccent,
  setActiveTab,
  updateUserStats
}) => {
  const { learningMode } = useLanguage();
  const [activeScenarioId, setActiveScenarioId] = useState('cafe');
  const [sectionId, setSectionId] = useState('all');
  const [showTranslation, setShowTranslation] = useState(true);

  // Active scenario object
  const activeScenario = useMemo(() => {
    return situationalScenarios.find(s => s.id === activeScenarioId) || situationalScenarios[0];
  }, [activeScenarioId]);

  const sections = useMemo(() => activeScenario?.dialogueSections?.length
    ? activeScenario.dialogueSections
    : [{ id: 'dialogue', titleZh: '完整會話', lines: activeScenario?.dialogues || activeScenario?.dialogue || [] }], [activeScenario]);

  // Include every section by default; a learner can also practise a single section.
  const dialogueLines = useMemo(() => {
    return sections.filter(section => sectionId === 'all' || section.id === sectionId)
      .flatMap(section => section.lines || []);
  }, [sections, sectionId]);

  // Dialogue sequencer hook
  const player = useDialoguePlayback({
    lines: dialogueLines,
    accent: selectedAccent,
    nativeLang: learningMode === 'zh' ? 'zh' : 'en',
    title: activeScenario?.titleZh || '情境會話',
    onComplete: () => {
      audioEngine.playHaptic('celebrate');
      if (updateUserStats) updateUserStats(25);
    }
  });

  const containerRef = useRef(null);
  useFollowActiveLine(containerRef, player.index, player.isPlaying);

  // Offline Caching & Storage States
  const [isAutoCache, setIsAutoCache] = useState(() => offlineAudioService.isAutoCacheEnabled());
  const [cacheStatus, setCacheStatus] = useState({ total: 0, cachedCount: 0, isFullyCached: false, percent: 0 });
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadMessage, setDownloadMessage] = useState('');
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [bookmarkedSet, setBookmarkedSet] = useState(new Set());

  // Check scenario cache status when active scenario or accent changes
  useEffect(() => {
    let isMounted = true;
    const refresh = () => offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent).then(status => {
      if (isMounted) setCacheStatus(status);
    });
    refresh();
    const unsubscribe = offlineAudioService.subscribe(refresh);
    return () => { isMounted = false; unsubscribe(); };
  }, [dialogueLines, selectedAccent]);

  // Refresh bookmarks status
  useEffect(() => {
    const set = new Set();
    dialogueLines.forEach(l => {
      const viet = l.viet || l.vi;
      if (viet && bookmarkService.isBookmarked(viet)) {
        set.add(viet);
      }
    });
    setBookmarkedSet(set);
  }, [dialogueLines]);

  const handleToggleAutoCache = (e) => {
    const checked = e.target.checked;
    setIsAutoCache(checked);
    offlineAudioService.setAutoCacheEnabled(checked);
    audioEngine.playHaptic('tap');
  };

  const handleDownloadScenarioAudio = async () => {
    audioEngine.playHaptic('selection');
    setIsDownloading(true);
    setDownloadProgress(0);
    setDownloadMessage('');

    try {
      await offlineAudioService.cacheScenarioAudio(dialogueLines, selectedAccent, ({ percent }) => {
        setDownloadProgress(percent);
      });
      const updated = await offlineAudioService.checkScenarioCacheStatus(dialogueLines, selectedAccent);
      setCacheStatus(updated);
      setDownloadMessage(updated.isFullyCached ? '本情境已可離線播放。' : '部分音檔尚未儲存，請確認網路後再試一次。');
      audioEngine.playHaptic('success');
    } catch (e) {
      setDownloadMessage('無法儲存音檔，請確認網路與瀏覽器儲存空間後再試一次。');
    } finally {
      setIsDownloading(false);
    }
  };

  const handlePlayLineVi = (line) => {
    const viet = line.viet || line.vi;
    if (!viet) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(viet, { accent: selectedAccent, lang: 'vi' });
    if (updateUserStats) updateUserStats(2);
  };

  const handlePlayLineZh = (line) => {
    const zh = line.zh;
    if (!zh) return;
    audioEngine.playHaptic('tap');
    audioEngine.speak(zh, { lang: 'zh' });
  };

  const handleCopySentence = (line, idx) => {
    const text = `${line.viet || line.vi}\n${line.zh || ''}`;
    navigator.clipboard?.writeText(text);
    audioEngine.playHaptic('tap');
    setCopiedIndex(idx);
    setTimeout(() => setCopiedIndex(null), 1800);
  };

  const handleToggleBookmark = (line) => {
    const viet = line.viet || line.vi;
    if (!viet) return;
    audioEngine.playHaptic('tap');
    const isAdded = bookmarkService.toggle({
      viet,
      chinese: line.zh || '',
      english: line.en || '',
      category: '會話金句',
      source: activeScenario?.titleZh || '情境會話'
    });
    setBookmarkedSet(prev => {
      const next = new Set(prev);
      if (isAdded) next.add(viet);
      else next.delete(viet);
      return next;
    });
  };

  // Scenario Exegesis Lore Data (if available for this scenario)
  const exegesis = useMemo(() => {
    return SCENARIO_EXEGESIS[activeScenarioId] || null;
  }, [activeScenarioId]);

  return (
    <section className="home-conv-studio" aria-labelledby="studio-main-heading">
      {/* 1. Header Area with Quality Badges */}
      <div className="studio-header">
        <div className="studio-title-group">
          <div className="studio-badge-row">
            <span className="studio-pill primary">
              <Flame size={12} fill="currentColor" /> {learningMode === 'zh' ? '每天開口說越南語' : 'Top Practical Dialogues'}
            </span>
            <span className="studio-pill gold">
              <Headphones size={12} /> {learningMode === 'zh' ? '越文 / 越文+中文 雙軌語音' : 'Dual-Track Neural Narration'}
            </span>
            <span className="studio-pill green">
              <HardDrive size={12} /> {learningMode === 'zh' ? '支援離線下載播放' : 'Offline Playback Ready'}
            </span>
          </div>

          <h2 id="studio-main-heading" className="studio-title">
            <span>🇻🇳</span>
            <span>{learningMode === 'zh' ? '播放學習 · 生活越南語' : 'Practical Vietnamese Situational Conversations'}</span>
          </h2>

          <p className="studio-subtitle">
            {learningMode === 'zh'
              ? '選一個情境就能開始聽。先用越文＋中文理解句意，再用純越文練聽力，最後跟著說。'
              : 'Master everyday Vietnamese conversations right from the top of the homepage with native audio, dual-track listening, and full offline caching.'}
          </p>
        </div>

        {/* Accent Quick Switcher */}
        {onSelectAccent && (
          <div className="studio-accent-box" style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'var(--bg-input)', padding: '0.35rem 0.65rem', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
            <Globe2 size={15} color="var(--brand-primary)" />
            <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--text-secondary)' }}>
              {learningMode === 'zh' ? '切換發音：' : 'Voice: '}
            </span>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'north' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('north'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🇻🇳 河內標準音
            </button>
            <button
              className={`mode-toggle-btn ${selectedAccent === 'south' ? 'active' : ''}`}
              onClick={() => { audioEngine.playHaptic('tap'); onSelectAccent('south'); }}
              style={{ fontSize: '0.78rem', padding: '0.2rem 0.5rem' }}
            >
              🌴 南越偏好
            </button>
          </div>
        )}
      </div>

      <DialoguePlaybackBar player={player} lines={dialogueLines} title={activeScenario?.titleZh} learningMode={learningMode} />


      {/* 2. Top Curated High-Frequency Scenarios Bar */}
      <div className="scenario-quick-selector" role="group" aria-label="情境切換">
        {TOP_CURATED_SCENARIOS.map(sc => {
          const isActive = activeScenarioId === sc.id;
          return (
            <button
              key={sc.id}
              aria-pressed={isActive}
              className={`scenario-chip-btn ${isActive ? 'active' : ''}`}
              onClick={() => {
                audioEngine.playHaptic('tap');
                setActiveScenarioId(sc.id);
                setSectionId('all');
              }}
              title={sc.subZh}
            >
              <span style={{ fontSize: '1.15rem' }}>{sc.icon}</span>
              <span>{sc.labelZh}</span>
            </button>
          );
        })}

        {/* Dropdown for All 64 Scenarios */}
        <div className="scenario-dropdown-wrap">
          <select
            className="scenario-select"
            value={activeScenarioId}
            onChange={(e) => {
              audioEngine.playHaptic('selection');
              setActiveScenarioId(e.target.value);
              setSectionId('all');
            }}
            aria-label="選擇其他情境"
          >
            <option value="" disabled>探索全部情境</option>
            {situationalScenarios.map(s => (
              <option key={s.id} value={s.id}>
                {s.icon || '💬'} {s.titleZh}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 3. Master Control Toolbar (Play, Dual-Track Mode, Speed, Offline Cache) */}
      <div className="studio-practice-options">
        <label>會話段落
          <select value={sectionId} onChange={e => setSectionId(e.target.value)}>
            <option value="all">全部段落（{sections.reduce((n, s) => n + (s.lines?.length || 0), 0)} 句）</option>
            {sections.map((section, index) => <option key={section.id} value={section.id}>{section.titleZh || section.title || `第 ${index + 1} 段`}（{section.lines?.length || 0} 句）</option>)}
          </select>
        </label>
        <label><input type="checkbox" checked={showTranslation} onChange={e => setShowTranslation(e.target.checked)} />顯示中文翻譯</label>
        <p>先聽懂 → 隱藏翻譯練聽力 → 開啟跟讀停頓，自己說一次。</p>
      </div>
      <div className="studio-toolbar">
        <div className="toolbar-right">
          {/* Offline Audio Caching & Preload Controls */}
          <div className="offline-group">
            {/* Auto-Cache Option Switch */}
            <label className="offline-checkbox-label" title="開啟後，每次點擊播放音檔即自動下載儲存在瀏覽器，離線或無網路時依舊能順暢播放">
              <input
                type="checkbox"
                checked={isAutoCache}
                onChange={handleToggleAutoCache}
              />
              <span>{learningMode === 'zh' ? '播過即存離線' : 'Auto-cache offline'}</span>
            </label>

            {/* One-Click Preload Download Button */}
            <button
              className={`offline-download-btn ${cacheStatus.isFullyCached ? 'ready' : ''}`}
              onClick={handleDownloadScenarioAudio}
              disabled={isDownloading || !offlineAudioService.isSupported}
              title={learningMode === 'zh' ? '一鍵將當前情境的所有越語與中文音檔完整下載至離線快取' : 'Download all dialogue audio clips for offline use'}
            >
              {isDownloading ? (
                <>
                  <Download size={14} className="animate-spin" />
                  <span>{learningMode === 'zh' ? `下載中 ${downloadProgress}%` : `Saving ${downloadProgress}%`}</span>
                </>
              ) : cacheStatus.isFullyCached ? (
                <>
                  <CheckCircle2 size={14} color="#10b981" />
                  <span>{learningMode === 'zh' ? `離線已就緒 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Ready Offline (${cacheStatus.cachedCount})`}</span>
                </>
              ) : (
                <>
                  <Download size={14} />
                  <span>{learningMode === 'zh' ? `一鍵下載離線 (${cacheStatus.cachedCount}/${cacheStatus.total})` : `Download (${cacheStatus.cachedCount}/${cacheStatus.total})`}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <p role="status" className="studio-voice-note">{!offlineAudioService.isSupported ? '目前瀏覽器不支援離線儲存，仍可線上播放。' : downloadMessage}</p>

      {/* 4. Sentence-by-Sentence Interactive Card Deck */}
      <div className="dialogue-card-deck" ref={containerRef}>
        {dialogueLines.map((line, idx) => {
          const isCurrentActive = player.isActive && player.index === idx;
          const speakerInfo = getSpeakerVisual(line.speakerVi || line.speaker || '', line.role || '', learningMode);
          const vietText = line.viet || line.vi || '';
          const zhText = line.zh || '';
          const isBookmarked = bookmarkedSet.has(vietText);

          return (
            <div
              key={idx}
              data-line-index={idx}
              className={`sentence-card ${isCurrentActive ? 'active-speaking' : ''}`}
            >
              <div className="sentence-card-top">
                <div className="speaker-badge-wrap">
                  <div className="speaker-avatar" style={{ background: speakerInfo.bg, border: `1.5px solid ${speakerInfo.border}` }}>
                    {speakerInfo.icon}
                  </div>
                  <span className="speaker-name-vi">{line.speakerVi || line.speaker || 'Người nói'}</span>
                  <span className="speaker-name-zh">({line.speakerZh || speakerInfo.roleName})</span>
                  {isCurrentActive && (
                    <span style={{ fontSize: '0.74rem', fontWeight: 800, color: 'var(--brand-primary)', marginLeft: '0.3rem' }}>
                      ▶ 正在播放
                    </span>
                  )}
                </div>

                <div className="sentence-actions">
                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleCopySentence(line, idx)}
                    title="複製越文與中文"
                  >
                    {copiedIndex === idx ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>

                  <button
                    className="sentence-tool-btn"
                    onClick={() => handleToggleBookmark(line)}
                    title={isBookmarked ? '從生詞本移除' : '收藏至生詞本'}
                    style={{ color: isBookmarked ? '#eab308' : undefined }}
                  >
                    <Bookmark size={14} fill={isBookmarked ? '#eab308' : 'none'} />
                  </button>
                </div>
              </div>

              <div className="sentence-card-body">
                <div className="sentence-text-vi" lang="vi">{vietText}</div>
                {showTranslation && <div className="sentence-text-zh" lang="zh-TW">{zhText}</div>}
              </div>

              {/* Individual Audio Triggers: Separate Vietnamese & Chinese Neural Narration */}
              <div className="sentence-audio-btns">
                <button
                  className="audio-chip-play"
                  onClick={() => handlePlayLineVi(line)}
                  title="點擊單獨播放這句越語母語發音"
                >
                  <Volume2 size={13} />
                  <span>越語原音</span>
                  <span style={{ fontSize: '0.72rem', opacity: 0.75 }}>
                    {selectedAccent === 'north' ? '(北越音)' : '(南越偏好)'}
                  </span>
                </button>

                {zhText && (
                  <button
                    className="audio-chip-play zh-btn"
                    onClick={() => handlePlayLineZh(line)}
                    title="點擊單獨播放繁體中文導讀原音"
                  >
                    <Volume2 size={13} color="#10b981" />
                    <span>中文導讀</span>
                    <span style={{ fontSize: '0.72rem', opacity: 0.85 }}>🇹🇼</span>
                  </button>
                )}

                <button
                  className="audio-chip-play"
                  style={{ marginLeft: 'auto', border: 'none', background: 'transparent', color: 'var(--text-muted)' }}
                  onClick={() => player.playFrom(idx, player.mode || 'vi-zh')}
                  title="以此句為起點連續播完"
                >
                  <span style={{ fontSize: '0.76rem', fontWeight: 600 }}>從此句接續播放 ➔</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <details className="studio-voice-note"><summary>語音與離線播放說明</summary>
      <p className="studio-voice-note">語音優先使用預錄的越南語與台灣華語合成音檔。南越偏好若無專屬音檔，會使用現有標準越語，不以改寫拼字模擬口音。</p>
      </details>

      {/* 5. In-Depth Teaching Lore & Exegesis Section */}
      <div className="studio-lore-card">
        <div className="lore-header">
          <h3 className="lore-title">
            <Lightbulb size={18} color="var(--brand-gold)" />
            <span>{learningMode === 'zh' ? '學會這段對話：句型、用法與文化' : 'Pedagogical Lore & Insider Notes'}</span>
          </h3>
          <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-primary)' }}>
            {activeScenario?.titleVi}
          </span>
        </div>

        <div className="lore-grid">
          {/* Formulas / Grammar Patterns */}
          <div className="lore-box">
            <h4>
              <span>📌</span>
              <span>{learningMode === 'zh' ? '核心句型公式' : 'Core Sentence Patterns'}</span>
            </h4>
            {exegesis?.coreFormulas && exegesis.coreFormulas.length > 0 ? (
              exegesis.coreFormulas.map((f, i) => (
                <div key={i} style={{ marginBottom: '0.5rem' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-primary)', fontSize: '0.86rem' }}>{f.formulaVi}</div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>{f.explainZh || f.formulaZh}</div>
                </div>
              ))
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '先挑一句自己用得到的話，聽完再跟讀，最後替換餐點、地點或數字練習。請求物品可用「Cho tôi + 名詞」；禮貌程度也取決於稱謂、語氣與情境。'
                  : '"Cho tôi + verb/noun" is the standard polite opener in daily requests.'}
              </p>
            )}
          </div>

          {/* Cultural Insights & Secrets */}
          <div className="lore-box">
            <h4>
              <span>💡</span>
              <span>{learningMode === 'zh' ? '在地互動提醒' : 'Cultural Secrets'}</span>
            </h4>
            {activeScenario?.culturalTip?.contentZh ? (
              <ul>
                {activeScenario.culturalTip.contentZh.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            ) : exegesis?.culturalNotes ? (
              <ul>
                {exegesis.culturalNotes.slice(0, 3).map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            ) : (
              <p>
                {learningMode === 'zh'
                  ? '稱謂會依年齡與關係調整。Anh、chị 常用來稱呼年紀稍長的男性、女性；em 用於較年輕的人。不確定時，可以先詢問對方怎麼稱呼。'
                  : 'Vietnamese address forms strictly follow kinship terms.'}
              </p>
            )}
          </div>

          {/* Key Scenario Vocabulary */}
          <div className="lore-box">
            <h4>
              <span>📖</span>
              <span>{learningMode === 'zh' ? '關鍵生詞點讀' : 'Key Vocabulary'}</span>
            </h4>
            <div className="studio-vocab-list">
              {(activeScenario?.vocab || activeScenario?.vocabulary || []).slice(0, 8).map((word, i) => (
                <button
                  key={i}
                  className="studio-vocab-chip"
                  onClick={() => {
                    const vi = word.viet || word.vi || word.word;
                    if (vi) {
                      audioEngine.playHaptic('tap');
                      audioEngine.speak(vi, { accent: selectedAccent, lang: 'vi' });
                    }
                  }}
                  title="點擊聽發音"
                >
                  <span className="studio-vocab-vi">{word.viet || word.vi || word.word}</span>
                  <span className="studio-vocab-zh">{word.zh || word.meaning}</span>
                  <Volume2 size={11} color="var(--brand-primary)" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 6. Navigation Portal to Deep Conversation Module */}
      <div className="studio-portal-banner">
        <div className="portal-text">
          <span>想練習角色扮演，或深入探索更多情境？</span>
        </div>
        <button
          className="portal-btn"
          onClick={() => {
            audioEngine.playHaptic('selection');
            if (setActiveTab) {
              sessionStorage.setItem('viet_target_chapter', JSON.stringify({
                moduleId: 'conversation',
                targetParam: { scenarioId: activeScenarioId }
              }));
              setActiveTab('conversation');
            }
          }}
        >
          <span>查看全部情境與角色扮演</span>
          <ArrowRight size={16} />
        </button>
      </div>
    </section>
  );
};

export default HomeConversationStudio;
