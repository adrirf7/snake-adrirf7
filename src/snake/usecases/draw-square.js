export const drawSquare = (square, type, boardSquares, squareTypes, emptySquares) => {
  const [row, column] = square.split("-").map(Number); //Separa cada fila de cada columna de las cordenadas introducidad. Ej: coordenada (02) las separa en (0 2)
  boardSquares[row][column] = squareTypes[type]; //Cambia el tipo de cuadrado (estado) al que se necesite (serpiente, comida, o vacio)
  const squareElement = document.getElementById(square); //Extraemos el id del cuadrado asignado en el html al crear el board
  squareElement.setAttribute("class", `square ${type}`); //Cambiamos el tipo de ese cuadrado en el html para modificarle el color que se establecio en el css

  //Condicional para agregar o sacar elementos del array emptySquares
  if (type === "emptySquare" || type.includes("emptySquare")) {
    if (emptySquares.indexOf(square) === -1) {
      emptySquares.push(square); //Si ha sido creado un cuadrado vacio, se añade al array de caudrados vacios (emptySquares)
    }
  } else {
    if (emptySquares.indexOf(square) !== -1) {
      //Busca dentro del array(emptySquares) si existe ese cuadrado mediante la funcion indexOf. La funcion devuelve 1 si existe y -1 cuando no
      emptySquares.splice(emptySquares.indexOf(square), 1);
      // Mediante la función .splice(indiceInicio, cantidadAEliminar) eliminamos del array el valor de "square".
      // Con indexOf buscamos el índice donde se encuentra "square" para poder eliminarlo correctamente.
    }
  }
};
