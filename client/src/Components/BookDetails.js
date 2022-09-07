import {Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'

const BookDetails = (book) => {

  const deleteBook = () => {
    Axios.delete(`http://localhost:8080/delete-book/${book.book._id}`)
    navigate(-1)
  }

  const navigate = useNavigate()

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
        <Link to={`/update-book/${book.book._id}`} className="linkButton linkUpdate">Update</Link>
        <button onClick={() => { deleteBook()}} className="linkButton linkDelete">Delete</button>
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