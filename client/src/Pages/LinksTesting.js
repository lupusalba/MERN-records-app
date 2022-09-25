import {Link} from 'react-router-dom'

import React from 'react'

const LinksTesting = () => {
  return (
    <div>
      <Link to={`/login`} />
      <Link to={`/register`} />
      <Link to={`/unauthorized`} />
      <Link to={`/books`} />
    </div>
  )
}

export default LinksTesting
