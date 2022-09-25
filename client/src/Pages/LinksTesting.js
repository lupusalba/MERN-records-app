import {Link} from 'react-router-dom'

import React from 'react'

const LinksTesting = () => {
  return (
    <div className="linkTesting">
      <Link to={`/login`}>login</Link>
      <Link to={`/register`}>register</Link>
      <Link to={`/unauthorized`} >Unathorized</Link>
      <Link to={`/books`} >Books</Link>
      <Link to={`/admin`} >admin</Link>
      <Link to={`/users`} >user</Link>
    </div>
  )
}

export default LinksTesting
