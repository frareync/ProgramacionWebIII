import express from "express";
import {
	actualizarCategorias,
	eliminarCategorias,
	insertarCategorias,
	muestraCategorias,
	obtenerCategoriaConProductos
} from "../controladores/categoriaControlador.js";

const rutas = express.Router();
//2
rutas.get("/categorias", muestraCategorias);
//1
rutas.post("/categorias/adi", insertarCategorias);
//3
rutas.get('/categorias/:id', obtenerCategoriaConProductos);
//4
rutas.put("/categorias/:id", actualizarCategorias);
//5
rutas.delete("/categorias/:id", eliminarCategorias);

export default rutas;
