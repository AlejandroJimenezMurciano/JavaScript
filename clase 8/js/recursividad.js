//  Recursividad

//Crea un array vacío. A través de una función recursiva, rellénalo con 10 números que no se repitan.

const array = [];

const randomNumber = number => {
  return Math.floor(Math.random() * (number + 1));
};

while (array.length < 10) {
  const number = randomNumber(11);
  if (!array.includes(number)) {
    array.push(number);
  }
  console.log(array);
};