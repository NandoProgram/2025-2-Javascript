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
    opcion = await ask('¿Qué deseas hacer? \n1. Agregar una edad\n2. Cuantos pueden votar \n3. Salir\n');
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
        console.log("Numero de usuarios que pueden votar es: "+ total);
    }else if (opcion === '3') {
      //Salir
      console.log('Gracias por usar el programa');
    } else {
      console.log('Opción no válida');
    }
  }
  const nombres=["juan", "Luz", "Pepe", "Nando"];
  let unaVocal=[];
  const vocales = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"];
  for(i=0; i<nombres.length; i++){
    numVocales=0;
    for(j=0; j<nombres[i].length; j++){
        for(k=0; k<vocales.length; k++){
            if(nombres[i][j]===vocales[k]){
                numVocales++;
            }
        }
    }
    if(numVocales===1){
        unaVocal.push(nombres[i]);
    }
  }
  console.log("Nombres con una Vocal: "+unaVocal);

}

main();