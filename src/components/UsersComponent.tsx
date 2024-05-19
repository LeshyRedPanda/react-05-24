import React, {FC, useEffect, useState} from 'react';
import {userApiService} from "../services/api.service";
import {IUserModel} from "../models/IUserModel";

const UsersComponent:FC = () => {

    const [users, setUsers] = useState<IUserModel[]>([])


    useEffect(() => {
        userApiService.getAllUsers().then(value => setUsers(value.data))
    }, []);


    return (
        <div>
            {users.map(user => <div key={user.id}> {user.name} {user.username} {user.email} <br/> <br/> </div>)}
            <hr/>
        </div>
    );
};

export default UsersComponent;