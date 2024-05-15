import axios, {AxiosResponse} from 'axios';
import {IPostModel} from "../models/IPostModel";

interface IFormProps {
    title: string,
    body: string,
    userId: number
}

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',

})
//+



const postService = {
    getAllPosts: () => {
        return axiosInstance.get('/posts')
    },
    savePost: ({title,body,userId}: IFormProps): Promise<AxiosResponse<IPostModel>> => {
        return axiosInstance
            .post(
                '/posts',
                {title,body,userId},
                {headers :{'Content-Type':'application/json'}}
            )
    }
}


// const save = ({body,title,userId}:IFormProps) =>{
//     fetch('https://jsonplaceholder.typicode.com/posts',{
//         method:'POST',
//         headers:{
//             'Accept':'application/json',
//             'Content-Type':'application/json',
//         },
//         body:JSON.stringify({
//                  userId:userId
//                  title:title,
//                  body:body,
//            ,
//         })
//     }).then(value=>value.json())

export {
    postService,
}








