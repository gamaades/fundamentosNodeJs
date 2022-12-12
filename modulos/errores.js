function otraFuncion() {
   seRompe();
} 
 
 function seRompe() {
    return 3 + Z;
 }

 function seRompeAsincrona(cb) {
   setTimeout(() => {
      try {
         return 3 + Z;
      } catch (error) {
         console.error("Error en mi función asincrona!");
         cb(error);
      }
   }, 1000);
 }

 try {
   // seRompe();
   seRompeAsincrona( function (err) {
      console.log(err.message);
   });
 } catch (error) {
   console.error("Vaya, algo se a roto!!!");
   console.error(error.message);
   console.log("Pero no pasa nada, lo hemos capturado!");
 }

 console.log("Esto esta al final");