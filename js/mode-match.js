/* MODO: Parejas (une cada pregunta con su respuesta) */
App.register({
  id: "match", icon: "⇄", title: "Une las parejas", cta: "Jugar",
  desc: "Un juego rápido: conecta cada pregunta con su respuesta correcta antes de que se acaben tus intentos.",
  mount(root) {
    function setup() {
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">JUEGO</p><h2>Une las parejas</h2></div><span class="counter">5 parejas por ronda</span></div>
        <div class="exam-intro"><div class="exam-symbol">⇄</div><h3>¿Cuánto recuerdas?</h3><p>Toca una pregunta y luego la respuesta que le corresponde. Intenta hacerlo sin fallos.</p>
        <label class="compact-label">Categoría<select id="mt-cat"><option value="all">Todas</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}<option value="missed">Mis errores (${App.missed.size})</option></select></label>
        <button class="btn btn-primary" id="mt-go">Empezar ronda</button><p class="notice" id="mt-msg"></p></div>`;
      $("#mt-go", root).onclick = () => {
        const c = $("#mt-cat", root).value;
        const pool = QUESTION_BANK.filter(q => c === "all" || (c === "missed" ? App.missed.has(q.id) : q.category === c));
        if (pool.length < 5) { $("#mt-msg", root).textContent = "Necesitas al menos 5 preguntas en ese filtro."; return; }
        round(shuffle(pool).slice(0, 5), c);
      };
    }
    function round(qs, cat) {
      let selQ = null, mistakes = 0, done = 0; const t0 = Date.now();
      root.innerHTML = `<div class="study-progress"><span>Parejas: <b id="mt-done">0</b>/5</span><div class="progress-track"><span id="mt-bar"></span></div><span class="streak">Fallos: <b id="mt-miss">0</b></span></div>
        <div class="match-grid"><div class="match-col">${qs.map(q => `<button class="match-card" data-q="${q.id}">${escapeHtml(q.question)}</button>`).join("")}</div>
        <div class="match-col">${shuffle(qs).map(q => `<button class="match-card ans" data-a="${q.id}">${escapeHtml(q.short)}</button>`).join("")}</div></div>
        <button class="text-btn quit" id="mt-quit">Salir</button>`;
      $("#mt-quit", root).onclick = setup;
      $$("[data-q]", root).forEach(b => b.onclick = () => { if (b.classList.contains("matched")) return; $$("[data-q]", root).forEach(x => x.classList.remove("sel")); b.classList.add("sel"); selQ = b.dataset.q; });
      $$("[data-a]", root).forEach(b => b.onclick = () => {
        if (b.classList.contains("matched") || !selQ) return;
        const qb = $(`[data-q="${selQ}"]`, root);
        if (b.dataset.a === selQ) {
          qb.classList.remove("sel"); qb.classList.add("matched"); b.classList.add("matched"); selQ = null; done++;
          $("#mt-done", root).textContent = done; $("#mt-bar", root).style.width = done / 5 * 100 + "%";
          if (done === 5) setTimeout(end, 400);
        } else {
          mistakes++; $("#mt-miss", root).textContent = mistakes; App.missed.add(+selQ); App.save();
          b.classList.add("shake"); qb.classList.add("shake"); setTimeout(() => { b.classList.remove("shake"); qb.classList.remove("shake"); }, 400);
        }
      });
      function end() {
        const s = Math.round((Date.now() - t0) / 1000);
        root.innerHTML = `<div class="score-card"><p class="eyebrow dark">RONDA COMPLETA</p><strong>${mistakes === 0 ? "¡Perfecto!" : mistakes + (mistakes === 1 ? " fallo" : " fallos")}</strong><p>Tiempo: ${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}</p>
          <div class="row-gap"><button class="btn btn-primary" id="mt-again">Otra ronda</button><button class="btn btn-secondary" id="mt-menu">Cambiar categoría</button></div></div>`;
        $("#mt-again", root).onclick = () => { const p = QUESTION_BANK.filter(q => cat === "all" || (cat === "missed" ? App.missed.has(q.id) : q.category === cat)); round(shuffle(p.length >= 5 ? p : QUESTION_BANK).slice(0, 5), cat); };
        $("#mt-menu", root).onclick = setup;
      }
    }
    setup();
  }
});
