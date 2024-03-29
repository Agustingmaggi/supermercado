import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('authToken');

export default class CartService {
    constructor() {
        this.client = new AxiosClient()
    }
    getCart = () => {
        const requestInfo = {
            url: `http://localhost:1234/carrito/`,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        }
        return this.client.makeGetRequest(requestInfo)
    }
}