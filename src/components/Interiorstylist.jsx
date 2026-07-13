import React from 'react';
import '../styles/InteriorStylist.css';

const InteriorStylist = () => {
  const tiers = [
    {
      key: 'basic',
      label: 'Basic Suggestions',
      price: '₹2,999',
      tag: 'Quick Start',
      description: 'Fast, expert direction for a single space',
      features: [
        "Curated colour & material palette",
        "Furniture & decor suggestions",
        "Styling do's & don'ts",
        '1 Video Consultation (20 mins)'
      ],
      whatsapp: "Hello, I'd like to proceed with booking the Basic Suggestions Plan for Interior Stylist."
    },
    {
      key: 'premium',
      label: 'Full House Premium',
      price: '₹6,999',
      tag: 'Best Value',
      description: 'Complete styling guidance across every room',
      features: [
        'Curated colour & material palette — all rooms',
        'Furniture & decor suggestions — all rooms',
        "Styling do's & don'ts",
        '3 Video Consultations (20 mins each)',
        'Priority WhatsApp support'
      ],
      whatsapp: "Hello, I'd like to proceed with booking the Full House Premium Plan for Interior Stylist."
    }
  ];

  return (
    <section className="stylist-pricing" id="stylist">
      <div className="stylist-section-header">
        <h1 className="stylist-section-title">INTERIOR STYLIST</h1>
        <p className="stylist-section-subtitle">
          Quick, expert styling guidance without a full design engagement
        </p>
      </div>

      <div className="stylist-grid">
        {tiers.map((tier) => (
          <div
            className={`stylist-card ${tier.key === 'premium' ? 'stylist-card--premium' : ''}`}
            key={tier.key}
          >
            <div className="stylist-card-header">
              <span className="stylist-tag">{tier.tag}</span>
              <h3 className="stylist-title">{tier.label}</h3>
              <p className="stylist-description">{tier.description}</p>
              <div className="stylist-price">
                <span className="stylist-amount">{tier.price}</span>
              </div>
              <div className="stylist-tax">Taxes Excluded</div>
            </div>

            <div className="stylist-divider"></div>

            <ul className="stylist-features">
              {tier.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="stylist-footer">
              <a
                href={`https://wa.me/919626313369?text=${encodeURIComponent(tier.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="stylist-cta"
              >
                Get Quote
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InteriorStylist;