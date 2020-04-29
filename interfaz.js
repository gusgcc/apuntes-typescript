"use strict";
//clase que implementa una interfaz
var MiCarro = /** @class */ (function () {
    function MiCarro() {
        this.marca = "";
        this.numerollantas = 0;
    }
    MiCarro.prototype.avanzar = function () {
    };
    ;
    MiCarro.prototype.girarDerecha = function () { };
    return MiCarro;
}());
//variable es de tipo carro2
var MiCarro2;
//MiCarro2="carrro"//no se puede asignar, sino un valor tipo Micarro2
MiCarro2 = {
    marca: "honda",
    numerollantas: 0,
    avanzar: function () {
    },
    girarDerecha: function () { }
};
