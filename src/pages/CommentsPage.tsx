import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import commentsApiService from '../services/comments.api.service';
import {ICommentModel} from '../models/ICommentModel';
import CommentsComp from '../components/CommentsComp';

const CommentsPage: React.FC = () => {
    const {postId} = useParams<{ postId: string }>();
    const [comments, setComments] = useState<ICommentModel[]>([]);

    useEffect(() => {
        if (postId) {
            commentsApiService.getCommentsOfPost(postId)
                .then(value => setComments(value.data))
                .catch(error => console.error("Error fetching comments:", error));
        }
    }, [postId]);

    return (
        <div>
            <CommentsComp comments={comments}/>
        </div>
    );
};

export default CommentsPage;
