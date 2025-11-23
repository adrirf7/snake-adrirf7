export const gameOver = (gameOverSign, moveInterval, startButton, sizeSelector) => {
  gameOverSign.style.display = "block"; //Se muestra el mensaje de derrota
  clearInterval(moveInterval); //Eliminamos el intervalo para que la serpiente deje de moverse
  //Se vuelven a habilitar los botones
  startButton.disabled = false;
  sizeSelector.disabled = false;
};
