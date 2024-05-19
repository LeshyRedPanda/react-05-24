import axios,{AxiosResponse} from 'axios';
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
})

const userApiService ={
    getAllUsers:():Promise<AxiosResponse<IUserModel[]>> =>{
        return axiosInstance.get('users')
    },
    getAllPosts:():Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get('posts')
    },
    getAllComments:():Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get('comments')
    }
}

export {
    userApiService
}









