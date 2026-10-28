# Estudio Cívico · Himno Nacional de Honduras

Sitio web estático (HTML + CSS + JavaScript, sin servidor ni instalación). Cada sección es una página:

| Página | Contenido |
|---|---|
| `index.html` | Inicio, progreso y ruta sugerida |
| `estudio.html` | Tarjetas, **completa la respuesta** (3 niveles) y banco de preguntas |
| `juegos.html` | Repaso rápido, une las parejas, verdadero o falso |
| `explicaciones.html` | Estudiar la explicación de cada estrofa + prueba |
| `silabas.html` | Silabeo métrico de los 64 versos (aprender y practicar) |
| `examen.html` | Examen de las 100 preguntas |

**Dificultad** (examen, repaso rápido y verdadero/falso): Fácil (3 opciones) · Normal (4) · Difícil (5 opciones, 25 s por pregunta) · Experto (5 opciones, 12 s, sin volver atrás). Se recuerda en el navegador.

## Publicar en GitHub Pages
1. Crea un repositorio en GitHub y sube **todo el contenido de esta carpeta** a la raíz (arrastra los archivos en «Add file → Upload files»). Debe quedar `index.html` en la raíz.
2. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / carpeta `/ (root)` → Save**.
3. En 1–2 minutos tu sitio estará en `https://TU-USUARIO.github.io/NOMBRE-DEL-REPO/`.

Todas las rutas son relativas, así que funciona igual en un subdirectorio. El progreso se guarda en el navegador de cada persona (`localStorage`). Para probar localmente basta abrir `index.html`.

## Estructura
- `questions.js` — banco de 100 preguntas · `img/` — figuras
- `js/core.js` — utilidades, dificultad, `App.page()` · `js/layout.js` — menú y pie compartidos
- `js/mode-*.js` — un archivo por modo · `js/silabas-data.js` — versos y reglas métricas

## Cómo extender
Crea `js/mode-nuevo.js` con `App.register({ id, icon, title, desc, cta, mount(root) {…} })`, cárgalo en la página que quieras y agrega su `id` a `App.page([...])` al final de ese HTML. Para una página nueva: copia `examen.html` y súmala a `PAGES` en `js/layout.js`.

- **Modo oscuro:** botón ☾/☀ en el menú; se guarda por navegador y respeta el tema del sistema la primera vez.

## Notas
- Verso IV-5: se silabea «pero un día **de** gloria tu oído» (10 sílabas); algunas fuentes lo escriben sin «de».
