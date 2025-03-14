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
              <a href="" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
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
                  kumailakhtar0786@gmail.com
                </a>
                </li>
              {/* <li className="mb-2">
              <FontAwesomeIcon icon={faGlobe} size="lg" />
              <a href="https://portfolio-mdraza.vercel.app/" className="me-3 text-light" target="_blank" rel="noopener noreferrer">
               
                Portfolio
              </a>
              </li> */}
              
              <li className="mb-2">
                <FontAwesomeIcon icon={faPhone} className="me-2" />
                <a href="tel:+1234567890" className="text-light text-decoration-none">
                  +91 7667643486
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
              
              <a 
                href="https://portfolio-mdraza.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="portfolio-link text-light d-inline-flex align-items-center"
              >
               👉 Md.Raza Khan ▶️
                <FontAwesomeIcon icon={faGlobe} className="ms-2 globe-icon" />
              </a>

            
            </p>
          </div>
        </div>
      </div>
      <style jsx>{`
        .portfolio-link {
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 12px;
          position: relative;
          background: linear-gradient(145deg, #6f42c1, #6610f2);
          box-shadow: 3px 3px 10px rgba(24, 238, 56, 0.88),
                      -3px -3px 10px rgba(129, 70, 70, 0.41);
          text-shadow: 2px 2px 4px rgba(203, 255, 17, 0.9);
          border: 1px solid rgba(113, 108, 108, 0.2);
          font-weight: 600;
          letter-spacing: 0.8px;
          color: white !important;
          text-decoration: none !important;
        }

        .portfolio-link:hover {
          transform: translateY(-3px);
          background: linear-gradient(145deg, #7e51d0, #7525ff);
          box-shadow: 0 5px 15px rgba(111, 66, 193, 0.4),
                      0 0 20px rgba(111, 66, 193, 0.2);
          text-decoration: none;
        }

        .portfolio-link:active {
          transform: translateY(1px);
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.2),
                      inset -2px -2px 5px rgba(255, 255, 255, 0.1);
        }

        .globe-icon {
          transition: all 0.5s ease;
          color: rgba(255, 255, 255, 0.9);
        }

        .portfolio-link:hover .globe-icon {
          transform: rotate(360deg);
          color: white;
          filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
        }
      `}</style>
    </footer>
  );
};

export default Footer;
