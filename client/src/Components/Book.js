import {Link} from 'react-router-dom'
import React from 'react'

const Book = (book) => {
  return (
    <Link to={`/book/${book.book._id}`} className="book">

      <div className="heroWrapper">
        <img className="heroImage" alt="img" src={book.book.heroImage} />
        <div className="topInfo">
          <p>
            <span className="status">{book.book.status}</span>
            <span className="lastUpdated">{book.book.lastUpdated}</span>
          </p>
        </div>
      </div>
      <div className="infoWrapper">
        
        <div className="bottomInfo">
          <p>
            <span className="title">{book.book.title}</span>
            <span className="author">{book.book.author}</span>
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Book