/* MODO: repaso rápido (opción múltiple, feedback inmediato, racha) */
App.register({
  id: "practice", icon: "⚡", title: "Repaso rápido", cta: "Practicar",
  desc: "Sesiones cortas de opción múltiple. Te dice al instante si acertaste y lleva tu racha.",
  mount(root) {
    function setup() {
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">SESIONES CORTAS</p><h2>Repaso rápido</h2></div><span class="counter">Con respuesta inmediata</span></div>
        <div class="exam-intro"><div class="exam-symbol">⚡</div><h3>Practica sin presión</h3><p>Elige una categoría y cuántas preguntas quieres. Verás la respuesta correcta al momento.</p>
        <div class="row-gap center"><label class="compact-label">Categoría<select id="pr-cat"><option value="all">Todas</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}<option value="missed">Mis errores (${App.missed.size})</option><option value="unlearned">No aprendidas (${QUESTION_BANK.length - App.learned.size})</option></select></label>
        <label class="compact-label">Preguntas<select id="pr-n"><option value="10">10</option><option value="20">20</option><option value="all">Todas las del filtro</option></select></label></div>
        ${diffSelect("pr-df")}<button class="btn btn-primary" id="pr-go">Empezar</button><p class="notice" id="pr-msg"></p></div>`;
      $("#pr-go", root).onclick = () => {
        const c = $("#pr-cat", root).value, n = $("#pr-n", root).value;
        let pool = QUESTION_BANK.filter(q => c === "all" || (c === "missed" ? App.missed.has(q.id) : c === "unlearned" ? !App.learned.has(q.id) : q.category === c));
        if (!pool.length) { $("#pr-msg", root).textContent = "No hay preguntas con ese filtro todavía."; return; }
        pool = shuffle(pool); if (n !== "all") pool = pool.slice(0, +n);
        start(pool);
      };
    }
    function start(qs) {
      const d = curDiff(), cfg = { questions: qs, instant: true, n: d.n, secs: d.secs, title: "SESIÓN TERMINADA", onDone: r => r ? renderResults(root, r, { ...cfg, onRetry: start, onDone: x => setup() }) : setup() };
      runQuiz(root, cfg);
    }
    setup();
  }
});
