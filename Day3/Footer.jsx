import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../assets/css/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>Email: info@celestialcruises.com</li>
              <li>Phone: +1 (123) 456-7890</li>
              <li>Address: 123 Ocean Avenue, Cruise City</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact">Contact Us</Link></li>
              <li><a href="#privacy">Privacy Policies</a></li>
              <li><a href="#terms">Terms and Conditions</a></li>
              <li><a href="#faq">FAQs</a></li>
              {/* Add more quick links as needed */}
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-inline social-icons">
              <li className="list-inline-item"><Link to='https://www.facebook.com/'><FontAwesomeIcon icon={faFacebookF} /></Link></li>
              <li className="list-inline-item"><Link to='https://www.twitter.com/'><FontAwesomeIcon icon={faTwitter} /></Link></li>
              <li className="list-inline-item"><Link to='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} /></Link></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <p11 className="text-center">&copy; 2024 Celestial Cruises. All rights reserved.</p11>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
