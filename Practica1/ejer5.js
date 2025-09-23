// 5. Crear una función que determine si una cadena es palíndromo (se lee igual al derecho y al revés).
// let band = miFuncion(“oruro”)
// console.log(band) // true
// let band = miFuncion(“hola”)
// console.log(band) // false

const verPalindromo = a => {
  let aI="";
  for(let i=a.length-1;i>=0;i--)
    aI+=a[i];
  if(a!==aI)
    return false;
  return true;
};

console.log(verPalindromo("oruro"));
console.log(verPalindromo("hola"));

