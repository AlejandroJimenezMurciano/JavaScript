//Strings

//Crea dos funciones que reciban una palabra, si la palabra tiene más de 5 caracteres la imprimirá en mayúsculas, si no en minúsculas. Una función lo resolverá con if y la otra con un operador ternario.

const string = (name) => {
    if(name.length > 5) {
     console.log(name.toUpperCase())
    } else {
     console.log(name.toLowerCase())
    }
};
string('Alejandro')

const string2 = name => name.length > 5 ? console.log(name.toUpperCase()) : console.log(name.toLowerCase())
string2('Hola')


//Crea una función que reciba 2 verbos. La función debe imprimir a qué conjugación pertenecen. Por ejemplo, si la función recibe "andar" y "correr" debe imprimir "El verbo andar es de la primera conjugación y el verbo correr de la segunda conjugación".

const verbs = (a,b) => {
    if (a.endsWith('ar') && b.endsWith('ar')){
        console.log(`Los verbos ${a} y ${b} son de la primera conjugación`)
    } else if (a.endsWith('er') && b.endsWith('er')){
        console.log(`Los verbos ${a} y ${b} son de la segunda conjugación`)
    }else if (a.endsWith('er') && b.endsWith('ir')){
        console.log(`Los verbos ${a} y ${b} son de la tercera conjugación`)
    }else if (a.endsWith('ar') && b.endsWith('er')){
        console.log(`El verbo ${a} es de la primera conjugación y el verbo ${b} es de la segunda conjugación`)
    }else if (a.endsWith('ar') && b.endsWith('ir')){
        console.log(`El verbo ${a} es de la primera conjugación y el verbo ${b} es de la tercera conjugación`)
    }else if (a.endsWith('er') && b.endsWith('ar')){
        console.log(`El verbo ${a} es de la segunda conjugación y el verbo ${b} es de la primera conjugación`)
    }else if (a.endsWith('er') && b.endsWith('ir')){
        console.log(`El verbo ${a} es de la segunda conjugación y el verbo ${b} es de la tercera conjugación`)
    }else if (a.endsWith('ir') && b.endsWith('ar')){
        console.log(`El verbo ${a} es de la tercera conjugación y el verbo ${b} es de la primera conjugación`)
    }else if (a.endsWith('ir') && b.endsWith('er')){
        console.log(`El verbo ${a} es de la tercera conjugación y el verbo ${b} es de la segunda conjugación`)
    }
}
verbs('fumar', 'correr')


//Crea una función que reciba un sólo parámetro con nombre y apellido separados por un espacio. La función debe separar el nombre y el apellido e imprimirlos por separado en dos console.log.

const stringName = fullName => {
    console.log(fullName.substring(0, fullName.indexOf(' ')))
    console.log(fullName.substring(fullName.indexOf(' ') + 1))
}
stringName('Alejandro Jiménez')


//Crear una función generateWord que reciba 3 palabras y genere una palabra usando 2 letras de cada palabra. Por ejemplo, "Hola", "Adios" y "Mano" podrían generar "aldona". Resuelve el ejercicio con una sóla línea dentro de la función.

const randomWord = (word1, word2, word3) => {
    console.log(
        word1.charAt(Math.floor((Math.random() * word1.length)))
        + word1.charAt(Math.floor((Math.random() * word1.length)))
        + word2.charAt(Math.floor((Math.random() * word2.length)))
        + word2.charAt(Math.floor((Math.random() * word2.length)))
        + word3.charAt(Math.floor((Math.random() * word3.length)))
        + word3.charAt(Math.floor((Math.random() * word3.length)))
    )
}
randomWord('mesa', 'silla', 'perro')


//Crea una función que reciba un email e imprima por separado el nombre y el dominio. "dorian@gmail.com" deberá imprimir "El usuario es dorian" y por otro lado "El dominio es gmail.com".

const stringEmail = email => {
    console.log('El usuario es ' + email.substring(0, email.indexOf('@')))
    console.log('El dominio es ' + email.substring(email.indexOf('@') + 1))
}
stringEmail('dorian@gmail.com')