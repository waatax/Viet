import React, { useState, useMemo } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  ChevronDown,
  Coffee,
  Headphones,
  Heart,
  Layers3,
  Mic,
  Shuffle,
  Sparkles,
  Trophy,
  Volume2,
  Orbit,
  X,
  Film,
  Music2,
  MessagesSquare,
  Zap,
  Search,
  Play
} from 'lucide-react';
import { knowledgeBridge } from '../data/knowledgeBridge';
import { subjectSparks, allModuleMasteryItems } from '../data/knowledgeMasteryData';
import { loadBridge, loadModuleMasteredPoints, loadLovedSubjects } from '../services/bridgeProgress';
import { loadKnowledgeProgress } from '../services/knowledgeProgress';
import { TOTAL_YOUTUBE_VIDEOS, readWatchedVideos } from '../data/youtubeVideos';
import { VIETNAMESE_SONGS, readListenedSongs } from '../data/vietnameseSongs';
import { ALL_NAV_ITEMS } from '../config/navigation';
import { getWeakestPillar, loadUltralearningState, getSweetSpotAnalysis } from '../services/ultralearningEngine';
import './LearningWorkspace.css';

const INSTANT_START_CARDS = [
  {
    id: 'songs',
    Icon: Music2,
    tone: 'rose',
    badge: () => `${VIETNAMESE_SONGS.length} 首金曲`,
    title: '聽音樂學越語',
    desc: '越南抒情金曲・雙語歌詞＋YouTube 秒數直達'
  },
  {
    id: 'listen',
    Icon: Headphones,
    tone: 'teal',
    badge: () => '雙語快播・MP3',
    title: '單字＆雙語隨身聽',
    desc: '核心單字與會話連播，越語 0.5×–1.5× 獨立調速'
  },
  {
    id: 'conversation',
    Icon: MessagesSquare,
    tone: 'blue',
    badge: () => '64 大情境',
    title: '情境會話實戰',
    desc: '點餐・租屋・商務對話，雙語播放與角色扮演'
  },
  {
    id: 'flashcards',
    Icon: Layers3,
    tone: 'purple',
    badge: () => '10,000 分級詞彙',
    title: '單字播放＆閃卡',
    desc: 'SM-2 科學抗遺忘記憶・單字自動循環播放'
  },
  {
    id: 'dialogvideo',
    Icon: Film,
    tone: 'coral',
    badge: () => `${TOTAL_YOUTUBE_VIDEOS} 支影片`,
    title: 'YouTube 影片課程',
    desc: '發音嘴形 6 堂課＋77 支實境商務生活教學'
  },
  {
    id: 'ultra',
    Icon: Zap,
    tone: 'amber',
    badge: () => 'See→Do→Feedback',
    title: '母語級超速特訓',
    desc: '盲聽主動提取・85% 甜蜜點・南北越口音交錯'
  }
];

const ROUTES = [
  { id: 'alphabet', Icon: Volume2, title: '越語發音閃卡', desc: '母音・六聲・子音跟讀', tag: '打好基礎' },
  { id: 'topics', Icon: Coffee, title: '今天就能用的一句', desc: '點餐・問價・說出需求', tag: '生活開口' },
  { id: 'conversation', Icon: Mic, title: '接得住真實對話', desc: '聽懂・澄清・重述確認', tag: '會話練習' },
  { id: 'quest', Icon: Trophy, title: '用挑戰找出弱點', desc: 'Duolingo 闖關・錯題再練', tag: '遊戲闖關' }
];

const FEATURED_DISCIPLINES = [
  'alphabet', 'tonegame', 'pronoun', 'shopping', 'phrases', 'grammar', 'hanviet', 'conversation', 'business', 'science'
];

const readLastVisited = () => {
  try {
    const raw = localStorage.getItem('viet_last_visited');
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const id = parsed?.tab || parsed?.moduleId;
    if (!id || id === 'path') return null;
    return id;
  } catch {
    return null;
  }
};

export default function HomeLearningHub({ onStartStudy, onNavigate, onOpenSearch }) {
  const [showDisciplines, setShowDisciplines] = useState(false);
  const [showAllSubjects, setShowAllSubjects] = useState(false);
  const [showConstellation, setShowConstellation] = useState(false);

  const moduleIds = Object.keys(knowledgeBridge);

  const records = moduleIds.map((id) => {
    const bridge = loadBridge(id);
    const kpMastered = loadModuleMasteredPoints(id, 10);
    const recalled = loadKnowledgeProgress(id, 10).recalled || [];
    const combinedSet = new Set([...kpMastered, ...recalled]);
    return {
      id,
      ...bridge,
      masteredIndices: [...combinedSet],
      combinedCount: combinedSet.size
    };
  });

  const due = records.filter(r => r.due && r.due <= Date.now());
  const started = records.filter(r => r.completed > 0 || r.combinedCount > 0).length;
  const totalMastered = records.reduce((sum, r) => sum + r.combinedCount, 0);
  const loved = loadLovedSubjects();
  const nextId = due[0]?.id || records.find(r => r.completed === 0 && r.id === 'phrases')?.id || records.find(r => r.completed === 0)?.id || 'conversation';
  const nextSpark = subjectSparks[nextId];
  const visibleSubjects = showAllSubjects ? moduleIds : FEATURED_DISCIPLINES;

  const lastVisitedId = useMemo(() => readLastVisited(), []);
  const lastVisitedName = useMemo(() => {
    if (!lastVisitedId) return null;
    const instant = INSTANT_START_CARDS.find(c => c.id === lastVisitedId);
    if (instant) return instant.title;
    const sp = subjectSparks[lastVisitedId];
    if (sp?.badge) return sp.badge;
    const nav = ALL_NAV_ITEMS.find(i => i.id === lastVisitedId);
    return nav ? lastVisitedId : null;
  }, [lastVisitedId]);

  const watchedCount = readWatchedVideos().length;
  const listenedSongsCount = readListenedSongs().length;
  const ultraState = loadUltralearningState();
  const weakestPillar = getWeakestPillar();
  const sweetSpot = getSweetSpotAnalysis(ultraState.recentOutcomes);

  const findNextUnmasteredGlobal = () => {
    for (const rec of records) {
      if (rec.combinedCount < 10) {
        for (let i = 0; i < 10; i++) {
          if (!rec.masteredIndices.includes(i)) {
            return { moduleId: rec.id, pointIdx: i };
          }
        }
      }
    }
    return { moduleId: nextId, pointIdx: 9 };
  };

  const handleSprintNextUnmastered = () => {
    const target = findNextUnmasteredGlobal();
    onStartStudy(target.moduleId, target.pointIdx);
  };

  const handleRandomSubject = () => {
    const unmastered = records.filter((r) => r.combinedCount < 10).map((r) => r.id);
    const pool = unmastered.length > 0 ? unmastered : moduleIds;
    const pick = pool[Math.floor(Math.random() * pool.length)] || nextId;
    onStartStudy(pick);
  };

  return (
    <section className="learning-hub" aria-labelledby="learning-hub-title">
      {/* Compact Welcome & Quick Action Header */}
      <header className="hub-hero-bar">
        <div className="hub-hero-copy">
          <span className="hub-eyebrow">
            <Sparkles size={15} aria-hidden="true" />
            <span>以「接近母語越文」為目標 · See → Do → Feedback</span>
          </span>
          <h1 id="learning-hub-title">今天想怎麼學越南文？</h1>
          <p>挑選最適合現在的學習入口，1 秒開始聽音樂、播單字、練會話或啟動 85% 甜蜜點盲聽特訓。</p>
        </div>

        <div className="hub-hero-actions">
          {lastVisitedId && lastVisitedName && (
            <button
              type="button"
              className="hub-resume-chip"
              onClick={() => onNavigate(lastVisitedId)}
            >
              <Play size={14} fill="currentColor" aria-hidden="true" />
              <span>接續上次：{lastVisitedName}</span>
            </button>
          )}
          {onOpenSearch && (
            <button
              type="button"
              className="hub-search-trigger"
              onClick={() => onOpenSearch('')}
            >
              <Search size={15} aria-hidden="true" />
              <span>搜尋單字・會話・歌曲</span>
            </button>
          )}
        </div>
      </header>

      {/* Primary 6-Card Instant-Start Learning Grid */}
      <div className="hub-instant-grid" role="list" aria-label="快速開始學習入口">
        {INSTANT_START_CARDS.map(({ id, Icon, tone, badge, title, desc }) => {
          const progressNote =
            id === 'songs' && listenedSongsCount > 0 ? `已學 ${listenedSongsCount}/${VIETNAMESE_SONGS.length}` :
            id === 'dialogvideo' && watchedCount > 0 ? `已看 ${watchedCount}/${TOTAL_YOUTUBE_VIDEOS}` :
            badge();

          return (
            <button
              key={id}
              type="button"
              role="listitem"
              className={`hub-instant-card tone-${tone}`}
              onClick={() => onNavigate(id)}
            >
              <div className="hub-instant-top">
                <span className={`hub-instant-icon tone-${tone}`}>
                  <Icon size={22} aria-hidden="true" />
                </span>
                <span className={`hub-instant-badge tone-${tone}`}>{progressNote}</span>
              </div>
              <div className="hub-instant-body">
                <strong>{title}</strong>
                <span>{desc}</span>
              </div>
              <span className="hub-instant-cta">
                <span>立即開始</span>
                <ArrowRight size={15} aria-hidden="true" />
              </span>
            </button>
          );
        })}
      </div>

      {/* Compact Today's Mission Strip */}
      <div className="hub-today">
        <div className="hub-today-icon"><Headphones size={24} aria-hidden="true" /></div>
        <div className="hub-today-copy">
          <span>{due.length ? '優先複習・約 3 分鐘' : `今日小任務・${nextSpark?.disciplineName || '約 3 分鐘'}`}</span>
          <h3>{knowledgeBridge[nextId][0]}</h3>
          <p>聽懂一句 → 結構導讀 → 換條件自己開口說</p>
        </div>
        <div className="hub-today-buttons">
          <button type="button" className="hub-today-primary" onClick={() => onStartStudy(nextId)}>
            <span>開始今天的練習</span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
          <button
            type="button"
            className="hub-today-sprint-next"
            onClick={handleSprintNextUnmastered}
            title="自動尋找全站下一個未掌握知識點"
          >
            <Sparkles size={15} aria-hidden="true" />
            <span>挑戰下一顆星</span>
          </button>
        </div>
      </div>

      {/* Compact 4-Purpose Learning Routes */}
      <div className="hub-routes" aria-label="依學習目的開始">
        {ROUTES.map(({ id, Icon, title, desc, tag }) => (
          <button
            key={id}
            type="button"
            onClick={() => ['alphabet', 'quest'].includes(id) ? onNavigate(id) : onStartStudy(id)}
          >
            <span className={`hub-route-icon route-${id}`}><Icon size={20} aria-hidden="true" /></span>
            <span className="hub-route-copy">
              <small>{tag}</small>
              <strong>{title}</strong>
              <span>{desc}</span>
            </span>
            <ArrowRight size={15} className="hub-route-arrow" aria-hidden="true" />
          </button>
        ))}
      </div>

      {/* Subtle Progress Bar + Optional Constellation & 20-Disciplines Toggles */}
      <div className="hub-stats-bar">
        <div className="hub-stats">
          <span><CalendarCheck size={15} aria-hidden="true" /> {due.length} 待複習</span>
          <span><BookOpen size={15} aria-hidden="true" /> {started}/20 門學科</span>
          <span><Sparkles size={15} aria-hidden="true" /> {totalMastered}/200 知識之星</span>
          <span><Zap size={15} aria-hidden="true" /> 今日輸出 {ultraState.dailyOutput.count} 次 · 優先突破：{weakestPillar.label}</span>
          {sweetSpot.accuracy !== null && <span>🎯 {sweetSpot.label}</span>}
          {loved.length > 0 && <span><Heart size={15} aria-hidden="true" /> 喜愛 {loved.length} 門</span>}
        </div>
        <div className="hub-stats-actions">
          <button
            type="button"
            className={`hub-utility-pill ${showConstellation ? 'is-open' : ''}`}
            onClick={() => setShowConstellation(v => !v)}
          >
            <Orbit size={14} aria-hidden="true" />
            <span>{showConstellation ? '收起 200 知識星空盤' : '展開 200 知識星空盤'}</span>
          </button>
          <button
            type="button"
            className={`hub-utility-pill ${showDisciplines ? 'is-open' : ''}`}
            onClick={() => setShowDisciplines(v => !v)}
          >
            <span>20 門學科直達</span>
            <ChevronDown size={14} className={showDisciplines ? 'rotated' : ''} aria-hidden="true" />
          </button>
          <button type="button" className="hub-utility-pill" onClick={handleRandomSubject}>
            <Shuffle size={14} aria-hidden="true" />
            <span>隨機抽一門</span>
          </button>
        </div>
      </div>

      {/* Expandable 200 Knowledge Constellation */}
      {showConstellation && (
        <div className="hub-constellation-board" role="region" aria-label="全站 200 知識點星空探索盤">
          <div className="hub-constellation-header">
            <div>
              <h3><Orbit size={18} aria-hidden="true" /> 越南語 200 知識星空盤 (Knowledge Constellation)</h3>
              <p>20 門學科宛如 20 座星盤，點擊任意星點即可跳轉練習。目前進度：<strong>{totalMastered} / 200 ★</strong></p>
            </div>
            <button type="button" className="hub-constellation-close" onClick={() => setShowConstellation(false)} aria-label="收起星空盤">
              <X size={16} aria-hidden="true" />
            </button>
          </div>

          <div className="hub-constellation-grid">
            {records.map((rec) => {
              const sp = subjectSparks[rec.id];
              const items = allModuleMasteryItems[rec.id] || [];
              const isFullMastered = rec.combinedCount === 10;
              const isLoved = loved.includes(rec.id);

              return (
                <div key={rec.id} className={`hub-constellation-card ${isFullMastered ? 'card-full-mastered' : ''}`}>
                  <div className="hub-constellation-card-header">
                    <button
                      type="button"
                      className="hub-constellation-mod-name"
                      onClick={() => onStartStudy(rec.id)}
                      title={`進入 ${sp?.disciplineName || rec.id}`}
                    >
                      <span>{isLoved ? '❤️ ' : ''}{sp?.badge || rec.id}</span>
                      <small>{rec.combinedCount}/10 ★</small>
                    </button>
                  </div>
                  <div className="hub-constellation-stars">
                    {items.map((it, idx) => {
                      const isStarLit = rec.masteredIndices.includes(idx);
                      return (
                        <button
                          key={it.concept}
                          type="button"
                          className={`hub-star-node ${isStarLit ? 'star-lit' : 'star-dim'}`}
                          onClick={() => onStartStudy(rec.id, idx)}
                          title={`第 ${idx + 1} 點：${it.concept}（${isStarLit ? '已掌握 ★' : '點擊練習'}）`}
                        >
                          <span>{isStarLit ? '★' : idx + 1}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Expandable 20-Disciplines Pill Drawer */}
      {showDisciplines && (
        <div className="hub-disciplines" aria-label="熱門知識學科直達">
          <div className="hub-disciplines-header">
            <span className="hub-disciplines-label">點選任一學科進入聽・說・讀工作台：</span>
            <button
              type="button"
              className="hub-discipline-action"
              onClick={() => setShowAllSubjects(v => !v)}
            >
              {showAllSubjects ? '僅看精選 10 門' : '顯示全部 20 門'}
            </button>
          </div>
          <div className="hub-discipline-pills">
            {visibleSubjects.map((id) => {
              const sp = subjectSparks[id];
              const rec = records.find((r) => r.id === id);
              const isLoved = loved.includes(id);
              if (!sp) return null;
              return (
                <button
                  key={id}
                  type="button"
                  className="hub-discipline-pill"
                  onClick={() => onStartStudy(id)}
                  title={sp.disciplineName}
                >
                  <span>{isLoved ? '❤️ ' : ''}{sp.badge}</span>
                  <small>{rec?.combinedCount || 0}/10</small>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
