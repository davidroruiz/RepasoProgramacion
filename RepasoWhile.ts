function numerosPares(arrayNumeros: number[]) {

    let index: number = 0;
    let isPar = false;
    while (index < arrayNumeros.length && isPar == false) {
        if (arrayNumeros[index] % 2 == 0) {

            isPar = true;
        } else {
            isPar = false;
            index++;
        }
    }

    return isPar;
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
console.log("Numero Par");
console.log(numerosPares([1, 2, 3, 4, 5]));
console.log("2 nombres que empiezen por M");
console.log(nameM(["Manolo", "Ma"]));