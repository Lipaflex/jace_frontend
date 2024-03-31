import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
//import SpecialProduct from '../components/SpecialProduct';
import Container from '../components/Container';
import { services } from '../Utils/Data';

const Home = () => {
  const [Featuredproducts] = useState( [
    {
        id:11,
        name:'Watch',
        description:'Introducing the SmartGear Apex Smart Watch – a fusion of style and intelligence. Elevate your daily routine with this sleek, high-tech timepiece. Monitor your fitness goals.l',
        price: 20000,
        image:'images/watch-2.jpg',
    },
    {
      id:12,
      name:'Watch',
      description:'Introducing the SmartGear Apex Smart Watch – a fusion of style and intelligence. Elevate your daily routine with this sleek, high-tech timepiece. Monitor your fitness goals.l',
      price: 20000,
      image:'images/watch-2.jpg',
  },
  {
    id:13,
    name:'Watch',
    description:'Introducing the SmartGear Apex Smart Watch – a fusion of style and intelligence. Elevate your daily routine with this sleek, high-tech timepiece. Monitor your fitness goals.l',
    price: 20000,
    image:'images/watch-2.jpg',
},
{
  id:14,
  name:'TV',
  description:'Introducing the SmartGear Apex Smart Watch – a fusion of style and intelligence. Elevate your daily routine with this sleek, high-tech timepiece. Monitor your fitness goals.l',
  price: 20000,
  image:'images/watch-2.jpg',
},

]);
  return (
    <>
    <Container class1='home-wrapper-1 py-4' >
    <div className='row' >
          <div className='col-6' >
            <div className='main-banner position-relative' >
              <img src='images/main-banner-1.jpg' 
              className='img-fluid rounded-3' alt='main banner' />
              <div className='main-banner-content position-absolute' >
                <h4>SUPERCHARGED FOR PROS.</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>For KES 160,000 or KES 22,133 <br /> for 12 Months with Lipaflex.</p>
                <Link className='button' >BUY NOW</Link>
              </div>
            </div>
          </div>
          <div className='col-6' >
            <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center' >
            <div className='small-banner position-relative' >
              <img src='images/catbanner-01.jpg' 
              className='img-fluid rounded-3' alt='main banner' />
              <div className='small-banner-content position-absolute' >
                <h4>BEST SALES</h4>
                <h5>iPad S13+ Pro.</h5>
                <p>For KES 160,000 or <br />KES 22,133/mo. for 12 mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative' >
              <img src='images/catbanner-02.jpg' 
              className='img-fluid rounded-3' alt='main banner' />
              <div className='small-banner-content position-absolute' >
                <h4>NEW ARRIVAL</h4>
                <h5>Laptops Max</h5>
                <p>For KES 154,000 or  <br />KES 20,133/mo. for 12 mo.</p>
              </div>
            </div>
            <div className='small-banner position-relative' >
              <img src='images/catbanner-03.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div className='small-banner-content position-absolute' >
                <h4>15% OFF.</h4>
                <h5>Smartwatch 7</h5>
                <p>Shop the best band <br /> styles and colors.</p>
              </div>
            </div>
            <div className='small-banner position-relative' >
              <img src='images/catbanner-04.jpg' className='img-fluid rounded-3' alt='main banner' />
              <div className='small-banner-content position-absolute' >
                <h4>FREE ENGRAVING</h4>
                <h5>AirPods Max</h5>
                <p>High-fidelity playback & <br /> ultra-low distortion.</p>
              </div>
            </div>
            </div>
          </div>
        </div>
    </Container>

    <Container class1='home-wrapper-2 py-5' >
    <div className='row' >
          <div className='col-12' >
            <div className='services d-flex align-items-center justify-content-between' >
              {services?.map((i, j) => {
                  return (
                    <div className='d-flex align-items-center gap-15' key={j}>
                      <img src={i.Image} alt='service' />
                      <div>
                        <h6> {i.title} </h6>
                        <p className='mb-0'> {i.tagline} </p>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
    </Container>

    <Container class1= 'home-wrapper-2 py-4' >
    <div className='row' >
          <div className='col-12' >
              <div className='categories d-flex justify-content-between flex-wrap align-items-center' >
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>cameras</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Smart TV</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/tv.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Music & Gaming</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/camera.jpg' alt='camera' />
                </div>
                <div className='d-flex gap align-items-center' >
                  <div>
                    <h6>Headphones</h6>
                    <p>10 Items</p>
                  </div>
                  <img src='images/headphone.jpg' alt='camera' />
                </div>
              </div>
          </div>
        </div>
    </Container>

    <Container class1='featured-wrapper py-4 home-wrapper-2' >
    <div className='row' >
          <div className='col-12' >
            <h3 className='section-heading' >Featured Collections</h3>
          </div>
        </div>
        <div className='row' >
          <ProductCard />
        </div>
    </Container>

    <Container class1='famous-wrapper py-4 home-wrapper-2' >
    <div className='row' >
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-1.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5>Big Screen</h5>
              <h6>Smart Watch Series 7</h6>
              <p>From KES 28,000 or 2,500/mo. for 12 mo</p>
              </div>
            </div>
          </div>
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-2.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5 className='text-dark' >Studio Display</h5>
              <h6 className='text-dark' >600 nits of brightness</h6>
              <p className='text-dark' >27-inch 5k retina display</p>
              </div>
            </div>
          </div>
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-3.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5 className='text-dark' >Smartphones</h5>
              <h6 className='text-dark' >Iphone 13 Pro Max</h6>
              <p className='text-dark' >Now in Green from KES 154,000</p>
              </div>
            </div>
          </div>
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-4.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5 className='text-dark' >Home Speakers</h5>
              <h6 className='text-dark' >Room-filling Sound.</h6>
              <p className='text-dark' >From KES 1,500</p>
              </div>
            </div>
          </div>
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-2.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5 className='text-dark' >Studio Display</h5>
              <h6 className='text-dark' >600 nits of brightness</h6>
              <p className='text-dark' >27-inch 5k retina display</p>
              </div>
            </div>
          </div>
          <div className='col-2' >
            <div className='famous-card position-relative' >
              <img src='images/famous-3.webp' className='img-fluid' alt='famous' />
              <div className='famous-content position-absolute' >
              <h5 className='text-dark' >Smartphones</h5>
              <h6 className='text-dark' >Iphone 13 Pro Max</h6>
              <p className='text-dark' >Now in Green from KES 154,000</p>
              </div>
            </div>
          </div>
        </div>
    </Container>

    <Container class1='popular-wrapper py-4 home-wrapper-2' >
        <div className='row' >
          <div className='col-12' >
            <h3 className='section-heading' >Our popular products</h3>
          </div>
        </div>
        <div className='row' >
          <ProductCard />
        </div>
    </Container>

    <Container class1='marquee-wrapper home-wrapper-2 py-3' >
        <div className='row' >
          <div className='col-12' >
            <div className='marquee-inner-wrapper card-wrapper' >
            <Marquee className='d-flex' >
             <div className='mx-4 w-25' >
              <img src='images/brand-01.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-02.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-03.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-04.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-05.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-06.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-07.png' alt='brand' />
              </div>
              <div className='mx-4 w-25' >
              <img src='images/brand-08.png' alt='brand' />
              </div>
            </Marquee>
            </div>
          </div>
        </div>
    </Container>

    <Container class1='blog-wrapper py-5 home-wrapper-2' >
        <div className='row' >
          <div className='col-12' >
            <h3 className='section-heading' >Our Latest Blogs</h3>
          </div>
          
        </div>
        <div className='row' >
          <div className='col-3' >
          <BlogCard />
          </div>
          <div className='col-3' >
          <BlogCard />
          </div>
          <div className='col-3' >
          <BlogCard />
          </div>
          <div className='col-3' >
          <BlogCard />
          </div>
        </div>
    </Container>
    </>
  );
};

export default Home;