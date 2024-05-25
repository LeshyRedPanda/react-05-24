import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {useNavigate} from "react-router-dom";

interface IProps {
    user: IUserModel
}

const UserComp: FC<IProps> = ({user}) => {

    const navigate = useNavigate()

    return (
        <div className={'divTxt'}>
            <p>
                Name : {user.name}
                Email : {user.email}
            </p>
            <button className={'btn'} onClick={() => {
                navigate(user.id.toString(), {state: {foo: 'fofofofofbar'}})
            }}> User posts
            </button>
            <br/>
            <br/>
        </div>
    );
};

export default UserComp;