/* DATOS DE SILABEO. Notación por verso (sílabas separadas por):
   "-" sílaba dentro de palabra · " " palabra nueva · "~" sinalefa · "^" sinéresis · "+" hiato en palabra · "=" hiato entre palabras (dialefa)
   "*" = sílaba con acento métrico (3.ª, 6.ª, 9.ª) · "!" al final = palabra aguda (+1 sílaba métrica) */
const SilabasData = (() => {
  const LABEL = { c: "Coro", 1: "Estrofa I", 2: "Estrofa II", 3: "Estrofa III", 4: "Estrofa IV", 5: "Estrofa V", 6: "Estrofa VI", 7: "Estrofa VII", g: "General" };
  const RAW = {
    c: ["tu ban-*de-ra~es un *lam-po de *cie-lo", "por un *blo-que de *nie-ve cru-*za-do", "y se *ven en su *fon-do sa-*gra-do", "cin-co~es-*tre-llas de *pá-li-do~a-*zul!", "en tu~em-*ble-ma que~un *mar ru-mo-*ro-so", "con sus *on-das bra-*ví+as es-*cu-da", "de~un vol-*cán tras la *ci-ma des-*nu-da", "hay un *as-tro de *ní-ti-da *luz!"],
    1: ["In-dia *vir-gen y~her-*mo-sa dor-*mí+as", "de tus *ma-res al *can-to so-*no-ro", "cuan-do~e-*cha-da~en tus *cuen-cas de=*o-ro", "el au-*daz na-ve-*gan-te te~ha-*lló!", "y~al mi-*rar tu be-*lle-za~ex-ta-*sia-do", "al in-*flu-jo~i-de+*al de tu~en-*can-to", "la~or-la~a-*zul de tu~es-*plén-di-do *man-to", "con su *be-so de~a-*mor con-sa-*gró!"],
    2: ["de~un pa+*ís don-de~el *sol se le-*van-ta", "más a-*llá del at-*lan-te~a-zu-*la-do", "a-quel *hom-bre te~ha-*bí+a so-*ña-do", "y~en tu *bus-ca~a la *mar se lan-*zó!", "cuan-do~er-*guis-te la *pá-li-da *fren-te", "en la *vi-va~an-sie-*dad de tu~an-*he-lo", "ba-jo~el *dom-bo gen-*til de tu *cie-lo", "ya flo-*ta-ba~un ex-*tra-ño pen-*dón!"],
    3: ["e-ra~i-*nú-til que~el *in-dio tu~a-*ma-do", "se~a-pres-*ta-ra~a la *lu-cha con *i-ra", "por-que~en-*vuel-to~en su *san-gre Lem-*pi-ra", "en la *no-che pro-*fun-da se~hun-*dió!", "y de la~*é-pi-ca~ha-*za-ña~en me-*mo-ria", "la le-*yen-da tan *só-lo~ha guar-*da-do", "de~un se-*pul-cro~el lu-*gar ig-no-*ra-do", "y~el se-*ve-ro per-*fil de~un pe-*ñón!"],
    4: ["por tres *si-glos tus *hi-jos o-*ye-ron", "el man-*da-to~im-pe-*rio-so del *a-mo", "por tres *si-glos tu~i-*nú-til re-*cla-mo", "en la~at-*mós-fe-ra~a-*zul se per-*dió!", "pe-ro~un *dí+a de *glo-ria tu~o+*í-do", "per-ci-*bió po-de-*ro-so~y dis-*tan-te", "que~a-llá *le-jos por *so-bre~el at-*lan-te", "in-dig-*na-do ru-*gí+a~un le+*ón!"],
    5: ["e-ra *Fran-cia la *li-bre la~he-*roi-ca", "que~en su *sue-ño de *si-glos dor-*mi-da", "des-per-*ta-ba~i-ra-*cun-da~a la *vi-da", "al re-*cla-mo vi-*ril de Dan-*tón!", "e-ra *Fran-cia que~en-*via-ba~a la *muer-te", "la ca-*be-za del *rey con-sa-*gra-do", "y que~al-*za-ba so-*ber-bia~a su *la-do", "el al-*tar de la *Dio-sa ra-*zón!"],
    6: ["tú tam-*bién oh mi *pa-tria te~al-*zas-te", "de tu *sue-ño ser-*vil y pro-*fun-do", "tú tam-*bién en-se-*ñas-tes al *mun-do", "des-tro-*za-do~el in-*fa-me~es-la-*bón!", "y~en tu *sue-lo ben-*di-to tras la~*al-ta", "ca-be-*lle-ra de *mon-te sal-*va-je", "co-mo~un *a-ve de *ne-gro plu-*ma-je", "la co-*lo-nia fu-*gaz se per-*dió!"],
    7: ["por guar-*dar e-se~em-*ble-ma di-*vi-no", "mar-cha-*re-mos oh *pa-tria~a la *muer-te", "ge-ne-*ro-sa se-*rá nues-tra *suer-te", "si mo-*ri-mos pen-*san-do~en tu~a-*mor!", "de-fen-*dien-do tu *san-ta ban-*de-ra", "y~en tus *plie-gues glo-*rio-sos cu-*bier-tos", "se-rán *mu-chos Hon-*du-ras tus *muer-tos", "pe-ro *to-dos ca^e-*rán con ho-*nor!"]
  };
  const RULES = {
    S: ["Sinalefa", "La vocal final de una palabra y la vocal inicial (o h muda) de la siguiente se pronuncian en una sola sílaba métrica. Ej.: «ban-de-ra es» → ra‿es."],
    H: ["Hiato / dialefa", "Dos vocales seguidas que se pronuncian en sílabas distintas y no se funden (dí-a, pa-ís). Entre palabras se llama dialefa: «de oro» no se une."],
    N: ["Sinéresis", "Dos vocales de un hiato se pronuncian en una sola sílaba dentro de la palabra. Ej.: ca-e-rán → cae-rán."],
    D: ["Diéresis", "Lo contrario de la sinéresis: un diptongo se deshace en dos sílabas (ru-i-do). No aparece en este himno."],
    M: ["Acento métrico", "Cada verso decasílabo del himno lleva acento en la 3.ª, 6.ª y 9.ª sílaba métrica."],
    A: ["Palabra aguda al final (+1)", "Si el verso termina en palabra aguda se suma una sílaba métrica: «azul» cuenta como dos."],
    E: ["Palabra esdrújula al final (−1)", "Si el verso terminara en esdrújula se restaría una sílaba métrica. No aparece en este himno."]
  };
  function parse(s) {
    const agu = s.endsWith("!"); if (agu) s = s.slice(0, -1);
    const parts = s.split(/([ \-~+=^])/), syl = [], seps = [];
    for (let i = 0; i < parts.length; i += 2) { syl.push({ t: parts[i].replace("*", ""), st: parts[i].includes("*") }); if (i + 1 < parts.length) seps.push(parts[i + 1]); }
    const units = [[0]], words = [[0]], ph = [];
    seps.forEach((sp, i) => {
      if (sp === "~" || sp === "^") units[units.length - 1].push(i + 1); else units.push([i + 1]);
      if (" ~=".includes(sp)) words.push([i + 1]); else words[words.length - 1].push(i + 1);
      if (sp === "~") ph.push({ r: "S", idx: [i, i + 1] }); if (sp === "^") ph.push({ r: "N", idx: [i, i + 1] }); if (sp === "+" || sp === "=") ph.push({ r: "H", idx: [i, i + 1] });
    });
    units.forEach(u => { const k = u.find(i => syl[i].st); if (k !== undefined) ph.push({ r: "M", idx: [k], pos: units.indexOf(u) + 1 }); });
    if (agu) ph.push({ r: "A", idx: [syl.length - 1] });
    const text = syl.map((x, i) => x.t + (i < seps.length ? (" ~=".includes(seps[i]) ? " " : "") : "")).join("");
    return { syl, units, words, ph, agu, count: units.length + (agu ? 1 : 0), text: text.charAt(0).toUpperCase() + text.slice(1) };
  }
  const keys = Object.keys(RAW);
  return { LABEL, RULES, keys, verse: (k, i) => parse(RAW[k][i]), raw: RAW, parse };
})();
