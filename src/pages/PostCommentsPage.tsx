import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux_slices/store";
import {loadCommentsById} from "../redux_slices/commentSlice";

const PostCommentsPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {commentsByID} = useAppSelector(state => state.commentSlice);

    useEffect(() => {
        if (id) {
            dispatch(loadCommentsById(id))
        }
    }, [id])

    return (
        <div>
            <p>Post id : {id} ,Comments : </p>
            <ul>
                {commentsByID?.map(comment => (
                    <li key={comment.id}>
                        <div> Comment id : {comment.id}</div>
                        <div> Comment body : {comment.body}</div>

                    </li>
                ))}
            </ul>

        </div>
    )
};
export default PostCommentsPage;