export const directionEvent = (key, currentDirection, setDirectionFn) => {
  //La funcion recibe internamente el objeto keyboardEvent(key) al establecerlo en el EventListener con el tipo "keydown"

  switch (key.code) {
    //Extraemos el objeto keyboardEvent(key) el valor .code, este contiene una clave de la tecla pulsada
    //Si cumple la condicion establecida, ejecuta la funcion y setea la direccion que el usuario pulso (key.code)
    //El switch tiene como objetivo, verificar que el usuario no este pulsando una direccion contraria a la que este yendo la serpiente. Ej: si va hacia arriba, no puede cambiar la direccion hacia abajo, si va hacia la derecha no puede cambiar la direccion hacia la izquierda, etc...
    case "ArrowUp":
      if (currentDirection !== "ArrowDown") setDirectionFn("ArrowUp");
      break;
    case "ArrowDown":
      if (currentDirection !== "ArrowUp") setDirectionFn("ArrowDown");
      break;
    case "ArrowLeft":
      if (currentDirection !== "ArrowRight") setDirectionFn("ArrowLeft");
      break;
    case "ArrowRight":
      if (currentDirection !== "ArrowLeft") setDirectionFn("ArrowRight");
      break;
  }
};
