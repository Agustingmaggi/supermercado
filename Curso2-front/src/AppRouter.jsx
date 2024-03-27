import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body/body.jsx'
import LoginForm from "./pages/LoginPages/LoginPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
// import CartPage from "./pages/CartPages/CartPage"
import Profile from "./pages/ProfilePages/ProfilePage";


const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Body />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegistrationForm />} />
                    {/* <Route path="/cart" element={<CartPage />} /> */}
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default AppRouter;