import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link} from "react-router-dom";

interface IProps{
    user:IUserModel
}


const UserComp:FC<IProps> = ({user}) => {
    return (
        <div>


            <Link to={user.id.toString()}> {user.name} {user.email}</Link>
            <br/>
            <br/>

        </div>
    );
};

export default UserComp;