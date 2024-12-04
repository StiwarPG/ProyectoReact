import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, clearCart } from './cartSlice';
import '../estilos/cartas/style.css';

export function Cart() {
  const { items, totalQuantity } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <button onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {items.map(item => (
            <div key={item._id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-image" />
              <p>{item.nombre}</p>
              <p>Precio: {item.precio}</p>
              <p>Cantidad: {item.quantity}</p>
              <button onClick={() => dispatch(removeItemFromCart(item._id))}>
                Eliminar
              </button>
            </div>
          ))}
          <p>Total de productos: {totalQuantity}</p>
        </div>
      )}
    </div>
  );
}
