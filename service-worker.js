const CACHE_VERSION = "v2";
const STATIC_CACHE = `giro-pasta-static-${CACHE_VERSION}`;

self.addEventListener("install", event => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(STATIC_CACHE).then(cache => cache.addAll([
      "./",
      "./index.html",
      "./app.js",
      "./manifest.json"
    ]))
  );
});

self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(
      keys
        .filter(key => key !== STATIC_CACHE)
        .map(key => caches.delete(key))
    );
    await clients.claim();
  })());
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;

  const request = event.request;
  const accept = request.headers.get("accept") || "";
  const isHtmlRequest = request.mode === "navigate" || accept.includes("text/html");
  const destination = request.destination;
  const isImageRequest = destination === "image";

  if (isHtmlRequest) {
    event.respondWith((async () => {
      try {
        const networkResponse = await fetch(request);
        const cache = await caches.open(STATIC_CACHE);
        cache.put(request, networkResponse.clone());
        return networkResponse;
      } catch (error) {
        const cached = await caches.match(request);
        if (cached) return cached;
        return caches.match("./index.html");
      }
    })());
    return;
  }

  if (isImageRequest) {
    event.respondWith((async () => {
      const cached = await caches.match(request);
      if (cached) return cached;
      const networkResponse = await fetch(request);
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
      return networkResponse;
    })());
    return;
  }

  event.respondWith((async () => {
    try {
      return await fetch(request);
    } catch (error) {
      const cached = await caches.match(request);
      if (cached) return cached;
      throw error;
    }
  })());
});
