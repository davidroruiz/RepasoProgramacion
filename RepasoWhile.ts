function numerosPares(arrayNumeros: number[]) {
    let nPares: number[] = [];
    let index: number = 0;
    let isPar = false;
    while (index < arrayNumeros.length && isPar == false) {
        if (arrayNumeros[index] % 2 == 0) {

            nPares.push(arrayNumeros[index])
            isPar = true;
        } else {
            index++;
        }
    }

    return nPares + " es par";
}

function nameM(arrayName = []) {

    let index: number = 0;
    let booleanoNumber: boolean = true;
    while (index < arrayName.length && booleanoNumber === true) {

        if (arrayName[index].includes("M")) {
            booleanoNumber = true;
            index++;

        } else {
            booleanoNumber = false;
        }

    }
    return booleanoNumber;
}

console.log(numerosPares([1, 2, 3, 4, 5]));
console.log(nameM(["Manolo", "Ma"]));

