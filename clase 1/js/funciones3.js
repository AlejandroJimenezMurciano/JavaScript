//Funciones de flecha (Todas retornan el resultado y la impresión en consola se hace fuera de la función)

//Crea una función llamada sayHello2 que reciba un nombre por parámetro y diga por consola "hola [nombre]".

const sayHello2 = tuNombre => 'hola' + tuNombre;
console.log(sayHello2('Ale'));


//Crea una función llamada calculateSquareArea que calcule el área de un cuadrado pasándole la medida del lado.

const calculateSquareArea = (lado) => lado*2;
console.log(calculateSquareArea(20)); 


//Crea una función llamada calculateTriangleArea que calcule el área de un triángulo pasándole la base y la altura.

const calculateTriangleArea = (base, altura)=> base*altura/2;
console.log(calculateTriangleArea(4, 5));


//Crea una función llamada calculateCircleArea que calcule el área de un círculo pasándole el radio.

const calculatecircleArea = (radio) =>radio*3.14;
console.log(calculatecircleArea(10));


//Crea una función llamada celsiusToFahrenheit que reciba un número de grados celsius y los convierta a fahrenheit. La formula es ºF = ºC x 1.8 + 32.

const celsiusToFahrenheit = (celsius) => celsius*1.8 + 32;
console.log(celsiusToFahrenheit(30));


//Crea la función inversa fahrenheitToCelsius. ºC = (ºF - 32) / 1,8.

const fahrenheitToCelsius = (fahrenheit) => fahrenheit-32 / 1.8;
console.log(fahrenheitToCelsius(40));


//Crea una función totalPrice que reciba un precio y le sume el IVA.

const totalPrice = (precio) => precio+precio*0.21;
console.log(totalPrice(4));


//Crea una función llamada writeMessage que reciba "name, material, size y note" y que escriba el siguiente mensaje por consola "[name] ha pedido una caja de [material] de tamaño [size]. [note].

const writeMessage = (name, material, size, note) => `${name} ha pedido una caja de ${material} de tamaño ${size}. ${note}`;
console.log(writeMessage ('Ale', 'goma', 'nueve', 'ocho'));