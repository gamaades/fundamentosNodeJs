console.time("todo");
let suma = 1;

console.time("bucle");
for (let i = 0; i < 10000000; i++) {
    suma += 1;
}
console.timeEnd("bucle");

let suma2 = 1;

console.time("bucle2");
for (let j = 0; j < 1000000000; j++) {
    suma2 += 2;
}

console.timeEnd("bucle2");
console.time("asincrono");
console.log("Comienza el proceso asincrono");
asincrona()
    .then(() => {
        console.timeEnd("asincrono");

    })

console.timeEnd("todo");

function asincrona() {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            console.log("Termina el proceso asíncrono!");
            resolve();
        }, 1000);
    })
}
//console.log(suma);