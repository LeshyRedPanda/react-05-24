import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {}
})

export default axiosInstance;