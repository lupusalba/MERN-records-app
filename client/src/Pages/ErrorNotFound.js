import { Link } from "react-router-dom"

const ErrorNotFound = () => {
  return (
    <div id="notFoundPage">
      <p className="errorCode">404</p>
      <p className="errorName">Page Not Found</p>
      <Link id="goHome" to="/books">Go To Home Page</Link>
    </div>
  )
}

export default ErrorNotFound
