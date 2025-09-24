// 14. Proporcione un ejemplo para convertir una promesa en un callback
const promesaObtenerDatos = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    const r = true;
    r ? resolve("Datos obtenidos") : reject("Error al obtener los datos");
  }, 1000);
});


const callbackObtenerDatos = callback => {
  promesaObtenerDatos().then(r => callback(null, r))
    .catch(e => callback(e));
};


callbackObtenerDatos((e, r) => {
  if (e) {
    console.log(`error: ${e}`);
  } else {
    console.log(`datos: ${r}`);
  }
});
