/**
 * gamificationEngine.js
 * Handles Octalysis gamification logic (XP, Levels, Streaks, Daily Progress).
 */

const LEVEL_THRESHOLDS = [
  0, 100, 250, 500, 1000, 2000, 3500, 5500, 8000, 12000, 18000
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
    
    // If max level reached
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
   * @returns {Object} { newStreak, newLastLoginDate }
   */
  processLoginStreak: (lastLoginDateString, currentStreak) => {
    const today = new Date().toDateString();
    
    if (!lastLoginDateString) {
      return { newStreak: 1, newLastLoginDate: today, streakUpdated: true };
    }

    if (lastLoginDateString === today) {
      // Already logged in today, no change
      return { newStreak: currentStreak, newLastLoginDate: today, streakUpdated: false };
    }

    const lastDate = new Date(lastLoginDateString);
    const currentDate = new Date(today);
    
    // Calculate difference in days (ignoring time)
    const diffTime = Math.abs(currentDate - lastDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 

    if (diffDays === 1) {
      // Consecutive day
      return { newStreak: currentStreak + 1, newLastLoginDate: today, streakUpdated: true };
    } else {
      // Streak broken
      return { newStreak: 1, newLastLoginDate: today, streakUpdated: true };
    }
  },

  /**
   * Check if a 10% critical success triggers
   * @returns {boolean}
   */
  isCriticalSuccess: () => {
    return Math.random() < 0.10; // 10% chance
  }
};
