import React from 'react';
import '../estilos/cartas/style.css';

export function CartaAmpliada({ shirt, closeShirtInfo }) {
  if (!shirt) {
    return <p>No se pudo cargar la información del producto.</p>;
  }

  console.log(shirt); 

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
          <strong>Precio:</strong> ${shirt.precio} <br />
          <strong>Descripción:</strong> {shirt.descripcion} <br />
          
          <strong>Tallas disponibles:</strong>
          <ul>
            {Array.isArray(shirt.tallas) && shirt.tallas.length > 0 ? (
              shirt.tallas.map((talla, index) => (
                <li key={index}>{talla}</li> 
              ))
            ) : (
              <li>No hay tallas disponibles</li>  
            )}
          </ul>
          
          <strong>Categoría:</strong> {shirt.categoria} <br />
          <strong>Sección:</strong> {shirt.section} <br />
        </p>
      </div>
    </div>
  );
}
