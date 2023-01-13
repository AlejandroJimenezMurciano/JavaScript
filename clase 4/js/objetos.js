//Copia el objeto teacher de los apuntes e imprime en distintos console.log cada uno de los datos.
//para sacar usar el parametro del objeto hay q meterlo entre [] en el sonsole.log
//siempre que se quiera acceder a  laspropiedades de un objeto a traves de parametros se usan [].

const teacher = {
    info: {
        name: 'Dorian',
        age: 25,
        courses: [
            {
                title: 'HTML',
                duration: 9.5
            },
            {
                title:'CSS',
                duration: 20.8
            }
        ]
    },

    portfolio: {
        experience: 7,
        technologies: ['HTML', 'CSS', 'JS']
    },

    sayHello: name => console.log('Hola ${name}, soy Dorian!')
}

console.log(teacher.info.name);
console.log(teacher.info.age);
console.log(teacher.info.courses[0]);
console.log(teacher.info.courses[1]);
console.log(teacher.portfolio.experience);
console.log(teacher.portfolio.technologies);


//Dado este objeto, rellena los 5 arrays con el array de numbers. número + 2, número x 2, número / 2, números pares y números impares.

//Nota: la notación ```javascript, sólo sirve para que este archivo mantenga el formato, ignorad esa línea.

const data = {
  numbers: [10, 32, 31, 67, 9, 2, 51, 4],
  data2: {
    data3: {
      numbersPlus2: []
    },
    data4: {
      numbersDouble: []
    }
  },
  data5: {
    numbersDividedBy2: []
  },
  data6: {
    onlyEven: [],
    onlyOdd: []
  }
};

