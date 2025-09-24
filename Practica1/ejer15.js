// 15. Proporcione un ejemplo para convertir un callback en una promesa

const callbackObtenerDatos = callback => {
  setTimeout(() => {
    const r = true;
    r ? callback(null, "Datos obtenidos") : callback("Error al obtener los datos");
  }, 1000);
};

const promesaObtenerDatos = () => {
  return new Promise((resolve, reject) => {
    callbackObtenerDatos((e, r) => {
      e ? reject(e) : resolve(r);
    });
  });
};

promesaObtenerDatos()
  .then(r => console.log(`exito: ${r}`))
  .catch(e => console.log(`error: ${e}`));
