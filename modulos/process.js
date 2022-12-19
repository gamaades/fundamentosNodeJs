// const p = require("process"); // Esto no es obligatorio, ya que process es algo global.

process.on("beforeExit", () => {
    console.log("El proceso va a terminar!");
});

process.on("exit", () => {
    console.log("Gus, el proceso acabó!");
});



process.on("uncaughtException", (err, origen) => {
    console.error("Vaya, se nos ha olvidado capturar un error");
    console.error(err);
});

//funcionQueNoExiste();