# LCDC IT & Dev - Portfolio Web

Sitio web profesional bilingüe para servicios de desarrollo web, sistemas a medida y soporte IT remoto.

## 🌟 Características Principales

- **Sitio Bilingüe**: Español e Inglés con cambio dinámico
- **Diseño Responsivo**: Optimizado para todos los dispositivos
- **Contenido Dinámico**: Cargado desde archivos JSON
- **Animaciones Suaves**: Efectos de scroll y transiciones
- **Formulario WhatsApp**: Contacto directo integrado
- **Filtros de Proyectos**: Sistema de categorización interactivo

## 🚀 Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Arquitectura**: SPA (Single Page Application)
- **Datos**: JSON para contenido multiidioma
- **Animaciones**: CSS Transitions + Intersection Observer
- **Responsive**: CSS Grid + Flexbox
- **Optimización**: Cache de elementos DOM

## � Estrucitura del Proyecto

```
lcdc/
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   ├── variables.css      # Variables CSS globales
│   │   ├── global.css         # Estilos base y utilidades
│   │   ├── navigation.css     # Navegación y menú móvil
│   │   ├── hero.css          # Sección hero con logo
│   │   ├── about.css         # Sección sobre nosotros
│   │   ├── services.css      # Tarjetas de servicios
│   │   ├── projects.css      # Grilla de proyectos
│   │   ├── contact.css       # Formulario de contacto
│   │   ├── footer.css        # Footer con enlaces
│   │   └── responsive.css    # Media queries
│   ├── js/
│   │   └── script.js         # Lógica principal optimizada
│   ├── json/
│   │   ├── content_es.json   # Contenido en español
│   │   └── content_en.json   # Contenido en inglés
│   └── img/
│       ├── logo.png          # Logo principal
│       ├── proyectos/        # Imágenes de proyectos
│       └── ...               # Otros assets
└── README.md                 # Este archivo
```

## 🎯 Secciones del Sitio

### 1. **Hero Section**
- Logo centrado con efectos hover
- Título y subtítulo dinámicos
- Botón CTA a WhatsApp

### 2. **About Section**
- Información personal y profesional
- Lista de especialidades
- Tarjeta con enfoque de trabajo
- Tecnologías utilizadas

### 3. **Services Section**
- 3 servicios principales:
  - **Desarrollo Web**: Sitios completos y landing pages
  - **Sistemas a Medida**: Aplicaciones web escalables
  - **Soporte IT Remoto**: Asistencia técnica

### 4. **Projects Section**
- Filtros por categoría
- 5 proyectos destacados:
  - **Omnia Uno**: Sistema web modular (2025)
  - **BA Meat & Grill**: Sitio gastronómico bilingüe
  - **FM 98.7**: Radio online con streaming
  - **Cookie Slayer**: Juego 2D experimental
  - **Maze Scape**: Juego con IA básica

### 5. **Contact Section**
- Formulario integrado con WhatsApp
- Validación de campos
- Envío directo por mensaje

### 6. **Footer**
- Enlaces de navegación
- Enlaces de servicios
- Información de contacto
- Copyright y créditos

## ⚙️ Funcionalidades Técnicas

### **Sistema de Idiomas**
- Detección automática del idioma del navegador
- Cambio dinámico sin recarga de página
- Contenido cargado desde JSON
- Persistencia de selección

### **Optimizaciones de Rendimiento**
- Cache de elementos DOM
- Scroll listeners unificados
- Lazy loading de imágenes
- Animaciones optimizadas

### **Animaciones**
- Intersection Observer para elementos
- Reinicialización automática al cambiar idioma
- Efectos de hover y transiciones suaves
- Animaciones de entrada progresivas

### **Responsive Design**
- Mobile-first approach
- Breakpoints optimizados
- Menú hamburguesa en móviles
- Grids adaptables

## 🛠️ Instalación y Uso

### **Requisitos**
- Servidor web (Apache, Nginx, o servidor local)
- Navegador moderno con soporte ES6+

### **Instalación**
```bash
# Clonar o descargar el proyecto
git clone [url-del-repositorio]

# Navegar al directorio
cd lcdc

# Servir con servidor local (ejemplo con Python)
python -m http.server 8000

# O con Node.js
npx serve .

# Abrir en navegador
http://localhost:8000
```

### **Configuración**

#### **Modificar Contenido**
Editar los archivos JSON en `assets/json/`:
- `content_es.json` - Contenido en español
- `content_en.json` - Contenido en inglés

#### **Personalizar Estilos**
Modificar variables en `assets/css/variables.css`:
```css
:root {
  --color-primary: #5272de;
  --color-secondary: #b06ab3;
  --color-accent: #f39c12;
  /* ... más variables */
}
```

#### **Agregar Proyectos**
En los archivos JSON, agregar nuevos objetos al array `projects.items`:
```json
{
  "id": "nuevo-proyecto",
  "title": "Título del Proyecto",
  "category": "categoria",
  "client": "Cliente",
  "year": "2025",
  "description": "Descripción...",
  "technologies": ["Tech1", "Tech2"],
  "features": ["Feature1", "Feature2"],
  "demo_url": "https://...",
  "image": "assets/img/proyecto.png"
}
```

## 📱 Integración WhatsApp

El formulario de contacto está integrado con WhatsApp:

### **Funcionamiento**
1. Usuario completa el formulario
2. Validación de campos obligatorios
3. Generación de mensaje estructurado
4. Apertura de WhatsApp Web/App

## 🎨 Personalización de Diseño

### **Colores**
El sitio usa un sistema de variables CSS para fácil personalización:
- `--color-primary`: Color principal (azul)
- `--color-secondary`: Color secundario (púrpura)
- `--color-accent`: Color de acento (naranja)
- `--color-surface`: Fondo de secciones
- `--color-text`: Texto principal

### **Tipografía**
- Fuente principal: Inter (Google Fonts)
- Fuente monospace: 'Fira Code' para código
- Escalas de tamaño responsivas

### **Espaciado**
Sistema de espaciado consistente:
- `--spacing-xs` a `--spacing-3xl`
- Basado en múltiplos de 0.5rem

## 🔧 Optimizaciones Implementadas

### **JavaScript**
- ✅ Cache de elementos DOM
- ✅ Event listeners unificados
- ✅ Funciones asíncronas optimizadas
- ✅ Manejo eficiente de animaciones
- ✅ Código modular y reutilizable

### **CSS**
- ✅ Variables CSS para consistencia
- ✅ Arquitectura modular por componentes
- ✅ Optimización de selectores
- ✅ Transiciones suaves
- ✅ Media queries eficientes

### **Rendimiento**
- ✅ Lazy loading de imágenes
- ✅ Minimización de reflows
- ✅ Optimización de animaciones
- ✅ Carga asíncrona de contenido

## 📈 Mejoras Futuras

- [ ] PWA (Progressive Web App)
- [ ] Análiticas integradas
- [ ] SEO mejorado con meta tags dinámicos
- [ ] Modo oscuro/claro
- [ ] Más idiomas (portugués, francés)

## 📄 Licencia

Este proyecto es de uso personal para LCDC IT & Dev.

## 👨‍💻 Autor

**Cristian Muriel** - LCDC IT & Dev
- 📧 Email: cralmuriel@gmail.com
- 📱 WhatsApp: +54 9 2284 721873
---

*Desarrollado con ❤️ y mucho ☕ - Soluciones digitales para necesidades reales.*