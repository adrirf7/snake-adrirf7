# 🐍 Snake Game - Proyecto Portfolio

> Aplicación web interactiva del clásico juego Snake, desarrollada con JavaScript moderno y arquitectura modular. Proyecto enfocado en demostrar habilidades de desarrollo frontend, clean code y buenas prácticas de programación.

## 📖 Descripción del Proyecto

Este proyecto es una recreación moderna del icónico juego Snake, implementado como Single Page Application (SPA) utilizando JavaScript vanilla y herramientas de desarrollo modernas. La aplicación demuestra capacidades técnicas en manipulación del DOM, manejo de eventos, renderizado en canvas, arquitectura modular y responsive design.

El juego incluye múltiples opciones de configuración, controles táctiles para dispositivos móviles, sistema de puntuación en tiempo real, y una interfaz de usuario pulida con temas visuales personalizables.

## 🎯 Objetivo del Proyecto

Demostrar competencias técnicas en:

- Desarrollo de aplicaciones interactivas con JavaScript ES6+
- Arquitectura de código modular y escalable
- Implementación de lógica de juegos y algoritmos
- Diseño responsive y experiencia de usuario
- Gestión de estado y eventos en tiempo real
- Optimización de rendimiento en aplicaciones frontend

## 🛠️ Stack Tecnológico

### Core

- **JavaScript ES6+**: Módulos, destructuring, arrow functions, clases
- **HTML5**: Estructura semántica y canvas para renderizado
- **CSS3**: Flexbox, Grid, animaciones, variables CSS, media queries

### Herramientas de Desarrollo

- **Vite**: Build tool moderno con HMR (Hot Module Replacement)
- **npm**: Gestión de dependencias y scripts
- **Bootstrap 5**: Framework CSS para componentes responsive

### Características Técnicas

- **Module System**: Arquitectura basada en ES Modules
- **Web APIs**: Audio API, Canvas API, DOM manipulation
- **Event Handling**: Keyboard events, touch events, change events

## ⚙️ Funcionalidades Implementadas

### Mecánicas del Juego

- ✅ **Movimiento fluido de la serpiente** con sistema de grid
- ✅ **Detección de colisiones** con paredes y el propio cuerpo
- ✅ **Sistema de generación aleatoria** de comida
- ✅ **Crecimiento progresivo** de la serpiente
- ✅ **Sistema de puntuación** en tiempo real
- ✅ **Game loop optimizado** con intervalos controlados

### Interfaz de Usuario

- ✅ **Responsive design** adaptable a móviles, tablets y desktop
- ✅ **Controles de teclado** (flechas direccionales)
- ✅ **Controles táctiles** para dispositivos móviles
- ✅ **Temas visuales**: Modo oscuro y claro
- ✅ **Selector de tamaño** del tablero (10x10, 20x20, 30x30)
- ✅ **Control de audio** con opción de silenciar

### Experiencia de Usuario

- ✅ **Feedback visual** inmediato
- ✅ **Efectos de sonido** al comer comida
- ✅ **Pantalla de Game Over** con opciones de reinicio
- ✅ **Deshabilitación de controles** durante el juego
- ✅ **Transiciones suaves** entre estados

## 🏗️ Arquitectura y Metodología

### Patrón de Arquitectura

El proyecto implementa una **arquitectura modular** basada en el patrón de **separación de responsabilidades**:

```
src/
├── snake/
│   ├── index.js              # Controlador principal y gestión de eventos
│   └── usecases/             # Casos de uso (lógica de negocio)
│       ├── create-board.js   # Generación del tablero visual
│       ├── set-game.js       # Inicialización del estado del juego
│       ├── move-snake.js     # Lógica de movimiento
│       ├── draw-snake.js     # Renderizado de la serpiente
│       ├── add-food.js       # Gestión de comida
│       ├── game-over.js      # Lógica de fin de juego
│       └── ...               # Otros módulos especializados
```

### Principios Aplicados

- **Single Responsibility Principle**: Cada módulo tiene una única responsabilidad
- **DRY (Don't Repeat Yourself)**: Funciones reutilizables y código modular
- **Separation of Concerns**: Separación clara entre lógica, presentación y datos
- **Clean Code**: Nombres descriptivos, funciones pequeñas, código autodocumentado

### Proceso de Desarrollo

1. **Planificación**: Definición de requisitos y estructura modular
2. **Setup del proyecto**: Configuración de Vite y entorno de desarrollo
3. **Desarrollo iterativo**: Implementación de funcionalidades por módulos
4. **Testing manual**: Verificación de mecánicas y UX
5. **Refinamiento**: Optimización de rendimiento y mejoras visuales
6. **Responsive design**: Adaptación para múltiples dispositivos

## 💻 Características Técnicas Destacadas

### Gestión de Estado

```javascript
// Estado global del juego gestionado de forma eficiente
let snake, score, direction, boardSquares, emptySquares, moveInterval;
```

### Sistema de Colisiones

- Detección de bordes del tablero
- Detección de auto-colisión con el cuerpo de la serpiente
- Detección de comida con actualización de puntuación

### Renderizado Optimizado

- Grid CSS para representación del tablero
- Actualización selectiva de casillas modificadas
- Clases CSS dinámicas para estados visuales

### Event Handling Robusto

- Prevención de movimientos inversos inválidos
- Debouncing implícito en el game loop
- Soporte multi-input (teclado + touch)

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

## 🎓 Conocimientos Demostrados

### JavaScript

- Manipulación avanzada del DOM
- Event handling y propagación
- ES6+ (módulos, arrow functions, destructuring)
- Asincronía y timing (setInterval/clearInterval)
- Arrays y estructuras de datos

### CSS

- Flexbox y CSS Grid
- Responsive design con media queries
- Animaciones y transiciones
- Variables CSS personalizadas
- Modo oscuro/claro

### Desarrollo Web

- Configuración de bundlers (Vite)
- Estructura de proyectos escalables
- Versionado con Git
- Debugging y testing manual
- Performance optimization

## 📊 Métricas del Proyecto

- **Líneas de código**: ~500+ líneas de JavaScript modular
- **Módulos**: 11 módulos especializados
- **Tiempo de desarrollo**: Proyecto completo funcional
- **Responsive breakpoints**: Mobile, tablet, desktop
- **Performance**: 60 FPS en renderizado

## 🔄 Posibles Mejoras Futuras

- [ ] Sistema de niveles con dificultad progresiva
- [ ] Tabla de puntuaciones máximas (localStorage)
- [ ] Power-ups y obstáculos especiales
- [ ] Multijugador local
- [ ] Tests unitarios con Jest/Vitest
- [ ] Deployment automático con CI/CD

## 👨‍💻 Autor

**Adrián RF**

- GitHub: [@adrirf7](https://github.com/adrirf7)
- Proyecto: [snake-adrirf7](https://github.com/adrirf7/snake-adrirf7)

---
