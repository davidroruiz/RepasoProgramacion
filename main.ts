import {Punto} from "./punto";
import {Triangulo} from "./triangulo";

const punto1 = new Punto(15,5);
const punto2 = new Punto(1,7);
const punto3 = new Punto(30,15);
const punto4 = new Punto(10,3);


let arrayPunto = [punto2, punto3, punto4];

const triangulo1 = new Triangulo(punto1,punto2,punto3);

//Prueba de getter de x
console.log("Prueba de getter de x");

console.log(punto1.get_x());
//Prueba de getter de y
console.log("Prueba de getter de y");

console.log(punto1.get_y());
//Prueba de toString
console.log("Prueba de toString");

console.log(punto1.toString());
//Prueba de distanceAlOrigen
console.log("Prueba de distanciaAlOrigen");

console.log(punto1.distanciaAlOrigen());
//Prueba de calcular Distancia
console.log("Prueba de calcularDistancia");

console.log(punto1.calcularDistancia(punto2));
//Prueba de calcular cuadrante
console.log("Prueba de cuadrante");

console.log(punto1.calcularCuadrante());
//Prueba de calcular mas cercano
console.log("Prueba de calcular mas cercano");

console.log(punto1.calcularMasCercano(arrayPunto));
//Prueba de calcular longitud
console.log("Prueba de calcular longitud");

console.log(triangulo1.calcularLongitud());











