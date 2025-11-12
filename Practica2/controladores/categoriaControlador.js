import {
	actualizaCategoria,
	eliminaCategoria,
	insertaCategoria,
	obtCategoriaConProductos,
	obtCategorias,
} from "../modelos/categoriaModelo.js";
//2
export const muestraCategorias = async(req, res) => {
  try {
    const resultado = await obtCategorias();
    res.json(resultado);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
//1
export const insertarCategorias = async(req, res) => {
  try {
    const resultado = await insertaCategoria(req.body);
    res.status(201).json(resultado);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
//4
export const actualizarCategorias = async(req, res) => {
  try {
    const resultado = await actualizaCategoria(req.params.id ,req.body);
    res.json(resultado);
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};
//5
export const eliminarCategorias = async(req, res) => {
  try {
    await eliminaCategoria(req.params.id);
    res.json({message: 'Categoria eliminado correctamente'});
  } catch (error) {
    res.status(500).json({error: error.message});
  }
};

// 3
export const obtenerCategoriaConProductos = async (req, res) => {
  try {
    const { id } = req.params;
    const resultado = await obtCategoriaConProductos(id);
    if (!resultado) return res.status(404).json({ error: 'Categoría no encontrada' });
    res.json(resultado);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
