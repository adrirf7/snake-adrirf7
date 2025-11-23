export const addFood = (eatSounds, updateScoreFn, createRandomFoodFn) => {
  updateScoreFn(); //actualiza el score
  createRandomFoodFn(); //Vuelve a crear un nuevo espacio con comida

  //Generar sonido al comer
  eatSounds.play();

  return 1; // Retorna 1 para incrementar el score
};
