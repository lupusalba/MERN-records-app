import React from 'react';
import { useContext } from 'react';
import Books from '../Components/Books'
import { UserContext } from '../context/UserInfoProvider'
import Navigation from '../Components/Navigation'

const UserPage = () => {
  const { userData, setUserData } = useContext(UserContext);

  return (
    <div className="page" id="user-page">
      <Navigation />
      <h3>Welcome users X!</h3>
    </div>
  )
}

export default UserPage
