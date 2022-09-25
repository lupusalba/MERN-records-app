import {Link} from 'react-router-dom'

import React from 'react'

const LinksTesting = () => {
  return (
    <div className="linkTesting">
      <Link to={`/login`}>login</Link>
      <Link to={`/logout`} >logout</Link>
      <Link to={`/register`}>register</Link>
      <Link to={`/unauthorized`} >Unathorized</Link>
      <Link to={`/books`} >Books</Link>
      <Link to={`/admin`} >admin</Link>
      <Link to={`/user`} >user</Link>
      <Link to={`/`} >home</Link>
    </div>
  )
}

export default LinksTesting
