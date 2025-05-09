// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  let num1 = 0;
  let num2 = 0;
  let opt=0;
  let total=0;
  
  // TODO: Implementar la resta, multiplicación y división
  
  console.log('Seleccione una opcion: ');
  console.log('1.- Suma');
  console.log('2.- Resta');
  console.log('3.- Multiplicacion');
  console.log('4.- Division');

 
  opt = Number(await ask("Selecciona una opcion: "));

  if(opt>0 && opt<5){
     num1 = Number(await ask("¿Ingrese el primer numero: "));
     num2 = Number(await ask("Ingrese el segundo numero: "));

    switch(opt){
      case 1: 
        total=num1+num2;
      break;
      case 2: 
        total=num1-num2;
      break;
      case 3: 
        total=num1*num2;
      break;
      case 4: 
        total=num1/num2;
      break;
    }
    console.log('Resultado:', total);
  }else{
    console.log("Opcion invalida");
  }
  // TODO: Mostrar el resultado de la resta, multiplicación y división

}

main();
