// Archivo inicial que lanzará todo el proyecto a veces es llamado index.js.
// console.clear();
// console.log("============");
// console.log('Table de 5');
// console.log("============");


// const j = 5;

// for (let i = 1; i <= 10; i++) {
    //     console.log(`${j} x ${i} = ${i * j}`);    
// }
    
//  const { crearArchivo } = require('./helper/multiplicar'); // Se importa el módulo multiplicar.js.

// const j = 6;

// crearArchivo(j)
// .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
// .catch(err => console.log(err));

const { crearArchivo } = require('./helper/multiplicar'); // Se importa el módulo multiplicar.js.
const colors = require('colors'); // Se importa el módulo colors.
const argv = require('./config/yargs'); // Se importa el módulo yargs.

console.clear();

// console.log(process.argv); // Se imprime el argumento que se pasa por consola.   
console.log(argv); // Se imprime el argumento que se pasa por consola.
// console.log(`base de yargs: ${argv.b}`); // Se imprime el argumento que se pasa por consola.

// const [,, arg3 = 'j=5'] = process.argv; // Se desestructura el argumento que se pasa por consola.
// const [, j] = arg3.split('='); // Se desestructura el argumento que se pasa por consola.

// console.log(process.argv); // Se imprime el argumento que se pasa por consola.
// console.log(j);

crearArchivo(argv.b, argv.l, argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'))
.catch(err => console.log(err));