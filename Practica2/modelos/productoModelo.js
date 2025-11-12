import {db} from '../config/db.js';

export const obtProductos = async()=> {
  const [resultado] = await db.query('SELECT * FROM productos');
  return resultado;
};

export const obtProductoPorId = async (id) => {
  const [resultado] = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
  return resultado;
}

export const insertaProducto = async (producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  const [resultado] = await db.query(
  'INSERT INTO productos (nombre, precio, stock, categoria_id) VALUES (?, ?, ?, ?)',
  [nombre, precio, stock, categoria_id]
  );
  // return { id: result.insertId, nombre, precio, stock, categoria_id };
  return { id: resultado.insertId, ...producto };
};

export const actualizaProducto = async (id, producto) => {
  const { nombre, precio, stock, categoria_id } = producto;
  await db.query(
  'UPDATE productos SET nombre = ?, precio = ?, stock = ?, categoria_id = ?, fecha_act = CURRENT_TIMESTAMP WHERE id = ?',
  [nombre, precio, stock, categoria_id, id]
  );
  // return { id, nombre, precio, stock, categoria_id };
  return { id, ...producto };
};

export const eliminaProducto = async (id) => {
  await db.query('DELETE FROM productos WHERE id = ?', [id]);
  return id;
};

// 7
export const obtProductosConCategorias = async () => {
  const [resultado] = await db.query(
    `SELECT p.id, p.nombre, p.precio, p.stock, p.categoria_id, c.nombre AS categoria_nombre
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id`
  );
  return resultado;
};

// 8
export const obtProductoConCategoriaPorId = async (id) => {
  const [resultado] = await db.query(
    `SELECT p.id, p.nombre, p.precio, p.stock, p.categoria_id, c.nombre AS categoria_nombre
     FROM productos p
     JOIN categorias c ON p.categoria_id = c.id
     WHERE p.id = ?`,
    [id]
  );
  return resultado[0];
};

// 10
export const actualizaStock= async (id, cantidad) => {
  const [resultado] = await db.query(
    'UPDATE productos SET stock = stock + ?, fecha_act = CURRENT_TIMESTAMP WHERE id = ?',
    [cantidad, id]
  );
  return resultado;
};
