import express from "express";
import {
	actualizarProducto,
	actualizarStock,
	eliminarProducto,
	insertarProducto,
	muestraProductos,
	obtenerProductoConCategoriaPorId,
	obtenerProductosConCategorias,
} from "../controladores/productoControlador.js";

const rutas = express.Router();

rutas.get("/productos", muestraProductos);
//6
rutas.post("/productos/adi", insertarProducto);
//9
rutas.put("/productos/:id", actualizarProducto);
rutas.delete("/productos/:id", eliminarProducto);
//7
rutas.get("/productos/cat", obtenerProductosConCategorias);
// 8
rutas.get("/productos/:id", obtenerProductoConCategoriaPorId);
// 10
rutas.patch("/productos/:id/stock", actualizarStock);
export default rutas;
