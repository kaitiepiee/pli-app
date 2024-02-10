import React from 'react';
import './css/Footer.css'; 

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="section">
        <div className="div">Address</div>
        <div className="subtitle">1108 Temp Quirino Highway <br />Brgy. Kaligayahan Novaliches, Quezon City</div>
      </div>
      <div className="section">
        <div className="div">Contact</div>
        <div className="subtitle">contactus@pascualliner.com</div>
        <div className="subtitle">(02) 828-56462</div>
      </div>
      <div className="section">
        <div className="div">Office Hours</div>
        <div className="subtitle">8:00 AM to 5:00 PM</div>
      </div>
      <div className="copyright">
        <div className="subtitle">© 2024 Pascual Liner Inc. All rights reserved.</div>
      </div>    
      </footer>
  );
};

export default Footer;
