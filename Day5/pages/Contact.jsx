import React from 'react';
import Nav from './Nav';
import '../assets/css/Contact.css'; 

const ContactPage = () => {
  return (
    <div className="contact-page" style={{ backgroundImage: "url('https://cdn.abcotvs.com/dip/images/3822653_072518-cc-ss-beach-water-img.jpg?w=1600')" }}>
       <Nav />
       <div className="contact-header">
        <h2>Contact Us</h2>
      </div>
      <div className="contact-form">
        <input type="text" placeholder="Name" className="input-field" />
        <input type="email" placeholder="Email" className="input-field" />
        <textarea placeholder="Message" className="textarea-field"></textarea>
        <button className="submit-button">Send</button>
      </div>
    </div>
  );
};

export default ContactPage;
