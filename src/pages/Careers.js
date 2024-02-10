import React from 'react';
import './css/Careers.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';


const TITLE = 'Careers | Pascual Liner Inc.';

function Careers() {
  return (
    <div className="Career">
      <Header />
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <div className="apply-form">
        <div className='title'>
      <h2>Apply Now!</h2>
      <div className="form-field">
      </div>
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="Enter your full name" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Enter your email address" />
      </div>
      <div className="form-field">
        <label htmlFor="contactNumber">Contact Number</label>
        <input type="text" id="contactNumber" placeholder="Enter your contact number" />
      </div>
      <div className="form-field">
        <label htmlFor="position">Position</label>
        <select id="position">
        <option value="" disabled selected>Select Career</option>
          <option value="1">Driver</option>
          <option value="2">Conductor</option>
          <option value="3">Mechanic</option>
          <option value="4">Air Con Technician</option>
          <option value="4">Electrician</option>
        </select>
      </div>
      <div className="form-field">
        <label htmlFor="resume">Attach CV/Resume</label>
        <input type="file" id="resume" />
      </div>
      <button type="submit">Submit</button>
        <p>or send us your application with CV/resume at <a href="mailto:hr@pascualliner.com" style={{ color: 'blue', textDecoration: 'underline' }}>hr@pascualliner.com</a></p>
    </div>
      <Footer />
    </div>
  );
}

export default Careers;
