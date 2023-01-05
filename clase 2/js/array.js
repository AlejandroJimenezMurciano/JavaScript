//Arrays

//Usando la función que genera un número aleatorio anterior, crea una función que reciba un array de 5 números. Imprime por consola una posición aleatoria del array.

const generateRandomNumber = Number => {
    return (Math.floor(Math.floor() * number))
}

const generateArray = array => {
    console.log(array[generateRandomNumber(array.length)])
}
generateArray([1, 2, 3, 4, 5])


//Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  //- "La suma de todos los números es:[suma]"
  //- "La media de todos los números es:[media]"
  //- "El mayor es [mayor] y el menor es [menor]"

  const generator = array2 => {
    console.log(`La suma de todos los números es ${array2[0] + array2[1] + array2[2]}`)
    console.log(`La media de todos los números es ${(array2[0] + array2[1] + array2[2]) / array2.length}`)
    console.log(`El mayor es ${Math.max(array2[0] + array2[1] + array2[2])}. El menor es ${Math.min(array2[0] + array2[1] + array2[2])}.`)
}
generator([8,6,9])


//Crea una función que reciba un array con 5 números y un número aleatorio entre 0 y 5. La función deberá decir si el array contiene ese número y en qué posición o si no lo contiene.

const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const number = (array, number) => {
    if (array.includes(number)){
        console.log(array.indexOf(number))
    }else{
        console.log('No lo contiene')
    }
}
number([1,4,9,34], randomNumber(0, 5));


//Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const createArray = array => {
    array.push(minMaxRndomNumber(0, 100));
    array.push(minMaxRndomNumber(0, 100));
    array.push(minMaxRndomNumber(0, 100));
    return array
}
console.log(createArray([]))


//Usando la función anterior, crea otra función que imprima el valor en la posición 0 del array después de haber eliminado la primera y la última posición.

const deleteArray = array =>{
    array.shift();
    array.pop();
    console.log(array[0])
}
deleteArray(createArray([]))