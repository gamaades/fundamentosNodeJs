// let buffer = Buffer.alloc(4); // con esto guarda 4 espacio en memoria.
// let buffer = Buffer.from([1,2,3]); // con esto pasamos un array con datos, esta es la info que se esta guardando en cada espacio de buffer
let buffer = Buffer.from("Guardar el abecedario en un buffer. Mi nombre es Gustavo Mañán Álvarez"); // 48 6f 6c 61 esta es la traduccion de hola en datos binarios.

// console.log(buffer);
// console.log(buffer.toString());

// 
let abc = Buffer.alloc(26);

console.log(abc);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}

console.log(abc);
console.log(abc.toString());
