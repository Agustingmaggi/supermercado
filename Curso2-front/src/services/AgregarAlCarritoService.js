import AxiosClient from "./AxiosClient";

export default class AgregarAlCarritoService {
    constructor() {
        this.client = new AxiosClient()
    }

    AgregarAlCarrito = (formData) => {
        const requestInfo = {
            url: `https://supermercado-wuhe.onrender.com/carts/products`,
            body: formData,
            config: {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

        }
        console.log(formData)
        return this.client.makePutRequest(requestInfo)
    }
}