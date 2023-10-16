import React, { useEffect, useState } from 'react'
import './Privacypolicy.css';
import Admin from './Admin';
import { useNavigate } from 'react-router-dom';

export default function Privacypolicy() 
{

  const nav=useNavigate();
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
    <Admin/>
       <div className='ppfull'>
          <img src='https://t3.ftcdn.net/jpg/04/03/06/36/360_F_403063613_kM9FtZLpDWBu1Oj0mzRUJGEuaHRSPJAz.jpg' width="1536px" height="420px"/>
          <div className='ppcontent'>
              <div className='pphead'>
                 <p>Privacy Policy</p>
              </div>
              <div className='ppara'>
               <p>This Privacy Policy describes how our website collects, uses, and protects personal information 
               when you visit our website or use our services related to our website.</p>
              </div>
              <div className='pphead1'>
                 <p><b>Information We Collect</b></p>
              </div>
              <div className='para'><br/>
                <p>We collect the following types of information:</p>
              </div>
              <div className='para'><br/>
                <p><span className='ppspan'>Personal Information: </span> We may collect personal information, such as your name, email address, and location, 
                when you voluntarily provide it to us, such as when signing up for an account or subscribing to our newsletter.
                </p>
              </div>
              <div className='para'><br/>
                <p><span className='ppspan'>Usage Data: </span>We automatically collect information about your interaction with our website, including your IP address, browser type, device information, 
                and pages visited. We use cookies and similar technologies for this purpose.
                </p>
              </div>
              
              <div className='pphead1'>
              <h4>How We Use Your Information</h4>
           </div>

           <div className='para'><br/>
           <p>We use the collected information for the following purposes:</p>
         </div>

           <div className='para'><br/>
           <p>1. To Provide and Enhance Your Travel Photography Experience</p>
           <p>2. To Personalize Your Journey</p>
           <p>3. To Keep You Informed</p>
           <p>4. To respond to your inquiries, comments, or requests.</p>
           <p>5. To analyze and enhance our website's functionality and user experience.</p>
         </div>
            
         <div className='pphead1'>
         <p><b>Sharing Your Information</b></p>
      </div>

      <div className='para'><br/>
           <p>We do not sell, trade, or rent your personal information to third parties. We may share your information with:</p>
         </div>
       
         <div className='para'><br/>
           <p>1.Partners and affiliates for marketing and promotional purposes.</p>
           <p>2.Third-party service providers that assist us in operating our website and delivering our services.</p>
           </div>
          
       

        <div className='pphead1'>
         <p><b>Security</b></p>
      </div>

      <div className='para'>
      <p>We take reasonable steps to protect your personal information from unauthorized access, disclosure, or alteration. However, no data transmission 
      over the internet or storage system is entirely secure, and we cannot guarantee absolute security.</p>
    </div>

    <div className='pphead1'>
         <p><b>Contact Us</b></p>
      </div>
      
      <div className='para'>
      <p>If you have any questions or concerns about our Privacy Policy or the handling of your personal information, please contact us.</p>
    </div>
    </div>
    </div>
    </div>
  )
}