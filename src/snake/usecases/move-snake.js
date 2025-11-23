export const moveSnake = (snake, direction, boardSize, boardSquares, squareTypes, gameOverFn, addFoodFn, drawSquareFn, drawSnakeFn) => {
  // Extraemos la cabeza actual de la serpiente, es decir, el último elemento del array "snake"
  // Mediante .split("-") separamos la coordenada (por ejemplo "5-7") en [5,7]
  // Luego usamos .map(Number) para convertir ambos valores a números (ya que .split devuelve strings)
  const [headRow, headCol] = snake[snake.length - 1].split("-").map(Number);

  // Creamos dos nuevas variables (fila y columna) que representarán la nueva posición
  // Inicialmente son iguales a la cabeza actual
  let newRow = headRow;
  let newCol = headCol;

  // Según la dirección actual, modificamos la fila o la columna para mover la cabeza
  switch (direction) {
    case "ArrowUp":
      newRow -= 1; // Si la dirección es hacia arriba, restamos 1 a la fila
      break;
    case "ArrowDown":
      newRow += 1; // Si es hacia abajo, sumamos 1 a la fila
      break;
    case "ArrowLeft":
      newCol -= 1; // Si es hacia la izquierda, restamos 1 a la columna
      break;
    case "ArrowRight":
      newCol += 1; // Si es hacia la derecha, sumamos 1 a la columna
      break;
  }

  // Creamos una nueva coordenada en formato "fila-columna" (por ejemplo "4-7")
  const newSquare = `${newRow}-${newCol}`;

  // ──────────────────────────────────────────────────────────────
  // Comprobamos si la serpiente se sale del tablero o choca consigo misma
  // ──────────────────────────────────────────────────────────────
  if (
    newRow < 0 || // Si la fila es menor que 0 → choca con el borde superior
    newRow >= boardSize || // Si la fila supera el tamaño del tablero → choca con el borde inferior
    newCol < 0 || // Si la columna es menor que 0 → choca con el borde izquierdo
    newCol >= boardSize || // Si la columna supera el tamaño del tablero → choca con el borde derecho
    boardSquares[newRow][newCol] === squareTypes.snakeSquare //Si el nuevo bloque es de tipo snake → choca contra sigo misma
  ) {
    gameOverFn();
  } else {
    snake.push(newSquare); // Si no hay colisión, añadimos el nuevo cuadrado al final del array "snake" (la nueva cabeza)

    // Si el nuevo cuadrado es de tipo "foodSquare", significa que ha comido
    if (boardSquares[newRow][newCol] === squareTypes.foodSquare) {
      addFoodFn(); // Llamamos a la función para aumentar la puntuación y generar nueva comida
    } else {
      // Si no hay comida, significa que simplemente se ha movido
      const emptySquare = snake.shift(); // Eliminamos el primer elemento del array (la cola) para mantener la longitud

      const [tailRow, tailCol] = emptySquare.split("-").map(Number);
      const bg = (tailRow + tailCol) % 2 === 0 ? "lightSquare" : "darkSquare";
      drawSquareFn(emptySquare, `emptySquare ${bg}`); // Dibujamos un cuadrado vacío en la antigua posición de la cola
    }

    // Finalmente, dibujamos la serpiente actualizada con su nueva posición
    drawSnakeFn(snake, drawSquareFn);
  }
};
