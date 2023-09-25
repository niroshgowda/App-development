import React from 'react'
import './Profile1.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faComment,faLanguage } from '@fortawesome/free-solid-svg-icons'; 
import Navbar from './Navbar';
import Admin from './Admin';


function Profile1() {
  return (
    <div>
    <Navbar/>
    <Admin/>
    <section className="h-100 gradient-custom-2">
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col col-lg-9 col-xl-7">
        <div className="card">
          <div
            className="rounded-top text-white d-flex flex-row"
            style={{ backgroundColor: "#000", height: 200 }}
          >
            <div
              className="ms-4 mt-5 d-flex flex-column"
              style={{ width: 150 }}
            >
              <img
                src="https://i.postimg.cc/rwyJN8gW/soci-1.webp"
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ width: 150, zIndex: 1 }}
              />
            </div>
            <div className="ms-3" style={{ marginTop: 130}}>
              <h5>Luice Lilly</h5>
              <p>New York</p>
            </div>
          </div>
          <div
            className="p-4 text-black"
            style={{ backgroundColor: "#f8f9fa" }}
          >
            <div className="d-flex justify-content-end text-center py-1">
              <div>
              <a>
              <FontAwesomeIcon
                icon={faLanguage} // Use the language icon
                className="me-2"
              />
              Language spoken: English, French
            </a>
            <br></br>
                <a>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact: +09 4623456
              </a><br></br>
              <a>
                <FontAwesomeIcon icon={faComment} className="me-2" />
                Message
              </a>
              </div>
              
            </div>
          </div>
          <div className="card-body p-4 text-black">
            <div className="mb-5">
              <p className="lead fw-normal mb-1">About</p>
              <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                <p className="font-italic mb-1">I am a big photography, especially street photography and portrait.</p>
                <p className="font-italic mb-1">In Wanderlenses, we are lucky to have great lighting around all year.</p>
                <p className="font-italic mb-0">I like to do street photography using my old Yashica camera.</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img
                  src="https://www.thephotoargus.com/wp-content/uploads/2019/02/streetphoto35.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col mb-2">
                <img
                  src="https://www.worldphoto.org/sites/default/files/gallery/images/3350657/7a8ed6dc1e08860372ce182266d148cd.havana%2520running%2520away.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img
                  src="https://www.oh-brother.co.uk/wp-content/uploads/2023/06/street-photography-Brixton-004.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col">
                <img
                  src="https://danmorrisphotography.co.uk/wp-content/uploads/2020/10/london-street-photographer36.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
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

export default Profile1