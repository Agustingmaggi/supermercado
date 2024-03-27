import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('authToken');

export default class CartService {
    constructor() {
        this.client = new AxiosClient()
    }
    getCart = () => {
        const requestInfo = {
            url: `https://supermercado-wuhe.onrender.com/carrito/`,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        }
        return this.client.makeGetRequest(requestInfo)
    }
}