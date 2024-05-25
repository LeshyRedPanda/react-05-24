import React, {useEffect, useState} from 'react';
import {IUserModel} from "../models/IUserModel";
import usersApiService from "../services/users.api.service";
import UserComp from "./UserComp";

const UsersComp = () => {

    const [users,setUsers] = useState<IUserModel[]>([])

    useEffect(() => {
        usersApiService.getAllUsers().then(value => setUsers(value.data))
    })

    return (
        <div>
            {users.map(user => <UserComp  key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComp;