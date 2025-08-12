import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

import HeroBanner from '../../Components/HomePageComponents/HeroBanner/HeroBanner';
import ProductsHighlight from '../../Components/HomePageComponents/ProductsHighlight/ProductsHighlight';
import Testimonies from '../../Components/HomePageComponents/Testimonies/Testimonies';
import BeforeFooter from '../../Components/HomePageComponents/BeforeFooter/BeforeFooter';

import originalImg2 from '../../assets/productDetailPage/Original/RemBG/img2.webp';
import originalImg4 from '../../assets/productDetailPage/Original/RemBG/img4.webp';
import originalImg6 from '../../assets/productDetailPage/Original/RemBG/img6.webp';
import originalImg7 from '../../assets/productDetailPage/Original/RemBG/img7.webp';
import jacketImg2 from '../../assets/productDetailPage/JacketSeries/RemBG/img2.webp';
import jacketImg3 from '../../assets/productDetailPage/JacketSeries/RemBG/img3.webp';
import jacketImg5 from '../../assets/productDetailPage/JacketSeries/RemBG/img5.webp';
import jacketImg7 from '../../assets/productDetailPage/JacketSeries/RemBG/img7.webp';

import newArrivalProductImg from '../../assets/homePage/newArrivalsItemWithoutBackground.png';
import topSellingProductImg from '../../assets/homePage/topSellingsItemWithoutBackground.png';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const newArrivalProducts = [
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: originalImg2 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: originalImg4 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: originalImg6 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: originalImg7 },
  ];

  const topSellingProducts = [
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: jacketImg2 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: jacketImg3 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: jacketImg5 },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: jacketImg7 },
  ];

  const newArrivalProductsViewAll = () => {
    navigate(`/products?sort=New%20Arrivals`);
  };

  const topSellingProductsViewAll = () => {
    navigate(`/products?sort=Most%20Popular`);
  };

  return (
    <>
      {/* Hero Section (animates immediately) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <HeroBanner />
      </motion.div>

      {/* New Arrivals */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true, amount: 0 }}
      >
        <ProductsHighlight
          heading="New Arrivals"
          products={newArrivalProducts}
          onViewAll={newArrivalProductsViewAll}
        />
      </motion.div>

      {/* Top Selling */}
      <div style={{ overflowX: "hidden" }}>
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, amount: 0 }}
        >
          <ProductsHighlight
            heading="Most Popular"
            products={topSellingProducts}
            onViewAll={topSellingProductsViewAll}
          />
        </motion.div>
      </div>

      {/* Testimonies */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0 }}
      >
        <Testimonies />
      </motion.div>

      {/* Before Footer */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.15 }}
        viewport={{ once: true, amount: 0 }}
      >
        <BeforeFooter />
      </motion.div>
    </>
  );
};

export default Home;
