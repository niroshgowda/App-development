import React from 'react';
import './Contact.css'; // Import your CSS file for styling

function Contact() {
  return (
    <div className="contact-us-container">
      {/* Background image */}
      <div className="background-image" />

      {/* Contact information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>
          For inquiries, please fill out the form below or contact us via phone or email.
        </p>
        <div className="contact-details">
          <div className="phone">
            <h3>Phone Number</h3>
            <p>+1 123-456-7890</p>
          </div>
          <div className="email">
            <h3>Email Address</h3>
            <p>contact@example.com</p>
          </div>
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-form">
        <h2>Contact Form</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4" />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
