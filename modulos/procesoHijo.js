// Un proceso es algo que se ejecuta y termina. hay una libreria que se llama "child_process"
// Página https://nodejs.org/api/process.html
const { exec, spawn } = require("child_process");
//const { stderr } = require("process");

//este mostrara todas las carpeta.
// exec('ls -all', (err, stdout, stderr) => { // Para Windows
//   //exec('dir', (err, stdout, stderr) => { // Para Linux
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

//ejecutaremos el archivo console de node
// exec('node modulos/console.js', (err, stdout, stderr) => { // Para Windows
//   //exec('dir', (err, stdout, stderr) => { // Para Linux
//   if (err) {
//     console.error(err);
//     return false;
//   }

//   console.log(stdout);
// });

//cuando lo que se tiene que realizar es un poco mas complejo se utiliza el siguiente comando "Spawn". esto nos permite invocar un proceso nuevo de node js
let proceso = spawn("ls", ["-la"]);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on("data", function (dato) {
  console.log("¿Esta muerto?")
  console.log(dato.toString());
  console.log(proceso.killed);
});

proceso.on("exit", function() {
  console.log("El proceso  terminó!");
  console.log(proceso.killed);
})
