import {IPostModel} from "../models/IPostModel";
import {axiosInstance} from "./api.service";
import {urls} from "../constants/urls";

export const postService = {
    getAllPosts: async (): Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.base);
        return response.data
    },
    getPostsById: async (id: string): Promise<IPostModel[]> => {
        const response = await axiosInstance.get<IPostModel[]>(urls.posts.byId(+id)) // todo - look at  getCommentsById (commentService) refactor urls.ts (constants)
        console.log(response.data)
        return response.data;
    }
}