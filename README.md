# 🐍 Snake Game - Proyecto Portfolio

> Recreación moderna del clásico Snake con JavaScript ES6+, arquitectura modular y responsive design. Demuestra habilidades en desarrollo frontend, clean code y gestión de estado.

## 📖 Sobre el Proyecto

SPA desarrollada con JavaScript vanilla que implementa el juego Snake con controles táctiles para móviles, múltiples tamaños de tablero, sistema de puntuación en tiempo real y temas personalizables (modo oscuro/claro).

## 🛠️ Stack Tecnológico

- **JavaScript ES6+** (Módulos, arrow functions, destructuring)
- **HTML5** + **CSS3** (Flexbox, Grid, animaciones)
- **Vite** (Build tool con HMR)
- **Bootstrap 5** (Framework responsive)
- **Web APIs** (Audio, Canvas, DOM Events)

## ⚙️ Funcionalidades Principales

**Mecánicas:** Movimiento fluido, detección de colisiones, generación aleatoria de comida, sistema de puntuación, game loop optimizado

**UI/UX:** Responsive design (móvil/tablet/desktop), controles de teclado y táctiles, 3 tamaños de tablero (10x10, 20x20, 30x30), temas claro/oscuro, efectos de sonido

## 🏗️ Arquitectura y Metodología

**Arquitectura modular** con separación de responsabilidades:

```
src/snake/
├── index.js              # Controlador y gestión de eventos
└── usecases/             # Lógica de negocio modularizada
    ├── create-board.js   # Generación del tablero
    ├── move-snake.js     # Lógica de movimiento
    ├── game-over.js      # Fin de juego
    └── ...               # 11 módulos especializados
```

**Principios aplicados:** Single Responsibility, DRY, Separation of Concerns, Clean Code

**Proceso:** Planificación → Setup (Vite) → Desarrollo iterativo → Testing → Optimización → Responsive

## 💻 Características Técnicas

- **Gestión de estado:** Variables globales eficientes (snake, score, direction, boardSquares)
- **Sistema de colisiones:** Detección de bordes y auto-colisión
- **Renderizado:** Grid CSS con actualización selectiva de casillas
- **Event handling:** Prevención de movimientos inválidos, soporte multi-input

## 🚀 Instalación y Ejecución

```bash
# Clonar el repositorio
git clone https://github.com/adrirf7/snake-adrirf7.git

# Instalar dependencias
cd snake-adrirf7
npm install

# Modo desarrollo con hot reload
npm run dev

# Build para producción
npm run build

# Preview de la build
npm run preview
```

## 📱 Compatibilidad

- ✅ Chrome/Edge (últimas versiones)
- ✅ Firefox (últimas versiones)
- ✅ Safari (últimas versiones)
- ✅ Dispositivos móviles iOS/Android
- ✅ Tablets y pantallas táctiles

## 🎓 Conocimientos Adquiridos

**JavaScript:** Manipulación DOM, ES6+ (módulos, arrow functions, destructuring), event handling, asincronía (setInterval), estructuras de datos

**CSS:** Flexbox/Grid, responsive design, animaciones, variables CSS, temas dinámicos

**Desarrollo:** Vite bundler, arquitectura modular, Git, debugging, optimización de rendimiento

## 👨‍💻 Autor

**Adrián RF** - [@adrirf7](https://github.com/adrirf7)

---

💼 _Proyecto desarrollado para demostrar competencias en desarrollo frontend moderno_
