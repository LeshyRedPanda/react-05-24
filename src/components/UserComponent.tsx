import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    // console.log(user.id);
    return (
        <div>
            <hr/>
            <p> {user.id} - {user.name} ; {user.email} ;</p>
        </div>
    );
};

export default UserComponent;