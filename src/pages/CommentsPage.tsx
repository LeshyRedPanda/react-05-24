import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {ICommentModel} from "../models/ICommentModel";
import commentsApiService from "../services/comments.api.service";
import CommentsComponent from "../components/CommentsComponent";


const CommentsPage = () => {

    const {postId} = useParams<{ postId: string }>()
    // console.log(useParams())
    console.log(postId)

    const [comments,setComments]=useState<ICommentModel[]>([])

    useEffect(() => {
       if(postId){
           commentsApiService.getCommentsOfPost(postId)
               .then(({data}) => setComments(data))
       }
    },[postId])


    return (
        <div>
            comments page
            <CommentsComponent comments={comments}/>

        </div>
    );
};

export default CommentsPage;