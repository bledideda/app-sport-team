import { SERVER_BASE_URL, AUTHORIZATION_TOKEN } from "../config/Index";


export default class ApiService {

    #makeHeaders = (token = false) => {
        let headers = {
            Accept: "application/json",
            "Content-Type": "application/json",
        }
        if(token){
            headers.Authorization = token;
        }
        return headers;
    };
    
    #makeBody = (data) => {
        return JSON.stringify(data);
    };
   
    async postData( path, data ){
        let url = SERVER_BASE_URL+path;
        let requestData = {
            method: "POST",
            headers: this.#makeHeaders(AUTHORIZATION_TOKEN),
            body: this.#makeBody(data),
        };
        return await fetch(url, requestData)
        .then((res) => {
            const statusCode = res.status;
            const data = res.json();
            return Promise.all([statusCode, data]);
        })
        .then(([statusCode, data]) => {
            return { ...data, statusCode: statusCode };
        })
        .catch((e) => console.log(e));
    }

    async getData( path ){
    
        let url = SERVER_BASE_URL+path;
        let requestData = {
            method: "GET",
            headers: this.#makeHeaders(AUTHORIZATION_TOKEN),
        };
        return await fetch(url, requestData)
            .then((res) => {
                const statusCode = res.status;
                const data = res.json();
                return Promise.all([statusCode, data]);
            })
            .then(([statusCode, data]) => {
                return { ...data, statusCode: statusCode };
            })
            .catch((e) => console.log(e));
    }
}