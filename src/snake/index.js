import { createBoard, setBoardSize, setGame, drawSquare, createRandomFood, drawSnake, moveSnake, addFood, gameOver, directionEvent, updateScore } from "./usecases/index";

//Elementos del HTML
export const board = document.querySelector("#board"),
  scoreBoard = document.querySelector("#scoreBoard"),
  startButton = document.querySelector("#start"),
  gameOverSign = document.querySelector("#gameOver"),
  sizeSelector = document.querySelector("#sizeSelector"),
  themeSelector = document.querySelector("#themeSelector"),
  soundSelector = document.querySelector("#soundSelector");

// Botones de control táctil
const btnUp = document.querySelector("#btnUp"),
  btnDown = document.querySelector("#btnDown"),
  btnLeft = document.querySelector("#btnLeft"),
  btnRight = document.querySelector("#btnRight");

//Audio para comer
const eatSounds = new Audio("assets/audio/570636__bsp7176__food.mp3");
eatSounds.volume = 0.5;

// Variables de configuración
let isSoundMuted = false;

//Game Settings
const gameSpeed = 100; //Velocidad del juego
const squareTypes = {
  emptySquare: 0,
  snakeSquare: 1,
  foodSquare: 2,
};

//Variables del Juego
export let snake, //Array de los valores que ocupa la serpiente
  score, //puntos del usuario
  direction, //Direccion de la serpiente
  boardSquares, //Array del tablero
  emptySquares, //Array de lugares vacios para generar la comida de la serpiente
  moveInterval, //Intervalo de tiempo para iterar el movimiento de la serpiente
  boardSize; //Tamaño del tablero

//Funcion para cambiar el valor que contiene la variable direccion
const setDirection = (newDirection) => {
  direction = newDirection;
};

// Event listener para cambio de tema
themeSelector.addEventListener("change", (e) => {
  if (e.target.value === "light") {
    document.body.classList.add("light-mode");
  } else {
    document.body.classList.remove("light-mode");
  }
});

// Event listener para mutear sonido
soundSelector.addEventListener("change", (e) => {
  isSoundMuted = e.target.value === "off";
});

// Función para manejar los controles táctiles
const handleTouchControl = (newDirection) => {
  const opposites = {
    ArrowUp: "ArrowDown",
    ArrowDown: "ArrowUp",
    ArrowLeft: "ArrowRight",
    ArrowRight: "ArrowLeft",
  };

  // Evitar que la serpiente vaya en dirección opuesta
  if (direction !== opposites[newDirection]) {
    setDirection(newDirection);
  }
};

// Event listeners para los botones táctiles
if (btnUp) btnUp.addEventListener("click", () => handleTouchControl("ArrowUp"));
if (btnDown) btnDown.addEventListener("click", () => handleTouchControl("ArrowDown"));
if (btnLeft) btnLeft.addEventListener("click", () => handleTouchControl("ArrowLeft"));
if (btnRight) btnRight.addEventListener("click", () => handleTouchControl("ArrowRight"));

const startGame = () => {
  //Extraer el valor del tamaño del tablero e introducirlo como argumento en la funcion
  const selectedSize = sizeSelector.value;
  boardSize = setBoardSize(selectedSize);

  const gameState = setGame(boardSize, squareTypes);
  snake = gameState.snake;
  score = gameState.score;
  direction = gameState.direction;
  boardSquares = gameState.boardSquares;
  emptySquares = gameState.emptySquares;

  createBoard();

  gameOverSign.style.display = "none"; //Resetear el display del game over para cuando se juega mas de 1 partida consecutiva
  //Desabilitar el botones mientras esta jugando el usuario
  startButton.disabled = true;
  sizeSelector.disabled = true;

  drawSnake(snake, (square, type) => drawSquare(square, type, boardSquares, squareTypes, emptySquares));
  updateScore(scoreBoard, score);
  createRandomFood(emptySquares, (square, type) => drawSquare(square, type, boardSquares, squareTypes, emptySquares));

  document.addEventListener("keydown", (key) => directionEvent(key, direction, setDirection));

  moveInterval = setInterval(() => {
    moveSnake(
      snake,
      direction,
      boardSize,
      boardSquares,
      squareTypes,
      () => gameOver(gameOverSign, moveInterval, startButton, sizeSelector),
      () => {
        score++;
        updateScore(scoreBoard, score);
        createRandomFood(emptySquares, (square, type) => drawSquare(square, type, boardSquares, squareTypes, emptySquares));
        if (!isSoundMuted) {
          addFood(
            eatSounds,
            () => {},
            () => {}
          );
        }
      },
      (square, type) => drawSquare(square, type, boardSquares, squareTypes, emptySquares),
      (snakeArr, drawSquareFn) => drawSnake(snakeArr, drawSquareFn)
    );
  }, gameSpeed);
};

startButton.addEventListener("click", startGame);
