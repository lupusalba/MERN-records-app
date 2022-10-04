import { Link } from "react-router-dom"
import { BiBookAdd, BiBookOpen, BiAdjust, BiUser } from "react-icons/bi";


const Navigation = () => {
  return (
    <div className="navWrapper">
      <nav id="Navigation">
        <Link className="navLink" to="/books">
          <span>
            <BiBookOpen />
          </span>
          Collection
        </Link>
        <Link className="navLink" to="/new-book">
          <span>
            <BiBookAdd />
          </span>
          New Book
        </Link>
        <Link className="navLink" to="/profile">
          <span>
            <BiUser />
          </span>
          Profile
        </Link>

        <Link to="/logout">
          <span>
            <BiAdjust />
          </span>
          Logout
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
