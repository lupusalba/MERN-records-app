import { Link, useNavigate } from 'react-router-dom'
// import axiosPrivate from '../api/axios'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import React from 'react'


const BookDetails = (book) => {

  const axiosPrivate = useAxiosPrivate();
  let navigate = useNavigate();

  const deleteBook = async () => {
    try {
      const response = await axiosPrivate.delete(`/books`, { params: { _id: book.book._id } });
      console.log('deleted ' + book.book._id)
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }

  const dt = new Date(book.book.lastUpdated)
  const parsedDateTime = dt.toLocaleDateString() + " " + dt.toLocaleTimeString()

  return (
    <div className="bookDetailsWrapper">

      <div className="bookDetailsHeading">
        <p className="bookDetailsTitle">{book.book.title}</p>
        <p className="bookDetailsStatusLighter">{book.book.status}</p>
      </div>
      <div className="updateDelete">
        <button onClick={() => { deleteBook(); }} className="deleteBook">Delete</button>
      </div>

    {/* <div className="heroDataContainer"> */}
      <div className="largeHeroImageWrapper">
        <img className="largeHeroImage" src={book.book.heroImage} />
      </div>
      <div className="bookDetailsData">
        <div id="bookDetailsDescription">
          <span className="bigBold">Description</span>
          <p>{book.book.description}</p>
        </div>

        <div className="bookDetailsPartsContainer">
          <div id="bookDetailsParts">
            <span className="bold">
              {book.book.volumes === 0 ? "Chapters" : "Parts / Volumes"}
            </span>
            <p className="bookDetailsDataItem">{book.book.volumes === 0 ? book.book.chapters : book.book.volumes}</p>
          </div>
          <div id="bookDetailsLastUpdate">
            <span className="bold">Last Update</span>
            <p className="bookDetailsDataItem">{parsedDateTime}</p>
          </div>
        </div>

        <div id="bookAuthor">
          <span className="bold">Author</span>
          <p>{book.book.author}</p>
        </div>
        {
          book.book.links === 0 || book.book.links === "undefined" ? (
            <div id="myComment">
              {book.book.myComments === 0 || book.book.myComments === "undefined"}
              <span className="bold">My Components</span>
              <p className="bookDetailsDataItem">{book.book.myComment}</p>
            </div>) : ('')
        }

        {
          book.book.alternativeNames === 0 || book.book.alternativeNames === "undefined" ? (
            <div id="alternativeNames">
              <span className="bold">alternativeNames</span>
              <p className="bookDetailsDataItem">{book.book.alternativeNames}</p>
            </div>) : ('')
        }
        {
          book.book.tags === 0 || book.book.tags === "undefined" ? (
            <div id="tags">
              <span className="bold">tags</span>
              <p className="bookDetailsDataItem">{book.book.tags}</p>
            </div>) : ('')
        }
        {
          book.book.category === 0 || book.book.category === "undefined" ? (
            <div id="category">
              <span className="bold">category</span>
              <p className="bookDetailsDataItem">{book.book.category}</p>
            </div>
          ) : ('')
        }

        {
          book.book.links === 0 || book.book.links === "undefined" ? (
            <div id="links">
              <span className="bold">links</span>
              <p className="bookDetailsDataItem">{book.book.links}</p>
            </div>
          ) : ('')
        }





      </div>
{/* // </div> */}
    </div>
  )
}

export default BookDetails