import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';

const ProductCard = (props) => {
    const {data} = props;
    console.log(data);
    let location = useLocation();
  return (
    <>
    {
    data?.map((item, index ) => {
            return (
                <div 
                key={index}
                className= {` ${ location.pathname === "/products" ? `gr-${data}` : "col-2" }`} >
        <Link to={`${
            location.pathname === "/"
            ? "/product/:id"
            : location.pathname === "/product/:id"
            ? "/product/:id"
            : ":id"
        }`}
        className='product-card mb-3 position-relative'>
            <div className='wishlist-icon position-absolute'>
                <Link to='/wishlist'>
                    <img src='images/wish.svg' alt='wishlist' />
                </Link>
            </div>
            <div className='product-image'>
                <img src={item?.images?.[0]?.url}
                className='img-fluid mx-auto'
                alt='product image'
                />
                <img src={item?.images?.[0]?.url}
                className='img-fluid mx-auto'
                alt='product image'
                />
            </div>
            <div className='product-details'>
                <h6 className='brand'>{item?.brand}</h6>
                <h5 className='product-title mb-0'>
                    {item?.title}
                    </h5>
                <ReactStars 
                count={5} 
                size={15}
                value={item?.totalrating.toString()} 
                edit={false} 
                color2={'#ffd700'}
                />
                <p className='price'>Ksh {item?.price}</p>
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
            )
        })
    }
      
    </>
  )
}

export default ProductCard