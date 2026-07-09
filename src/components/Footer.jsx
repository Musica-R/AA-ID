import React from 'react';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-brand">
                    <h3>AA<span>&</span>ID</h3>
                    <p>
                        Architecture & Interior Design studio delivering timeless
                        residential and commercial spaces.
                    </p>
                </div>

                <div className="footer-contact">
                    <a href="mailto:ashickaarchndinterior@gmail.com">
                        <FaEnvelope /> ashickaarchndinterior@gmail.com
                    </a>
                </div>

                <div className="footer-bottom">
                    <span>
                        © {new Date().getFullYear()} AA&ID. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
