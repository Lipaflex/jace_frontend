import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-stars';
import { useState } from 'react';
//import ReactImageZoom from 'react-image-zoom';
import ImageZoom from 'react-image-zooom';
//import { Link } from 'react-router-dom';
import { IoGitCompareOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import Container from '../components/Container';

const SingleProduct = () => {
    const imageUrl = "https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
    const props = {width: 400, 
        height: 500,
        scale:1.5,
        zoomWidth:500, 
       };
    const [orderedproduct ] = useState(true);
  return (
    <>
    <Meta title={'Product Name'} />
    <BreadCrumb title='Product Name' />
    <Container class1='main-product-wrapper py-5 home-wrapper-2' >
            <div className='row' >
                <div className='col-6' >
                    <div className='main-product-image' >
                        <div>
                        <ImageZoom  src={imageUrl} zoom="300" />
                            </div>
                    </div>
                    <div className='other-product-images d-flex flex-wrap gap-15' >
                        <div>
                            <img src='https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                            className='img-fluid' alt='' />
                        </div>
                        <div>
                            <img src='https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                            className='img-fluid' alt='' />
                        </div>
                        <div>
                            <img src='https://images.pexels.com/photos/277390/pexels-photo-277390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                            className='img-fluid' alt='' />
                        </div>
                        <div>
                            <img src='https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' 
                            className='img-fluid' alt='' />
                        </div>
                    </div>
                </div>
                <div className='col-6' >
                    <div className='main-product-details' >
                        <div className='border-bottom' >
                        <h3 className='title' >
                        Kids Headphones Bulk 10 Pack Multi Colored For Students
                        </h3>
                        </div>
                        <div className='border-bottom py-3' >
                            <p className='price' >KES 3,500</p>
                            <div className='d-flex align-items-center gap-10' >
                            <ReactStars
                    count={5}
                    size={24}
                    value='3'
                    edit={false}
                    color2={'#ffd700'} 
                    />
                    <p className='mb-0 t-review' >(2 Reviews)</p>
                            </div>
                            <a className='review-btn' href='#review' >
                                Write a Review
                                </a>
                        </div>
                        <div className='py-3' >
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Type:</h3>
                                <p className='product-data' >Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Brand:</h3>
                                <p className='product-data' >Apple Watch</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Category:</h3>
                                <p className='product-data' >Watches</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Tags:</h3>
                                <p className='product-data' >Watch, accessories</p>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Availability:</h3>
                                <p className='product-data' >In Stock</p>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3' >
                                <h3 className='product-heading' >Size:</h3>
                                <div className='d-flex flex-wrap gap-15' >
                                    <span className='badge border border-1 bg-white text-dark border-secondary' >
                                        S</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary' >
                                        M</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary' >
                                        L</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary' >
                                        XL</span>
                                    <span className='badge border border-1 bg-white text-dark border-secondary' >
                                        XXL</span>
                                </div>
                            </div>
                            <div className='d-flex gap-10 flex-column mt-2 mb-3' >
                                <h3 className='product-heading' >Color:</h3>
                                
                            </div>
                            <div className='d-flex align-items-center gap-15 flex-row mt-2 mb-3' >
                                <h3 className='product-heading' >Quatity:</h3>
                                <div className='' >
                                    <input 
                                    type='number'
                                    name=''
                                    min={1}
                                    max={10}
                                    className='form-control'
                                    style={{width: "70px" }}
                                    id='' >
                                    </input>
                                </div>
                                <div className='d-flex align-items-center gap-30 ms-5' >
                                <button className='button border-0' type='submit' >
                                    Add to Cart
                                    </button>
                                <button className='button signup' >
                                    Buy it Now
                                    </button>
                                </div>
                            </div>
                            <div className='d-flex align-items-center gap-15' >
                                <div>
                                    <a href="/#" ><IoGitCompareOutline className='fs-5' />
                                    Add to Compare</a>
                                </div>
                                <div>
                                    <a href="/#" ><CiHeart className='fs-5' />
                                    Add to Wishlist</a>
                                </div>
                            </div>
                            <div className='d-flex gap-10 align-items-center my-2' >
                                <h3 className='product-heading' >Shipping & Returns:</h3>
                                <p className='product-data' >
                                <br />Free shipping and returns available on all orders!<br />
                                We ship all US domestic orders within <b>5-10 business days!</b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Container>

    <Container class1='description-wrapper py-5 home-wrapper-2' >
            <div className='row' >
                <div className='col-12' >
                <h4>Description</h4>
                    <div className='bg-white p-3' >
                    <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui 
                    blanditiis praesentium voluptatum deleniti atque corrupti quos 
                    dolores et quas molestias excepturi sint occaecati cupiditate n
                    on provident, similique sunt in culpa qui officia deserunt mollitia 
                    animi, id est laborum et dolorum fuga.
                    </p>
                    </div>
                </div>
            </div>
    </Container>

    <Container class1='reviews-wrapper home-wrapper-2' >
            <div className='row' >
                <div className='col-12' >
                    <h4 id='review' >Reviews</h4>
                    <div className='review-inner-wrapper' >
                    <div className='review-head d-flex justify-content-between align-items-end' >
                        <div>
                            <h4 className='mb-2' >Customer Reviews</h4>
                            <div className='d-flex gap-10 align-items-center' >
                            <ReactStars
                    count={5}
                    size={24}
                    value='3'
                    edit={false}
                    color2={'#ffd700'} 
                    />
                    <p className='mb-0' >Based on 2 Reviews</p>
                            </div>
                        </div>
                        {
                            orderedproduct&&
                            <div>
                           <a className='text-dark text-decoration-underline' 
                           href="/#" >Write a Review</a> 
                        </div>
                        }
                    </div>
                    <div className='review-form py-4' >
                        <h4>Write a Review</h4>
                    <form action='' className='d-flex flex-column gap-15' >
                        <div>
                        <ReactStars
                    count={5}
                    size={24}
                    value='3'
                    edit={true}
                    color2={'#ffd700'} 
                    />
                        </div>
                  <div>
                    <textarea name='' id='30' 
                    className='w-100 form-control' 
                    rows='4' placeholder='Comments' >
                    </textarea>
                  </div>
                  <div className='d-flex justify-content-end' >
                    <button className='button border-0' >Submit Review</button>
                  </div>
                </form>
                    </div>
                    <div className='reviews mt-3' ></div>
                    <div className='review' >
                    <div className='d-flex gap-10 align-items-center' >
                        <h6 className='mb-0' >Navdeep</h6>
                        <ReactStars
                    count={5}
                    size={24}
                    value='3'
                    edit={false}
                    color2={'#ffd700'} 
                    />
                    </div>
                    <p className='mt-4' >
                        Heartfelt Testimonial from a Delighted Jace Marketplace Customer, thank you</p>
                    </div>
                    </div>
                </div>
            </div>
    </Container>

    <Container class1='popular-wrapper py-4 home-wrapper-2' >
        <div className='row' >
          <div className='col-12' >
            <h3 className='section-heading' >You May Also Like</h3>
          </div>
          
        </div>
        <div className='row' >
          <ProductCard />
        </div>
    </Container>
    </>
  )
}

export default SingleProduct