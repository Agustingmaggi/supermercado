import AxiosClient from "./AxiosClient";

export default class HomeService {
    constructor() {
        this.client = new AxiosClient()
    }
    getHome = () => {
        const requestInfo = {
            url: `https://supermercado-wuhe.onrender.com/`
        }
        return this.client.makeGetRequest(requestInfo)
    }
}