import React from 'react'
import axiosPrivate from '../api/axios'

function User({userID}){
  console.log(userID)



  return (
    <div>
      user profile {userID}

    </div>
  )
}

export default User
