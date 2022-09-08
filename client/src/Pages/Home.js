import Navigation from '../Components/Navigation'
import LoginForm from '../Components/Form/LoginForm'
import RegisterForm from '../Components/Form/RegisterForm'

const Home = () => {

  const toggleLogin = () => {
    console.log('toggle login')
    let loginContainer = document.querySelector('#loginFormContainer')
    if (loginContainer.style.display === 'block') {
      loginContainer.style.display = 'none'
    } else {
      loginContainer.style.display = 'block'
    }
  }

  const toggleRegister = () => {
    console.log('toggle register')
    let registerContainer = document.querySelector('#registerFormContainer')
    if (registerContainer.style.display === 'block') {
      registerContainer.style.display = 'none'
    } else {
      registerContainer.style.display = 'block'
    }
  }

  return (
    <div id="home">
      
      <div className="homeIntro">


        <div className="loginMenu">
          <button
            className="login loginSignUp"
            onClick={toggleLogin}
          >Login</button>
          <button
            className="login loginLogin"
            onClick={toggleRegister}
          >Register</button>
        </div>

        <h1>Welcome to Library</h1>


        <LoginForm />
        <RegisterForm />


      </div>




    </div>
  )
}

export default Home
