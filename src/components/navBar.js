import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }}>
      <div className="container-fluid" style={{ padding: "20px" }}>
        <a className="navbar-brand" href="#" style={{ color: '#333333' }}> {/* Changed to a dark color for visibility */}
          <i className="bi bi-house"></i> Realator
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto"> {/* Use ms-auto to push items to the right */}
            <Link className="nav-link" to="/" style={{ color: '#333333' }}> {/* Changed to a dark color for visibility */}
              <i className="bi bi-house-door" style={{ marginRight: '5px' }}></i> Home
            </Link>
            <Link className="nav-link" to="/features" style={{ color: '#333333' }}> {/* Changed to a dark color for visibility */}
              <i className="bi bi-star" style={{ marginRight: '5px' }}></i> Features
            </Link>
            <Link className="nav-link" to="/pricing" style={{ color: '#333333' }}> {/* Changed to a dark color for visibility */}
              <i className="bi bi-cash" style={{ marginRight: '5px' }}></i> Pricing
            </Link>
            <Link className="nav-link disabled" aria-disabled="true" to="#" style={{ color: '#cccccc' }}> {/* Light gray for disabled */}
              <i className="bi bi-lock" style={{ marginRight: '5px' }}></i> Disabled
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;