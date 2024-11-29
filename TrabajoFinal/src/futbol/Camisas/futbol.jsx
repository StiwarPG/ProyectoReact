import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
export const productos = [
    {
      id: 1300,
      nombre: 'Camisa Brasil ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYl970FxNToce-477Ei0xoXESxX1Tshd-XZQ&s',
      precio: '$60.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Amarillo', 'Verde'],
      descripcion: 'Camisa oficial de la selección de Brasil, edición 2023.',
    },
    {
      id: 1301,
      nombre: 'Camisa Argentina',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/85350dca156641ed95d7ae4b0133e9d4_9366/Camiseta_Local_Argentina_22_Blanco_HF1488_01_laydown.jpg',
      precio: '$65.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Celeste', 'Blanco'],
      descripcion: 'Camiseta visitante de la selección Argentina, tecnología AEROREADY.',
    },
    {
      id: 1302,
      nombre: 'Camisa Francia ',
      imagen: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/53d26e7b-e1fd-44f6-aa64-b46cfa40a93c/NK+24%2F25+W+Rep+Jersey+Player.png',
      precio: '$70.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Rojo', 'Blanco'],
      descripcion: 'Camisa oficial de la selección francesa, diseño clásico.',
    },
    {
      id: 1303,
      nombre: 'Camisa Alemania',
      imagen: 'https://prochampions.vtexassets.com/arquivos/ids/872342/Adidas-Dfb-H-Jsy-Camiseta-De-Equipo_IP8139_03.jpg?v=638491303871970000',
      precio: '$68.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Rojo', 'Dorado'],
      descripcion: 'Camiseta alternativa de Alemania, diseño moderno.',
    },
    {
      id: 1304,
      nombre: 'Camisa Inglaterra ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4SO-cm5GSFFZf5mhIJoGMMu6hjTEh66ipSQ&s',
      precio: '$65.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Rojo', 'Azul'],
      descripcion: 'Camiseta oficial de Inglaterra, edición 2023.',
    },
    {
      id: 1305,
      nombre: 'Camisa España',
      imagen: 'https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/eb28d02c163841b0b5de4d2fbbd7c296_9366/camiseta-local-espana-24-ninos.jpg',
      precio: '$67.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Amarillo'],
      descripcion: 'Camisa oficial de la selección española, diseño elegante.',
    },
    {
      id: 1306,
      nombre: 'Camisa Italia',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9a83acfaea84a31a559af2a00a6c867_9366/Camiseta_Local_Italia_23_Azul_HS9881_01_laydown.jpg',
      precio: '$66.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Verde'],
      descripcion: 'Camiseta alternativa de Italia, diseño clásico renovado.',
    },
    {
      id: 1307,
      nombre: 'Camisa México',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIf08bWm6LQZB7L3y7wte5Vt2tEjF9Lh50yQ&s',
      precio: '$62.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Verde', 'Rojo', 'Blanco'],
      descripcion: 'Camiseta oficial de México, diseño tradicional.',
    },
    {
      id: 1308,
      nombre: 'Camisa Japón',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5wWytzu17OiyTNBbdVhTLWr2laCGUwhRBGQ&s',
      precio: '$69.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Azul'],
      descripcion: 'Camiseta alternativa de Japón, tecnología avanzada.',
    },
    {
      id: 1309,
      nombre: 'Camisa Portugal',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8N5AqI-ZVFvK6sGNfYeTiQ8AJSJ6UdfGvA&s',
      precio: '$65.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Verde'],
      descripcion: 'Camiseta oficial de la selección de Portugal.',
    },
    {
      id: 1310,
      nombre: 'Camisa Bélgica',
      imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/87dee0babbf840ba8de2ae99012e29e7_9366/Camiseta_Uniforme_de_Local_Belgica_22_Rojo_HD9412_01_laydown.jpg',
      precio: '$68.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Negro', 'Rojo'],
      descripcion: 'Camiseta alternativa de Bélgica, diseño dinámico.',
    },
    {
      id: 1311,
      nombre: 'Camisa Uruguay ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtwPn--Lcuz-LqiZSr9sY_8Ce0tiXr4u2hww&s',
      precio: '$63.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Celeste', 'Negro'],
      descripcion: 'Camiseta oficial de Uruguay, edición 2023.',
    },
    {
      id: 1312,
      nombre: 'Camisa Colombia',
      imagen: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/f5beb132085840d28075ae77001384a1_9366/Camiseta_Local_Seleccion_Colombia_Amarillo_HD8847_01_laydown.jpg',
      precio: '$64.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Amarillo'],
      descripcion: 'Camiseta alternativa de Colombia, tecnología Dri-FIT.',
    },
    {
      id: 1313,
      nombre: 'Camisa Chile ',
      imagen: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/12d3c026cd0e4837ae4aaed6014883c4_9366/Camiseta_Local_Chile_22-23_Rojo_IC5176_01_laydown.jpg',
      precio: '$62.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Azul', 'Blanco'],
      descripcion: 'Camiseta oficial de Chile, diseño impactante.',
    },
    {
      id: 1314,
      nombre: 'Camisa Holanda',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq7k60Wm-fdLg7-bvUYdNYUuwLAo3S2_ojPQ&s',
      precio: '$69.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Naranja'],
      descripcion: 'Camiseta alternativa de Holanda, diseño innovador.',
    },
    {
      id: 1315,
      nombre: 'Camisa Australia',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN0XA0BZi1I5j_Rse_kaGkkPI8ZijIVZvCow&s',
      precio: '$60.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Amarillo', 'Verde'],
      descripcion: 'Camiseta oficial de Australia, edición 2023.',
    },
    {
      id: 1316,
      nombre: 'Camisa Nigeria',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKUi8Tw8PGDmhaoeZFrH6IJG1UJc6_TJs7dg&s',
      precio: '$68.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Verde'],
      descripcion: 'Camiseta alternativa de Nigeria, diseño único.',
    },
    {
      id: 1317,
      nombre: 'Camisa Corea del Sur ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEvD58ft4dXA9MISKRV3Ctco29_OSmNiqFXw&s',
      precio: '$65.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Negro'],
      descripcion: 'Camiseta oficial de Corea del Sur, tecnología avanzada.',
    },
    {
      id: 1318,
      nombre: 'Camisa Estados Unidos ',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7eAxiPqs1Mya_I5T1CN4pvvhBzbfglbN2sA&s',
      precio: '$64.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Azul', 'Rojo'],
      descripcion: 'Camiseta oficial de Estados Unidos, edición 2023.',
    },
    {
      id: 1319,
      nombre: 'Camisa Senegal',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rVFEahMOjxI2vgs-LDKUc7ObFYIptPcNhw&s ',
      precio: '$66.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Blanco', 'Verde', 'Amarillo'],
      descripcion: 'Camiseta alternativa de Senegal, diseño colorido.',
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
      <h1>Camisas</h1>
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

