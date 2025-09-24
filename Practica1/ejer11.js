// 11. Proporcione un ejemplo concreto de encadenamiento de promesas
// se multa a un auto estacionado cada hora q pasa se le suma 10 a la multa la cual en el inicio es de 100
const multa = (v, t) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(`la multa es: ${v}`);
    resolve(v);
  }, t);
});

multa(100, 1000).then(r => {
  return multa(r + 10, 1000);
})
  .then(r => {
    return multa(r + 10, 1000);
  })
  .then(r => {
    return multa(r + 10, 1000);
  })
  .then(r => {
    console.log(`la multa total es: ${r}`);
  });


