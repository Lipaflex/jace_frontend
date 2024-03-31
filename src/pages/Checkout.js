import React from 'react'
import { Link } from 'react-router-dom'
import { IoArrowBackCircle } from "react-icons/io5";
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>
    <Container class1='checkout-wrapper py-5 home-wrapper-2' >
            <div className='row' >
                <div className='col-7' >
                    <div className='checkout-left-data' >
                       <h3 className='website name' >Jace Marketplace</h3> 
                       <nav style={{"--bs-breadcrumb-divider": '>'}} 
                       aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link className='text-dark total-price' to='/cart'>Cart</Link>
                                </li> &nbsp;/
                            <li className="breadcrumb-item active total-price" 
                            aria-current="page">Information
                            </li>&nbsp;/
                            <li className="breadcrumb-item total-price">
                                <a href="#" className='text-dark active' >Shipping</a>
                                </li> &nbsp;/
                            <li className="breadcrumb-item total-price active" 
                            aria-current="page">Payment
                            </li>
                        </ol>
                        </nav>
                        <h4 className='title total text-dark' >
                            Contact Information
                        </h4>
                        <p className='user-details total' >Jack Kinyua (jackmuriithi0@gmail.com) 
                        </p>
                        <h4 className='mb-3'>Shipping Address</h4>
                        <form action='' 
                        className='d-flex gap-15 flex-wrap justify-content-between' >
                            <div className='w-100' >
                                <select name='' className='form-control form-select' id='' >
                                 <option value='' selected disabled >Select Country</option>   
                                </select>
                            </div>
                            <div className='flex-grow-1' >
                                <input type='text' 
                                placeholder='First Name'  
                                className='form-control' />
                            </div>
                            <div className='flex-grow-1' >
                                <input type='text' 
                                placeholder='Last Name' 
                                className='form-control' />
                            </div >
                            <div className='w-100' >
                                <input type='text' 
                                placeholder='Phone Number' 
                                className='form-control' />
                            </div>
                            <div className='w-100' >
                                <input type='text' 
                                placeholder='Apartment, Suite, etc' 
                                className='form-control' />
                            </div>
                            <div className='flex-grow-1' >
                            <input type='text' 
                            placeholder='City' 
                            className='form-control' />
                            </div>
                            <div className='flex-grow-1' >
                            <select name='' 
                            className='form-control form-select' id='' >
                                <option value='' selected disabled >Select County</option>
                                </select>
                            </div>
                            <div className='flex-grow-1' >
                            <input type='text' 
                            placeholder='Area' 
                            className='form-control' />
                            </div>
                            <div className='w-100' >
                                <div className='d-flex justify-content-between align-items-center' >
                                    <Link to='/cart' className='text-dark' >
                                        <IoArrowBackCircle className='me-2' />
                                     Return to Cart</Link>
                                    <Link to='/cart' className='button' >Continue to Shipping</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='col-5' >
                    <div className='border-bottom py-4' >
                        <div className='d-flex gap-10 mb-2 align-items-center' >
                        <div className='w-70 d-flex gap-10' >
                            <div className='w-25 position-relative' >
                                <span style={{top: '-20px', right: '2px' }}
                                className='badge bg-secondary text-white rounded-circle position-absolute ' >
                                    1</span>
                                <img className='img-fluid' src='https://media.istockphoto.com/id/1059154336/photo/boombox.jpg?s=612x612&w=0&k=20&c=pwJ_DKNUkMDgs-wiPjxOteHzAWr4dl7wIOWi0cwMmQU=' 
                                alt='product' />
                            </div>
                            <div>
                                <h5 className='total-price text-dark' >JBL Bluetooth Speaker</h5>
                                <p className='total-price' >JBL</p>
                            </div>
                        </div>
                        <div className='flex-glow-1' >
                            <h5 className='total text-dark' >KES 9,000</h5>
                        </div>
                        </div>
                    </div>
                    <div className='border-bottom py-4' >
                    <div className='d-flex justify-content-between align-items-center' >
                        <p className='total' >Subtotal</p>
                        <p className='total-price text-dark' >KES 19,000</p>
                    </div>
                    <div className='d-flex justify-content-between align-items-center' >
                        <p className='mb-0 total' >Shipping</p>
                        <p className='mb-0 total-price text-dark' >KES 1,000</p>
                    </div>
                    </div>
                    <div className='d-flex justify-content-between align-items-center border-bottom py-4' >
                        <h4 className='total' >Total</h4>
                        <h5 className='total-price text-dark' >KES 20,000</h5>
                    </div> 
                </div>
            </div>
    </Container>
    </>
  )
}

export default Checkout