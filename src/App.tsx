import React, {FC, useState} from 'react';
import './App.css';
import UsersComponent from "./components/users-component/UsersComponent";
import TodosComponent from "./components/todos-component/TodosComponent";

const App: FC = () => {
    const [userId,setUserId] = useState<number>(0)
    console.log(userId)
    const chooseUser =(id:number) =>{
    console.log(id)
    }
  return (
      <>
          <UsersComponent chooseUser={chooseUser} />
          <TodosComponent userId={userId}/>
          {
              !!userId && <TodosComponent userId={userId}/>
          }


      </>

  );
}

export default App;