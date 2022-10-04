import { Link } from "react-router-dom"
import useAxiosPrivate from "../hooks/useAxiosPrivate";

import { BiBookAdd, BiBookOpen, BiAdjust, BiUser } from "react-icons/bi";

const Logout = async () => {

  console.log("logout");

  const axiosPrivate = useAxiosPrivate();

  try {
    const response = await axiosPrivate.get("/logout",
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      }
    );
  } catch (err) {
    console.log(err)
  }


}

const Navigation = () => {
  return (
    <div className="navWrapper">



      <button className="menuIcon"> show menu</button>
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

        <button id="logout-btn" onClick={(e) => Logout()}>
          <span>
            <BiAdjust />
          </span>
          Logout
        </button>
      </nav>
    </div>
  )
}

export default Navigation
