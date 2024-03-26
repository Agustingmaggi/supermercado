import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('authToken');

export default class TraerCarritoService {
    constructor() {
        this.client = new AxiosClient()
    }

    getProfile = () => {
        const requestInfo = {
            url: `http://localhost:1234/carts/:cid`,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        }
        return this.client.makeGetRequest(requestInfo)
    }
}