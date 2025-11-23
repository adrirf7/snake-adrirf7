import { boardSquares, board, emptySquares } from "../index";

export const createBoard = () => {
  boardSquares.forEach((row, rowIndex) => {
    //Recorre cada fila(row) del array y extrae su indice (rowIndex)
    row.forEach((column, columnIndex) => {
      //Recorre cada elemento(column) dentro de cada fila(row) y extrae su indice (columnIndex)
      const squareValue = `${rowIndex}-${columnIndex}`; //Creacion de una constante donde se asigan las coordenadas (valor del row + columna) (00, 01, 02, 03,...)
      const squareElement = document.createElement("div"); //creacion de un div en las coordenadas segun la iteracion del forEach

      const bgClass = (rowIndex + columnIndex) % 2 === 0 ? "lightSquare" : "darkSquare";

      squareElement.setAttribute("class", `square emptySquare ${bgClass}`); //Asignacion de clase al div
      squareElement.setAttribute("id", squareValue); //Asignacion de un id al div con las coordenadas extraidas anteriormente
      board.appendChild(squareElement); //Agregar cada que se crea un div al board
      emptySquares.push(squareValue); //Añade al array el identificador(coordenadas) de cada cuadrado vacío recién creado: [00, 01, 02, 03, 04, 05,...]
    });
  });
};

//Ajustar el tamaño del tablero introducido por el usuairo
export const setBoardSize = (value) => {
  const size = Number(value);
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  return size;
};
