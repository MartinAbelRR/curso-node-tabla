// Helper es un módulo que se puede reutilizar en otros archivos.
// Hacer la tabla del 5 en javascript.
const fs = require('fs'); // Se exporta el módulo fs de node.js.
const { resolve } = require('path');
const colors = require('colors'); // Se importa el módulo colors.

// Forma 1.
// const crearArchivo = async (j= 5) => {
//     const promesa = new Promise((resolve, reject) => {
//         console.log('====================');
//         console.log(`Tabla del ${j} en JS`);
//         console.log('====================');

//         let salida = '';

//         for (let i = 0; i < 10; i++) {
//             salida += `${j} x ${i + 1} = ${j * (i + 1)}\n`; // Se concatena el resultado de la tabla.
//         }

//         console.log(salida);
    
//         // El file system para grabar en un archivo . en el primer parámetro se pone el nombre del archivo.
//         // Si no se pone el path, se graba en la dirección donde este ejecutando.
//         // Segundo paramatro es el contenido que se va a grabar.
//         // Tercer parámetro es un callback que recibe un error.
//         fs.writeFileSync(`tabla-${j}.txt`, salida); // Se graba el archivo de manera sincrónica.
        
//         let nombreArchivo = `Tabla-${j}.txt`;
//         (nombreArchivo) ? resolve(nombreArchivo) : reject('Error al crear el archivo');        
//     });

//     return promesa;
// }

// Forma 2.
const crearArchivo = async (j= 5, listar= true, hasta= 10) => {
    try {            
        let salida = '';
        let consola = ''

        for (let i = 0; i < hasta; i++) {
            salida += `${j} ${'x'} ${i + 1} ${'='} ${j * (i + 1)}\n`; // Se concatena el resultado de la tabla.
            consola += `${j} ${'x'.green} ${i + 1} ${'='.green} ${j * (i + 1)}\n`; // Se concatena el resultado de la tabla.
        }

        if (listar) {
            console.log('====================');
            console.log(`Tabla del ${j} en JS`.blue);
            console.log('====================');
            console.log(consola);
        }


        fs.writeFileSync(`out/tabla-${j}.txt`, salida); // Se graba el archivo de manera sincrónica.

        return `Tabla-${j}.txt`;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}