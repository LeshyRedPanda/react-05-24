import React, {FC} from 'react';
import './App.css';
// import UserComponent from "./components/user/UserComponent";
import UsersComponent from "./components/users/UsersComponent";
// import PostsComponent from "./components/posts/PostsComponent";

const App: FC = () => {
  return (
      <div>
          <UsersComponent/>
          {/*<PostsComponent/>*/}


      </div>

  );
}

export default App;