import React from 'react';
import './Testimonies.css';
import Marquee from "react-fast-marquee";
import { FaCheck } from 'react-icons/fa';

const Testimonies = () => {
  const testimonies = [
    {
      name: "Sarah M.",
      text: "I'm blown away by the quality and style of the clothes I received from Shop.co."
    },
    {
      name: "John D.",
      text: "Fantastic service and fast delivery! I always get compliments on the outfits I order here."
    },
    {
      name: "Emily R.",
      text: "High-quality materials, great fits, and beautiful designs. This is my go-to store now!"
    },
    {
      name: "David S.",
      text: "Customer support is super helpful and friendly. I’ll definitely shop again."
    }
  ];

  return (
    <div className='container-fluid'>
      
        <h1 className='mainheadingProductsHighlight text-center mb-lg-5 mb-md-5 mb-sm-5 mb-4'>
          Our Happy Customers
        </h1>

        <Marquee gradient={false} speed={80} >
          {testimonies.map((item, index) => (
            <div 
              key={index} 
              className='customerTestimonyMainDiv p-lg-4 p-md-4 p-sm-3 p-3 d-flex flex-column align-items-start justify-content-start'
              style={{ width: "300px", margin: "0 20px" }}
            >
              <h1 className='testimonyStars'>★★★★★</h1>
              <h3 className='d-flex'>
                {item.name}
                <span className='testimonyNameCheckIcon d-flex align-items-center justify-content-center ms-lg-2 ms-md-2 ms-sm-2 ms-2'>
                  <FaCheck style={{ 
                    color: 'white', 
                    fontSize: '16px',
                    marginTop: '1px',
                    marginLeft: '1px'
                  }} />
                </span>
              </h3>
              <p>"{item.text}"</p>
            </div>
          ))}
        </Marquee>
      
    </div>
  );
}

export default Testimonies;
