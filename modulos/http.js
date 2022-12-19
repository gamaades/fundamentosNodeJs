const http = require("http");
// importamos el modulo
// es recomenado no inicializar la funcion aquñi por los callbacks
http.createServer(router).listen(3000);

function router(req, res) { // se le da 2 parametros request y response
    console.log("Nueva petición!");
    console.log(req.url); // immprimimos la url de la petición
 
    //escribir respuesta al usuario
    switch(req.url) {
        case "/hola":
            res.write("<h1>Hola, que tal!?</h1>");
            res.end();
            break;

        default:
            res.write("<h1>Error 404: no se lo que quuieres! :(</h1>");
            res.end();
            break;

    }

    // res.writeHead(201, {"content-type": "text/plain"});
    // // Escribir respuesta al usuario
    // res.write("Hola, ya se usar HTTP de NodeJS")

    // res.end(); 
}

console.info("Escuchando HTTP en el puerto 3000");
