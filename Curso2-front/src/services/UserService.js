import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('authToken');

export default class ProfileService {
    constructor() {
        this.client = new AxiosClient()
    }

    getUser = () => {
        const requestInfo = {
            url: `http://localhost:1234/api/sessions/user`,
            config: {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }
        }
        // console.log("headers!!: ", requestInfo.config.headers)
        return this.client.makeGetRequest(requestInfo)
    }
}