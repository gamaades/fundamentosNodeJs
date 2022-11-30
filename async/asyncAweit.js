// Solo colocando async delante de la función, esta es convertida en una funcion asincrona declarada y que podemos empezar a utilizar con el aweit.
async function hola(nombre) {
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
            resolve(nombre);
            //reject("hay un error");
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

async function main() {
    let nombre = await hola("Gustavo");
    await hablar();
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso");
}

console.log("Empezamos el proceso");
main();
// esto es asincrono porque lo que agregmos se ejecutara de segunda instancia
console.log("Va a ser la segunda instrucción");
