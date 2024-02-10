import React from 'react';
import './css/Contact.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';


const TITLE = 'Contact Us | Pascual Liner Inc.';

function Contact() {
  return (
    <div className="About">
      <Header />
      <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <Footer />
    </div>
  );
}

export default Contact;
