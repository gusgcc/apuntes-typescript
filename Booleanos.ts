/*uso de boolanos*/
let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: boolean = true

//error no se le puede asignar una cadena a un tipo bool
//esSuperman="cadena"

if (esSuperman) {
    console.log("Estamos Salvados")
} else {
    console.log("ohhhh")
}


esSuperman = convertirClark();

function convertirClark () {
    return false //solo puede retornar bool xq el valor es asiganado a un avar bool
}