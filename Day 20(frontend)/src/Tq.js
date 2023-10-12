// src/components/ThankYou.js
import React from 'react';
import './Tq.css'; 


const Tq = () => {
  return (
    <div className="thank-you-container">
      <i className="far fa-check-circle thank-you-icon"></i>
      <h1>Thank You for Your Feedback</h1>
      <p>Your feedback is valuable and will help us improve our services.</p>
      <button className="return-button" onClick={() => window.location.href = '/'}>
        Return to Homepage
      </button>
    </div>
  );
};

export default Tq;
