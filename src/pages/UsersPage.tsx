import React, {useEffect} from 'react';
import UsersComponent from "../components/UsersComponent";
import {useAppDispatch} from "../redux_slices/store";
import {userActions} from "../redux_slices/UserSlice";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(userActions.loadUsers());
        dispatch(userActions.loadUserById());

    }, [])
    return (
        <div>
            <p>user page</p>
            <UsersComponent/>
        </div>
    );
};

export default UsersPage;