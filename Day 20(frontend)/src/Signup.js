import React, { useState } from 'react';
import './Signup.css';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

function Signup() {
  const nav=useNavigate();
  const[name,setName]=useState('');
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[conPassword,setConPassword]=useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    conPassword: '',
    terms: '',
  });


  const handleInputChange = (field, value) => {
    setFormErrors({ ...formErrors, [field]: '' });
    switch (field) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'conPassword':
        setConPassword(value);
        break;
      default:
        break;
    }
  };

  const validate = (e) => {
    e.preventDefault();
    const errors = {};

    if (name.length === 0) {
      errors.name = 'Name is required';
    }

    if (email.length === 0) {
      errors.email = 'Email is required';
    }

    if (password.length === 0) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    if (conPassword.length === 0) {
      errors.conPassword = 'Confirm Password is required';
    } else if (password !== conPassword) {
      errors.conPassword = 'Passwords do not match';
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setFormErrors({
        name: '',
        email: '',
        password: '',
        conPassword: '',
        terms: '',
      });

      
      const user = {
        role: 'user',
        name,
        email,
        password: password, 
      };

      console.log("user data",user)
     axios.post("http://localhost:9000/auth/register", user)
  .then(response => {
    alert("User Registered! Kindly Login to proceed")
    console.log("Response from user",response.data)
    nav("/login")
    
  })
  .catch(error => {
   alert(error.response.data)
  });
      
    }
  };
  return (
    <div className="register-container">
      <div className="register-form">
        <h2>Register</h2>
        <form >
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(e) => handleInputChange('name', e.target.value)}
             
            />
            {formErrors.name && <p className="error">{formErrors.name}</p>}
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={(e) => handleInputChange('email', e.target.value)}   
             
            />
            {formErrors.email && <p className="error">{formErrors.email}</p>}
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={(e) => handleInputChange('password', e.target.value)} 
             
            />
            {formErrors.password && <p className="error">{formErrors.password}</p>}
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="conPassword"
              onChange={(e) => handleInputChange('conPassword', e.target.value)}
            />
            {formErrors.conPassword && (<p className="error">{formErrors.conPassword}</p>)}
          </div>
          <Link to="/login"><button onClick={validate} type="submit">Sign Up</button></Link>
          <Link to="/login"><div className='already'>Already have an account? Login</div></Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
