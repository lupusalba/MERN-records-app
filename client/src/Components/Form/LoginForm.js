import React from 'react'
import axiosPrivate from '../../api/axios'
import { useState, useEffect, useRef, useContext } from 'react'
import useAuth from '../../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom'
//import Axios from 'axios'
import { UserContext } from '../../context/UserInfoProvider'




const LoginForm = () => {

  const { setAuth } = useAuth();
  const { userData, setUserData } = useContext(UserContext)

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();


  const [userName, setUserName] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');

  const LOGIN_URL = '/login'

  useEffect(() => {
    userRef.current.focus();
    // emailRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [userName, pwd])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosPrivate.post(`/login`,
        JSON.stringify({ userName: userName, password: pwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true
        }
      );


      console.log(JSON.stringify(response?.data));
      

      setUserData(response?.data?.userPublicData);

      const userID = response?.data?.userPublicData._id
      console.log(userID);


      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;

      setAuth({ userName, pwd, roles, accessToken });
      setPwd('');
      setUserName('');

      navigate(`/profile`, { replace: true });

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

        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
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

        <button type="submit">Sign in</button>
      </form>

      <p>Need an Account?<br />
        <span className="line">
          <Link to="/register">Register</Link>
        </span></p>

    </div>

  )
}

export default LoginForm
