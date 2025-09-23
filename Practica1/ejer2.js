// 2. Crear una función que invierta el orden de las palabras en una frase.
// let cad = miFuncion(“abcd”)
//console.log(obj) dcba

const miFuncion = p => {
  let pI = "";
  for (let i = p.length - 1; i >= 0; i--) {
    pI = pI + p[i];
  }
  return pI;
};

console.log(miFuncion("abcd"));
console.log(miFuncion("Navidad"));