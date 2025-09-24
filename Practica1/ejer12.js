// 12. Proporcione un ejemplo concreto donde el anidamiento de callbacks se puede
//reescribir mejor con async/await haciendo el código más limpio y mantenible.
const insertarTarjeta = callback => {
  setTimeout(() => {
    console.log("Tarjeta insertada");
    callback(null);
  }, 1000);
};

const pedirPIN = callback => {
  setTimeout(() => {
    console.log("PIN ingresado");
    callback(null, "1234");
  }, 1000);
};

const seleccionarCuenta = (pin, callback) => {
  setTimeout(() => {
    if (pin === "1234") {
      console.log("Cuenta seleccionada");
      callback(null, "Cuenta Corriente");
    } else {
      callback("PIN incorrecto");
    }
  }, 1000);
};

const ingresarMonto = (cuenta, callback) => {
  setTimeout(() => {
    console.log(`Monto ingresado para retirar de ${cuenta}`);
    callback(null, 200);
  }, 1000);
};

const retirarDinero = (monto, callback) => {
  setTimeout(() => {
    console.log(`Se retiraron ${monto} bolivianos.`);
    callback(null);
  }, 1000);
};

insertarTarjeta(e => {
  if (e) {
    console.log(e);
  } else {
    pedirPIN((e, pin) => {
      if (e) {
        console.log(e);
      } else {
        seleccionarCuenta(pin, (e, cuenta) => {
          if (e) {
            console.log(e);
          } else {
            ingresarMonto(cuenta, (e, monto) => {
              if (e) {
                console.log(e);
              } else {
                retirarDinero(monto, (e) => {
                  if (e) {
                    console.log(e);
                  } else {
                    console.log("Retiro finalizado con éxito");
                  }
                });
              }
            });
          }
        });
      }
    });
  }
});
