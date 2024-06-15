import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../redux_slices/store";
import {userActions} from "../redux_slices/UserSlice";

const UserInfoPage = () => {
    const {id} = useParams();
    const dispatch = useAppDispatch();
    const {user} = useAppSelector(state => state.userSlice);

    useEffect(() => {
        dispatch(userActions.loadUserById(id))
    }, [id])

    return (
        <div>
            <p>User Info :</p>
            {user && (
                <div>
                    <p>User ID : {user.id}</p>
                    <p>User name : {user.name}</p>
                    <p>User email : {user.email}</p>
                </div>
            )}

        </div>
    );
};

export default UserInfoPage;