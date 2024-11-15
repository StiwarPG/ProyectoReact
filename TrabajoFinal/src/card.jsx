import React from 'react';
import './estilos/style.css';

export function CardInfoComp({ nombre, imagen, precio, onMoreInfo }) {
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{nombre}</h5>
      </div>
      <div className="card-body">
        <img src={imagen} alt={nombre} className="shirt-image" />
        <p className="card-text">
          <strong>Precio:</strong> {precio} <br />
        </p>
        <a href="#" className="card-link" onClick={onMoreInfo}>Más información...</a>
      </div>
    </div>
  );
}

