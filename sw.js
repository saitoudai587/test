self.addEventListener("fetch", (event) => {
  // Share Target の POST を受け取る
  if (event.request.method === "POST" &&
      new URL(event.request.url).pathname === "/share.html") {
    event.respondWith(Response.redirect("/share.html"));
  }
});
