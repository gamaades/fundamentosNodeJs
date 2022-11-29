// Es una buena práctica el hacer funciones para reutilizar código.
function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        miCallback(nombre);
    }, 1500);
}

function hablar(callbackHablar) {
    setTimeout(function() {
        console.log("Bla bla bla bla...");
        callbackHablar();
    }, 100);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios!, " + nombre);
        otroCallback();
    }, 1000);
}

function conversacion(nombre, veces, callback) {
    //aplicaremos recursividad, y esto es llamar a la misma función, pero con información ligeramente distinta.
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback);
        })
    } else {
        adios(nombre, callback);
    }
}

console.log("Iniciando proceso...");
hola("Gustavo", function(nombre) {
    conversacion(nombre, 100, function() {
        console.log("Proceso terminado");
    });
})

// hola("Gus", function (nombre) {
//     hablar(function () {
//         hablar(function () {
//             hablar(function () {
//                 adios(nombre, function () {
//                     console.log("Terminando proceso...");     
//                 });
//             });
//         });
//     });
// });