/* MODO: banco de preguntas (consulta y búsqueda) */
App.register({
  id: "list", icon: "☷", title: "Banco de preguntas", cta: "Explorar",
  desc: "Consulta el cuestionario completo, busca palabras y despliega cada respuesta.",
  mount(root) {
    root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">CONSULTA RÁPIDA</p><h2>Banco de preguntas</h2></div><span class="counter" id="ls-count"></span></div>
      <div class="search-row"><input id="ls-search" type="search" placeholder="Buscar por pregunta o respuesta…" aria-label="Buscar preguntas"><select id="ls-cat" aria-label="Filtrar categoría"><option value="all">Todas las categorías</option>${Object.entries(CATEGORIES).map(([k, v]) => `<option value="${k}">${v}</option>`).join("")}</select></div>
      <div id="ls-list" class="question-list"></div>`;
    function render() {
      const term = $("#ls-search", root).value.toLocaleLowerCase("es"), cat = $("#ls-cat", root).value;
      const items = QUESTION_BANK.filter(q => (cat === "all" || q.category === cat) && `${q.question} ${q.answer} ${q.id}`.toLocaleLowerCase("es").includes(term));
      $("#ls-count", root).textContent = `${items.length} registros`;
      $("#ls-list", root).innerHTML = items.map(q => `<details class="question-item"><summary><div class="qnum">PREGUNTA ${String(q.id).padStart(2, "0")} · ${CATEGORIES[q.category].toUpperCase()}</div>${escapeHtml(q.question)}</summary><p class="prewrap">${escapeHtml(q.answer)}</p>${figHtml(q)}</details>`).join("");
    }
    $("#ls-search", root).oninput = render; $("#ls-cat", root).onchange = render; render();
  }
});
