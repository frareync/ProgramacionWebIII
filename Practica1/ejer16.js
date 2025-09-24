// 16. Proporcione un ejemplo para migrar una función con promesas a async/await.

function obtenerJurado() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const r = Math.random() < 0.5;
      r ? resolve("Eres jurado") : reject("No eres jurado");
    }, 1000);
  });
};

obtenerJurado().
  then(r => console.log(r)).
  catch(e => console.log(e));

// migrando a async/await

const obtenerJuradoAsync = async () => {
  try {
    const r = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const r = Math.random() < 0.5;
        r ? resolve("Eres jurado") : reject("No eres jurado");
      }, 1000);
    });
    console.log(r);
  }
  catch (e) {
    console.log(`Error: ${e}`);
  }
};

obtenerJuradoAsync();