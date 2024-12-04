import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart, addItemToCart, clearCart } from './cart/cartSlice';
import '../estilos/cartas/style2.css';

const fetchProducts = async () => {
  try {
    const response = await fetch('https://api.example.com/products'); 
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching products:', error);
  }
};

export function Cart() {
  const { items, totalQuantity } = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts();

    };

    loadProducts();
  }, [dispatch]);

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
              <p>Cantidad: {item.quantity}</p>
              <div className="button-group">
                <button onClick={() => dispatch(removeItemFromCart(item.id))}>
                  -
                </button>
                <button onClick={() => dispatch(addItemToCart(item))}>
                  +
                </button>
              </div>
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
