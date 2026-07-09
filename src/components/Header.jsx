import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import { Link, useNavigate, useLocation } from "react-router-dom";




const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();


  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { section: id } });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }

    setOpen(false);
  };

  return (
    <div className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="glass-navbar">
        <div className="logo">
          <img src="/assets/Ashikalogo.png" alt="logo" className="logo-img" />&nbsp;
          AA<span>&</span>ID
        </div>

        <nav className="nav-links">
          <a onClick={() => scrollToSection('about')}>About</a>
          <a onClick={() => scrollToSection('services')}>Services</a>
          <a onClick={() => scrollToSection('makeover')}>Makeover</a>
          <a onClick={() => scrollToSection('projects')}>Projects</a>
          <Link to="/gallery">Gallery</Link>
          <Link to="/price">Price</Link>
        </nav>

        <button
          className="contact-pill"
          onClick={() => scrollToSection('contact')}
        >
          Get in Touch
        </button>

        <button
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <span className={open ? 'bar open' : 'bar'}></span>
          <span className={open ? 'bar open' : 'bar'}></span>
          <span className={open ? 'bar open' : 'bar'}></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${open ? 'show' : ''}`}>
        <a onClick={() => scrollToSection('about')}>About</a>
        <a onClick={() => scrollToSection('services')}>Services</a>
        <a onClick={() => scrollToSection('projects')}>Projects</a>
        <Link to="/gallery" onClick={() => setOpen(false)}> Gallery </Link>
        <Link to="/price" onClick={() => setOpen(false)}>Price</Link>
        <a onClick={() => scrollToSection('contact')}>Contact</a>
      </div>
    </div>
  );
};

export default Header;