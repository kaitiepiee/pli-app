import './css/Careers.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import iconAirCon from './icon_aircon.png'; 
import iconBus from './icon_bus.png'; 
import iconFlash from './icon_flash.png'; 
import iconTicket from './icon_ticket.png'; 
import iconTools from './icon_tools.png'; 
import React, { useState } from 'react';

const TITLE = 'Careers | Pascual Liner Inc.';

function Careers() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    contactNumber: '',
    city: '',
    dob: '',
    position: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form data and submit if valid
    console.log('Form submitted:', formData);
  };

  return (
    <div className="Career">
      <Header />
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="career-container">
        <div className="page-title">
          CAREERS
        </div>
        <div className="row">
          <div className="small-box">
            <div className="logo">
              <img src={iconBus} alt="Logo" />
            </div>
            <div className="content">
              <div className="title">
                <h2>Driver</h2>
              </div>
              <div className="career-subtitle">
                <p>Safely operate company vehicles whilst maintaining the cleanliness of vehicle.</p>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="logo">
              <img src={iconTicket} alt="Logo" />
            </div>
            <div className="content">
              <div className="title">
                <h2>Conductor</h2>
              </div>
              <div className="career-subtitle">
                <p>Help passengers board and exit the bus, collect fares, enforce safety rules, offer route information, and maintain bus cleanliness.</p>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="logo">
              <img src={iconFlash} alt="Logo" />
            </div>
            <div className="content">
              <div className="title">
                <h2>Electrician</h2>
              </div>
              <div className="career-subtitle">
                <p>Diagnose and repair bus electrical systems, install and maintain components of the buses.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="small-box">
            <div className="logo">
              <img src={iconAirCon} alt="Logo" />
            </div>
            <div className="content">
              <div className="title">
                <h2>Aircon Technician</h2>
              </div>
              <div className="career-subtitle">
                <p>Inspect, troubleshoot, and repair bus airconditioning and heating systems.</p>
              </div>
            </div>
          </div>
          <div className="small-box">
            <div className="logo">
              <img src={iconTools} alt="Logo" />
            </div>
            <div className="content">
              <div className="title">
                <h2>Mechanic</h2>
              </div>
              <div className="career-subtitle">
                <p>Repair engines and components to ensure safety and performance of the buses.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="apply-form">
          <div className='page-title' style={{textAlign: 'center'}}>
            Apply Now!
          </div>
          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="e.g. Juan Dela Cruz" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="e.g. juandelacruz@gmail.com" />
            </div>
            <div className="form-field">
              <label htmlFor="contactNumber">Contact Number</label>
              <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="e.g. 09XX XXX XXXX" />
            </div>
            <div className="form-row special-row">
              <div className="form-field">
                <label htmlFor="city">City of Residence</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} placeholder="e.g. Quezon City" />
              </div>
              <div className="form-field">
                <label htmlFor="dob">Date of Birth</label>
                <input type="text" name="dob" value={formData.dob} onChange={handleChange} placeholder="MM/DD/YYYY" />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="position">Position</label>
              <div>
                <label>
                  <input type="radio" name="position" value="Driver" onChange={handleChange} />
                  Driver
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="position" value="Conductor" onChange={handleChange} />
                  Conductor
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="position" value="Mechanic" onChange={handleChange} />
                  Mechanic
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="position" value="Air Con Technician" onChange={handleChange} />
                  Air Con Technician
                </label>
              </div>
              <div>
                <label>
                  <input type="radio" name="position" value="Electrician" onChange={handleChange} />
                  Electrician
                </label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
          <p className="contact-info">or send us your application with CV/resume at <a href="mailto:hr@pascualliner.com" style={{ color: '#1A438D', textDecoration: 'underline' }}>hr@pascualliner.com</a></p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Careers;
