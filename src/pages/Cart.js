import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import Container from '../components/Container';

const Cart = () => {
  return (
    <>
    <Meta title={'Cart'} />
    <BreadCrumb title='Cart' />
    <Container class1='cart-wrapper home-wrapper-2 py-5' >
            <div className='row' >
                <div className='col-12' >
                    <div className='cart-header py-3 d-flex justify-content-between align-items-center' >
                        <h4 className='cart-col-1' >Product</h4>
                        <h4 className='cart-col-2' >Price</h4>
                        <h4 className='cart-col-3' >Quantity</h4>
                        <h4 className='cart-col-4' >Total</h4>
                    </div>
                    <div className='cart-data py-3 mb-2 d-flex justify-content-between align-items-center' >
                        <div className='cart-col-1 gap-15 d-flex align-items-center' >
                            <div className='w-25' >
                                <img src='https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                                className='img-fluid'
                                alt='product image' />
                            </div>
                            <div className='w-75' >
                                <p>Name:</p>
                                <p>Size:</p>
                                <p>Color:</p>
                            </div>
                        </div>
                        <div className='cart-col-2' >
                            <h5 className='price' >KES 2,000</h5>
                        </div>
                        <div className='cart-col-3 gap-15 d-flex align-items-center' >
                            <div>
                                <input className='form-control' 
                                type='number' 
                                name='' 
                                min={1}
                                max={10}
                                id='' />
                            </div>
                            <div>
                            <RiDeleteBin6Fill className='text-danger' />
                            </div>
                        </div>
                        <div className='cart-col-4' >
                        <h5 className='price' >KES 2,000</h5>
                        </div>
                    </div>
                </div>
                <div className='col-12 py-2 mt-4' >
                    <div className='d-flex justify-content-between align-items-baseline' >
                    <Link to='/store' className='button' >
                        Continue Shopping
                        </Link>
                        <div className='d-flex flex-column align-items-end' >
                            <h4>SubTotal: KES 2,000</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to='/checkout' className='button' >
                                Checkout
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
    </Container>
    </>
  )
}

export default Cart