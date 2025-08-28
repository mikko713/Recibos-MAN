const CACHE='recibos-mc-v2';
const ASSETS=['./','./index.html','./manifest.webmanifest','./service-worker.js','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)));self.skipWaiting();});
self.addEventListener('activate',e=>{e.waitUntil(self.clients.claim());});
self.addEventListener('fetch',e=>{const url=new URL(e.request.url); if(url.origin===location.origin){e.respondWith(caches.match(e.request).then(res=>res||fetch(e.request)));}});
