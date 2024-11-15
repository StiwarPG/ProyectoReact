import React, { useState } from 'react';
import { CardInfoComp } from '../card.jsx';  // Ajusta la ruta según tu estructura de archivos

const camisas = [
  {
    id: 1,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },
  {
    id: 2,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },  {
    id: 3,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },  {
    id: 4,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },
  {
    id: 5,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },
  {
    id: 6,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },
  {
    id: 7,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },
  {
    id: 8,
    nombre: 'Camiseta Air Jordan',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDa7mq4253Awwu3OUpERSQ5GtvC5KAIhUZZw&s',
    precio: '$40.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Camiseta de edición limitada, diseñada para los fanáticos del baloncesto.'
  },];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  // Maneja el clic en "Más información"
  const handleMoreInfo = (shirt) => {
    setSelectedShirt(shirt);
  };

  // Cierra la carta ampliada
  const closeShirtInfo = () => {
    setSelectedShirt(null);
  };

  return (
    <div>
      <div className="card-container">
        {camisas.map(({ id, nombre, imagen, precio, tallas, colores, descripcion }) => (
          <CardInfoComp
            key={id}
            nombre={nombre}
            imagen={imagen}
            precio={precio}
            onMoreInfo={() => handleMoreInfo({ id, nombre, imagen, precio, tallas, colores, descripcion })}
          />
        ))}
      </div>

      {/* Componente de Carta Ampliada */}
      {selectedShirt && (        <CartaAmpliada 
          shirt={selectedShirt}
          closeShirtInfo={closeShirtInfo}
        />
      )}
    </div>
  );
}

function CartaAmpliada({ shirt, closeShirtInfo }) {
  const [estado, setEstado] = useState(false); // Estado local para gestionar si está en el carrito o no

  // Cambia el estado del carrito y muestra el alert
  const toggleCartStatus = () => {
    setEstado(!estado);

    if (!estado) {
      // Si el estado cambia de "Añadir al carrito" a "En carrito"
      alert('Producto añadido al carrito');
    }
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="card large-card">
          <button className="close-btn" onClick={closeShirtInfo}>X</button>
          <div className="card-header">
            <h5 className="card-title">{shirt.nombre}</h5>
          </div>
          <div className="card-body">
            <img src={shirt.imagen} alt={shirt.nombre} className="shirt-image" />
            <p className="card-text">
              <strong>Precio:</strong> {shirt.precio} <br/>
              <strong>Descripción:</strong> {shirt.descripcion} <br />
              <strong>Tallas disponibles:</strong> {shirt.tallas.join(', ')} <br />
              <strong>Colores disponibles:</strong> {shirt.colores.join(', ')} <br />
            </p>
            <button
              className="add-to-cart"
              onClick={toggleCartStatus}
            >
              {estado ? 'En carrito' : 'Añadir al carrito'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
