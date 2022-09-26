
import User from '../Components/User';
import {useParams} from 'react-router-dom';
import React from 'react';
import Books from '../Components/Books'

const UserPage = () => {

  let { userID } = useParams();
  console.log(userID);



  return (
    <div>
      <h1>User Profile</h1>
      <User userID={userID}/>
      <Books id={userID} />
    </div>
  )
}

export default UserPage
