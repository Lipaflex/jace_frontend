import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsappSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className='py-4' >
      <div className='container-xxl' >
        <div className='row align-items-center' >
          <div className='col-5' >
            <div className='footer-top-data d-flex gap-30 align-items-center' >
              <img src='images/newsletter.png' alt='newsletter' />
              <h2 className='mb-0 text-white' >Sign Up For Newsletter</h2>
            </div>
          </div>
            <div className='col-7' >
            <div className="input-group">
  <input type="text" className="form-control p-1" placeholder="Your Email Address" 
  aria-label="Your Email Address" aria-describedby="basic-addon2" />
  <span className="input-group-text p-2" id="basic-addon2"> 
  Subscribe!
  </span>
</div>
            </div>
        </div>
      </div>
    </footer>
    <footer className='py-4' >
      <div className='container-xxl' >
        <div className='row' >
          <div className='col-4' >
            <h5 className='text-white mb-5' >Contact</h5>
            <div>
              <address className='text-white fs-6' >River RD, Mutaratara Mall, <br />Near Absa Bank
              </address>
              <h6 className='text-white mt-2 d-block mb-2' >
                <a className='text-white mt-2 d-block mb-2' href='tel:+254704000165'>
                  +254-704-000-165</a></h6>
              <h6 className='text-white mt-3 d-block mb-2' >
                <a className='text-white mt-3 d-block mb-2' href='mailto:ask@jace.co.ke'>
                  ask@jace.co.ke</a>

                  <div className='social_icons d-flex align-items gap-10 mt-0.5' >
                    <a className='text-white' href='https://wa.link/34dm4yhttps://www.facebook.com/dcodeyt' >
                      <h1><FaWhatsappSquare size='1.3rem' /></h1>
                      </a>
                    <a className='text-white' href='https://www.facebook.com/jacemarketplace/dcodeyt' >
                      <h1><FaFacebook size='1.3rem' /></h1>
                      </a>
                      <a className='text-white' href='https://www.tiktok.com/@jace.marketplaces?_t=8j8YjS29bK1&_r=1/dcodeyt' >
                      <h1><FaTiktok size='1.3rem' /></h1>
                      </a>
                      <a className='text-white' href='https://www.instagram.com//dcodeyt' >
                      <h1><FaInstagramSquare size='1.3rem' /></h1>
                      </a>
                      <a className='text-white' href='https://ke.linkedin.com/dcodeyt' >
                      <h1><FaLinkedin size='1.3rem' /></h1>
                      </a>
                  </div>
                  </h6>
            </div>
          </div>
          <div className='col-3' >
            <h5 className='text-white mb-5' >Information</h5>
            <div className='footer-links d-flex flex-column' >
              <Link to='/privacy-policy' className='text-white py-1 mt-0.8' >Privacy Policy</Link>
              <Link to='/refund-policy' className='text-white py-1 mt-0.8' >Refund Policy</Link>
              <Link to='/shipping-policy' className='text-white py-1 mt-0.8' >Shipping Policy</Link>
              <Link to='/terms-conditions' className='text-white py-1 mt-0.8' >Terms & Conditions</Link>
              <Link to='/blog' className='text-white py-1 mt-0.8' >Blogs</Link>
            </div>
          </div>
          <div className='col-3' >
            <h5 className='text-white mb-5' >Account</h5>
            <div className='footer-links d-flex flex-column' >
              <Link className='text-white py-1 mt-0.8' >About Us</Link>
              <Link className='text-white py-1 mt-0.8' >FAQ</Link>
              <Link className='text-white py-1 mt-0.8' >Contact</Link>
            </div>
          </div>
          <div className='col-2' >
            <h5 className='text-white mb-5' >Quick Links</h5>
            <div className='footer-links d-flex flex-column' >
              <Link className='text-white py-1 mt-0.8' >Laptops</Link>
              <Link className='text-white py-1 mt-0.8' >Headphones</Link>
              <Link className='text-white py-1 mt-0.8' >Tablets</Link>
              <Link className='text-white py-1 mt-0.8' >Watch</Link>
              <Link className='text-white py-1 mt-0.8' >Accessories</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-3' >
      <div className='container-xxl' >
        <div className='row' >
          <div className='col-12' >
            <p className='text-center mb-0 text-white' >
              &copy; {new Date().getFullYear()}; 
              Powered By Lipaflex Kenya </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer