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
      <form action=   "https://docs.google.com/forms/d/e/1FAIpQLScY75BNcBJ51kH-wmV-kEcn9JI8Ak5kn3rbgvEUw-ePTB2Hgw/formResponse">
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
            <input type="text" id="entry.1032228108" placeholder="e.g. Quezon City" />
          </div>
          <div className="form-field">
            <label htmlFor="entry.1611279219">Date of Birth</label>
            <input 
              type="text" 
              id="entry.1611279219" 
              placeholder="MM/DD/YYYY" 
            />
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
  );
}

export default Careers;
