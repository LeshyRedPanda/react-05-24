import {AxiosResponse} from "axios";
import {ICommentModel} from "../models/ICommentModel";
import axiosInstance from "./api.service";

const commentService = {
    getComments: async (): Promise<AxiosResponse<ICommentModel[]>> => {
        return await axiosInstance.get<ICommentModel[]>('/comments')
    }
}


export default commentService;