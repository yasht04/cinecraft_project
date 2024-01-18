import React from 'react';
import './footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook,faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
        
        </div>
        <div className="social-icons">
          <Link to="/">
            <FontAwesomeIcon icon={faFacebook} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faInstagram} />
          </Link>
          <Link to="/">
            <FontAwesomeIcon icon={faTwitter} />
          </Link>
        </div>
        <p className="copyright">Copyright &copy; {new Date().getFullYear()} CINECRAFT</p>
      </div>
    </footer>
  )
}
