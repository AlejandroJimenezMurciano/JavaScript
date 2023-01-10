//Arrays métodos callback

//Crea una función que reciba un array de números y muestre por consola cada número multiplicado por su índice en el array. //METER RETURN

const multiply = (array) => {
    array.forEach((element, index) => {
        console.log(element * index);
    })
};
multiply ([2,3,4,5])


//Crea una función que reciba un array de números y devuelva cada número dividido por su índice en el array más 2.

const divide = (array) => {
    array.forEach((element, index) => {
        console.log(element / (index + 2));
    })
};
divide ([12,23,34,25])


//Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.

const mayus = (array) => array.map((word) => word.toUpperCase())

console.log(mayus (['casa', 'perro', 'mesa']))

//Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.

const newArray = (array2, letter) => {
    const array3 = array2.filter(word => {
        word.startsWith(letter)
    });
    if (array3.map(letter)){
        console.log(newArray.startsWith(letter))
    }else{
        console.log()
    }
}
newArray (['mesa', 'mapa', 'casa','m'])

//Añade a la función anterior que el filtro funcione independientemente de mayusculas o minúsculas.

//Crea una función que reciba un array de números desordenados y los muestre por consola ordenados de mayor a menor y de menor a mayor.

//Crea una función que reciba un array de 5 palabras y las ordene alfabéticamente e inversamente.