export const createRandomFood = (emptySquares, drawSquareFn) => {
  const randomEmptySquare = emptySquares[Math.floor(Math.random() * emptySquares.length)]; //Creacion un valor aleatorio dentro del largo actual del array de empySquares
  drawSquareFn(randomEmptySquare, "foodSquare"); //LLamamos a la funcion draw para mostrar por pantalla el color rojo
};
