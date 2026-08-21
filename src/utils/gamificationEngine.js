/**
 * gamificationEngine.js
 * Handles Octalysis gamification logic (XP, Levels, Streaks, Daily Progress, Achievements).
 */

export const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 12000, 18000
];

export const DAILY_GOAL_PRESETS = [
  { id: 'casual', labelZh: '輕鬆休閒 (5分鐘)', labelEn: 'Casual (5 min)', targetXp: 30, icon: '🌱' },
  { id: 'regular', labelZh: '標準穩健 (15分鐘)', labelEn: 'Regular (15 min)', targetXp: 80, icon: '⚡' },
  { id: 'intensive', labelZh: '極速沉浸 (30分鐘)', labelEn: 'Intensive (30 min)', targetXp: 150, icon: '🔥' }
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
   * @param {number} xp 
   * @returns {number} Current level (1-indexed)
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
   * @param {number} xp 
   * @returns {Object} { currentXpInLevel, requiredXpForNextLevel, progressPercent }
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
   * Process login to calculate streak
   * @param {string} lastLoginDateString 
   * @param {number} currentStreak 
   * @returns {Object} { newStreak, newLastLoginDate, streakUpdated }
   */
  processLoginStreak: (lastLoginDateString, currentStreak) => {
    const today = new Date().toDateString();
    
    if (!lastLoginDateString) {
      return { newStreak: 1, newLastLoginDate: today, streakUpdated: true };
    }

    if (lastLoginDateString === today) {
      return { newStreak: currentStreak, newLastLoginDate: today, streakUpdated: false };
    }

    const lastDate = new Date(lastLoginDateString);
    const currentDate = new Date(today);
    const diffTime = Math.abs(currentDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays === 1) {
      return { newStreak: currentStreak + 1, newLastLoginDate: today, streakUpdated: true };
    } else {
      return { newStreak: 1, newLastLoginDate: today, streakUpdated: true };
    }
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
   * @param {Object} stats - { xp, streak, ... }
   * @param {Object} event - Optional triggering event { type, combo, day, score, ... }
   * @returns {Array} List of newly unlocked achievements
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
   * @returns {boolean}
   */
  isCriticalSuccess: () => {
    return Math.random() < 0.10;
  }
};

export default gamificationEngine;
