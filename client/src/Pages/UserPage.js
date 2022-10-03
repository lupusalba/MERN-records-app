import React from 'react';
import {useParams} from 'react-router-dom';
import User from '../Components/User';
import Books from '../Components/Books'
import NewBook from '../Components/NewBook'
import Navigation from '../Components/Navigation'

const UserPage = () => {

  let { userID } = useParams();
  console.log(userID);



  return (
    <div className="page" id="user-page">
      <Navigation />
      <h1>User Page</h1>
      <User userID={userID}/>
      <Books id={userID} />
      <NewBook userID={userID}/>
    
    </div>
  )
}

export default UserPage
