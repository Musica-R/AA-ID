import React, { useState } from 'react';
import '../styles/InteriorPackages.css';
// import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp} from 'react-icons/fa';

const InteriorPackages = () => {

  // const navigate = useNavigate();

  const [expandedItems, setExpandedItems] = useState({
    essential: {},
    advanced: {}
  });

  const toggleAccordion = (plan, item) => {
    setExpandedItems(prev => ({
      ...prev,
      [plan]: {
        ...prev[plan],
        [item]: !prev[plan]?.[item]
      }
    }));
  };

  const AccordionItem = ({ plan, title, content, itemKey }) => {
    const isExpanded = expandedItems[plan]?.[itemKey];

    return (
      <div className="accordion-item">
        <button
          className={`accordion-header ${isExpanded ? 'expanded' : ''}`}
          onClick={() => toggleAccordion(plan, itemKey)}
        >
          <span>{title}</span>
          <span className="accordion-icon">
            {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
          </span>
        </button>
        <div className={`accordion-content ${isExpanded ? 'expanded' : ''}`}>
          <ul>
            {content.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  const essentialContent = {
    design: [
      '2 Look and Feel Plan',
      'Interior Furniture Layout',
      'Flooring Design and Material Specification',
      'Ceiling & Lighting Design',
      'Electrical Layout',
      'Wall Colour Specifications and Design',
      'Storage Unit Specifications and Design'
    ],
    support: [
      '2 Video Consultations',
      '1 Free Revisions on 2D & 3D',
      '30 Days Post-Delivery Support'
    ],
    deliverables: [
      'Mood Board',
      'Schematic Plan',
      'Photorealistic 3D Views',
      'Complete Working Drawings',
      'Material Specification List'
    ],
    addons: [
      '₹500 Extra for every additional online consultation',
      '₹2500 Extra for every additional 3D view',
      '₹2500 Extra for every additional 50sqft of room area'
    ],
    requisites: [
      'Photo of the room to be designed',
      'Door and window positions for spatial planning',
      'Existing electrical points (switches, sockets, etc.)',
      'Plumbing lines and service locations (if applicable)',
      'Room dimensions (length, width, and height)'
    ]
  };

  const advancedContent = {
    design: [
      '2 Look and Feel Plan',
      'Detailed Interior Furniture Layout',
      'Flooring Design and Material Specification',
      'Premium Ceiling & Lighting Design',
      'Advanced Electrical Layout',
      'Wall Colour Specifications and Design',
      'Storage Unit Specifications and Design',
      'Exclusive Material Selection List'
    ],
    support: [
      '4 Video Consultations',
      'Dedicated Senior Designer',
      '2 Free Revisions on 2D & 3D',
      '60 Days Post-Delivery Support'
    ],
    deliverables: [
      'Mood Board',
      'Schematic Plan',
      'Photorealistic 3D Views',
      'Complete Working Drawings',
      'Material Specification List',
      'Hard Copy Bundle'
    ],
    addons: [
      '₹500 Extra for every additional online consultation',
      '₹2500 Extra for every additional 3D view',
      '₹2500 Extra for every additional 50sqft of room area'
    ],
    requisites: [
      'Photo of the room to be designed',
      'Door and window positions for spatial planning',
      'Existing electrical points (switches, sockets, etc.)',
      'Plumbing lines and service locations (if applicable)',
      'Room dimensions (length, width, and height)'
    ]
  };

  return (
    <section className="interior-pricing" id="interior">

      <div className="section-header">
        <h1 className="section-title">SELECT YOUR INTERIOR DESIGN PACKAGE</h1>
        <p className="section-subtitle">Transform your spaces with professional interior design solutions</p>
      </div>

      <div className="pricing-cards-container">
        {/* Essential Plan */}
        <div className="plan-card essential-plan">
          <div className="plan-badge">Most Popular</div>

          <div className="plan-header">
            <h3 className="plan-name">Essential</h3>
            <div className="plan-area">Up to 150 sq.ft each</div>
            <div className="plan-price">
              <span className="amount">₹9,500</span>
              <span className="period">/room</span>
            </div>
            <div className="plan-tax">Taxes Excluded</div>
          </div>

          <div className="plan-divider"></div>

          <div className="plan-inclusions">
            <h4 className="inclusions-title">INCLUSIONS</h4>

            <div className="accordion-container">
              <AccordionItem
                plan="essential"
                title="Design & Planning"
                content={essentialContent.design}
                itemKey="design"
              />

              <AccordionItem
                plan="essential"
                title="Support & Process"
                content={essentialContent.support}
                itemKey="support"
              />

              <AccordionItem
                plan="essential"
                title="Deliverables"
                content={essentialContent.deliverables}
                itemKey="deliverables"
              />

              <AccordionItem
                plan="essential"
                title="Add-On's"
                content={essentialContent.addons}
                itemKey="addons"
              />

              <AccordionItem
                plan="essential"
                title="Client Requisites"
                content={essentialContent.requisites}
                itemKey="requisites"
              />
            </div>
          </div>

          <div className="plan-footer">

            <a href="https://wa.me/919626313369?text=Hello, I'd like to proceed with booking the Essential Plan for Interior design."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button essential-cta"
            >
              Get Quote
            </a>
          </div>
        </div>

        {/* Advanced Plan */}
        <div className="plan-card advanced-plan">
          <div className="plan-badge premium">Premium</div>

          <div className="plan-header">
            <h3 className="plan-name">Advanced</h3>
            <div className="plan-area">Up to 150 sq.ft each</div>
            <div className="plan-price">
              <span className="amount">₹12,500</span>
              <span className="period">/room</span>
            </div>
            <div className="plan-tax">Taxes Excluded</div>
          </div>

          <div className="plan-divider"></div>

          <div className="plan-inclusions">
            <h4 className="inclusions-title">INCLUSIONS</h4>

            <div className="accordion-container">
              <AccordionItem
                plan="advanced"
                title="Design & Planning"
                content={advancedContent.design}
                itemKey="design"
              />

              <AccordionItem
                plan="advanced"
                title="Support & Process"
                content={advancedContent.support}
                itemKey="support"
              />

              <AccordionItem
                plan="advanced"
                title="Deliverables"
                content={advancedContent.deliverables}
                itemKey="deliverables"
              />

              <AccordionItem
                plan="advanced"
                title="Add-On's"
                content={advancedContent.addons}
                itemKey="addons"
              />

              <AccordionItem
                plan="advanced"
                title="Client Requisites"
                content={advancedContent.requisites}
                itemKey="requisites"
              />
            </div>
          </div>

          <div className="plan-footer">

            <a href="https://wa.me/919626313369?text=Hello, I'd like to proceed with booking the Advanced Plan for Interior design."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button advanced-cta"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteriorPackages;