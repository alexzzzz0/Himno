/* MODO: Completa la respuesta (palabras tapadas, 3 niveles) */
App.register({
  id: "cloze", icon: "▭", title: "Completa la respuesta", cta: "Memorizar",
  desc: "La respuesta aparece con palabras tapadas: recuérdalas y destápalas. Sube el nivel para tapar más.",
  mount(root) {
    const P = { 1: .3, 2: .55, 3: .85 }, RE = /^([^\p{L}\p{N}]*)([\p{L}\p{N}].*?)([^\p{L}\p{N}]*)$/u;
    let level = +Store.get("clozeLv", 1), cat = "all", list = shuffle(QUESTION_BANK), i = 0, html = "";
    const make = () => { html = list[i].answer.split(/(\s+)/).map(t => { const m = t.trim() && t.match(RE); if (!m) return escapeHtml(t); const w = m[2], hide = w.length > 3 && !LOW.has(w.toLowerCase()) && Math.random() < P[level]; return hide ? `${escapeHtml(m[1])}<button class="cz" data-w="${escapeHtml(w)}">${escapeHtml(w[0])}${"_".repeat(w.length - 1)}</button>${escapeHtml(m[3])}` : escapeHtml(t); }).join(""); };
    function render() {
      const q = list[i];
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">MODO MEMORIA</p><h2>Completa la respuesta</h2></div><div class="row-gap">
        <label class="compact-label">Nivel<select id="cz-lv"><option value="1" ${level == 1 ? "selected" : ""}>1 · pocas palabras</option><option value="2" ${level == 2 ? "selected" : ""}>2 · la mitad</option><option value="3" ${level == 3 ? "selected" : ""}>3 · casi todo</option></select></label>
        <label class="compact-label">Categoría<select id="cz-cat"><option value="all">Todas</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}" ${k == cat ? "selected" : ""}>${v}</option>`).join("")}</select></label></div></div>
        <div class="study-progress"><span>Pregunta ${i + 1} de ${list.length}</span><div class="progress-track"><span style="width:${(i + 1) / list.length * 100}%"></span></div></div>
        <article class="flashcard"><div class="card-meta"><span class="pill">PREGUNTA ${String(q.id).padStart(2, "0")}</span><span class="pill muted">${CATEGORIES[q.category].toUpperCase()}</span></div><h3>${escapeHtml(q.question)}</h3>
        <p class="cloze-text">${html}</p>${figHtml(q)}
        <div class="card-actions"><button class="btn btn-secondary" id="cz-redo">Tapar otras palabras</button><button class="btn btn-secondary" id="cz-all">Revelar todo</button><button class="btn btn-primary" id="cz-ok">${App.learned.has(q.id) ? "✓ Aprendida" : "Marcar aprendida"}</button></div></article>
        <div class="nav-actions"><button class="text-btn" id="cz-prev">← Anterior</button><button class="text-btn" id="cz-next">Siguiente →</button></div>`;
    }
    const go = d => { i = (i + d + list.length) % list.length; make(); render(); };
    root.addEventListener("change", e => {
      if (e.target.id == "cz-lv") { level = +e.target.value; Store.set("clozeLv", level); make(); render(); }
      if (e.target.id == "cz-cat") { cat = e.target.value; list = shuffle(QUESTION_BANK.filter(q => cat == "all" || q.category == cat)); i = 0; make(); render(); }
    });
    root.addEventListener("click", e => {
      const b = e.target.closest("button"); if (!b) return;
      if (b.classList.contains("cz")) { b.outerHTML = `<span class="cz ok">${b.dataset.w}</span>`; return; }
      if (b.id == "cz-redo") { make(); render(); } if (b.id == "cz-prev") go(-1); if (b.id == "cz-next") go(1);
      if (b.id == "cz-all") $$(".cz[data-w]", root).forEach(x => x.click());
      if (b.id == "cz-ok") { const id = list[i].id; App.learned.has(id) ? App.learned.delete(id) : (App.learned.add(id), App.review.delete(id)); App.save(); render(); }
    });
    make(); render();
  }
});
