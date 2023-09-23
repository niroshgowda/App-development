import React from 'react'
import './Admin.css'
import { Link} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './Redux/UserSlice';
export default function Admin() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout())};
  return (
    <div>
    <>
  <div className="primary-nav">
    <button href="#" className="hamburger open-panel nav-toggle">
      <span className="screen-reader-text">Menu</span>
    </button>
    <nav role="navigation" className="menu">
      <a href="#" className="logotype">
        MENU
      </a>
      <div className="overflow-container">
        <ul className="menu-dropdown">
          <li>
            <Link to="/">Home</Link>
            <span className="icon">
              <i className="fa fa-dashboard" />
            </span>
          </li>
          <li className="menu-hasdropdown">
            <a href="#">Photography galleries</a>
            <span className="icon">
              <i className="fa fa-gear" />
            </span>
            <Link to="/profile">Photographer profile</Link>
            <span className="icon">
              <i className="fa fa-heart" />
            </span>
          </li>
          <li>
            <a href="#">Travel Tips</a>
            <span className="icon">
              <i className="fa fa-envelope" />
            </span>
          </li>
          <li>
            <a href="#">Interactive maps</a>
            <span className="icon">
              <i className="fa fa-envelope" />
            </span>
          </li>
          <li>
            <a href="#">Photographer Resume</a>
            <span className="icon">
              <i className="fa fa-envelope" />
            </span>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
            <span className="icon">
              <i className="fa fa-envelope" />
            </span>
          </li>
          <li onClick={handleLogout}>
            <a href="#">Logout</a>
            <span className="icon">
              <i className="fa fa-envelope" />
            </span>
          </li>
        </ul>
      </div>
    </nav>
  </div>
  
</>

    </div>
  )
}
