import { useNavigate } from 'react-router-dom';
import '../styles/PricingPlans.css';
import React, { forwardRef } from "react";

const plans = [
  {
    key: 'architecture',
    sheet: 'A—01',
    title: 'Architectural Design',
    price: '₹40',
    unit: '/ sqft',
    tagline: 'For building from the ground up',
    features: [
      'Conceptual & floor plans',
      '2D & 3D views',
      'Plumbing & electrical design'
    ],
    cta: 'View plans',
    path: '/price',
    highlight: false
  },
  {
    key: 'interior',
    sheet: 'I—02',
    title: 'Interior Design',
    price: '₹2,999',
    unit: '/ room',
    tagline: 'For transforming your spaces',
    features: [
      'Mood board & schematic plan',
      'Photorealistic 3D views',
      'Post-delivery support'
    ],
    cta: 'View plans',
    path: '/price',
    highlight: true
  },
  {
    key: 'elevation',
    sheet: 'E—03',
    title: 'Elevation Design',
    price: '₹3,999',
    unit: 'starting',
    tagline: 'For a striking exterior look',
    features: [
      '3D exterior realistic views',
      'Elevation material specs',
      '2D elevational drawings',
      'Video consultations'
    ],
    cta: 'View plans',
    path: '/price',
    highlight: false
  },
  {
    key: 'stylist',
    sheet: 'S—04',
    title: 'Interior Stylist',
    tagline: 'For quick, expert styling guidance',
    tiers: [
      { label: 'Basic suggestions', price: '₹2,999' },
      { label: 'Full house premium', price: '₹6,999' }
    ],
    features: [
      'Curated colour & material palette',
      'Furniture & decor suggestions',
      "Styling do's & don'ts"
    ],
    cta: 'View plans',
    path: '/price',
    highlight: false
  },
  {
    key: 'moodboards',
    sheet: 'M—05',
    title: 'Full House Moodboards',
    tiers: [
      { label: '1 BHK', price: '₹1,999' },
      { label: '2 BHK', price: '₹2,999' },
      { label: 'Individual Villa', price: '₹4,999' },
      { label: '3 BHK & above', price: '₹7,999' }
    ],
    features: [
      'Room-wise mood boards',
      'Colour & texture palette', 
    ],
    cta: 'View plans',
    path: '/price',
    highlight: true
  }
];

const PricingPlans = forwardRef((props, ref) => {
  const navigate = useNavigate();

  return (
    <section ref={ref} className="pp-section" id="pricing">
      <div className="pp-header">
        <span className="pp-eyebrow">Service Sheet — Pricing</span>
        <h1 className="pp-title">Pricing Plans</h1>
        <p className="pp-subtitle">Choose the right service for your project</p>
      </div>

      <div className="pp-grid">
        {plans.map((plan) => (
          <div
            key={plan.key}
            className={`pp-card ${plan.highlight ? 'pp-card--highlight' : ''}`}
            onClick={() => navigate(plan.path)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') navigate(plan.path);
            }}
          >
            <div className="pp-card-top">
              <span className="pp-sheet-tag">{plan.sheet}</span>
              <h3 className="pp-card-title">{plan.title}</h3>
            </div>

            {plan.tiers ? (
              <div className="pp-tiers">
                {plan.tiers.map((tier) => (
                  <div className="pp-tier-row" key={tier.label}>
                    <span className="pp-tier-label">{tier.label}</span>
                    <span className="pp-tier-price">{tier.price}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="pp-price-row">
                <span className="pp-price">{plan.price}</span>
                <span className="pp-unit">{plan.unit}</span>
              </div>
            )}

            <p className="pp-tagline">{plan.tagline}</p>

            <button
              className="pp-cta"
              onClick={(e) => {
                e.stopPropagation();
                navigate(plan.path);
              }}
            >
              {plan.cta}
              <span className="pp-cta-arrow">→</span>
            </button>

            <ul className="pp-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="pp-tick">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
});

export default PricingPlans;