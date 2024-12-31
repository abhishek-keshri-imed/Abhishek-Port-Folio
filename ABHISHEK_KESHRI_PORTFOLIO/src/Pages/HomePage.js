import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const HomePage = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);  // i.e., The navbar is collapsed initially)

  const handleToggle = () => {    //This function is called when the toggle button is clicked.
    setIsCollapsed(!isCollapsed); //Toggle the state of Navbar
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{paddingLeft:5,paddingRight:5}}>
        {/* Brand Name */}
        <a className="navbar-brand" href="#">
          <strong>
            <span style={{ color: '#DFEAE9' }}>ABHISHEK</span>
            <span style={{ color: '#EAB41E' }}> KESHRI</span>
          </strong>
        </a>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={handleToggle}
          aria-controls="navbarNav"
          aria-expanded={!isCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div
          className={`collapse navbar-collapse ${!isCollapsed ? 'show' : ''}`}
          id="navbarNav"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span style={{ color: '#EAB41E' }}>HOME</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span style={{ color: '#DFEAE9' }}>ABOUT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span style={{ color: '#DFEAE9' }}>SERVICES</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span style={{ color: '#DFEAE9' }}>PROJECT</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <span style={{ color: '#DFEAE9' }}>CONTACT</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default HomePage;
