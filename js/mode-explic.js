/* MODO: Examen de las explicaciones de cada estrofa (opción múltiple). Cada fila: [estrofa, pregunta, correcta, falsa1, falsa2, falsa3] */
App.register({
  id: "explic", icon: "✎", title: "Examen de explicaciones", cta: "Practicar",
  desc: "Preguntas sobre la explicación oficial de cada estrofa: qué significa y qué hecho histórico cuenta.",
  mount(root) {
    const Q = [
      ["c", "¿Qué simboliza la franja blanca de la bandera?", "Paz, serenidad y pureza", "Los dos océanos", "La sangre de los héroes", "La unión de los pueblos indígenas"],
      ["c", "¿Qué recuerdan las cinco estrellas?", "Que los estados centroamericanos, hoy desunidos, formaron y han de formar una sola patria", "Los cinco departamentos fundadores", "Las cinco batallas de la Independencia", "Los cinco viajes de Colón"],
      ["c", "¿Qué representa el mar embravecido del escudo?", "Los dos océanos que bañan y protegen las costas", "Los ríos del país", "El Golfo de Fonseca", "La llegada de los españoles"],
      ["1", "¿A quién personifica la india virgen y hermosa?", "A Honduras", "A Lempira", "A la reina Isabel", "A la Diosa razón"],
      ["1", "¿Por qué se le llama «virgen»?", "Porque en su suelo no había puesto la planta ningún hombre extraño", "Porque vivía aislada en las montañas", "Porque era sagrada para los indígenas", "Porque ninguna tribu la había habitado"],
      ["1", "¿En qué año la halló Cristóbal Colón?", "1502", "1492", "1537", "1821"],
      ["2", "¿Qué bandera flameaba cuando la india levantó la frente?", "La bandera española", "La francesa", "La inglesa", "La portuguesa"],
      ["2", "¿Cómo fue llamado el territorio tras el hallazgo de Colón?", "Hibueras", "Mesoamérica", "Nueva Granada", "Cerquín"],
      ["3", "¿Bajo el mando de quién se unieron las tribus de Cerquín?", "Lempira", "Francisco de Montejo", "Alonso de Cáceres", "Dantón"],
      ["3", "¿Cómo fue herido Lempira según la explicación?", "Un emisario con bandera blanca le disparó un arcabuz en la frente", "Murió en batalla abierta", "Fue capturado y ejecutado", "Murió de enfermedad en Congolón"],
      ["4", "¿Cuánto duró la dominación española?", "Tres siglos", "Dos siglos", "Cuatro siglos", "Un siglo"],
      ["5", "¿Qué hecho recuerda la quinta estrofa?", "El nacimiento político de Francia en 1789", "La independencia de Estados Unidos", "La Revolución rusa", "La Unión Centroamericana"],
      ["5", "¿Quién fue Dantón?", "Orador y estadista de la Revolución francesa, decapitado un año después del terror de 1793", "Rey de Francia condenado a muerte", "Conquistador español de Honduras", "Poeta autor del himno"],
      ["5", "¿A qué se elevó la razón en esa época?", "A la categoría de diosa de los franceses", "A ley suprema del reino", "A símbolo de la monarquía", "A religión oficial de España"],
      ["6", "¿Cuándo se proclamó la Independencia?", "15 de septiembre de 1821", "28 de septiembre de 1821", "15 de septiembre de 1502", "1 de julio de 1823"],
      ["6", "¿Cuándo llegaron los pliegos de la proclama a Tegucigalpa?", "En la tarde del 28 de septiembre", "El 15 de septiembre", "El 1 de enero", "El 28 de marzo"],
      ["6", "¿A qué se compara la desaparición de la dominación española?", "A un ave negra y dañina que se pierde en el horizonte", "A una tormenta que cruza el mar", "A un león que huye", "A un barco que se aleja"],
      ["7", "¿Qué juran los hijos de Honduras en la séptima estrofa?", "Emplear todos sus recursos y fuerzas para que Honduras sea libre, soberana e independiente", "Recuperar los territorios perdidos", "Restablecer la unión con España", "Viajar a Francia"],
      ["7", "¿Por qué es sagrada la bandera para los hondureños?", "Porque encierra la dignidad colectiva", "Porque la diseñó Lempira", "Porque la bendijo la Iglesia", "Porque tiene cinco estrellas"],
      ["g", "¿Quién escribió la letra del Himno Nacional?", "Augusto C. Coello", "Carlos Hartling", "Gualberto Cantarero Palacios", "Rómulo E. Durón"],
      ["g", "¿Quién compuso los arreglos musicales?", "El maestro alemán Carlos Hartling", "El poeta Augusto C. Coello", "Valentín Durón", "Félix A. Tejeda"],
      ["g", "¿Quién escribió el argumento y la explicación oficial?", "El Lic. Gualberto Cantarero Palacios", "El profesor Francisco Arístides Medina", "Augusto C. Coello", "Manuel Bonilla"],
      ["g", "¿De cuántas estrofas y versos se compone el himno?", "7 estrofas y un coro; 64 versos", "8 estrofas y un coro; 72 versos", "7 estrofas sin coro; 56 versos", "6 estrofas y un coro; 48 versos"],
      ["g", "¿En qué sílabas lleva acento métrico cada verso?", "Tercera, sexta y novena", "Primera, cuarta y séptima", "Segunda, quinta y octava", "Cuarta, séptima y décima"],
      ["g", "¿Cuántas sílabas tiene cada verso?", "Diez (decasílabo)", "Ocho (octosílabo)", "Once (endecasílabo)", "Doce (dodecasílabo)"],
      ["g", "¿En qué tonalidad debe entonarse el himno?", "Si bemol Mayor", "Do Mayor", "Re menor", "Sol Mayor"],
      ["g", "¿Por qué se usa esa tonalidad?", "Es la más cómoda para el registro vocal de los niños", "Es la más solemne", "Es la más fácil para la banda", "Es la más antigua"],
      ["g", "¿Qué movimiento musical tiene el coro?", "Allegro (alegre, airoso, marcial)", "Andante (lento y triste)", "Adagio", "Largo"],
      ["g", "¿Qué movimiento tienen los solos o estrofas?", "Andante (lento, pasivo, moderado y triste)", "Allegro", "Presto", "Vivace"],
      ["g", "¿Con qué ritmo y compás se canta el coro?", "Marcha, compás de cuatro cuartos", "Vals, tres cuartos", "Marcha, dos cuartos", "Himno lento, seis octavos"],
      ["g", "¿Cuáles son los cuatro aspectos del himno?", "Histórico, patriótico, jurídico y artístico", "Histórico, político, religioso y musical", "Cívico, jurídico, militar y artístico", "Histórico, patriótico, social y literario"],
      ["g", "¿Qué estrofas relatan el aspecto histórico?", "De la primera a la sexta", "De la segunda a la séptima", "Solo el coro", "Solo la séptima"],
      ["g", "¿Qué estrofa encierra el aspecto patriótico?", "La séptima", "La primera", "La sexta", "El coro"],
      ["g", "¿Qué decretos amparan el aspecto jurídico?", "El No. 42 (emisión) y el No. 34 (aprobación)", "El No. 115 y el No. 42", "El No. 34 y el No. 115", "El No. 10 y el No. 12"],
      ["g", "¿Quién emitió el Decreto No. 42 que oficializó el himno?", "El presidente Dr. Alberto Membreño, en 1915", "Manuel Bonilla, en 1904", "Miguel Dávila, en 1910", "Lempira, en 1537"],
      ["g", "¿Entre qué años Honduras no tuvo himno nacional?", "Desde 1821 hasta 1915", "Desde 1502 hasta 1821", "Desde 1904 hasta 1912", "Desde 1916 hasta 1917"],
      ["g", "¿Cómo se empieza a cantar el himno al dirigirlo?", "En el cuarto tiempo del compás", "En el primer tiempo", "En el segundo tiempo", "En el tercer tiempo"],
      ["g", "¿Cuáles son los movimientos para dirigir el compás?", "Abajo, izquierda, derecha, arriba", "Arriba, derecha, izquierda, abajo", "Abajo, derecha, izquierda, arriba", "Izquierda, abajo, arriba, derecha"],
      ["g", "¿Quién escribió La Granadera?", "Rómulo E. Durón", "José Antonio Domínguez", "Valentín Durón", "Félix A. Tejeda"],
      ["g", "¿Qué pasó con el concurso abierto en 1910 para escribir el himno?", "Fue declarado desierto en 1912", "Eligió a Coello en 1910", "Se canceló en 1915", "Lo ganó Hartling en 1911"],
      ["g", "¿Cuándo se publicó el Decreto No. 42 en La Gaceta?", "El 15 de enero de 1916", "El 15 de septiembre de 1821", "El 23 de enero de 1917", "El 28 de marzo de 1912"],
      ["g", "¿Cuándo se ratificó con el Decreto Legislativo No. 34?", "El 23 de enero de 1917", "El 15 de enero de 1916", "El 15 de septiembre de 1904", "El 28 de septiembre de 1821"],
      ["g", "¿En qué estrofa se habla de Lempira?", "Tercera", "Primera", "Cuarta", "Sexta"],
      ["g", "¿En qué estrofa se recuerda la Revolución francesa?", "Quinta", "Cuarta", "Sexta", "Séptima"],
      ["g", "¿En qué estrofa aparece Cristóbal Colón por primera vez?", "Primera", "Tercera", "Quinta", "Séptima"],
      ["g", "¿En qué estrofa se proclama la Independencia?", "Sexta", "Segunda", "Cuarta", "Séptima"],
      ["c", "¿Qué indica el sol naciente sobre el volcán?", "Que la vida se desarrolla cada día con nueva juventud", "Que terminó la dominación española", "Que Honduras tiene tres poderes", "Que el país es agrícola"],
      ["c", "¿Qué representa el volcán del escudo?", "El territorio nacional protegido por los dos mares", "Los volcanes de Centroamérica", "La fuerza de los pueblos indígenas", "El camino a la Independencia"],
      ["c", "¿Qué era el sol para los aborígenes?", "Imagen de adoración, centro del Universo", "Símbolo de guerra", "Señal del calendario", "Una ofrenda a los reyes"],
      ["c", "¿Qué leyenda lleva el óvalo del escudo?", "República de Honduras, libre, soberana e independiente, 15 de septiembre de 1821", "República de Honduras, unida y soberana, 1 de enero de 1824", "Honduras libre y federal, 15 de septiembre de 1502", "Honduras, Dios, Unión y Libertad"],
      ["c", "¿Con qué compara el himno a la bandera?", "Con un lampo de cielo cruzado por un bloque de nieve", "Con una nube sobre el mar", "Con un río entre montañas", "Con una estrella en la noche"],
      ["1", "¿Cómo estaba la india cuando la halló Colón?", "Dormida, arrullada por el rumor de sus mares, con sus riquezas alrededor", "Despierta y armada", "Huyendo hacia las montañas", "Cubierta por la bandera española"],
      ["1", "¿Qué simboliza el oleaje que «besa» el manto de la india?", "El mar consagrando el hallazgo con besos de amor eterno", "Una tormenta que destruye", "La llegada de los piratas", "Un aviso de guerra"],
      ["1", "¿Qué sintió Colón al ver tanta belleza natural?", "Admiración y embeleso", "Miedo", "Indiferencia", "Enojo"],
      ["2", "¿En nombre de qué reyes tomó posesión Colón?", "Fernando e Isabel", "Carlos V y Felipe II", "Luis XVI y María Antonieta", "Alfonso X e Isabel II"],
      ["2", "¿En qué fecha tomó posesión del territorio?", "17 de agosto de 1502", "15 de septiembre de 1821", "12 de octubre de 1492", "28 de marzo de 1912"],
      ["2", "¿En qué viaje de Colón se descubrió Honduras?", "En el cuarto y último", "En el primero", "En el segundo", "En el tercero"],
      ["2", "¿Qué océano atravesó Colón para llegar?", "El Atlántico", "El Pacífico", "El Índico", "El Ártico"],
      ["3", "¿Qué tribus faltaban por someter en 1537?", "Las aguerridas tribus de Cerquín", "Las de Copantl", "Las de Hibueras", "Las de Comayagua"],
      ["3", "¿Dónde estableció su campamento Lempira?", "En las alturas de Congolón, Coyucotena y Piedra Parada", "En la costa del Atlántico", "En Comayagua", "En el Golfo de Fonseca"],
      ["3", "¿Qué gobernador mandó al capitán Alonso de Cáceres contra Lempira?", "Francisco de Montejo", "Pedro de Alvarado", "Hernán Cortés", "Cristóbal de Olid"],
      ["3", "¿A qué municipio corresponde Piedra Parada?", "Erandique", "Gracias", "Cerquín", "Comayagua"],
      ["3", "¿Qué ocurrió tras la muerte de Lempira?", "Los indios, amedrentados, se dieron por vencidos y quedó implantado el coloniaje", "Continuó la resistencia por varios años", "Los españoles abandonaron el territorio", "Llegó la Independencia"],
      ["4", "¿Cómo vivían los nativos durante la dominación española?", "En verdadera esclavitud, sirviendo en nombre del Rey", "Con plena libertad", "Como aliados de los conquistadores", "Gobernados por sus caciques"],
      ["4", "¿Qué oyeron al fin los hijos del pueblo sometido?", "El eco del movimiento revolucionario del otro lado del Atlántico", "Las campanas de la catedral", "Un cañonazo desde Tegucigalpa", "La voz de Lempira"],
      ["4", "¿Qué significa que el reclamo «se perdió en la atmósfera azul»?", "Que las ansias de libertad no eran atendidas", "Que hubo una revolución", "Que llovió durante siglos", "Que Honduras fue abandonada"],
      ["5", "¿Qué derechos se reconocieron en la Revolución francesa?", "Libertad, Igualdad y Fraternidad", "Paz, Pan y Tierra", "Orden, Progreso y Unión", "Dios, Patria y Rey"],
      ["5", "¿Cómo se llamaba el rey de Francia condenado a muerte?", "Luis XVI", "Luis XIV", "Napoleón", "Felipe II"],
      ["5", "¿De qué fue condenado el rey?", "De conspiración contra la libertad y atentados contra la seguridad del Estado", "De traición a la Iglesia", "De perder una guerra", "De abdicar"],
      ["5", "¿Contra qué se levantó el movimiento francés?", "Contra el absolutismo de los reyes, del clero y de los nobles", "Contra la República", "Contra el comercio", "Contra el ejército"],
      ["5", "¿En qué año fue decapitado Dantón?", "1794, un año después del terror de 1793", "1789", "1821", "1502"],
      ["6", "¿Qué significa que Honduras destrozó «el infame eslabón»?", "Que rompió con la Independencia las cadenas de la servidumbre", "Que construyó un puente", "Que ganó una batalla", "Que se unió a Francia"],
      ["6", "¿Dónde se celebró con júbilo la llegada de los pliegos?", "En la sala capitular de Tegucigalpa", "En Comayagua", "En San Pedro Sula", "En Gracias"],
      ["6", "¿Qué representa el «ave de negro plumaje»?", "La dominación española que desaparece", "La fuerza de Honduras", "Un mensajero de Francia", "Un águila libre"],
      ["7", "¿Qué aspecto del himno se expresa en la séptima estrofa?", "El patriótico", "El histórico", "El jurídico", "El artístico"],
      ["7", "¿Cómo morirán los hondureños defendiendo la bandera?", "Como leones, al pie de ella, a millares", "En silencio, sin luchar", "Huyendo al exilio", "Rendidos"],
      ["7", "¿Qué dejarán a los sucesores?", "Modelos de honor que sabrán imitar dignamente", "Riquezas y tierras", "Un himno nuevo", "Una corona"],
      ["7", "¿Cómo juran los hondureños emplear sus recursos?", "Unidos, esforzados y leales", "Divididos y cautos", "Solo con dinero", "En secreto"]
    ];
    const L = "ABCD", best = () => Store.get("bestExplic", 0);
    function setup() {
      root.innerHTML = `<div class="workspace-top"><div><p class="eyebrow dark">EXAMEN</p><h2>Examen de explicaciones</h2></div><span class="counter">${Q.length} preguntas · mejor: ${best() ? best() + "%" : "—"}</span></div>
        <div class="exam-intro"><div class="exam-symbol">✎</div><h3>¿Entiendes lo que dice cada estrofa?</h3><p>Responde con la explicación oficial del himno. Recibes la corrección al instante.</p>
        <div class="row-gap center"><label class="compact-label">Estrofa<select id="ex-st"><option value="all">Todas</option>${SilabasData.keys.map(k => `<option value="${k}">${SilabasData.LABEL[k]}</option>`).join("")}<option value="g">General</option></select></label>
        <label class="compact-label">Cantidad<select id="ex-n"><option value="5">5</option><option value="10">10</option><option value="20">20</option><option value="99">Todas</option></select></label></div>
        <button class="btn btn-primary" id="ex-go">Comenzar</button></div>`;
      $("#ex-go", root).onclick = () => {
        const s = $("#ex-st", root).value, pool = Q.filter(q => s == "all" || q[0] == s);
        run(shuffle(pool).slice(0, +$("#ex-n", root).value).map(q => ({ q, o: shuffle([[q[2], true], ...q.slice(3).map(x => [x, false])]), pick: null })));
      };
    }
    function run(items) {
      let i = 0;
      const render = () => {
        const it = items[i], ans = it.pick !== null, last = i == items.length - 1;
        root.innerHTML = `<div class="study-progress"><span>Pregunta ${i + 1} de ${items.length}</span><div class="progress-track"><span style="width:${(i + (ans ? 1 : 0)) / items.length * 100}%"></span></div></div>
          <article class="exam-question"><div class="card-meta"><span class="pill">${SilabasData.LABEL[it.q[0]].toUpperCase()}</span></div><h3>${escapeHtml(it.q[1])}</h3>
          <div class="options">${it.o.map((o, k) => `<button class="opt ${ans ? (o[1] ? "correct" : k == it.pick ? "wrong" : "") : ""}" data-k="${k}" ${ans ? "disabled" : ""}><span class="opt-letter">${L[k]}</span><span>${escapeHtml(o[0])}</span></button>`).join("")}</div>
          ${ans ? `<div class="fb-box ${it.o[it.pick][1] ? "ok" : "bad"}"><strong>${it.o[it.pick][1] ? "¡Correcto!" : "No es esa."}</strong> <br><b>Pregunta ${Q.indexOf(it.q) + 1}:</b> ${escapeHtml(it.q[1])}<br><b>Respuesta:</b> ${escapeHtml(it.q[2])}</div>` : ""}
          <div class="nav-actions"><span></span><button class="btn btn-primary ${ans ? "" : "hidden"}" id="ex-next">${last ? "Ver resultados" : "Siguiente →"}</button></div></article>
          <button class="text-btn quit" id="ex-quit">Salir</button>`;
        $$(".opt", root).forEach(b => b.onclick = () => { it.pick = +b.dataset.k; render(); });
        $("#ex-next", root).onclick = () => last ? finish() : (i++, render());
        $("#ex-quit", root).onclick = setup;
      };
      const finish = () => {
        const ok = items.filter(x => x.o[x.pick][1]).length, pct = Math.round(ok / items.length * 100), bad = items.filter(x => !x.o[x.pick][1]);
        if (pct > best()) Store.set("bestExplic", pct);
        root.innerHTML = `<div class="score-card"><p class="eyebrow dark">RESULTADO</p><strong>${ok}/${items.length}</strong> <span class="pct">${pct}%</span><p>${pct >= 90 ? "¡Excelente! Dominas las explicaciones." : pct >= 70 ? "¡Muy bien! Repasa lo que falló." : "Repasa las explicaciones y vuelve a intentarlo."}</p><div class="row-gap"><button class="btn btn-secondary" id="ex-again">Nuevo examen</button></div></div>
          ${bad.length ? `<h3 class="sub">Para repasar</h3>${bad.map(x => `<div class="exam-result-item"><strong>${Q.indexOf(x.q) + 1}. ${escapeHtml(x.q[1])}</strong><p class="bad-line">Tu respuesta: ${escapeHtml(x.o[x.pick][0])}</p><p class="ok-line">Correcta: ${escapeHtml(x.q[2])}</p></div>`).join("")}` : ""}`;
        $("#ex-again", root).onclick = setup;
      };
      render();
    }
    setup();
  }
});
