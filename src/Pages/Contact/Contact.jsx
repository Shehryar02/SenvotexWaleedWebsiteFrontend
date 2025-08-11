import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-section">
      
      {/* Card with entrance animation */}
      <motion.div 
        className="contact-card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        
        {/* Top Heading */}
        <motion.div 
          className="contact-heading"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h2>Contact Information</h2>
          <h3>We are here for your queries</h3>
        </motion.div>

        {/* Contact Details */}
        <div className="contact-details">
          {[
            { icon: "fa-solid fa-phone-volume", text: "+92 325 1796359" },
            { icon: "fa-solid fa-envelope", text: "digital@senvotex.com" },
            { icon: "fa-solid fa-location-dot", text: "Karachi, Pakistan" }
          ].map((item, index) => (
            <motion.div 
              className="detail-item" 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + index * 0.15, duration: 0.5 }}
            >
              <i className={item.icon}></i>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        {/* Social Icons */}
        <motion.div 
          className="social-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <h4>Connect With Us</h4>
          <div className="social-icons">
            {[
              { icon: "fa-brands fa-instagram", link: "https://instagram.com/senvotex.digital" },
              { icon: "fa-brands fa-facebook-f", link: "https://facebook.com/senvotex.digital" },
              { icon: "fa-brands fa-linkedin-in", link: "https://linkedin.com/company/senvotexdigital" },
              { icon: "fa-brands fa-whatsapp", link: "https://wa.me/923251796359" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300 }}
                className='d-flex justify-content-center align-items-center'
              >
                <i className={social.icon}></i>
              </motion.a>
            ))}
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default Contact;
