import React, { useState, useEffect } from "react";
import api from "../api";
import "./CrudApp.css";

const CrudApp = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    imagen: "",
    precio: "",
    tallas: "",
    descripcion: "",
    categoria: "",
    section: "",
  });
  const [editingItem, setEditingItem] = useState(null);

  const [filters, setFilters] = useState({
    nombre: "",
    categoria: "",
    section: "",
  });

  useEffect(() => {
    api.get("/")
      .then((response) => {
        setData(response.data);
        setFilteredData(response.data);  
      })
      .catch((error) => console.error("Error al obtener datos:", error));
  }, []);

  useEffect(() => {
    filterProducts();
  }, [filters, data]);  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filterProducts = () => {
    let filtered = data;
    if (filters.nombre) {
      filtered = filtered.filter((item) =>
        item.nombre.toLowerCase().includes(filters.nombre.toLowerCase())
      );
    }
    if (filters.categoria) {
      filtered = filtered.filter((item) =>
        item.categoria.toLowerCase().includes(filters.categoria.toLowerCase())
      );
    }
    if (filters.section) {
      filtered = filtered.filter((item) =>
        item.section.toLowerCase().includes(filters.section.toLowerCase())
      );
    }
    setFilteredData(filtered);
  };

  const handleCreate = (e) => {
    e.preventDefault();
    api.post("/", formData)
      .then((response) => {
        setData((prev) => [...prev, response.data]); 
        resetForm();
      })
      .catch((error) => console.error("Error al crear producto:", error));
  };

  const handleEdit = (item) => {
    setEditingItem(item._id);
    setFormData({
      nombre: item.nombre,
      imagen: item.imagen,
      precio: item.precio,
      tallas: item.tallas,
      descripcion: item.descripcion,
      categoria: item.categoria,
      section: item.section,
    });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    if (!editingItem) return;
    api.put(`/${editingItem}`, formData)
      .then((response) => {
        setData((prev) =>
          prev.map((item) =>
            item._id === editingItem ? { ...item, ...response.data } : item
          )
        );
        resetForm();
      })
      .catch((error) => console.error("Error al actualizar producto:", error));
  };

  const handleDelete = (id) => {
    if (window.confirm("¿Estás seguro de eliminar este producto?")) {
      api.delete(`/${id}`)
        .then(() => setData((prev) => prev.filter((item) => item._id !== id)))
        .catch((error) => console.error("Error al eliminar:", error));
    }
  };

  const resetForm = () => {
    setFormData({
      nombre: "",
      imagen: "",
      precio: "",
      tallas: "",
      descripcion: "",
      categoria: "",
      section: "",
    });
    setEditingItem(null);
  };

  return (
    <div className="crud-app">
      <h1>Gestión de Productos</h1>

      {/* Filtros */}
      <div className="filters">
        <input
          type="text"
          name="nombre"
          value={filters.nombre}
          onChange={handleFilterChange}
          placeholder="Filtrar por nombre"
        />
        <input
          type="text"
          name="categoria"
          value={filters.categoria}
          onChange={handleFilterChange}
          placeholder="Filtrar por categoría"
        />
        <input
          type="text"
          name="section"
          value={filters.section}
          onChange={handleFilterChange}
          placeholder="Filtrar por sección"
        />
      </div>

      {/* Formulario de creación de producto */}
      <h2>Crear Producto</h2>
      <form onSubmit={handleCreate} className="formulario">
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
          placeholder="URL de la imagen"
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
        />
        <select
          name="categoria"
          value={formData.categoria}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar categoría</option>
          <option value="petos">Petos</option>
          <option value="pantalonetas">Pantalonetas</option>
          <option value="zapatos">Zapatos</option>
          <option value="camisas">Camisas</option>
        </select>
        <select
          name="section"
          value={formData.section}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar sección</option>
          <option value="basquet">Básquet</option>
          <option value="futbol">Fútbol</option>
        </select>
        <button type="submit">Crear</button>
      </form>

      {/* Mostrar la tabla de productos */}
      <div className="productos-table">
        <h2>Productos</h2>
        <table className="productos-tabla">
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
            {filteredData.map((item) => (
              <React.Fragment key={item._id}>
                <tr>
                  <td>{item._id}</td>
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

                {editingItem === item._id && (
                  <tr>
                    <td colSpan="9">
                      <h3>Editar Producto</h3>
                      <form onSubmit={handleUpdate} className="formulario">
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
                          placeholder="URL de la imagen"
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
                        />
                        <select
                          name="categoria"
                          value={formData.categoria}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccionar categoría</option>
                          <option value="petos">Petos</option>
                          <option value="pantalonetas">Pantalonetas</option>
                          <option value="zapatos">Zapatos</option>
                          <option value="camisas">Camisas</option>
                        </select>
                        <select
                          name="section"
                          value={formData.section}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Seleccionar sección</option>
                          <option value="basquet">Básquet</option>
                          <option value="futbol">Fútbol</option>
                        </select>
                        <button type="submit">Actualizar</button>
                        <button type="button" onClick={resetForm}>Cancelar</button>
                      </form>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudApp;
