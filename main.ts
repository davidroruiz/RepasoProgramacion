import {Punto} from "./punto";
import {Triangulo} from "./triangulo";

const punto1 = new Punto(15,5);
const punto2 = new Punto(1,7);
const punto3 = new Punto(30,15);
const punto4 = new Punto(10,3);


let arrayPunto = [punto2, punto3, punto4];

const triangulo1 = new Triangulo(punto1,punto2,punto3);


console.log(punto1.get_x());
console.log(punto1.get_y());
console.log(punto1.toString());
console.log(punto1.distanciaAlOrigen());

console.log(punto1.calcularDistancia(punto2));
console.log(punto1.calcularCuadrante());

console.log(punto1.calcularMasCercano(arrayPunto));

console.log(triangulo1.calcularLongitud());











