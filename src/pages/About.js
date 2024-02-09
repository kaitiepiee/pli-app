import React from 'react';
import './css/About.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';


const TITLE = 'About Us | Pascual Liner Inc.';

function About() {
  return (
    <div className="About">
      <Header />
        <Helmet>
          <title>{ TITLE }</title>
        </Helmet>
      <div className="content-container">
        <div className="mission-vision">
          <div></div>
          <h2>Mission</h2>
          <p className="description-text">
            At Pascual Liner Inc., our mission is to provide reliable and efficient transportation services that connect communities. With a legacy built on the dedication and hard work of our founders and the continuous efforts of our team, we aim to be a trusted partner in facilitating safe and comfortable journeys for our passengers. Through innovation and commitment to excellence, we strive to contribute to the development and convenience of the areas we serve.
          </p>
          <h2>Vision</h2>
          <p className="description-text">
            As a leading transport company, our vision at Pascual Liner Inc. is to be a driving force in shaping the future of commuter transportation. We envision a network that seamlessly connects people, fostering accessibility and convenience. Committed to sustainable practices and customer satisfaction, we aspire to be the preferred choice for commuters, setting the standard for quality service and reliability in the industry.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
