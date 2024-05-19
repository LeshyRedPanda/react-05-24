import axios, {AxiosResponse} from "axios";
import {IUserModel} from "../model/IUserModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {}

});


const userApiService={
    getAllUsers:():Promise<AxiosResponse<IUserModel[]>> => {
        return axiosInstance.get('/users');
    },
        getUserByUserId: async (userId:number):Promise<AxiosResponse<IUserModel>> =>{
        return await axiosInstance.get(`/users/${userId}`)
        },

}

// const userApiService = {
//     getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
//         return axiosInstance.get("/users");
//     },
//     getUserByUserId: async (userId: number): Promise<AxiosResponse<IUserModel>> => {
//         return await axiosInstance.get(`/users/${userId}`);
//     },
//     getPostsOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
//         return axiosInstance.get(`/users/${userId}/posts`);
//     }
// }


export {
    userApiService
}