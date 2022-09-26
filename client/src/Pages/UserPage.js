
import User from '../Components/User';
import {useParams} from 'react-router-dom';
import React from 'react';
import Books from '../Components/Books'
import NewBook from '../Components/NewBook'

const UserPage = () => {

  let { userID } = useParams();
  console.log(userID);



  return (
    <div>
      <h1>User Page</h1>
      <User userID={userID}/>
      <Books id={userID} />
      <NewBook userID={userID}/>
    </div>
  )
}

export default UserPage
