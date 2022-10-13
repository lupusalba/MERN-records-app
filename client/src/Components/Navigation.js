import { Link } from "react-router-dom"
import { BiMenu, BiBookAdd, BiBookOpen, BiAdjust, BiUser } from "react-icons/bi";
import { useState } from "react";


const Navigation = () => {

  const [navToggle, setNavToggle] = useState(false);





  return (
    <div className="navigationContainer">
      <button id="navToggleBtn" onClick={(e) => setNavToggle(!navToggle)}>
        <BiMenu />
      </button>
      <nav id="navigation" className={navToggle ? "showNav" : "hideNav"}>
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
        {/* <Link className="navLink" to="/profile">
          <span>
            <BiUser />
          </span>
          Profile
        </Link> */}

        <Link to="/logout">
          Logout
        </Link>
      </nav>
    </div>
  )
}

export default Navigation
