"use strict";
var Avenger1 = /** @class */ (function () {
    //constructor
    function Avenger1(nombre, equipo) {
        this.nombre = nombre;
        this.equipo = equipo;
    }
    ;
    /*no permite polimorfismo
    constructor() {
        this.equipo = ""
        this.nombre = ""
    }*/
    //metodos
    Avenger1.prototype.cambiarNombre = function (nuevoNombre) {
        this.nombre = nuevoNombre;
    };
    return Avenger1;
}());
//instanciar
var miAvenger = new Avenger1("ironman", "rojo");
miAvenger.cambiarNombre("superman");
