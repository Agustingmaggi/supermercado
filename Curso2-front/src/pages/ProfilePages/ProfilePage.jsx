import React, { useEffect, useState } from 'react';
import ProfileService from '../../services/ProfileService';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [userProducts, setUserProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const profileService = new ProfileService();
            try {
                const { response } = await profileService.getProfile();
                const data = await response.json();
                console.log(data)
                setUser(data.user);
                setUserProducts(data.productos);
            } catch (error) {
                console.error('Error fetching profile data:', error);
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
                {userProducts.map(product => (
                    <div key={product.id}>
                        <h3>{product.name}</h3>
                        <p>Description: {product.description}</p>
                        {/* Renderizar otros detalles del producto según sea necesario */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;