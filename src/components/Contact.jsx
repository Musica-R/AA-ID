import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="contact-container">
                <span className="contact-subtitle">Get In Touch</span>
                <h2>Let’s Start Your Project</h2>
                <p className="contact-desc">
                    Have a residential or commercial project in mind?  
                    Reach out to discuss design ideas, layouts, and execution.
                </p>

                <div className="contact-grid">
                    <div className="contact-card">
                        <FaEnvelope className="contact-icon" />
                        <h4>Email</h4>
                        <a href="mailto:ashickaarchndinterior@gmail.com">
                            ashickaarchndinterior@gmail.com
                        </a>
                    </div>

                    <div className="contact-card">
                        <FaMapMarkerAlt className="contact-icon" />
                        <h4>Studio</h4>
                        <p>AA&ID — Interior Design Studio</p>
                    </div>

                    <div className="contact-card">
                        <FaPhoneAlt className="contact-icon" />
                        <h4>Consultation</h4>
                        <p>Available on appointment</p>
                    </div>
                </div>

                <a
                    href="mailto:ashickaarchndinterior@gmail.com"
                    className="contact-btn"
                >
                    Start a Project
                </a>
            </div>
        </section>
    );
};

export default Contact;
