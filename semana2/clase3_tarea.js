// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.
const { ask } = require('../helpers/input');

async function main() {
  let opcion = '';
  let numeros = [];
  let total=0;

  while (opcion !== '3') {
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una edad\n2. Cuantos tienen mas de 18 o 18 \n3. Salir\n');
    if (opcion === '1') {
      //Agregar
      let edadNueva = await ask('¿Qué edad deseas agregar?: ');
      numeros.push(edadNueva);
    } else if (opcion === '2') {
        //Salir
        console.log('Lista de edades');
        for(let i = 0; i < numeros.length; i++){
            if(numeros[i]>=18){
                total++;
            }
        }
        console.log("Numero de edades mayor o igual a 18: "+ total);
    }else if (opcion === '3') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
}

main();