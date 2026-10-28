/* MODO: tarjetas de estudio (con "repasar" y "aprendida") */
App.register({
  id: "study", icon: "▣", title: "Tarjetas de estudio", cta: "Estudiar ahora",
  desc: "Lee la pregunta, piensa tu respuesta y revélala. Marca lo que ya sabes y lo que quieres repasar.",
  mount(root) {
    let order = QUESTION_BANK.map(q => q.id), idx = 0;
    root.innerHTML = `
      <div class="workspace-top"><div><p class="eyebrow dark">MODO MEMORIA</p><h2>Tarjetas de estudio</h2></div>
        <div class="row-gap"><label class="compact-label">Categoría<select id="st-cat"><option value="all">Todas</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select></label>
        <label class="compact-label">Orden<select id="st-order"><option value="normal">Por número</option><option value="random">Aleatorio</option><option value="unlearned">No aprendidas</option><option value="review">Por repasar</option></select></label></div></div>
      <div class="study-progress"><span id="st-pos"></span><div class="progress-track"><span id="st-bar"></span></div></div>
      <article class="flashcard">
        <div class="card-meta"><span id="st-num" class="pill"></span><span id="st-cat-pill" class="pill muted"></span></div>
        <h3 id="st-q"></h3>
        <div id="st-ans" class="answer-box hidden"><span class="answer-label">RESPUESTA</span><p></p><img id="st-fig" class="figure hidden" alt="Figura ilustrativa"></div>
        <div class="card-actions"><button class="btn btn-secondary" id="st-reveal">Revelar respuesta</button>
          <button class="btn btn-primary" id="st-learned" disabled>Ya la aprendí ✓</button>
          <button class="btn btn-ghost" id="st-review" disabled>Repasar luego ↻</button></div>
      </article>
      <div class="nav-actions"><button class="text-btn" id="st-prev">← Anterior</button><span class="notice" style="margin:0">Atajos: espacio = revelar · ← → = navegar</span><button class="text-btn" id="st-next">Siguiente →</button></div>`;
    const cur = () => byId(order[idx]);
    function rebuild() {
      const cat = $("#st-cat", root).value, mode = $("#st-order", root).value;
      let ids = QUESTION_BANK.filter(q => cat === "all" || q.category === cat).map(q => q.id);
      if (mode === "unlearned") ids = ids.filter(i => !App.learned.has(i));
      if (mode === "review") ids = ids.filter(i => App.review.has(i));
      if (mode === "random") ids = shuffle(ids);
      order = ids; idx = 0; render();
    }
    function render() {
      const empty = !order.length;
      $(".flashcard", root).classList.toggle("hidden", empty);
      if (empty) { $("#st-pos", root).textContent = "No hay tarjetas con este filtro"; $("#st-bar", root).style.width = "0"; return; }
      const q = cur();
      $("#st-num", root).textContent = `PREGUNTA ${String(q.id).padStart(2, "0")}`;
      $("#st-cat-pill", root).textContent = CATEGORIES[q.category].toUpperCase();
      $("#st-q", root).textContent = q.question;
      $("#st-ans", root).classList.add("hidden");
      $("#st-ans p", root).textContent = q.answer;
      const f = $("#st-fig", root); if (q.image) { f.src = q.image; f.classList.remove("hidden"); } else { f.classList.add("hidden"); f.removeAttribute("src"); }
      $("#st-reveal", root).disabled = false; $("#st-reveal", root).textContent = "Revelar respuesta";
      $("#st-learned", root).disabled = true; $("#st-review", root).disabled = true;
      paintBtns();
      $("#st-pos", root).textContent = `Tarjeta ${idx + 1} de ${order.length}`;
      $("#st-bar", root).style.width = ((idx + 1) / order.length * 100) + "%";
    }
    function paintBtns() { const q = cur(); $("#st-learned", root).textContent = App.learned.has(q.id) ? "Aprendida ✓" : "Ya la aprendí ✓"; $("#st-review", root).textContent = App.review.has(q.id) ? "En repaso ↻" : "Repasar luego ↻"; }
    const reveal = () => { if (!order.length) return; $("#st-ans", root).classList.remove("hidden"); $("#st-reveal", root).textContent = "Respuesta revelada"; $("#st-reveal", root).disabled = true; $("#st-learned", root).disabled = false; $("#st-review", root).disabled = false; };
    const go = d => { if (!order.length) return; idx = (idx + d + order.length) % order.length; render(); };
    $("#st-reveal", root).onclick = reveal;
    $("#st-learned", root).onclick = () => { const id = cur().id; if (App.learned.has(id)) App.learned.delete(id); else { App.learned.add(id); App.review.delete(id); } App.save(); paintBtns(); };
    $("#st-review", root).onclick = () => { const id = cur().id; if (App.review.has(id)) App.review.delete(id); else { App.review.add(id); App.learned.delete(id); } App.save(); paintBtns(); };
    $("#st-prev", root).onclick = () => go(-1); $("#st-next", root).onclick = () => go(1);
    $("#st-cat", root).onchange = rebuild; $("#st-order", root).onchange = rebuild;
    document.addEventListener("keydown", e => {
      if (root.classList.contains("hidden") || /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
      if (e.key === " ") { e.preventDefault(); reveal(); } else if (e.key === "ArrowRight") go(1); else if (e.key === "ArrowLeft") go(-1);
    });
    rebuild();
  }
});
