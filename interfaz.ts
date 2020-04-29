//define un modelo o contrato a llenar en una clase. tmb puede usarse como unaa definicion como los tipos
//se definen atributos y funciones sin valor o implementacion
interface carro {
    marca: string;
    numerollantas: number;
    avanzar (): void;
    girarDerecha (): void;
}
//clase que implementa una interfaz
class MiCarro implements carro {
    marca = "";
    numerollantas = 0;
    avanzar () {
    };
    girarDerecha () { }
}
/////////////////////////////////////////
//obeservar que interface y type se parecen
type carro2 = {
    marca: string;
    numerollantas: number;
    avanzar (): void;
    girarDerecha (): void;
}
//variable es de tipo carro2
let MiCarro2: carro2


//MiCarro2="carrro"//no se puede asignar, sino un valor tipo Micarro2
MiCarro2 = {
    marca: "honda",
    numerollantas: 0,
    avanzar () {
    },
    girarDerecha () { }
}
