import React, { useState, useEffect } from 'react';
import './body.css';
import Navbar from '../barranav/barranav';
import HomeService from '../../services/HomeService';
import AgregarAlCarritoService from '../../services/AgregarAlCarritoService';
import ProfileService from '../../services/UserService';

const BodyComponent = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userId, setUserId] = useState(null)
    const [userCart, setUserCart] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const homeService = new HomeService();
            try {
                const { data } = await homeService.getHome();
                setProductos(data.products);
                // console.log(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            const profileService = new ProfileService
            try {
                const { data } = await profileService.getProfile()
                // console.log(data.user)
                setUserId(data.user.id)
                setUserCart(data.user.cart)
            } catch (error) {
                console.error('error al querer agarrar al user id o el cart id')
            }
        };

        fetchData();
    }, []);

    const agregarAlCarrito = async (productId) => {
        const agregarAlCarritoService = new AgregarAlCarritoService();
        try {
            const response = await agregarAlCarritoService.AgregarAlCarrito({ productId, userId, userCart });
            console.log(response.data); // Aquí puedes manejar la respuesta si es necesario
            // Podrías mostrar una notificación o actualizar el estado del carrito, etc.
        } catch (error) {
            console.error('Error al agregar al carrito:', error);
        }
    };

    if (loading) {
        return <div>Cargando...</div>;
    }

    return (
        <div>
            <nav className='barra-nav'>
                <Navbar />
            </nav>

            {/* Renderizar los productos */}
            <div className="productos-container">
                {productos.map(producto => (
                    <div key={producto._id} className="producto">
                        <p>{producto.title}</p>
                        <p>Precio: ${producto.price}</p>
                        <img src={producto.images[0]} alt={producto.title} style={{ width: '258px', height: '195px' }} />
                        <button onClick={() => agregarAlCarrito(producto._id, userId, userCart)} className="agregar-carrito">Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;