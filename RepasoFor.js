function numeroImpares(numeroFin) {
    var numImpares = [];
    for (var index = 0; index < numeroFin; index++) {
        if (index % 2 != 0) {
            numImpares.push(index);
        }
    }
    return numImpares;
}
function arrayRevertido(arrayInverso) {
    var arryaNuevo = [];
    for (var i = arrayInverso.length - 1; i >= 0; i--) {
        arryaNuevo.push(arrayInverso[i]);
    }
    return arryaNuevo;
}
function coloresArcoiris(colores) {
    var arcoIris = [];
    for (var index = 0; index < colores.length; index++) {
        if (colores[index] == "rojo" || colores[index] == "naranja" || colores[index] == "amarillo"
            || colores[index] == "verde" || colores[index] == "azul"
            || colores[index] == "añil" || colores[index] == "violeta") {
            arcoIris.push("El color " + colores[index] + " esta en el arcoiris");
        }
        else {
            arcoIris.push("El color " + colores[index] + " no esta en el arcoiris");
        }
    }
    return arcoIris;
}
function sumaArray(matrizPalabras) {
    var numeroCaracteres = 0;
    for (var index = 0; index < matrizPalabras.length; index++) {
        numeroCaracteres += matrizPalabras[index].length;
    }
    return numeroCaracteres;
}
function numeroParOrInPar(numero) {
    var respuestaConsole = "";
    if (numero % 2 == 0) {
        respuestaConsole = "El numero es par";
    }
    else if (!(numero % 2 == 0)) {
        respuestaConsole = "El numero es impar";
    }
    return respuestaConsole;
}
function parAndSuma() {
    var arrayHogar = ["Casa", "Coche", "Ciudad", "Cesta"];
    var arrayTransporte = ["Barco", "Baca", "Balon", "Bisiesto", "Brasil"];
    var arrayVene = ["Venezuela", "Veneno", "Voltaje"];
    var sumaHogar = sumaArray(arrayHogar);
    var sumaTransporte = sumaArray(arrayTransporte);
    var sumaVene = sumaArray(arrayVene);
    var parHogarSuma = numeroParOrInPar(sumaHogar);
    var parTrasnporteSuma = numeroParOrInPar(sumaTransporte);
    var parVeneSuma = numeroParOrInPar(sumaVene);
    console.log("La suma del array " + arrayHogar + " es " + sumaHogar + " y " + parHogarSuma);
    console.log("La suma del array " + arrayTransporte + " es " + sumaTransporte + " y " + parTrasnporteSuma);
    console.log("La suma del array " + arrayVene + " es " + sumaVene + " y " + parVeneSuma);
}
console.log(numeroImpares(10));
console.log(arrayRevertido([1, 2, 3, 4, 5]));
console.log(coloresArcoiris(["rojo", "azul", "morado"]));
console.log("Suma de los elementos del array");
console.log(sumaArray(["Hola", "Prueba"]));
console.log(numeroParOrInPar(2));
parAndSuma();
