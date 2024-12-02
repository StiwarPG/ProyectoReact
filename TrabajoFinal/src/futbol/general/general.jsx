import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
import { productos } from '../../productos/productos';

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const productosb = productos.filter((producto) => producto.section === 'futbol');

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    <div className="app-container">
      <header className="header">
        <div className="icon-basketball"></div>
        <h1>General</h1>
        <div className="icon-basketball"></div>
      </header>
      <div className="card-container">
        {productosb.map((camisa) => (
          <CardInfoComp
            key={camisa.id}
            {...camisa}
            onMoreInfo={() => handleMoreInfo(camisa)}
          />
        ))}
      </div>

      {selectedShirt && (
        <CartaAmpliada shirt={selectedShirt} closeShirtInfo={closeShirtInfo} />
      )}
    </div>
  );
}
