import { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import AuthContext from '../../context/AuthProvider'




const LoginForm = () => {

  const {setAuth } = useContext(AuthContext);
  // const userRef = useRef();
  const emailRef = useRef();
  const errRef = useRef();


  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const LOGIN_URL = '/login'

  useEffect(() => {
    // useRef.current.focus();
    emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [email, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await Axios.post("http://localhost:8080/login",
        JSON.stringify({userEmail: email, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json'},
          //withCredentials: true
        }
      );

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ email, pwd, roles, accessToken });
      setSuccess(true);
      setPwd('');
      setUser('');
      console.log(JSON.stringify(response?.data));
      console.log(JSON.stringify(response));
    } catch (err) {
      if(!err?.response){
        setErrMsg('No Server Response')
      } else if(err.response?.status === 400) {
        setErrMsg('Missing Username or Password')
      } else if (err.response?.status === 401) {
        setErrMsg('Unathorized')
      } else {
        setErrMsg('Login Failed')
      }
      errRef.current.focus();
    }
  }

  return (
    <> {
      success ? (
        <div>
          <h1> You are logged in!</h1>
          <br />
          <p>
            <Link to="/home">Go To Home</Link>
          </p>
        </div>
      ) : (


        <div id="loginFormContainer">

          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Sign in</h1>

          <form id="loginForm" onSubmit={handleSubmit}>

            <label htmlFor="username">Email:</label>
            <input
              type="text"
              id="email"
              ref={emailRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />

            <button>Sign in</button>
          </form>

          <p>Need an Account?<br />
            <span className="line">
              <Link to="/register">Register</Link>
            </span></p>

        </div>
      )}
    </>
  )
}

export default LoginForm
