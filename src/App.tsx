import React, {FC, useState} from 'react';
import './App.css';

import UsersComponent from "./components/users/UsersComponent";
import PostsComponent from "./components/posts/PostsComponent";
import {getAllSinglePost} from "./services/jpg.api.service";
import {PostModel} from "./models/postModel";
import userComponent from "./components/user/UserComponent";

const App: FC = () => {
    const [posts,setPosts] = useState<PostModel[]>([])
    const lift =(userId:number) => {
        getAllSinglePost(userId).then(({data}) =>{
            setPosts(data)
        })

        // console.log(userId)
        }

  return (
      <div className={'App'}>
          <div className={'users'}><UsersComponent lift={lift}/></div>
          <div className={'posts'}>
              <PostsComponent posts={posts}/>
          </div>
          
      </div>

  );
}

export default App;