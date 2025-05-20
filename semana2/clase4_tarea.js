//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja


function obtenerPromedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;
  return promedio;
}

function obtenerAprovdos(numeros) {
  let aprovados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
        aprovados++
    }
  }
  return aprovados;
}

function analizarCalificaciones(numeros) {
  const promedio = obtenerPromedio(numeros);
  const aprovados = obtenerAprovdos(numeros);
  const reprovados = numeros.length-aprovados;

  return { aprovados, reprovados, promedio }
}


async function main() {
    console.log("hola");
  const datos = [70, 80, 90, 100, 85, 15, 20];
  const estadistica = analizarCalificaciones(datos);
  console.log(`El resumen estadístico de: ${datos}`);
  console.log(`El número de aprobados es: ${estadistica.aprovados}`);
  console.log(`El número de reprobados es: ${estadistica.reprovados}`);
  console.log(`El promedio es: ${estadistica.promedio}`);

}

main();