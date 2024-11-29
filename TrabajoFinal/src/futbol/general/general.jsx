import React, { useState } from 'react';
import { productos as productosCamisas } from '../Camisas/futbol.jsx';
import { productos as productosZapatos } from '../zapatos/futbol.jsx';
import { productos as productospantaloneta } from '../pantaloneta/futbol.jsx';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
const general = [...productosCamisas, ...productospantaloneta, ...productosZapatos];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

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
        {general.map((camisa) => (
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
