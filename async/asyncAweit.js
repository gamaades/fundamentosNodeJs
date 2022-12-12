// La palabra async  la convierte inmediatamente en asíncrona.
async function hola(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Hola, " + nombre);
            resolve(nombre);
        }, 1500);        
    });
}

async function hablar(nombre) {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            console.log("Bla bla bla bla...");
            resolve(nombre);
            //reject("hay un error");
        }, 1000);
    });
}

async function adios(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log("Adios!, " + nombre);
            resolve();
        }, 2000);
    });
}

// Await solo es válido dentro de una función asíncrona.
async function main() {
    let nombre = await hola("Gustavo");
    await hablar(); 
    hablar(); // Para hacer que se ejecute en segundo plano no debe existir el await
    await hablar();
    await hablar();
    await adios(nombre);
    console.log("Termina el proceso");
}

console.log("Empezamos el proceso.");
main();
// Esto nos permitirá saber si nuestra función se está ejecutando de forma asíncrona.
console.log("Va a ser la segunda instrucción");

