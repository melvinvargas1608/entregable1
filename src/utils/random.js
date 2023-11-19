//  Lógica JavaScript
const getRandomElement = (elements) => {
    //? Lógica para retornar un elemento aleatorio de un arreglo 
    const indexRandom = Math.floor(Math.random() * elements.length);
    return elements[indexRandom];
};
  
export { getRandomElement };