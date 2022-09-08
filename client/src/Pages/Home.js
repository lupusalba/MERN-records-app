import Navigation from '../Components/Navigation'
import {Link} from 'react-router-dom'

const Home = () => {

  return (
    <div id="home">
      
      <div className="homeIntro">


        <div className="loginMenu">
          <Link 
            to="/login"
            className="login loginSignUp"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="login loginLogin"
          >
            Register
          </Link>
        </div>

        <h1>Welcome to Library</h1>





      </div>




    </div>
  )
}

export default Home
