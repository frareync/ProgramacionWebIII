// 4. Crear una función que reciba un arreglo de números y devuelva el número mayor y el menor, en un objeto.
// let obj = miFuncion([3,1,5,4,2])
// console.log(obj) 
// { mayor: 5, menor: 1 }


const claMaxMin = v => {
  const objMaxMin = {
    mayor: Number.MIN_SAFE_INTEGER,
    menor: Number.MAX_SAFE_INTEGER
  }
  for (let i = 0; i < v.length; i++) {
    if (v[i] > objMaxMin.mayor)
      objMaxMin.mayor = v[i];
    if (v[i] < objMaxMin.menor)
      objMaxMin.menor = v[i];
  }
  return objMaxMin;
};

console.log(claMaxMin([3, 1, 5, 4, -20]));