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
              height="40"
              className="me-2 logo"
            />
            <span className="fw-bold fs-4">Kalam Academy</span>
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
        }

        .navbar-collapse {
          transition: all 0.3s ease-in-out;
        }

        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 0.5rem 1rem;
          margin: 0 0.2rem;
          border-radius: 8px;
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
          background: rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </>
  );
};

export default Navbar;
