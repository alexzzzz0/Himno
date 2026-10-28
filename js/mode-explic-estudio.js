/* MODO: Estudiar las explicaciones por estrofa (verso + explicación oficial resumida) */
const EXPLIC = {
  c: "La bandera es un resplandor de cielo cruzado por una franja blanca, símbolo de paz, serenidad y pureza. Las cinco estrellas recuerdan que los estados centroamericanos, hoy desunidos, formaron y han de formar una sola patria. El emblema es el escudo: el mar embravecido representa los dos océanos que bañan y protegen las costas; el volcán, el territorio nacional; y el sol naciente, la vida que se renueva cada día.",
  1: "La india virgen y hermosa personifica a Honduras: virgen porque ningún hombre extraño había puesto la planta en su suelo. Dormía arrullada por el rumor de sus mares cuando Cristóbal Colón la halló en 1502; su admiración ante tanta belleza fue consagrada por el oleaje, como besos de amor.",
  2: "Colón concibió la existencia de otras tierras y, tras grandes esfuerzos, navegó el Atlántico. En su cuarto viaje descubrió Honduras y tomó posesión en nombre de los reyes Fernando e Isabel el 17 de agosto de 1502; el territorio fue llamado Hibueras. Al despertar, la india vio flamear la bandera española.",
  3: "A la ocupación siguió el dominio. En 1537 todo el país estaba sometido, salvo las tribus aguerridas de Cerquín, que se unieron bajo el mando de Lempira, con campamento en Congolón, Coyucotena y Piedra Parada (Erandique). Un emisario enviado por Cáceres con bandera blanca le disparó un arcabuz en la frente; con su muerte quedó implantado el coloniaje.",
  4: "Tres siglos duró la dominación española: los nativos servían en verdadera esclavitud en nombre del Rey y sus ansias de libertad se perdían en el viento. Al fin, los hijos del pueblo sometido oyeron el eco del movimiento revolucionario del otro lado del Atlántico.",
  5: "Se evoca el nacimiento político de Francia en 1789, con Libertad, Igualdad y Fraternidad frente al absolutismo. Dantón fue orador y estadista, decapitado al año siguiente del terror de 1793. El rey Luis XVI fue condenado a muerte y se estableció el culto a la razón, elevada a diosa de los franceses.",
  6: "Como Francia, Honduras sacudió la servidumbre con la proclamación de la Independencia el 15 de septiembre de 1821. Los pliegos llegaron a Tegucigalpa en la tarde del 28 de septiembre y fueron celebrados con júbilo. La dominación española desapareció como un ave negra y dañina que se pierde en el horizonte.",
  7: "Los hondureños juran emplear todos sus recursos y fuerzas para que Honduras sea siempre libre, soberana e independiente, y declaran que será feliz el destino si la muerte los halla pensando en la Patria. La bandera es sagrada porque encierra la dignidad colectiva: morirán a su pie, como leones, todos los necesarios, dejando modelos de honor."
};
App.register({
  id: "explicEstudio", icon: "▤", title: "Estudiar explicaciones", cta: "Leer",
  desc: "Cada estrofa con su explicación oficial. Intenta explicarla tú antes de revelarla.",
  mount(root) {
    const D = SilabasData; let k = "c", show = false;
    function render() {
      const verses = [0, 1, 2, 3, 4, 5, 6, 7].map(i => D.verse(k, i).text);
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">ESTUDIO</p><h2>Estudiar las explicaciones</h2></div></div>
        <div class="vbar">${D.keys.map(x => `<button class="btn btn-secondary ${x == k ? "on" : ""}" data-k="${x}">${D.LABEL[x]}</button>`).join("")}</div>
        <article class="exam-question"><div class="card-meta"><span class="pill">${D.LABEL[k].toUpperCase()}</span></div>
        <blockquote class="verses">${verses.map(escapeHtml).join("<br>")}</blockquote>
        <p class="notice" style="margin-top:0">Primero lee los versos e intenta decir con tus palabras qué cuentan. Luego compara.</p>
        ${show ? `<div class="answer-box"><span class="answer-label">EXPLICACIÓN</span><p>${escapeHtml(EXPLIC[k])}</p></div>` : ""}
        <div class="card-actions"><button class="btn btn-primary" id="ee-toggle">${show ? "Ocultar explicación" : "Mostrar explicación"}</button><a class="btn btn-secondary" href="silabas.html">Silabear esta estrofa</a><a class="btn btn-secondary" href="#explic" data-tab="explic">Hacer la prueba</a></div></article>`;
    }
    root.addEventListener("click", e => {
      const b = e.target.closest("[data-k]"); if (b) { k = b.dataset.k; show = false; return render(); }
      if (e.target.closest("#ee-toggle")) { show = !show; render(); }
      if (e.target.closest("[data-tab]")) { e.preventDefault(); const t = document.querySelector('.tab[data-view="explic"]'); t && t.click(); }
    });
    render();
  }
});
