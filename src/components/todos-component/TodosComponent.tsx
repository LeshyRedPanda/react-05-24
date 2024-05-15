import React, {FC, useEffect} from "react";
import {TodosResponseModel} from "../../models/response-models/TodosResponseModel";

interface IProps{
    userId:number
}

const TodosComponent:FC<IProps> = ({userId}) => {

    useEffect(()=>{
        fetch('https://dummyjson.com/todos/user/'+ userId)
            .then(res => res.json())
            .then((value:TodosResponseModel) => console.log(value.todos));
    },[userId])// continue at 01:20:00


    return(
        <div>

        </div>
    )
}



export default TodosComponent;





