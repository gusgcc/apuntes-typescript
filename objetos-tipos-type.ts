
//ts crea un objeto, parsea cada elemento del objeto//
//ademas define el objeto en si, debe tener todos los campos cuando se modifica el objeto
//definicion implicita
let flash = {
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
    //nacimiento:45//no se le puede agregar campos
}


//definicion explicita de tipos
/**********  CREAR TIPOS ESPECIFICOS */
let flash2:
    {
        nombre: string,
        edad: number,
        poderes: string[],
        getNombre: () => void
    }//hasta aqui llega la definicion
    = {//inicia asigancion, podria hacerse en otra linea
    nombre: "Barry",
    edad: 24,
    poderes: [],
    getNombre () {

    }
}



//permite ordenar , se puede definir el tipo en un archivo aparte
//otra forma con tipo perzonalizados
//definicion de un tipo
type Heroe = {
    nombre: string,
    edad: number,
    poderes: string[],
    getNombre: () => string//agregamos una funcion que devuelve un nombre
}
let flash3: Heroe = {
    nombre: "superman",
    edad: 25,
    poderes: [],
    getNombre () {
        return this.nombre
    }
}