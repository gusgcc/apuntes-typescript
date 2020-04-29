//formas de declarar un numero
let avengers: number = 5;
let villanos: number;
let otros = 2;//forma implicita

//otros primero fue inicializada con number, x lo que no aceptara asiganciones de otro tipo de dato
//otros = "hola"//error


//las variables deben de ser usadas antes de usarse. ts ayuda la validadciom
villanos = 3;
if (avengers > villanos) {
    console.log("estamos salvados")
} else {
    console.log("estamos acabadoss")
}


otros = 12.3
//otros=true//mal