// v4
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "POST" &&
      url.pathname === "/test/share.html") {

    event.respondWith((async () => {
      const formData = await event.request.formData();
      const file = formData.get("file"); // ← 共有された画像

      // 画像をキャッシュに保存
      const cache = await caches.open("shared-files");
      await cache.put("/test/shared-image", new Response(file));

      // GET にリダイレクトして share.html を表示
      return Response.redirect("/test/share.html");
    })());
  }
});
