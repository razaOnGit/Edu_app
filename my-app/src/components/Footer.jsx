import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faPhone, 
  faLocationDot,
  faGlobe 
} from '@fortawesome/free-solid-svg-icons';
import { 
  faGithub, 
  faLinkedin 
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light mt-auto">
      <div className="container py-5">
        <div className="row">
          {/* Logo and About */}
          <div className="col-md-4 mb-4">
            <Link to="/" className="text-decoration-none">
              <h4 className="text-light">Kalam Academy</h4>
            </Link>
            <p className="text-muted">
              Empowering minds through quality education and Islamic knowledge.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-md-4 mb-4">
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:your.email@example.com" className="text-light text-decoration-none">
                  your.email@example.com
                </a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+1234567890" className="text-light text-decoration-none">
                  +1 234 567 890
                </a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                123 Education Street, City, Country
              </li>
            </ul>
          </div>

          {/* Portfolio Links */}
          <div className="col-md-4 mb-4">
            <h4>Portfolio & Social</h4>
            <ul className="list-unstyled">
              <li className="mb-2">
                <FontAwesomeIcon icon={faGlobe} className="me-2" />
                <a 
                  href="https://your-portfolio-url.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  My Portfolio
                </a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faGithub} className="me-2" />
                <a 
                  href="https://github.com/your-username" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  GitHub
                </a>
              </li>
              <li className="mb-2">
                <FontAwesomeIcon icon={faLinkedin} className="me-2" />
                <a 
                  href="https://linkedin.com/in/your-profile" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light text-decoration-none"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="row mt-4">
          <div className="col-12">
            <hr className="bg-light" />
            <p className="text-center text-muted mb-0">
              © {new Date().getFullYear()} Kalam Academy. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
