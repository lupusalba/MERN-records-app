import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import UpdateBook from '../Components/UpdateBook'
import axiosPrivate from '../api/axios'



const BookPage = () => {

  const [oneBook, setOneBook] = useState({})

  const { id } = useParams();

  useEffect(() => {
    axiosPrivate.get(`http://localhost:8080/books/${id}`).then((res) => {
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
