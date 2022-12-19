/* Siempre que tengamos un callback el primer parametro deberia ser el error por que es una convension pensando en que todo puede fallar y debemos ser capaces de controlarlo */
/* throw error para funciones asincronas no va a funcionar */
function asincrona(callback) {
    setTimeout(() => {
        try {
            let a = 3 + z;
            callback(null, a)
        } catch (error) {
            callback(error, null)
        }
    }, 1000);
}


asincrona((err, dato) => {
    if (err) {
        console.error("Tenemos un error");
        console.error(err);
        return false;
        // throw err; // NO VA A FUNCIONAR EN FUNCIONES ASINCRONAS
    }

    console.log("Todo a ido bien, mi data es ", dato);
});