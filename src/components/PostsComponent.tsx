import React, {useEffect} from 'react';
import {useStore} from "../context/ContextProvider";
import PostComponent from "./PostComponent";
import postService from "../services/postService";

const PostsComponent = () => {
    const {postsStore, postsStore: {allPosts}} = useStore();

    useEffect(() => {
        postService.getPosts().then(posts => {
            postsStore.loadPosts(posts.data)

        })
    }, );

    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;