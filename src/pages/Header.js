import React from 'react';
import { Link } from 'react-router-dom';
import './css/Header.css'; 
//import logo from './src/logo.png'; 

function Header() {
  return (
    <div className="box">
      <header className="header">
        <div className="overlap-group">
          <Link to="/" className="text-wrapper">Home</Link>
          <Link to="/about" className="text-wrapper-1">About</Link>
          <Link to="/Careers" className="text-wrapper-2">Careers</Link>
          <Link to="/Contact" className="text-wrapper-3">Contact Us</Link>
          <Link to="/" className="logo-link">
          </Link>
        </div>
      </header>
    </div>
  );
}

export default Header;
