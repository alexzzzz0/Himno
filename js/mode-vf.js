/* MODO: Verdadero o falso (la dificultad cambia qué tan parecida es la respuesta falsa) */
App.register({
  id: "vf", icon: "✔", title: "Verdadero o falso", cta: "Jugar",
  desc: "Te muestro una pregunta con una respuesta: ¿es la correcta? En difícil, las falsas se parecen mucho.",
  mount(root) {
    function setup() {
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">JUEGO</p><h2>Verdadero o falso</h2></div><span class="counter">10 afirmaciones por ronda</span></div>
        <div class="exam-intro"><div class="exam-symbol">✔</div><h3>¿Esa es la respuesta?</h3><p>Decide si la respuesta mostrada corresponde a la pregunta. Verás la corrección al instante.</p><div class="row-gap center">${diffSelect("vf-df")}</div><button class="btn btn-primary" id="vf-go">Empezar</button></div>`;
      $("#vf-go", root).onclick = run;
    }
    function run() {
      const d = Store.get("diff", "normal");
      const items = shuffle(QUESTION_BANK).slice(0, 10).map(q => {
        let a = null; if (Math.random() < .5) a = q; else { const pool = distractorPool(q), far = shuffle(QUESTION_BANK.filter(o => o.id != q.id && groupOf(o.id) != groupOf(q.id)));
          a = d == "facil" ? far[0] : pool[Math.floor(Math.random() * Math.min(pool.length, d == "normal" ? 6 : 2))] || far[0]; }
        return { q, a, t: a.id == q.id, pick: null };
      });
      let i = 0;
      const render = () => {
        const it = items[i], ans = it.pick !== null, ok = ans && it.pick === it.t, last = i == items.length - 1;
        root.innerHTML = `<div class="study-progress"><span>Afirmación ${i + 1} de ${items.length}</span><div class="progress-track"><span style="width:${(i + (ans ? 1 : 0)) / items.length * 100}%"></span></div></div>
          <article class="exam-question"><div class="card-meta"><span class="pill">PREGUNTA ${String(it.q.id).padStart(2, "0")}</span></div><h3>${escapeHtml(it.q.question)}</h3>
          <div class="answer-box"><span class="answer-label">RESPUESTA PROPUESTA</span><p>${escapeHtml(it.a.short)}</p></div>
          <div class="options"><button class="opt ${ans && it.t ? "correct" : ans && it.pick ? "wrong" : ""}" data-v="1" ${ans ? "disabled" : ""}><span class="opt-letter">V</span><span>Verdadero</span></button><button class="opt ${ans && !it.t ? "correct" : ans && !it.pick ? "wrong" : ""}" data-v="0" ${ans ? "disabled" : ""}><span class="opt-letter">F</span><span>Falso</span></button></div>
          ${ans ? `<div class="fb-box ${ok ? "ok" : "bad"}"><strong>${ok ? "¡Correcto!" : "No es esa."}</strong><br><b>Pregunta ${it.q.id}:</b> ${escapeHtml(it.q.question)}<br><b>Respuesta:</b> ${escapeHtml(it.q.short)}.</div>` : ""}
          <div class="nav-actions"><span></span><button class="btn btn-primary ${ans ? "" : "hidden"}" id="vf-next">${last ? "Ver resultados" : "Siguiente →"}</button></div></article>`;
        $$(".opt", root).forEach(b => b.onclick = () => { it.pick = b.dataset.v == "1"; (it.pick === it.t) ? App.missed.delete(it.q.id) : App.missed.add(it.q.id); App.save(); render(); });
        $("#vf-next", root) && ($("#vf-next", root).onclick = () => last ? finish() : (i++, render()));
      };
      const finish = () => { const n = items.filter(x => x.pick === x.t).length; root.innerHTML = `<div class="score-card"><p class="eyebrow dark">RONDA TERMINADA</p><strong>${n}/${items.length}</strong> <span class="pct">${Math.round(n / items.length * 100)}%</span><div class="row-gap"><button class="btn btn-primary" id="vf-again">Otra ronda</button></div></div>`; $("#vf-again", root).onclick = setup; };
      render();
    }
    setup();
  }
});
