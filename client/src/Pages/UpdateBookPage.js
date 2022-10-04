import { useParams } from 'react-router'
import UpdateBook from "../Components/UpdateBook"
import React from 'react'
import Navigation from '../Components/Navigation'
const UpdateBookPage = () => {


  const { _id } = useParams();


  return (
    <div>
    
    <Navigation />
      {
        <UpdateBook bookID={_id} />
      }
    </div>
  )
}

export default UpdateBookPage
