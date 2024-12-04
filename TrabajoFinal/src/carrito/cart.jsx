import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} from './cart/cartSlice';
import '../estilos/cartas/style2.css';

const fetchProducts = async () => {
  try {
    const response = await fetch('http://localhost:4000/api/productos');
    const data = await response.json();
    console.log('Productos obtenidos:', data);
    return data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

export function Cart() {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();
      if (products) {
        console.log('Productos obtenidos:', products);
      }
    };

    loadProducts();
  }, []);

  const totalAPagar = items.reduce(
    (total, item) => total + item.precio * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Carrito de Compras</h2>
      <button onClick={() => dispatch(clearCart())}>Vaciar carrito</button>
      {items.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.imagen} alt={item.nombre} className="cart-image" />
              <p>{item.nombre}</p>
              <p>Precio: ${item.precio.toFixed(2)}</p>
              <div className="quantity-controls">
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
              </div>
              <p>Total: ${(item.precio * item.quantity).toFixed(2)}</p>
              <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                Eliminar
              </button>
            </div>
          ))}
          <p>Total de productos: {totalQuantity}</p>
          <p className="total-a-pagar">
            Total a pagar: <strong>${totalAPagar.toFixed(2)}</strong>
          </p>
        </div>
      )}
    </div>
  );
}
