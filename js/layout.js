/* Encabezado, pie y modo oscuro compartidos. Para agregar una página nueva: súmala a PAGES y crea su .html */
const Layout = {
  PAGES: [["index.html", "Inicio"], ["estudio.html", "Estudio"], ["juegos.html", "Juegos"], ["explicaciones.html", "Explicaciones"], ["silabas.html", "Silabeo"], ["examen.html", "Examen"]],
  theme() { return Store.get("theme", window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"); },
  applyTheme(t) { document.documentElement.dataset.theme = t; const b = $("#theme-btn"); if (b) { b.textContent = t === "dark" ? "☀" : "☾"; b.title = t === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"; b.setAttribute("aria-label", b.title); } },
  render(active, title, sub) {
    $("#site-header").innerHTML = `<div class="sitebar"><nav class="topbar"><a class="brand" href="index.html">HN <span>Estudio Cívico</span></a><div class="navlinks">${this.PAGES.map(([h, t]) => `<a href="${h}" class="${h === active ? "on" : ""}">${t}</a>`).join("")}<button id="theme-btn" class="theme-btn" type="button"></button></div></nav></div>
      ${title ? `<div class="pagehead"><div class="container"><h1>${title}</h1><p>${sub || ""}</p></div></div>` : ""}`;
    $("#site-footer").innerHTML = `<div class="footer-brand">HN <span>Estudio Cívico</span></div><p>Material de práctica académica · Himno Nacional de Honduras</p>`;
    $("#theme-btn").onclick = () => { const t = this.theme() === "dark" ? "light" : "dark"; Store.set("theme", t); this.applyTheme(t); };
    this.applyTheme(this.theme());
  }
};
