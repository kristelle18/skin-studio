/* Skin Studio offline cache */
const CACHE='skin-studio-v2';
const SHELL=['./','index.html','manifest.webmanifest','icon-192.png','icon-512.png','icon-maskable-512.png','jspdf.umd.min.js',
 'face_mesh.js','face_mesh_graph.bin.wasm','face_mesh_assets.data.wasm','face_mesh_solution_packed_assets_loader.js',
 'face_mesh_solution_simd_wasm_bin.js','face_mesh_solution_simd_wasm_bin.wasm','face_mesh_solution_wasm_bin.js','face_mesh_solution_wasm_bin.wasm'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE&&k!=='skin-studio-fonts').map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{
  const req=e.request; if(req.method!=='GET') return;
  const url=new URL(req.url);
  if(url.origin===location.origin){
    if(req.mode==='navigate'){ // newest page when online, saved copy when offline
      e.respondWith(fetch(req).then(r=>{const cp=r.clone();caches.open(CACHE).then(c=>c.put('index.html',cp));return r;}).catch(()=>caches.match('index.html')));
      return; }
    e.respondWith(caches.match(req,{ignoreSearch:true}).then(hit=>hit||fetch(req).then(r=>{if(r.ok){const cp=r.clone();caches.open(CACHE).then(c=>c.put(req,cp));}return r;})));
    return;
  }
  if(/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)){
    e.respondWith(caches.open('skin-studio-fonts').then(c=>c.match(req).then(hit=>hit||fetch(req).then(r=>{c.put(req,r.clone());return r;}))));
  }
});
