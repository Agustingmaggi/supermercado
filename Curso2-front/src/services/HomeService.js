import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('accessToken');

export default class HomeService {
    constructor() {
        this.client = new AxiosClient()
    }
    getHome = () => {
        const requestInfo = {
            url: `http://localhost:1234/`,
            headers: {
                authorization: `Bearer ${token}`
            }
        }
        return this.client.makeGetRequest(requestInfo)
    }
}