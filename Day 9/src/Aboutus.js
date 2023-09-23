import React from 'react'
import './Aboutus.css'
import Navbar from './Navbar'
function Aboutus() {
  return (
    <div>
    <Navbar/>
    <section className="about-section">
  <div className="container">
    <div className="row clearfix">
      {/*Content Column*/}
      <div className="content-column col-md-6 col-sm-12 col-xs-12">
        <div className="inner-column">
          <div className="sec-title">
            <div className="title">About Us</div>
            <h2>
              We Are The Leader In <br /> The Interiores
            </h2>
          </div>
          <div className="text">
          Hey guys,  Welcome to our travel photography and destination guide website! We are passionate about exploring the world's most stunning places and capturing their beauty through our lenses. Our mission is to inspire and assist fellow travelers in discovering new destinations and experiencing unforgettable moments.
          <br></br>
          Thanks so much for swinging by our little corner of the internet. We’re so stoked that you found our site and want to know a bit more about us. So grab your favourite drink, pull up a chair and let us fill you in on just what the hell we are about.
          What is this travel blog about?<br></br>
          <br></br><a>"Welcome to wanderlenses, where the world comes alive through the lens. Join me on a visual journey as I explore breathtaking destinations, capturing the beauty of our planet one click at a time. From hidden gems to well-trodden paths, my destination guides are your compass to unforgettable adventures. Let's wander, discover, and get lost in the stories that travel photography and exploration unveil."</a>
          </div>
          <div className="email">
            Email:{" "}
            <span className="theme_color">wanderlenses@gmail.com</span>
          </div>
        </div>
      </div>
      {/*Image Column*/}
      <div className="image-column col-md-6 col-sm-12 col-xs-12">
        <div
          className="inner-column "
          data-wow-delay="0ms"
          data-wow-duration="1500ms"
        >
          <div className="image">
            <img src="https://www.theblondeabroad.com/wp-content/uploads/2019/11/santorini-Greece-girl-.jpg" alt="" />
            <div className="overlay-box">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Aboutus