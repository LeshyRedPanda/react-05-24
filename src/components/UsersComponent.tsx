import React, {useEffect} from 'react';
import {useStore} from "../context/ContextProvider";
import UserComponent from "./UserComponent";
import userService from "../services/userService";

const UsersComponent = () => {
    const {userStore,userStore:{allUsers}} = useStore();
    useEffect(() => {
        userService.getUsers().then(users => {
            userStore.loadUsers(users.data)
        })
    }, );

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;