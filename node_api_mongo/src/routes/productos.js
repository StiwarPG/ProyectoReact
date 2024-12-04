const express = require('express');
const router = express.Router();

const Productos = require('../models/productos'); // Modelo de productos

// Obtener todos los productos
router.get('/', async (req, res) => {
    try {
        const productos = await Productos.find();
        res.json(productos);
    } catch (err) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
});

// Obtener un producto por ID
router.get('/:id', async (req, res) => {
    try {
        const producto = await Productos.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
        res.json(producto);
    } catch (err) {
        res.status(500).json({ error: 'Error al buscar el producto' });
    }
});

// Guardar un nuevo producto
router.post('/', async (req, res) => {
    try {
        const nuevoProducto = new Productos(req.body);
        await nuevoProducto.save();
        res.json({ status: 'Producto guardado', producto: nuevoProducto });
    } catch (err) {
        res.status(500).json({ error: 'Error al guardar el producto' });
    }
});

// Actualizar un producto por ID
router.put('/:id', async (req, res) => {
    try {
        const productoActualizado = await Productos.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ status: 'Producto actualizado', producto: productoActualizado });
    } catch (err) {
        res.status(500).json({ error: 'Error al actualizar el producto' });
    }
});

// Eliminar un producto por ID
router.delete('/:id', async (req, res) => {
    try {
        await Productos.findByIdAndDelete(req.params.id);
        res.json({ status: 'Producto eliminado' });
    } catch (err) {
        res.status(500).json({ error: 'Error al eliminar el producto' });
    }
});

module.exports = router;
