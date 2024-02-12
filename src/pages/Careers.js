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
      </div>
      <div className="form-field">
        <label htmlFor="fullName">Full Name</label>
        <input type="text" id="fullName" placeholder="e.g. Juan Dela Cruz" />
      </div>
      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="e.g. juandelacruz@gmail.com" />
      </div>
      <div className="form-field">
        <label htmlFor="contactNumber">Contact Number</label>
        <input type="text" id="contactNumber" placeholder="e.g. 09XX XXX XXXX" />
      </div>
      <div className="form-field">
        <label htmlFor="city">City of Residence</label>
        <input type="text" id="city" placeholder="Enter your city of residence" />
      </div>
      <div className="form-field">
        <label htmlFor="age">Age</label>
        <input type="number" id="age" placeholder="Enter your age" />
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
      <p className="contact-info">or send us your application with CV/resume at <a href="mailto:hr@pascualliner.com" style={{ color: '#1A438D', textDecoration: 'underline' }}>hr@pascualliner.com</a></p>
    </div>
      <Footer />
    </div>
  );
}

export default Careers;