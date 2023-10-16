import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import { Link, useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function Dashboard() {
  const [dataList, setDataList] = useState([]);
  const nav=useNavigate();

  useEffect(() => {
    axios
    .get("http://localhost:9000/auth/user/getAll")
    .then((response) => {
      setDataList(response.data);
    })
    .catch((error) => {
      console.error('Failed to fetch data:', error);
    });
}, []);
const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/login")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);
return (
  <div>
    
  <meta charSet="UTF-8" />
  <title> Responsive Admin Dashboard  </title>
  <link rel="stylesheet" href="style.css" />
  <link
    href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
    rel="stylesheet"
  />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <div className="sidebar">
    <div className="logo-details">
      <i className="bx bxl-c-plus-plus" />
      <span className="logo_name">Wanderlenses</span>
    </div>
    <ul className="nav-links">
      <li>
        <a  className="active">
          <i className="bx bx-grid-alt" />
          <span className="links_name">Dashboard</span>
        </a>
      </li>
      <li>
        <a href="#">
          <i className="bx bx-message" />
          <span className="links_name">Contactus</span>
        </a>
      </li>
      <li className="log_out">
        <a>
          <i className="bx bx-log-out" />
          <span className="links_name"><Link to="/adminlogin">Log out</Link></span>
        </a>
      </li>
    </ul>
  </div>
  <section className="home-section">
    <nav>
      <div className="profile-details">
        <span className="admin_name">Nirosh Gowda</span>
      </div>
      <div className="lulu">
      <FontAwesomeIcon icon={faUserCircle}/>
      </div>
    </nav>
    <div className="home-content">
      <div className="overview-boxes">
        
      </div>
      <div className="sales-boxes">
            <div className="recent-sales box">
              <div className="title">SignUp Details</div>
              <div className="sales-details">
                {dataList.map((item, index) => (
                  <ul className="details" key={index}>
                    <li className="topic">Email</li>
                    <li>
                      <a>{item.email}</a>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
      </div>
    </div>
  </section>

    </div>
  )
}

export default Dashboard

