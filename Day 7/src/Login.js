import React, { useState } from "react";
import { useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "./Redux/UserSlice"
import "./Login.css"; 
import {Link} from 'react-router-dom'

function Login() {
  

  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    nav("/welcome");
    dispatch(
      login({
        username: formdata.username,
      })
    );
  };
  const dispatch = useDispatch();
  const nav = useNavigate();

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form>
        <input
          type="text"
          placeholder="Email or Username"
          name="username"
          value={formdata.username}
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={formdata.password}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="loginbtn">Login</button>
        </form>
      <div className="account">Don't have an account?  <Link to='/signup'> Sign Up</Link></div>
      </div>
    </div>
  );
}

export default Login;
