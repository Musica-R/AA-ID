import React from "react";
import "../styles/FloatingActions.css";

const FloatingActions = () => {
  return (
    <div className="floating-actions">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fab whatsapp"
        aria-label="Chat on WhatsApp"
      >
        <img
          src="/assets/whatsapp.png"
          alt="WhatsApp"
        />
      </a>

      {/* Phone */}
      <a
        href="tel:+919876543210"
        className="fab phone"
        aria-label="Call us"
      >
        <img
          src="/assets/phone.png"
          alt="Call"
        />
      </a>
    </div>
  );
};

export default FloatingActions;
