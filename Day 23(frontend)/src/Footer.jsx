import React from 'react'
import './Home.css'
import { Link} from 'react-router-dom';
function Footer() {
  return (
    <div>
    
  <footer>
    <div className="footer-container container">
      
      <div className="content_2">
        <h4>ABOUT</h4>
        <Link to="/login">Start Here</Link>
        <a href="/aboutus">About us</a>
        <Link to="/contact">Contact us</Link>
      </div>
      <div className="content_3">
        <h4>EXPLORE & RESOURCES</h4>
        <Link to="/profile">Photographer profile's</Link>
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
        <hr />
      </div>
    </div>
    <div className="f-design">
      <div className="f-design-txt container">
        <p className='terms'><Link to="/terms_condition" style={{textDecoration:'none',color:"inherit"}}>Terms and conditions </Link></p>  
        <Link to="/privacypolicy" style={{textDecoration:'none',color:"inherit"}}> | Privacy Policy </Link>
        <Link to="/faq" style={{textDecoration:'none',color:"inherit"}}> | FAQ</Link>
      </div>
    </div>
  </footer>
  </div>
  )
}

export default Footer