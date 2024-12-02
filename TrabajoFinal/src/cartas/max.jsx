import React from 'react';
import '../estilos/cartas/style.css';


export function CartaAmpliada({ shirt, closeShirtInfo }) {
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
      </div>
    </div>
  )
}
