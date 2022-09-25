import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import Axios from 'axios'

import React from 'react'


const BookPage = () => {

  const [oneBook, setOneBook] = useState({})

  const { _id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:8080/book/${_id}`).then((res) => {
      setOneBook(res.data.data.oneBook)
      
    })
  }, [])





  return (
    <div className="BookPage">

      <BookDetails book={oneBook}/>
      



    </div>
  )
}

export default BookPage
