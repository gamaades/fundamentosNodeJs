function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);        
    });
}

function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            //resolve(nombre);
            reject("hay un error");
        }, 1000);
    });
}

function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Adios!, " + nombre);
            resolve();
        }, 2000);
    });
}

// -- ejecucion
console.log("Iniciando el proceso...");
hola("Gus")
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then((nombre) => {
        console.log("Terminado el proceso.");
    })
    .catch(error => {
        console.error("Ha habido un error: ");
        console.error(error);
    })