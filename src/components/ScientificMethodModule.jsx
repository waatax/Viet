import React, { useState } from 'react';
import {
  Brain, GraduationCap, Sparkles, Target, Layers, Volume2, ShieldCheck,
  CheckCircle2, Compass, Award, Activity, Play, Zap, BookOpen, Clock, Users, ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { audioEngine } from '../services/audioEngine';

export const RESEARCH_PANELS = [
  {
    id: 'sla_neuro',
    titleZh: '1. 第二語言習得 (SLA) 與腦神經科學組',
    titleEn: '1. SLA & Cognitive Neuroscience Panel',
    leadZh: '主持人：認知神經科學與第二語言習得研究團隊',
    leadEn: 'Lead: Cognitive Neuroscience & SLA Research Panel',
    icon: '🧠',
    color: '#3b82f6',
    theories: [
      {
        nameZh: 'Krashen i+1 可理解輸入假說 (Comprehensible Input)',
        nameEn: 'Krashen i+1 Comprehensible Input Hypothesis',
        descZh: '學習內容始終保持在大腦「稍作跳躍即可掌握」的最佳近側發展區 (ZPD)，避免過難產生焦慮，或過易產生無聊。',
        descEn: 'Keeps content in the learner\'s optimal Zone of Proximal Development (ZPD) for maximum natural acquisition.',
        appZh: '落實於「7天破冰」與「情境角色扮演」的漸進式難度梯度設計。',
        appEn: 'Implemented in the progressive scaffolding of 7-Day Fast-Track and Role-Play.'
      },
      {
        nameZh: 'Pimsleur 聽覺預備與影子跟讀法 (Auditory Priming & Shadowing)',
        nameEn: 'Pimsleur Auditory Priming & Shadowing Technique',
        descZh: '在視覺閱讀前先刺激威尼克聽覺中樞，並藉由毫秒級同步跟讀，重塑大腦運動皮質對越南語 6 聲調的肌肉記憶。',
        descEn: 'Stimulates Wernicke\'s area before visual reading; shadowing trains motor cortex speech kinesthetics.',
        appZh: '落實於「AI 跟讀評分模組」與「Audio-First 聽覺先行模式」。',
        appEn: 'Applied in the AI Shadowing module and Audio-First learning flow.'
      },
      {
        nameZh: 'Paivio 雙編碼理論 (Dual-Coding Theory)',
        nameEn: 'Paivio\'s Dual-Coding Multimodal Theory',
        descZh: '文字符號、聲調音高波形圖 (Pitch Contour)、色彩編碼與 Web Audio 合成音同步刺激，建立多維神經突觸連結。',
        descEn: 'Synchronizes textual orthography, visual pitch contours, color cues, and synthesized acoustics for robust retention.',
        appZh: '落實於「字母聲調卡片」與「Web Audio 6 調高低頻率合成器」。',
        appEn: 'Integrated in Alphabet & Tone cards and the 6-Tone harmonic pitch synthesizer.'
      }
    ]
  },
  {
    id: 'cognitive_hanviet',
    titleZh: '2. 認知語言學與漢越音音韻遷移組',
    titleEn: '2. Cognitive Linguistics & Han-Viet Transfer',
    leadZh: '主持人：台越對比語言學與漢越同源音韻研究群',
    leadEn: 'Lead: Sino-Vietnamese Etymology & Contrastive Phonetics Panel',
    icon: '🎓',
    color: '#8b5cf6',
    theories: [
      {
        nameZh: '漢越同源字根正遷移理論 (Han-Viet Cognate Positive Transfer)',
        nameEn: 'Han-Viet Cognate Positive Transfer Theory',
        descZh: '越南語中有 60% 至 70% 的詞彙來自中古漢語。繁體中文母語者自帶強大的認知優勢，透過音對應規律可瞬間解鎖數千詞彙。',
        descEn: '60%-70% of Vietnamese vocabulary originates from Classical Chinese. Learners leverage native intuition for 10x faster vocab acquisition.',
        appZh: '落實於「漢越音百大字根模組」與各情境詞彙的字根剖析。',
        appEn: 'Applied in the Han-Viet 100 Roots module and cognate annotations across the app.'
      },
      {
        nameZh: '南北方言音變規律解碼 (Regional Dialectal Phonology)',
        nameEn: 'Regional Dialectal Phonology & Accent Agility',
        descZh: '系統性梳理河內 6 聲調與西貢 5 聲調（Hỏi/Ngã 合流、D/V/R 擦音弱化）的音變矩陣，杜絕單一口音聽力盲區。',
        descEn: 'Systematic mapping of Northern 6-tone vs Southern 5-tone systems and consonant shifts for accent agility.',
        appZh: '落實於「南北口音一鍵無縫切換」與「方言補強專區」。',
        appEn: 'Engineered into the instant North/South accent toggle and dialect guide.'
      }
    ]
  },
  {
    id: 'memory_srs',
    titleZh: '3. 記憶工程與動態間隔重複 (SRS) 組',
    titleEn: '3. Memory Engineering & SM-2 SRS Panel',
    leadZh: '主持人：認知心理學與記憶曲線演算專家組',
    leadEn: 'Lead: Cognitive Psychology & Ebbinghaus Curve Algorithms Team',
    icon: '📈',
    color: '#10b981',
    theories: [
      {
        nameZh: 'Ebbinghaus 遺忘曲線臨界對抗 (Forgetting Curve Interception)',
        nameEn: 'Ebbinghaus Forgetting Curve Interception',
        descZh: '人類新學知識在 24 小時內會遺忘近 70%。SRS 演算法在記憶即將脫落的臨界點自動排程主動提取，鞏固長期記憶 (LTM)。',
        descEn: 'Interceps forgetting at the precise decay threshold to convert working memory into permanent long-term storage.',
        appZh: '落實於「SM-2 智能閃卡」與首頁「今日大腦記憶保鮮狀態」即時追蹤。',
        appEn: 'Powers the SM-2 Flashcard scheduler and Daily Retention Hub.'
      },
      {
        nameZh: '微學習與認知負荷理論 (Micro-Learning & Cognitive Load)',
        nameEn: 'Micro-Learning & Cognitive Load Optimization',
        descZh: '將龐雜文法拆解為 3–5 分鐘微型單元（Micro-units），避免工作記憶過載（Cognitive Overload），實現隨時隨地快樂學。',
        descEn: 'Bite-sized 3-5 minute modules minimize mental friction and maximize consistency.',
        appZh: '落實於全站所有 5–10 分鐘快速破冰單元與句子重組模組。',
        appEn: 'Designed into all 5-10 minute quick modules and the Sentence Builder.'
      }
    ]
  },
  {
    id: 'flow_gamification',
    titleZh: '4. 心流理論與八角行為心理學組',
    titleEn: '4. Flow State & Gamification Psychology (Octalysis)',
    leadZh: '主持人：遊戲化激勵心理學與心流體驗設計組',
    leadEn: 'Lead: Flow State & Motivational Game Mechanics Team',
    icon: '🎮',
    color: '#f59e0b',
    theories: [
      {
        nameZh: '即時正向回饋迴圈 (Immediate Dopamine Feedback Loop)',
        nameEn: 'Immediate Positive Audio-Visual Feedback Loop',
        descZh: '每次答對均伴隨 Web Audio API 合成的晶亮和弦音與上升音階，刺激大腦多巴胺分泌，維持高度專注與愉悅感。',
        descEn: 'Immediate musical chimes and combo melodies trigger dopamine rewards to maintain focus and joy.',
        appZh: '落實於「聲調聽力特訓」、「句子重組」與「iVPT 測驗」的全音效回饋。',
        appEn: 'Built into Tone Mastery Game, Sentence Builder, and Quiz modules.'
      },
      {
        nameZh: '14+ 成就勳章與連續打卡動能 (Octalysis Milestone Framework)',
        nameEn: 'Octalysis Milestone & Habit Momentum Framework',
        descZh: '以「進度可視化」、「階梯式勳章解鎖」與「連續天數火苗」激發學習者的內在驅動力與長期養成習慣。',
        descEn: 'Visual progress, milestone badges, and streak fire cultivate unstoppable learning habits.',
        appZh: '落實於「成就勳章展示櫃」與「Level Up 升級慶祝系統」。',
        appEn: 'Integrated in the Achievements Showcase and Level-Up celebrations.'
      }
    ]
  },
  {
    id: 'cross_cultural',
    titleZh: '5. 在地跨文化交際與語用學組',
    titleEn: '5. Cross-Cultural Pragmatics & Native Culture',
    leadZh: '主持人：台商跨國管理專家與河內/西貢文化顧問群',
    leadEn: 'Lead: Cross-Border Trade & Native Cultural Pragmatics Team',
    icon: '🇻🇳',
    color: '#ef4444',
    theories: [
      {
        nameZh: '親屬代名詞社會語用推算矩陣 (Kinship Socio-Pragmatics)',
        nameEn: 'Kinship Pronoun Socio-Pragmatic Matrix',
        descZh: '越南語稱謂是社會關係的溫度計。透過性別、相對年齡與職場位階的演算法推算，解決外國人最容易踩雷的社交困境。',
        descEn: 'Solves the #1 foreigner obstacle: calculating precise social pronouns (Anh/Chị/Em/Cô/Chú/Bác) effortlessly.',
        appZh: '落實於「稱謂智能推算器」與「7天破冰 Day 5 稱謂防踩雷指南」。',
        appEn: 'Implemented in the Pronoun Calculator and Fast-Track Day 5 guide.'
      },
      {
        nameZh: '真實生活情境生存語用 (High-Utility Survival Pragmatics)',
        nameEn: 'High-Utility Survival Pragmatics',
        descZh: '聚焦越南街頭、市場、咖啡館、計程車與商務談判最高頻的 26 大真實場景，讓學習者學完當天就能實戰運用。',
        descEn: 'Focuses on 26 authentic everyday scenarios: street food, bargaining, Grab rides, hotel, and trade.',
        appZh: '落實於「26 大實戰情境角色扮演」與「生活急救錦囊」。',
        appEn: 'Applied in the 26 Situational Scenarios, Role-Play, and Emergency Kit.'
      }
    ]
  }
];

export const ScientificMethodModule = () => {
  const { learningMode } = useLanguage();
  const [selectedRoutine, setSelectedRoutine] = useState('regular'); // 'casual' | 'regular' | 'intensive'
  const [activeTab, setActiveTab] = useState('panels'); // 'panels' | 'cycle' | 'planner'

  const playDemoChime = () => {
    audioEngine.playSuccessChime();
  };

  const playDemoFanfare = () => {
    audioEngine.playLevelUpFanfare();
  };

  const playDemoBadge = () => {
    audioEngine.playBadgeUnlockSound();
  };

  return (
    <div className="module-container scientific-method-module">
      {/* Header Banner */}
      <section className="science-hero" style={{
        background: 'linear-gradient(135deg, rgba(59,130,246,0.12) 0%, rgba(139,92,246,0.12) 50%, rgba(16,185,129,0.12) 100%)',
        border: '1.5px solid var(--border-color)',
        borderRadius: 'var(--radius-lg)',
        padding: '2rem',
        marginBottom: '2rem'
      }}>
        <div className="eyebrow" style={{ color: 'var(--brand-primary)', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800 }}>
          <Brain size={18} /> {learningMode === 'zh' ? '多學科科學研究團隊與認知學習法門戶' : 'Multidisciplinary Research & Cognitive Learning Lab'}
        </div>
        <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-primary)', margin: '0.4rem 0 0.6rem' }}>
          {learningMode === 'zh' ? '科學方法驅動 · 讓大眾快樂學好越南語' : 'Science-Backed Vietnamese Learning for Everyone'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '720px', lineHeight: 1.6, margin: 0, fontSize: '1.02rem' }}>
          {learningMode === 'zh'
            ? '本平台融合「第二語言習得 (SLA)」、「認知神經科學」、「漢越音音韻遷移」、「SM-2 遺忘曲線對抗」與「心流遊戲化心理學」，將枯燥死背轉化為愉悅、高效、自然的語言習得過程。'
            : 'Integrating SLA, cognitive neuroscience, Sino-Vietnamese cognate leverage, SM-2 retention curves, and flow-state gamification to make Vietnamese mastery effortless and joyful.'}
        </p>
      </section>

      {/* Navigation Sub-Tabs */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => setActiveTab('panels')}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'panels' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
            background: activeTab === 'panels' ? 'var(--bg-accent)' : 'var(--bg-card)',
            color: activeTab === 'panels' ? 'var(--brand-primary)' : 'var(--text-primary)',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <GraduationCap size={18} />
          {learningMode === 'zh' ? '五大多學科專家研究團隊' : '5 Expert Research Panels'}
        </button>

        <button
          onClick={() => setActiveTab('cycle')}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'cycle' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
            background: activeTab === 'cycle' ? 'var(--bg-accent)' : 'var(--bg-card)',
            color: activeTab === 'cycle' ? 'var(--brand-primary)' : 'var(--text-primary)',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Activity size={18} />
          {learningMode === 'zh' ? '四步黃金認知閉環 (四重奏)' : '4-Step Cognitive Loop'}
        </button>

        <button
          onClick={() => setActiveTab('planner')}
          style={{
            padding: '0.75rem 1.4rem',
            borderRadius: 'var(--radius-md)',
            border: activeTab === 'planner' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
            background: activeTab === 'planner' ? 'var(--bg-accent)' : 'var(--bg-card)',
            color: activeTab === 'planner' ? 'var(--brand-primary)' : 'var(--text-primary)',
            fontWeight: 800,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}
        >
          <Clock size={18} />
          {learningMode === 'zh' ? '個人化科學學習節奏診斷' : 'Personal Study Planner'}
        </button>
      </div>

      {/* TAB 1: 5 EXPERT RESEARCH PANELS */}
      {activeTab === 'panels' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          {RESEARCH_PANELS.map((panel) => (
            <div
              key={panel.id}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                padding: '1.75rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.03)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.4rem' }}>
                <span style={{ fontSize: '1.8rem' }}>{panel.icon}</span>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 900, color: 'var(--text-primary)' }}>
                    {learningMode === 'zh' ? panel.titleZh : panel.titleEn}
                  </h3>
                  <span style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 700 }}>
                    {learningMode === 'zh' ? panel.leadZh : panel.leadEn}
                  </span>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginTop: '1.25rem' }}>
                {panel.theories.map((th, tIdx) => (
                  <div
                    key={tIdx}
                    style={{
                      background: 'var(--bg-accent)',
                      border: '1px solid var(--border-color)',
                      borderRadius: 'var(--radius-md)',
                      padding: '1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      gap: '0.6rem'
                    }}
                  >
                    <div>
                      <h4 style={{ margin: '0 0 0.4rem', fontSize: '1.02rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                        🔬 {learningMode === 'zh' ? th.nameZh : th.nameEn}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                        {learningMode === 'zh' ? th.descZh : th.descEn}
                      </p>
                    </div>

                    <div style={{
                      marginTop: '0.5rem',
                      padding: '0.4rem 0.6rem',
                      background: 'var(--bg-card)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      color: 'var(--brand-green)',
                      border: '1px solid var(--border-color)'
                    }}>
                      ⚡ 系統落實：{learningMode === 'zh' ? th.appZh : th.appEn}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Web Audio Acoustic Feedback Live Sandbox */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(234,179,8,0.08) 0%, rgba(239,68,68,0.08) 100%)',
            border: '1.5px solid rgba(234,179,8,0.3)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.75rem',
            marginTop: '1rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--brand-gold)', fontWeight: 800, marginBottom: '0.5rem' }}>
              <Sparkles size={22} />
              <span style={{ fontSize: '1.2rem', color: 'var(--text-primary)' }}>
                {learningMode === 'zh' ? '🎮 多巴胺音效回饋實驗室 (Web Audio API 合成技術)' : '🎮 Dopamine Acoustic Feedback Lab'}
              </span>
            </div>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.92rem', lineHeight: 1.5, margin: '0 0 1rem' }}>
              {learningMode === 'zh'
                ? '試聽系統內建的原生合成音效。每當你答對題目、完成連擊、升級或解鎖勳章時，大腦都會獲得最即時的聽覺獎勵：'
                : 'Test the synthesized audio feedback designed to reward your brain during learning breakthroughs:'}
            </p>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <button className="secondary-action" onClick={playDemoChime} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}>
                <Volume2 size={16} /> 答對過關鈴聲 (Success Chime)
              </button>
              <button className="secondary-action" onClick={playDemoBadge} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}>
                <Sparkles size={16} /> 成就解鎖音效 (Badge Sparkle)
              </button>
              <button className="secondary-action" onClick={playDemoFanfare} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1rem' }}>
                <Award size={16} /> 等級晉升號角 (Level Up Fanfare)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: 4-STEP COGNITIVE LOOP */}
      {activeTab === 'cycle' && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem'
        }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {learningMode === 'zh' ? '科學驗證：從零基礎到自主對話的「四步黃金認知閉環」' : 'The 4-Step Golden Cognitive Acquisition Loop'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '2rem' }}>
            {learningMode === 'zh'
              ? '擺脫傳統死背生詞的低效痛苦，本系統為每個知識點打造「輸入 → 解碼 → 迴音跟讀 → 主動輸出」完整閉環：'
              : 'Escape rote memorization through our 4-stage neurological loop: Input -> Decode -> Echo -> Produce.'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>
            <div style={{ padding: '1.5rem', background: 'var(--bg-accent)', borderRadius: 'var(--radius-md)', borderTop: '4px solid #3b82f6' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎧</div>
              <h4 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem', fontWeight: 800 }}>
                1. 聽覺感知 (Acoustic Input)
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                拒絕啞巴外語。在看文字前先聽真人/高音質發音與聲調頻率圖，活化大腦聽覺皮質對 6 聲調的敏感度。
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-accent)', borderRadius: 'var(--radius-md)', borderTop: '4px solid #8b5cf6' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🔍</div>
              <h4 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem', fontWeight: 800 }}>
                2. 漢越解碼 (Han-Viet Decode)
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                啟動母語認知槓桿！將越語拼音與漢字同源字根秒速映射（如 Quốc 國, Học 學），理解詞源無痛牢記。
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-accent)', borderRadius: 'var(--radius-md)', borderTop: '4px solid #10b981' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🎙️</div>
              <h4 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem', fontWeight: 800 }}>
                3. 影子跟讀 (Shadowing Echo)
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                跟隨母語者語速同步模仿開口，訓練舌尖、口腔共鳴與喉頭肌肉群，打磨道地南北口音。
              </p>
            </div>

            <div style={{ padding: '1.5rem', background: 'var(--bg-accent)', borderRadius: 'var(--radius-md)', borderTop: '4px solid #f59e0b' }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💬</div>
              <h4 style={{ margin: '0 0 0.4rem', fontSize: '1.1rem', fontWeight: 800 }}>
                4. 情境產出 (Active Production)
              </h4>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                在 26 大情境角色扮演、句子重組與 SM-2 間隔重複中進行主動提取，將短期記憶轉化為肌肉直覺反射。
              </p>
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: STUDY PLANNER */}
      {activeTab === 'planner' && (
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '2rem'
        }}>
          <h3 style={{ fontSize: '1.35rem', fontWeight: 900, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
            {learningMode === 'zh' ? '個人化學習節奏診斷與每日建議' : 'Personal Study Planner & Daily Routine Recommendation'}
          </h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
            {learningMode === 'zh'
              ? '依照您的時間與學習目標，選擇最適合您的科學排程：'
              : 'Choose the scientific daily schedule that fits your daily lifestyle:'}
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
            <div
              onClick={() => setSelectedRoutine('casual')}
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: selectedRoutine === 'casual' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: selectedRoutine === 'casual' ? 'var(--bg-accent)' : 'var(--bg-card)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>🌱</div>
              <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 800 }}>
                輕鬆休閒型 (每日 5 分鐘)
              </h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--brand-primary)', fontWeight: 700, marginBottom: '0.6rem' }}>
                目標：旅行生存 / 興趣嚐鮮 / 日常無壓力
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>完成 1 天「7天生活速成」金句 (2 min)</li>
                <li>玩 1 場「聲調聽力特訓」小遊戲 (2 min)</li>
                <li>複習 5 張 SM-2 智能閃卡 (1 min)</li>
              </ul>
            </div>

            <div
              onClick={() => setSelectedRoutine('regular')}
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: selectedRoutine === 'regular' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: selectedRoutine === 'regular' ? 'var(--bg-accent)' : 'var(--bg-card)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>⚡</div>
              <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 800 }}>
                穩健實戰型 (每日 15 分鐘 · 推薦)
              </h4>
              <div style={{ fontSize: '0.85rem', color: 'var(--brand-green)', fontWeight: 700, marginBottom: '0.6rem' }}>
                目標：流暢生活溝通 / 赴越出差旅遊
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>學習 1 個實戰情境對話 + 角色扮演 (6 min)</li>
                <li>進行 3 句 AI 影子跟讀發音打磨 (4 min)</li>
                <li>完成 5 組漢越音字根拆解 (3 min)</li>
                <li>清空今日 SM-2 到期閃卡 (2 min)</li>
              </ul>
            </div>

            <div
              onClick={() => setSelectedRoutine('intensive')}
              style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-md)',
                border: selectedRoutine === 'intensive' ? '2px solid var(--brand-primary)' : '1px solid var(--border-color)',
                background: selectedRoutine === 'intensive' ? 'var(--bg-accent)' : 'var(--bg-card)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ fontSize: '1.8rem', marginBottom: '0.3rem' }}>🔥</div>
              <h4 style={{ margin: '0 0 0.3rem', fontSize: '1.1rem', fontWeight: 800 }}>
                極速沉浸型 (每日 30 分鐘)
              </h4>
              <div style={{ fontSize: '0.85rem', color: '#ef4444', fontWeight: 700, marginBottom: '0.6rem' }}>
                目標：iVPT 檢定通關 / 越南經商管理
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <li>完整精讀商務與 FDI 深度情境 (10 min)</li>
                <li>完成 1 回 iVPT 全真模擬檢定測驗 (10 min)</li>
                <li>語法拼句特訓 + 漢越音高階字根 (6 min)</li>
                <li>深度跟讀與南北口音對比聽力 (4 min)</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScientificMethodModule;
