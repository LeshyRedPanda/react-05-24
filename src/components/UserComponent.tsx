import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link, useParams} from "react-router-dom";

interface IProps{
    user:IUserModel
}

const UserComponent:FC<IProps> = ({user}) => {


    return (
        <div>
            {/*<div> {user.name} {user.username} {user.email} <br/> <br/></div>*/}

            <Link to={user.id.toString()}> {user.name} {user.username} {user.email} <br/><br/> </Link>


        </div>
    );
};

export default UserComponent;