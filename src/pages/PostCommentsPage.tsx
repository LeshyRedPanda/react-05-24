import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/ContextProvider";
import {PostWithCommentsType} from "../models/PostWithCommentsType";

const PostCommentsPage = () => {
    const {postsStore: {allPosts}, commentsStore: {allComments}} = useStore();
    const [postsWithCommentsState, setPostsWithCommentsState] = useState<PostWithCommentsType[]>([])

    const postWithCommentArray = useMemo(() => {
        return () => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allPosts, allComments])

    useEffect(() => {
        setPostsWithCommentsState(postWithCommentArray);
    }, [postWithCommentArray]);


    return (
        <div>
            <hr/>
            {
                postsWithCommentsState.map(post => <div key={post.id}>
                    <p>Post ID : {post.id} ; Post tittle : {post.title}.</p>
                    <ul>
                        {
                            post.comments.map(comment => <li key={comment.id}> Comment ID : {comment.id} ; Comment
                                tittle : {comment.name} . </li>)
                        }
                    </ul>
                    <hr/>

                </div>)
            }

        </div>
    );
};

export default PostCommentsPage;