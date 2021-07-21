import {Punto} from "./punto";

const punto1 = new Punto(10,5);
const punto2 = new Punto(10,10);
const punto3 = new Punto(30,15);
const punto4 = new Punto(20,40);


let arrayPunto = [punto2, punto3, punto4];

console.log(punto1.get_x());
console.log(punto1.get_y());
console.log(punto1.toString());
console.log(punto1.distanciaAlOrigen());
console.log(punto1.calcularDistancia(punto1));
console.log(punto1.calcularCuadrante());

console.log(punto1.calcularMasCercano(arrayPunto));






