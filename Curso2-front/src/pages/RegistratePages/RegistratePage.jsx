import React, { useState } from 'react';
import AuthService from '../../services/AuthService';
import { useNavigate } from 'react-router-dom';

const RegistrationForm = () => {
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
            const response = await authService.registerUser(formData);

            if (response.status === 200) {
                // Procesar respuesta exitosa
                console.log('Registro exitoso');
                navigate("/login")
            } else {
                // Procesar respuesta de error
                console.log('Error al registrar');
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
            <button type="submit" style={{ backgroundColor: '#333', color: '#fff' }} >Registrarse</button>
        </form>
    );
};

export default RegistrationForm;