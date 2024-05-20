import axios, {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";

let axiosInstance=axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
})


const postApiService = {
    getPostOfUser:(userId:string):Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`);
    }
}

export default postApiService;


