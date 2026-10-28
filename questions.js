/* Fuente: Cuestionario Cívico «Breves Preguntas y respuestas del Himno Nacional» (PDF con texto, 100 preguntas). Transcripción conservando la redacción original; solo se corrigieron tildes en las preguntas y errores evidentes de codificación (p. ej. «a;o» → «año»). */
const QUESTION_BANK = [
  {
    "id": 1,
    "question": "¿Qué es nuestro Himno Nacional?",
    "answer": "Es el canto oficial de todos los hondureños y nos expresa un sentimiento colectivo de amor, gratitud, lealtad y respeto en aras de los más caros intereses nacionales.",
    "category": "himno",
    "short": "El canto oficial de todos los hondureños; expresa amor, gratitud, lealtad y respeto",
    "verified": true
  },
  {
    "id": 2,
    "question": "¿Cómo está compuesto el Himno Nacional literalmente?",
    "answer": "Literalmente esta compuesto de ocho estrofas incluyendo el coro y cada estrofa esta formada por ocho versos decasílabos, siendo en su total 64 versos.",
    "category": "himno",
    "short": "Ocho estrofas (con el coro) de ocho versos decasílabos: 64 versos en total",
    "verified": true
  },
  {
    "id": 3,
    "question": "¿Dónde lleva el acento métrico cada verso del Himno Nacional?",
    "answer": "En la tercera, sexta y novena sílaba, por ejemplo:\n\nTu ban-de-ra es un lam-po de cie-lo\n1  2  3  4    5  6  7  8  9  10",
    "category": "himno",
    "short": "En la tercera, sexta y novena sílaba",
    "verified": true
  },
  {
    "id": 4,
    "question": "¿Cómo está compuesto el Himno Nacional musicalmente?",
    "answer": "Musicalmente consta de 7 estrofas llamadas solos y el coro que se repite al final de cada estrofa",
    "category": "himno",
    "short": "7 estrofas llamadas solos y el coro, que se repite al final de cada estrofa",
    "verified": true
  },
  {
    "id": 5,
    "question": "¿Con qué ritmo debe cantarse el Himno Nacional?",
    "answer": "Debe cantarse con ritmo de marcha en compás de cuatro cuartos especialmente el coro y en una forma moderada y pasiva los solos.",
    "category": "himno",
    "short": "Ritmo de marcha en compás de cuatro cuartos (solos moderados y pasivos)",
    "verified": true
  },
  {
    "id": 6,
    "question": "¿En qué tonalidad debe hacerse la entonación del Himno Nacional?",
    "answer": "En la tonalidad de Si bemol Mayor, ya que es la tonalidad que ofrece mayor comodidad para el registro vocal de los niños.",
    "category": "himno",
    "short": "Si bemol Mayor, por ser cómoda para el registro vocal de los niños",
    "verified": true
  },
  {
    "id": 7,
    "question": "¿Cómo se le llama al movimiento musical del coro?",
    "answer": "Se le llama ALLEGRO que quiere decir alegre, airoso, marcial y expresivo",
    "category": "himno",
    "short": "Allegro: alegre, airoso, marcial y expresivo",
    "verified": true
  },
  {
    "id": 8,
    "question": "¿Cómo se le llama al movimiento musical del solo?",
    "answer": "Se le llama ANDANTE y quiere decir lento, pasivo, moderado y triste",
    "category": "himno",
    "short": "Andante: lento, pasivo, moderado y triste",
    "verified": true
  },
  {
    "id": 9,
    "question": "¿En qué tiempo del compás se empieza a cantar el Himno Nacional?",
    "answer": "Al cuarto tiempo del compás",
    "category": "himno",
    "short": "Al cuarto tiempo del compás",
    "verified": true
  },
  {
    "id": 10,
    "question": "¿Quién es el autor de la letra de nuestro Himno Nacional?",
    "answer": "El Poeta Augusto Constancio Coello Estévez, nacido en la ciudad de\n\nTegucigalpa un 1 de Septiembre de 1883 y falleció en la ciudad de San Salvador el 8 de Septiembre de 1941.",
    "category": "himno",
    "short": "Augusto Constancio Coello Estévez",
    "verified": true
  },
  {
    "id": 11,
    "question": "¿Quién es el autor de la música del Himno Nacional?",
    "answer": "Es el Maestro Carlos Hartling, nacido un 2 de Septiembre de 1869 en el pequeño poblado de Schtlotheim, Erfurt, Capital del estado de Turingia, Alemania Federal y falleció en la ciudad de Santa Tecla, El Salvador un 13 de Agosto de 1920.",
    "category": "himno",
    "short": "Carlos Hartling",
    "verified": true
  },
  {
    "id": 12,
    "question": "¿Quién es el autor del argumento y explicación del Himno Nacional?",
    "answer": "Es el Licenciado Guadalberto Palacios, nacido en la Aldea de San Jerónimo, Municipio de Jesús de Otoro, departamento de Intibuca.",
    "category": "himno",
    "short": "Licenciado Guadalberto Palacios",
    "verified": true
  },
  {
    "id": 13,
    "question": "¿Qué Himnos se cantaban antes de que se oficializara el Himno Nacional?",
    "answer": "Se cantaban varios himnos entre los siguientes:\n\n• La Granadera, del Dr. Rómulo E. Durón\n• Himno Marcial, de José Antonio Dominguez\n• Una Salva Hondureños, de autor desconocido\n• Himno Nacional, del Poeta Valentín Durón\n• Himno Hondureño, de Félix A. Tejeda",
    "category": "himno",
    "short": "La Granadera, Himno Marcial, Una Salva Hondureños, el de Valentín Durón y el de Félix A. Tejeda",
    "verified": true
  },
  {
    "id": 14,
    "question": "¿Qué nos relata nuestro Himno Nacional históricamente?",
    "answer": "Dentro del orden cronológico nos relata la historia de nuestra patria, desde el periodo precolombino-descubrimiento-conquista-colonización y la proclamación de independencia de 1821.",
    "category": "himno",
    "short": "La historia de la patria, desde el periodo precolombino hasta la independencia de 1821",
    "verified": true
  },
  {
    "id": 15,
    "question": "¿Dónde se cantó por primera vez nuestro Himno Nacional?",
    "answer": "• En Tegucigalpa, se cantó por primera vez en la escuela «Guadalupe Reyes» un 15 de Septiembre de 1904.\n\n• En Comayaguela se cantó por primera vez en la escuela de niñas hoy República de Argentina dirigida en aquella ocasión por la profesora Mercedes Valle de Zúniga.",
    "category": "himno",
    "short": "En la escuela «Guadalupe Reyes», el 15 de septiembre de 1904",
    "verified": true
  },
  {
    "id": 16,
    "question": "¿Con qué objeto se cantó nuevamente en el Puerto de Amapala en el año 1907?",
    "answer": "Con motivo de reunirse en ese lugar los presidentes centroamericanos, quedando desde entonces en uso para las recepciones y demás actos oficiales.",
    "category": "himno",
    "short": "Por la reunión de los presidentes centroamericanos en ese puerto",
    "verified": true
  },
  {
    "id": 17,
    "question": "¿Oficialmente dónde se cantó por primera vez nuestro Himno Nacional?",
    "answer": "Oficialmente se cantó por primera vez en la Escuela Normal de Señoritas de Comayaguela, con la solemnidad de un Himno Nacional legalmente reconocido.",
    "category": "himno",
    "short": "En la Escuela Normal de Señoritas de Comayaguela",
    "verified": true
  },
  {
    "id": 18,
    "question": "¿Quién fue Don Miguel R. Dávila?",
    "answer": "Fue el Presidente de la República que sancionó el 5 de Abril de 1910 el Decreto\n\nNo. 115 por medio del cual se abría el concurso para escribir la letra y la música del Himno Nacional.",
    "category": "himno",
    "short": "El Presidente que sancionó el Decreto No. 115 que abría el concurso del Himno",
    "verified": true
  },
  {
    "id": 19,
    "question": "¿A iniciativa de qué diputados se emitió el Decreto No. 115 del 5 de Abril de 1910 y de qué trata?",
    "answer": "A iniciativa de los diputados Abogados Rómulo E. Durón y el Doctor Ramón Valladares, el Congreso Nacional emitió el decreto No. 115 con él se abría el concurso sobre la letra y la música del Himno Nacional.\n\nEl cual fue declarado desierto por el jurado respectivo en el año 1912 en virtud de que ninguno de los diez trabajos presentados reunía los requisitos exigidos.",
    "category": "himno",
    "short": "Los diputados Rómulo E. Durón y Ramón Valladares; abría el concurso de letra y música",
    "verified": true
  },
  {
    "id": 20,
    "question": "¿Qué simboliza nuestro Himno Nacional?",
    "answer": "Simboliza el alma de la Patria y expresa el júbilo impetuoso, el encendido entusiasmo y el amor sacrosanto de sus hijos.",
    "category": "himno",
    "short": "El alma de la Patria",
    "verified": true
  },
  {
    "id": 21,
    "question": "¿Qué Presidente dio vida oficial a nuestro Himno Nacional?",
    "answer": "El Doctor Alberto Membreño en el año de 1915 mediante resolución en consejo de Ministros.",
    "category": "himno",
    "short": "El Doctor Alberto Membreño, en 1915",
    "verified": true
  },
  {
    "id": 22,
    "question": "¿Qué Decreto emitió el Poder Ejecutivo para declarar oficial nuestro Himno Nacional?",
    "answer": "El poder Ejecutivo constituído por el Presidente de la República, Doctor Alberto Membreño en Consejo de Ministros emitió el Decreto No. 42 del 3 de Noviembre de 1915.",
    "category": "himno",
    "short": "El Decreto No. 42 del 3 de noviembre de 1915",
    "verified": true
  },
  {
    "id": 23,
    "question": "¿Por qué órgano fue publicado el decreto No. 42 del Poder Ejecutivo?",
    "answer": "Fue publicado por el diario oficial «La Gaceta» correspondiente al No. 4529 del 15 de enero de 1916.",
    "category": "himno",
    "short": "El diario oficial «La Gaceta» No. 4529 del 15 de enero de 1916",
    "verified": true
  },
  {
    "id": 24,
    "question": "¿Por qué decreto fueron aprobadas las disposiciones emitidas del Poder Ejecutivo?",
    "answer": "Fueron aprobadas por Decreto No. 34 de fecha 23 de enero de 1917 por el Soberano Congreso Nacional.",
    "category": "himno",
    "short": "Por el Decreto No. 34 del 23 de enero de 1917",
    "verified": true
  },
  {
    "id": 25,
    "question": "¿Quién era el Secretario de Estado en el Despacho de Instrucción Pública cuando se aprobó el Decreto No. 42?",
    "answer": "El Abogado Rómulo E. Durón",
    "category": "himno",
    "short": "El Abogado Rómulo E. Durón",
    "verified": true
  },
  {
    "id": 26,
    "question": "¿Quién fue el General Manuel Bonilla?",
    "answer": "Fue el primer presidente de la República que recibió honores con la ejecución del Himno nacional.\n\nTambién fue el gobernante que en el año 1904 encomendó a varios escritores nacionales la tarea de escribir con el fin de escoger entre ellos el más adecuado para que sirviera de Himno Nacional.",
    "category": "himno",
    "short": "El primer presidente que recibió honores con la ejecución del Himno",
    "verified": true
  },
  {
    "id": 27,
    "question": "¿En qué se basa el artículo 418 del Código de Instrucción Pública del 29 de marzo de 1923?",
    "answer": "Que con él se instituyó el culto a la Bandera y el canto del Himno Nacional en todos los centros educativos del país.",
    "category": "himno",
    "short": "Que instituyó el culto a la Bandera y el canto del Himno en todos los centros educativos",
    "verified": true
  },
  {
    "id": 28,
    "question": "¿Qué debe hacer un director después de haberse interpretado el Himno Nacional en la forma que señala la ley?",
    "answer": "Debe proceder inmediatamente a la juramentación de la bandera, la que teniéndola en sus manos y en presencia de todos los alumnos dirá lo siguiente:\n\n«Juráis por vuestro honor defender, venerar y hacer que se respete este símbolo sagrado?» Los alumnos contestarán diciendo: «Sí juramos» y el Director concluirá: «Así lo espera la Patria». En el momento de afirmar los alumnos «Sí juramos»",
    "category": "himno",
    "short": "Proceder de inmediato a la juramentación de la bandera",
    "verified": true
  },
  {
    "id": 29,
    "question": "¿Qué constituyen las voces del Himno Nacional comprendidas desde la primera hasta la sexta estrofa?",
    "answer": "Constituyen una alusión en orden cronológico de los principales hechos y fenómenos históricos, comenzando con la existencia precolombina y terminando con la organización del Estado libre, soberano independiente.",
    "category": "himno",
    "short": "Una alusión cronológica a los principales hechos históricos, desde la época precolombina hasta el Estado libre",
    "verified": true
  },
  {
    "id": 30,
    "question": "¿Cómo se define la palabra HIMNO en términos generales?",
    "answer": "HIMNO en términos generales es la expresión y símbolo de pueblos y naciones",
    "category": "himno",
    "short": "La expresión y símbolo de pueblos y naciones",
    "verified": true
  },
  {
    "id": 31,
    "question": "¿Cuáles son nuestros símbolos mayores?",
    "answer": "Según su orden de creación son: El Escudo, la Bandera y el Himno Nacional",
    "category": "himno",
    "short": "El Escudo, la Bandera y el Himno Nacional",
    "verified": true
  },
  {
    "id": 32,
    "question": "¿Cuáles son nuestros símbolos Menores?",
    "answer": "Son la Madre, nuestros patricios o héroes nacionales, el idioma Nacional o lengua materna, el Pino, la Orquídea, la Moneda, el Mapa, etc.",
    "category": "himno",
    "short": "La Madre, los héroes nacionales, el idioma, el Pino, la Orquídea, la Moneda, el Mapa, etc.",
    "verified": true
  },
  {
    "id": 33,
    "question": "¿Cómo debemos marcar el compás de cuatro cuartos para dirigir la ejecución o entonación de nuestro Himno Nacional?",
    "answer": "Debemos marcarlo siguiendo cuatro movimientos así: Primer movimiento (tiempo) hacia abajo, segundo movimiento hacia la izquierda, tercer movimiento hacia la derecha y el cuarto movimiento hacia arriba, por ejemplo: (ver figura)",
    "category": "himno",
    "short": "Cuatro movimientos: abajo, izquierda, derecha y arriba",
    "verified": true,
    "image": "img/fig-compas.png"
  },
  {
    "id": 34,
    "question": "¿Cómo es el Himno Nacional de Honduras en relación a los demás himnos de Centro América?",
    "answer": "Es eminentemente poético y pacifista con excepción de la última estrofa que nos invita a defender la Patria, es menos extenso que el de Guatemala y El Salvador y su música esta inspirada en las marchas alemanas.",
    "category": "himno",
    "short": "Poético y pacifista, menos extenso que el de Guatemala y El Salvador, con música inspirada en marchas alemanas",
    "verified": true
  },
  {
    "id": 35,
    "question": "¿Qué dificultades presenta la música de nuestro Himno Nacional?",
    "answer": "Presenta dificultades de entonación para las voces masculinas, siendo alcanzables con mayor facilidad las notas por las voces femeninas.",
    "category": "himno",
    "short": "Dificultades de entonación para las voces masculinas",
    "verified": true
  },
  {
    "id": 36,
    "question": "¿De dónde se origina la palabra HIMNO?",
    "answer": "HIMNO viene del griego hymnos, que a su vez se deriva de Hydo, que significa: Yo canto.",
    "category": "himno",
    "short": "Del griego hymnos, que viene de Hydo: «yo canto»",
    "verified": true
  },
  {
    "id": 37,
    "question": "¿Cuál es el primer himno que da a conocer la historia humana?",
    "answer": "El primer himno se cree que fue escrito veinte siglos antes de Jesucristo, data de la edad antigua, tiene caracteres religiosos y está dedicado a Brahma, dios de los Brahamanes en la India.",
    "category": "himno",
    "short": "Uno escrito veinte siglos antes de Cristo, dedicado a Brahma en la India",
    "verified": true
  },
  {
    "id": 38,
    "question": "¿En qué época y en qué lugar apareció el primer himno patriótico?",
    "answer": "Apareció en Francia, en la edad moderna y contemporánea llamado por el pueblo francés «La Fronda» y un siglo después aparecieron los himnos «La Carmagnole», «La Marsellesa» y «La Cai-rá» cantados todos ellos por las masas populares.",
    "category": "himno",
    "short": "En Francia, en la edad moderna y contemporánea («La Fronda»)",
    "verified": true
  },
  {
    "id": 39,
    "question": "¿Dónde se encuentra el verdadero mérito de los himnos?",
    "answer": "El mérito de los himnos radica en: Que sean la expresión intensa de las virtudes cívicas o religiosas de los pueblos para quienes son hechos.",
    "category": "himno",
    "short": "En ser expresión intensa de las virtudes cívicas o religiosas del pueblo",
    "verified": true
  },
  {
    "id": 40,
    "question": "En cuanto a la letra, ¿qué críticas se le hacen a nuestro Himno Nacional?",
    "answer": "En cuanto a la letra se le atribuye que el poema es muy extenso; sin embargo son varios los himnos nacionales de América que son más extensos que el nuestro por ejemplo: Los himnos de Argentina, Colombia, Uruguay, Brasil, Guatemala, etc.",
    "category": "himno",
    "short": "Que el poema es muy extenso",
    "verified": true
  },
  {
    "id": 41,
    "question": "En cuanto a la música, ¿qué críticas se le hacen a nuestro Himno Nacional?",
    "answer": "En cuanto a la música se afirma que ha sido tachada de incongruente, no adecuada, sin ritmo elevado sin carácter masculino que exprese los atributos de la nación hondureña.",
    "category": "himno",
    "short": "Que es incongruente, inadecuada y sin carácter masculino",
    "verified": true
  },
  {
    "id": 42,
    "question": "¿Existen razones para afirmar que nuestro Himno Nacional es auténticamente original?",
    "answer": "Existen muchas razones, desde el punto de vista literario a diferencia de otras composiciones poéticas, nos narra y nos relata las diferentes etapas de nuestra historia y desde el punto de vista musical podemos afirmar que no se parece parcial o totalmente con los himnos de otros países.",
    "category": "himno",
    "short": "Sí: su letra narra nuestra historia y su música no se parece a la de otros himnos",
    "verified": true
  },
  {
    "id": 43,
    "question": "¿Qué nos dice el artículo No. 7 del Decreto 131 emitido por el Soberano congreso Nacional el 11 de Enero de 1982?",
    "answer": "Nos dice que: «Son símbolos Nacionales: La Bandera, el Escudo y el Himno y que la ley establecerá sus características y regulará su uso».",
    "category": "himno",
    "short": "Que son símbolos nacionales la Bandera, el Escudo y el Himno",
    "verified": true
  },
  {
    "id": 44,
    "question": "¿Cuáles son los cuatro aspectos que contiene nuestro Himno Nacional?",
    "answer": "Son los siguientes: el primero es Histórico, el segundo es Patriótico, el tercero es Jurídico y el cuarto artístico.",
    "category": "himno",
    "short": "Histórico, patriótico, jurídico y artístico",
    "verified": true
  },
  {
    "id": 45,
    "question": "¿Por qué razón podemos afirmar que nuestro Himno Nacional es patriótico?",
    "answer": "Por su séptima y última estrofa",
    "category": "himno",
    "short": "Por su séptima y última estrofa",
    "verified": true
  },
  {
    "id": 46,
    "question": "¿Por qué razón podemos asegurar que es Histórico?",
    "answer": "Porque en el orden cronológico de la primera a la sexta estrofa nos habla de acontecimientos ocurridos desde la época precolombina hasta nuestros días.",
    "category": "himno",
    "short": "Porque de la primera a la sexta estrofa relata hechos desde la época precolombina",
    "verified": true
  },
  {
    "id": 47,
    "question": "¿Por qué razón nuestro Himno Nacional tiene carácter jurídico?",
    "answer": "Porque esta amparado en sus dos decretos que para nosotros los hondureños son leyes; estos decretos son el No. 42 de su emisión y el decreto No. 34 de su aprobación.",
    "category": "himno",
    "short": "Porque está amparado en los decretos No. 42 (emisión) y No. 34 (aprobación)",
    "verified": true
  },
  {
    "id": 48,
    "question": "¿Por qué razón nuestro Himno Nacional tiene carácter artístico?",
    "answer": "Por su letra y su música. En la letra nos encontramos con un bello poema y en la música con una extraordinaria obra musical.\n\nbreve",
    "category": "himno",
    "short": "Por su letra (un bello poema) y su música (una extraordinaria obra)",
    "verified": true
  },
  {
    "id": 49,
    "question": "¿Cuál es la explicación del CORO de nuestro Himno Nacional?",
    "answer": "En sus primeros cuatro versos se refiere a la Bandera que en su color azul simboliza al cielo que está cruzado por una franja blanca que significa paz, serenidad y pureza.\n\nLas cinco estrellas nos hacen recordar el ideal morazanista de que los pueblos centroamericanos formaron una patria grande, fuerte, rica y respetada. Los otros cuatros versos restantes se refieren al escudo como el emblema de la Patria.\n\nDentro de él está un mar que representa los dos océanos que bañan y protegen nuestras costas.\n\nEl volcán que viene a ser nuestro territorio nacional, sobre él nace y resplandece el sol que fue imagen de adoración por nuestros antepasados y nos expresa en su plenitud que la vida productiva del país progresa y se desarrolla a manera de perenne juventud.",
    "category": "explicacion",
    "short": "Bandera (cielo azul, franja blanca, cinco estrellas) y Escudo (mar, volcán, sol)",
    "verified": true
  },
  {
    "id": 50,
    "question": "¿Cuál es la explicación de la primera estrofa del SOLO?",
    "answer": "Se refiere a nuestro país que antes de ser descubierto por Cristobal Colón en el año 1502, estaba habitado por indígenas a los que Colón les llamo «indios».\n\nAsí se encontraba nuestro país rodeado de inmensas riquezas vegetales, animales y minerales. La palabra india personifica a Honduras y virgen porque hasta ese momento histórico no había sido visitada por personas extrañas.\n\nHermosa por sus enormes riquezas naturales, bañadas por los dos mares así se encontraba nuestra Patria al hallazgo del descubridor.",
    "category": "explicacion",
    "short": "Honduras antes de ser descubierta por Colón en 1502: virgen y rica en naturaleza",
    "verified": true
  },
  {
    "id": 51,
    "question": "¿Cuál es la explicación de la segunda estrofa del SOLO?",
    "answer": "Cristobal Colón soñaba con encontrar una ruta más corta para llegar a las Indias Orientales, superando muchas dificultades organizó sus expediciones y se lanzó a navegar; siendo en el cuarto y último viaje que descubrió a Honduras tomando posesión del territorio el 17 de agosto del año 1502 en nombre de los Reyes españoles Fernando e Isabel.\n\nQuedando desde entonces bajo el dominio de España nuestra patria que por lo pronto era llamada Hibueras.",
    "category": "explicacion",
    "short": "Colón descubrió Honduras en su cuarto viaje, el 17 de agosto de 1502",
    "verified": true
  },
  {
    "id": 52,
    "question": "¿Cuál es la explicación de la tercera estrofa del SOLO?",
    "answer": "Después del descubrimiento hecho por Colón, vinieron los conquistadores españoles atraídos por la codicia, la curiosidad y la ambición.\n\nY fue allá por el año de 1537 que los nativos de Copantl opusieron resistencia a los españoles reuniendo un numeroso ejército y poniéndolo bajo el mando de LEMPIRA, joven caudillo que se había destacado por su audacia y talento que acababa de desafiar a Don Pedro de Alvarado a su paso con rumbo a Buena Esperanza.\n\nLempira estableció su campamento en las alturas de CONGOLON, COYOCUTENA y PIEDRA PARADA pertenecientes al municipio de Erandique, repudiando la esclavitud impuesta por el gobernador Francisco Montejo.\n\nLempira luchó seis meses defendiendo la integridad nacional hasta que en forma vil y traidora los españoles dieron muerte al caudillo siendo de esta manera inútil que nuestro héroe ofrendara su vida y su sangre por la defensa y la libertad de su pueblo.",
    "category": "explicacion",
    "short": "La conquista española y la resistencia de Lempira en 1537",
    "verified": true
  },
  {
    "id": 53,
    "question": "¿Cuál es la explicación de la cuarta estrofa del SOLO?",
    "answer": "Tres siglos nuestra Patria estuvo sometida bajo el dominio de España, mientras nuestros nativos obedecían y servían como esclavos. Los anhelos de libertad por parte de nuestro pueblo se perdían entre la oprobiosa esclavitud. Por fin nuestra Patria escuchó el grito libertador que venía del otro lado del Océano Atlántico a través del movimiento revolucionario Francés.",
    "category": "explicacion",
    "short": "Tres siglos de dominio español y el grito libertador que llegó desde Francia",
    "verified": true
  },
  {
    "id": 54,
    "question": "¿Cuál es la explicación de la quinta estrofa del SOLO?",
    "answer": "Fue el movimiento político francés de 1789 el que hizo que predominara la voluntad del pueblo reconociendo los derechos de Libertad, Igualdad y Fraternidad bajo el liderazgo del orador y estadista Jorge Jacobo Dantón.\n\nEl Rey Luis XVI resultó débil ante el poderío de sus ministros, de la nobleza y el clero que se oponían a las reformas políticas y sociales en beneficio del pueblo. De tal forma que al intentar salir de Francia el Rey fue condenado a muerte por conspirar contra la libertad y la seguridad del Estado.\n\nEn este tiempo se estableció la obligación de rendir culto a la «Razón» que fue elevada a la categoría de Diosa de los franceses.",
    "category": "explicacion",
    "short": "La Revolución Francesa de 1789: Libertad, Igualdad y Fraternidad",
    "verified": true
  },
  {
    "id": 55,
    "question": "¿Cuál es la explicación de la sexta estrofa del SOLO?",
    "answer": "Así como Francia nuestra Patria también logró romper las cadenas que la ataban proclamando su independencia de España un 15 de Septiembre de 1821. Los pliegos que contenían la proclama de independencia llegaron a Tegucigalpa en la tarde del día 28 de Septiembre suceso que fue celebrado con júbilo y respeto por toda la ciudadanía. Desde entonces desapareció la dominación española a manera de un ave negra y dañina que se perdió en el horizonte para que nuestra Patria quedara libre.",
    "category": "explicacion",
    "short": "La independencia de España, proclamada el 15 de septiembre de 1821",
    "verified": true
  },
  {
    "id": 56,
    "question": "¿Cuál es la explicación de la séptima estrofa del SOLO?",
    "answer": "Nuestra Patria no será mancillada mientras sus hijos estemos prestos a defenderla con honor, lealtad, valor, dignidad y sacrificio cobijados todos con nuestra bandera nacional que para nosotros es sagrada porque encierra el orgullo y la dignidad colectiva de todo el pueblo hondureño. Morir por defender nuestra Patria significaría llenarnos de gloria y será un gran ejemplo para las generaciones futuras.",
    "category": "explicacion",
    "short": "Defender la Patria con honor y valor bajo la bandera; morir por ella es gloria",
    "verified": true
  },
  {
    "id": 57,
    "question": "¿Qué es la Bandera?",
    "answer": "En su más alta significación, es el símbolo de la nacionalidad y representación genuina de la Patria.",
    "category": "bandera",
    "short": "El símbolo de la nacionalidad y representación genuina de la Patria",
    "verified": true
  },
  {
    "id": 58,
    "question": "¿Qué simboliza la Bandera?",
    "answer": "Simboliza el manto o se el vestido inmaculado de la Patria",
    "category": "bandera",
    "short": "El manto o vestido inmaculado de la Patria",
    "verified": true
  },
  {
    "id": 59,
    "question": "¿Cuál es la representación más antigua que se conoce con respecto a la Bandera?",
    "answer": "Según lo revelan las pinturas de cerámica descubiertas en las tumbas de la época primaria en Egipto.",
    "category": "bandera",
    "short": "Las pinturas en cerámica de tumbas de la época primaria en Egipto",
    "verified": true
  },
  {
    "id": 60,
    "question": "¿Cómo consideraban los Egipcios a la Bandera?",
    "answer": "Los Egipcios consideraban a la bandera como un símbolo de unión entre los hombres de una misma causa y su sola presencia en los combates servía para guiarlos y reunirlos.",
    "category": "bandera",
    "short": "Como símbolo de unión entre hombres de una misma causa, que los guiaba y reunía en combate",
    "verified": true
  },
  {
    "id": 61,
    "question": "¿Quiénes le dieron su denominación de Bandera?",
    "answer": "Los romanos en la edad media le dieron la denominación de Bandum, que quiere decir Bandera; para significar el antiguo signum. Los legionarios romanos la honraban con sus proezas y juraban por ella y le brindaban todo el respeto y veneración que merece.",
    "category": "bandera",
    "short": "Los romanos, que la llamaron «Bandum»",
    "verified": true
  },
  {
    "id": 62,
    "question": "¿Qué Bandera quedó usando Honduras al independizarse del dominio español?",
    "answer": "Quedó usando la Bandera de la Unión Centroamericana.",
    "category": "bandera",
    "short": "La Bandera de la Unión Centroamericana",
    "verified": true
  },
  {
    "id": 63,
    "question": "¿En qué fecha se celebra el día de La Bandera Nacional?",
    "answer": "Se celebra el 1 de Septiembre de cada año establecido por Decreto Legislativo No. 84-91 del 9 de mayo de 1995 y publicado en la Gaceta No. 27,670. (Este Decreto deroga al No. 5 que establecía como día de la Bandera Nacional el 14 de Junio).",
    "category": "bandera",
    "short": "El 1 de septiembre, por el Decreto Legislativo No. 84-91",
    "verified": true
  },
  {
    "id": 64,
    "question": "¿Con qué Decreto el Congreso Nacional aprobó a la Bandera como símbolo Nacional?",
    "answer": "Con el Decreto No. 7 del 16 de febrero de 1866.",
    "category": "bandera",
    "short": "Con el Decreto No. 7 del 16 de febrero de 1866",
    "verified": true
  },
  {
    "id": 65,
    "question": "¿Qué reformas estableció el Congreso Nacional mediante el Decreto No. 29 del 18 de enero de 1949?",
    "answer": "Estableció que nuestra bandera constará de dos franjas color azul turquesa y una blanca al centro la que llevará cinco estrellas. El ancho de las tres franjas deberá estar contenido dos veces en la longitud formando un rectángulo.",
    "category": "bandera",
    "short": "Dos franjas azul turquesa y una blanca con cinco estrellas; largo igual a dos veces el ancho",
    "verified": true
  },
  {
    "id": 66,
    "question": "¿Qué simbolizan y qué representan las franjas azules de nuestra Bandera Nacional?",
    "answer": "Simbolizan el hermoso cielo que nos cubre «como una bendición de Dios» los sublimes ideales, los más altos sentimientos de nuestro amor fraternal y también representan los dos mares que bañan las costas del territorio nacional.",
    "category": "bandera",
    "short": "El cielo, los sublimes ideales y los dos mares que bañan el territorio",
    "verified": true
  },
  {
    "id": 67,
    "question": "¿Qué significa la franja blanca?",
    "answer": "Significa el constante anhelo de paz de los hondureño y la pureza que debe reinar en sus espíritus.",
    "category": "bandera",
    "short": "El anhelo de paz de los hondureños y la pureza de espíritu",
    "verified": true
  },
  {
    "id": 68,
    "question": "¿Qué simbolizan las cinco estrellas azules?",
    "answer": "Simbolizan el reclamo constante de nuestro héroe General Francisco Morazán para que los pueblos Centroamericanos vuelvan a formar una sola unidad granítica, imperioso legado que dejó a la juventud centroamericana.",
    "category": "bandera",
    "short": "El reclamo de Morazán para que Centroamérica vuelva a ser una sola unidad",
    "verified": true
  },
  {
    "id": 69,
    "question": "¿Cómo debe interpretarse la situación de las cinco estrellas dentro del cuadrilongo de la Bandera Nacional?",
    "answer": "Deberá interpretarse así: La estrella del centro representa a la República de Honduras, la del Noroeste a Guatemala, la del Nordeste a Nicaragua, la del Sureste a El Salvador y la del Sureste a Costa Rica.",
    "category": "bandera",
    "short": "La del centro es Honduras; las de las esquinas, los demás países centroamericanos",
    "verified": true
  },
  {
    "id": 70,
    "question": "¿Qué protección debemos dar a nuestra Bandera?",
    "answer": "Debemos conservarla siempre inmaculada, porque es el manto, el vestido sagrado de la Patria. Por eso el artículo 30 del Decreto que la instituye prohíbe usar en ella «inscripciones de ninguna clase».",
    "category": "bandera",
    "short": "Conservarla inmaculada, sin «inscripciones de ninguna clase»",
    "verified": true
  },
  {
    "id": 71,
    "question": "¿Cuál es la declaratoria que en base a la ley hace un director a un estudiante en el momento de conferirle un título, grado u otra investidura de profesional?",
    "answer": "El Director colocará en manos del candidato la Bandera Nacional, tomándole la siguiente declaración:\n\nDIRECTOR: Prometéis ante esta Bandera que tenéis en vuestras manos, representativa del honor Nacional, dedicaros al ejercicio honrado de la profesión que el Estado os otorga, procurando aumentar cada día el caudal de vuestros conocimientos para crédito de este Centro de enseñanza que os educó, en compensación de los esfuerzos empeñados por la nación en vuestra cultura? –\n\nEl estudiante responderá: «Sí prometo».\n\nEl Director continuará ¿Prometéis contribuir con vuestras luces de profesional y con vuestro esfuerzo de ciudadano a defender y enaltecer en toda ocasión el nombre de vuestra Patria?\n\nEl estudiante responderá: «Sí prometo» Luego el Director concluirá diciendo: En consecuencia, yo (Director de este centro educativo) en nombre de la República de Honduras os confiero el honroso título o grado de:______________.",
    "category": "bandera",
    "short": "Promesa de ejercer honradamente la profesión y defender el nombre de la Patria",
    "verified": true
  },
  {
    "id": 72,
    "question": "¿Qué Bandera existieron durante el período colonial en Honduras?",
    "answer": "Existieron las siguientes banderas:\n\n• a) El pabellón Real: Con fondo blanco, llevando en el centro el Real Escudo de Armas de España.\n• b) El Pendón Imperial: Con fondo amarillo figurando en el centro un águila negra con dos cabezas. En el pecho del águila estaba el Real Escudo de Armas de España.\n• c) El Pendón Real: formado por tres franjas horizontales: roja, amarilla, roja y en el centro aparecía un óvalo con las Armas de Castilla y León.",
    "category": "bandera",
    "short": "El pabellón Real, el Pendón Imperial y el Pendón Real",
    "verified": true
  },
  {
    "id": 73,
    "question": "¿Qué es indispensable para coincidir con una perfecta uniformidad del color azul de nuestra Bandera?",
    "answer": "Es indispensable que el Estado pida la tela en cantidad suficiente para la confección de las Banderas de toda la República, debiendo hacer lo mismo con la tela para la franja blanca, porque a veces no es posible encontrarla en el comercio en las condiciones requeridas.",
    "category": "bandera",
    "short": "Que el Estado pida tela en cantidad suficiente para todas las Banderas del país",
    "verified": true
  },
  {
    "id": 74,
    "question": "¿Qué es recomendable para la confección de nuestra Bandera?",
    "answer": "Un asunto importante es el de escoger con acierto la tela de las franjas superior e inferior, que debe ser de color azul oscuro o turquí, de tafetán, seda o de cualquier otra clase de tela fina, debiendo ser de la misma calidad la tela para la franja blanca que va en el centro.",
    "category": "bandera",
    "short": "Elegir tela fina (tafetán, seda) azul oscuro o turquí, de igual calidad que la blanca",
    "verified": true
  },
  {
    "id": 75,
    "question": "¿Qué recomendaciones debemos tomar en cuenta para un correcto uso y conservación de la Bandera?",
    "answer": "Se deben tomar en cuenta las siguientes recomendaciones:\n\na) Por respeto y estimación y para evitar su deterioro, nuestra Bandera Nacional no debería izarse cuando el tiempo se muestre inclemente, aunque el día sea de los expresamente consignados en las disposiciones oficiales para ejecutar este acto.\n\nb) La Bandera deberá izarse en las fechas y actos oficiales que el Supremo Poder Ejecutivo ordene.\n\nc) Como el ejercicio del sufragio es un acto de verdadero civismo, la Bandera debe izarse el día o días que haya práctica de elecciones.\n\nd) Cuando nuestra Bandera sea desplegada en desfiles públicos, debe llevarse en una pequeña asta hacia la derecha; cuando vaya acompañada de otra bandera siempre ocupará la derecha; si la acompañan, ocupará el centro, si varias, en la fila transversal, se colocará al frente y en el centro.\n\ne) Cuando el desfile sea en carro, deberá desplegarse en una pequeña asta fijada al frente del vehículo. Jamás se colocará en la parte posterior.\n\nf) Sobre o la derecha de nuestra Bandera no se pondrá ninguna otra.\n\ng) Siempre hay que tener especial cuidado en evitar que la Bandera se ponga en contacto con lo que está abajo, suelo, agua, piedras, basura, etc.\n\nh) Deberá evitarse su uso como cortinaje. No se usará festoneada, tirada hacia atrás o verticalmente, ni en pliegues sobre el antebrazo, sino que deberá caer libremente.\n\ni) NO se utilizará la Bandera para propaganda, ni bordarse en cojines, tapetes, manteles o pañuelos; también deberá evitarse su impresión en servilletas de papel, etiquetas de botellas o cosa alguna de uso temporal.\n\nj) No deben pegarse al asta donde se iza la Bandera anuncios o propagandas de ninguna clase.\n\nk) Cuando el lienzo de la Bandera se encuentra sumamente deteriorado se destruirá en forma digna, lo más aconsejable es la incineración.\n\nl) Cuando se ejecute el Himno Nacional en presencia de la Bandera, se dirigirá la cara hacia ella y se le hará el saludo correspondiente, permaneciendo así hasta el final.\n\nll) En una columna que va de marcha y porta la Bandera, el saludo deberá hacerse en el preciso momento que ésta pasa.\n\nm) Al desplegarse la Bandera, todas las personas presentes dirigirán la cara hacia ella y la saludarán.\n\nn) Siendo el Congreso la alta representación nacional, debiera izarse en el Palacio Legislativo, durante el tiempo que tengan lugar sus sesiones ordinarias y extraordinarias.\n\nñ) En los actos de desvelización de estatuas o monumentos, ocupará la derecha de éstos o la del orador.\n\no) Cuando no hay tribuna se colocará a la derecha del sitial de honor en las reuniones cívicas. En el salón de sesiones del Congreso Nacional se colocará a la derecha de la mesa directiva. Cualquier otra bandera ocupará la izquierda.\n\np) Cuando en una procesión fúnebre deba cubrir el ataúd, se colocará con el frente o anverso hacia arriba y la parte anterior hacia la cabeza. En ningún caso se permitirá que baje al sepulcro ni toque tierra.",
    "category": "bandera",
    "short": "No izarla con mal tiempo ni usarla de cortinaje o propaganda; incinerarla si se deteriora",
    "verified": true
  },
  {
    "id": 76,
    "question": "¿Cómo debe doblarse la Bandera después de haber concluido los actos oficiales?",
    "answer": "Debe doblarse así: La franja superior se plegará longitudinalmente, por el reverso, la franja blanca, tal como lo indica la gráfica en su «primera fase», a continuación se plega la franja inferior a la blanca por el anverso, «fase segunda» de la gráfica; seguidamente se dobla en forma transversal por la mitad, llevando de la misma manera la extensión del cuadro que figura en la parte final de la «tercera fase», una vez a la derecha y otra a la izquierda y por último se dobla diagonalmente para llegar a la «forma final» que indica la gráfica. Esta operación se ejecutará mejor entre dos personas.",
    "category": "bandera",
    "short": "Plegando las franjas azules sobre la blanca, luego por la mitad y por último en diagonal",
    "verified": true,
    "image": "img/fig-doblar-bandera.png"
  },
  {
    "id": 77,
    "question": "¿Cómo se debe confeccionar nuestra Bandera Nacional?",
    "answer": "Primero debemos seleccionar con certeza la tela de las franjas superior e inferior que deben ser de color azul oscuro o turquí, de tafetán, seda o cualquier otra clase de tela fina, debiendo ser de la misma calidad para la franja blanca que va en el centro. Unidas las franjas horizontalmente se tiene el cuidado de llevar con exactitud sobre el largo dos veces la medida del ancho total de las franjas. Terminada esta operación se procede a colocar las cinco estrellas en el centro de la franja blanca.\n\nLa presente gráfica demuestra claramente como deben colocarse las cinco estrellas; el cuadrilátero ABCD representa la extensión de la bandera, las líneas punteadas: ef y gh, indican los quiebres que deberán ser bien marcados al doblar la bandera en tres partes iguales situando las estrellas en el cuadrilongo «onmp».\n\nDe modo que sus puntas laterales rocen los quiebres ef y fh, descansando en sus puntas inferiores, de tal modo que las perpendiculares ij y kl puedan pasar por sus ángulos entrantes y salientes, quedando sus puntas a una distancia proporcional de las uniones de las franjas azules con la blanca.\n\nLa quinta estrella deberá colocarse de tal manera que su centro coincida con el punto donde se cruzan las diagonales op y mn, descansando siempre en las puntas inferiores.\n\nConfeccionada nuestra bandera en la forma indicada, las estrellas resultan en situación simétrica y en la parte anterior de ellas quedará un espacio igual al de la parte posterior de la bandera. Desde la bandera más pequeña hasta la más grande, siempre serán nuestra Bandera, si el largo contiene exactamente dos veces el ancho y las estrellas se colocan en la forma requerida.",
    "category": "bandera",
    "short": "Uniendo las franjas, con largo de dos veces el ancho, y colocando las cinco estrellas al centro de la blanca",
    "verified": true,
    "image": "img/fig-estrellas.png"
  },
  {
    "id": 78,
    "question": "¿Para contribuir a cultivar y fomentar el amor a la Patria, qué se recomienda a los directores de todos los centros educativos del país?",
    "answer": "Se recomienda premiar y estimular a todos aquellos alumnos que se hallan destacado por su conducta, aplicación y aprovechamiento; con el alto honor de encabezar y portar en sus manos nuestra Bandera Nacional, durante los desfiles y actos cívicos oficiales, confiriéndoles preseas y haciendo menciones honoríficas de ellos.",
    "category": "bandera",
    "short": "Premiar a los mejores alumnos con el honor de portar la Bandera en desfiles y actos cívicos",
    "verified": true
  },
  {
    "id": 79,
    "question": "¿En términos generales cómo se define el Escudo?",
    "answer": "Se define como «el campo, superficie o espacio en que se portan los blasones de reinos, repúblicas o familias» con motivos o figuras que pródigamente ofrece la naturaleza.",
    "category": "escudo",
    "short": "El campo o superficie donde se portan los blasones de reinos, repúblicas o familias",
    "verified": true
  },
  {
    "id": 80,
    "question": "¿Qué simboliza el Escudo?",
    "answer": "Simboliza la materia, el cuerpo divino de la Patria",
    "category": "escudo",
    "short": "La materia, el cuerpo divino de la Patria",
    "verified": true
  },
  {
    "id": 81,
    "question": "¿Mediante qué Decreto fue establecido nuestro Escudo Nacional?",
    "answer": "Fue establecido mediante decreto No. 16 del 10 de Enero de 1935, a través del Congreso Nacional.",
    "category": "escudo",
    "short": "El Decreto No. 16 del 10 de enero de 1935",
    "verified": true
  },
  {
    "id": 82,
    "question": "¿Cómo está estructurado el Escudo Nacional?",
    "answer": "El Escudo Nacional se compone de un triángulo equilátero, en su base un volcán entre dos castillos, sobre ellos está un arcoíris y debajo de éste, tras el volcán se levanta un Sol esparciendo luz.",
    "category": "escudo",
    "short": "Un triángulo equilátero con un volcán entre dos castillos, un arcoíris y un sol",
    "verified": true
  },
  {
    "id": 83,
    "question": "¿Qué posición ocupa el Triángulo?",
    "answer": "El triangulo se encuentra colocado sobre un terreno que figura bañado por dos mares. En torno a él un óvalo que contiene en\n\nletras de oro: «República de Honduras, Libre, Soberana e Independiente, 15 de Septiembre de 1821».",
    "category": "escudo",
    "short": "Sobre un terreno bañado por dos mares y rodeado por un óvalo con la leyenda de independencia",
    "verified": true
  },
  {
    "id": 84,
    "question": "¿Qué aparece en la parte superior del óvalo?",
    "answer": "Aparece una aljaba de flechas, de la que cuelgan cuernos de la abundancia, sobresaliendo todo a través de una cordillera de montañas de donde despuntan tres arboles de roble a la derecha, tres pinos a la izquierda y en distribución conveniente, unas minas, una barra, un barreno, una cuña, una almádena y un martillo.",
    "category": "escudo",
    "short": "Una aljaba de flechas con cuernos de la abundancia, sobre una cordillera con robles, pinos, minas y herramientas",
    "verified": true
  },
  {
    "id": 85,
    "question": "¿Qué significa el triángulo equilátero?",
    "answer": "Significa la perfecta igualdad de todos los hondureños ante la ley, y que en aras de una verdadera democracia todos debemos gozar de los mismos derechos y obligaciones sin distinción de fueros ni privilegios para nadie.",
    "category": "escudo",
    "short": "La igualdad de todos los hondureños ante la ley",
    "verified": true
  },
  {
    "id": 86,
    "question": "¿Qué representa y qué simboliza el volcán?",
    "answer": "El volcán representa el aspecto físico del territorio nacional y simboliza el ardor, la valentía y el coraje con que los hijos de Honduras debemos defender su integridad.",
    "category": "escudo",
    "short": "El territorio nacional; simboliza el ardor, la valentía y el coraje para defenderlo",
    "verified": true
  },
  {
    "id": 87,
    "question": "¿Dónde se sitúan los dos castillo y qué significan?",
    "answer": "Uno se sitúa en Omoa departamento de Cortés, protegiendo las costas del Mar Caribe y el otro situado en el Golfo de Fonseca, región del Pacífico. Simbolizan las fortalezas en que se puso a prueba el valor y coraje de la raza aborigen, ante cuyos muros se estrelló muchas veces la furia del conquistador.",
    "category": "escudo",
    "short": "En Omoa (Caribe) y en el Golfo de Fonseca (Pacífico); fortalezas de la resistencia indígena",
    "verified": true
  },
  {
    "id": 88,
    "question": "¿Qué simboliza el Sol naciente?",
    "answer": "Simboliza la libertad y el amor a la patria, virtudes por las que murió Lempira primer defensor de nuestra integridad nacional.",
    "category": "escudo",
    "short": "La libertad y el amor a la patria, por los que murió Lempira",
    "verified": true
  },
  {
    "id": 89,
    "question": "¿Qué simbolizan los dos mares?",
    "answer": "Los dos mares uno en el Caribe o de las Antillas y el otro mar Pacífico, simbolizan las rutas que siguió Colón para llegar a estas tierras y por medio de ellos nos comunicamos con otros continentes.",
    "category": "escudo",
    "short": "Las rutas de Colón: el Caribe y el Pacífico, que nos comunican con otros continentes",
    "verified": true
  },
  {
    "id": 90,
    "question": "¿Qué simboliza el óvalo y qué contiene en su interior?",
    "answer": "Simboliza el rectángulo donde se guarda la gloriosa fecha de nuestra independencia de España, conteniendo en su interior la leyenda que dice:\n\n«REPÚBLICA DE HONDURAS, LIBRE, SOBERANA E INDEPENDIENTE, 15 DE SEPTIEMBRE DE 1821».",
    "category": "escudo",
    "short": "El rectángulo de la fecha de independencia; contiene «República de Honduras, Libre, Soberana e Independiente»",
    "verified": true
  },
  {
    "id": 91,
    "question": "¿Qué aparece en la parte superior e inferior del óvalo?",
    "answer": "En la parte superior aparece una aljaba de flechas, de la que cuelgan los cuernos de la abundancia.\n\nEn la parte inferior sobresale una cordillera de montañas, de donde despuntan tres arboles de roble a la derecha, tres pinos a la izquierda y en distribución conveniente, dos bocaminas, una barra, un barreno, una cuña, una almádena y un martillo.",
    "category": "escudo",
    "short": "Arriba, la aljaba con cuernos de la abundancia; abajo, cordillera con robles, pinos, minas y herramientas",
    "verified": true
  },
  {
    "id": 92,
    "question": "¿Qué simboliza la aljaba llena de flechas?",
    "answer": "Simboliza las armas que usaron nuestros antepasados en defensa de la soberanía nacional.",
    "category": "escudo",
    "short": "Las armas de nuestros antepasados en defensa de la soberanía",
    "verified": true
  },
  {
    "id": 93,
    "question": "¿Qué simbolizan los cuernos de la abundancia?",
    "answer": "Simbolizan la riqueza vegetal de Honduras que nos invita a explotarla mediante el trabajo digno y enaltecedor.",
    "category": "escudo",
    "short": "La riqueza vegetal de Honduras, que invita al trabajo digno",
    "verified": true
  },
  {
    "id": 94,
    "question": "¿Qué significa la cordillera de montañas?",
    "answer": "Significa que nuestro territorio por su situación geográfica es accidentado y sumamente montañoso, con variedad de clima.",
    "category": "escudo",
    "short": "Que el territorio es montañoso y de clima variado",
    "verified": true
  },
  {
    "id": 95,
    "question": "¿Qué significan los robles?",
    "answer": "Significan el vigor, el arrojo y la fortaleza del hondureño dedicado al trabajo.",
    "category": "escudo",
    "short": "El vigor, el arrojo y la fortaleza del hondureño trabajador",
    "verified": true
  },
  {
    "id": 96,
    "question": "¿Qué significan los pinos?",
    "answer": "El Pino es nuestro árbol nacional por su abundancia y utilidad, y simbolizan la perfecta verticalidad o sea que nosotros los hondureños debemos ser tan verticales como nuestros pinos.",
    "category": "escudo",
    "short": "Es el árbol nacional; simboliza la verticalidad que deben tener los hondureños",
    "verified": true
  },
  {
    "id": 97,
    "question": "¿Qué significan las minas?",
    "answer": "Significan las riquezas minerales aún no explotadas por los hondureños.",
    "category": "escudo",
    "short": "Las riquezas minerales aún no explotadas",
    "verified": true
  },
  {
    "id": 98,
    "question": "¿Qué simbolizan las herramientas?",
    "answer": "Las herramientas simbolizan el reclamo constante que la patria hace a sus hijos invitándonos a todos al trabajo y son cinco: la barra, el barreno, la cuña, la almádena y el martillo.",
    "category": "escudo",
    "short": "El llamado de la patria al trabajo; son cinco herramientas",
    "verified": true
  },
  {
    "id": 99,
    "question": "¿Qué simboliza el arco iris?",
    "answer": "Simboliza la paz, la unión y la armonía que debe reinar en toda la familia hondureña.",
    "category": "escudo",
    "short": "La paz, la unión y la armonía de la familia hondureña",
    "verified": true
  },
  {
    "id": 100,
    "question": "¿Qué simboliza el cielo azul de nuestro Escudo Nacional?",
    "answer": "Simboliza justicia, verdad, lealtad, caridad y hermosura, virtudes supremas que todos los hondureños debemos mantener incólumes; ese cielo azul que todos los días vemos nos recuerda la grandeza de Dios, autor y creador de todo cuanto existe.",
    "category": "escudo",
    "short": "Justicia, verdad, lealtad, caridad y hermosura",
    "verified": true
  }
];
