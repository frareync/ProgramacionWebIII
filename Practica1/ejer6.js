// 6. Tomar los dos primeros elementos de un arreglo y almacenarlos en dos variables mediante desestructuración.
const des = v => {
  const [x, y] = v;
  return [x, y];
}

console.log(des([1, 2, 3, 4, 5]));
console.log(des([-1, -57, 87, 5, 9, 6, -45]));