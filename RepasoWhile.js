function numerosPares(arrayNumeros) {
    var nPares = [];
    var index = 0;
    var isPar = false;
    while (index < arrayNumeros.length && isPar == false) {
        if (arrayNumeros[index] % 2 == 0) {
            nPares.push(arrayNumeros[index]);
            isPar = true;
        }
        else {
            index++;
        }
    }
    return nPares + " es par";
}
function nameM(arrayName) {
    if (arrayName === void 0) { arrayName = []; }
    var index = 0;
    var booleanoNumber = true;
    while (index < arrayName.length && booleanoNumber === true) {
        if (arrayName[index].includes("M")) {
            //console.log(arrayName[index] + " es correcto empieza por M");
            booleanoNumber = true;
            index++;
        }
        else {
            //console.log(arrayName[index] + " es incorrecto no empieza por M");
            booleanoNumber = false;
        }
    }
    return booleanoNumber;
}
console.log(numerosPares([1, 2, 3, 4, 5]));
console.log(nameM(["Manolo", "Ma"]));
