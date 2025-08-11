import React from 'react';
import { motion } from 'framer-motion';
import './HeroBanner.css';

import heroBannerImage from '../../../assets/homePage/heroBannerCropped2.png';
import heroBannerStars from '../../../assets/homePage/heroBannerStars.svg';
import brandName from '../../../assets/homePage/brandName.svg';

import Marquee from 'react-fast-marquee';

const HeroBanner = () => {
  return (
    <>
      <div className='container-fluid heroBannerMainContainer'>
        <div className="container">
          <div className="row pt-xl-0 pt-lg-5 pt-md-4 pt-sm-3 pt-3">
            <div className="col-md-6 col-12 py-xl-5">
              <div className="heroBannerContent d-flex flex-column gap-lg-2 gap-md-2 gap-sm-1 gap-1">
                <h1>FIND JACKETS THAT MATCHES YOUR STYLE</h1>
                <p>
                  Browse through our diverse range of meticulously crafted jackets,
                  designed to bring out your individuality and cater to your sense of
                  style.
                </p>
                <button>Shop Now</button>
                <div className="stats d-flex mt-lg-4 mt-md-2 mt-sm-3 mt-3 gap-xl-4 gap-lg-2 gap-md-2 gap-sm-2 gap-2">
                  <div className='firstStat d-flex flex-column align-items-center justify-content-start'>
                    <h3>200+</h3>
                    <p className='text-center'>International Brands</p>
                  </div>
                  <div className='secondStat d-flex flex-column align-items-center justify-content-start'>
                    <h3>2,000+</h3>
                    <p className='text-center'>High-Quality Products</p>
                  </div>
                  <div className='thirdStat d-flex flex-column align-items-center justify-content-start'>
                    <h3>30,000+</h3>
                    <p className='text-center'>Happy Customers</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-12 d-flex align-items-end justiy-content-md-start justify-content-center">
              <div className='hero-banner-container'>
                {/* Star One Animation */}
                <motion.img
                  src={heroBannerStars}
                  className='hero-banner-star-one'
                  alt=""
                  initial={{ top: 20, right: 10 }}
                  animate={{ top: 180, left: 30, right: 'auto' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />

                {/* Star Two Animation */}
                <motion.img
                  src={heroBannerStars}
                  className='hero-banner-star-two'
                  alt=""
                  initial={{ top: 180, left: 30 }}
                  animate={{ top: 20, right: 10, left: 'auto' }}
                  transition={{ duration: 1.2, ease: 'easeInOut' }}
                />

                <img src={heroBannerImage} className=' heroBannerImage' alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mb-lg-5 mb-md-4 mb-sm-4 mb-5 py-lg-4 py-md-4 py-sm-3 py-3 heroBannerBelowContainer">
        <Marquee gradient={false} speed={50} pauseOnHover>
          <img src={brandName} alt="" className='brandNameScrolled' />
          <img src={brandName} alt="" className='brandNameScrolled' />
          <img src={brandName} alt="" className='brandNameScrolled' />
          <img src={brandName} alt="" className='brandNameScrolled' />
          <img src={brandName} alt="" className='brandNameScrolled' />
        </Marquee>
      </div>
    </>
  );
};

export default HeroBanner;
