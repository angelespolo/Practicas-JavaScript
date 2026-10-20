console.log("Clase 20 de octubre");
let numeroUno= parseInt(prompt("Ingrese el primer número"));
console.log("Número ingresado " + numeroUno);
let numeroDos= parseInt(prompt("Ingrese el segundo número"));
console.log("Número ingresado " + numeroDos);
let suma= (numeroUno) + (numeroDos);
console.log("La suma es: " + suma);
let resta= (numeroUno) - (numeroDos);
console.log("La resta es: " + resta);
let multiplicacion= (numeroUno) * (numeroDos);
console.log("La multiplicación es: " + multiplicacion);
let division= (numeroUno) / (numeroDos);
console.log("La división es: " + division);
console.error("Termina el programa");
console.warn("Advertencia: El programa ha finalizado, por favor revise los resultados")
console.info("Información: El programa ha finalizado correctamente, gracias por participar")
// Esctructura condicional simple
if (numeroUno >100) {
    console.log("El primer número es mayor que 100");
}
// Esctructura condicional doble
if (suma % 2 == 0) {
    console.log("La suma es un número par");
}   else {
    console.log("La suma es un número impar");
}
// Esctructura condicional múltiple
switch(numeroUno) {
    case 1:
        alert("El primer número es 1");
        break;
    case 2:
        alert("El primer número es 2");
        break;
    case 3:
        alert("El primer número es 3");
        break;
    case 4:
        alert("El primer número es 4");
        break;
    case 5:
        alert("El primer número es 5");
        break;
    case 6:
        alert("El primer número es 6");
        break;
    case 7:
        alert("El primer número es 7");
        break;
    case 8:
        alert("El primer número es 8");
        break;
    case 9:
        alert("El primer número es 9");
        break;
    case 10:
        alert("El primer número es 10");
        break;
    default:
        alert("No es ningun valor en el rango de 1 a 10");
        Break;
}
//condicional doble con operador ternario
let resultadoMayor = (numeroUno > numeroDos) ? "El mayor es el primer número" : "El mayor es el segundo número";
console.log(resultadoMayor);
//condicional multiple (if anidados)
