import React, {FC} from 'react';
import {UserBasicModel} from "../../models/basic-models/UserBasicModel";


interface IProps{
    user:UserBasicModel,
    chooseUser:(id:number)=>void
}
const UserComponent:FC<IProps>= ({user,chooseUser}) => {


    return(
        <div>
            {user.id} {user.firstName} {user.email}
            <button onClick={()=>{
                chooseUser(user.id)
            }}>show todos of user</button>



        </div>
    )

}

export default UserComponent;