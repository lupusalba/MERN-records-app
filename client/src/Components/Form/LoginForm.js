import { useState, useEffect, useRef } from 'react'
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';


const LoginForm = () => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handelChange = () => {
    console.log('change')
  }
  
  return (
    <div id="loginFormContainer">
      <h1>Login</h1>
      <form id="loginForm">
        <label htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handelChange}
          className="loginInput"
        />

      <label htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handelChange}
          className="loginInput"
        />
        <button className="loginBtn">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
