import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import './css/Contact.css';
import Header from './Header.js';
import Footer from './Footer.js';
import iconPhone from './icon_phone.png'; 
import iconEmail from './icon_email.png'; 
import ReCAPTCHA from 'react-google-recaptcha';

const TITLE = 'Contact Us | Pascual Liner Inc.';

function Contact() {
  const [recaptchaValue, setRecaptchaValue] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const recaptchaRef = useRef(null); // Create a ref

  const handleSubmit = (event) => {
    event.preventDefault();
    // Your form submission logic goes here
    setFormSubmitted(true);
    // Submit the form data to the Google Form
    const form = event.target;
    const formData = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(response => {
      if (response.ok) {
        console.log('Form submission successful');
      } else {
        console.error('Form submission failed');
      }
    }).catch(error => {
      console.error('Error submitting form:', error);
    });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };

  return (
    <div className="ContactPage">
      <Helmet>
        <title>{TITLE}</title>
      </Helmet>

      <Header />

      <div className="career-container">
        <div className="page-title">
          Contact Us
          <div className="subtitle">
            <p>Have any questions, comments, or suggestions? <br /> Please call, email, or fill out the form below to get in touch. We value your input!</p>
          </div>
        </div>
      </div>

      <div className="contact-row">
        <div className="contact-box">
          <div className="contact-logo">
            <img src={iconPhone} alt="Phone Icon" />
          </div>
          <div className="contact-content">
            <div className="contact-title">
              <h2>Call Us</h2>
            </div>
            <div className="contact-subtitle">
              <p>(8) 828-56462</p>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <div className="contact-logo">
            <img src={iconEmail} alt="Email Icon" />
          </div>
          <div className="contact-content">
            <div className="contact-title">
              <h2>Email Us</h2>
            </div>
            <div className="contact-subtitle">
              <p>admin@pascualliner.com </p>
            </div>
          </div>
        </div>
      </div>

      <form action="https://docs.google.com/forms/d/e/1FAIpQLSfNQiiLOpILAMMJYr6wvokY385bmVKUUqMONFvf2UAhiU7FMA/formResponse">

        
        <div className="contact-form">
          <div className='contact-page-title' style={{ textAlign: 'center' }}>
            Send us a Message!
          </div>
          <div className="contact-form-field">
            <label htmlFor="entry.1801649062">Full Name <span className="required">*</span></label>
            <input type="text" name="entry.1801649062" placeholder="Full Name" required />
          </div>

          <div className="contact-form-row special-row">
            <div className="contact-form-field">
              <label htmlFor="entry.571057253">Email <span className="required">*</span></label>
              <input type="email" name="entry.571057253" placeholder="Email" required />
            </div>
            <div className="contact-form-field">
              <label htmlFor="entry.1212445643">Contact Number <span className="required">*</span></label>
              <input type="text" name="entry.1212445643" placeholder="Contact Number" required />
            </div>
          </div>
          <div className="contact-form-field">
            <label htmlFor="entry.880453">Subject <span className="required">*</span></label>
            <input type="text" name="entry.880453" placeholder="Subject" required />
          </div>
          <div className="contact-form-field">
            <label htmlFor="entry.880453">Message or Inquiry <span className="required">*</span></label>
            <textarea className="contact-form-input" name="entry.880453" rows="5" placeholder="Message or Inquiry" required></textarea>
          </div>
          <div className="form-field">
            <label htmlFor="recaptcha"><span className="required"></span></label>
            <ReCAPTCHA
              ref={recaptchaRef} // Assign the ref here
              sitekey="6LeIA9EpAAAAAGjeQv_wAtRp8IE67u0fDVL9rOBa"
              onChange={handleRecaptchaChange}
            />
          </div>
          <button type="submit" className={recaptchaValue ? "activeButton" : "inactiveButton"} disabled={!recaptchaValue}>Submit Message</button>
          {formSubmitted && (
            <p className="submission-message">Form submitted successfully!</p>
          )}
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Contact;
