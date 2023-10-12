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
                src="https://icdn.isrgrajan.com/in/2018/03/photo-1496509218134-fad73128e572-696x464.jpg"
                alt="Generic placeholder image"
                className="img-fluid img-thumbnail mt-4 mb-2"
                style={{ width: 150, zIndex: 1 }}
              />
            </div>
            <div className="ms-3" style={{ marginTop: 130}}>
              <h5>Katrina</h5>
              <p>San Francisco</p>
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
              Language spoken: English, French, Spanish
            </a>
            <br></br>
                <a>
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                Contact: +09 4623347
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
                <p className="font-italic mb-1">Born and raised in colourful inspiring photography, with a true love and passion for capturing beautiful emotions and authentic moments.</p>
                <p className="font-italic mb-1">I could not live if I wasn't able to travel often!</p>
                <p className="font-italic mb-0">I am utterly obsessed with my camera, and I take it with me everywhere.</p>
              </div>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <p className="lead fw-normal mb-0">Recent photos</p>
            </div>
            <div className="row g-2">
              <div className="col mb-2">
                <img
                  src="https://riss-photography.com/wp-content/uploads/2022/01/Wollongong-City-Beach-Wedding-2-1160x700.jpg"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col mb-2">
                <img
                  src="https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8d2VkZGluZyUyMHBob3RvZ3JhcGh5fGVufDB8fDB8fHww&w=1000&q=80"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
            </div>
            <div className="row g-2">
              <div className="col">
                <img
                  src="https://lh4.googleusercontent.com/Jxpp1wotr0hn4BkEnlC2UoAgy84updxPjjvaipTGlnIQNUFGFt3MT0BXevntLUiV3XDupdouMCTOOpW_KO3F4zZ3fK9-ZNJDS_IzqxX2qRddDPLhMow1inej1ogyuEOzmcMo-zSQ"
                  alt="image 1"
                  className="w-100 rounded-3"
                />
              </div>
              <div className="col">
                <img
                  src="https://www.weddingrule.com/wp-content/uploads/2022/08/Wedding-Photographers-in-Maui.jpeg"
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