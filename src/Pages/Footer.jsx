import React from 'react';
import f from '../assets/Images/carousels/12c.webp'

const Footer = () => {
  return (
    <footer className="footer ">
      <div className="container text-center">
        <div className="row mb-lg-5 d-lg-block">
          <div className="col-md-12">
            <img 
              src={f} 
              alt="Interior Design" 
              className="footer-image w-25 " 
            />
            <div className="footer-text ">
              <h1 className='bolder'>Interior <br/>Design</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 footer-links  mt-lg-5">
            <a href="#books">Books</a>
            <a href="#press-room">Press Room</a>
            <a href="#private">Private</a>
            <a href="#legal-notice">Legal Notice</a>
            <a href="#instagram">Instagram</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-12 footer-credits mt-lg-5">
            <p>Created by 14.6</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
