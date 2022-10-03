import { Link, useNavigate } from 'react-router-dom'
// import axiosPrivate from '../api/axios'
import useAxiosPrivate from '../hooks/useAxiosPrivate'
import React from 'react'


const BookDetails = (book) => {

  const axiosPrivate = useAxiosPrivate();
  let navigate = useNavigate();

  console.log(book)


  const deleteBook = async () => {
    try {
      const response = await axiosPrivate.delete(`/books`, { params: { _id: book.book._id } });
      console.log('deleted ' + book.book._id)
      navigate(-1)
    } catch (err) {
      console.log(err)
    }
  }


  const tags = book.book.tags
  const categories = book.book.category
  const links = book.book.links
  const altNames = book.book.alternativeNames


  return (
    <div className="bookDetailsWrapper">

      <div className="bookDetailsHeading">
        <p className="bookDetailsTitle">{book.book.title}</p>
        <p className="bookDetailsStatus lighter">{book.book.status}</p>
      </div>
      <div className="updateDelete">
        <button onClick={() => { deleteBook(); }} className="linkButton linkDelete">Delete</button>
      </div>

      <div className="largeHeroImageWrapper">
        <img className="largeHeroImage" src={book.book.heroImage} />
      </div>
      <div className="bookDetailsData">
        <div className="bookDetailsDescription">
          <span className="bigBold">Description</span>
          <p>{book.book.description}</p>
        </div>

        <div className="bookDetailsPartsContainer">
          <div className="bookDetailsParts">
            <span className="bold">
              {book.book.volumes === 0 ? "Chapters" : "Parts / Volumes"}
            </span>
            <p>{book.book.volumes === 0 ? book.book.chapters : book.book.volumes}</p>
          </div>
          <div className="bookDetailsLastUpdate">
            <span className="bold">Last Update</span>
            <p>{book.book.lastUpdate}</p>
          </div>
        </div>

        <div id="bookAuthor">
          <span className="bold">Author</span>
          <p>{book.book.author}</p>
        </div>

        <div className="myComment">
          <span className="bold">My Components</span>
          <p>{book.book.myComments}</p>
        </div>

        <div className="alternativeNames">
          <span className="bold">alternativeNames</span>
          <p>{altNames}</p>
        </div>

        <div className="tags">
          <span className="bold">tags</span>
          <p>{tags}</p>
        </div>

        <div className="category">
          <span className="bold">category</span>
          <p>{categories}</p>
        </div>

        <div className="links">
          <span className="bold">links</span>
          <p>{links}</p>
        </div>





      </div>

    </div>
  )
}

export default BookDetails