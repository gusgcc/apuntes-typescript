class Avenger1 {
    //variables
    nombre: string
    equipo: string
    //constructor
    constructor(nombre: string, equipo: string) {
        this.nombre = nombre
        this.equipo = equipo
    };
    /*no permite polimorfismo
    constructor() {
        this.equipo = ""
        this.nombre = ""
    }*/
    //metodos
    cambiarNombre (nuevoNombre: string) {
        this.nombre = nuevoNombre
    }
}
//instanciar
let miAvenger = new Avenger1("ironman", "rojo")
miAvenger.cambiarNombre("superman")
