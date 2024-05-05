import axios, {AxiosResponse} from 'axios';
import {UserModel} from "../models/userModel";
import {PostModel} from "../models/postModel";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
});


const getAllUsers = ():Promise<AxiosResponse<UserModel[]>> =>{
    return axiosInstance.get('/users')
}


//all posts
// const getAllPosts = ():Promise<AxiosResponse<PostModel[]>> => {
//     return axiosInstance.get('/posts');
// }

//get all posts + id
const getAllSinglePost = (userId:number):Promise<AxiosResponse<PostModel[]>> => {
    // return axiosInstance.get(('/posts/postId='+ id))
    return axiosInstance.get(`/users/${userId}/posts`)
}

export {
    getAllUsers,
    getAllSinglePost
}
