const { info } = require("console");
const os = require("os");

// info(os.arch()); // muestra la arquitectura del computador en el que estamos corriendo el comando.
// info(os.platform()); // Muestra el sistema operativo en el que estamos trabajando.
// info(os.cpus()); // Muestra la info de las cpus que tenemos dentro de nuestro sistema.
// info(os.cpus().length); // Muestra la cantidad de nucleos que tiene nuestro procesador.
// info(os.constants); // Muestra todos los errores y señales del sistema

// const SIZE = 1024;
// function kb(bytes) { return bytes / SIZE; }
// function mb(bytes) { return kb(bytes) / SIZE; }
// function gb(bytes) { return mb(bytes) / SIZE; }
// info(os.freemem()); // Muestra en Bytes la memoria libre que tenemos en el computador.
// info(kb(os.freemem())); // Muestra en Bytes la memoria libre que tenemos en el computador.
// info(mb(os.freemem())); // Muestra en megaBytes la memoria libre que tenemos en el computador.
// info(gb(os.totalmem())); // Muestra en gigaBytes la memoria que tenemos en el computador.

// info(os.homedir()); // muestra el directorio raiz del usuario.
// info(os.tmpdir()); // muestra el directorio temporal.

// info(os.hostname()); // Muestra el hostname del computador de donde estamos.
info(os.networkInterfaces()); // Muestra las interfaces de redes que hay activas en la maquina.