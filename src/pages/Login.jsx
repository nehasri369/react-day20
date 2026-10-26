import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  let navigate = useNavigate();

  let clicking = () => {
    navigate("/")
  }
  return (
    <div className="login-container">
      

      <label htmlFor="mail">Enter mail Id:</label>
      <input type="mail" id='mail' />

      <label htmlFor="pass">Password:</label>
      <input type="password" id='pass'/>

      <button onClick={clicking}>Log In</button>
    </div>
  )
}

export default Login 