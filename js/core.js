/* NÚCLEO: utilidades, almacenamiento, registro de modos y generador de opciones.
   Para añadir un modo nuevo: crea js/mi-modo.js, llama App.register({...}) y agrégalo en index.html. */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const escapeHtml = v => String(v).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const shuffle = a => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const CATEGORIES = { himno: "Himno: historia y datos", explicacion: "Explicación del Himno", bandera: "La Bandera", escudo: "El Escudo" };
const byId = id => QUESTION_BANK.find(q => q.id === id);
const figHtml = q => q.image ? `<img class="figure" src="${q.image}" alt="Figura ilustrativa de la pregunta ${q.id}">` : "";

const Store = {
  get(k, d) { try { const v = localStorage.getItem("hn:" + k); return v === null ? d : JSON.parse(v); } catch { return d; } },
  set(k, v) { try { localStorage.setItem("hn:" + k, JSON.stringify(v)); } catch { } }
};

/* ---------- Opciones de opción múltiple ---------- */
const LOW = new Set(["de", "la", "el", "los", "las", "del", "en", "a", "y", "que", "por", "se", "es", "al", "un", "una", "con", "su", "sus", "para", "le", "lo", "o", "e", "nuestro", "nuestra", "nuestros", "nuestras"]);
const tokens = s => (s.toLocaleLowerCase("es").normalize("NFD").replace(/[̀-ͯ]/g, "").match(/[a-z0-9]+/g) || []).filter(t => !LOW.has(t));
// Pares cuyas respuestas se parecen demasiado: nunca se usan como distractores entre sí.
const BLOCKED = new Set([[84, 91], [82, 84], [82, 91], [83, 90], [73, 74], [74, 77], [70, 75], [22, 47], [24, 47], [14, 29], [14, 46], [29, 46], [15, 17], [57, 58], [50, 51], [53, 54], [45, 46], [66, 67], [88, 86]].map(p => p.sort((a, b) => a - b).join("-")));
const blocked = (a, b) => BLOCKED.has([a, b].sort((x, y) => x - y).join("-"));
// Tipo de respuesta: las opciones falsas se eligen primero entre preguntas del mismo grupo.
const GROUPS = { personas: [10, 11, 12, 18, 21, 25, 26, 61], legal: [19, 22, 23, 24, 27, 43, 47, 63, 64, 65, 81], lugares: [15, 16, 17, 59, 83, 87], musica: [2, 3, 4, 5, 6, 7, 8, 9, 33, 35], himno: [1, 13, 14, 20, 29, 30, 31, 32, 34, 36, 37, 38, 39, 40, 41, 42, 44, 45, 46, 48], estrofas: [49, 50, 51, 52, 53, 54, 55, 56], bandera: [57, 58, 60, 62, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78], escudo: [79, 80, 82, 84, 85, 86, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100] };
const groupOf = id => Object.keys(GROUPS).find(g => GROUPS[g].includes(id));
function distractorPool(q) {
  if (q._pool) return q._pool;
  const qt = new Set(tokens(q.question)), cs = new Set(tokens(q.short));
  q._pool = QUESTION_BANK.filter(o => o.id !== q.id && !blocked(q.id, o.id)).map(o => {
    const ot = tokens(o.question), inter = ot.filter(t => qt.has(t)).length;
    return { o, s: inter / (qt.size + ot.length - inter || 1) + (groupOf(o.id) === groupOf(q.id) ? .5 : 0) + (o.category === q.category ? .12 : 0) };
  }).sort((a, b) => b.s - a.s).filter(x => {
    const t = tokens(x.o.short), inter = t.filter(w => cs.has(w)).length;
    return inter / Math.max(1, Math.min(t.length, cs.size)) < .6;
  }).slice(0, 8).map(x => x.o);
  return q._pool;
}
function buildOptions(q, n = 4) {
  const d = shuffle(distractorPool(q).slice(0, 6)).slice(0, n - 1);
  return shuffle([q, ...d]).map(o => ({ id: o.id, text: o.short, correct: o.id === q.id }));
}

/* ---------- Dificultad (se recuerda en el navegador) ---------- */
const DIFF = { facil: { label: "Fácil · 3 opciones", n: 3, secs: 0 }, normal: { label: "Normal · 4 opciones", n: 4, secs: 0 }, dificil: { label: "Difícil · 5 opciones, 25 s", n: 5, secs: 25 }, experto: { label: "Experto · 5 opciones, 12 s, sin volver", n: 5, secs: 12 } };
const curDiff = () => DIFF[Store.get("diff", "normal")] || DIFF.normal;
const diffSelect = id => `<label class="compact-label">Dificultad<select id="${id}" data-diff>${Object.entries(DIFF).map(([k, v]) => `<option value="${k}" ${k === Store.get("diff", "normal") ? "selected" : ""}>${v.label}</option>`).join("")}</select></label>`;
document.addEventListener("change", e => { if (e.target.dataset && e.target.dataset.diff !== undefined) Store.set("diff", e.target.value); });

/* ---------- Aplicación y registro de modos ---------- */
const App = {
  modes: [],
  learned: new Set(Store.get("learned", (() => { try { return JSON.parse(localStorage.getItem("hnLearnedQuestions") || "[]"); } catch { return []; } })())),
  review: new Set(Store.get("review", [])),
  missed: new Set(Store.get("missed", [])),
  register(mode) { this.modes.push(mode); },
  save() { Store.set("learned", [...this.learned]); Store.set("review", [...this.review]); Store.set("missed", [...this.missed]); this.refreshStats(); },
  bestExam() { const b = Store.get("best", {}); return Math.max(0, ...Object.values(b)); },
  refreshStats() {
    if (!$("#total-count")) return;
    $("#total-count").textContent = QUESTION_BANK.length;
    $("#learned-count").textContent = this.learned.size;
    $("#progress-percent").textContent = Math.round(this.learned.size / QUESTION_BANK.length * 100) + "%";
    const b = this.bestExam(); $("#best-exam").textContent = b ? b + "%" : "—";
    $("#missed-count").textContent = this.missed.size;
  },
  show(id, scroll = true) {
    if (!$(`#${id}-view`)) return;
    $$(".view-panel").forEach(p => p.classList.add("hidden"));
    $(`#${id}-view`).classList.remove("hidden");
    $$(".tab").forEach(b => b.classList.toggle("selected", b.dataset.view === id));
    if (scroll) $(".tabs") ? $(".tabs").scrollIntoView({ behavior: "smooth", block: "start" }) : 0;
  },
  /* Monta en la página actual los modos indicados (con pestañas si son varios). Enlaces directos: pagina.html#id */
  page(ids) {
    const ms = ids.map(id => this.modes.find(m => m.id === id));
    const tabs = ms.length > 1 ? `<div class="tabs">${ms.map(m => `<button class="tab" data-view="${m.id}"><span>${m.icon}</span> ${m.title}</button>`).join("")}</div>` : "";
    $("#views").innerHTML = tabs + ms.map(m => `<section id="${m.id}-view" class="workspace view-panel hidden"></section>`).join("");
    ms.forEach(m => m.mount($(`#${m.id}-view`)));
    document.addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) { this.show(b.dataset.view, false); history.replaceState(null, "", "#" + b.dataset.view); } });
    const h = location.hash.slice(1);
    this.show(ids.includes(h) ? h : ids[0], false);
    this.refreshStats();
  }
};
