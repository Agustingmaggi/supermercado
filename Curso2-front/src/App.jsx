import React, { useEffect } from "react";
import "./App.css";

import CartService from "./services/CreateCartService";
import AppRouter from "./AppRouter.jsx";

function App() {
  useEffect(() => {
    const cartService = new CartService();
    cartService.createCartIfNeeded()
      .then(() => {
        console.log('Carrito creado o ya presente en localStorage');
      })
      .catch(error => {
        console.error('Error al crear el carrito:', error);
      });
  }, []);

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
}

export default App;