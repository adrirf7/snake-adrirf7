export const addFood = (eatSounds, updateScoreFn, createRandomFoodFn) => {
  updateScoreFn(); //actualiza el score
  createRandomFoodFn(); //Vuelve a crear un nuevo espacio con comida

  //Generar sonido aleatorio al comer
  let randomIndex = Math.floor(Math.random() * eatSounds.length);
  eatSounds[randomIndex].play();

  return 1; // Retorna 1 para incrementar el score
};
