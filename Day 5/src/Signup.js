import React from 'react';
import './Signup.css';
import {Link} from 'react-router-dom'

export default function Signup() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;

    // Check if all fields are filled
    if (!name || !email || !password) {
      alert('Please fill in all fields.');
      return;
    }

    // Check if the password is at least 8 characters long
    if (password.length < 8) {
      alert('Password must be at least 8 characters long.');
      return;
    }

    alert('Form submitted successfully.');
  };

  return (

    <div id='Signupbody'> 
      <div className="register-popUp">
        <div className="web-left">
          <header>
            <h1>Namaste!</h1>
            <div>Please create an account to start your journey</div>
          </header>
          <form onSubmit={handleSubmit} className="register">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="E-mail" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button type="submit">Create Account</button>
          </form>
          <div className="join-with-sns">
            <div></div>
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-google" />
            </a>
          </div>
          <div className="log-in">
            Already have an account?
            <Link to='/login'>
              Log In
              </Link>
          </div>
        </div>
        <div className="web-right"></div>
      </div>
    </div>
  );
}
