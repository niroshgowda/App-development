import React from 'react'
import './Admin.css'
import { Link, useNavigate} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from './Redux/UserSlice';
export default function Admin() {
  const nav=useNavigate();
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("token");
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
              <i className="" />
            </span>
          </li>
          <li className="menu-hasdropdown">
            <Link to="/gallery">Photography galleries</Link>
            <span className="icon">
              <i className="" />
            </span>
            <Link to="/profile">Photographer profile</Link>
            <span className="icon">
              <i className="" />
            </span>
          </li>
          <li>
            <Link to="/tips">Travel Tips</Link>
            <span className="icon">
              <i className="" />
            </span>
          </li>
          <li>
            <Link to="/userprofile">Create UserProfile</Link>
            <span className="icon">
              <i className="" />
            </span>
          </li>
          <li>
            <Link to="/feedback">Feedback</Link>
            <span className="icon">
              <i className="" />
            </span>
          </li>
          <li onClick={handleLogout}>
            <Link to="/">Logout</Link>
            <span className="icon">
              <i className="" />
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
