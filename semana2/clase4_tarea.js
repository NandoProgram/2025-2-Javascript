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

function obtenerMayor(numeros) {
  let mayor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > mayor) {
      mayor = numeros[i];
    }
  }
  return mayor;
}

function obtenerMenor(numeros) {
  let menor = numeros[0];
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] < menor) {
      menor = numeros[i];
    }
  }
  return menor;
}

function obtenerAprobados(numeros) {
  let aprobados = 0;
  let reprobados = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] >= 70) {
      aprobados++;
    } else {
      reprobados++;
    }
  }
  return { aprobados, reprobados };
}

function analizarCalificaciones(calificaciones) {
  const res = obtenerAprobados(calificaciones);
  let aprobados = res.aprobados;
  let reprobados = res.reprobados;
  let promedio = obtenerPromedio(calificaciones);
  let califAlta = obtenerMayor(calificaciones);
  let califBaja = obtenerMenor(calificaciones);

  return { aprobados, reprobados, promedio, califAlta, califBaja };
}

async function main() {
  const calificaciones = [90, 89, 34, 45, 67, 89, 23, 12, 45, 89, 8, 90]
  const resultado = analizarCalificaciones(calificaciones);
  console.log(resultado);

}

main();


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
  const datos = [70, 80, 90, 100, 85, 15, 20];
  const estadistica = analizarCalificaciones(datos);
  console.log(`El resumen estadístico de: ${datos}`);
  console.log(`El número de aprobados es: ${estadistica.aprovados}`);
  console.log(`El número de reprobados es: ${estadistica.reprovados}`);
  console.log(`El promedio es: ${estadistica.promedio}`);

}

main();