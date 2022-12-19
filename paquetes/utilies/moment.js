const moment = require("moment");

let ahora = moment();

// console.info(ahora.toString());
console.info(ahora.format("YYYY/MM/DD - HH:mm"));

// Para validad una fecha
if (moment('2020-04-11').isValid()) {
    console.log("Si, la fecha es valida");
} else {
    console.log("No, la fecha no es na valida");
}

// Para encontrar cuanto tiempo ha pasado hasta hoy
moment('2018-04-11').fromNow(); // Hace 2 años
console.info(moment('1992-02-27').fromNow());

// Para agregar o eliminar años, días o meses
moment('2020-04-11').add(1, 'years'); // 2021-04-11
console.log(moment('2020-04-11').add(1, 'years'));
moment('2020-04-11').subtract(1, 'years'); // 2019-04-11
console.log(moment('2020-04-11').subtract(1, 'years'));
