import React, { useEffect } from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/LoginPages/LoginPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
import CartService from "./services/CreateCartService";
import CartPage from "./pages/CartPages/CartPage"
import Profile from "./pages/ProfilePages/ProfilePage";

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
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;