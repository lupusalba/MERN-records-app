
import User from '../Components/User';
import {useParams} from 'react-router-dom';
import React from 'react';
import Axios from 'axios';

const UserPage = () => {

  let { userID } = useParams();
  console.log(userID);



  return (
    <div>
      <h1>User Profile</h1>
      <User userID={userID}/>
    </div>
  )
}

export default UserPage
