self.addEventListener("fetch", (event) => {
  // Share Target の POST を受け取る
  if (event.request.method === "POST" &&
      new URL(event.request.url).pathname === "/test/share.html") {
    event.respondWith(Response.redirect("/test/share.html"));
  }
});
