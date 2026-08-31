/**
 * gamificationEngine.js
 * Handles Octalysis gamification logic (XP, Levels, Streaks, Daily Quests, Streak Shields, Achievements).
 */

export const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 12000, 18000, 25000, 35000
];

export const DAILY_GOAL_PRESETS = [
  { id: 'casual', labelZh: '輕鬆休閒 (5分鐘)', labelEn: 'Casual (5 min)', targetXp: 30, icon: '🌱' },
  { id: 'regular', labelZh: '標準穩健 (15分鐘)', labelEn: 'Regular (15 min)', targetXp: 80, icon: '⚡' },
  { id: 'intensive', labelZh: '極速沉浸 (30分鐘)', labelEn: 'Intensive (30 min)', targetXp: 150, icon: '🔥' }
];

export const QUEST_POOL = [
  {
    id: 'quest_negotiation',
    icon: '🥊',
    titleZh: '完成一場商務談判決戰',
    titleEn: 'Complete a Business Negotiation Battle',
    descZh: '在商務競技場中與越南夥伴達成雙贏合作協議',
    descEn: 'Achieve a win-win deal in the Negotiation Arena',
    target: 1,
    category: 'business',
    rewardXp: 40,
    checkEvent: (event) => event?.type === 'BUSINESS_DEAL_WON'
  },
  {
    id: 'quest_currency_blitz',
    icon: '⚡',
    titleZh: '百萬貨幣極速盲測達 3 連擊',
    titleEn: 'Achieve 3+ Combo in Currency Blitz',
    descZh: '在 10 秒倒數計時中正確換算越南盾與黑話',
    descEn: 'Decode VND amounts and slang in rapid-fire mode',
    target: 1,
    category: 'currency',
    rewardXp: 35,
    checkEvent: (event) => event?.type === 'CURRENCY_BLITZ_STREAK' && event.combo >= 3
  },
  {
    id: 'quest_srs_review',
    icon: '🧠',
    titleZh: '完成 5 張 SM-2 智能閃卡複習',
    titleEn: 'Review 5 SM-2 Flashcards',
    descZh: '強化大腦神經元長期記憶保存率',
    descEn: 'Boost long-term retention with spaced repetition',
    target: 5,
    category: 'memory',
    rewardXp: 30,
    checkEvent: (event) => event?.type === 'SRS_CARD_REVIEWED'
  },
  {
    id: 'quest_tone_game',
    icon: '🎵',
    titleZh: '聲調聽力特訓 3 連勝',
    titleEn: '3-Streak in Tone Mastery Game',
    descZh: '精準辨識平玄銳問跌重 6 大聲調',
    descEn: 'Identify Vietnamese tones accurately',
    target: 1,
    category: 'phonetics',
    rewardXp: 35,
    checkEvent: (event) => event?.type === 'TONE_COMBO' && event.combo >= 3
  },
  {
    id: 'quest_sentence_build',
    icon: '🧩',
    titleZh: '成功拼裝 3 句完整越南語',
    titleEn: 'Construct 3 Vietnamese Sentences',
    descZh: '在拼句特訓中精準掌握 SVO 與後置修飾語法',
    descEn: 'Assemble full sentences with post-modifier syntax',
    target: 3,
    category: 'grammar',
    rewardXp: 35,
    checkEvent: (event) => event?.type === 'SENTENCE_BUILD_ONE'
  },
  {
    id: 'quest_shadowing',
    icon: '🎙️',
    titleZh: '完成 1 句真人語速影子跟讀',
    titleEn: 'Complete 1 AI Shadowing Practice',
    descZh: '開口跟讀母語音檔並取得 75 分以上成績',
    descEn: 'Speak out loud and achieve 75%+ shadowing score',
    target: 1,
    category: 'phonetics',
    rewardXp: 40,
    checkEvent: (event) => event?.type === 'SHADOWING_DONE' && event.score >= 75
  }
];

export const ACHIEVEMENTS_LIST = [
  {
    id: 'first_step',
    icon: '🚀',
    titleZh: '啟航第一步',
    titleEn: 'First Steps',
    descZh: '完成首次越語學習練習，獲得第一個 XP！',
    descEn: 'Completed your very first Vietnamese exercise and earned XP!',
    category: 'milestone',
    bonusXp: 20,
    check: (stats) => (stats.xp || 0) > 0
  },
  {
    id: 'deal_maker',
    icon: '💼',
    titleZh: '商務談判大師',
    titleEn: 'Master Negotiator',
    descZh: '在商業談判競技場中贏得雙贏合約並獲得 80%+ 夥伴信任！',
    descEn: 'Won a strategic business deal with 80%+ partner trust!',
    category: 'business',
    bonusXp: 60,
    check: (stats, event) => event?.type === 'BUSINESS_DEAL_WON' && event.trust >= 80
  },
  {
    id: 'vat_master',
    icon: '🧾',
    titleZh: '加值稅發票專家',
    titleEn: 'VAT Invoice Master',
    descZh: '完全掌握加值稅紅發票 (Hóa đơn đỏ) 開立四要素與稅號報帳！',
    descEn: 'Mastered official VAT Red Invoice issuance and MST tax filings!',
    category: 'business',
    bonusXp: 50,
    check: (stats, event) => event?.type === 'VAT_STUDIED'
  },
  {
    id: 'nhau_legend',
    icon: '🍻',
    titleZh: '酒桌千杯不醉',
    titleEn: 'Nhậu Legend',
    descZh: '熟稔越南 1-2-3 Dô 乾杯禮儀與優雅擋酒應酬話術！',
    descEn: 'Mastered Vietnamese 1-2-3 Dô toasts and tactful alcohol moderation!',
    category: 'social',
    bonusXp: 45,
    check: (stats, event) => event?.type === 'NHAU_STUDIED'
  },
  {
    id: 'factory_boss',
    icon: '🏭',
    titleZh: '智慧產線指揮官',
    titleEn: 'Factory Plant Boss',
    descZh: '掌握工業區、工安防護、品管 KCS 與產線排班全套越語指令！',
    descEn: 'Mastered industrial park, EHS, QC, and shift production directives!',
    category: 'business',
    bonusXp: 50,
    check: (stats, event) => event?.type === 'FACTORY_STUDIED'
  },
  {
    id: 'currency_blitz_master',
    icon: '⚡',
    titleZh: '百萬心算神手',
    titleEn: 'Currency Blitz Master',
    descZh: '在百萬貨幣極速盲測中達成 5 連擊 (Combo 5+)，黑話秒換算！',
    descEn: 'Achieved a 5+ Combo in the Rapid Currency & Slang Blitz!',
    category: 'survival',
    bonusXp: 50,
    check: (stats, event) => event?.type === 'CURRENCY_BLITZ_STREAK' && event.combo >= 5
  },
  {
    id: 'quest_champion',
    icon: '🎯',
    titleZh: '每日任務全壘打',
    titleEn: 'Daily Quest Champion',
    descZh: '成功通關並領取當日全部 3 項每日階梯式挑戰任務！',
    descEn: 'Completed and claimed all 3 daily quests in a single day!',
    category: 'habit',
    bonusXp: 60,
    check: (stats, event) => event?.type === 'QUEST_ALL_CLAIMED'
  },
  {
    id: 'shield_guardian',
    icon: '🛡️',
    titleZh: '時空守護者',
    titleEn: 'Streak Shield Guardian',
    descZh: '擁有或啟動連續打卡防護罩，守護累積的學習火焰！',
    descEn: 'Activated a Streak Shield to protect continuous learning momentum!',
    category: 'habit',
    bonusXp: 30,
    check: (stats, event) => event?.type === 'SHIELD_USED' || event?.type === 'SHIELD_BOUGHT'
  },
  {
    id: 'tone_hunter',
    icon: '🎵',
    titleZh: '聲調聽力耳',
    titleEn: 'Tone Hunter',
    descZh: '在聲調聽力特訓中達成 5 連擊 (Combo 5+)',
    descEn: 'Achieved a 5+ Combo in the Tone Mastery Game!',
    category: 'phonetics',
    bonusXp: 40,
    check: (stats, event) => event?.type === 'TONE_COMBO' && event.combo >= 5
  },
  {
    id: 'coffee_master',
    icon: '☕',
    titleZh: '咖啡點餐達人',
    titleEn: 'Cafe Connoisseur',
    descZh: '掌握經典越南咖啡 (Cà phê sữa đá) 與點餐短句',
    descEn: 'Mastered Vietnamese iced milk coffee and ordering expressions',
    category: 'survival',
    bonusXp: 30,
    check: (stats, event) => event?.type === 'FAST_TRACK_DAY' && event.day === 2
  },
  {
    id: 'bargain_king',
    icon: '💵',
    titleZh: '市場殺價王',
    titleEn: 'Bargaining Master',
    descZh: '掌握數字百萬換算與市場殺價句型',
    descEn: 'Mastered number conversion and market bargaining phrases',
    category: 'survival',
    bonusXp: 35,
    check: (stats, event) => event?.type === 'FAST_TRACK_DAY' && event.day === 3
  },
  {
    id: 'pronoun_guru',
    icon: '👥',
    titleZh: '稱謂社交大師',
    titleEn: 'Pronoun Guru',
    descZh: '完全掌握 Anh/Chị/Em/Cô/Chú 稱謂系統，社交零踩雷',
    descEn: 'Mastered social kinship pronouns with zero social awkwardness',
    category: 'social',
    bonusXp: 40,
    check: (stats, event) => event?.type === 'PRONOUN_PRACTICE' || (event?.type === 'FAST_TRACK_DAY' && event.day === 5)
  },
  {
    id: 'hanviet_decoder',
    icon: '📖',
    titleZh: '漢越字根解碼王',
    titleEn: 'Han-Viet Decoder',
    descZh: '掌握 10 組以上漢越音同源字根，啟動乘數背詞優勢',
    descEn: 'Mastered 10+ Han-Viet cognate roots for exponential vocab growth',
    category: 'cognitive',
    bonusXp: 50,
    check: (stats, event) => event?.type === 'HANVIET_STUDIED' && (event.count >= 10 || (stats.hanvietCount || 0) >= 10)
  },
  {
    id: 'shadowing_star',
    icon: '🎙️',
    titleZh: '影子跟讀新星',
    titleEn: 'Shadowing Star',
    descZh: '完成 5 句真人語速 AI 影子跟讀評分',
    descEn: 'Completed 5 native-speed AI Shadowing phrases',
    category: 'phonetics',
    bonusXp: 45,
    check: (stats, event) => event?.type === 'SHADOWING_DONE' && event.score >= 80
  },
  {
    id: 'sentence_architect',
    icon: '🧩',
    titleZh: '句型結構拼裝師',
    titleEn: 'Sentence Architect',
    descZh: '成功重組 10 句完整越南語語法句子',
    descEn: 'Successfully reconstructed 10 complete Vietnamese sentences',
    category: 'grammar',
    bonusXp: 40,
    check: (stats, event) => event?.type === 'SENTENCE_BUILD_STREAK' && event.count >= 5
  },
  {
    id: 'srs_champion',
    icon: '🧠',
    titleZh: '記憶曲線征服者',
    titleEn: 'Retention Champion',
    descZh: '在 SM-2 智能閃卡中完成今日全部到期複習單字',
    descEn: 'Completed all due cards in SM-2 Spaced Repetition today',
    category: 'memory',
    bonusXp: 50,
    check: (stats, event) => event?.type === 'SRS_SESSION_COMPLETE'
  },
  {
    id: 'streak_3',
    icon: '⚡',
    titleZh: '連續打卡 3 天',
    titleEn: '3-Day Momentum',
    descZh: '維持連續 3 天學習不中斷，大腦神經元持續連結！',
    descEn: 'Maintained a 3-day study streak. Neural connections are firing!',
    category: 'habit',
    bonusXp: 50,
    check: (stats) => (stats.streak || 0) >= 3
  },
  {
    id: 'streak_7',
    icon: '🔥',
    titleZh: '連續打卡 7 天',
    titleEn: '7-Day Habit Master',
    descZh: '達成一週連續學習里程碑，習慣已經自然養成！',
    descEn: '1 full week uninterrupted streak. Learning has become a habit!',
    category: 'habit',
    bonusXp: 100,
    check: (stats) => (stats.streak || 0) >= 7
  },
  {
    id: 'level_5',
    icon: '🏆',
    titleZh: '越語先鋒 (Lv. 5)',
    titleEn: 'Pioneer (Lv. 5)',
    descZh: '總經驗值突破 1000 XP，晉升至等級 5！',
    descEn: 'Earned 1000+ XP and ascended to Level 5!',
    category: 'milestone',
    bonusXp: 100,
    check: (stats) => (stats.xp || 0) >= 1000
  },
  {
    id: 'fast_track_champion',
    icon: '👑',
    titleZh: '7天破冰全通關',
    titleEn: '7-Day Survival Master',
    descZh: '通關 7 天生活速成破冰計畫所有情境，具備基本溝通力！',
    descEn: 'Completed all 7 days of the Survival Fast-Track curriculum!',
    category: 'survival',
    bonusXp: 150,
    check: (stats, event) => event?.type === 'FAST_TRACK_ALL_COMPLETE'
  },
  {
    id: 'ivpt_warrior',
    icon: '🎖️',
    titleZh: 'iVPT 實戰勇者',
    titleEn: 'iVPT Warrior',
    descZh: '在 iVPT 全真模擬測驗中獲得滿分或 90% 以上佳績',
    descEn: 'Scored 90%+ in the iVPT standardized certification practice',
    category: 'exam',
    bonusXp: 60,
    check: (stats, event) => event?.type === 'QUIZ_PERFECT'
  }
];

export const gamificationEngine = {
  /**
   * Calculate user level based on total XP
   */
  calculateLevel: (xp) => {
    let level = 1;
    for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
      if (xp >= LEVEL_THRESHOLDS[i]) {
        level = i + 1;
      } else {
        break;
      }
    }
    return level;
  },

  /**
   * Get progress to the next level
   */
  getLevelProgress: (xp) => {
    const currentLevel = gamificationEngine.calculateLevel(xp);
    const currentThreshold = LEVEL_THRESHOLDS[currentLevel - 1];
    
    if (currentLevel >= LEVEL_THRESHOLDS.length) {
      return { currentXpInLevel: xp - currentThreshold, requiredXpForNextLevel: 0, progressPercent: 100 };
    }
    
    const nextThreshold = LEVEL_THRESHOLDS[currentLevel];
    const requiredXpForNextLevel = nextThreshold - currentThreshold;
    const currentXpInLevel = xp - currentThreshold;
    const progressPercent = Math.min(100, Math.round((currentXpInLevel / requiredXpForNextLevel) * 100));
    
    return { currentXpInLevel, requiredXpForNextLevel, progressPercent };
  },

  /**
   * Load streak shields count from localStorage
   */
  loadStreakShields: () => {
    try {
      const saved = localStorage.getItem('viet_streak_shields');
      return saved !== null ? parseInt(saved, 10) : 1; // Default 1 free shield
    } catch {
      return 1;
    }
  },

  /**
   * Save streak shields count to localStorage
   */
  saveStreakShields: (count) => {
    try {
      localStorage.setItem('viet_streak_shields', count.toString());
    } catch (e) {
      // ignore
    }
  },

  /**
   * Buy a streak shield using XP
   */
  buyStreakShield: (currentXp, shieldCost = 120) => {
    if (currentXp < shieldCost) {
      return { success: false, reason: 'NOT_ENOUGH_XP' };
    }
    const currentShields = gamificationEngine.loadStreakShields();
    if (currentShields >= 3) {
      return { success: false, reason: 'MAX_SHIELDS' };
    }
    gamificationEngine.saveStreakShields(currentShields + 1);
    return { success: true, newShields: currentShields + 1, remainingXp: currentXp - shieldCost };
  },

  /**
   * Process login to calculate streak with Streak Shield Auto-Protection
   */
  processLoginStreak: (lastLoginDateString, currentStreak) => {
    const today = new Date().toDateString();
    
    if (!lastLoginDateString) {
      return { newStreak: 1, newLastLoginDate: today, streakUpdated: true, shieldConsumed: false };
    }

    if (lastLoginDateString === today) {
      return { newStreak: currentStreak, newLastLoginDate: today, streakUpdated: false, shieldConsumed: false };
    }

    const lastDate = new Date(lastLoginDateString);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays === 1) {
      return { newStreak: currentStreak + 1, newLastLoginDate: today, streakUpdated: true, shieldConsumed: false };
    } else {
      // Missed 1+ days: Check if streak shield is available
      const shields = gamificationEngine.loadStreakShields();
      if (shields > 0 && currentStreak > 1) {
        gamificationEngine.saveStreakShields(shields - 1);
        return { 
          newStreak: currentStreak, // Shield preserved streak!
          newLastLoginDate: today, 
          streakUpdated: true, 
          shieldConsumed: true 
        };
      } else {
        return { newStreak: 1, newLastLoginDate: today, streakUpdated: true, shieldConsumed: false };
      }
    }
  },

  /**
   * Load or generate 3 deterministic daily quests for today
   */
  getDailyQuests: () => {
    const todayStr = new Date().toISOString().slice(0, 10);
    try {
      const saved = localStorage.getItem('viet_daily_quests');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.date === todayStr && Array.isArray(parsed.quests)) {
          return parsed.quests;
        }
      }
    } catch (e) {
      // ignore
    }

    // Generate 3 quests based on date hash
    let hash = 0;
    for (let i = 0; i < todayStr.length; i++) {
      hash = (hash << 5) - hash + todayStr.charCodeAt(i);
      hash |= 0;
    }
    const absHash = Math.abs(hash);

    const selectedIdxs = [
      absHash % QUEST_POOL.length,
      (absHash + 2) % QUEST_POOL.length,
      (absHash + 4) % QUEST_POOL.length
    ];

    // Ensure unique 3 quests
    const uniqueQuests = [];
    const used = new Set();
    selectedIdxs.forEach(idx => {
      let cur = idx;
      while (used.has(cur)) {
        cur = (cur + 1) % QUEST_POOL.length;
      }
      used.add(cur);
      const baseQuest = QUEST_POOL[cur];
      uniqueQuests.push({
        id: baseQuest.id,
        icon: baseQuest.icon,
        titleZh: baseQuest.titleZh,
        titleEn: baseQuest.titleEn,
        descZh: baseQuest.descZh,
        descEn: baseQuest.descEn,
        target: baseQuest.target,
        progress: 0,
        rewardXp: baseQuest.rewardXp,
        completed: false,
        claimed: false
      });
    });

    const questData = { date: todayStr, quests: uniqueQuests };
    try {
      localStorage.setItem('viet_daily_quests', JSON.stringify(questData));
    } catch (e) {
      // ignore
    }

    return uniqueQuests;
  },

  /**
   * Update daily quest progress based on action event
   */
  processQuestEvent: (event) => {
    if (!event || !event.type) return { updatedQuests: [], newlyCompleted: [] };
    const quests = gamificationEngine.getDailyQuests();
    let hasChanges = false;
    const newlyCompleted = [];

    const updated = quests.map(q => {
      if (q.completed) return q;
      const base = QUEST_POOL.find(p => p.id === q.id);
      if (base && base.checkEvent && base.checkEvent(event)) {
        const increment = event.increment || 1;
        const newProgress = Math.min(q.target, q.progress + increment);
        const isNowCompleted = newProgress >= q.target;
        if (isNowCompleted && !q.completed) {
          newlyCompleted.push(q);
        }
        hasChanges = true;
        return {
          ...q,
          progress: newProgress,
          completed: isNowCompleted
        };
      }
      return q;
    });

    if (hasChanges) {
      const todayStr = new Date().toISOString().slice(0, 10);
      try {
        localStorage.setItem('viet_daily_quests', JSON.stringify({ date: todayStr, quests: updated }));
      } catch (e) {
        // ignore
      }
    }

    return { updatedQuests: updated, newlyCompleted };
  },

  /**
   * Claim reward for a completed daily quest
   */
  claimDailyQuest: (questId) => {
    const quests = gamificationEngine.getDailyQuests();
    let claimedXp = 0;
    let allClaimed = false;

    const updated = quests.map(q => {
      if (q.id === questId && q.completed && !q.claimed) {
        claimedXp = q.rewardXp;
        return { ...q, claimed: true };
      }
      return q;
    });

    allClaimed = updated.every(q => q.claimed);

    const todayStr = new Date().toISOString().slice(0, 10);
    try {
      localStorage.setItem('viet_daily_quests', JSON.stringify({ date: todayStr, quests: updated }));
    } catch (e) {
      // ignore
    }

    return { success: claimedXp > 0, claimedXp, allClaimed, updatedQuests: updated };
  },

  /**
   * Load unlocked achievements from localStorage
   */
  loadUnlockedAchievements: () => {
    try {
      const saved = localStorage.getItem('viet_unlocked_achievements');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  },

  /**
   * Check for newly unlocked achievements
   */
  checkAchievements: (stats, event = null) => {
    const unlockedIds = new Set(gamificationEngine.loadUnlockedAchievements());
    const newlyUnlocked = [];

    ACHIEVEMENTS_LIST.forEach(ach => {
      if (!unlockedIds.has(ach.id)) {
        try {
          if (ach.check(stats, event)) {
            unlockedIds.add(ach.id);
            newlyUnlocked.push(ach);
          }
        } catch {
          // ignore
        }
      }
    });

    if (newlyUnlocked.length > 0) {
      localStorage.setItem('viet_unlocked_achievements', JSON.stringify(Array.from(unlockedIds)));
    }

    return newlyUnlocked;
  },

  /**
   * Check if a 10% critical success triggers
   */
  isCriticalSuccess: () => {
    return Math.random() < 0.10;
  }
};

export default gamificationEngine;
