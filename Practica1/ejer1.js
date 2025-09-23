// 1.Crear una función que cuente cuántas veces aparece cada vocal en un texto y devuelva el resultado en un objeto.
// let obj = miFuncion(“euforia”)
// console.log(obj) { a: 1, e: 1, i: 1, o: 1, u: 1 }
const miFuncion = p => {
  p = p.toLowerCase();
  const vocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  };
  for (let i = 0; i < p.length; i++) {
    switch (p[i]) {
      case "a":
        vocales.a++;
        break;
      case "e":
        vocales.e++;
        break;
      case "i":
        vocales.i++;
        break;
      case "o":
        vocales.o++;
        break;
      case "u":
        vocales.u++;
        break;
    }
  }
  return vocales;
};

console.log(miFuncion("euforia"));
console.log(miFuncion("oruro"));

