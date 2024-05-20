import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps{
    user:IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {
    return (
        <div>
            <div key={user.id}> {user.name} {user.username} {user.email} <br/> <br/></div>


        </div>
    );
};

export default UserComponent;