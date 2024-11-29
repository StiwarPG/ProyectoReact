import React, { useState } from 'react';
import { CardInfoComp } from '../../cartas/card';
import { CartaAmpliada } from '../../cartas/max';
import '../../estilos/cartas/style.css';
export const productos = [
    {
      id: 1100,
      nombre: 'Nike Mercurial',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD6aRnCmjj6ery2b8e_ZiNB31J6qxOHtBHfw&s',
      precio: '$120.00',
      tallas: ['38', '39', '40', '41', '42', '43', '44'],
      colores: ['Negro', 'Blanco', 'Rojo'],
      descripcion: 'Diseñados para máxima velocidad en el campo y un ajuste perfecto.',
    },
    {
      id: 1101,
      nombre: 'Adidas Predator',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7JzU_Eo6leACsfJBPVTVAT_oT2v8O2UQlvQ&s',
      precio: '$130.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Azul', 'Negro', 'Blanco'],
      descripcion: 'Control total del balón con tecnología avanzada.',
    },
    {
      id: 1102,
      nombre: 'Puma Future Z',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKY9sKfDT_qn3mY9VSYLXCGbxBkNW_rhpicg&s',
      precio: '$110.00',
      tallas: ['38', '39', '40', '41', '42', '44'],
      colores: ['Naranja', 'Negro'],
      descripcion: 'Comodidad y flexibilidad para movimientos dinámicos.',
    },
    {
      id: 1103,
      nombre: 'Under Armour Magnetico',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4A4_5sHeg-XOJYaxwsEXtlM8THmTw6uOQhw&s',
      precio: '$95.00',
      tallas: ['38', '39', '40', '41', '42', '43', '44'],
      colores: ['Gris', 'Negro'],
      descripcion: 'Ajuste perfecto y tracción optimizada en cualquier superficie.',
    },
    {
      id: 1104,
      nombre: 'Mizuno Morelia Neo',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThCroLfc5lTYtnCPTewOmm2R2-rbyk12QEJQ&s',
      precio: '$140.00',
      tallas: ['39', '40', '41', '42', '43'],
      colores: ['Blanco', 'Dorado'],
      descripcion: 'Diseño clásico con materiales modernos para mayor durabilidad.',
    },
    {
      id: 1105,
      nombre: 'New Balance Tekela',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1fOWzo5NzfX4T_82qbMgc_cV60PR3TCHvVg&s',
      precio: '$105.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Verde', 'Negro'],
      descripcion: 'Control preciso y soporte en movimientos rápidos.',
    },
    {
      id: 1106,
      nombre: 'Umbro Velocita',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWiGdNv6TJ6iXU7nzyD6PMHiT0826J2hLSvg&s',
      precio: '$100.00',
      tallas: ['39', '40', '41', '42', '43', '44'],
      colores: ['Amarillo', 'Azul'],
      descripcion: 'Ligereza y velocidad en el diseño.',
    },
    {
      id: 1107,
      nombre: 'Diadora Brasil',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtI1U-uLd51AnlHUE-zGLhxKBTqdr_gMVxYw&s',
      precio: '$90.00',
      tallas: ['38', '39', '40', '41', '42'],
      colores: ['Rojo', 'Blanco'],
      descripcion: 'Inspirados en el estilo clásico de los campos brasileños.',
    },
    {
      id: 1108,
      nombre: 'Joma Champion',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO68YK80eEtolptfaiKO_zV0cBXPaeQA8rHQ&s',
      precio: '$85.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Negro', 'Blanco'],
      descripcion: 'Alta resistencia y comodidad para largas jornadas de juego.',
    },
    {
      id: 1109,
      nombre: 'Kelme Precision',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyo1M9b9C573rO5EMtfJ_Cop-zr-ul6vM53Q&s',
      precio: '$75.00',
      tallas: ['39', '40', '41', '42', '43'],
      colores: ['Negro', 'Gris'],
      descripcion: 'Control preciso y diseño robusto para jugadores técnicos.',
    },
    {
      id: 1110,
      nombre: 'Lotto Solista',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDNFTPlaDQJOYIs2Y_59b1u7y6PKsD1eiYww&s',
      precio: '$92.00',
      tallas: ['38', '39', '40', '41', '42', '43', '44'],
      colores: ['Azul', 'Negro'],
      descripcion: 'Velocidad y agilidad en cada jugada.',
    },
    {
      id: 1111,
      nombre: 'Reebok Classic Soccer',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZvPzJk54cgiXPAJ440XIBm9-ylY72sr_kSw&s',
      precio: '$80.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Blanco', 'Negro'],
      descripcion: 'Diseño clásico para una experiencia moderna en el campo.',
    },
    {
      id: 1112,
      nombre: 'Asics DS Light',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKbSzV5Pv00OGLaaFchCoiofwvsATlrf0Xfg&s',
      precio: '$115.00',
      tallas: ['38', '39', '40', '41', '42', '43', '44'],
      colores: ['Rojo', 'Negro'],
      descripcion: 'Ligereza y soporte para largas sesiones de juego.',
    },
    {
      id: 1113,
      nombre: 'Nike Phantom',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmeCZN5vdRJimteRRRfi9_U_kE-mn1-2ULvw&s',
      precio: '$125.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Negro', 'Blanco', 'Amarillo'],
      descripcion: 'Para jugadores que buscan control absoluto en el campo.',
    },
    {
      id: 1114,
      nombre: 'Adidas X Speedflow',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaia5bSJR08snTnUlTU7BxP4oYhsdC1jFNQ&s',
      precio: '$140.00',
      tallas: ['39', '40', '41', '42', '43'],
      colores: ['Rojo', 'Blanco'],
      descripcion: 'Tecnología de velocidad diseñada para jugadores explosivos.',
    },
    {
      id: 1115,
      nombre: 'Puma Ultra',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFTkR886NpXNQl-e3gGdGsyrKiDKmZyAeu9g&s',
      precio: '$110.00',
      tallas: ['38', '39', '40', '41', '42', '43', '44'],
      colores: ['Naranja', 'Negro'],
      descripcion: 'Ultraligeros para un desempeño rápido y preciso.',
    },
    {
      id: 1116,
      nombre: 'Under Armour Clone',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgEfnGpSMbmQIoe2mLKDZFVUX4odnSGt4rbg&s',
      precio: '$100.00',
      tallas: ['39', '40', '41', '42', '43'],
      colores: ['Azul', 'Gris'],
      descripcion: 'Ajuste personalizado para mayor comodidad.',
    },
    {
      id: 1117,
      nombre: 'Mizuno Rebula',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRuvmX1lNRX_JcsF0rZB8ooFInT_5-fSogoA&s',
      precio: '$130.00',
      tallas: ['38', '39', '40', '41', '42'],
      colores: ['Negro', 'Dorado'],
      descripcion: 'Control y precisión con materiales de alta calidad.',
    },
    {
      id: 1118,
      nombre: 'Joma Aguila',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3c2wIaKN1-IeZZ97Uxfv7P7LK1vN2h4NZlg&s',
      precio: '$85.00',
      tallas: ['38', '39', '40', '41', '42', '43'],
      colores: ['Blanco', 'Azul'],
      descripcion: 'Diseño tradicional para jugadores de todos los niveles.',
    },
    {
      id: 1119,
      nombre: 'Kelme Star 360',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8g642bDuGORl9WF6fewh0YuCQrUcaazXTMA&s',
      precio: '$95.00',
      tallas: ['39', '40', '41', '42', '43', '44'],
      colores: ['Negro', 'Verde','Blanco'],
      descripcion: 'Combinación de estilo y funcionalidad para el máximo desempeño.',
    }  
  ];

export function AppMultiple() {
  const [selectedShirt, setSelectedShirt] = useState(null);

  const handleMoreInfo = (shirt) => setSelectedShirt(shirt);

  const closeShirtInfo = () => setSelectedShirt(null);

  return (
    <div className="app-container">
          <header className="header">
      <div className="icon-basketball"></div>
      <h1>Zapatos</h1>
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
