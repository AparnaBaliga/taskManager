import React from 'react';
import './CSS/Contact.css'; // Import your stylesheet for styling

const Contact = () => {
  return (
    <div className="contact-page">
    <h2 className="contact-heading">Contact Us</h2>
    <div className="contact-columns">
      <div className="contact-column">
        <img src="https://img.icons8.com/?size=1x&id=96470&format=png" alt="Phone Logo" className="logo" />
        <h3>Phone</h3>
        <p>Available on reference days</p>
        <p className="subtext">Call us: <span className="phone-number">123-456-7890</span></p>
        </div>
        <div className="contact-column">
        <img src="https://img.icons8.com/?size=1x&id=CmdWxCVy4gGr&format=png" alt="Case Logo" className="logo" />
        <h3>Start a New Case</h3>
        <p>Have a legal issue? Let's start working on it.</p>
        <button className="action-button">Get Started</button>
      </div>
      <div className="contact-column">
        <img src="https://img.icons8.com/?size=1x&id=OqS5bw76jOKP&format=png" alt="Chat Logo" className="logo" />
        <h3>Live Chat</h3>
        <p>Connect with us instantly through live chat.</p>
        <button className="action-button">Chat Now</button>
        </div>
      </div>
    </div>
  );
};
export default Contact;