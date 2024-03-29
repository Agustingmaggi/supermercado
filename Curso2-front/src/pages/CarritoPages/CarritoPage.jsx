import React, { useEffect, useState } from 'react';
import UserService from '../../services/UserService';
import CartService from '../../services/CartService';
import './CarritoPage.css'

const Carrito = () => {
    const [user, setUser] = useState(null);
    const [productos, setProductos] = useState([]);
    const subtotales = productos.map(producto => producto.product.price * producto.quantity);
    const totalCarrito = subtotales.reduce((total, subtotal) => total + subtotal, 0);


    useEffect(() => {
        const fetchData = async () => {
            const userService = new UserService();
            const cartService = new CartService();

            try {
                const { data } = await userService.getUser();
                // console.log(data)
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
            <h1>Carrito</h1><br></br>
            {user && (
                <div>
                    <h2>Welcome, {user.email}!</h2><br></br>
                </div>
            )}
            <h2>Products</h2> <br></br>
            <div>
                <ul>
                    {productos.map((producto, index) => (
                        <li key={index}>
                            <h2>{producto.product.title}</h2>
                            <p>Precio: ${producto.product.price}</p>
                            <p>Cantidad: {producto.quantity}</p>
                            <img src={producto.product.images[0]} alt={producto.title} style={{ width: '258px', height: '195px' }} />
                            <br></br>
                            <p className="subtotal">Subtotal: ${subtotales[index]}</p>
                            <br></br>
                        </li>
                    ))}
                </ul><br></br>
                <p className='total'>Total Carrito: ${totalCarrito}</p><br></br>
                <button className="agregar-carrito">Comprar</button>
            </div>
        </div>
    );
};

export default Carrito;