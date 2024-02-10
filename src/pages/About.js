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
          <h2>History</h2>
          <p className="description-text">
          Pascual Liner Inc. was formed out of the talents, resources and efforts of its founder, the late Mr. Manuel F. Pascual, Sr., his late wife Mrs. Juana P. Pascual with their five children who all worked toward the success of the company. </p>
          <p className="description-text">
          Pascual Liner Inc. was organized in 1963 with its office and garage located in Baesa, Quezon City with an area of 5,000 square meters. The company then, only had 12 Ford commuter buses, which were financed by Ford Phils. Routing from Novaliches, Quezon City to Baclaran, Parañaque via EDSA. In the years that followed, the company also acquired several commuter buses from International Harvester Phils. (IH Phils.) and Isuzu Phils. the former, financed by Rizal Commercial Banking Corp. and the latter, financed by the Development Bank of the Philippines.
          </p>
          <p className="description-text">
          In 1977, Pascual Liner, Inc. moved to a bigger office and garage in Novaliches, Quezon City with an estimated 11,000 square meters lot area, which were more than enough to accommodate the expansion plans of the company. Since then, the company has considered Novaliches, Quezon City as its "home".
          </p>
          <p className="description-text">
          In the next years, Pascual Liner, Inc. continuously expanded and purchased commuter buses to local bus manufacturers and even imported buses from Japan and Singapore. In the early 1990s, the company acquired from Hino Philippines 90 units of aircon commuter buses. It was during this time that Pascual Liner, Inc. became the biggest transport company in Metro Manila with more than 200 commuter buses in its fleet and 900 employees, routing from Novaliches, Quezon City to Alabang, Muntinlupa.
          </p>
          <p className="description-text">
          Pascual Liner, Inc. is considered as one of the contributing factors to the success of Novaliches. For more than 40 years, it has brought people to their workplace, homes and vise-versa.
          </p>
          <p className="description-text">
          In 1997, Mr. Manuel F. Pascual, Sr., founder and President of Pascual Liner, Inc. died but his legacy lives on and the company continues to provide transportation to people through the management of his five children namely: Rodolfo P. Pascual, Sr., Erlinda Pascual-Soriano, Rolando P. Pascual, Emiliana Pascual-Bautista and Manuel P. Pascual, Jr.         
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
