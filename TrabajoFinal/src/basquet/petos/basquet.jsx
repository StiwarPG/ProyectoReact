import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
export const productos = [
  {
    id: 200,
    nombre: 'Peto Lakers Gold',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTnwUuaCac591FcxnwZ12iY11vZtrI4UvWsw&s',
    precio: '$55.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Amarillo', 'Púrpura', 'Blanco'],
    descripcion: 'Inspirado en los Los Angeles Lakers, con tecnología de secado rápido y ajuste ergonómico.',
  },
  {
    id: 201,
    nombre: 'Peto Celtics Pride',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtujIQdkHWPrwRb3t0M6XI4psqKHTGuxyjkw&s',
    precio: '$53.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Verde', 'Blanco', 'Negro'],
    descripcion: 'Peto ligero y duradero diseñado para la intensidad de los Boston Celtics.',
  },
  {
    id: 202,
    nombre: 'Peto Bulls Legacy',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGyH4yWffUTccyKZMWAb72ve2fwC-7J-ZrAw&s',
    precio: '$58.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Estilo clásico de los Chicago Bulls con materiales transpirables y de alto rendimiento.',
  },
  {
    id: 203,
    nombre: 'Peto Warriors Dynasty',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEds6HPCb08sXBFv-b9_2YZgYjOpwxSRjBWQ&s',
    precio: '$60.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Azul', 'Amarillo', 'Blanco'],
    descripcion: 'Diseñado para la velocidad y resistencia de los Golden State Warriors.',
  },
  {
    id: 204,
    nombre: 'Peto Nets Elite',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5QBUZVE_tggX4uuR301zEGKo8Nnu9Ty4GBg&s',
    precio: '$52.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Negro', 'Blanco', 'Gris'],
    descripcion: 'Peto técnico con soporte muscular inspirado en los Brooklyn Nets.',
  },
  {
    id: 205,
    nombre: 'Peto Heat Fire',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH-W3rmC6HW34ltlBEar-llTD8F82Rg3OS1g&s',
    precio: '$57.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Estilo enérgico de los Miami Heat con ajuste de compresión y tecnología antideslizante.',
  },
  {
    id: 206,
    nombre: 'Peto Suns Rising',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj7HA9HX9Piff9BHPgbDugc_AGKspexrWozQ&s',
    precio: '$50.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Naranja', 'Púrpura', 'Blanco'],
    descripcion: 'Inspirado en los Phoenix Suns, con ventilación avanzada y diseño atlético.',
  },
  {
    id: 207,
    nombre: 'Peto Mavericks Court',
    imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTWWfO-dwWQo9TH51M9koq4ek9XpDgN3kQfk65O-xtGmTRk37k-Dys03et6YzSOi6wz_qMPP_KNSHl9qLHWjkWedHcHDYU-BB4fy3Ux1WFebgCPM6yxrK7m&usqp=CAE',
    precio: '$56.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Azul', 'Blanco', 'Negro'],
    descripcion: 'Peto técnico con máxima transpirabilidad para los Dallas Mavericks.',
  },
  {
    id: 208,
    nombre: 'Peto Knicks Hustle',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiiLWR9xSuEaJ2iGeF0r-bXXRgOXXZKnwONQ&s',
    precio: '$51.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Naranja', 'Azul', 'Blanco'],
    descripcion: 'Diseño clásico de los New York Knicks con materiales ligeros y resistentes.',
  },
  {
    id: 209,
    nombre: 'Peto Jazz Rhythm',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPY29E7Pm_f9NxGl7vzliAeKITu-6G-BcjAg&s',
    precio: '$55.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Púrpura', 'Verde', 'Blanco'],
    descripcion: 'Inspirado en la energía de los Utah Jazz, con tecnología anti-humedad.',
  },
  {
    id: 210,
    nombre: 'Peto Bucks Strength',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-VYWVfQvJEfX7A6Wr328zI33sLhgUqhEOg&s',
    precio: '$59.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Verde', 'Blanco', 'Negro'],
    descripcion: 'Diseñado para el alto rendimiento de los Milwaukee Bucks.',
  },
  {
    id: 211,
    nombre: 'Peto 76ers Legacy',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS2rk6cqk6tli59IAuMpV0CkrpVwSJ3uDLPg&s',
    precio: '$54.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Azul', 'Blanco'],
    descripcion: 'Estilo histórico de los Philadelphia 76ers con ajuste perfecto para la cancha.',
  },
  {
    id: 212,
    nombre: 'Peto Clippers Motion',
    imagen: 'https://cdn11.bigcommerce.com/s-18e00/images/stencil/1280x1280/products/12174/22479/Mitchell-45-fr__85601.1694728736.PNG?c=2',
    precio: '$53.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Blanco', 'Azul'],
    descripcion: 'Inspirado en la velocidad de los LA Clippers, con tecnología de flujo de aire.',
  },
  {
    id: 213,
    nombre: 'Peto Hawks Soar',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpSsthhMx6KsWHKIeXob8k4jtWUHT7W3fPZA&s',
    precio: '$50.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Diseñado para los Atlanta Hawks, con material ligero y resistente.',
  },
  {
    id: 214,
    nombre: 'Peto Nuggets Peak',
    imagen: 'https://fuegoverde.com.co/wp-content/uploads/2023/06/peto-lakers-1.jpg',
    precio: '$56.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Azul', 'Oro', 'Blanco'],
    descripcion: 'Inspirado en los Denver Nuggets, con ajuste ergonómico y durabilidad avanzada.',
  },
  {
    id: 215,
    nombre: 'Peto Rockets Blast',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRISrLAFDMC21O2yR6pjDHSosX_GUy4fVimuw&s',
    precio: '$52.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Rojo', 'Negro', 'Blanco'],
    descripcion: 'Estilo dinámico de los Houston Rockets con soporte muscular y ventilación.',
  },
  {
    id: 216,
    nombre: 'Peto Pacers Fastbreak',
    imagen: 'https://fanatics.frgimages.com/indiana-pacers/mens-fanatics-buddy-hield-blue-indiana-pacers-fastbreak-jersey-city-edition_pi4900000_altimages_ff_4900304-108d84226bfb663c12b4alt2_full.jpg?_hv=2&w=900',
    precio: '$51.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Azul', 'Amarillo', 'Blanco'],
    descripcion: 'Inspirado en los Indiana Pacers, con materiales transpirables y diseño moderno.',
  },
  {
    id: 217,
    nombre: 'Peto Trail Blazers Edge',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8ytMb8mQ7VeAqWbGtOBvEDbdXnwD5dKXFQ&s',
    precio: '$53.00',
    tallas: ['M', 'L', 'XL'],
    colores: ['Negro', 'Rojo', 'Blanco'],
    descripcion: 'Diseño robusto para los Portland Trail Blazers, ideal para juegos intensos.',
  },
  {
    id: 218,
    nombre: 'Peto Hornets Buzz',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv14Ggv1cvMrHlihxnxqyWZ_foyU5yPCn2wg&s',
    precio: '$50.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Turquesa', 'Púrpura', 'Blanco','Azul'],
    descripcion: 'Estilo único de los Charlotte Hornets con materiales duraderos y ligeros.',
  },
  {
    id: 219,
    nombre: 'Peto Spurs Precision',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx1eE2Ve7f9qRYy2q_HL4OsD8Ogg-U8ouzaw&s',
    precio: '$55.00',
    tallas: ['S', 'M', 'L', 'XL'],
    colores: ['Negro', 'Blanco', 'Gris'],
    descripcion: 'Peto minimalista inspirado en los San Antonio Spurs, diseñado para máxima precisión.',
  },
  ];
  


export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    
    <div className="app-container">
       <header className="header">
      <div className="icon-basketball"></div>
      <h1>Petos</h1>
      <div className="icon-basketball"></div>
    </header>
      <div className="card-container">
        {productos.map((camisa) => (
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

