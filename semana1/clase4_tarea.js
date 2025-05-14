// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

async function main() {
    const dia = new Date(await ask("Ingresa tu fecha de nacimiento en el formato: año-mes-dia:"));
    const actual= new Date();
    const resta= actual-dia;
    console.log("Edad en dias"=resta/ (1000 * 60 * 60 * 24));
    console.log("Edad en Meses"=resta/ (1000 * 60 * 60 * 24)); 
    console.log("Edad en dias"=resta/ (1000 * 60 * 60 * 24)); 

}

main();