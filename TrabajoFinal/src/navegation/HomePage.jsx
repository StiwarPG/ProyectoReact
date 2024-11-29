import React, { useState } from 'react';
import { productos as productosPetosB } from '../basquet/petos/basquet.jsx';
import { productos as productosZapatosB } from '../basquet/zapatos/basquet.jsx';
import { productos as productospantalonetaB } from '../basquet/pantaloneta/basquet.jsx';

import { productos as productosCamisasF } from '../futbol/Camisas/futbol.jsx';
import { productos as productosZapatosF } from '../futbol/zapatos/futbol.jsx';
import { productos as productospantalonetaF } from '../futbol/pantaloneta/futbol.jsx';

import { CardInfoComp } from '../cartas/card';
import { CartaAmpliada } from '../cartas/max';
import '../estilos/cartas/style.css';

const general = [...productosPetosB,...productosCamisasF, ...productospantalonetaB,...productospantalonetaF, ...productosZapatosB,...productosZapatosF];

export function HomePage() {
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
  