import React, { useEffect, useState } from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/homePage/logoRemBG.png'

const Footer = () => {
 const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

const navigateToPrivacyPolicy = () => {
  navigate('/privacy-policy');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // wait for route to render
};

const navigateToLegalNotice = () => {
  navigate('/legal-notice');
  setTimeout(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, 100); // wait for route to render
};

  const handleSubmit = async () => {
    if (!email) return;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("https://brandportfoliobackend.onrender.com/api/footerEmail/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setSuccess(true);
        setEmail("");
        setTimeout(() => setSuccess(false), 3000);
      } else {
        alert("Server error. Please try again.");
      }
    } catch (error) {
      console.error("Error saving email:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid footer-lightMode">
      <div className="container">
        <div className="pt-5 footer-top-lightMode">
          <h2 className='m-0 d-flex align-items-center'>
            <img src={logo} className='footerLogo me-2' alt="" />
            Morven Leathers
          </h2>
          <p>Premium leather craftsmanship, tailored for your lifestyle.</p>
        </div>

        <div className="mt-md-5 mt-4 socialLinksBtns-lightMode d-flex gap-0 justify-content-between align-items-center">
          <a className="d-flex justify-content-center align-items-center" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a className="d-flex justify-content-center align-items-center" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a className="d-flex justify-content-center align-items-center" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="d-flex justify-content-center align-items-center" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>


        <div className="row mt-5 justify-content-between align-items-start">
          <div className="col-md-6">
            <div className="contactDetails-lightMode">
              <h3 className="mb-lg-5 mb-sm-3 mb-2">Contact Details</h3>
              <h6>Email: digital@senvotex.com</h6>
              <h6>Phone: +92 325 1796359</h6>
            </div>
          </div>

          <div className="col-md-4 mt-md-0 mt-sm-4 mt-4 d-flex flex-column text-start">
            <div className="stayConnectWMe-lightMode">
              <h3 className="mb-lg-5 mb-sm-3">Stay connected</h3>
              <div className="d-flex align-items-center">
                <input
                  className="pe-4 footerInput"
                  type="text"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <i
                  className={`iconFAwesomOppose-lightMode fa-solid ${
                    loading ? "fa-spinner fa-spin" : "fa-paper-plane"
                  }`}
                  onClick={handleSubmit}
                  style={{
                    cursor: loading ? "not-allowed" : "pointer",
                    pointerEvents: loading ? "none" : "auto",
                  }}
                ></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Snackbar */}
      {success && (
        <div className="snackbar show-snackbar">
          We’ve received your email. Our team will contact you shortly.
        </div>
      )}

      <div className="mt-4 text-center privacyPolicy-lightMode">
  <small className="d-flex justify-content-center align-items-center">
    <p className="m-0 btmwording1">© 2025 MorvenLeathers. All rights reserved.</p>
  </small>
</div>

    </div>
  );
}

export default Footer
