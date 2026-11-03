/*
Crear un programa que solicite al usuario el ingreso de dos valores numericos, el rpograma debe validar cual es el
 mayor de ambos e informar al usuario cual es el mayor, al mismo mulltiplicarlo 10 veces por su potencia 
 y mpostar su resultado final
*/ 

let numeroUno = parseInt(prompt("Ingrese el primer valor numerico: "));
let numeroDos = parseInt(prompt("Ingrese el segundo valor numerico: "))

let numeroMayor = 0;

if (numeroUno > numeroDos) {
    alert("El numero " + numeroUno + " es el mayor");
    numeroMayor = numeroUno;

} else if (numeroDos > numeroUno) {
    alert("El numero " + numeroDos + " es el mayor");
    numeroMayor = numeroDos;
} else {
    alert("Los numeros son iguales");
}

let resultadoFinal = 0;

for (let i = 0; i < 10; i++) {
    resultadoFinal += Math.pow(numeroMayor, 2);
}

alert("EL resultado es: " + resultadoFinal)