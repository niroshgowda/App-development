import React, { useState } from "react";
import "./Adminlogin.css";
import { useDispatch  } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { login } from "./Redux/UserSlice"

function Adminlogin() {
  const handleChange = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
    console.log(formdata);
  };
  const [formdata, setFormdata] = useState({
    username: "",
    password: "",
  });

  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const nav=useNavigate();

  const handleLogin = () => {
    
      if (formdata.username === "admin" && formdata.password === "adminpassword") {
        alert("Admin login successful. Redirecting to admin dashboard...");
        nav("/dashboard")
      } else {
        setError("Invalid admin credentials. Please try again.");
      }
      dispatch(
        login({
          username: formdata.username,
        })
      );
    
  };
  const dispatch = useDispatch();
  

  return (
    <div className="login-container1">
      <div className="login-form">
        <h2>Admin Login</h2>
        {error && <p className="error">{error}</p>}
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
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
}

export default Adminlogin;
