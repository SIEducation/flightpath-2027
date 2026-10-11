// FLIGHTPATH 2027 PWA · Static offline shell · v3
const CACHE = 'flightpath-2027-shell-v3';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icons/favicon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(()=>self.skipWaiting())); });
self.addEventListener('activate', e => { e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('flightpath-2027-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())); });
self.addEventListener('fetch', e => {
  const req=e.request;
  if(req.method!=='GET')return;
  const url=new URL(req.url);
  if(url.origin!==self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname))return;
  if(req.mode==='navigate'){
    e.respondWith(fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',cp));}return res;}).catch(()=>caches.match('./index.html').then(x=>x||caches.match('./'))));
  } else {
    e.respondWith(caches.match(req).then(hit=>hit||fetch(req).then(res=>{if(res.ok){const cp=res.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return res;})));
  }
});
