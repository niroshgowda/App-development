import React from 'react'
import { Link} from 'react-router-dom';
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './Admin';
import Navbar from './Navbar';

function Profile() {
  return (
    <div>
    <Admin/>
    <Navbar/>
    <>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
  />
  <h3 className='pp'>
            Photographers Profile
          </h3>
          <p className='ppa'>
          A travel photographer must  know landscape, architecture, street, and environmental photography.
          </p>
  <div className="container123">
    <div className="row justify-content-center">
      <div className="col-12 col-sm-8 col-lg-6">
        {/* Section Heading*/}
        <div
          className="section_heading text-center wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          <div className="line" />
        </div>
      </div>
    </div>
    <div className="row">
      {/* Single Advisor*/}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.2s"
          style={{
            visibility: "visible",
            animationDelay: "0.2s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}<Link to="/profile1">
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/rwyJN8gW/soci-1.webp"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div></Link>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Luice Lilly</h6>
            <p className="designation">Photographer at Behance</p>
          </div>
        </div>
      </div>
      {/* Single Advisor*/}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.3s"
          style={{
            visibility: "visible",
            animationDelay: "0.3s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}<Link to="/profile2">
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/cCgqHRtx/wert.jpg"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          </Link>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Katrina</h6>
            <p className="designation">Wedding Photography</p>
          </div>
        </div>
      </div>
      {/* Single Advisor*/}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.4s"
          style={{
            visibility: "visible",
            animationDelay: "0.4s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}<Link to="/profile3">
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/HWydTmwQ/oih.jpg"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          </Link>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Victoria</h6>
            <p className="designation">Landscape Photographer</p>
          </div>
        </div>
      </div>
      {/* Single Advisor*/}
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/3w4b28J1/asdfgh.jpg"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Emma</h6>
            <p className="designation">Fine-art Photographer</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/8kmwJKVj/rth.webp"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Rose</h6>
            <p className="designation">Professional Photographer</p>
          </div>
        </div>
      </div>
      <div className="col-12 col-sm-6 col-lg-3">
        <div
          className="single_advisor_profile wow fadeInUp"
          data-wow-delay="0.5s"
          style={{
            visibility: "visible",
            animationDelay: "0.5s",
            animationName: "fadeInUp"
          }}
        >
          {/* Team Thumb*/}
          <div className="advisor_thumb">
            <img
              src="https://i.postimg.cc/brSzMDP5/red.jpg"
              alt=""
            />
            {/* Social Info*/}
            <div className="social-info">
              <a href="#">
                <i className="fa fa-facebook" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          {/* Team Details*/}
          <div className="single_advisor_details_info">
            <h6>Jennie</h6>
            <p className="designation">Photographer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Profile