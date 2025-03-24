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
  faWhatsapp,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="row g-4">
            {/* Logo and About */}
            <div className="col-lg-4 col-md-6">
              <Link to="/" className="text-decoration-none">
                <h4 className="academy-title">Kalam Academy</h4>
                <p className="slogan">Learn the habit of Learning</p>
              </Link>
              <p className="founder-label">Kumail Akhtar</p>
              <p className="founder-name">Founder & CEO</p>
              <p className="mission-text">
                Empowering minds through quality education and Islamic knowledge.
              </p>
              <div className="social-links">
                <a href="https://wa.me/+91 7667643486" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a href=" " target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href=" " target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-4 col-md-6">
              <h5 className="footer-heading">Quick Links</h5>
              <ul className="footer-links">
                <li><Link to="/foundation">Foundation Course</Link></li>
                <li><Link to="/target">Target Batch</Link></li>
                <li><Link to="/quiz">Islamic Quiz</Link></li>
                <li><Link to="/achievements">Achievements</Link></li>
                <li><Link to="/target">University syllabus</Link></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="col-lg-4 col-md-12">
              <h5 className="footer-heading">Contact Us</h5>
              <ul className="contact-info">
                <li>
                  <FontAwesomeIcon icon={faEnvelope} />
                  <a href="mailto:kumailakhtar0786@gmail.com">
                    kumailakhtar0786@gmail.com
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faPhone} />
                  <a href="tel:+917667643486">
                    +91 7667643486
                  </a>
                </li>
                <li>
                  <FontAwesomeIcon icon={faLocationDot} />
                  <span>Bihar, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © {new Date().getFullYear()} Kalam Academy. All rights reserved. | 
            <span className="highlight-text"> Controlled </span> & 
            <span className="highlight-text"> Designed </span> by{' '}
            <a 
              href="https://portfolio-mdraza.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              👉 Md.Raza Khan ▶️
              <FontAwesomeIcon icon={faGlobe} className="globe-icon" />
            </a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: linear-gradient(to right,rgb(253, 253, 253),rgb(253, 253, 253),rgb(241, 246, 248)); /* New modern dark blue gradient */
          color: #fff;
          padding-top: 4rem;
        }

        .footer-content {
          position: relative;
          z-index: 1;
        }

        .academy-title {
          font-size: 2.5rem;
          font-weight: 800;
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: 0.2rem;
        }

        .slogan {
          font-size: 1.2rem;
          font-style: italic;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 1.5rem;
          text-decoration: underline;
          text-underline-offset: 5px;
          text-decoration-thickness: 1px;
          text-decoration-color: rgba(255, 255, 255, 0.6);
        }

        .founder-label {
          font-size: 1.1rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 5px;
          color: #fff;
          text-shadow: 
            1px 1px 1px #4facfe,
            2px 2px 1px #4facfe,
            3px 3px 1px rgba(79, 172, 254, 0.5);
          font-weight: 700;
          transform: perspective(500px) rotateX(10deg);
          display: inline-block;
          padding: 5px 10px;
          background: rgba(79, 172, 254, 0.1);
          border-radius: 5px;
          border: 1px solid rgba(79, 172, 254, 0.3);
        }

        .founder-label::before {
          content: '💼 ';  /* school emoji before text */
        }

        .founder-label::after {
          content: ' 🎓';  /* Graduation cap emoji after text */
        }

        .founder-name {
          font-size: 1.4rem;
          font-weight: 700;
          color: #4facfe;
          margin-bottom: 1.5rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          background: linear-gradient(45deg, #4facfe, #00f2fe);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          letter-spacing: 1px;
        }

        .mission-text {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.6;
          margin-bottom: 1.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-links a {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .social-links a:hover {
          background: #4ecdc4;
          transform: translateY(-3px);
        }

        .footer-heading {
          color: #fff;
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          position: relative;
          padding-bottom: 0.5rem;
        }

        .footer-heading::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 50px;
          height: 2px;
          background: #4ecdc4;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .footer-links a:hover {
          color: #4ecdc4;
          padding-left: 5px;
        }

        .contact-info {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .contact-info li {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
          color: rgba(255, 255, 255, 0.8);
        }

        .contact-info svg {
          margin-right: 1rem;
          color: #4ecdc4;
        }

        .contact-info a {
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-info a:hover {
          color: #4ecdc4;
        }

        .footer-bottom {
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem 0;
          margin-top: 4rem;
        }

        .copyright {
          text-align: center;
          color: rgba(255, 255, 255, 0.8);
          margin: 0;
        }

        .highlight-text {
          color: #4ecdc4;
          font-weight: 600;
        }

        .portfolio-link {
          display: inline-flex;
          align-items: center;
          background: linear-gradient(45deg, #4ecdc4, #ff6b6b);
          padding: 0.5rem 1rem;
          border-radius: 25px;
          color: #fff;
          text-decoration: none;
          margin-left: 0.5rem;
          transition: all 0.3s ease;
        }

        .portfolio-link:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .globe-icon {
          margin-left: 0.5rem;
          animation: rotate 3s linear infinite;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .footer {
            padding-top: 2rem;
          }

          .academy-title {
            font-size: 2.5rem;
          }

          .footer-bottom {
            margin-top: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
