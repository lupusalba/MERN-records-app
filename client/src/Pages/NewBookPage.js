import NewBook from "../Components/NewBook"
import { useParams } from "react-router-dom"

import React from 'react'

// const NewBookPage = ({userID}) => {
const NewBookPage = () => {

  const userID = useParams();
  console.log("from useParams newBookPage "+ JSON.stringify(userID))

  return (
    <div className="newBookPage">
      <NewBook userID={userID}/>
    </div>
  )
}

export default NewBookPage
