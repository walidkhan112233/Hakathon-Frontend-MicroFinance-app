import React from 'react';
import './Navbar.css'; // Make sure to import the CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="brand">
       <a style={{textDecoration:"none"}} href="/">SMFC <span>by W</span></a> 
      </div>
      <div className="navbar-links">
        <a href="/login">Login</a>
        <a href="/adminlogin">Admin-Login</a>
      </div>
    </nav>
  );
};

export default Navbar;
