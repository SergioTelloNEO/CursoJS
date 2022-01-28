/*
Ejemplos de tipos
de tipos de datos
en JavaScript
*/

//Tipo de dato string
var nombre = "sergio"
console.log(typeof nombre);

var nombre = 10;
console.log(typeof nombre);

//Tipo de dato numerico
var numero = 1000;
console.log(numero)

//Tipo de dato object
var objeto = {
    nombre: "Sergio",
    apellido: "Tello",
    edad: 23
}
console.log(typeof objeto)


//Tipo de dato Bolean (true, false)
var bandera = false;
console.log(typeof bandera);

//Tipo de dato Function 
function miFuncion() {}
console.log(typeof miFuncion);

//Tipo de dato Symbol 
var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo);

//Tipo clase es una funcion 

class Persona {
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(typeof Persona);

//Tipo de dato undefined 
var x;
console.log(typeof x);

//Null = Ausencia de valor
var y = null;
console.log(typeof y)

//Arrays
var autos = ['BMW','Tesla', 'Toyota'];
console.log(autos);
console.log(typeof autos);

var z = '';
console.log(z);
console.log( typeof z);

var nombre = "Sergio";
var apellido = "Tello";

var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

var nombreCompleto2 = 'Sergio' + ' ' + 'Tello';
console.log(nombreCompleto2);

var x = nombre + 219;
console.log(x);

var x = nombre + (5 + 5);
console.log(x);

var x = 5 + 5 + nombre;
console.log(x);