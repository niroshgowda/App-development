import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import {  setRole, setToken, setemail } from './LocalStorage';
import { login } from "./Redux/UserSlice"
import "./Login.css"; 
import {Link} from 'react-router-dom'
import axios from 'axios';

function Login() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [formErrors, setFormErrors] = useState({
    email: '',
    password: '',
  });

  const submithandler = (e) => {
    e.preventDefault();
    if(email&&password)
    {
      alert("Fill all required rows")
    }
    else
    nav("/");
    dispatch(
      login(email)
    );
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    } else {
      setFormErrors({
        email: '',
        password: '',
      });

      const userCredentials = {
        email: email,
        password: password
      };
      axios.post("http://localhost:8080/auth/login",userCredentials).then(response=>{
        const token=response.data.token;
        if (token) {
          setToken(token)
          setemail(userCredentials.email);
          const userType=response.data.role;
          setRole(userType)
              if(userType=="USER"){
                nav("/");
              }
              else if(userType==="ADMIN"){
                nav('/dashboard')
              }
              else if(userType=="PHOTOGRAPHER"){
                nav('/')
              }
              else {
                alert("Invalid user role");
              }
            } else {
              alert("Invalid token. Please try again.");
            }
      }).catch(error=>{
        alert(error.response.data)
     
      })
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setFormErrors({ ...formErrors, email: '' });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setFormErrors({ ...formErrors, password: '' });
  };


  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={submithandler}>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleEmailChange}
          required
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handlePasswordChange}
          required
        />
        {formErrors.password && <p className="error">{formErrors.password}</p>}
        <button onClick={validate} className="loginbtn">Login</button>
        </form>
      <div className="account">Don't have an account?  <Link to='/signup'> Sign Up</Link></div>
      </div>
    </div>
  );
}

export default Login;
