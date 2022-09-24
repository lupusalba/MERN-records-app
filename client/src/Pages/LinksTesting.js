import {Link} from 'react-router-dom'

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
