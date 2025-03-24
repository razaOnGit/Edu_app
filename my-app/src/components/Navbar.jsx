import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top shadow">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="/logo.jpg"
              alt=""
              height="55"  // Increased from 40 to 55
              className="me-2 logo"
            />
            <div className="brand-content">
              <span className="fw-bold fs-2">
                <span className="kalam-text">Kalam</span>{' '}
                <span className="academy-text">Academy</span>
              </span>
              <p className="tagline mb-0">Learn the habit of Learning</p>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNav}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse justify-content-end ${isOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav">
              {[
                { path: '/Home', icon: 'house-door', text: 'Home' },
                { path: '/foundation', icon: 'book', text: 'Foundation' },
                { path: '/target', icon: 'bullseye', text: 'Target' },
                { path: '/quiz', icon: 'question-circle', text: 'Quiz' }
              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link 
                    className={`nav-link px-3 ${location.pathname === item.path ? 'active' : ''}`}
                    to={item.path}
                    onClick={closeNav}
                  >
                    <i className={`bi bi-${item.icon} me-1`}></i>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .navbar {
          transition: all 0.3s ease;
          background: linear-gradient(135deg,rgb(238, 240, 243) 0%,rgb(29, 29, 175) 100%) !important; // New gradient background
        padding: 0.8rem 1rem; /* Increased padding for height */
        min-height: 100px; 
          }

        .navbar-collapse {
          transition: all 0.3s ease-in-out;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          margin: 0 0.2rem;
          border-radius: 58px;
        }

        .nav-link:before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: white;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-link:hover:before {
          width: 100%;
        }

        .nav-link.active {
          background: rgb(195, 13, 13);
        }

        .brand-content {
          display: flex;
          flex-direction: column;
          line-height: 1.2;
        }

        .tagline {
          font-size: 0.75rem;
          color: rgba(255, 255, 255, 0.9);
          font-style: italic-oblique;
          margin-top: 2px;
          transition: all 0.3s ease;
        }

        .navbar-brand:hover .tagline {
          color: rgba(255, 255, 255, 1);
        }

        .kalam-text {
          color:rgb(27, 55, 147); /* Dark blue */
          text-shadow: 1px 1px 2px rgba(26, 35, 126, 0.2);
          transition: all 0.3s ease;
        }

        .academy-text {
          color: #d32f2f; /* Red */
          text-shadow: 1px 1px 2px rgba(211, 47, 47, 0.2);
          transition: all 0.3s ease;
        }

        .navbar-brand:hover .kalam-text {
          text-shadow: 2px 2px 4px rgba(26, 35, 126, 0.3);
        }

        .navbar-brand:hover .academy-text {
          text-shadow: 2px 2px 4px rgba(211, 47, 47, 0.3);
        }
        .logo {
          transition: all 0.3s ease;
          height: 65px;
          width: 65px;
        }
        

        @media (max-width: 768px) {
          .kalam-text,
          .academy-text {
            font-size: 1.7rem;
          }

          .logo {
            height: 55px !important; 
           width: 55px !important;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
