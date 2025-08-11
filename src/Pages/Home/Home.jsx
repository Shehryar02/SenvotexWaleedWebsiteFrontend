import React from 'react';
import { motion } from 'framer-motion';
import './Home.css';

import HeroBanner from '../../Components/HomePageComponents/HeroBanner/HeroBanner';
import ProductsHighlight from '../../Components/HomePageComponents/ProductsHighlight/ProductsHighlight';
import Testimonies from '../../Components/HomePageComponents/Testimonies/Testimonies';
import BeforeFooter from '../../Components/HomePageComponents/BeforeFooter/BeforeFooter';

import newArrivalProductImg from '../../assets/homePage/newArrivalsItemWithoutBackground.png';
import topSellingProductImg from '../../assets/homePage/topSellingsItemWithoutBackground.png';

const Home = () => {
  const newArrivalProducts = [
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: newArrivalProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: newArrivalProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: newArrivalProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: newArrivalProductImg },
  ];

  const topSellingProducts = [
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: topSellingProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: topSellingProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: topSellingProductImg },
    { name: 'T-shirt with Tape Details', brand: 'Gucci', rating: 4.5, price: 120, image: topSellingProductImg },
  ];

  const newArrivalProductsViewAll = () => {
    console.log('View All button clicked!');
  };

  const topSellingProductsViewAll = () => {
    console.log('View All button clicked!');
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
            heading="Top Selling"
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
