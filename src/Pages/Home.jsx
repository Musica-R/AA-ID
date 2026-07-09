import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Experience from "../components/Experience";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingActions from "../components/FloatingActions";
import MobileQuickForm from "../components/MobileQuickForm";
import ScrollToTop from "../components/ScrollToTop";
import Gallery from "../components/Gallery";
import { useEffect, useRef } from "react";
import BeforeAfterCards from "../components/BeforeAfterCards";
import PricingPlans from "../components/PricingPlans";
import "../styles/styles.css";
import { useLocation } from "react-router-dom";

export default function Home() {
  const pricingRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.state?.section) return;

    let attempts = 0;
    const maxAttempts = 50; // ~5s safety cutoff

    const timer = setInterval(() => {
      const element = document.getElementById(location.state.section);
      attempts++;

      if (element) {
        // Instant jump — no smooth animation through Hero/About/Services
        element.scrollIntoView({
          behavior: "auto",
          block: "start",
        });
        clearInterval(timer);
      } else if (attempts >= maxAttempts) {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, [location]);

  return (
    <>
      <Hero />
      <About />
      <Services />
      <PricingPlans ref={pricingRef} />
      <Experience />
      <BeforeAfterCards />
      <Faq />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingActions />
      <MobileQuickForm />
      <ScrollToTop />
    </>
  );
}