import axios, {AxiosResponse} from 'axios';
import {UserModel} from "../models/userModel";
import {PostModel} from "../models/postModel";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',

});


const getAllUsers = ():Promise<AxiosResponse<UserModel[]>> =>{
    return axiosInstance.get('/users')
}

const getAllPosts = ():Promise<AxiosResponse<PostModel[]>> => {
    return axiosInstance.get('/posts');
}

export {
    getAllUsers,
    getAllPosts
}
