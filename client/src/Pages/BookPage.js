import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import NewBook from '../Components/NewBook'
import UpdateBook from '../Components/UpdateBook'
import Axios from 'axios'



const BookPage = () => {

  const [oneBook, setOneBook] = useState({})

  const { id } = useParams();

  useEffect(() => {
    Axios.get(`http://localhost:8080/books/${id}`).then((res) => {
      setOneBook(res.data.data.oneBook)
      
    })
  }, [])





  return (
    <div className="BookPage">

      <BookDetails book={oneBook}/>

      <UpdateBook book={oneBook}/>
      


    </div>
  )
}

export default BookPage
