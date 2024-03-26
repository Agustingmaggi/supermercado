import AxiosClient from "./AxiosClient";

export default class AuthService {
    constructor() {
        this.client = new AxiosClient()
    }

    registerUser = (formData) => {
        const requestInfo = {
            url: `http://localhost:1234/api/sessions/register`,
            body: formData,
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(formData)
        return this.client.makePostRequest(requestInfo)
    }
    loginUser = (formData) => {
        const requestInfo = {
            url: `http://localhost:1234/api/sessions/login`,
            body: formData,
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
        }
        console.log(formData)
        return this.client.makePostRequest(requestInfo)
    }

}