// function soyAsincrona(miCallback) {
//     console.log("Hola, soy una funcion asíncrona");
//     setTimeout(function () {
//         console.log("Estoy siendo asíncronos");
//         miCallback();
//     }, 2000);
// }

// console.log("Iniciando proceso...");
// soyAsincrona(function () {
//     console.log("Finalizando proceso...");
// });

function hola(nombre, miCallback) {
    setTimeout(function () {
        console.log("Hola, " + nombre);
        miCallback(nombre);
    }, 3000);
}

function adios(nombre, otroCallback) {
    setTimeout(function() {
        console.log("Adios!," + nombre);
        otroCallback();
    }, 1500);
}

console.log("Iniciando proceso...");
hola("Gus", function (nombre) {
    adios(nombre, function () {
        console.log("Terminando proceso...");     
    });
});

// hola("Gustavo", function() {});
// adios("Gustavo", function() {});


// //Ejemplo estudiante
// Para entender los callbacks primero hay que regresar a las funciones y entender su sintaxis:

// Una función comienza con la palabra reservada “function” seguido del nombre de la función (“saludar” en este caso), después le sigue una lista de parámetros, estos entre paréntesis y separados por una coma en caso de ser mas de uno (“nombre” y “apellido” en este caso).

// Nota: Los parámetros son la lista de variables que proponemos cuando se define una función. Mientras que los argumentos son los valores que se pasan a la función cuando ésta es invocada, estos deben coincidir en numero y separados por coma en caso de ser mas de uno con los parámetros propuestos.
// palabra reservada function + nombre de la función + (parámetro(s))
function saludar(nombre, apellido) {
	//return "Hola " + nombre + " " + apellido;
	console.log("Hola " + nombre + " " + apellido);
}

// invocación de función + (argumento(s))
saludar("Alexander", "Book");

// Nota2: la instrucción “return” especifica el valor devuelto por la función, esta puede o no regresar explícitamente los valores de los parámetros de la función.

// Una vez comprendeos la sintaxis básica de lo que es una función, podemos entender que callback es una función que se pasa a otra función como un argumento, que luego se invoca dentro de la función externa para completar algún tipo de rutina o acción.

// Un ejemplo sencillo de una función callback es el siguiente: comencemos por declarar una función de nombre “ending” que contenga un mensaje, después declaremos una función “starting” que igual contenga un mensaje, pero, esta va a recibir un solo parámetro, el cual llamaremos “callback”, el cual va a recibir nuestra función ending para posteriormente invocarla dentro de sí misma.
function ending() {
	console.log("Terminando proceso... ");
}

function starting(callback) {
	console.log("Hola, soy una función asíncrona callback");
	callback();
}

console.log("Iniciando proceso... ");
starting(ending);

// Nota: entiéndase que el parámetro callback actúa como sustituto de nombre para la función ending en este caso.
// Ok ahora hagamos algo un poco mas complejo, declaremos una función de saludo y despedida, donde nuestra función de despedida recibirá como parámetro un valor asignado a nuestra función de saludo, tomando en cuenta que al llamar a la función de saludo esta recibirá dos parámetros, un nombre y nuestra función de despedida para hacer el callback.
// Respuesta:
// función de despedida
function chao(nameB) {
	console.log("Adios " + nameB);
}

// función de saludo
function hello(nameA, callback) {
	console.log("Hola " + nameA);
	// callback a la función de despedida
	callback(nameA);
}

hello("Carlos", chao);

// Nota: Los ejemplos anteriores son ejemplos de callback sincrónica, ya que se ejecuta inmediatamente.
// Agregando asincronía:
// Una de las funciones más sencillas para agregar asincrónica a nuestros procesos es ejecutar un “timeout”.
// Recordemos que un callback consiste en una función que recibe como parámetro otra función, así que podemos incluir la declaración de la función que se recibirá como parámetro en el mismo llamado de nuestra función callback, de manera que:
function soyAsincrona(callback) {
	setTimeout(() => {
		console.log("Estoy siendo asíncrona");
		callback();
	}, 1000);
}

console.log("Iniciando proceso... ");
soyAsincrona(function () {
	console.log("Terminando proceso...");
});