import React from 'react';
import {useStore} from "../context/ContextProvider";
import PostComponent from "./PostComponent";

const PostsComponent = () => {

    const {postsStore: {allPosts}} = useStore();

    return (
        <div>
            {
                allPosts.map(post => <PostComponent key={post.id} post={post}/>)
            }
        </div>
    );
};

export default PostsComponent;