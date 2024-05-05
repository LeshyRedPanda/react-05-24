import React, {FC, useEffect,useState} from "react";
import {UserModel} from "../../models/userModel";
import UserComponent from "../user/UserComponent";
import {getAllUsers} from "../../services/jpg.api.service";
import {brotliCompress} from "node:zlib";




const UsersComponent  =() =>{
    const [users,setUsers] = useState<UserModel[]>([]);


    useEffect(() => {
        getAllUsers().then(({ data }) => {
            setUsers(data);
        }).catch(error => {
            console.error("Error getting users:", error);
        });
    }, []);

    return(
        <div>
            {users.map((user) => (<UserComponent key={user.id} user={user}/>))}

        </div>

    );
};
export default UsersComponent;



