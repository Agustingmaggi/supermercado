import AxiosClient from "./AxiosClient";

const token = localStorage.getItem('authToken');

export default class ProfileService {
    constructor() {
        this.client = new AxiosClient()
    }

    getProfile = () => {
        const requestInfo = {
            url: `http://localhost:1234/api/sessions/profileinfo`,
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log("headers!!: ", requestInfo.headers)
        return this.client.makeGetRequest(requestInfo)
    }
}