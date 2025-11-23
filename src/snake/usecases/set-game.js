import { board } from "../index";

export const setGame = (boardSize, squareTypes) => {
  const newSnake = ["0-0", "0-1", "0-2", "0-3"]; //Creacion inicial de la serpiente
  const newScore = newSnake.length; //Puntuacion es igual al largo de la serpiente
  const newDirection = "ArrowRight"; //Movimiento inicial hacia la derecha
  const newBoardSquares = Array.from(Array(boardSize), () => new Array(boardSize).fill(squareTypes.emptySquare)); //Creacion de un array del tamaño del tablero (10) y a cada uno de esos elementos del array se le pasa la funcion para que sean otro array, este se rellena de 0 (squareTypes.emptySquare) con .fill

  console.log(newBoardSquares);
  //resetear valores cada vez que se pulsa el boton start
  board.innerHTML = "";
  const newEmptySquares = [];

  return {
    snake: newSnake,
    score: newScore,
    direction: newDirection,
    boardSquares: newBoardSquares,
    emptySquares: newEmptySquares,
  };
};
