/* MOTOR DE QUIZ de opción múltiple (lo usan "Repaso rápido" y "Examen").
   runQuiz(root, { questions, instant, title, size, onDone }) */
function runQuiz(root, cfg) {
  const items = cfg.questions.map(q => ({ q, opts: buildOptions(q, cfg.n || 4), pick: null }));
  let i = 0, streak = 0, bestStreak = 0;
  const L = "ABCDE", isOk = x => x.pick !== null && x.pick >= 0 && x.opts[x.pick].correct;
  let tm = null;
  function startTimer() { let t = cfg.secs; const el = $(".timer", root); el.textContent = t + " s"; tm = setInterval(() => { t--; el.textContent = t + " s"; el.classList.toggle("low", t <= 5); if (t <= 0) { clearInterval(tm); timeout(); } }, 1000); }
  function timeout() { const it = items[i]; if (it.pick !== null) return; it.pick = -1; if (cfg.instant) { streak = 0; App.missed.add(it.q.id); App.save(); paint(); $("#q-next", root).classList.remove("hidden"); } else if (i < items.length - 1) { i++; render(); } else finish(); }
  function render() {
    clearInterval(tm);
    const it = items[i], q = it.q, answered = it.pick !== null, last = i === items.length - 1;
    root.innerHTML = `
      <div class="study-progress"><span>Pregunta ${i + 1} de ${items.length}</span><div class="progress-track"><span style="width:${(i + (answered ? 1 : 0)) / items.length * 100}%"></span></div>${cfg.secs ? `<span class="timer"></span>` : ""}${cfg.instant ? `<span class="streak">Racha: <b>${streak}</b></span>` : ""}</div>
      <article class="exam-question"><div class="card-meta"><span class="pill">PREGUNTA ${String(q.id).padStart(2, "0")}</span><span class="pill muted">${CATEGORIES[q.category].toUpperCase()}</span></div>
        <h3>${escapeHtml(q.question)}</h3>
        <div class="options">${it.opts.map((o, k) => `<button class="opt" data-k="${k}"><span class="opt-letter">${L[k]}</span><span>${escapeHtml(o.text)}</span></button>`).join("")}</div>
        <div class="fb"></div>
        <div class="nav-actions">${cfg.instant || cfg.secs ? "<span></span>" : `<button class="text-btn" id="q-prev" ${i === 0 ? "disabled" : ""}>← Anterior</button>`}
          <button class="btn btn-primary ${cfg.instant && !answered ? "hidden" : ""}" id="q-next">${last ? (cfg.instant ? "Ver resultados" : "Terminar examen") : "Siguiente →"}</button></div>
      </article>
      <button class="text-btn quit" id="q-quit">${cfg.instant ? "Salir del repaso" : "Cancelar examen"}</button>`;
    $$(".opt", root).forEach(b => b.onclick = () => choose(+b.dataset.k));
    if (answered) paint(true); else if (cfg.secs) startTimer();
    $("#q-next", root).onclick = () => last ? finish() : (i++, render());
    const pv = $("#q-prev", root); if (pv) pv.onclick = () => { i--; render(); };
    $("#q-quit", root).onclick = () => cfg.onDone(null);
  }
  function paint(restore) {
    const it = items[i], btns = $$(".opt", root);
    btns.forEach((b, k) => {
      const o = it.opts[k];
      if (cfg.instant) { b.disabled = true; if (o.correct) b.classList.add("correct"); else if (k === it.pick) b.classList.add("wrong"); }
      else if (k === it.pick) b.classList.add("selected");
    });
    if (cfg.instant) {
      const ok = it.pick >= 0 && it.opts[it.pick].correct, q = it.q;
      $(".fb", root).innerHTML = `<div class="fb-box ${ok ? "ok" : "bad"}"><strong>${ok ? "¡Correcto!" : it.pick < 0 ? "Tiempo agotado." : "No es esa."}</strong><br><b>Pregunta ${q.id}:</b> ${escapeHtml(q.question)}<br><b>Respuesta:</b> ${escapeHtml(q.short)}.
        <details><summary>Ver respuesta completa</summary><p class="prewrap">${escapeHtml(q.answer)}</p>${figHtml(q)}</details></div>`;
    }
  }
  function choose(k) {
    const it = items[i]; clearInterval(tm);
    if (cfg.instant) {
      if (it.pick !== null) return;
      it.pick = k; const ok = it.opts[k].correct;
      streak = ok ? streak + 1 : 0; bestStreak = Math.max(bestStreak, streak);
      if (ok) App.missed.delete(it.q.id); else App.missed.add(it.q.id);
      App.save();
      $(".streak b", root).textContent = streak; $(".progress-track span", root).style.width = (i + 1) / items.length * 100 + "%";
      paint(); $("#q-next", root).classList.remove("hidden");
    } else {
      it.pick = k; $$(".opt", root).forEach((b, n) => b.classList.toggle("selected", n === k));
      if (i < items.length - 1) setTimeout(() => { if (items[i] === it) { i++; render(); } }, 220);
    }
  }
  function finish() {
    const correct = items.filter(isOk).length;
    const wrong = items.filter(x => !isOk(x));
    if (!cfg.instant) items.forEach(x => { if (isOk(x)) App.missed.delete(x.q.id); else App.missed.add(x.q.id); });
    App.save();
    const pct = Math.round(correct / items.length * 100);
    cfg.onDone({ items, correct, wrong, pct, bestStreak, total: items.length });
  }
  render();
}

/* Pantalla de resultados compartida */
function renderResults(root, r, cfg) {
  const msg = r.pct >= 90 ? "¡Excelente! Dominas el tema." : r.pct >= 70 ? "¡Muy bien! Repasa lo que falló." : r.pct >= 50 ? "Vas por buen camino; sigue practicando." : "Necesitas repasar un poco más. ¡Tú puedes!";
  root.innerHTML = `<div class="score-card"><p class="eyebrow dark">${cfg.title}</p><strong>${r.correct}/${r.total}</strong> <span class="pct">${r.pct}%</span><p>${msg}${cfg.instant ? ` Mejor racha: <b>${r.bestStreak}</b>.` : ""}</p>
    <div class="row-gap">${r.wrong.length ? `<button class="btn btn-primary" id="r-retry">Repasar las ${r.wrong.length} falladas</button>` : ""}<button class="btn btn-secondary" id="r-again">Nueva sesión</button></div></div>
    ${r.wrong.length ? `<h3 class="sub">Para repasar</h3>${r.wrong.map(x => `<div class="exam-result-item"><strong>${x.q.id}. ${escapeHtml(x.q.question)}</strong>
      ${x.pick >= 0 ? `<p class="bad-line">Tu respuesta: ${escapeHtml(x.opts[x.pick].text)}</p>` : `<p class="bad-line">Sin responder</p>`}
      <p class="ok-line">Correcta: ${escapeHtml(x.q.short)}</p><details><summary>Ver respuesta completa</summary><p class="prewrap">${escapeHtml(x.q.answer)}</p>${figHtml(x.q)}</details></div>`).join("")}` : ""}`;
  const rt = $("#r-retry", root); if (rt) rt.onclick = () => cfg.onRetry(r.wrong.map(x => x.q));
  $("#r-again", root).onclick = () => cfg.onDone(null);
}
