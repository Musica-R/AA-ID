import React from 'react';
import '../styles/FullHouseMoodboards.css';

const FullHouseMoodboards = () => {
  const tiers = [
    {
      key: '1bhk',
      label: '1 BHK',
      price: '₹1,999',
      whatsapp: "Hello, I'd like to proceed with booking the 1 BHK Plan for Full House Moodboards."
    },
    {
      key: '2bhk',
      label: '2 BHK',
      price: '₹2,999',
      whatsapp: "Hello, I'd like to proceed with booking the 2 BHK Plan for Full House Moodboards."
    },
    {
      key: 'villa',
      label: 'Individual Villa',
      price: '₹4,999',
      whatsapp: "Hello, I'd like to proceed with booking the Individual Villa Plan for Full House Moodboards."
    },
    {
      key: '3bhk',
      label: '3 BHK & Above',
      price: '₹7,999',
      whatsapp: "Hello, I'd like to proceed with booking the 3 BHK & Above Plan for Full House Moodboards."
    }
  ];

  const features = [
    'Room-wise mood boards',
    'Colour & texture palette'
  ];

  return (
    <section className="moodboard-pricing" id="moodboards">
      <div className="moodboard-section-header">
        <h1 className="moodboard-section-title">FULL HOUSE MOODBOARDS</h1>
        <p className="moodboard-section-subtitle">
          A room-by-room visual direction for your whole home
        </p>
      </div>

      <div className="moodboard-grid">
        {tiers.map((tier) => (
          <div className="moodboard-card" key={tier.key}>
            <div className="moodboard-card-header">
              <h3 className="moodboard-title">{tier.label}</h3>
              <div className="moodboard-price">
                <span className="moodboard-amount">{tier.price}</span>
              </div>
              <div className="moodboard-tax">Taxes Excluded</div>
            </div>

            <div className="moodboard-divider"></div>

            <ul className="moodboard-features">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            <div className="moodboard-footer">
              <a
                href={`https://wa.me/919626313369?text=${encodeURIComponent(tier.whatsapp)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="moodboard-cta"
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

export default FullHouseMoodboards;