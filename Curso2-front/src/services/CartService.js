import AxiosClient from "./AxiosClient";

export default class CartService {
    constructor() {
        this.client = new AxiosClient()
    }
    getCart = () => {
        const requestInfo = {
            url: `http://localhost:1234/carrito/`
        }
        return this.client.makeGetRequest(requestInfo)
    }
}