import React, { useEffect, useState } from 'react';
import ProfileService from '../../services/ProfileService';
import CartService from '../../services/CartService';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const profileService = new ProfileService();
            const cartService = new CartService();

            try {
                const { data } = await profileService.getProfile();
                setUser(data.user);
            } catch (profileError) {
                console.error('Error fetching profile data:', profileError);
            }

            try {
                const { data } = await cartService.getCart();
                setProductos(data.products);
            } catch (cartError) {
                console.error('Error fetching cart data:', cartError);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User Profile</h1>
            {user && (
                <div>
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    {/* Renderizar otros detalles del usuario según sea necesario */}
                </div>
            )}
            <h2>Products</h2>
            <div>
                {productos.map((producto, index) => (
                    <li key={index}>
                        <h2>{producto.product.title}</h2>
                        <p>Precio: ${producto.product.price}</p>
                        <p>Cantidad: {producto.quantity}</p>
                    </li>
                ))}
            </div>
        </div>
    );
};

export default Profile;