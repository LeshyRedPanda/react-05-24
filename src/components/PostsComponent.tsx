import React, {FC, useEffect, useState} from 'react';
import {IPostModel} from "../models/IPostModel";
import {userApiService} from "../services/api.service";

const PostsComponent:FC = () => {

    const [posts, setPosts] = useState<IPostModel[]>([])

    useEffect(() => {
        userApiService.getAllPosts().then(value => setPosts(value.data))
    }, []);


    return (
        <div>
            {posts.map(post => <div key={post.id}>
                Post ID : {post.id}<br/>
                Post title : {post.title}<br/>
                Post body : {post.body}
                <br/><br/></div>)}
            <hr/>
        </div>
    );
};

export default PostsComponent;