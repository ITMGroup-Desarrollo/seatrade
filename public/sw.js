// // Nombre de la caché
// const CACHE_NAME = "astro-cache-v1";

// // Archivos que quieres cachear de entrada
// const STATIC_ASSETS = [
//   "videos/CM.mp4",
//   "videos/CR.mp4",
//   "videos/LB.mp4",
//   "videos/LP.mp4",
//   "videos/RT.mp4",
//   "videos/SA.mp4",
//   "videos/TB.mp4",
// ];

// self.addEventListener("install", (event) => {
//   console.log("[SW] Instalando...");
//   event.waitUntil(
//     caches.open(CACHE_NAME).then((cache) => {
//       return cache.addAll(STATIC_ASSETS);
//     })
//   );
// });

// self.addEventListener("activate", (event) => {
//   console.log("[SW] Activando...");
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(
//         cacheNames
//           .filter((name) => name !== CACHE_NAME)
//           .map((name) => caches.delete(name))
//       );
//     })
//   );
// });

// self.addEventListener("fetch", (event) => {
//   const req = event.request;
//   if (req.method !== "GET") return;

//   event.respondWith(
//     caches.match(req).then((cached) => {
//       return cached || fetch(req);
//     })
//   );
// });
