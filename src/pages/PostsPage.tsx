import React, {useEffect, useState} from 'react';
import PostsComponent from "../components/PostsComponent";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import postApiService from "../services/post.api.service";


const PostsPage = () => {

    const {id} = useParams<{id:string}>();
    console.log(id)

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
       if (id){
           postApiService.getPostOfUser(id)
               .then(({data}) => setPosts(data))
       }
    }, [id]);

    return (
        <div>
           <PostsComponent posts={posts}/>
        </div>
    );
};

export default PostsPage;