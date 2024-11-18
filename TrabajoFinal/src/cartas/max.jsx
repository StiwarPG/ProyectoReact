import React, { useState } from 'react';
import Swal from 'sweetalert2'; // Asegúrate de tener SweetAlert2 instalado
import '../estilos//cartas/style.css';


export function CartaAmpliada({ shirt, closeShirtInfo }) {
  const [estado, setEstado] = useState(false);

  const toggleCartStatus = () => {
    setEstado(!estado);

    // Mostrar SweetAlert2 en lugar de alert
    Swal.fire({
      icon: !estado ? "success" : "error",
      title: !estado ? "Producto añadido al carrito" : "Producto eliminado del carrito", // Mensaje dinámico según el estado
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="overlay">
      <div className="modal">
        <button className="close-btn" onClick={closeShirtInfo}>
          X
        </button>
        <div className="card-header">
          <h5 className="card-title">{shirt.nombre}</h5>
        </div>
        <img src={shirt.imagen} alt={shirt.nombre} className="shirt-image" />
        <p>
          <strong>Precio:</strong> {shirt.precio} <br />
          <strong>Descripción:</strong> {shirt.descripcion} <br />
          <strong>Tallas:</strong> {shirt.tallas.join(', ')} <br />
          <strong>Colores:</strong> {shirt.colores.join(', ')}
        </p>
        <button className="add-to-cart" onClick={toggleCartStatus}>
          {estado ? 'En carrito' : 'Añadir al carrito'}
        </button>
      </div>
    </div>
  );
}
