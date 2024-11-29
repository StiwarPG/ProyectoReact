import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
export const productos = [

    {
      id: 1200,
      nombre: 'Pantaloneta Brasil',
      imagen: 'https://static.wixstatic.com/media/f20469_0cf41cb39e054c2ab6cf9691bb17306f~mv2.jpg/v1/fill/w_480,h_456,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/f20469_0cf41cb39e054c2ab6cf9691bb17306f~mv2.jpg',
      precio: '$25.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Amarillo', 'Verde'],
      descripcion: 'Pantaloneta oficial de Brasil, perfecta para entrenamiento y partidos.',
    },
    {
      id: 1201,
      nombre: 'Pantaloneta Argentina',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh_1UMBpkZbrg7sFnMSyud4KoA0AzxNoL3wA&s',
      precio: '$28.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Celeste', 'Blanco'],
      descripcion: 'Pantaloneta de Argentina, cómoda y ligera para jugar.',
    },
    {
      id: 1202,
      nombre: 'Pantaloneta Francia',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqu6R1AR5Bdw55EVKWT2zmrKYOijUtCcEITA&s',
      precio: '$30.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Rojo'],
      descripcion: 'Pantaloneta oficial de la selección francesa, tecnología de transpiración.',
    },
    {
      id: 1203,
      nombre: 'Pantaloneta Alemania',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/2eb263df6fa84d58bc03ae96009aae6d_9366/Shorts_Uniforme_de_Local_Alemania_22_Negro_HF1465_01_laydown.jpg',
      precio: '$27.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Blanco'],
      descripcion: 'Pantaloneta de Alemania, diseño clásico y resistente.',
    },
    {
      id: 1204,
      nombre: 'Pantaloneta Inglaterra',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6jPWkkT7owK7US6jW-YsDkDNvdKfyzpBaw&s',
      precio: '$29.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Rojo'],
      descripcion: 'Pantaloneta oficial de Inglaterra, ligera y ergonómica.',
    },
    {
      id: 1205,
      nombre: 'Pantaloneta España',
      imagen: 'https://www.futbolemotion.com/imagesarticulos/220189/grandes/pantalon-corto-adidas-espana-primera-equipacion-eurocopa-2024-victory-blue-4.webp',
      precio: '$28.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Amarillo'],
      descripcion: 'Pantaloneta de España, ideal para entrenamiento o juego.',
    },
    {
      id: 1206,
      nombre: 'Pantaloneta Italia',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ02ThnjaremLYq_QdTxV0NeP5-e49sqpgQRQ&s',
      precio: '$26.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Blanco'],
      descripcion: 'Pantaloneta oficial de Italia, diseño clásico y moderno.',
    },
    {
      id: 1207,
      nombre: 'Pantaloneta México',
      imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4dcc833fb5ec45fd9f19aee7000c0fb9_9366/Shorts_Local_Authentic_Seleccion_Nacional_de_Mexico_Verde_HU0315_01_laydown.jpg',
      precio: '$25.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Verde', 'Rojo', 'Blanco'],
      descripcion: 'Pantaloneta de México, perfecta para todas las condiciones de juego.',
    },
    {
      id: 1208,
      nombre: 'Pantaloneta Japón',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVkslTCH-kCD9vNLMIknH_ipHBCoEunt3MA&s',
      precio: '$27.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Azul'],
      descripcion: 'Pantaloneta oficial de Japón, tecnología avanzada para mayor comodidad.',
    },
    {
      id: 1209,
      nombre: 'Pantaloneta Portugal',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZQjwcdoEJvG9XbE4OJ_KvU7W363sqLzhdlQ&s',
      precio: '$26.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Verde'],
      descripcion: 'Pantaloneta de Portugal, ideal para entrenamiento o competencia.',
    },
    {
      id: 1210,
      nombre: 'Pantaloneta Bélgica',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGNw_aLV4rgvbfXSV_Vhmh4ohJkDXYbIM7A&s',
      precio: '$28.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Rojo', 'Amarillo'],
      descripcion: 'Pantaloneta oficial de Bélgica, diseño moderno y cómodo.',
    },
    {
      id: 1211,
      nombre: 'Pantaloneta Uruguay',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSq5SLwR_0CyNRbTvXLn1CFR2ZM9JnlXToaA&s',
      precio: '$25.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Celeste', 'Negro'],
      descripcion: 'Pantaloneta de Uruguay, ligera y transpirable.',
    },
    {
      id: 1212,
      nombre: 'Pantaloneta Colombia',
      imagen: 'https://imagedelivery.net/4fYuQyy-r8_rpBpcY7lH_A/falabellaCO/72899074_6/w=800,h=800,fit=pad',
      precio: '$26.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Amarillo'],
      descripcion: 'Pantaloneta de Colombia, diseño ajustable para mayor comodidad.',
    },
    {
      id: 1213,
      nombre: 'Pantaloneta Chile',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1360b8455b5a4ce791a0aec9017b4752_9366/Short_Local_Seleccion_Chilena_22-23_Azul_IC5181_01_laydown.jpg',
      precio: '$25.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Blanco'],
      descripcion: 'Pantaloneta oficial de Chile, ligera y resistente.',
    },
    {
      id: 1214,
      nombre: 'Pantaloneta Holanda',
      imagen: 'https://i.pinimg.com/474x/30/09/f4/3009f490bdec4be0b8ff9cec1d628237.jpg',
      precio: '$27.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Naranja', 'Negro'],
      descripcion: 'Pantaloneta de Holanda, diseño único y ergonómico.',
    },
    {
      id: 1215,
      nombre: 'Pantaloneta Australia',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYjEqzdczKs958V-jc1xx3esjtSVU6LUAFvQ&s',
      precio: '$26.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Amarillo', 'Verde'],
      descripcion: 'Pantaloneta oficial de Australia, diseño cómodo y ligero.',
    },
    {
      id: 1216,
      nombre: 'Pantaloneta Nigeria',
      imagen: 'https://nubishops.com.ar/tools/thumb.php?im=https://d3ugyf2ht6aenh.cloudfront.net/stores/001/291/743/products/nigeria-11-065a95a1354898ce2a16581770676925-1024-1024.jpg',
      precio: '$28.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Verde', 'Blanco'],
      descripcion: 'Pantaloneta de Nigeria, tecnología avanzada para rendimiento óptimo.',
    },
    {
      id: 1217,
      nombre: 'Pantaloneta Corea del Sur',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeSIlEBNIYNMCabPjmrXs9MOTPoVmK1ndXfQ&s',
      precio: '$27.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Negro'],
      descripcion: 'Pantaloneta oficial de Corea del Sur, diseño dinámico y funcional.',
    },
    {
      id: 1218,
      nombre: 'Pantaloneta Estados Unidos',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6pqfv7QCGYigIdNJRBC9hcgHiAEwmHLDspw&s ',
      precio: '$26.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Azul', 'Rojo'],
      descripcion: 'Pantaloneta de Estados Unidos, ideal para sesiones de entrenamiento.',
    },
    {
      id: 1219,
      nombre: 'Pantaloneta Senegal',
      imagen: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRznbVZekWlAsM9_gZV7RrF05__zoHCofoUzMQ2GDCnUgbCqPvd8T60gT0kWCl4TWnOieXLreEMvwcnXKOUGMRsOofX7e7Mo4bLLr9Xamqs&usqp=CAE',
      precio: '$27.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Verde', 'Amarillo', 'Rojo'],
      descripcion: 'Pantaloneta de Senegal, diseño colorido y cómodo.',
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
      <h1>Pantalonetas</h1>
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


