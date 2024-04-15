import React from 'react';
import { Helmet } from 'react-helmet';
import './css/Contact.css';
import Header from './Header.js';
import Footer from './Footer.js';
import iconPhone from './icon_phone.png'; 
import iconEmail from './icon_email.png'; 

const TITLE = 'Contact Us | Pascual Liner Inc.';

function Contact() {
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
         <p>Have any questions, comments, or suggestions? <br></br> Please call, email, or fill out the form below to get in touch. We value your input!</p>
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

      <form action= "https://docs.google.com/forms/d/e/1FAIpQLScY75BNcBJ51kH-wmV-kEcn9JI8Ak5kn3rbgvEUw-ePTB2Hgw/formResponse">
        <div className="contact-form">
          <div className='contact-page-title' style={{textAlign: 'center'}}>
            Send us a Message
          </div>
          <div className="contact-form-field">
            <label htmlFor="fentry.832577582"></label>
            <input type="text" name="entry.832577582" placeholder="Full Name" />
          </div>
          
          <div className="contact-form-row special-row">
            <div className="contact-form-field">
              <label htmlFor="entry.1032228108"></label>
              <input type="text" name="entry.1032228108" placeholder="Email" />
            </div>
            <div className="contact-form-field">
              <label htmlFor="entry.1611279219"></label>
              <input type="text" name="entry.1611279219" placeholder="Contact Number" />
            </div>
          </div>
          <div className="contact-form-field">
            <label htmlFor="entry.1048203182"></label>
            <input type="text" name="entry.1048203182" placeholder="Subject" />
          </div>
          <div className="contact-form-field">
            <label htmlFor="entry.123456789"></label>
            <textarea className="contact-form-input" name="entry.123456789" rows="5" placeholder="Message or Inquiry"></textarea>
          </div>
          <button type="submit">Submit Message</button>
        </div>
      </form>

      <Footer />
    </div>
  );
}

export default Contact;
