let cacheData = "appV1";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/router/",

        "/router/users",

        "/router/about",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css",

        "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js",

        "/static/js/bundle.js",

        "/manifest.json",

        "/favicon.ico",
      ]);
    })
  );
});

this.addEventListener("fetch", (event) => {
    
  if (!navigator.onLine) {
    
    // video 13 notification

    //   console.log("url", event.request.url);
    //   if (event.request.url === "http://localhost:3000/static/js/main.chunk.js") {
    //     event.waitUntil(
    //       this.ServiceWorkerRegistration.showNotification("No internet", {
    //         body: "You are offline",
    //         icon:'https://camo.githubusercontent.com/48d099290b4cb2d7937bcd96e8497cf1845b54a810a6432c70cf944b60b40c77/68747470733a2f2f7261776769742e636f6d2f676f72616e67616a69632f72656163742d69636f6e732f6d61737465722f72656163742d69636f6e732e737667'
    //       })
    //     );
    //   }
    
    event.respondWith(
      caches.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestUrl = event.request.clone();
        return fetch(requestUrl);
      })
    );
  }
});
