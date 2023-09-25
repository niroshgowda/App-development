import React from 'react'
import { Link} from 'react-router-dom';
import './Home.css'
import Admin from './Admin'
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./Redux/UserSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer';
import { useState } from 'react';
export default function Home() {
  
  const user = useSelector(selectUser);
  const username = user ? user.username : "Guest";
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  
  return (
    <div>
    <>
    <Admin/>
  <section className=" top-txt ">
    <div className="head container ">
      <div className="head-txt ">
        <p>Take only pictures, leave only footprints.</p>
      </div>
      <div className="sing_in_up ">
        <p onClick={() => toggleMenu()}>LOGIN</p>
        <Link to='/signup'>SIGN UP</Link>
      </div>
    </div>
    {showMenu && (
      <div className="mobile-menu">
        <Link to="/login">User Login</Link>
        <Link to="/adminlogin">Admin Login</Link>
      </div>
    )}
  </section>
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
          <a to="#home">Home</a>
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
  <section id="home">
    <div className="home_page ">
      <div className="home_img ">
        <img src="https://images.wallpaperscraft.com/image/single/temple_mountains_lake_127937_1920x1080.jpg" alt="img " />
      </div>
      <div className="home_txt ">
        <p className="collection ">WANDERLENSES</p>
        <h2>
          LIVE TO TRAVEL.
          <br />
          TRAVEL TO LIVE.
        </h2>
        <div className="home_label ">
          <p>
            Welcome to our adventure, travel and
            <br />
            photography blog.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section id="sellers">
    <div className="seller container">
      <h2>Celebrate your story through photography</h2>
      <div className="best-seller">
        <div className="best-p1">
          <img src="https://lyndsayhannahphotography.com/wp-content/uploads/2020/03/lyndsayhannahphotography_bostonfamilyphotographer__1176-1024x689.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p> Travel<br>
              </br> Capture the magic of travel</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://images.unsplash.com/photo-1621354598022-16599af1b8b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hpbGRyZW4lMjBwbGF5aW5nfGVufDB8fDB8fHww&w=1000&q=80" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Hometown <br>
              </br>Preserve cherish memories</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://media.wired.com/photos/62166d6484b02e35168334b6/1:1/w_1853,h_1853,c_limit/Culture_AkilahTowsend---_0174-4.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Headshots <br>
              </br>Show the world who your are!</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://www.fearlessphotographers.com/images/posts/ufuk-sarisen-5664.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>Proposal<br>
              </br> Create a game plan and capture the moment</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="sellers">
    <div className="seller container">
      <h2>TRENDING RIGHT NOW</h2>
      <div className="best-seller">
        <div className="best-p1">
          <Link to="/paris"><img src="https://www.findingtheuniverse.com/wp-content/uploads/2016/04/Paris252520falling252520into252520dusk252520Eiffel252520Tower_by_Laurence252520Norah25255B425255D.jpg" alt="img" /></Link>
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>3 DAYS IN PARIS: THE PERFECT ITINERARY FOR YOUR FIRST VISIT</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <Link to="/rome"><img src="https://images.squarespace-cdn.com/content/v1/569e766e69492e9dd5373ef6/1556016297737-7BZLAV83VOV0BS9VQUQH/_ABX2402.jpg?format=2500w" alt="img" /></Link>
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>ROME BUCKET LIST: 40 EPIC THINGS TO DO IN ROME</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <Link to="/australia"><img src="https://i.guim.co.uk/img/media/beafff30837e4ea7f6dcc2eaa94b23878206c8a1/109_168_5245_3147/master/5245.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=96647581de1f24f3dc1a06017af85ace" alt="img" /></Link>
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>PLAN THE PERFECT ROAD TRIP OF THE AUSTRALIAN EAST COAST</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
        <Link to="/southkorea"><img src="https://www.insideasiatours.com/sites/default/files/2021-09/Gyeongbokgung%20Palace%20Overview%20header.jpg" alt="img" /></Link>
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>BEST PHOTOGRAPHY SPOTS IN SEOUL, SOUTH KOREA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div><Footer/></div>
</>
    </div>
  )
}
