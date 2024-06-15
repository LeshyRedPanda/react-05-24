import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel
}

const UserComponent: FC<IProps> = ({user}) => {
    // console.log(user)
    const navigate = useNavigate();

    return (
        <div>
            <span>{user.id} - {user.name} ;  </span>

            <button className={'btn'} onClick={() => {
                navigate(user.id.toString())
            }}
            >user info
            </button>
            <hr/>
        </div>
    );
};

export default UserComponent;