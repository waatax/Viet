/**
 * bookmarkService.js
 * Centralized, reactive bookmarking and personal word bank service.
 * Supports vocabulary, situational phrases, business clauses, grammar rules, and emergency cards.
 */

const STORAGE_KEY = 'viet_global_bookmarks';
const LEGACY_STORAGE_KEY = 'viet_saved_phrases';

class BookmarkService {
  constructor() {
    this.bookmarks = [];
    this.listeners = new Set();
    this.loadBookmarks();
  }

  loadBookmarks() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.bookmarks = JSON.parse(stored);
      } else {
        // Check for legacy string bookmarks from PhrasesModule and migrate them
        const legacy = localStorage.getItem(LEGACY_STORAGE_KEY);
        if (legacy) {
          const legacyItems = JSON.parse(legacy);
          if (Array.isArray(legacyItems) && legacyItems.length > 0) {
            this.bookmarks = legacyItems.map(viet => ({
              id: `phrase_${viet}`,
              viet,
              zh: '',
              category: '日常短句',
              module: 'phrases',
              tag: '實戰短句',
              timestamp: Date.now()
            }));
            this.saveBookmarks();
          }
        }
      }
    } catch (e) {
      console.error('Failed to load bookmarks:', e);
      this.bookmarks = [];
    }
  }

  saveBookmarks() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.bookmarks));
      // Also keep legacy key synced as array of vietnamese strings for compatibility
      const legacyStrings = this.bookmarks.map(b => b.viet);
      localStorage.setItem(LEGACY_STORAGE_KEY, JSON.stringify(legacyStrings));
    } catch (e) {
      console.error('Failed to save bookmarks:', e);
    }
    this.notify();
  }

  notify() {
    this.listeners.forEach(cb => {
      try {
        cb(this.bookmarks);
      } catch (err) {
        console.error('Bookmark listener error:', err);
      }
    });
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback(this.bookmarks);
    return () => this.listeners.delete(callback);
  }

  getAll() {
    return [...this.bookmarks];
  }

  getCount() {
    return this.bookmarks.length;
  }

  isBookmarked(identifier) {
    if (!identifier) return false;
    const cleanId = String(identifier).trim().toLowerCase();
    return this.bookmarks.some(b => 
      (b.id && b.id.toLowerCase() === cleanId) || 
      (b.viet && b.viet.trim().toLowerCase() === cleanId)
    );
  }

  add(item) {
    if (!item || !item.viet) return;
    const cleanViet = item.viet.trim();
    const id = item.id || `bm_${cleanViet}`;

    const existingIndex = this.bookmarks.findIndex(b => 
      b.id === id || b.viet.trim().toLowerCase() === cleanViet.toLowerCase()
    );

    const bookmarkItem = {
      id,
      viet: cleanViet,
      zh: item.zh || '',
      en: item.en || '',
      category: item.category || '核心知識',
      module: item.module || 'general',
      tag: item.tag || '收藏筆記',
      note: item.note || '',
      hanViet: item.hanViet || '',
      timestamp: Date.now()
    };

    if (existingIndex >= 0) {
      this.bookmarks[existingIndex] = { ...this.bookmarks[existingIndex], ...bookmarkItem };
    } else {
      this.bookmarks.unshift(bookmarkItem);
    }

    this.saveBookmarks();
    return true;
  }

  remove(identifier) {
    if (!identifier) return;
    const cleanId = String(identifier).trim().toLowerCase();
    const initialLength = this.bookmarks.length;
    this.bookmarks = this.bookmarks.filter(b => 
      b.id.toLowerCase() !== cleanId && b.viet.trim().toLowerCase() !== cleanId
    );
    if (this.bookmarks.length !== initialLength) {
      this.saveBookmarks();
      return true;
    }
    return false;
  }

  toggle(item) {
    if (!item) return false;
    const cleanViet = (item.viet || item.id || '').trim();
    if (this.isBookmarked(cleanViet)) {
      this.remove(cleanViet);
      return false;
    } else {
      this.add(item);
      return true;
    }
  }

  clear() {
    this.bookmarks = [];
    this.saveBookmarks();
  }
}

export const bookmarkService = new BookmarkService();
export default bookmarkService;
