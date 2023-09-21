import React from 'react'
import { Link} from 'react-router-dom';
import './Home.css'
import Admin from './Admin'
export default function Home() {
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
        <Link to='/login'>
        Login
        </Link>
        <Link to='/signup'>SIGN UP</Link>
      </div>
    </div>
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
      <h2>TRENDING RIGHT NOW</h2>
      <div className="best-seller">
        <div className="best-p1">
          <img src="https://images.unsplash.com/photo-1564594736624-def7a10ab047?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>3 DAYS IN PARIS: THE PERFECT ITINERARY FOR YOUR FIRST VISIT</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://www.onegirlwholeworld.com/wp-content/uploads/2020/02/rome_photo_spots_IMG_1882.jpeg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>ROME BUCKET LIST: 40 EPIC THINGS TO DO IN ROME</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://i.guim.co.uk/img/media/beafff30837e4ea7f6dcc2eaa94b23878206c8a1/109_168_5245_3147/master/5245.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=96647581de1f24f3dc1a06017af85ace" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>PLAN THE PERFECT ROAD TRIP OF THE AUSTRALIAN EAST COAST</p>
            </div>
          </div>
        </div>
        <div className="best-p1">
          <img src="https://www.insideasiatours.com/sites/default/files/2021-09/Gyeongbokgung%20Palace%20Overview%20header.jpg" alt="img" />
          <div className="best-p1-txt">
            <div className="name-of-p">
              <p>BEST PHOTOGRAPHY SPOTS IN SEOUL, SOUTH KOREA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <footer>
    <div className="footer-container container">
      
      <div className="content_2">
        <h4>ABOUT</h4>
        <Link to="/login">Start Here</Link>
        <a href="#aboutus">About us</a>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="content_3">
        <h4>EXPLORE & RESOURCES</h4>
        <Link to="/destination">Destination</Link>
        <Link to="/gallery">Photographic galleries</Link>
        <Link to="/tips">Travel tips</Link>
      </div>
      <div className="content_4">
        <h4>SUBSCRIPTION NEWLETTER</h4>
        <p>
          Be the first to know about latest
          <br />
          travel guides,photography tips and featured destinations.
        </p>
        <div className="f-mail">
          <input type="email" placeholder="Your Email" />
          <i className="bx bx-envelope" />
        </div>
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt container">
        <p>Terms and condition   | Privacy policy   | FAQ </p>
      </div>
    </div>
  </footer>
</>
    </div>
  )
}
