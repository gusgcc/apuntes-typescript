"use strict";
//ts crea un objeto, parsea cada elemento del objeto//
//ademas define el objeto en si, debe tener todos los campos cuando se modifica el objeto
//definicion implicita
var flash = {
    nombre: "Barry Allen",
    edad: 24,
    poderes: ["correr rapido", "viajar por el tiempo"]
};
//flash.nombre = 25//no se puede asignar un numero a una var string
//debe pasarse todos los campos de la definicion
flash = {
    nombre: "Clark kent",
    edad: 500,
    poderes: ["Poder Volar"],
};
//definicion explicita de tipos
/**********  CREAR TIPOS ESPECIFICOS */
var flash2 = {
    nombre: "Barry",
    edad: 24,
    poderes: [],
    getNombre: function () {
    }
};
var flash3 = {
    nombre: "superman",
    edad: 25,
    poderes: [],
    getNombre: function () {
        return this.nombre;
    }
};
