// 13. Proporcione un ejemplo concreto donde el anidamiento de promesas se puede
// reescribir mejor con async/await haciendo el código más limpio y mantenible
const insertarTarjeta = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("Tarjeta insertada");
      resolve();
    }, 1000);
  });

const pedirPIN = () =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log("PIN ingresado");
      resolve("1234");
    }, 1000);
  });

const seleccionarCuenta = pin =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (pin === "1234") {
        console.log("Cuenta seleccionada");
        resolve("Cuenta Corriente");
      } else {
        reject("PIN incorrecto");
      }
    }, 1000);
  });

const ingresarMonto = cuenta =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Monto ingresado para retirar de ${cuenta}`);
      resolve(200);
    }, 1000);
  });

const retirarDinero = monto =>
  new Promise(resolve => {
    setTimeout(() => {
      console.log(`Se retiraron ${monto} bolivianos.`);
      resolve();
    }, 1000);
  });

const realizarRetiro = async () => {
  try {
    await insertarTarjeta();
    const pin = await pedirPIN();
    const cuenta = await seleccionarCuenta(pin);
    const monto = await ingresarMonto(cuenta);
    await retirarDinero(monto);
    console.log("Retiro finalizado con éxito");
  } catch (error) {
    console.error("Error:", error);
  }
};

realizarRetiro();