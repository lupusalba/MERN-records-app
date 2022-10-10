import { Link } from "react-router-dom"
import { BiBookAdd, BiBookOpen, BiAdjust, BiUser } from "react-icons/bi";


const Navigation = () => {
  return (
      <nav id="navigation">
        {/* <button className="websiteMode">
        <span>
          <BiAdjust />
        </span>
          Mode
        </button> */}
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
          Logout
        </Link>
      </nav>
  )
}

export default Navigation
