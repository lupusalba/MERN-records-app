import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import UpdateBook from '../Components/UpdateBook'
//import axiosPrivate from '../api/axios'
import useAxiosPrivate from '../hooks/useAxiosPrivate'


const BookPage = () => {

  const axiosPrivate = useAxiosPrivate();

  const [oneBook, setOneBook] = useState({})

  const { id } = useParams();
console.log("from bookpage: " + id)
  useEffect(() => {
    axiosPrivate.get(`/books/${id}`).then((res) => {
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
