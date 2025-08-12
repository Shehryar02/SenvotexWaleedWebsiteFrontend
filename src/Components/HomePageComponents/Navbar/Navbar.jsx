import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

import logo from '../../../assets/homePage/logoRemBG.png';

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (path) => {
    navigate(path);
    scrollToTop();
    setIsMenuOpen(false);
  };

  const currentPath = location.pathname;

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="navBar container-fluid py-lg-2 py-md-3 py-sm-3 py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-md-center align-items-end gap-lg-0 gap-md-4">

          {/* Logo or Name */}
          <div className="firstBox">
            <h2 className="m-0">MORVEN</h2>
          </div>

          {/* Desktop Menu */}
          <div className="secondBox d-none d-md-flex align-items-center gap-lg-4 gap-md-2">
            <button className={currentPath === '/' ? 'active' : ''} onClick={() => handleNavigate('/')}>Home</button>
            <button className={currentPath === '/products' ? 'active' : ''} onClick={() => handleNavigate('/products')}>Products</button>
            <button className={currentPath === '/about' ? 'active' : ''} onClick={() => handleNavigate('/about')}>About</button>
            <button className={currentPath === '/contact' ? 'active' : ''} onClick={() => handleNavigate('/contact')}>Contact</button>
          </div>

          {/* Search */}
          <div className="thirdBox d-none d-md-block">
            <div className="input-group">
              <span className="input-group-text border-end-0 navBarSendBtn">
                <i className="bi bi-send"></i>
              </span>
              <input type="text" className="form-control navBarSearch border-start-0" placeholder="Enter email to subscribe..." />
            </div>
          </div>

          {/* Logo Image */}
          <div className="fourthBox d-none d-md-block">
            <img src={logo} alt="" />
          </div>

          {/* Mobile Hamburger */}
          <div className="d-md-none position-relative" ref={menuRef}>
            <div onClick={() => setIsMenuOpen(!isMenuOpen)} style={{ cursor: 'pointer' }}>
              {isMenuOpen ? <FaTimes className='navBarIconSmallScreen' /> : <FaBars className='navBarIconSmallScreen' />}
            </div>

            {isMenuOpen && (
              <div className="mobile-corner-menu shadow">
                <button className={currentPath === '/' ? 'active' : ''} onClick={() => handleNavigate('/')}>Home</button>
                <button className={currentPath === '/products' ? 'active' : ''} onClick={() => handleNavigate('/products')}>Products</button>
                <button className={currentPath === '/about' ? 'active' : ''} onClick={() => handleNavigate('/about')}>About</button>
                <button className={currentPath === '/contact' ? 'active' : ''} onClick={() => handleNavigate('/contact')}>Contact</button>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
