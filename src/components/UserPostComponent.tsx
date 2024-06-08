import React, {useEffect, useMemo, useState} from 'react';
import {useStore} from "../context/ContextProvider";
import {UserWithPostsType} from "../models/UserWithPostsType";

const UserPostComponent = () => {
    const {userStore: {allUsers}, postsStore: {allPosts}} = useStore();
    const [usersWithPostsState, setUsersWithPostsState] = useState<UserWithPostsType[]>([])


    // filter user === posts
    const userWithPostArray = useMemo(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => post.userId === user.id)}
            });
        }
    }, [allUsers, allPosts])

    useEffect(() => {
        //set user and posts
        setUsersWithPostsState(userWithPostArray)
    }, [userWithPostArray]);

    return (
        <div>
            <hr/>
            {
                usersWithPostsState.map(user => <div key={user.id}>
                    <p> User name : {user.name} .</p>
                    <ul>
                        {
                            user.posts.map(post => <li key={post.id}> Post tittle : {post.title} . </li>)
                        }

                    </ul>
                    <hr/>
                </div>)
            }

        </div>
    );
};

export default UserPostComponent;