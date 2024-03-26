import AxiosClient from "./AxiosClient";

export default class HomeService {
    constructor() {
        this.client = new AxiosClient()
    }
    getHome = () => {
        const requestInfo = {
            url: `http://localhost:1234/`
        }
        return this.client.makeGetRequest(requestInfo)
    }
}