export const startGame = (
  sizeSelector,
  setBoardSizeFn,
  setGameFn,
  squareTypes,
  createBoardFn,
  gameOverSign,
  startButton,
  drawSnakeFn,
  updateScoreFn,
  createRandomFoodFn,
  directionEventFn,
  moveSnakeFn,
  gameSpeed
) => {
  //Extraer el valor del tamaño del tablero e introducirlo como argumento en la funcion
  const selectedSize = sizeSelector.value;
  const boardSize = setBoardSizeFn(selectedSize);

  const gameState = setGameFn(boardSize, squareTypes);

  createBoardFn();

  gameOverSign.style.display = "none"; //Resetear el display del game over para cuando se juega mas de 1 partida consecutiva
  //Desabilitar el botones mientras esta jugando el usuario
  startButton.disabled = true;
  sizeSelector.disabled = true;

  drawSnakeFn();
  updateScoreFn();
  createRandomFoodFn();

  document.addEventListener("keydown", directionEventFn); //Cada vez que el usuario pulsa una tecla llama a la funcion
  const moveInterval = setInterval(() => moveSnakeFn(), gameSpeed); //Ejecutara la funcion moveSnake() en cada intervalo de tiempo establecido en gameSpeed

  return { gameState, boardSize, moveInterval };
};
