import React from 'react';
import './About.css';
import { motion } from 'framer-motion';

import image1 from '../../assets/aboutPage/image1.webp';
import image2 from '../../assets/aboutPage/image2.webp';
import image3 from '../../assets/aboutPage/image3.webp';
import image5 from '../../assets/aboutPage/image5.webp';
import { useNavigate } from 'react-router-dom';



const slidesData = [
  {
    image: image1,
    title: "Heritage in Every Stitch",
    description: "Crafted from the finest full-grain leather, our jackets embody a legacy of style and strength. Every seam tells a story of precision and passion."
  },
  {
    image: image2,
    title: "Luxury Meets Endurance",
    description: "From city streets to open roads, our leather jackets combine elegance with durability. Designed to age beautifully, they become uniquely yours over time."
  },
  {
    image: image3,
    title: "The Signature Morven Look",
    description: "With timeless cuts and modern detailing, our jackets are more than apparel — they’re a statement of confidence, craftsmanship, and character."
  }
];

const About = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container-fluid about-section py-5">
      <div className="container">
        {slidesData.map((slide, index) => (
          <motion.div
            key={index}
            className={`row align-items-center mb-5 ${index % 2 !== 0 ? 'flex-row-reverse' : ''}`}
            initial={{ opacity: 0, y: 50 }}
            {...(index === 0
              ? { animate: { opacity: 1, y: 0 } } // First one animates immediately
              : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0 } })}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image column */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="img-fluid rounded shadow-lg about-image"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Text column */}
            <motion.div
              className="col-lg-6"
              initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
              {...(index === 0
                ? { animate: { opacity: 1, x: 0 } }
                : { whileInView: { opacity: 1, x: 0 }, viewport: { once: true, amount: 0 } })}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="about-text-box">
                <h2 className="about-title mb-3">{slide.title}</h2>
                <p className="about-text lead">{slide.description}</p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* White Section */}
      <div className="white-highlight-section py-5">
        <div className="container">
          <motion.div
            className="row align-items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="col-lg-6 mb-4 mb-lg-0">
              <motion.img
                src={image5}
                alt="Leather Jacket Showcase"
                className="img-fluid rounded shadow-lg"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              />
            </div>

            {/* Text */}
            <div className="col-lg-6">
              <h1 className="highlight-title mb-3">Command the Room</h1>
              <p className="highlight-text">
                Every jacket we craft is more than attire — it’s armor for ambition. Built for those who set trends, not follow them.
              </p>
              <motion.button
              onClick={()=>{navigate('/products')}}
                className="btn highlight-btn mt-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore the Collection
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
