import React, { useState, useEffect } from "react";
import api from "../api";

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    imagen: "",
    precio: "",
    tallas: "",
    descripcion: "",
    categoria: "",
    section: "",
  });
  const [editingId, setEditingId] = useState(null);

  // Leer datos de la API
  useEffect(() => {
    api.get("/")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  // Manejar cambios en el formulario
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Crear o actualizar un producto
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingId) {
      // Si estamos editando, hacemos la solicitud PUT
      api.put(`/${editingId}`, formData)
        .then((response) => {
          // Actualizar el producto en la lista de productos
          setData(
            data.map((item) =>
              item._id === editingId ? { ...item, ...response.data } : item
            )
          );
          // Limpiar el formulario y restablecer el estado de edición
          setEditingId(null);
          setFormData({
            nombre: "",
            imagen: "",
            precio: "",
            tallas: "",
            descripcion: "",
            categoria: "",
            section: "",
          });
        })
        .catch((error) => console.error("Error al actualizar:", error));
    } else {
      // Si no estamos editando, hacemos la solicitud POST
      api.post("/", formData)
        .then((response) => {
          setData([...data, response.data]);
          setFormData({
            nombre: "",
            imagen: "",
            precio: "",
            tallas: "",
            descripcion: "",
            categoria: "",
            section: "",
          });
        })
        .catch((error) => console.error("Error al crear:", error));
    }
  };
  // Eliminar un producto
  const handleDelete = (_id) => {  // Usamos _id en lugar de id
    console.log("Eliminando _id:", _id);  // Verifica que el _id sea correcto
    if (window.confirm("¿Estás seguro de que deseas eliminar este producto?")) {
      // Realizamos la solicitud DELETE usando _id en lugar de id
      api.delete(`/${_id}`)
        .then((response) => {
          if (response.status === 200) {
            console.log(`Producto con _id ${_id} eliminado correctamente`);
            setData((prevData) => prevData.filter((item) => item._id !== _id)); // Filtra usando _id
          }
        })
        .catch((error) => {
          console.error("Error al eliminar:", error.response || error);
        });
    }
  };
  

  // Configurar modo edición
  const handleEdit = (item) => {
    setEditingId(item._id); // Guardar el _id del producto en el estado
    setFormData({
      nombre: item.nombre,
      imagen: item.imagen,
      precio: item.precio,
      tallas: item.tallas.join(", "), // Asegúrate de que tallas esté en formato de texto
      descripcion: item.descripcion,
      categoria: item.categoria,
      section: item.section,
    });
  };

  return (
    <div>
      <h1>CRUD de Productos</h1>
      {/* Formulario */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Nombre"
          required
        />
        <input
          type="text"
          name="imagen"
          value={formData.imagen}
          onChange={handleChange}
          placeholder="URL de la Imagen"
          required
        />
        <input
          type="number"
          name="precio"
          value={formData.precio}
          onChange={handleChange}
          placeholder="Precio"
          required
        />
        <input
          type="text"
          name="tallas"
          value={formData.tallas}
          onChange={handleChange}
          placeholder="Tallas (ejemplo: S,M,L)"
          required
        />
        <textarea
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          placeholder="Descripción"
          required
        ></textarea>
        <input
          type="text"
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          placeholder="Categoría"
          required
        />
        <input
          type="text"
          name="section"
          value={formData.section}
          onChange={handleChange}
          placeholder="Sección"
          required
        />
        <button type="submit">{editingId ? "Actualizar" : "Crear"}</button>
      </form>

      {/* Tabla de productos */}
      <table border="1" style={{ width: "100%", marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Imagen</th>
            <th>Precio</th>
            <th>Tallas</th>
            <th>Descripción</th>
            <th>Categoría</th>
            <th>Sección</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nombre}</td>
              <td>
                <img
                  src={item.imagen}
                  alt={item.nombre}
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>${item.precio}</td>
              <td>{item.tallas}</td>
              <td>{item.descripcion}</td>
              <td>{item.categoria}</td>
              <td>{item.section}</td>
              <td>
                <button onClick={() => handleEdit(item)}>Editar</button>
                <button onClick={() => handleDelete(item._id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
