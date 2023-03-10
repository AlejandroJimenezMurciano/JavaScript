//Bucles Determinados
console.log(`BUCLES DETERMINADOS - Alejandro Jimenez Murciano`)
console.log(`Ejercicio 1: Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.`)
//Crea una función que reciba un número, la función debe imprimir una cuenta atrás desde ese número hasta 0.

const count = number => {
    for(let index = number; index > 0; index --){
        console.log(index)
    }
}
count(7);

console.log(`Ejercicio 2: Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.`)
//Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.

const sumArray = array => {
    let result = 0;
    for (const number of array){
        result = result + number;
    }
    console.log(result);
}
sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

console.log(`Ejercicio 3: Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10.`)
//Crea una función que reciba un número e imprima por consola la tabla de multiplicar del número que ha recibido hasta el 10. Para el 4 el resultado debe ser:

//4 x 0 = 0
//4 x 1 = 4
//4 x 2 = 8
//4 x 3 = 12
//4 x 4 = 16
//4 x 5 = 20
//4 x 6 = 24
//4 x 7 = 28
//4 x 8 = 32
//4 x 9 = 36
//4 x 10 = 40


const multiplicator = number => {
    for (let index = 0; index <= 10; index ++){
        console.log(`${number} x ${index} = ${number * index}`)
    }
}
multiplicator(4)

console.log(`Ejercicio 4: Crea la función inversa para que la tabla de multiplicar salga en orden inverso.`)
//Crea la función inversa para que la tabla de multiplicar salga en orden inverso. Para el 4 el resultado debe ser:

//4 x 10 = 40
//4 x 9 = 36
//4 x 8 = 32
//4 x 7 = 28
//4 x 6 = 24
//4 x 5 = 20
//4 x 4 = 16
//4 x 3 = 12
//4 x 2 = 8
//4 x 1 = 4
//4 x 0 = 0

const multiplicator2 = number => {
    for (let index = 10; index >= 0; index--){
        console.log(`${number} x ${index} = ${number * index}`)
    }
}
multiplicator2(5)


console.log(`Ejercicio 5: Crea una función que reciba un año y tu edad.`)
//Crea una función que reciba un año y tu edad, la función debe imprimir:

//"naciste en el año X"
//"En el año X cumpliste 1 año"
//"En el año X cumpliste 2 años"
//"En el año X cumpliste 3 años"
// ........

const life = (year, age) => {
    console.log(`Naciste en el año ${year - age}.`)

    for(let index = 1; index < age; index++) {
        if(index === 1){
            console.log(`En el año ${(year - age) + index} cumpliste ${index} año.` )
        }else{
            console.log(`En el año ${(year - age) + index} cumpliste ${index} años.`)
        } 
    }
} 
life(2023, 23)  

console.log(`Ejercicio 6: Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo.`)
//Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo. Si recibe 2 y 12 imprimirá 2, 4, 6, 8, 10, 12.

const evenNumber = (number1, number2) => {
    for(let index = number1; number2 >= index; index ++)
    if(index % 2 === 0)console.log(index)
}
evenNumber(1,20)

console.log(`Ejercicio 7: Crea una función que reciba dos números e imprima todos los números pares desde el primero hasta el segundo.`)
//Crea una función que genere 2 arrays y los rellene con 5 números aleatorios cada uno, la función debe decir qué valores se han repetido en los dos arrays.

const newArrays = () => {
    const array1 = []
    const array2 = []
    
    for(let index = 1; index <= 5; index ++){
        array1.push(Math.round(Math.random()*10));
        array2.push(Math.round(Math.random()*10));
    }
    console.log(array1)
    console.log(array2)

    for (const item of array1){
        if (array2.includes(item)) console.log(`El número ${item} está repetido`);
    }
} 
newArrays()


//Crea una función que reciba un número y te diga si es primo o no.

const primeNumberCheck = number =>{
    for(let index = number - 1; index > 1; index --){
        if((number % index) === 0) return `El número ${number} no es primo`
    }
    return `El número ${number} es primo`
}
console.log(primeNumberCheck(12))


//Crea una función que reciba un array de 10 números, imprime por consola cada número, su cuadrado y su cubo en este formato:
//"Número: 2 - Cuadrado: 4 - Cubo: 8".
//Nota: Dentro del objeto Math existe el método pow. Math.pow(número, exponente)
const count2 = number => {
    console.log(`Número: ${number} - Cuadrado: ${Math.pow(number, 2)} - Cubo: ${Math.pow(number, 3)}`)
}
count2(7);

// Crea una función que reciba una palabra e imprima por consola esa palabra pero con las vocales en mayúscula.

const vocalMayus = word => {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú']
    let newWord =''
    for (const letter of word) {
        if (vowels.includes(letter)) { newWord += letter.toUpperCase()}
        else {newWord += letter}
    }
    console.log(newWord)
}
vocalMayus('alejandro')


// Crea una función que reciba una frase e imprim el número de veces que se repite cada vocal

const numVowels = sentence => {
    let aCounter = 0;
    let eCounter = 0;
    let iCounter = 0;
    let oCounter = 0;
    let uCounter = 0;
  
    for (const letter of sentence) {
      if (letter === 'a' || letter === 'á') aCounter++;
      if (letter === 'e' || letter === 'é') eCounter++;
      if (letter === 'i' || letter === 'í') iCounter++;
      if (letter === 'o' || letter === 'ó') oCounter++;
      if (letter === 'u' || letter === 'ú' || letter === 'ü') uCounter++;
}
  
console.log(
      `La A se repite ${aCounter} veces. La E se repite ${eCounter} veces. La I se repite ${iCounter} veces. La O se repite ${oCounter} veces. La U se repite ${uCounter} veces.`
    );
};
  
numVowels('sobreesdrújula');

// Crea una función que reciba dos palabras e intercale las letras de cada una para formar una nueva palabra. Si la función recibe (hola, adios) el resultado será "haodliao", pero si recibe (adios, hola) el resultado será "ahdoiloa"

const intercalate = (word1, word2) => {
    let newWord = '';
    for (let index = 0; index < Math.min(word1.length, word2.length); index++) {
      newWord += word1.charAt(index);
      newWord += word2.charAt(index);
    }
    return newWord;
};
  
console.log(intercalate('hola', 'adiós'));

// Crea una función que reciba una palabra e imprima la misma palabra en orden inverso conservando las mayúsculas y las minúsculas. Si recibe "Elefante" deberá imprimir "etnafelE"

const reverse = word => {
    let newWord = '';
    for (let index = 0; index <= word.length; index++) {
      newWord += word.charAt(word.length - index);
    }
    return newWord;
};
  
console.log(reverse('Elefante'));

//Crea una función que reciba un número entero e imprima un lista de números impares como ésta:
//Si recibe un 6 imprimirá esta lista.
//1
//3 1
//5 3 1
//7 5 3 1
//9 7 5 3 1
//11 9 7 5 3 1

const oddNumbers = number => {
    let newString = '';
    for (let index = 1; index <= number; index++) {
      newString += index * 2 - 1 + ' ';
      console.log(newString);
    }
    return newString;
};
  
oddNumbers(6);

const oddNumbersReverse = number => {
    let prevString = '';
    let newString = '';
    for (let index = 1; index <= number; index++) {
      newString = index * 2 - 1 + ' ';
      console.log(newString + prevString);
      prevString = newString + prevString;
    }
};
  
oddNumbersReverse(6);
