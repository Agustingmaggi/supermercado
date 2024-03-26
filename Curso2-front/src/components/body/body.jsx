import React, { useState, useEffect } from 'react';
import './body.css';
import Navbar from '../barranav/barranav';
import HomeService from '../../services/HomeService';

const BodyComponent = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const homeService = new HomeService();
            try {
                const { data } = await homeService.getHome();
                setProductos(data.products);
                console.log(data)
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

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
                        {/* <p>{producto.categories.join(', ')}</p> */}
                        <p>Precio: ${producto.price}</p>
                        <p>Stock: {producto.stock}</p>
                        <img src={producto.images[0]} alt={producto.title} style={{ width: '258px', height: '195px' }} />
                        <button onClick={() => addProduct(producto._id)} className="agregar-carrito">Agregar al carrito</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BodyComponent;