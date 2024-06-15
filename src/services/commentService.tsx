import {ICommentModel} from "../models/ICommentModel";
import {axiosInstance} from "./api.service";
import {baseUrl, urls} from "../constants/urls";

export const commentService = {
    getAllComments: async (): Promise<ICommentModel[]> => {
        const response = await axiosInstance.get<ICommentModel[]>(urls.comments.base)
        return response.data;
    },
    getCommentsById: async (postId: string): Promise<ICommentModel[]> => {
        const response = await axiosInstance.get<ICommentModel[]>(`${baseUrl}/posts/${postId}/comments`);
        console.log(response.data)
        return response.data;
    }
}