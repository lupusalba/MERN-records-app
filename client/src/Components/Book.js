import { Link } from 'react-router-dom'

const Book = (book) => {
  const dt = new Date(book.book.lastUpdated);
  const parsedDate = dt.toLocaleDateString();
  let heroImage = book.book.heroImage;
  return (
    <div className="book">
      <Link to={`/books/${book.book._id}`} className="bookLink">

        <div className="heroWrapper">
          {
            heroImage
            ?
            (
              <img className="heroImage" alt="img" src={book.book.heroImage} />
            )
            : 
            (
              <div className="noHeroTitle">
                <p className="rotation">
                  {book.book.title}
                </p>
              </div>
            )
          }

        </div>

        <div className="infoWrapper">

          <div className="topInfo">
            <span className="status">{book.book.status}</span>
            <span className="lastUpdated">{parsedDate}</span>
          </div>

          <div className="bottomInfo">
            <span className="title">{book.book.title}</span>
            <span className="author">{book.book.author}</span>
          </div>

        </div>
      </Link>
    </div>
  )
}

export default Book