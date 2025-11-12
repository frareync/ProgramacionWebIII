import {
	actualizaProducto,
	actualizaStock,
	eliminaProducto,
	insertaProducto,
	obtProductoConCategoriaPorId,
	obtProductos,
	obtProductosConCategorias,
} from "../modelos/productoModelo.js";

export const muestraProductos = async (req, res) => {
	try {
		const resultado = await obtProductos();
		res.json(resultado);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const insertarProducto = async (req, res) => {
	try {
		const resultado = await insertaProducto(req.body);
		res.status(201).json(resultado);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
//9
export const actualizarProducto = async (req, res) => {
	try {
		const resultado = await actualizaProducto(req.params.id, req.body);
		res.json(resultado);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

export const eliminarProducto = async (req, res) => {
	try {
		await eliminaProducto(req.params.id);
		res.json({ message: "Producto eliminado correctamente" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// 7
export const obtenerProductosConCategorias = async (req, res) => {
	try {
		const productos = await obtProductosConCategorias();
		res.json(productos);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
// 8
export const obtenerProductoConCategoriaPorId = async (req, res) => {
	try {
		const { id } = req.params;
		const producto = await obtProductoConCategoriaPorId(id);
		if (!producto) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json(producto);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

// 10
export const actualizarStock = async (req, res) => {
	try {
		const { id } = req.params;
		const { cantidad } = req.body; // cantidad positiva o negativa
		const resultado = await actualizaStock(id, cantidad);
		if (resultado.affectedRows === 0) {
			return res.status(404).json({ error: "Producto no encontrado" });
		}
		res.json({ message: "Stock actualizado correctamente" });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
