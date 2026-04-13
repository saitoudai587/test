// v5
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "POST" &&
      url.pathname === "/test/share.html") {

    event.respondWith((async () => {
      const formData = await event.request.formData();

      // すべてのキーをチェック
      let file = null;
      for (const [key, value] of formData.entries()) {
        if (value instanceof File) {
          file = value;
          break;
        }
      }

      // ファイルが見つからない場合
      if (!file) {
        // 空のデータを保存しておく（デバッグ用）
        const cache = await caches.open("shared-files");
        await cache.put("/test/shared-image", new Response(new Blob([])));
        return Response.redirect("/test/share.html");
      }

      // 画像をキャッシュに保存
      const cache = await caches.open("shared-files");
      await cache.put("/test/shared-image", new Response(file));

      return Response.redirect("/test/share.html");
    })());
  }
});
