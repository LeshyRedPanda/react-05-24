import React, {useEffect} from 'react';
import {useAppDispatch} from "../redux_slices/store";
import {postActions} from "../redux_slices/postSlice";
import PostsComponent from "../components/PostsComponent";

const PostsPage = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(postActions.loadPosts());
        dispatch(postActions.loadPostsById())
    }, [])
    return (
        <div>
            <p>posts page</p>
            <PostsComponent/>

        </div>
    );
};

export default PostsPage;