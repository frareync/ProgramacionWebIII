// 7. Almacenar el resto de los elementos de un arreglo sin tomar en cuenta los dos primeros elementos de un arreglo, mediante desestructuración.
const desFinal = v => {
  const [, , ...x] = v;
  return [x]
};

console.log(desFinal([1, 2, 3, 4, 5]));
console.log(desFinal([-1, -57, 87, 5, 9, 6, -45]));
