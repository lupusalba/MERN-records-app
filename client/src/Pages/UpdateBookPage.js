import { useParams } from 'react-router'
import UpdateBook from "../Components/UpdateBook"
import React from 'react'

const UpdateBookPage = () => {


  const { _id } = useParams();


  return (
    <div>
      {
        <UpdateBook bookID={_id} />
      }
    </div>
  )
}

export default UpdateBookPage
