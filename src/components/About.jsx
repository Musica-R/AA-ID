import React, { useRef, useEffect, useState } from "react";
import '../styles/About.css';
import aboutImage from '../assets/about.jpeg';
// import { useFadeIn } from "./useFadeIn";

const ICON_CARDS = [
  {
    side: "left",
    order: 0,
    title: "Experience",
    desc: "Over 3+ years of professional experience, currently practicing at Homworks Prominence.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    side: "right",
    order: 1,
    title: "Studio Practice",
    desc: "Run AA&ID, taking on freelance residential and commercial design projects.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    side: "left",
    order: 2,
    title: "Education",
    desc: "Bachelor of Architecture (B.Arch), building a strong design and technical foundation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    side: "right",
    order: 3,
    title: "Deliverables",
    desc: "2D blueprints with architect approval, ensuring precise and functional design solutions.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 4h11l5 5v11H4z" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 4v5h5M8 13h8M8 17h5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const leftIconCards = ICON_CARDS.filter((c) => c.side === "left");
  const rightIconCards = ICON_CARDS.filter((c) => c.side === "right");

  // Cards start only after the heading + photo have finished animating in
  const CARDS_START_DELAY = 2.0;
  const STEP_DELAY = 0.45;

  return (
    <section
      id="about"
      className={`about-section${inView ? " in-view" : ""}`}
      ref={sectionRef}
    >
      <div className="about-container">
        {/* TITLE ONLY AT TOP */}
        <div className="about-header">
          <span className="about-subtitle">About</span>
          <h2>Designing Spaces with Purpose & Precision</h2>
        </div>

        {/* VISUAL GRID: LEFT CARDS | CENTER IMAGE | RIGHT CARDS */}
        <div className="about-visual-grid">
          {/* LEFT COLUMN */}
          <div className="visual-col side-col left-col">
            {leftIconCards.map((card) => (
              <div
                className="feature-card"
                style={{ transitionDelay: `${CARDS_START_DELAY + card.order * STEP_DELAY}s` }}
                key={card.title}
              >
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>

          {/* CENTER IMAGE */}
          <div className="visual-col center-col">
            <div className="center-image-wrap">
              <img src={aboutImage} alt="AA&ID Studio Work" />
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="visual-col side-col right-col">
            {rightIconCards.map((card) => (
              <div
                className="feature-card"
                style={{ transitionDelay: `${CARDS_START_DELAY + card.order * STEP_DELAY}s` }}
                key={card.title}
              >
                <div className="card-icon">{card.icon}</div>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;