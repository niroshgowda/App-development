import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faTasks, faSignOutAlt, faComment, faCamera } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons
import './Dashboard.css';
import { Link } from 'react-router-dom';

export default function Dashboard() {
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
      <div className="Adminback">
        <div className="dashboard-container">
          <header>
            <h3>Dashboard</h3>
          </header>
          <div className="sidebar-content">
            <div className="widget">
              <div className="widget-title1">
                <Link to="/profile">
                  <FontAwesomeIcon icon={faUser} /> Profile
                </Link>
              </div>
              <div className="widget-title2">
                <Link to="/gallery">
                  <FontAwesomeIcon icon={faBook} /> Gallery
                </Link>
              </div>
              <div className="widget-title3">
                <Link to="/analyses">
                  <FontAwesomeIcon icon={faTasks} /> Analyses
                </Link>
              </div>
              <div className="widget-title4">
                <Link to="/review">
                  <FontAwesomeIcon icon={faComment} /> Review
                </Link>
              </div>
              <div className="widget-title5">
                <Link to="/logout">
                  <FontAwesomeIcon icon={faSignOutAlt} /> Logout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
