import React from 'react'
import './LoginForm.css';
import { FaUser, FaLock } from "react-icons/fa";
import projectTaskLogo from "./Assets-Logo/projectTaskLogo.png";

const LoginForm = () => {
  return (
    <div className='wrapper'>
      <form action=''>
        <img src={projectTaskLogo} alt="Project " />
        <div className='input-box'>
          <input type="text" placeholder='Username' required/>
          <FaUser className='icon'/>
        </div>
        <div className='input-box'>
          <input type="password" placeholder='Password' required/>
          <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
          <label > <input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>
        <button type='submit'>Login</button>
        <div className="register-link">
          <p>Don´t have an account? <a href="#">Register</a></p>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
