// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

const { ask } = require('../helpers/input');

async function main(){

    class alumno{
        nombre;
        edad;
        calificacion;
        constructor(nombre, edad, calificacion){
            this.nombre=nombre;
            this.edad=edad;
            this.calificacion=calificacion;
        }
        monstrarInfo(){
            console.log("");
        }
    }

    let opcion="0";
    let alumnos =[];

    while(opcion!="3"){
        opcion=await ask("Que deseas hacer \n 1) agregar un alumno \n 2)Mostrar los datos \n 3) Salir\n Selecciona la opcion:  ");
        if(opcion==="1"){
            nombre=await ask("Nombre: ");
            edad=await ask("Edad: ");
            calificacion=parseInt(await ask("Calificacion: "));
            alumnos.push(new alumno(nombre, edad, calificacion));
        }else if(opcion==="2"){
            resultados=calculos(alumnos);
            console.log("Numero de aprobados: "+ resultados.aprobadosTotal);
            console.log("Numero de votantes: "+ resultados.votarTotal);
            console.log("promedio: "+ resultados.promedioTotal);
            console.log("Mayor calificacion: "+ resultados.mayorTotal);
            console.log("Menor calificacion: "+ resultados.menorTotal);
        }else{
            console.log("Opcion invalida")
        }
    }
}

//funciones 

function promedio(alumnos){
    total=0;
    for(i=0; i<alumnos.length;i++){
        total += alumnos[i].calificacion;
    }
    return (total/alumnos.length);
}

function aprobados(alumnos){
    total=0;
    for(i=0; i<alumnos.length;i++){
        total += ((alumnos[i].calificacion>=70)?1:0);
    }
    return total;
}

function votar(alumnos){
    total=0;
    for(i=0; i<alumnos.length;i++){
        total += ((alumnos[i].edad>=18)?1:0);
    }
    return total;
}

function menor(alumnos){
    menor=alumnos[0].calificacion;
    for(i=0; i<alumnos.length;i++){
        menor = ((alumnos[i]<menor)?alumnos[i].calificacion:menor);
    }
    return menor;
}

function mayor(alumnos){
    mayor=alumnos[0].calificacion;
    for(i=0; i<alumnos.length;i++){
        mayor = ((alumnos[i]>mayor)?alumnos[i].calificacion:mayor);
    }
    return mayor;
}

function calculos(alumnos){
    aprobadosTotal=aprobados(alumnos);
    votarTotal=votar(alumnos);
    promedioTotal=promedio(alumnos);
    mayorTotal=mayor(alumnos);
    menorTotal=menor(alumnos);
    return {aprobadosTotal, votarTotal, promedioTotal, mayorTotal, menorTotal}
}

main();