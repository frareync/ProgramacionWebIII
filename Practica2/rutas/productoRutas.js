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
rutas.post("/productos/adi", insertarProducto);
rutas.put("/productos/:id", actualizarProducto);
rutas.delete("/productos/:id", eliminarProducto);
rutas.get("/productos/cat", obtenerProductosConCategorias);
// 8
rutas.get("/productos/:id", obtenerProductoConCategoriaPorId);
// 10
rutas.patch("/productos/:id/stock", actualizarStock);
export default rutas;
