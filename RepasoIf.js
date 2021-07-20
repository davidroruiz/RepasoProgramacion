function signoNacimiento(mesNacimiento, dayNacimiento) {
    var signo = "";
    switch (mesNacimiento) {
        case 1:
            if (dayNacimiento >= 21) {
                signo = "Acuario";
            }
            else {
                signo = "Capricornio";
            }
            break;
        case 2:
            if (dayNacimiento >= 20) {
                signo = "Piscis";
            }
            else {
                signo = "Acuario";
            }
            break;
        case 3:
            if (dayNacimiento >= 21) {
                signo = "Aries";
            }
            else {
                signo = "Piscis";
            }
            break;
        case 4:
            if (dayNacimiento >= 19) {
                signo = "Tauro";
            }
            else {
                signo = "Aries";
            }
            break;
        case 5:
            if (dayNacimiento >= 21) {
                signo = "Geminis";
            }
            else {
                signo = "Tauro";
            }
            break;
        case 6:
            if (dayNacimiento >= 21) {
                signo = "Cancer";
            }
            else {
                signo = "Geminis";
            }
            break;
        case 7:
            if (dayNacimiento >= 23) {
                signo = "Leo";
            }
            else {
                signo = "Cancer";
            }
            break;
        case 8:
            if (dayNacimiento >= 23) {
                signo = "Virgo";
            }
            else {
                signo = "Leo";
            }
            break;
        case 9:
            if (dayNacimiento >= 23) {
                signo = "Libra";
            }
            else {
                signo = "Virgo";
            }
            break;
        case 10:
            if (dayNacimiento >= 23) {
                signo = "Escorpio";
            }
            else {
                signo = "Libra";
            }
            break;
        case 11:
            if (dayNacimiento >= 22) {
                signo = "Sagitario";
            }
            else {
                signo = "Escorpio";
            }
            break;
        case 12:
            if (dayNacimiento >= 22) {
                signo = "Capricornio";
            }
            else {
                signo = "Sagitario";
            }
            break;
    }
    return signo;
}
function continentePais(pais) {
    switch (pais) {
        case "España":
            console.log("Su continente es Europa");
            break;
        case "Francia":
            console.log("Su continente es Europa");
            break;
        case "Italia":
            console.log("Su continente es Europa");
            break;
        case "Reino Unido":
            console.log("Su continente es Europa");
            break;
        case "Rumania":
            console.log("Su continente es Europa");
            break;
        case "Mexico":
            console.log("Su continente es America");
            break;
        case "Canada":
            console.log("Su continente es America");
            break;
        case "Argentina":
            console.log("Su continente es America");
            break;
        case "Colombia":
            console.log("Su continente es America");
            break;
        case "Peru":
            console.log("Su continente es America");
            break;
        case "Japon":
            console.log("Su continente es Asia");
            break;
        case "China":
            console.log("Su continente es Asia");
            break;
        case "India":
            console.log("Su continente es Asia");
            break;
        case "Tailandia":
            console.log("Su continente es Asia");
            break;
        case "Hong Kong":
            console.log("Su continente es Asia");
            break;
        case "Sudafrica":
            console.log("Su continente es Africa");
            break;
        case "Kenia":
            console.log("Su continente es Africa");
            break;
        case "Etiopia":
            console.log("Su continente es Africa");
            break;
        case "Marruecos":
            console.log("Su continente es Africa");
            break;
        case "Sudan":
            console.log("Su continente es Africa");
            break;
        default: "No hay continente para el pais";
    }
}
console.log(signoNacimiento(5, 31));
continentePais("España");
