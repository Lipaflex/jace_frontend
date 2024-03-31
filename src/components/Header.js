import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs';
const Header = () => {
  return (
    <>
    <header className='Header-top-strip py-3'>
      <div className='container-xxl' >
        <div className='row' >
          <div className='col-6' >
            <p className='text-white d-block mb-0' >
              Free Shipping Over $100 & Free Returns</p>
          </div>
          <div className='col-6' >
            <p className='text-end text-white mb-0 ' >
              Hotline: <a href='tel:+254 704 000 111' className='text-white'>+254 704 000 165</a>
            </p>
          </div>
        </div>
      </div>
    </header>
    <header className='Header-upper py-3' >
      <div className='container-xxl'>
        <div className='row align-item-center' >
          <div className='col-2' >
          <h5>
          <Link style={{ pointerEvents: 'none' }}>
          <img src='images/jace_1.png' alt='logo' 
          style={{ width: '60px', height: '53px', 
          pointerEvents: 'none' }} />
          </Link>
          </h5>
          </div>
          <div className='col-5' >
          <div className="input-group">
  <input type="text" className="form-control p-2" 
  placeholder="Search Products Here.." 
  aria-label="Search Products Here.." 
  aria-describedby="basic-addon2" />
  <span className="input-group-text p-1" id="basic-addon2"> 
  <BsSearch className='fs-6' /> 
  </span>
</div>
          </div>
          <div className='col-5' >
            <div className='Header-upper-links d-flex align-item-center justify-content-between' >
              <div>
                <Link to='/compare-product' 
                className='d-flex align-items-center gap-10 text-white ' >
                <img src='images/compare.svg' alt='compare' />
                <p className='mb-0' >
                  Compare <br />Products</p>
              </Link>
              </div>
              <div>
                <Link to='/wishlist' 
                className='d-flex align-items-center gap-10 text-white' >
                <img src='images/wishlist.svg' alt='' />
                <p className='mb-0' >
                  Favourite <br />wishlist</p>
              </Link>
              </div>
              <div>
                <Link to='/login' 
                className='d-flex align-items-center gap-10 text-white' >
                <img src='images/user.svg' alt='user' />
                <p className='mb-0' >
                  Log in <br />My Account</p>
              </Link>
              </div>
              <div>
                <Link to='/cart' 
                className='d-flex align-items-center gap-10 text-white' >
                <img src='images/cart.svg' alt='cart' />
                <div className='d-flex flex-column gap-10' >
                  <span className='badge bg-white text-dark'>0</span>
                  <p className='mb-0' >Ksh500</p>
                </div>
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <header className='Header-upper py-1' >
    </header>
    <header className='Header-bottom py-1' >
      <div className='container-xxl' >
        <div className='row' >
          <div className='col-12' >
           <div className='menu-bottom d-flex align-items-center gap-30' >
            <div>
            <div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 gap-15 d-flex align-items-center" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    <img src='images/menu.svg' alt='' /> 
    <span className='me-0 d-inline-block' >Shop Categories</span>
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><Link className="dropdown-item text-white" to="">Electronics</Link></li>
    <li><Link className="dropdown-item text-white" to="">Smartphones</Link></li>
    <li><Link className="dropdown-item text-white" to="">Beauty Products</Link></li>
  </ul>
</div>
            </div>
            <div className='menu-links' >
              <div className='d-flex align-items-center gap-15' >
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/store' >Our Store</NavLink>
                <NavLink to='/blog' >Blogs</NavLink>
                <NavLink to='/contact' >Contact</NavLink>
              </div>
            </div>
           </div>
          </div>
        </div>
      </div>
    </header>
    </>
  )
}

export default Header