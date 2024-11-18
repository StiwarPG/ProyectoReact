import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';

export const productos = [

    {
      id: 300,
      nombre: 'Pantaloneta Nike Elite',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryk89AVVfXo7PAOJf_pJwYIh5e9XQi4wYFQ&s',
      precio: '$40.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Blanco', 'Azul'],
      descripcion: 'Pantaloneta diseñada para jugadores de baloncesto con tecnología Dri-FIT.',
    },
    {
      id: 301,
      nombre: 'Pantaloneta Adidas Hoops',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7lB2BuTN96r5BhNuSENHBLLEBnGSBhtJ5bQ&s',
      precio: '$38.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Negro', 'Gris'],
      descripcion: 'Tejido transpirable ideal para entrenamientos y partidos casuales.',
    },
    {
      id: 302,
      nombre: 'Pantaloneta Spalding Court',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ8jhViCH2715w2Ua-W78fwuH_hZMBLlXYIA&s',
      precio: '$35.00',
      tallas: ['M', 'L', 'XL'],
      colores: ['Blanco', 'Negro', 'Verde'],
      descripcion: 'Durabilidad y confort, perfecta para juegos intensos.',
    },
    {
      id: 303,
      nombre: 'Pantaloneta Jordan Jumpman',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYiSQpbJrY_oG14n05CxTOvjZKSJ8gWQNDw&s',
      precio: '$50.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Blanco', 'Rojo'],
      descripcion: 'Estilo clásico con tecnología de ventilación avanzada.',
    },
    {
      id: 304,
      nombre: 'Pantaloneta Under Armour Dunk',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYSghJYA_Z6dM-vxHJAqrae3uIQx740JSqVw&s',
      precio: '$42.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Negro', 'Naranja'],
      descripcion: 'Material ligero que permite máxima movilidad en la cancha.',
    },
    {
      id: 305,
      nombre: 'Pantaloneta Puma Fast Break',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy097r5KXzmWXsZlv81yuqN4GAT3NQo7_vFg&s',
      precio: '$37.00',
      tallas: ['S', 'M', 'L'],
      colores: ['Amarillo', 'Gris', 'Blanco'],
      descripcion: 'Diseño moderno con ajuste cómodo para movimientos rápidos.',
    },
    {
      id: 306,
      nombre: 'Pantaloneta Reebok Slam',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTezp8d8WgD6RyuIuLQt5oBgL2tupbgoUzQAA&s',
      precio: '$39.00',
      tallas: ['M', 'L', 'XL'],
      colores: ['Negro', 'Blanco', 'Verde'],
      descripcion: 'Ideal para entrenamientos y partidos de alto rendimiento.',
    },
    {
      id: 307,
      nombre: 'Pantaloneta Wilson Dunk Pro',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTATXFqKx5MaIDuAWZ0S4sKYheK0vXF3VNS9g&s',
      precio: '$36.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Naranja', 'Blanco', 'Azul'],
      descripcion: 'Confección resistente para jugadores intensos.',
    },
    {
      id: 308,
      nombre: 'Pantaloneta Champion Crossover',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6o7x7p5HzkdBVrl8TbsvoDg6O1sngKTL1fQ&s',
      precio: '$41.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Negro', 'Gris'],
      descripcion: 'Comodidad premium con materiales que absorben el sudor.',
    },
    {
      id: 309,
      nombre: 'Pantaloneta Decathlon Kipsta Pro',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrvDrarlh7o1_AwES7KPoaA0Eaz7mKL4TFoA&s',
      precio: '$28.00',
      tallas: ['S', 'M', 'L'],
      colores: ['Azul', 'Naranja', 'Blanco'],
      descripcion: 'Pantaloneta asequible para entrenamientos recreativos.',
    },    
    {
      id: 310,
      nombre: 'Pantaloneta Nike Dri-FIT Icon',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeCc6T3Lld4NGqgg4sQUSK7mivxTnr6z56ow&s',
      precio: '$45.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Rojo', 'Blanco'],
      descripcion: 'Tecnología avanzada que combina estilo y funcionalidad.',
    },
    {
      id: 311,
      nombre: 'Pantaloneta Adidas Basketball Essentials',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ewZhjK6nIuTm3rqQaV3hrj5Ab2w8pzbgdQ&s',
      precio: '$39.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Azul', 'Gris', 'Negro'],
      descripcion: 'Perfecta para entrenamientos y partidos recreativos.',
    },
    {
      id: 312,
      nombre: 'Pantaloneta Jordan Flight',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbUJZ9drsh472g5D3XEEZ-Q8z61IZBCy9Gw&s',
      precio: '$52.00',
      tallas: ['M', 'L', 'XL'],
      colores: ['Blanco', 'Negro', 'Azul'],
      descripcion: 'Diseño premium con ajuste óptimo para cada movimiento.',
    },
    {
      id: 313,
      nombre: 'Pantaloneta Under Armour Sportstyle',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmg7-MUVsLCdFa6ppfzGu_N_SK2DRUcOT1KA&s',
      precio: '$43.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Verde', 'Naranja'],
      descripcion: 'Comodidad y transpirabilidad para un juego competitivo.',
    },
    {
      id: 314,
      nombre: 'Pantaloneta Puma Court Flex',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLUqbuZ3MgX7zNWStz3WlPuhMQXvoqB9rwag&s',
      precio: '$38.00',
      tallas: ['M', 'L', 'XL'],
      colores: ['Rojo', 'Gris', 'Azul'],
      descripcion: 'Fabricación ligera que garantiza libertad de movimiento.',
    },
    {
      id: 315,
      nombre: 'Pantaloneta Reebok Court Vision',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeHUAefQAe4SX28jV5rF97kzj721K3_gwtew&s',
      precio: '$37.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Amarillo', 'Blanco'],
      descripcion: 'Estilo dinámico para jugadores exigentes.',
    },
    {
      id: 316,
      nombre: 'Pantaloneta Wilson Drive',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEH3ZnLD2G06JLCG73grL8s1rzhYup5tWo6A&s',
      precio: '$35.00',
      tallas: ['S', 'M', 'L'],
      colores: ['Azul', 'Naranja', 'Negro'],
      descripcion: 'Ideal para un rendimiento superior en la cancha.',
    },
    {
      id: 317,
      nombre: 'Pantaloneta Champion Performance',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUPcNwGHB8EgrdyAxb84Dq1xGuAOkvS4wXeQ&s',
      precio: '$42.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Rojo', 'Blanco', 'Gris'],
      descripcion: 'Material elástico que facilita movimientos rápidos.',
    },
    {
      id: 318,
      nombre: 'Pantaloneta Decathlon Dunk Classic',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sB5m6tmgS9Q1DUB2d4I9Z-7ri4hfyolZ0g&s',
      precio: '$29.00',
      tallas: ['M', 'L', 'XL'],
      colores: ['Verde', 'Blanco', 'Negro'],
      descripcion: 'Opción económica sin comprometer calidad.',
    },
    {
      id: 319,
      nombre: 'Pantaloneta Nike Elite Performance',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJOquWjxt6UVdHG2SqhmhqfMaq-QHhZG7kGg&s',
      precio: '$48.00',
      tallas: ['S', 'M', 'L', 'XL'],
      colores: ['Negro', 'Azul', 'Rojo'],
      descripcion: 'Innovación y diseño para maximizar el rendimiento.',
    },

  ];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    <div className="app-container">
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

import { createRoot } from 'react-dom/client'
createRoot(document.getElementById('root')).render(
  <>
      <AppMultiple/>
  </>
);
