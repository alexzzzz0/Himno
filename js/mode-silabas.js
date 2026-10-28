/* MODO: Silabeo del Himno (aprender y practicar). Datos en js/silabas-data.js */
App.register({
  id: "silabas", icon: "♪", title: "Silabeo del Himno", cta: "Analizar versos",
  desc: "Divide cada verso en sílabas, selecciónalas y descubre qué regla métrica se aplica.",
  mount(root) {
    const D = SilabasData, L = "ABCDEF";
    const HINT = { S: "Vocales de palabras distintas que se funden en una sílaba", H: "Dos vocales seguidas que NO se funden", N: "Dos vocales de la misma palabra que se funden", D: "Un diptongo que se separa en dos sílabas", M: "Sílaba con el acento del verso (3.ª, 6.ª o 9.ª)", A: "Última palabra aguda: suma una sílaba", E: "Última palabra esdrújula: resta una sílaba", 0: "Silabeo normal, sin figura métrica" };
    const BY = { 1: ["M", "A", "E", "0"], 2: ["S", "H", "N", "D", "0"] };
    let st = "c", vi = 0, mode = "learn", sel = [], anchor = null, found = new Set(), msg = "", reveal = false, hint = [];
    const same = (a, b) => a.length === b.length && a.every((x, i) => x === b[i]);
    const nm = r => D.RULES[r][0], ruleCard = r => `<div class="rule-card"><b>${nm(r)}.</b> ${D.RULES[r][1]}</div>`;
    const cut = (v, a) => a.map(i => v.syl[i].t).join(" + ");
    function render() {
      const v = D.verse(st, vi), n = v.ph.length, s = [...sel].sort((a, b) => a - b), done = mode === "practice" && found.size === n, showMetric = mode === "learn" || reveal || done;
      const chip = i => `<button class="syl ${s.includes(i) ? "sel" : ""} ${hint.includes(i) ? "hint" : ""} ${mode === "practice" && v.ph.some((p, k) => found.has(k) && p.idx.includes(i)) ? "found" : ""}" data-i="${i}">${escapeHtml(v.syl[i].t)}</button>`;
      let panel = "";
      if (s.length) {
        const head = `<div class="selbar"><span><b>Selección:</b> ${escapeHtml(cut(v, s))}</span><button class="text-btn" id="sl-clear">Limpiar</button></div>`;
        if (mode === "learn") { const hits = v.ph.filter(p => same(p.idx, s)); panel = head + (hits.length ? hits.map(h => ruleCard(h.r)).join("") : `<div class="rule-card">Aquí no hay ninguna figura métrica: es silabeo regular.</div>`); }
        else if (BY[s.length]) panel = head + `<p class="notice" style="margin:6px 0">¿Qué regla se aplica a ${s.length == 1 ? "esta sílaba" : "estas dos sílabas"}?</p><div class="options">${BY[s.length].map((r, k) => `<button class="opt" data-r="${r}"><span class="opt-letter">${L[k]}</span><span><b>${r == 0 ? "Ninguna figura" : nm(r)}</b><br><small>${HINT[r]}</small></span></button>`).join("")}</div>`;
        else panel = head + `<div class="rule-card">Las reglas se aplican a 1 o 2 sílabas. Toca de nuevo para elegir otra selección.</div>`;
      }
      const list = [...found].sort((a, b) => a - b).map(k => `<li><b>${escapeHtml(cut(v, v.ph[k].idx))}</b> → ${nm(v.ph[k].r)}</li>`).join("");
      root.innerHTML = `
        <div class="workspace-top"><div><p class="eyebrow dark">MÉTRICA</p><h2>Silabeo del Himno</h2></div>
          <div class="row-gap"><label class="compact-label">Estrofa<select id="sl-st">${D.keys.map(k => `<option value="${k}" ${k == st ? "selected" : ""}>${D.LABEL[k]}</option>`).join("")}</select></label>
          <label class="compact-label">Modo<select id="sl-mode"><option value="learn" ${mode == "learn" ? "selected" : ""}>Aprender</option><option value="practice" ${mode == "practice" ? "selected" : ""}>Practicar</option></select></label></div></div>
        <div class="vbar">${[0, 1, 2, 3, 4, 5, 6, 7].map(i => `<button class="btn btn-secondary ${i == vi ? "on" : ""}" data-v="${i}">Verso ${i + 1}</button>`).join("")}</div>
        <article class="exam-question"><div class="card-meta"><span class="pill">${D.LABEL[st].toUpperCase()} · VERSO ${vi + 1}</span><span class="pill muted">${showMetric ? v.syl.length + " SÍLABAS → " + v.count + " MÉTRICAS" : "10 SÍLABAS MÉTRICAS"}</span></div>
          <h3>${escapeHtml(v.text)}</h3>
          <p class="notice" style="margin:0 0 10px">${mode == "learn" ? "Toca una sílaba; toca otra para seleccionar todo el tramo entre las dos." : `Encuentra las ${n} figuras del verso. Toca una sílaba (o dos para un tramo) y elige la regla. Encontradas: <b>${found.size}/${n}</b>`}</p>
          <div>${v.words.map(w => `<span class="word">${w.map(chip).join("")}</span>`).join("")}</div>
          ${showMetric ? `<div class="metric">${v.units.map((u, k) => `<span class="unit ${u.some(i => v.syl[i].st) ? "stress" : ""}"><b>${k + 1}</b>${u.map(i => escapeHtml(v.syl[i].t)).join("‿")}</span>`).join("")}${v.agu ? `<span class="unit ghost"><b>${v.count}</b>+1</span>` : ""}</div><p class="notice">Reglas en este verso: ${[...new Set(v.ph.map(p => nm(p.r)))].join(" · ")}</p>` : ""}
          <div class="fb">${msg ? `<div class="fb-box ${msg[0] == "✓" ? "ok" : "bad"}">${msg}</div>` : ""}${done ? `<div class="fb-box ok"><strong>¡Verso completo!</strong> Encontraste las ${n} figuras.</div>` : ""}</div>
          ${panel}
          ${mode == "practice" && list ? `<details open class="question-item" style="margin-top:12px"><summary>Figuras encontradas (${found.size})</summary><ul class="found-list">${list}</ul></details>` : ""}
          <div class="nav-actions"><button class="text-btn" id="sl-prev">← Verso anterior</button>${mode == "practice" && !done ? `<span><button class="text-btn" id="sl-hint">Pista</button> · <button class="text-btn" id="sl-show">Ver solución</button></span>` : "<span></span>"}<button class="text-btn" id="sl-next">Siguiente verso →</button></div>
        </article>
        <details class="question-item" style="margin-top:14px"><summary>Glosario de reglas</summary>${["S", "H", "N", "D", "M", "A", "E"].map(ruleCard).join("")}</details>`;
    }
    const reset = () => { sel = []; anchor = null; found = new Set(); msg = ""; reveal = false; hint = []; render(); };
    const go = d => { const flat = D.keys.flatMap(k => [0, 1, 2, 3, 4, 5, 6, 7].map(i => [k, i])); const p = flat.findIndex(x => x[0] == st && x[1] == vi); [st, vi] = flat[(p + d + flat.length) % flat.length]; reset(); };
    root.addEventListener("change", e => { if (e.target.id == "sl-st") { st = e.target.value; vi = 0; reset(); } if (e.target.id == "sl-mode") { mode = e.target.value; reset(); } });
    root.addEventListener("click", e => {
      const t = e.target.closest("button"); if (!t) return;
      const v = D.verse(st, vi);
      if (t.dataset.v) { vi = +t.dataset.v; return reset(); }
      if (t.id == "sl-prev") return go(-1); if (t.id == "sl-next") return go(1);
      if (t.id == "sl-clear") { sel = []; anchor = null; return render(); }
      if (t.id == "sl-show") { reveal = true; return render(); }
      if (t.id == "sl-hint") { const k = v.ph.findIndex((p, k) => !found.has(k)); hint = v.ph[k].idx; msg = ""; return render(); }
      if (t.dataset.i) {
        const i = +t.dataset.i; msg = ""; hint = [];
        if (sel.length == 1 && anchor !== null && i != anchor) { const a = Math.min(anchor, i), b = Math.max(anchor, i); sel = []; for (let x = a; x <= b; x++) sel.push(x); }
        else if (sel.length == 1 && i == anchor) { sel = []; anchor = null; }
        else { sel = [i]; anchor = i; }
        return render();
      }
      if (t.dataset.r) {
        const s = [...sel].sort((a, b) => a - b), r = t.dataset.r, hits = v.ph.map((p, k) => [p, k]).filter(([p]) => same(p.idx, s)), q = `«${escapeHtml(cut(v, s))}»`;
        const real = hits.map(([p]) => nm(p.r)).join(" y ");
        if (r == "0") msg = hits.length ? `✗ ${q} sí forma una figura métrica. Respuesta: <b>${real}</b>.` : `✓ ${q} no forma ninguna figura: es silabeo normal.`;
        else {
          const k = hits.find(([p, k]) => p.r == r && !found.has(k));
          if (k) { found.add(k[1]); msg = `✓ <b>¡Correcto!</b> ${q} → <b>${nm(r)}</b>. ${D.RULES[r][1]}`; sel = []; anchor = null; }
          else if (hits.length) msg = `✗ ${q} no es ${nm(r)}. Respuesta: <b>${real}</b>.${hits.every(([, k]) => found.has(k)) ? " (Ya la habías encontrado.)" : ""}`;
          else msg = `✗ ${q} no forma ninguna figura métrica (silabeo normal).`;
        }
        render();
      }
    });
    render();
  }
});
