import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
   
    <div id="bodys">
    <link
    href="https://fonts.googleapis.com/css?family=Ubuntu:500"
    rel="stylesheet"
    type="text/css"
  />
  
  <div className="login">
    <div className="login-header">
      <h1>Login</h1>
    </div>
    <div className="login-form">
      <h3>Username:</h3>
      <input  type="text" placeholder="Username" />
      <br />
      <h3>Password:</h3>
      <input  type="password" placeholder="Password" />
      <br />
      <input  type="button" defaultValue="Login" className="login-button" />
      <h1>Doesn't have account</h1>
      <br />
      <Link to="/signup"><div className="signup">Sign Up!</div></Link>
      <br />
      
    </div>
  </div>
  
  </div>
    
  )
}