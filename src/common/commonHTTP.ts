import axios from "axios";

const baseURL = "http://nstarx-backend.westus2.cloudapp.azure.com/api/v1/"; 

const http = axios.create({
    baseURL: baseURL,
    headers: {
        "Content-type": "application/json",
        'accept': 'application/json',
    }
});

export default http;
