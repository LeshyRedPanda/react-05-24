import React, {useEffect, useState} from 'react';
import PostsComp from "../components/PostsComp";
import {useLocation, useParams} from "react-router-dom";
import {IPostModel} from "../models/IPostModel";
import postsApiService from "../services/posts.api.service";


const PostsPage = () => {

    const location = useLocation();
    console.log(location.pathname)

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        if (location.pathname){
            postsApiService.getPostOfUser(location.pathname)
                .then(value => setPosts(value.data))
        }
    }, [location.pathname]);


    return (
        <div>
            <PostsComp posts={posts}/>

        </div>

    )
}

export default PostsPage;
// -----------------------------------------------------------------
