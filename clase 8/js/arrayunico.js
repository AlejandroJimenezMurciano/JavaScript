//Arrays con elementos únicos

//Crea un array vacío. A través de una función recursiva, rellénalo con 10 números que no se repitan.

/*
PASOS:
rellenas el array con 10 numeros
lo pasas por el set
compruebas el length
*/

let array = [];
console.log(array);

const randomNumber = number => {
  return Math.floor(Math.random() * (number + 1));
};

const fillArray = n => {
  const number = randomNumber(n);
  array.push(number);
  array = [...new Set(array)];
  if (array.length === 10) return;
  fillArray(100);
};

fillArray(100);

console.log(array);