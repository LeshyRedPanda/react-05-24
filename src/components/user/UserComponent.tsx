import React,{FC} from 'react';
import {UserModel} from "../../models/userModel";

interface IProps{
    user:UserModel;
}

type IPropsType = IProps & {lift?:(userId:number) => void};

const UserComponent:FC<IPropsType> = ({user,lift}) => {
        const onClickHandler = () => {
                if (lift) {
                        lift(user.id);
                }
        };
        return(
      <div>
          <ul>
                  <li>id : {user.id}</li>
                  <li>name : {user.name}</li>
                  <li>user name : {user.username}</li>
                  <li>email : {user.email}</li>

                  <li>Address :</li>
                  <li>street : {user.address.street}</li>
                  <li>suite : {user.address.suite}</li>
                  <li>city : {user.address.city}</li>
                  <li>zipcode : {user.address.zipcode}</li>

                  <li>Geo:</li>
                  <li>lat : {user.address.geo.lat}</li>
                  <li>lng : {user.address.geo.lng}</li>

                  <li>phone : {user.phone}</li>
                  <li>website : {user.website}</li>


                  <li>Company :</li>
                  <li>Company name : {user.company.name}</li>
                  <li>catch phrase : {user.company.catchPhrase}</li>
                  <li>bs : {user.company.bs}</li>

          </ul>
              <button className={'postsBtn'} onClick={onClickHandler}>show user posts</button>
              <hr/>

      </div>
  );
};

export default UserComponent;