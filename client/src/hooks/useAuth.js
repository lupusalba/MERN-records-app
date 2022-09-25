import { useContext } from 'react'
import AuthProvider from '../context/AuthProvider'

import React from 'react'

const useAuth = () => {
  return useContext(AuthProvider)
}

export default useAuth;