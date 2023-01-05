// Crea una función que reciba un nombre y una edad e imprima por consola "Hola [nombre], eres mayor/menor de edad" en función de la edad que le pasemos.

const mayoria = (nombre, edad) => {
    if (edad >= 18){
        return `Hola ${nombre}, eres mayor de edad`
    }else{
        return `Hola ${nombre}, eres menor de edad`
    }
}
console.log(mayorEdad('Alejandro', 23))


// Crea una función que reciba 2 números distintos e imprima por consola cual es el mayor.

const number = (a, b) =>{
    if (a > b){
        return a
    }else{
        return b
    }
}
console.log(number(10,20))


//Crea una función que reciba un número e imprima por consola si es un número negativo, si es positivo o si es cero.

const positiveOrNegative = number => {
    if (number < 0){
        return 'Negativo'
    }else if (number > 0){
        return 'Positivo'
    }else return 0
}
console.log(positiveOrNegative(-10))


//Crea una función que reciba el color de un semáforo, si es verde mostrará por consola "Puedes pasar", si es naranja mostrará "Acelera" y si es rojo mostrará "Frena"

const trafficLight = color => {
    if (color === 'rojo' || color === 'Rojo'){
        console.log('Frena')
    }else if (color === 'verde' || color === 'Verde'){
        console.log('Puedes pasar')
    }else if (color === 'naranja' || color === 'Naranja' || color === 'ámbar' || color === 'Ámbar'){
        console.log('Acelera')
    }
}
trafficLight('Verde')


// Crea una función que reciba 3 notas, si la media está entre 0 y 5 mostrará el mensaje "Suspenso", si la media está entre 5 y 8 mostrará "Aprobado" y si la media es 8 o más dirá "Matrícula de honor"

const marks = (a, b, c) => {
    const media = (a + b + c)/3;
    if(media < 5){
        console.log('Suspenso')
    }else if (media >= 5 && media < 8){
        console.log('Aprobado')
    }else if (media >= 8 && media <10){
        console.log('Matrícula de honor')
    }
}
marks(8,9,10)


//Crea una función que reciba 3 números y los devuelva ordenados de mayor a menor

const numbers = (a, b, c) => {
    if (a > b && a > c){
        if (b > c){
            console.log(a, b, c)
        }else{
            console.log(a, c, b)
        }
    }else if (b > a && b > c){
        if (a > c){
            console.log(b, a, c)
        }else{
            console.log(b, c, a)
        }
    }else if (a > b){
        console.log(c, a, b)
    }else{
        console.log(c, b, a)
    }
}
numbers(70, 40, 60)