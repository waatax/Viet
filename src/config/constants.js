// Centralized localStorage key management
export const STORAGE_KEYS = {
  THEME: 'viet_theme',
  FONT_SIZE: 'viet_fontsize',
  ACCENT: 'viet_accent',
  USER_STATS: 'viet_user_stats',
  SUBSYSTEM: 'viet_learning_subsystem',
  PATH_PROGRESS: 'viet_path_progress',
  SAVED_PHRASES: 'viet_saved_phrases',
  MASTERED_CARDS: 'viet_mastered_cards',
};

// Default values
export const DEFAULTS = {
  THEME: 'dark',
  FONT_SIZE: 'normal',
  ACCENT: 'north',  // Standard Vietnamese (Hanoi)
  USER_STATS: { streak: 1, xp: 80, masteredWords: [] },
};
