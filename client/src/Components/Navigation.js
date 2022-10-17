import { Link } from "react-router-dom";
import { BiMenu, BiBookAdd, BiBookOpen, BiAdjust, BiUser } from "react-icons/bi";
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Navigation = () => {

  const { setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const logout = async () => {
    // if used in more components, this should be in context 
    // axios to /logout endpoint 
    setAuth({});
    navigate('/');
}

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

        <button onClick={(e) => logout()}>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Navigation
