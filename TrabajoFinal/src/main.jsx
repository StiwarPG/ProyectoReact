import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './carrito/store';
import { AppPrincipal } from './navegation/Principal';
import { FooterCards } from './footer';
import CrudApp from "./components/CrudApp";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <AppPrincipal />
    <CrudApp />
    <FooterCards />
  </Provider>
  
);
  