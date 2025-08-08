// sw.js

// A new cache name to ensure the browser updates
const CACHE_NAME = 'gunasthan-pwa-v2.0'; 

// The complete list of files needed for offline functionality
const urlsToCache = [
  './',
  'index.html', // The original simple version
  'index-enhanced.html', // The enhanced version
  'gunasthan_game.html',
  'app.js', // Crucial for the simple index.html
  'manifest.json',
  'icon-192.png',
  'icon-512.png'
];

// Install the service worker and cache all the app's assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache and caching all necessary files');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.error('Failed to cache files during install:', err);
      })
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

// Fetch event: serve assets from cache first for a true offline experience
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return the response from the cache
        if (response) {
          return response;
        }
        // Not in cache - fetch from the network
        return fetch(event.request);
      }
    )
  );
});
