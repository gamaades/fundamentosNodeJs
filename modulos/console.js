console.log("ver algo"); // Nos permite ver algo por consola
console.info("Muestra info"); // Es equivalente a log pero es utilizado para mostrar información.
console.error("Mensaje de error"); // Es equivalente a log pero es utilizado para errores.
console.warn("Mensaje de advertencia"); // Es equivalente al log pero es utilizado para advertencias.

var tabla = [
    {
        a: 1,
        b: "Z"
    },
    {
        a: 2,
        b: "otra letras"
    }
];

var tablaNombres = [
    {
        Nombre: "Gustavo",
        Apellido: "Mañán",
        SegundoApellido: "Álvarez",
        Sexo: "M"
    },
    {
        Nombre: "Seba",
        Apellido: "Sanchez",
        edad: 31
    }
];
// console.log(tabla); // Mostrara datos en forma de modulos (tablas)
console.table(tabla); // Mostrara datos en forma de modulos (tablas), esto lo hace a partir de un objeto. //muestra una tabla a partir de un objeto.
console.table(tablaNombres);

console.group("Conversación"); // No permite "agrupar" un monton de logs para decir que forman parte de una cosa.
    console.log("Hola");
    console.group("bla");
        console.log("Bla bla bla...");
        console.log("Bla bla bla...");
        console.log("Bla bla bla...");
    console.groupEnd("bla");
    console.log("Adios");
console.groupEnd("conver");

console.log("Otro wea!");

//ejemplo en group en funcion
function funcion1() {
    console.group("funcion 1");
    console.log("Esto es de la funcion 1");
    console.log("Esto tambien");
    funcion2();
    console.log("Hemos vuelto a la 1");
    console.groupEnd("funcion 1");
}

function funcion2() {
    console.group("funcion 2");
    console.log("Ahora estamos en la funcion 2");
    console.groupEnd("funcion 2");
    //
}

console.log("Empeszamos");
funcion1();

console.time(); // Inicia un cronometro en ms.
console.count("Veces"); // Inicia un contador autoincremental.
console.count("Veces");
console.count("Veces");
console.countReset("Veces"); // Reinicia el contador a 0.
console.count("Veces");

console.timeEnd(); // Finaliza el cronometro.

//console.clear();