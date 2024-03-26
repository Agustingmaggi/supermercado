import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const authService = new AuthService();
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        try {
            // console.log(formData)
            const response = await authService.loginUser(formData);

            if (response.data.token) {
                // Guardar el token en localStorage
                localStorage.setItem('authToken', response.data.token);
                console.log('Login exitoso');
                navigate("/")

            } else {
                console.log('Error al Logearse');
            }
        } catch (error) {
            console.log('Error de conexión', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit">Ingresar</button>
        </form>
    );
};

export default LoginForm;