// v4
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "POST" &&
      url.pathname === "/test/share.html") {

    event.respondWith((async () => {
      const formData = await event.request.formData();
      const file = formData.get("file"); // ← 画像がここに入る

      const cache = await caches.open("shared-files");
      await cache.put("/test/shared-image", new Response(file));

      return Response.redirect("/test/share.html");
    })());
  }
});
