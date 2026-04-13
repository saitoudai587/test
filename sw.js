// v3
self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  if (event.request.method === "POST" &&
      url.pathname === "/test/share.html") {
    event.respondWith(Response.redirect("/test/share.html"));
    return;
  }
});
