//console.log(global);
/*global: [Circular], ---> Dependencias ciruculares.
    clearInterval: [Function: clearInterval],
    clearTimeout: [Function: clearTimeout],
    setInterval: [Function: setInterval],
    setTimeout: [Function: setTimeout] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    },
    queueMicrotask: [Function: queueMicrotask],
    clearImmediate: [Function: clearImmediate],
    setImmediate: [Function: setImmediate] {
      [Symbol(nodejs.util.promisify.custom)]: [Function]
    }
  }
*/

//require(); // nos va a permitir acceder a cualquier módulo.
let i = 0; //  Inicializo contador en cero
let intervalo = setInterval(() => { // Asigno el setInterval a una variable intervalo para poder operarla luego.
    console.log("Buena wn!"); // imprimo el mensaje
    if (i === 3) { // Con i === 3 imprima mi mensaje hasta que de cero llega a 3 y luego haga clearInterval.
        clearInterval(intervalo);
    }
    i++;
}, 1000);

setImmediate(()=>{
    console.log("Ya mismo")
})

//console.log(process); // Muestra toda la información del proceso
//console.log(__dirname); // Nos indica el lugar en donde estamos
//console.log(__filename); // Nos indica el nombre del archivo en donde estamos
//* TIP: Si no tengo que usar variables globales no usarlas, pues son un foco de problemas. *//
//asi se crean variables globales
global.miVariable = "Inti";
console.log(miVariable);

// Como detalles adicional, setImmediate() es una función asíncrona, por lo que se ejecutará luego de que se libre el hilo principal.
//Eso quiere decir que si la ejecutas esto
setImmediate(()=>{
    console.log('Immediate')
});
console.log('Console 1');
console.log('Console 2');
console.log('Console 3');
console.log('Console 4');
console.log('Console 5');

