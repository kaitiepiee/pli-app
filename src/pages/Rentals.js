import React from 'react';
import './css/About.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';


const TITLE = 'Rentals | Pascual Liner Inc.';

function Rentals() {
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

export default Rentals;
