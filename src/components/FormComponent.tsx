import React, {FC, useState} from 'react';
import{useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {postValidator} from '../validators/post.validator'
import {IPostModel} from "../models/IPostModel";
import {postService} from "../services/api.service";
interface IFormProps {
    title: string,
    body: string,
    userId:number
}

const FormComponent: FC =() =>{
    let {
        register,
        handleSubmit,
        formState:{errors,isValid}
    } = useForm<IFormProps>({mode:'all',resolver:joiResolver(postValidator)});

    let[post,setPost]=useState<|IPostModel | null>(null)

const save = (post:IFormProps) =>{

            postService
                .savePost(post)
                .then(value =>setPost(value.data))

    }

    return (
        <div>
            <form onSubmit={handleSubmit(save)}>
                <div><p>Title : </p>
                    <input type="text" {...register('title')}/></div>
                {errors.title && <span>{errors.title.message}</span>}
                <div><p>Body : </p>
                    <input type="text" {...register('body')}/></div>

                <div><p>User ID: </p>
                    <input type="number" {...register('userId')}/></div>

                <button>save</button>

                {post && <h2>Saved post ID: {post.id} , Post title: {post.title}</h2>}

            </form>
        </div>)}

export default FormComponent;