import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';

export const productos = [
    {
      id: 101,
      nombre: 'Nike Air Zoom BB NXT',
      imagen: 'https://images.stockx.com/images/Nike-Air-Zoom-BB-NXT-Rawthentic-Product.png?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1686755772',
      precio: '$150.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Negro', 'Blanco', 'Azul'],
      descripcion: 'Zapatos ligeros y con excelente amortiguación para un mejor rendimiento en la cancha.',
    },
    {
      id: 102,
      nombre: 'Adidas Harden Vol. 5',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU5Cx49WOQTURtCXwTe9EzrboDPcdNjMdYXQ&s',
      precio: '$140.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Rojo', 'Negro', 'Blanco'],
      descripcion: 'Diseñados para la velocidad y el control, ideales para jugadores dinámicos.',
    },
    {
      id: 103,
      nombre: 'Under Armour Curry Flow 9',
      imagen: 'https://m.media-amazon.com/images/I/61hqOc4mF3L._AC_UY900_.jpg',
      precio: '$160.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Amarillo', 'Negro', 'Blanco'],
      descripcion: 'Desarrollados para una tracción impecable y comodidad superior.',
    },
    {
      id: 104,
      nombre: 'Puma Clyde All-Pro',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNQ-0Buh8cStDorM-J9lC8JC0ecoGI1j8iRA&s',
      precio: '$130.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Gris', 'Negro', 'Rojo'],
      descripcion: 'Un clásico renovado con tecnología moderna para un gran desempeño.',
    },
    {
      id: 105,
      nombre: 'Reebok Question Mid',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2CAfZOeKAbWF6R6R74gt_l9jSTlYLeAljQ&s',
      precio: '$120.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Blanco', 'Rojo', 'Azul'],
      descripcion: 'Inspirados en los clásicos de los años 90, con estilo y comodidad.',
    },
    {
      id: 106,
      nombre: 'Jordan Why Not Zer0.4',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIp6QvNdrfrO81fQLiCpOjsMIsiHCGCCOjRA&s',
      precio: '$150.00',
      tallas: ['9', '10', '11', '12', '13'],
      colores: ['Negro', 'Naranja', 'Blanco'],
      descripcion: 'Zapatos de alto rendimiento diseñados para jugadores explosivos.',
    },
    {
      id: 107,
      nombre: 'Converse All Star BB Jet',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFkGNdFfxwt4F4sXN0FufjyqcC99gWJNAfuw&s',
      precio: '$110.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Blanco', 'Negro', 'Verde'],
      descripcion: 'Estilo clásico combinado con tecnología moderna para la cancha.',
    },
    {
      id: 108,
      nombre: 'Li-Ning Way of Wade 10',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0-vZ-w4v4_2Q2ncAeNDn65PAlQeQPUrsUjQ&s',
      precio: '$200.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Negro', 'Morado', 'Rojo'],
      descripcion: 'Edición de lujo para un máximo rendimiento y estilo.',
    },
    {
      id: 109,
      nombre: 'Anta KT6',
      imagen: 'https://sheshalifestyle.com/wp-content/uploads/2023/05/1-122.png',
      precio: '$140.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Blanco', 'Azul', 'Negro'],
      descripcion: 'Zapatos diseñados para soportar el ritmo intenso del baloncesto profesional.',
    },
    {
      id: 110,
      nombre: 'New Balance Kawhi',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0cUK8M4meC71kvktPXShhiAWr_BLRpVMElA&s',
      precio: '$150.00',
      tallas: ['9', '10', '11', '12', '13'],
      colores: ['Rojo', 'Negro', 'Gris'],
      descripcion: 'Estilo y funcionalidad combinados para un gran control en la cancha.',
    },
    {
      id: 111,
      nombre: 'Nike KD14',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivkwkbnGWUrgK8vF1q4Rt98NHJIfLXS9AlQ&s',
      precio: '$160.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Negro', 'Blanco', 'Morado'],
      descripcion: 'Diseñados para brindar una amortiguación excelente y estabilidad.',
    },
    {
      id: 112,
      nombre: 'Adidas Dame 7',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUMc-PiG6W66nAtoCjTqA6WGfdAplbhY-4FQ&s',
      precio: '$130.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Azul', 'Negro', 'Blanco'],
      descripcion: 'Zapatos versátiles para un rendimiento excepcional en la cancha.',
    },
    {
      id: 113,
      nombre: 'Under Armour HOVR Havoc 3',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThxGf4Ic06bGujR7dEiFFQJqbCPesgjle4rw&s',
      precio: '$140.00',
      tallas: ['9', '10', '11', '12', '13'],
      colores: ['Gris', 'Negro', 'Azul'],
      descripcion: 'Perfectos para jugadores que buscan comodidad y soporte duradero.',
    },
    {
      id: 114,
      nombre: 'Puma RS-Dreamer',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9H9QQeaObEi7I_kPVC77lF9kRZ4gQ-AolNg&s',
      precio: '$125.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Negro', 'Rojo', 'Blanco'],
      descripcion: 'Zapatos dinámicos y estilizados para destacar dentro y fuera de la cancha.',
    },
    {
      id: 115,
      nombre: 'Reebok Kamikaze II',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJFjQEsLng69f73LUCfpFIALODSu7x82FybQ&s',
      precio: '$100.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Verde', 'Blanco', 'Negro'],
      descripcion: 'Un modelo clásico para los amantes del estilo retro.',
    },
    {
      id: 116,
      nombre: 'Jordan Luka 1',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_ObMmjJwQleHVSrauCkTfOitWkHDx3d2r-w&s',
      precio: '$140.00',
      tallas: ['9', '10', '11', '12', '13'],
      colores: ['Negro', 'Blanco', 'Rojo'],
      descripcion: 'Inspirados por Luka Doncic, ideales para movimientos rápidos y ágiles.',
    },
    {
      id: 117,
      nombre: 'Li-Ning All City 9',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBs6WMBE8uuO2nNC9fYd_pkaSW0HqZibcSkw&s',
      precio: '$135.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Blanco', 'Negro', 'Azul'],
      descripcion: 'Combinación perfecta de soporte y ligereza para cualquier posición.',
    },
    {
      id: 118,
      nombre: 'Anta GH3',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi8ImVSHSx3f5R27n_0u6VO4AVgx-zIdwj7g&s',
      precio: '$120.00',
      tallas: ['7', '8', '9', '10', '11'],
      colores: ['Gris', 'Rojo', 'Negro','Azul'],
      descripcion: 'Zapatos confiables para los jugadores más exigentes.',
    },
    {
      id: 119,
      nombre: 'Converse BB Evo',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIzjLDjSE9DlDbHMiezMMy3Bye58rYMF-PVw&s',
      precio: '$115.00',
      tallas: ['9', '10', '11', '12', '13'],
      colores: ['Negro', 'Blanco', 'Naranja'],
      descripcion: 'Perfectos para un rendimiento ágil y ligero.',
    },
    {
      id: 120,
      nombre: 'Peak Lou Williams',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYRA9IdMEcIQrSer7S5LWuYLLi6y5qVGNXyA&s',
      precio: '$110.00',
      tallas: ['8', '9', '10', '11', '12'],
      colores: ['Rojo', 'Blanco', 'Negro'],
      descripcion: 'Zapatos diseñados para brindar soporte y estilo único.',
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
