import React from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    
     const naviagte = useNavigate();

     let clicking = () => {
        naviagte("/login")
     }


  return (
    <div className="signup-container">
      <label htmlFor="name">Enter Your Name:</label>
      <input type="text" name="" id="name" required/>

      <label htmlFor="mail">Enter mail Id:</label>
      <input type="mail" id='mail' required/>

      <label htmlFor="pass">Password:</label>
      <input type="password" id='pass' required/>

      <button onClick={clicking}>Sign Up</button>
    </div>
  )
}

export default Signup