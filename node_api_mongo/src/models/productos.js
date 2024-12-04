const mongoose = require('mongoose');
const { Schema } = mongoose;

const productosSchema = new Schema({
    nombre: String,
    imagen: String,
    precio: String,
    tallas: String,
    descripcion: String,
    categoria: String,
    section: String,
});

module.exports = mongoose.model('Productos', productosSchema);