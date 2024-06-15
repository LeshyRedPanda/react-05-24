import React, {useEffect} from 'react';
import CommentsComponent from "../components/CommentsComponent";
import {useAppDispatch} from "../redux_slices/store";
import {commentActions} from "../redux_slices/commentSlice";

const CommentsPage = () => {
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(commentActions.loadComments());
        dispatch(commentActions.loadCommentsById())
    }, [])


    return (
        <div>
            <p>comments page</p>
            <CommentsComponent/>

        </div>
    );
};

export default CommentsPage;