/**
 * offlineAudioService.js
 * Comprehensive Offline Audio Cache & Storage Service
 * 
 * Provides:
 * 1. "播過即存" (Auto-cache on play): Automatically caches audio files in browser Cache Storage
 *    upon the first playback so they can be played completely offline.
 * 2. "一鍵下載本情境離線音檔" (Pre-cache scenario): Batched pre-download of all dialogue
 *    audio files (Vietnamese + Chinese narration) with progress reporting.
 * 3. Offline storage query and management: Cached item counts, storage size estimation, and cache purge.
 */

import { audioEngine } from './audioEngine';

const CACHE_NAME = 'viet-audio-offline-v1';
const PREF_KEY = 'viet_offline_cache_enabled';
const isAudioResponse = response => Boolean(response?.ok && /^(audio\/|application\/octet-stream)/i.test(response.headers.get('content-type') || ''));

export function resolveScenarioAudio(lines = [], accent = 'north') {
  const urls = new Set();
  const missing = new Set();
  for (const line of lines) {
    const viet = line.viet || line.vi;
    if (viet) {
      const file = audioEngine.resolveManifestFile(audioEngine.cleanText(viet), accent) || audioEngine.resolveManifestFile(viet, accent);
      if (file) urls.add(audioEngine.buildAudioUrl(file));
      else missing.add(`vi:${viet}`);
    }
    if (line.zh) {
      const file = audioEngine.resolveNativeFile(line.zh, 'zh');
      if (file) urls.add(audioEngine.buildAudioUrl(file));
      else missing.add(`zh:${line.zh}`);
    }
  }
  return { urls: [...urls], missingCount: missing.size };
}

class OfflineAudioService {
  constructor() {
    this.isSupported = typeof window !== 'undefined' && 'caches' in window;
    this.listeners = new Set();
    this.autoCacheEnabled = this.loadAutoCachePref();
    this.blobUrlCache = new Map();
    this.pendingDownloads = new Map();
  }

  loadAutoCachePref() {
    if (typeof window === 'undefined') return true;
    try {
      const val = localStorage.getItem(PREF_KEY);
      return val !== null ? val === 'true' : true; // Default to true
    } catch {
      return true;
    }
  }

  setAutoCacheEnabled(enabled) {
    this.autoCacheEnabled = Boolean(enabled);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(PREF_KEY, String(this.autoCacheEnabled));
      } catch (e) {}
    }
    this.notify();
  }

  isAutoCacheEnabled() {
    return this.autoCacheEnabled;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach(fn => {
      try { fn(this); } catch (e) {}
    });
  }

  /**
   * Checks if an audio URL is stored in Cache Storage
   */
  async isCached(url) {
    if (!this.isSupported || !url) return false;
    try {
      const cache = await caches.open(CACHE_NAME);
      const match = await cache.match(url);
      return isAudioResponse(match);
    } catch {
      return false;
    }
  }

  /**
   * Caches an audio URL into Cache Storage.
   * If online, fetches and stores; if offline or fails, silently handles it.
   */
  async cacheAudioUrl(url) {
    if (!this.isSupported || !url) return false;
    if (this.pendingDownloads.has(url)) return this.pendingDownloads.get(url);
    const request = this.storeAudioUrl(url);
    this.pendingDownloads.set(url, request);
    try { return await request; }
    finally { this.pendingDownloads.delete(url); }
  }

  async storeAudioUrl(url) {
    try {
      const cache = await caches.open(CACHE_NAME);
      const existing = await cache.match(url);
      if (isAudioResponse(existing)) return true;

      const response = await fetch(url, { cache: 'no-cache' });
      if (isAudioResponse(response)) {
        await cache.put(url, response.clone());
        this.notify();
        return true;
      }
    } catch (e) {
      // Failed to fetch (e.g. offline)
    }
    return false;
  }

  /**
   * Retrieves a Blob Object URL for offline playback from Cache Storage.
   * Returns null if not cached.
   */
  async getCachedBlobUrl(url) {
    if (!this.isSupported || !url) return null;
    try {
      if (this.blobUrlCache.has(url)) {
        return this.blobUrlCache.get(url);
      }
      const cache = await caches.open(CACHE_NAME);
      const response = await cache.match(url);
      if (isAudioResponse(response)) {
        const blob = await response.blob();
        const blobUrl = URL.createObjectURL(blob);
        this.blobUrlCache.set(url, blobUrl);
        return blobUrl;
      }
    } catch (e) {}
    return null;
  }

  /**
   * Pre-downloads and caches all dialogue audio lines (both Vietnamese & Chinese narration)
   * for a specific scenario, reporting incremental progress.
   */
  async cacheScenarioAudio(lines = [], accent = 'north', onProgress = null) {
    if (!this.isSupported || !Array.isArray(lines) || lines.length === 0) {
      if (onProgress) onProgress({ current: 0, total: 0, percent: 100, isDone: true });
      return { total: 0, cached: 0 };
    }

    const { urls: urlList, missingCount } = resolveScenarioAudio(lines, accent);
    const total = urlList.length + missingCount;
    let completed = missingCount;
    let cached = 0;

    // Concurrently fetch and cache with limit
    const batchSize = 4;
    for (let i = 0; i < urlList.length; i += batchSize) {
      const chunk = urlList.slice(i, i + batchSize);
      await Promise.all(chunk.map(async (url) => {
        if (await this.cacheAudioUrl(url)) cached++;
        completed++;
        if (onProgress) {
          onProgress({
            current: completed,
            total,
            percent: Math.round((completed / total) * 100),
            isDone: completed === total
          });
        }
      }));
    }

    onProgress?.({ current: total, total, percent: 100, isDone: true });

    this.notify();
    return { total, cached, failed: total - cached };
  }

  /**
   * Checks the cache status of a scenario's audio files
   */
  async checkScenarioCacheStatus(lines = [], accent = 'north') {
    if (!this.isSupported || !Array.isArray(lines) || lines.length === 0) {
      return { total: 0, cachedCount: 0, isFullyCached: false, percent: 0 };
    }

    const { urls: urlList, missingCount } = resolveScenarioAudio(lines, accent);
    if (urlList.length + missingCount === 0) {
      return { total: 0, cachedCount: 0, isFullyCached: false, percent: 0 };
    }

    let cachedCount = 0;
    try {
      const cache = await caches.open(CACHE_NAME);
      for (const u of urlList) {
        const m = await cache.match(u);
        if (isAudioResponse(m)) cachedCount++;
      }
    } catch {}

    const total = urlList.length + missingCount;
    const isFullyCached = missingCount === 0 && cachedCount === total && total > 0;
    const percent = Math.round((cachedCount / total) * 100);

    return { total, cachedCount, isFullyCached, percent };
  }

  /**
   * Gets total number of cached audio items
   */
  async getCacheSummary() {
    if (!this.isSupported) return { count: 0, available: false };
    try {
      const cache = await caches.open(CACHE_NAME);
      const keys = await cache.keys();
      return { count: keys.length, available: true };
    } catch {
      return { count: 0, available: false };
    }
  }

  /**
   * Purges offline audio cache
   */
  async clearOfflineCache() {
    if (!this.isSupported) return;
    try {
      // Revoke any created Blob URLs
      this.blobUrlCache.forEach(blobUrl => URL.revokeObjectURL(blobUrl));
      this.blobUrlCache.clear();
      await caches.delete(CACHE_NAME);
      this.notify();
    } catch (e) {}
  }
}

export const offlineAudioService = new OfflineAudioService();

if (audioEngine && typeof audioEngine.setOfflineService === 'function') {
  audioEngine.setOfflineService(offlineAudioService);
}
