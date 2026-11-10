/**
 * srsEngine.js
 * Storage wrapper for spaced-repetition data. The scheduling maths lives in flashcardScheduler.js
 * so every surface (flashcards, topic decks, learning path stats) schedules a card the same way.
 */
import { schedule, RATING_QUALITY } from './flashcardScheduler.js';

const STORAGE_KEY = 'viet_srs_data';

export const srsEngine = {
  loadSrsData: () => {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      return data ? JSON.parse(data) : {};
    } catch {
      return {};
    }
  },

  saveSrsData: (data) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save SRS data', e);
    }
  },

  /**
   * @param {Object} cardData - { easeFactor, interval, repetitions, dueDate }
   * @param {number|string} quality - 0..5, or 'again' | 'hard' | 'good' | 'easy'
   */
  calculateSM2: (cardData, quality) => schedule(cardData, quality),

  reviewCard: (cardId, quality) => {
    const srsData = srsEngine.loadSrsData();
    const updatedData = schedule(srsData[cardId] || {}, quality);
    srsData[cardId] = updatedData;
    srsEngine.saveSrsData(srsData);
    return updatedData;
  },

  /** Accepts the rating names used by topic decks ('again' | 'hard' | 'good' | 'easy'). */
  recordReview: (cardId, rating) => srsEngine.reviewCard(cardId, typeof rating === 'string' ? (RATING_QUALITY[rating] ?? 4) : rating)
};
