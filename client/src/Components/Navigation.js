import {Link} from "react-router-dom"

import React from 'react'

const Navigation = () => {
  return (
    <div className="navWrapper">
    <button className="menuIcon">Toggle menu</button>
    <nav className="navigation" id="menu">
      <Link className="navLink" to="/books">Library</Link>
    </nav>
  </div>
  )
}

export default Navigation
