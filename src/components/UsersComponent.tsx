import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {IUserModel} from "../models/IUserModel";
import UserComponent from "./UserComponent";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])


    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);


    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user}/> )}
            <hr/>
        </div>
    );
};

export default UsersComponent;