import { db } from '../config/db.js';

// 2
export const obtCategorias = async () => {
  const [resultado] = await db.query('SELECT * FROM categorias');
  return resultado;
};

export const obtCategoriaPorId = async (id) => {
  const [resultado] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  return resultado;
};

//1
export const insertaCategoria = async (categoria) => {
  const { nombre, descripcion } = categoria;
  const [resultado] = await db.query(
  'INSERT INTO categorias (nombre, descripcion) VALUES (?, ?)',
  [nombre, descripcion]
);
// return { id: resultado.insertId, nombre, descripcion };
return { id: resultado.insertId, ...categoria };
};
//4
export const actualizaCategoria = async (id, categoria) => {
  const { nombre, descripcion } = categoria;
  //const fechaActual = new Date();
  //const formatoMySQL = fechaActual.toISOString().slice(0, 19).replace('T', ' ');
  await db.query(
  'UPDATE categorias SET nombre = ?, descripcion = ?, fecha_act = CURRENT_TIMESTAMP WHERE id = ?',
  [nombre, descripcion, id]
  );
  // return { id, nombre, descripcion };
  return { id, ...categoria };
};
// 5
export const eliminaCategoria = async (id) => {
  await db.query('DELETE FROM categorias WHERE id = ?', [id]);
  return id;
};

// 3

export const obtCategoriaConProductos = async (id) => {
  const [resCat] = await db.query('SELECT * FROM categorias WHERE id = ?', [id]);
  if (resCat.length === 0) return null;

  const [resPro] = await db.query(
    'SELECT p.* FROM productos p WHERE p.categoria_id = ?',
    [id]
  );

  return { categoria: resCat[0], productos: resPro };
};
