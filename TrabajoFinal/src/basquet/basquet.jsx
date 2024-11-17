import React, { useState } from 'react';
import { CardInfoComp } from '../cartas/card';
import { CartaAmpliada } from '../cartas/max';
import '../estilos/style.css';

const camisas = [
  {
    id: 1,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  {
    id: 2 ,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  {
    id: 3,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  {
    id: 4 ,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  {
    id: 5,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  {
    id: 6 ,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.',
  },
  // Más productos como este...
];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    <div className="app-container">
      <div className="card-container">
        {camisas.map((camisa) => (
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
