import React from 'react';
import '../styles/FalseCeiling.css';

const FalseCeiling = () => {
  const types = [
    {
      key: 'pop',
      label: 'POP False Ceiling',
      image: '/assets/f1.jpeg',
    },
    {
      key: 'gypsum',
      label: 'Gypsum False Ceiling',
      image: '/assets/f2.jpeg',
    },
    {
      key: 'wooden',
      label: 'Wooden False Ceiling',
      image: '/assets/f3.jpeg',
    },
    {
      key: 'cove',
      label: 'Cove False Ceiling',
      image: '/assets/f4.jpeg',
    },
    {
      key: 'gypsum1',
      label: 'Gypsum False Ceiling',
      image: '/assets/f5.jpeg',
    },
    {
      key: 'wooden2',
      label: 'Wooden False Ceiling',
      image: '/assets/f6.jpeg',
    },
    {
      key: 'cove3',
      label: 'Cove False Ceiling',
      image: '/assets/f7.jpeg',
    },
    {
      key: 'gypsum4',
      label: 'Gypsum False Ceiling',
      image: '/assets/f8.jpeg',
    },
    {
      key: 'wooden5',
      label: 'Wooden False Ceiling',
      image: '/assets/f9.jpeg',
    },
  ];

  const whatsappMsg = "Hello, I'd like to get a quote for False Ceiling work.";

  return (
    <section className="fc-section" id="false-ceiling">
      <div className="fc-header">
        {/* <span className="fc-eyebrow">Service Sheet — False Ceiling</span> */}
        <h1 className="fc-title">False Ceiling</h1>
        <p className="fc-subtitle">Starting at ₹95 / sqft</p>
        <p className="fc-customization">✓ Customization Also Available</p>
      </div>

      <div className="fc-grid">
        {types.map((type) => (
          <div className="fc-card" key={type.key}>
            <div className="fc-image-wrap">
              <img src={type.image} alt={type.label} className="fc-image" />
            </div>
          </div>
        ))}
      </div>

      <div className="fc-footer">
        <a
          href={`https://wa.me/919626313369?text=${encodeURIComponent(whatsappMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fc-cta"
        >
          Get Quote
        </a>
      </div>
    </section>
  );
};

export default FalseCeiling;