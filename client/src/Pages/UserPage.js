import React from 'react';
import { useContext } from 'react';
import Books from '../Components/Books'
import { UserContext } from '../context/UserInfoProvider'
import Navigation from '../Components/Navigation'

const UserPage = () => {


  const { userData, setUserData } = useContext(UserContext);

  //console.log("from userPage user data object " + JSON.stringify(userData));

  return (
    <div className="page" id="user-page">
    <aside>
    <Navigation />
    </aside>
      <section>
        <Books id={userData._id} />

      </section>



    </div>
  )
}

export default UserPage
