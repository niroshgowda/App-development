import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBook, faTasks, faSignOutAlt, faComment, faCamera, faUserCircle } from '@fortawesome/free-solid-svg-icons'; // Import the correct icons
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './Redux/UserSlice';

export default function Dashboard() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };
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
          <Link to="/destination">Destination</Link>
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
        <div className='logout45'>
        <a className='guest23'>{username}</a></div>
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
                <Link to="/userprofile">
                  <FontAwesomeIcon icon={faUser} /> User's Profile 
                </Link>
              </div>
              <div className="widget-title2">
                <Link to="/account">
                  <FontAwesomeIcon icon={faUser} /> Account
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
              <div className="abc">
                <button onClick={handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt}/> Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
