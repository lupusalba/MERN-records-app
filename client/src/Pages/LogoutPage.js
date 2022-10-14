import React from 'react'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const LogoutPage = async () => {

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(async () => {

    try {
      const response = await axiosPrivate.get(`/logout`,
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );
      navigate('/', { replace: true });
    } catch (err) {
      console.log(err)
    }

  }, [])

  return (
    <div>
      logged out
    </div>
  )
}

export default LogoutPage
