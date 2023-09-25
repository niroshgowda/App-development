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
                src="https://motif-blog-assets.motifphotos.com/motif-blog/wp-content/uploads/2018/12/iStock-902506410_1200x800px-1200x800.jpg?x98050"
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ width: 150, zIndex: 1 }}
              />
            </div>
            <div className="ms-3" style={{ marginTop: 130}}>
              <h5>Victoria</h5>
              <p>Portland</p>
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
                icon={faLanguage}
                className="me-2"
              />
              Language spoken: English, French
            </a>
            <br></br>
                <a>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact: +09 0098654
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
                <p className="font-italic mb-1">I am a passionate photographer dedicated to capturing life's most beautiful moments</p>
                <p className="font-italic mb-1">With years of experience in various genres, I specialize in creating stunning portraits, breathtaking landscapes, and memorable event photography. </p>
                <p className="font-italic mb-0"></p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img
                  src="https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col mb-2">
                <img
                  src="https://images.unsplash.com/photo-1544954617-f5c6b0d16164?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFuZHNjYXBlJTIwcGhvdG9ncmFwaHl8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img
                  src="https://www.adobe.com/content/dam/cc/us/en/creative-cloud/photography/discover/landscape-photography/CODERED_B1_landscape_P2d_714x348.jpg.img.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col">
                <img
                  src="https://www.diyphotography.net/wp-content/uploads/2019/01/Erin-Babnik.jpeg"
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