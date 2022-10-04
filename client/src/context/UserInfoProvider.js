import React from 'react'
import { useState, createContext } from 'react';

export const UserContext = createContext();

export const UserInfoProvider = ({children}) => {
  const [userData, setUserData] = useState({});

  return (
    <UserContext.Provider value={{ userData, setUserData }} >
      {children}
    </UserContext.Provider>
  );
};

