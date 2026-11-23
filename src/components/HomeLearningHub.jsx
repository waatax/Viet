import React, { useState } from 'react';
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Coffee,
  Compass,
  Headphones,
  Heart,
  Mic,
  Shuffle,
  Sprout,
  Sparkles,
  Trophy,
  Volume2,
  Orbit,
  X,
  Film,
  Music2,
  ExternalLink
} from 'lucide-react';
import { knowledgeBridge } from '../data/knowledgeBridge';
import { subjectSparks, allModuleMasteryItems } from '../data/knowledgeMasteryData';
import { loadBridge, loadModuleMasteredPoints, loadLovedSubjects } from '../services/bridgeProgress';
import { loadKnowledgeProgress } from '../services/knowledgeProgress';
import { YOUTUBE_PLAYLIST_URL, TOTAL_YOUTUBE_VIDEOS, readWatchedVideos } from '../data/youtubeVideos';
import { SONGS_YOUTUBE_BASE_URL, VIETNAMESE_SONGS, readListenedSongs } from '../data/vietnameseSongs';
import './LearningWorkspace.css';

const ROUTES = [
  { id: 'alphabet', Icon: Volume2, title: '越語發音閃卡', desc: '母音・雙母音・六聲・子音跟讀', tag: '發音練習' },
  { id: 'topics', Icon: Coffee, title: '今天就能用的一句', desc: '點餐・問價・說出需求', tag: '生活開口' },
  { id: 'conversation', Icon: Mic, title: '接得住真實對話', desc: '聽懂・澄清・重述確認', tag: '會話練習' },
  { id: 'quest', Icon: Trophy, title: '用挑戰找出弱點', desc: '闖關・解說・錯題再練', tag: '遊戲評量' }
];

const FEATURED_DISCIPLINES = [
  'alphabet', 'tonegame', 'pronoun', 'shopping', 'phrases', 'grammar', 'hanviet', 'conversation', 'business', 'science'
];

export default function HomeLearningHub({ onStartStudy, onNavigate }) {
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

  // Find next unmastered point across all 200 points
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
      <div className="hub-quick-bar" aria-label="首頁快捷入口">
        <button
          type="button"
          className="hub-quick-music-btn"
          onClick={() => onNavigate('songs')}
        >
          <Music2 size={20} aria-hidden="true" />
          <span>🎵 聽音樂 · 越南歌曲 ({VIETNAMESE_SONGS.length} 首)</span>
          <ArrowRight size={16} aria-hidden="true" />
        </button>
        <button
          type="button"
          className="hub-quick-sub-btn"
          onClick={() => onNavigate('listen')}
        >
          <Headphones size={17} aria-hidden="true" />
          <span>隨身聽工坊</span>
        </button>
        <button
          type="button"
          className="hub-quick-sub-btn"
          onClick={() => onNavigate('dialogvideo')}
        >
          <Film size={17} aria-hidden="true" />
          <span>影片課程 ({TOTAL_YOUTUBE_VIDEOS})</span>
        </button>
      </div>
      <div className="hub-listen-launch">
        <div>
          <span>✨ 旗艦升級 · 隨身聽微課 ＋ 快速雙語快播工坊</span>
          <h2>想先聽？一鍵開始越文＋中文雙語速學。</h2>
          <p>核心單字・情境會話・中越近似單字，離線 MP3 與雙語合音一鍵下載。越語獨立調速 (0.5×~1.5×)，中文保持 1.0× 自然原速。</p>
        </div>
        <button type="button" onClick={() => onNavigate('listen')}><Headphones size={23} aria-hidden="true" /> 打開隨身聽工坊 <ArrowRight size={18} /></button>
      </div>
      <div className="hub-youtube-launch">
        <div>
          <span>🎬 YouTube 完整影音課程 · 共 {TOTAL_YOUTUBE_VIDEOS} 支影片已上架（基礎發音 6 ＋ 情境會話 77）</span>
          <h3>用影片看懂嘴形、聲調與 77 大實境商務生活對話</h3>
          <p>
            全站課程影片皆整合至 YouTube 播放清單，點擊即可直達對應影片與章節時間點（已觀看 {readWatchedVideos().length} / {TOTAL_YOUTUBE_VIDEOS} 支）。
          </p>
        </div>
        <div className="hub-youtube-actions">
          <button type="button" onClick={() => onNavigate('dialogvideo')}>
            <Film size={18} aria-hidden="true" /> 影片課程中心 ({TOTAL_YOUTUBE_VIDEOS})
          </button>
          <a href={YOUTUBE_PLAYLIST_URL} target="_blank" rel="noopener noreferrer">
            ▶ 前往 YouTube 播放清單 <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hub-songs-launch">
        <div>
          <span>🎵 聽音樂學越語 · 越南歌曲雙語歌詞工坊（完整 {VIETNAMESE_SONGS.length} 首）</span>
          <h3>聽音樂・邊聽越南抒情金曲，邊對照完整越文歌詞與繁中翻譯</h3>
          <p>
            完整整理 YouTube 熱門翻唱合輯 24 首歌曲（Từng Là、Giữa Đại Lộ Đông Tây、Thu Cuối、Phai Dấu Cuộc Tình 等），附每首精確開始秒數與逐段 YouTube 秒數直達連結（已聽學 {readListenedSongs().length} / {VIETNAMESE_SONGS.length} 首）。
          </p>
        </div>
        <div className="hub-songs-actions">
          <button type="button" onClick={() => onNavigate('songs')}>
            <Music2 size={18} aria-hidden="true" /> 🎵 聽音樂 ({VIETNAMESE_SONGS.length} 首)
          </button>
          <a href={SONGS_YOUTUBE_BASE_URL} target="_blank" rel="noopener noreferrer">
            ▶ 前往 YouTube 原影片 <ExternalLink size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
      <div className="hub-intro">
        <span className="hub-eyebrow"><Sprout size={17} aria-hidden="true" /> 一點一點，快樂說進生活裡</span>
        <h2 id="learning-hub-title">今天，讓越南文再靠近你一點。</h2>
        <p>不用一次學完所有內容。選一個小任務，用「🎧 聽懂 → 📖 讀透 → 🗣️ 開口」快樂掌握全站 200 個知識點，愛上每一門越南語學科。</p>
      </div>

      <div className="hub-today">
        <div className="hub-today-icon"><Headphones size={28} aria-hidden="true" /></div>
        <div className="hub-today-copy">
          <span>{due.length ? '優先複習・約 3 分鐘' : `今天的小任務・${nextSpark?.disciplineName || '約 3 分鐘'}`}</span>
          <h3>{knowledgeBridge[nextId][0]}</h3>
          <p>一句例句 → 結構導讀與無字幕聽力 → 換條件開口說</p>
        </div>
        <div className="hub-today-buttons">
          <button type="button" onClick={() => onStartStudy(nextId)}>開始今天的練習 <ArrowRight size={18} aria-hidden="true" /></button>
          <button type="button" className="hub-today-sprint-next" onClick={handleSprintNextUnmastered} title="自動尋找全站下一個未掌握知識點">
            <Sparkles size={16} aria-hidden="true" /> 挑戰下一顆星
          </button>
        </div>
      </div>

      <div className="hub-stats">
        <span><CalendarCheck size={18} aria-hidden="true" /> {due.length} 個到期複習</span>
        <span><BookOpen size={18} aria-hidden="true" /> 已探索 {started} / 20 門知識學科</span>
        <span><Sparkles size={18} aria-hidden="true" /> 已點亮 {totalMastered} / 200 個知識之星</span>
        <span><Heart size={18} aria-hidden="true" /> 喜愛 {loved.length} 門學科</span>
        <button
          type="button"
          className="hub-constellation-toggle"
          onClick={() => setShowConstellation(!showConstellation)}
        >
          <Orbit size={16} aria-hidden="true" />
          <span>{showConstellation ? '收起 200 知識星空盤' : '🌌 展開 200 知識星空盤'}</span>
        </button>
      </div>

      {/* 🌌 全站 200 知識點星空探索盤 (Knowledge Constellation) */}
      {showConstellation && (
        <div className="hub-constellation-board" role="region" aria-label="全站 200 知識點星空探索盤">
          <div className="hub-constellation-header">
            <div>
              <h3><Orbit size={20} aria-hidden="true" /> 越南語 200 知識星空盤 (Knowledge Constellation)</h3>
              <p>20 門學科宛如 20 座星盤，點擊任意星點即可直接跳轉展開「聽・說・讀」工作台！目前全站點亮進度：<strong>{totalMastered} / 200 🌟</strong></p>
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

      <div className="hub-routes" aria-label="依學習目的開始">
        {ROUTES.map(({ id, Icon, title, desc, tag }) => (
          <button key={id} onClick={() => ['alphabet', 'quest'].includes(id) ? onNavigate(id) : onStartStudy(id)}>
            <span className={`hub-route-icon route-${id}`}><Icon size={23} aria-hidden="true" /></span>
            <span className="hub-route-copy"><small>{tag}</small><strong>{title}</strong><span>{desc}</span></span>
            <ArrowRight size={16} aria-hidden="true" />
          </button>
        ))}
      </div>

      <div className="hub-disciplines" aria-label="熱門知識學科直達">
        <div className="hub-disciplines-header">
          <span className="hub-disciplines-label">✨ 探索你會愛上的 20 門知識學科（點選進入聽說讀工作台）：</span>
          <div className="hub-disciplines-actions">
            <button type="button" className="hub-discipline-action" onClick={handleRandomSubject}>
              <Shuffle size={14} aria-hidden="true" /> 隨機抽一門快樂學
            </button>
            <button type="button" className="hub-discipline-action" onClick={() => setShowAllSubjects(!showAllSubjects)}>
              {showAllSubjects ? '精選 10 門學科' : '展開全部 20 門學科'}
            </button>
          </div>
        </div>
        <div className="hub-discipline-pills">
          {visibleSubjects.map((id) => {
            const sp = subjectSparks[id];
            const rec = records.find((r) => r.id === id);
            const isLoved = loved.includes(id);
            if (!sp) return null;
            return (
              <button key={id} type="button" className="hub-discipline-pill" onClick={() => onStartStudy(id)} title={sp.disciplineName}>
                <span>{isLoved ? '❤️ ' : ''}{sp.badge}</span>
                <small>{rec?.combinedCount || 0}/10</small>
              </button>
            );
          })}
        </div>
      </div>
      <p className="hub-footnote"><Compass size={15} aria-hidden="true" /> 以下保留完整會話與課程探索。練習紀錄儲存在此瀏覽器。</p>
    </section>
  );
}
