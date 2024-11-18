import React, { useState } from 'react';
import { productos as productosPetos } from '../petos/basquet';
import { productos as productosZapatos } from '../zapatos/basquet.jsx';
import { productos as productospantaloneta } from '../pantaloneta/basquet.jsx';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';

const general = [...productosPetos, ...productospantaloneta, ...productosZapatos];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    <div className="app-container">
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

  
  import { createRoot } from 'react-dom/client'
  createRoot(document.getElementById('root')).render(
    <>
        <AppMultiple/>
    </>
  );
  