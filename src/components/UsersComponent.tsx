import React, {useEffect} from 'react';
import {useContextProvider} from "../context/ContextProvider";
import UserComponent from "./UserComponent";

const UsersComponent = () => {
    const {userStore: {allUsers}} = useContextProvider();
    // console.log(allUsers);
    useEffect(() => {

    }, []);

    return (
        <div>
            {allUsers.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersComponent;