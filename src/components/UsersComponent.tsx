import React from 'react';
import {useAppSelector} from "../redux_slices/store";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {users} = useAppSelector(state => state.userSlice);
    // console.log(users)

    return (
        <div>
            <div>
                {
                    users.map(user => <UserComponent key={user.id} user={user}/>)
                }
            </div>
        </div>
    );
};

export default UsersComponent;