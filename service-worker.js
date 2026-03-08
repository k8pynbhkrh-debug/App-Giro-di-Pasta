const CACHE_VERSION = "v5";
const CACHE_NAME = `giro-di-pasta-${CACHE_VERSION}`;
const CORE_ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json"
];

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_ASSETS))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key !== CACHE_NAME)
        .map(key => caches.delete(key))
    );
    await clients.claim();
  })());
});

self.addEventListener("message", event => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const request = event.request;
  const url = new URL(request.url);
  const accept = request.headers.get("accept") || "";
  const isSameOrigin = url.origin === self.location.origin;
  const isHtmlRequest = request.mode === "navigate" || accept.includes("text/html");
  const isScriptOrStyle = request.destination === "script" || request.destination === "style";
  const isManifest = isSameOrigin && url.pathname.endsWith("/manifest.json");
  const isFont = request.destination === "font";
  const isImage = request.destination === "image";

  if (isHtmlRequest || isScriptOrStyle || isManifest || isFont) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(request, { cache: "no-store" });
        if (isSameOrigin && networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        const cached = await caches.match(request);
        if (cached) return cached;
        if (isHtmlRequest) {
          return caches.match("./index.html");
        }
        throw error;
      }
    })());
    return;
  }

  if (isImage) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      try {
        const networkResponse = await fetch(request);
        if (isSameOrigin && networkResponse && networkResponse.ok) {
          const cache = await caches.open(CACHE_NAME);
          cache.put(request, networkResponse.clone());
        }
        return networkResponse;
      } catch (error) {
        return caches.match(request);
      }
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      return await fetch(request);
    } catch (error) {
      return caches.match(request);
    }
  })());
});
