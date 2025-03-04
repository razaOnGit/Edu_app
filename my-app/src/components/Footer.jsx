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
  faFacebookF, 
  faWhatsapp
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-4 w-100">
      <div className="container">
        <div className="row g-4">
          {/* Logo and About */}
          <div className="col-lg-4 col-md-6">
            <Link to="/" className="text-decoration-none">
              <h4 className="text-light mb-3">Kalam Academy</h4>
            </Link>
            <p className="text-light-50 mb-4">
              Empowering minds through quality education and Islamic knowledge.
            </p>
            <div className="social-links">
              <a href="https://wa.me/+91 7667643486" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
              <a href="https://facebook.com/your-username" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="col-lg-4 col-md-6">
            <h5 className="text-light mb-3">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li><Link to="/foundation" className="text-light text-decoration-none">Foundation Course</Link></li>
              <li><Link to="/target" className="text-light text-decoration-none">Target Batch</Link></li>
              <li><Link to="/quiz" className="text-light text-decoration-none">Islamic Quiz</Link></li>
              <li><Link to="/achievements" className="text-light text-decoration-none">Achievements</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-lg-4 col-md-12">
            <h5 className="text-light mb-3">Contact Us</h5>
            <ul className="list-unstyled footer-contact">
              <li className="mb-2">
                <FontAwesomeIcon icon={faEnvelope} className="me-2" />
                <a href="mailto:kmdraza47@gmail.com" className="text-light text-decoration-none">
                  kmdraza47@gmail.com
                </a>
                </li>
              <li className="mb-2">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <a href="https://portfolio-mdraza.vercel.app/" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
               
                Portfolio
              </a>
              </li>
              
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+1234567890" className="text-light text-decoration-none">
                  +1 234 567 890
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                Bihar, India
              </li>
            </ul>
          </div>
        </div>

        <hr className="mt-4 mb-3 bg-secondary" />
        
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0 text-light-50">
              © {new Date().getFullYear()} Kalam Academy. All rights reserved. | Designed by{' '}
              <a href="https://portfolio-mdraza.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-light text-decoration-none">
                Md.Raza Khan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
