// 3. Crear una función que reciba un arreglo de números y devuelva en un objeto a los pares e impares:
// let obj = miFuncion([1,2,3,4,5])
// console.log(obj) 
// { pares: [2,4], impares: [1,3,5]}

const claParImpar = v => {
  const obPI = {
    p: [],
    i: []
  };
  let cp = 0, ci = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i] % 2 === 0) {
      obPI.p[cp] = v[i];
      cp++;
    }
    else {
      obPI.i[ci] = v[i];
      ci++;
    }
  }
  return obPI;
};

console.log(claParImpar([1, 2, 3, 4, 5]));
console.log(claParImpar([1, 2, 3, 4, 5, 2, 6, 7, 3, 4]));