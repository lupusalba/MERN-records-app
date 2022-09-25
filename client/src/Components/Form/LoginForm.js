import { useState, useEffect, useRef } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Axios from 'axios'

import React from 'react'




const LoginForm = () => {

  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();


  const [username, setUserName] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const LOGIN_URL = '/login'

  useEffect(() => {
    userRef.current.focus();
    // emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await Axios.post("http://localhost:8080/login",
        JSON.stringify({ userName: username, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );


      console.log(JSON.stringify(response?.data));
      

      const userID = response?.data?.userPublicData._id
      console.log(userID);

      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ username, pwd, roles, accessToken });
      setPwd('');
      setUserName('');

      navigate(`/user/${userID}`, { replace: true });

      console.log(JSON.stringify(response));

    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response')
      } else if (err.response?.status === 400) {
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

    <div id="loginFormContainer">

      <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign in</h1>

      <form id="loginForm" onSubmit={handleSubmit}>

        {/* <label htmlFor="username">Email:</label>
        <input
          type="text"
          id="email"
          ref={emailRef}
          autoComplete="off"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          required
        /> */}

        <label htmlFor="username">username:</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={username}
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

  )
}

export default LoginForm
