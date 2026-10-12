/**
 * Service Worker for Vietnamese Learning Hub
 * Provides offline caching for high-fidelity audio files and core shell assets.
 */

const CACHE_NAME = 'viet-audio-offline-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  const url = new URL(event.request.url);

  // Audio files caching strategy: Cache-First with Network Fallback
  if (url.pathname.includes('/audio/') || url.pathname.endsWith('.mp3')) {
    event.respondWith(
      caches.open(CACHE_NAME).then(async (cache) => {
        // Try cache match first
        const cachedResponse = await cache.match(event.request, { ignoreSearch: true });
        if (cachedResponse) {
          return cachedResponse;
        }

        // Not in cache, fetch from network
        try {
          const networkResponse = await fetch(event.request);
          if (networkResponse && networkResponse.status === 200) {
            // Clone and store in offline cache
            cache.put(event.request, networkResponse.clone());
          }
          return networkResponse;
        } catch (fetchErr) {
          // If network failed and we somehow missed exact match, check pathname
          const fallbackMatch = await cache.match(url.pathname);
          if (fallbackMatch) return fallbackMatch;
          throw fetchErr;
        }
      })
    );
    return;
  }
});
