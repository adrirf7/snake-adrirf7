export const drawSnake = (snake, drawSquareFn) => {
  snake.forEach((square) => drawSquareFn(square, "snakeSquare")); //Recorre el array donde almacenamos la serpiente y por cada valor que encuentre dentro(square) le aplicamos la funcion drawSquare pasandole como parametros el valor actual que va recorrido del array(square)(00, 01, 02...) y el tipo "snakeSquare"
};
