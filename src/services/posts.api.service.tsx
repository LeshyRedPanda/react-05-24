import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import axiosInstance from "./api.service";


// const postsApiService = {
//     getPostOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
//         return axiosInstance.get(`/users/${userId}/posts`)
//     }
// }
const postsApiService = {
    getPostOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`${userId}/posts`)  //changing path to use "state"
    }
}

export default postsApiService;