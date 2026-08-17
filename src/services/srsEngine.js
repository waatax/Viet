/**
 * srsEngine.js
 * Implementation of SuperMemo-2 (SM-2) Spaced Repetition Algorithm.
 */

export const srsEngine = {
  /**
   * Initialize or get SRS data from localStorage
   */
  loadSrsData: () => {
    try {
      const data = localStorage.getItem('viet_srs_data');
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  /**
   * Save SRS data to localStorage
   */
  saveSrsData: (data) => {
    try {
      localStorage.setItem('viet_srs_data', JSON.stringify(data));
    } catch (e) {
      console.error("Failed to save SRS data", e);
    }
  },

  /**
   * Calculate next interval and ease factor based on SM-2 algorithm.
   * @param {Object} cardData - { easeFactor, interval, repetitions, dueDate }
   * @param {number} quality - Rating from 0 to 5 (0: Again, 3: Hard, 4: Good, 5: Easy)
   * @returns {Object} Updated card data
   */
  calculateSM2: (cardData, quality) => {
    let { easeFactor = 2.5, interval = 0, repetitions = 0 } = cardData || {};

    if (quality >= 3) {
      // Pass
      if (repetitions === 0) {
        interval = 1;
      } else if (repetitions === 1) {
        interval = 6;
      } else {
        interval = Math.round(interval * easeFactor);
      }
      repetitions += 1;
    } else {
      // Fail
      repetitions = 0;
      interval = 1;
    }

    // Adjust ease factor
    easeFactor = easeFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
    if (easeFactor < 1.3) easeFactor = 1.3;

    // Calculate next due date
    const dueDate = Date.now() + interval * 24 * 60 * 60 * 1000;

    return {
      easeFactor,
      interval,
      repetitions,
      dueDate
    };
  },

  /**
   * Process a card review and save it to storage
   * @param {string|number} cardId 
   * @param {number} quality 0-5
   * @returns {Object} updated card data
   */
  reviewCard: (cardId, quality) => {
    const srsData = srsEngine.loadSrsData();
    const currentData = srsData[cardId] || {};
    
    const updatedData = srsEngine.calculateSM2(currentData, quality);
    srsData[cardId] = updatedData;
    
    srsEngine.saveSrsData(srsData);
    return updatedData;
  }
};
