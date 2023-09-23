import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { selectUser } from './Redux/UserSlice'

function Navbar() {
//     const user = useSelector(selectUser);
//    const username = user ? user.username : "Guest";

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
          <a href="#destination">Destination</a>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <a href="#dashboard">About us</a>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
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