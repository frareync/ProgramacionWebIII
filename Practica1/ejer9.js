// 9.Crear una promesa que devuelva un mensaje de éxito después de 3 segundos.

const sumar = v => new Promise((resolve, reject) => {
  let s = 0;
  for (let i = 0; i < v.length; i++)
    s = s + v[i];
  setTimeout(() => { resolve(`la suma es: ${s}`); }, 3000);
});

const n = [2, 4, 6, 8, 10];
sumar(n).then(m => console.log(m));
