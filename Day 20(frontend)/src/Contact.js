import React, { useEffect, useState } from 'react';
import './Contact.css';
import Navbar from './Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Contact() {

  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    msg: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:8081/profile/post', formData);
      console.log(response.data); 
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <Navbar />
      <section className="contact_us">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="contact_inner">
                <div className="row">
                  <div className="col-md-10">
                    <div className="contact_form_inner">
                      <div className="contact_field">
                        <h3>Contact Us</h3>
                        <p>Feel Free to contact us any time. We will get back to you as soon as we can!</p>
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Name"
                          name="name"
                          onChange={handleChange}
                        />
                        <input
                          type="text"
                          className="form-control form-group"
                          placeholder="Email"
                          name="email"
                          onChange={handleChange}
                        />
                        <textarea
                          className="form-control form-group"
                          placeholder="Message"
                          name="msg"
                          onChange={handleChange}
                        />
                        <button className="contact_form_submit" onClick={handleSubmit}>
                          Send
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="right_conatct_social_icon d-flex align-items-end">
                      <div className="socil_item_inner d-flex">
                        <li>
                          <a href="#">
                            <i className="fab fa-facebook-square" />
                          </a>
                        </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="contact_info_sec">
                  <h4>Contact Info</h4>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-headset" />
                    <span>+91 8009 004294</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-envelope-open-text" />
                    <span>wanderlenses@gmail.com</span>
                  </div>
                  <div className="d-flex info_single align-items-center">
                    <i className="fas fa-map-marked-alt" />
                    <span>1000+ Travel partners and 65+ Service city across India, USA, Canada & UAE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
