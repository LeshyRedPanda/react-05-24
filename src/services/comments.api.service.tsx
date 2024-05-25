import axiosInstance from "./api.service";
import {ICommentModel} from "../models/ICommentModel";
import {AxiosResponse} from "axios";


const commentsApiService = {
    getCommentsOfPost:(postId:string):Promise<AxiosResponse<ICommentModel[]>> =>{
        return axiosInstance.get(`/posts/${postId}/comments`)
    }
}

export default commentsApiService;
