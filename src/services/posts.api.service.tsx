import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import axiosInstance from "./api.service";


const postsApiService = {
    getPostOfUser: (userId: string): Promise<AxiosResponse<IPostModel[]>> => {
        return axiosInstance.get(`/users/${userId}/posts`)
    }
}

export default postsApiService;