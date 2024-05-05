import React, { useRef, useState } from 'react';
import './css/Careers.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import iconAirCon from './icon_aircon.png'; 
import iconBus from './icon_bus.png'; 
import iconFlash from './icon_flash.png'; 
import iconTicket from './icon_ticket.png'; 
import iconTools from './icon_tools.png'; 
import ReCAPTCHA from 'react-google-recaptcha';

const TITLE = 'Careers | Pascual Liner Inc.';

function Careers() {
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleRecaptchaChange = (value) => {
    // Handle reCAPTCHA verification 
    console.log('reCAPTCHA value:', value);
    setRecaptchaValue(value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="Career">
      <Header />
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <form action=   "https://docs.google.com/forms/d/e/1FAIpQLScY75BNcBJ51kH-wmV-kEcn9JI8Ak5kn3rbgvEUw-ePTB2Hgw/formResponse">
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
          <div className="form-field">
            <label htmlFor="fentry.832577582">Full Name<span className="required"> *</span></label>
            <input type="text" name="entry.832577582" placeholder="e.g. Juan Dela Cruz" required/>
          </div>
          <div className="form-field">
            <label htmlFor="entry.1242769675">Email<span className="required"> *</span></label>
            <input type="email" name="entry.1242769675" placeholder="e.g. juandelacruz@gmail.com" required />
          </div>
          <div className="form-field">
            <label htmlFor="entry.1048203182">Contact Number<span className="required"> *</span></label>
            <input type="text" name="entry.1048203182" placeholder="e.g. 09XX XXX XXXX" required />
          </div>
          <div className="form-row special-row">
            <div className="form-field">
              <label htmlFor="entry.1032228108">City of Residence<span className="required"> *</span></label>
              <input type="text" id="entry.1032228108" placeholder="e.g. Quezon City" required/>
            </div>
            <div className="form-field">
              <label htmlFor="entry.1611279219">Date of Birth<span className="required"> *</span></label>
              <input 
                type="text" 
                id="entry.1611279219" 
                placeholder="MM/DD/YYYY" required
              />
            </div>
          </div>
          <div className="form-field">
          <label htmlFor="entry.1024754805">Position<span className="required"> *</span></label>
          <div>
            <label>
              <input type="radio" id="driver" name="entry.1024754805" value="Driver" />
              Driver
            </label>
          </div>
          <div>
            <label>
              <input type="radio" id="conductor" name="entry.1024754805" value="Conductor" />
              Conductor
            </label>
          </div>
          <div>
            <label>
              <input type="radio" id="mechanic" name="entry.1024754805" value="Mechanic" />
              Mechanic
            </label>
          </div>
          <div>
            <label>
              <input type="radio" id="airConTechnician" name="entry.1024754805" value="Air Con Technician" />
              Air Con Technician
            </label>
          </div>
          <div>
            <label>
              <input type="radio" id="electrician" name="entry.1024754805" value="Electrician" />
              Electrician
            </label>
          </div>
          </div>
          {/*<div className="form-field">
        <label htmlFor="resume">Attach CV/Resume</label>
        <input type="file" name="resume" />
      </div> */}
           <div className="form-field">
            <label htmlFor="recaptcha"><span className="required"></span></label>
            <ReCAPTCHA
              sitekey="6LeIA9EpAAAAAGjeQv_wAtRp8IE67u0fDVL9rOBa"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" className={recaptchaValue ? 'submit-active' : 'submit-disabled'} disabled={!recaptchaValue}>Submit</button>
          {formSubmitted && (
            <p className="submission-message">Form submitted successfully!</p>
          )}
          <p className="contact-info">or send us your application with CV/resume at <a href="mailto:hr@pascualliner.com" style={{ color: '#1A438D', textDecoration: 'underline' }}>hr@pascualliner.com</a></p>
        </div>
      </div>
      </form>
      <Footer />
    </div>
  );
}

export default Careers;
