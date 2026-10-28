/* MODO: examen de opción múltiple (sin respuestas hasta el final), con dificultad */
App.register({
  id: "exam", icon: "✎", title: "Examen de práctica", cta: "Hacer examen",
  desc: "Opción múltiple sobre las 100 preguntas. Al final ves tu nota y repasas lo que fallaste.",
  mount(root) {
    function setup() {
      const best = Store.get("best", {});
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">COMPRUEBA LO APRENDIDO</p><h2>Examen de práctica</h2></div><span class="counter">Opción múltiple</span></div>
        <div class="exam-intro"><div class="exam-symbol">✎</div><h3>Prepárate para el examen</h3><p>Una sola respuesta correcta por pregunta. No verás las respuestas hasta terminar.</p>
        <div class="row-gap center"><label class="compact-label">Preguntas<select id="ex-size"><option value="100">Las 100 preguntas</option><option value="50">50 aleatorias</option><option value="25">25 aleatorias</option><option value="10">10 (mini examen)</option></select></label>
        <label class="compact-label">Categoría<select id="ex-cat"><option value="all">Todas</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}<option value="missed">Mis errores (${App.missed.size})</option></select></label>${diffSelect("ex-df")}</div>
        <p class="notice" id="ex-best"></p><p class="notice" id="ex-msg"></p><button class="btn btn-primary" id="ex-go">Iniciar examen</button></div>`;
      const key = () => { const d = Store.get("diff", "normal"), s = $("#ex-size", root).value; return d === "normal" ? s : s + "-" + d; };
      const showBest = () => { const b = $("#ex-cat", root).value === "all" && best[key()]; $("#ex-best", root).textContent = b ? `Tu mejor resultado con esta configuración: ${b}%` : ""; };
      root.addEventListener("change", showBest); showBest();
      $("#ex-go", root).onclick = () => {
        const c = $("#ex-cat", root).value, pool = QUESTION_BANK.filter(q => c === "all" || (c === "missed" ? App.missed.has(q.id) : q.category === c));
        if (!pool.length) return $("#ex-msg", root).textContent = "No hay preguntas con ese filtro todavía.";
        start(shuffle(pool).slice(0, +$("#ex-size", root).value), c === "all" ? key() : null);
      };
    }
    function start(qs, key) {
      const d = curDiff(), cfg = { questions: qs, instant: false, n: d.n, secs: d.secs, title: "EXAMEN FINALIZADO · " + d.label.split(" · ")[0].toUpperCase(), onRetry: q => start(q, null),
        onDone: r => {
          if (!r) return setup();
          const b = Store.get("best", {}); if (key && r.pct > (b[key] || 0)) { b[key] = r.pct; Store.set("best", b); App.refreshStats(); }
          renderResults(root, r, { ...cfg, onDone: () => setup() });
        } };
      runQuiz(root, cfg);
    }
    setup();
  }
});
