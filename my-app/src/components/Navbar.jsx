
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (
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
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/Home">
                <i className="bi bi-house-door me-1"></i>Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/foundation">
                <i className="bi bi-book me-1"></i>Foundation
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/target">
                <i className="bi bi-bullseye me-1"></i>Target
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to="/quiz">
                <i className="bi bi-question-circle me-1"></i>Quiz
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
