import React, { useState } from 'react';

const Navbar = () => {
  // State to manage navbar collapse
  const [isCollapsed, setIsCollapsed] = useState(true);

  // Function to toggle navbar collapse
  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // Navbar container with Bootstrap classes
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/* Username, Name, and Icon */}
      <div className="d-flex align-items-center order-0">
        <span className="navbar-text mr-3">Putnam</span>
        <i className="fas fa-user-circle"></i>
      </div>

      {/* Navbar toggler button for mobile view */}
      <button className="navbar-toggler" type="button" onClick={toggleNavbar}>
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* Collapsible content */}
      <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'} ml-auto`} id="navbarSupportedContent1">
        {/* Navbar links */}
        <ul className="navbar-nav">
          {/* Home link */}
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          {/* Features link */}
          <li className="nav-item">
            <a className="nav-link" href="/">Features</a>
          </li>
          {/* Pricing link */}
          <li className="nav-item">
            <a className="nav-link" href="/">Pricing</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

