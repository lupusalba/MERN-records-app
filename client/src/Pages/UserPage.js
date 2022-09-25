
import User from '../Components/User';
import {useParams} from 'react-router-dom';
import React from 'react';


const UserPage = () => {

  let { email } = useParams();
  console.log(email);

  return (
    <div>
      <h1>User Profile</h1>
      <User />
    </div>
  )
}

export default UserPage
