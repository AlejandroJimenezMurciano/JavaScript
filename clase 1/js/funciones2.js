//Funciones con return (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

//Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".
function sayHello2(tuNombre){
    return console.log('Hola' + tuNombre);
} 
sayHello2(' Ale')



//Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

function calculateSquareArea(lado, lado){
    return console.log(lado*lado)
}
calculateSquareArea(20, 20)


//Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

function calculateTriangleArea(base, altura){
    return console.log((base*altura)/2)
}
calculateTriangleArea(4, 5)


//Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

function calculatecircleArea(radio){
    return console.log(radio*3.14)
}
calculatecircleArea(10)


//Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

function celsiusToFahrenheit(celsius){
    return console.log(celsius*1.8 + 32)
}
celsiusToFahrenheit(30)


//Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

function fahrenheitToCelsius(fahrenheit){
    return console.log((fahrenheit-32) / 1.8)
}
fahrenheitToCelsius(40)


//Crea una función totalPrice que reciba un precio y le sume el IVA.

function totalPrice(precio){
    return console.log(precio+precio*0.21)
}
totalPrice(4)


//Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

function writeMessage(name, material, size, note){
    return console.log(`${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`)
}
writeMessage ('Ale', 'goma', 'nueve', 'ocho')