import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { motion } from 'framer-motion'

// Components
import Navbar from './Components/HomePageComponents/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

// Pages
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import About from './Pages/About/About';
// import Contact from './Pages/Contact/Contact';
import Contact from './Pages/Contact/Contact';

const App = () => {
  return (
    <>
      <Router>
        <div className="navBar navbar-fixed container-fluid">
    <Navbar />
    </div>
        <Routes>
    
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
        <Footer />
    {/* <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                viewport={{ once: true }}
            >
                <Footer />
    </motion.div>  */}
      </Router>
    </>
  );
};

export default App;
