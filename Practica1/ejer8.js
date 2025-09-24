// 8. Realizar un código para ejecutar una función callback después 2 segundos
const final = () => {
  console.log("Chao nos vemos mañana 👋👋");
};

const inicio = (callback) => {
  console.log("Hola como estas??");
  setTimeout(callback, 2000);
};

inicio(final);