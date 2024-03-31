import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';

const ProductCard = () => {
  return (
    <>
    <div className='row'>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link to='/wishlist'>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/sony.avif' className='img-fluid' alt='product'/>
                <img src='images/sony-1.avif' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15}
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/compare-product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/products'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/cart'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/tab.JPG' className='img-fluid' alt='product'/>
                <img src='images/tab3.JPG' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15} 
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/bt.avif' className='img-fluid' alt='product'/>
                <img src='images/bt-1.avif' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15} 
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/watch.avif' className='img-fluid' alt='product'/>
                <img src='images/watch-1.avif' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15} 
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/sony-1.avif' className='img-fluid' alt='product'/>
                <img src='images/sony.avif' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15} 
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
      <div className='col-2'>
        <Link to='/products' className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src='images/dispenser.JPG' className='img-fluid' alt='product'/>
                <img src='images/dispenser-1.JPG' className='img-fluid' alt='product'/>
            </div>
            <div className='product-details'>
                <h6 className='brand'>Sony</h6>
                <h5 className='title mb-0'>Sony Portable Bluetooth Speaker with Microphone</h5>
                <ReactStars 
                count={5} 
                size={15} 
                value={3} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>KES 2,000</p>
            </div>
            <div className='action-bar position-absolute'>
                <div className='d-flex flex-column gap-15'>
                    <Link to='/product'>
                        <img src='images/prodcompare.svg' alt='compare'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/view.svg' alt='view'/>
                    </Link>
                    <Link to='/product'>
                        <img src='images/add-cart.svg' alt='addcart'/>
                    </Link>
                </div>
            </div>
        </Link>
      </div>
    </div>
    </>
  )
}

export default ProductCard