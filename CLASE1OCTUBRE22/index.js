let primerNumero = parseInt(prompt("Ingrese el primer número:"));
alert("El número ingresado fue " + primerNumero);
let segundoNumero = parseInt(prompt("Ingrese el segundo número:"));
alert ("El número ingresado fue " + segundoNumero);
var parImpar = ((primerNumero + segundoNumero) % 2 === 0) ? "par" : "impar";
alert("La suma de los dos números es " + parImpar);
//Estructura condicional Multiple
switch (parImpar) {
    case "par":
        alert("La potencia del primer número es " + Math.pow(primerNumero, 2))
        break
    case "impar":
        alert("La potencia del segundo número es " + Math.pow(segundoNumero, 2))
        break
    default: alert("No es par ni impar")
    break
}

//Math Clase interna de JavaScript que nos permite realizar operaciones matemáticas
alert("El seno del primer número es " + Math.sin(primerNumero));
alert("El coseno del primer número es " + Math.cos(primerNumero));
alert("El arcoseno del primer número es " + Math.asin(primerNumero));
alert("El arcocoseno del primer número es " + Math.acos(primerNumero));
alert("La tangente del primer número es " + Math.tan(primerNumero));
alert("El arcotangente del primer número es " + Math.atan(primerNumero));
alert("El valor redondeado del primer número es " + Math.round(primerNumero));
alert("El valor redondeado hacia arriba del primer número es " + Math.ceil(primerNumero));
alert("El valor redondeado hacia abajo del primer número es " + Math.floor(primerNumero));
alert("El número mayor entre los dos números es " + Math.max(primerNumero, segundoNumero));
alert("La raíz cuadrada del primer número es " + Math.sqrt(primerNumero));
alert("El valor absoluto del primer número es " + Math.abs(primerNumero));
alert("El valor de PI es " + Math.PI);

