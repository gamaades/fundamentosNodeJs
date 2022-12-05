//File System, todo lo que se ejecute acá (File System) se hará de forma asincrona, de igual forma tiene una manera de realizara de manera sincrona, pero esta no se recomienda ya que se bloquea el proceso principal.
const fs = require("fs");

function leer(ruta, cb) {
    //lo primero que trae es error por si este llegara a falla y el segundo parametro es la informacion del archivo.
    fs.readFile(ruta, (err, data) => {
        // aca ya el archivo esta leido
        cb(data.toString());
    });
}

function escribir(ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, (err) => {
        if (err) {
            console.error("No se a podido escribir. ", err);   
        } else {
            console.log("Se ha escrito correctamente.");
        }
    });
}

function borrar(ruta, cb) {
    fs.unlink(ruta, cb);
}

//console.log(__dirname);

//escribir(__dirname + "/archivo1.txt", "Soy un archivo nuevo", console.log());
//leer(__dirname + "/archivo.txt", console.log);
//leer(__dirname + "/archivo1.txt", console.log);
borrar(__dirname + "/archivo1.txt", console.log)
