import React, {useEffect, useState} from 'react';
import PostsComp from "../components/PostComp";
import {useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import postsApiService from "../services/posts.api.service";

const PostsPage = () => {


        const {id} = useParams<{ id: string }>()
        console.log(id)

    const [posts,setPosts] = useState<IPostModel[]>([]);

    useEffect(() => {
        if (id){
            postsApiService.getPostOfUser(id)
                .then(({data}) => setPosts(data))
        }
    }, [id]);

    return (
        <div>
            posts page
            <PostsComp post={posts}/>

        </div>
    );
};

export default PostsPage;