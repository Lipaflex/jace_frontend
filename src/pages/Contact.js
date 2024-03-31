import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { IoHome } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsInfoLg } from "react-icons/bs";
import Container from '../components/Container';

const Contact = () => {
  return (
    <>
    <Meta title={'Contact Us'} />
    <BreadCrumb title='Contact Us' />
    <Container class1='contact-wrapper py-5 home-wrapper-2' >
        <div className='row' >
          <div className='col-12' >
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8163072357693!2d36.827006273923026!3d-1.284123698703669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1129467f7a33%3A0xddd3b9652dd30949!2sMutaratara%20Mall!5e0!3m2!1sen!2ske!4v1706452193916!5m2!1sen!2ske" 
          width="600" 
          height="450" 
          className='border-0 w-100'
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade">
          </iframe>
          </div>
          <div className='col-12 mt-5' >
            <div className='contact-inner-wrapper d-flex justify-content-between' >
              <div>
                <h3 className='contact-title mb-4' >Contact</h3>
                <form action='' className='d-flex flex-column gap-15' >
                  <div>
                    <input type='text' className='form-control' placeholder='Name' />
                  </div>
                  <div>
                    <input type='email' className='form-control' placeholder='Email' />
                  </div>
                  <div>
                    <input type='tel' className='form-control' placeholder='Mobile Number' />
                  </div>
                  <div>
                    <textarea name='' id='30' 
                    className='w-100 form-control' 
                    rows='4' placeholder='Comments' >
                    </textarea>
                  </div>
                  <div>
                    <button className='button border-0' >Submit</button>
                  </div>
                </form>
              </div>
              <div>
                <h3 className='contact-title mb-4' >Get In Touch With Us</h3>
                <div>
                  <ul className='ps-0' >
                    <li className='mb-2 d-flex gap-15 align-items-center' >
                    <IoHome className='fs-5' />
                    <address className='mb-1' >
                      House No. 12, Near Vilage chopal, Mutaratara Mall, River Road</address>
                    </li>
                    <li className='mb-2 d-flex gap-15 align-items-center' >
                    <BsFillTelephoneFill className='fs-5' />
                    <a className='mb-0' href='tel:+254704000165'>
                  +254-704-000-165</a>
                    </li>
                    <li className='mb-2 d-flex gap-15 align-items-center' >
                    <MdEmail className='fs-5' />
                    <a className='mb-0' href='mailto:ask@jace.co.ke'>
                  ask@jace.co.ke</a>
                    </li>
                    <li className='mb-2 d-flex gap-15 align-items-center' >
                    <BsInfoLg className='fs-5' />
                    <p className='mb-0' >Monday - Saturday 9AM - 5PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </>
  )
}

export default Contact