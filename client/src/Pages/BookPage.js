import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import BookDetails from '../Components/BookDetails'
import UpdateBook from '../Components/UpdateBook'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import Navigation from '../Components/Navigation'

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


  const [showUpdate, setShowUpdate] = useState(false)


  return (
    <div className="page">
      <aside>
        <Navigation />
      </aside>
      <section>
        <BookDetails book={oneBook} />
        <div className="btnWrapper">
        <button className="updateBtn" onClick={(e) => setShowUpdate(!showUpdate)}>Update Book</button>
        </div>
        {showUpdate ? <UpdateBook book={oneBook} /> : ""}
      </section>

    </div>
  )
}

export default BookPage
