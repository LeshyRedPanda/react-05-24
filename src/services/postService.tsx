import {AxiosResponse} from "axios";
import {IPostModel} from "../models/IPostModel";
import axiosInstance from "./api.service";

const postService = {
    getPosts: async (): Promise<AxiosResponse<IPostModel[]>> => {
        return await axiosInstance.get<IPostModel[]>('/posts');
    }
}

export default postService;