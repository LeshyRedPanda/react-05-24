import axios, {AxiosResponse} from "axios";
import {ICommentModel} from "../models/ICommentModel";



const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers:{}
})


const commentsApiService ={
    getCommentsOfPost:(postId:string):Promise<AxiosResponse<ICommentModel[]>> => {
        return axiosInstance.get(`/posts/${postId}/comments`)
}
}


export default commentsApiService;
