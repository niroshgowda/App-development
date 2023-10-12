import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from './Redux/UserSlice'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Navbar() {
    const user = useSelector(selectUser);
   const username = user ? user.username : "Guest";

  return (
    <div>
    <nav className="navbar">
    <div className="navbar-container">
      <input type="checkbox" name="" id="checkbox" />
      <div className="hamburger-lines">
        <span className="line line1" />
        <span className="line line2" />
        <span className="line line3" />
      </div>
      <ul className="menu-items">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/aboutus">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <div className="logout">
        <a>{username}</a><br/>
      </div>
            <li>
      <div className="iconie">
      <FontAwesomeIcon icon={faUserCircle}/>
      </div>
      </li>
      </ul>
      <div className="logo">
        <img src="https://i.postimg.cc/D0h6S1tF/Screenshot-2023-09-20-110808.png" alt="logo" />
      </div>
    </div>
  </nav>
    </div>
  )
}

export default Navbar