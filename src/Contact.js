import React from 'react';
import './Contact.css';
import resume from '/Users/Sunny/development/programming/react-portfolio/src/Resume.pdf';

const Contact = () => {
  return (
      <div id="contact" className="contact">
        <section className="contact-header">
          <h1>Contact</h1>
          <br/>
          <br/>
        </section>
        <div id="icons">
          <i class="fas fa-map-marker-alt fa-2x social"></i>Salt Lake City, UT
          <i class="fas fa-phone fa-2x social"></i>312-721-4311
          <a className="social" href="mailto:sunnydchanthavong@gmail.com" target="_blank" rel="noopener noreferrer"><i class="far fa-envelope fa-2x social"></i></a>sunnydchanthavong@gmail.com
          
          <section className="icons-2">
            <a className="social-2" href="https://www.linkedin.com/in/sunny-chanthavong" target="_blank"><i class="fab fa-linkedin-in fa-2x social"></i></a>
            <a className="social-2" href="https://github.com/sudochanth" target="_blank"><i class="fab fa-github fa-2x social"></i></a>
            <a className="social-2" href="https://drive.google.com/file/d/1P21L-G0zVvVncF_WKGU2C6X4ZfxTBNWD/view" target="_blank"><i class="far fa-file fa-2x"></i></a>
          </section>

        </div>
      </div>

  );
};

export default Contact;