import React, { useEffect, useState, useCallback } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../features/products/productSlice';

const OurStore = () => {
    const [setGrid] = useState(4);
    const productState = useSelector((state) => state.products.product);
    console.log(productState);
    const dispatch = useDispatch();
    const getProducts = useCallback(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <>
    <Meta title={'Our Store'} />
        <BreadCrumb title='Our Store' />
        <div className='store-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-2'>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Shop By Categories
                        </h3>
                        <div>
                            <ul className='ps-0'>
                                <li>Watches</li>
                                <li>Tvs</li>
                                <li>Cameras</li>
                                <li>Laptops</li>
                            </ul>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            filter By:
                        </h3>
                        <div>
                            <h6 className='sub-title'>Availability</h6>
                            <div>
                            <div className='form-check mb-2'>
                                <input className='form-check-input' type='checkbox' value='' id='availability-1'/>
                                <label className='form-check-label' htmlFor='availability-1'>
                                    In Stock (1)
                                </label>
                            </div>
                            <div className='form-check mb-2'>
                                <input className='form-check-input' type='checkbox' value='' id='availability-1'/>
                                <label className='form-check-label' htmlFor='availability-1'>
                                    Out of Stock (0)
                                </label>
                            </div>
                            </div>
                            <h6 className='sub-title'>Price</h6>
                            <div className='d-flex align-items-center gap-10'>
                                <div className='form-floating'>
                                    <input 
                                    type='number' 
                                    className='form-control'
                                    id='floatingInput' 
                                    placeholder='From'
                                    />
                                    <label htmlFor='floatingInput'>From</label>
                                </div>
                                <div className='form-floating'>
                                    <input 
                                    type='number' 
                                    className='form-control' 
                                    id='floatingInput1' 
                                    placeholder='To'
                                    />
                                    <label htmlFor='floatingInput1'>To</label>
                                </div>
                            </div>
                            <h6 className='sub-title'>Colors</h6>
                            <div className='d-flex align-items-center gap-15'>
                                <ul className='colors ps-0'>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Product Tags
                        </h3>
                        <div>
                            <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                <span className='badge bg-light text-secondary rounded-3 py-1 px-1'>
                                    Headphones
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-1 px-1'>
                                    Laptops
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-1 px-1'>
                                    Electronics
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-1 px-1'>
                                    Smartphones
                                    </span>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className='filter-title'>
                            Random Products
                        </h3>
                        <div>
                        <div className='random-products mb-3 d-flex'>
                            <div className='w-50'>
                                <img src='images/sony.avif'
                                className='img-fluid' 
                                alt='Sony'/>
                            </div>
                            <div className='w-50'>
                                <h6>Kids Headphones Bulk 10 Pack Multi Colored For Students</h6>
                                <ReactStars 
                                count={5} 
                                size={15} 
                                value={3} 
                                edit={false} 
                                color2={'#ffd700'}
                                />
                                <b>KES 3,500</b>
                            </div>
                        </div>
                        <div className='random-products d-flex'>
                            <div className='w-50'>
                                <img src='images/ipad.avif'
                                className='img-fluid' 
                                alt='Honor'/>
                            </div>
                            <div className='w-50'>
                                <h6>Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+3G Tablet</h6>
                                <ReactStars 
                                count={5} 
                                size={15} 
                                value={3} 
                                edit={false} 
                                color2={'#ffd700'}
                                />
                                <b>KES 3,500</b>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col-10'>
                    <div className='filter-sort-grid mb-4'>
                        <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex align-items-center gap-10'>
                        <p className='mb-0 d-block' style={{ width: '100px' }}>Sort By:</p>
                            <select className='form-control form-select' id=''>
                                <option value='manual' >Featured</option>
                                <option value='best-selling' selected='selected' >Best selling</option>
                                    <option value='title-ascending' >Alphabetically, A-Z</option>
                                    <option value='title-descending' >Alphabetically, A-Z</option>
                                    <option value='price-ascending' >Price, low to high</option>
                                    <option value='price-descending' >Price, high to low</option>
                                    <option value='price-ascending' >Date, old to new</option>
                                    <option value='created-descending' >Date, new to old</option>
                            </select>
                        </div>
                        <div className='d-flex align-items-center gap-15'>
                            <p className='totalproducts mb-0'>21 Products</p>
                            <div className='d-flex gap-10 align-items-center grid'>
                                <img onClick={() => {setGrid(3);
                                }}
                                src='images/gr4.svg' className='d-block img-fluid' alt='grid' />
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className='products-list pb-5'>
                        <style>
                            {`
                                .product-card {
                                    flex: 0 0 100%;
                                    max-width: 170px;
                                }

                                @media (max-width: 1200px) {
                                    .product-card {
                                        flex: 0 0 150%; /* Set the flex basis to 25% for 4 products in a row */
                                        max-width: 150%; /* Set the maximum width to 25% for 4 products in a row */
                                    }
                                }

                                @media (max-width: 992px) {
                                    .product-card {
                                        flex: 0 0 120%;
                                        max-width: 120%;
                                    }
                                }

                             /* Add more media queries for smaller screen sizes if needed */
                            `}
                     </style>
                        <div className='d-flex flex-wrap' style={{ flexWrap: 'wrap' }}>
                            <ProductCard data={productState} className='product-card' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default OurStore