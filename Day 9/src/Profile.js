import React from 'react'
import './Profile.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


export default function Profile() {
  return (
    <div>
    <Navbar/>
    <>
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <h3 className='profiless'>
    Photographer<span> Profiles</span>
 </h3>
 <p className='profiless1'>
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
                src="https://images.unsplash.com/photo-1594296459195-8b2f3fbf1c86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8&w=1000&q=80"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div></Link>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>LUICE LILLY</h6>
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
                src="https://icdn.isrgrajan.com/in/2018/03/photo-1496509218134-fad73128e572-696x464.jpg"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div></Link>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Katrina</h6>
              <p className="designation">Wedding Photographer</p>
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
                src="https://motif-blog-assets.motifphotos.com/motif-blog/wp-content/uploads/2018/12/iStock-902506410_1200x800px-1200x800.jpg?x98050"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
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
                src="https://hips.hearstapps.com/hmg-prod/images/memorising-my-trip-royalty-free-image-1571323023.jpg"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Emma</h6>
              <p className="designation">Photographer</p>
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
                src="https://static.photocdn.pt/images/articles/2018/11/26/articles/2017_8/how_to_become_a_professional_photographer.webp"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Ben</h6>
              <p className="designation">Photographer</p>
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
                src="https://media.istockphoto.com/id/452697801/photo/concentrating-on-getting-the-perfect-shot.jpg?s=612x612&w=0&k=20&c=RmyQJXOX0a7WrbyRq3T1mDpkA_3G0CiSV7nOASPdOfg="
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Steve</h6>
              <p className="designation">Photographer</p>
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
                src="https://amateurphotographer.com/wp-content/uploads/sites/7/2022/06/Nikon-400mm_F45_lifestyle.jpg"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Lisa</h6>
              <p className="designation">Photographer</p>
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
                src="https://www.wordlab.com/wp-content/uploads/2023/08/a-photographer-in-the-streets-taking-shots.jpg"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
            {/* Team Details*/}
            <div className="single_advisor_details_info">
              <h6>Robin</h6>
              <p className="designation">Photographer</p>
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
                src="https://cdn-ajggd.nitrocdn.com/kMoOFpDlsOVtlYJLrnSRNCQXaUFHZPTY/assets/images/optimized/rev-814242f/wp-content/uploads/bb-plugin/cache/get-into-photography-featured-landscape-a05f9137090e7505bfc31328c6067425-zybravgx2q47.jpg"
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
                <a href="#">
                  <i className="fa fa-linkedin" />
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
