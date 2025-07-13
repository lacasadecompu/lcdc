# LCDC desarrollos web - Sitio en construcción

Este repositorio contiene el sitio temporal de "En construcción" para LCDC desarrollos web. El objetivo es mostrar una página profesional, moderna y optimizada mientras el sitio principal está en desarrollo.

## Estructura del proyecto

- `index.html`: Página principal, minimalista y limpia. Todo el contenido textual se carga dinámicamente.
- `lcdc.css`: Estilos CSS externos, responsivos y modernos, con los colores corporativos y buenas prácticas.
- `img/logo.png`: Logo de la empresa, utilizado en la página y como favicon.
- `content_es.json` y `content_en.json`: Archivos de contenido en español e inglés, respectivamente.
- `content.js`: Script que detecta el idioma del navegador y carga el contenido adecuado desde los archivos JSON.

## Internacionalización (i18n)
- El contenido textual no está hardcodeado en el HTML.
- Al cargar la página, `content.js` detecta el idioma del navegador (`es` o `en`).
- Según el idioma, se carga el archivo JSON correspondiente y se actualizan los textos del sitio dinámicamente.
- Esto permite agregar fácilmente más idiomas en el futuro.

## SEO y Accesibilidad
- El HTML incluye meta etiquetas SEO: descripción, keywords, Open Graph, Twitter Card, canonical, robots, favicon y datos estructurados (JSON-LD).
- El sitio es responsivo y accesible, con imágenes que incluyen atributos `alt` y enlaces claros.
- El número de WhatsApp es clickeable y visible.

## Personalización
- Para modificar textos, edita los archivos `content_es.json` o `content_en.json`.
- Para agregar otro idioma, crea un nuevo archivo JSON y ajusta `content.js`.
- Los estilos se modifican en `lcdc.css`.

## Cómo probar localmente
1. Clona el repositorio.
2. Abre `index.html` en tu navegador.
3. Cambia el idioma del navegador a inglés o español para ver el cambio de idioma automático.

## Notas técnicas
- No se usan frameworks ni dependencias externas: solo HTML, CSS y JavaScript puro.
- El contenido se actualiza en el DOM tras el evento `DOMContentLoaded`.
- Los buscadores requieren que el bloque JSON-LD esté embebido en el HTML, por lo que no se externaliza.

---

**LCDC desarrollos web**

¡Creatividad, calidad y pasión por tu proyecto! 