import express from "express";
import {
	actualizarCategorias,
	eliminarCategorias,
	insertarCategorias,
	muestraCategorias,
	obtenerCategoriaConProductos
} from "../controladores/categoriaControlador.js";

const rutas = express.Router();

rutas.get("/categorias", muestraCategorias);
rutas.post("/categorias/adi", insertarCategorias);
//3
rutas.get('/categorias/:id', obtenerCategoriaConProductos);
//4
rutas.put("/categorias/:id", actualizarCategorias);
rutas.delete("/categorias/:id", eliminarCategorias);

export default rutas;
