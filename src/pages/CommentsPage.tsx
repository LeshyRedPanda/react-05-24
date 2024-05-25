import React, {useEffect, useState} from 'react';
import CommentsComp from "../components/CommentComp";
import {useLocation} from "react-router-dom";
import commentsApiService from "../services/comments.api.service";
import {ICommentModel} from "../models/ICommentModel";


const CommentsPage = () => {


    const location = useLocation()
    console.log(location)

    const [comments, setComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        if ()
            commentsApiService.getCommentsOfPost(location.pathname)
                .then(value => console.log(value))
    }, [location.pathname]);



    return (
        <div>
            <CommentsComp comments={comments}/>

        </div>
    );
};

export default CommentsPage;