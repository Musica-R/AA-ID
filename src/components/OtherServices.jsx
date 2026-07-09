import React from 'react';
import '../styles/OtherServices.css';
// import { useNavigate } from 'react-router-dom';
// import { FaArrowLeft } from 'react-icons/fa';

const OtherServices = () => {
  // const navigate = useNavigate();

  // const goBackToPricing = () => {
  //   navigate('/price');
  // };

  return (
    <section className="other-services" id="elevation">
      {/* <button onClick={goBackToPricing} className="back-button1">
        <FaArrowLeft />
        <span>Back to Plans</span>
      </button> */}

      <div className="section-header">
        <h1 className="section-title">OTHER SERVICES</h1>
        <p className="section-subtitle">Explore our additional professional design services</p>
      </div>

      <div className="services-grid">
        {/* Elevation Design Package */}
        <div className="service-card elevation-card">
          <div className="service-header">
            <h3 className="service-title">Elevation Design Package</h3>
            <div className="offer-tag">Starting From</div>
            <div className="service-price">
              <span className="old-price">₹10,000</span>
              <span className="new-price">₹5,999*</span>
            </div>
            <div className="service-tax">Taxes Excluded</div>
          </div>

          <div className="service-divider"></div>

          <div className="service-content">
            <h4 className="services-title">SERVICES</h4>
            <ul className="service-features">
              <li>Elevation design 3D Exterior Realistic Day View (2 options)</li>
              <li>Elevation Material specification</li>
              <li>2D Elevational working Drawings & Elevation Details</li>
              <li>Video Consultation (20 mins/session) – 2 Sessions</li>
              <li>Engagement Period: 30 days</li>
              <li className="addon-title">Add-On</li>
              <li>Execution support (Extra ₹10/sq.ft)</li>
            </ul>
          </div>

          <div className="service-footer">
            
            <a  href="https://wa.me/919047788033?text=Hello, I'd like to proceed with booking the Plan for Elevation Design."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button elevation-cta"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OtherServices;