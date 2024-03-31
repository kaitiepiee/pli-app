import './css/Careers.css';
import Header from './Header.js';
import Footer from './Footer.js';
import { Helmet } from 'react-helmet';
import iconAirCon from './icon_aircon.png'; 
import iconBus from './icon_bus.png'; 
import iconFlash from './icon_flash.png'; 
import iconTicket from './icon_ticket.png'; 
import iconTools from './icon_tools.png'; 



const TITLE = 'Careers | Pascual Liner Inc.';

function Careers() {

  
  return (
    <div className="Career">
      <Header />
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <div className="content-container">
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
            <div className="subtitle">
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
            <div className="subtitle">
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
            <div className="subtitle">
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
            <div className="subtitle">
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
            <div className="subtitle">
              <p>Repair engines and components to ensure safety and performance of the buses.</p>
            </div>
          </div>
        </div>
      </div>



      <form action= "https://docs.google.com/forms/d/e/1FAIpQLScY75BNcBJ51kH-wmV-kEcn9JI8Ak5kn3rbgvEUw-ePTB2Hgw/formResponse">
      <div className="apply-form">
        <div className='title'>
          <h2>Apply Now!</h2>
        </div>
        <div className="form-field">
          <label htmlFor="fentry.832577582">Full Name</label>
          <input type="text" name="entry.832577582" placeholder="e.g. Juan Dela Cruz" />
        </div>
        <div className="form-field">
          <label htmlFor="entry.1242769675">Email</label>
          <input type="email" name="entry.1242769675" placeholder="e.g. juandelacruz@gmail.com" />
        </div>
        <div className="form-field">
          <label htmlFor="entry.1048203182">Contact Number</label>
          <input type="text" name="entry.1048203182" placeholder="e.g. 09XX XXX XXXX" />
        </div>
        <div className="form-row special-row">
          <div className="form-field">
            <label htmlFor="entry.1032228108">City of Residence</label>
            <input type="text" name="entry.1032228108" placeholder="e.g. Quezon City" />
          </div>
          <div className="form-field">
            <label htmlFor="entry.1611279219">Date of Birth</label>
            <input type="text" name="entry.1611279219" placeholder="MM/DD/YYYY" />
          </div>
        </div>
        <div className="form-field">
        <label htmlFor="entry.1024754805">Position</label>
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


            {/* <option value="" disabled selected>Select Career</option>
            <option value="1">Driver</option>
            <option value="2">Conductor</option>
            <option value="3">Mechanic</option>
            <option value="4">Air Con Technician</option>
            <option value="4">Electrician</option> */}
  
        </div>
        {/*<div className="form-field">
      <label htmlFor="resume">Attach CV/Resume</label>
      <input type="file" name="resume" />
    </div> */}
        <button type="submit">Submit</button>
        <p className="contact-info">or send us your application with CV/resume at <a href="mailto:hr@pascualliner.com" style={{ color: '#1A438D', textDecoration: 'underline' }}>hr@pascualliner.com</a></p>
      </div>
      </form>
      <Footer />
    </div>
    </div>
  );
}

export default Careers;
