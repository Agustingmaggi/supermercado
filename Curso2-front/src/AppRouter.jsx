import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Body from './components/body/body.jsx'
import LoginForm from "./pages/LoginPages/LoginPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
import CartPage from "./pages/CartPages/CartPage"
import Profile from "./pages/ProfilePages/ProfilePage";


const AppRouter = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={Body} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/register" component={RegistrationForm} />
                    <Route path="/cart" component={CartPage} />
                    <Route path="/profile" component={Profile} />
                </Switch>
            </div>
        </Router>
    );
};

export default AppRouter;