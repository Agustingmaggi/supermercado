import AxiosClient from "./AxiosClient";

export default class CartService {
    constructor() {
        this.client = new AxiosClient()
    }

    createCartIfNeeded = async () => {
        const localStorageCart = localStorage.getItem('cart');
        if (!localStorageCart) {
            // Si no hay un carrito en el localStorage, solicita al servidor que cree uno
            const response = await this.client.makePostRequest({
                url: `https://supermercado-wuhe.onrender.com/carts`
            });
            const cartId = response.data.payload;
            // Guarda el ID del carrito en el localStorage
            localStorage.setItem('cart', cartId);
        }
    }
}