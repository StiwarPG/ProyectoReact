import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { addItemToCart, removeItemFromCart } from '../carrito/cart/cartSlice';
import '../estilos/cartas/style.css';

export function CardInfoComp({ id, nombre, imagen, precio, onMoreInfo }) {
  const [estado, setEstado] = useState(false);
  const dispatch = useDispatch();

  const toggleCartStatus = () => {
    setEstado(!estado);

    if (!estado) {
      dispatch(addItemToCart({ id, nombre, precio, imagen }));
      Swal.fire({
        icon: 'success',
        title: 'Producto añadido al carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      dispatch(removeItemFromCart(id));
      Swal.fire({
        icon: 'error',
        title: 'Producto eliminado del carrito',
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title">{nombre}</h5>
      </div>
      <div className="card-body">
        <img src={imagen} alt={nombre} className="shirt-image" />
        <p className="card-text">
          <strong>Precio:</strong> {precio}
        </p>
        <button className="card-link" onClick={onMoreInfo}>
          Más información...
        </button>
        <button className="add-to-cart" onClick={toggleCartStatus}>
          {estado ? 'En carrito' : 'Añadir al carrito'}
        </button>
      </div>
    </div>
  );
}
