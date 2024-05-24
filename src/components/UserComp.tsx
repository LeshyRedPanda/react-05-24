import React, {FC} from 'react';
import {IUserModel} from "../models/IUserModel";
import {Link, useNavigate} from "react-router-dom";

interface IProps{
    user:IUserModel
}


const UserComp:FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    return (
        <div>


            <Link
                to={user.id.toString()}
                state={{foo:'bar'}}
            >
                {user.name}
                {user.email}
            </Link>
            <button onClick={()=>{
                navigate(user.id.toString(),{state:{foo:'fofofofofbar'}})
            }}> user posts </button>

            <br/>
            <br/>

        </div>
    );
};

export default UserComp;