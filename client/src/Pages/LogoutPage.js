import React from 'react'
import axiosPrivate from '../api/axios'
import Axios from 'axios'

const userLogout = async() => {
  try {
    const response = await Axios.get("http://localhost:8080/logout",
    {
      headers: { 'Content-Type': 'application/json'},
      withCredentials: true
    }
    );
  } catch (error) {
    console.error(error)
  }
}
userLogout();

const LogoutPage = () => {
  return (
    <div>
      logged out
    </div>
  )
}

export default LogoutPage
