self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request).then((response) => {
                let responseClone = response.clone();
                caches.open('v1').then((cache) => {
                    cache.put(event.request, responseClone);
                });

                return response;
            });
        }).catch(() => {
            return caches.match('./rainersskicountdown/404.html');
        })
    );
});

self.addEventListener('activate', (event) => {
    var cacheKeeplist = ['v1'];

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheKeeplist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
