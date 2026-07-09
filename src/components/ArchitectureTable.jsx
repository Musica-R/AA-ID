import React, { useState } from 'react';
import '../styles/ArchitectureTable.css';
import { FaCheck, FaTimes } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
import { FaChevronDown, FaChevronUp, FaArrowLeft } from 'react-icons/fa';

const ArchitectureTable = () => {
  const [expandedSections, setExpandedSections] = useState({
    plumbing: false,
    electrical: false,
    external: false,
    site: false
  });

  // const navigate = useNavigate();

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const renderRow = (label, essential, advanced, isHeading = false) => {
    if (isHeading) {
      return (
        <tr className="section-heading1">
          <th colSpan="3">{label}</th>
        </tr>
      );
    }

    return (
      <tr className="data-row1">
        <td className="service-name1">{label}</td>
        <td className={`plan-essential1 ${essential === '✓' ? 'included' : ''}`}>
          {essential === '✓' ? <FaCheck className="check-icon1" /> :
            essential === '✗' ? <FaTimes className="times-icon1" /> :
              essential}
        </td>
        <td className={`plan-advanced1 ${advanced === '✓' ? 'included' : ''}`}>
          {advanced === '✓' ? <FaCheck className="check-icon1" /> :
            advanced === '✗' ? <FaTimes className="times-icon1" /> :
              advanced}
        </td>
      </tr>
    );
  };

  const renderExpandableSection = (sectionKey, title, rows) => {
    const isExpanded = expandedSections[sectionKey];

    return (
      <>
        <tr className="expandable-header1">
          <th colSpan="3">
            {title}
            <button className="expand-btn1" onClick={() => toggleSection(sectionKey)}>
              {isExpanded ? 'Show Less' : 'Know More'}
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </button>
          </th>
        </tr>

        {rows.map((row, index) => (
          <tr
            key={index}
            className={`data-row1 ${!isExpanded && index >= 2 ? 'hidden' : ''}`}
          >
            <td className="service-name1">{row.label}</td>
            <td className={`plan-essential1 ${row.essential === '✓' ? 'included' : ''}`}>
              {row.essential === '✓' ? <FaCheck className="check-icon1" /> :
                row.essential === '✗' ? <FaTimes className="times-icon1" /> :
                  row.essential}
            </td>
            <td className={`plan-advanced1 ${row.advanced === '✓' ? 'included' : ''}`}>
              {row.advanced === '✓' ? <FaCheck className="check-icon1" /> :
                row.advanced === '✗' ? <FaTimes className="times-icon1" /> :
                  row.advanced}
            </td>
          </tr>
        ))}
      </>
    );
  };

  return (
    <section className="architecture-pricing1" id="architecture">

      {/* <button
        className="back-button1"
        onClick={() => navigate('/', { state: { section: 'pricing' } })}
      >
        <FaArrowLeft />
        <span>Back to Plans</span>
      </button> */}
      
      <div className="section-header1">
        <h1 className="section-title1">ARCHITECTURAL DESIGN PACKAGE</h1>
        <p className="section-subtitle1">Professional architectural solutions for your dream home</p>
      </div>

      <div className="pricing-container1">
        <div className="pricing-header1">
          <div className="plan-header1">
            <div className="plan-title1">
              <h3>Services List</h3>
            </div>
            <div className="plan-columns1">
              <div className="plan-card-header1 essential-header1">
                <h3>Essential</h3>
                <div className="price-tag1">
                  <span className="price1">₹40</span>
                  <span className="unit1">per sqft</span>
                </div>
              </div>
              <div className="plan-card-header1 advanced-header1">
                <h3>Advanced</h3>
                <div className="price-tag1">
                  <span className="price1">₹60</span>
                  <span className="unit1">per sqft</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="pricing-table1">
          <tbody>
            {renderRow('Description', '', '', true)}
            {renderRow('Conceptual Plan', '1 option', '2 options')}
            {renderRow('Number of Revisions', '1 revision', '2 revisions')}
            {renderRow('Video Consultation (20 mins/session)', '3 sessions', '3 sessions')}

            {renderRow('Floor Plan Design', '', '', true)}
            {renderRow('Basic Working Drawings', '✓', '✓')}
            {renderRow('Joinery Drawings (doors and window sizes)', '✗', '✓')}
            {renderRow('Schematic Furniture Layout', '✓', '✓')}

            {renderRow('Visualization', '', '', true)}
            {renderRow('2D Elevation (exterior)', '1 option', '1 option')}
            {renderRow('3D Views', '1 option', '2 options')}

            {renderExpandableSection('plumbing', 'Plumbing Design', [
              { label: 'Plumbing Fixture Position', essential: '✓', advanced: '✓' },
              { label: 'Fresh Water Line', essential: '✗', advanced: '✓' },
              { label: 'Hot Water Line', essential: '✗', advanced: '✓' },
              { label: 'Soil Water Line', essential: '✗', advanced: '✓' },
              { label: 'Rainwater Line', essential: '✗', advanced: '✓' },
              { label: 'Under Ground Water Sump', essential: '✗', advanced: '✓' },
            ])}

            {renderExpandableSection('electrical', 'Electrical Design', [
              { label: 'Electrical Fixture Layout', essential: '✓', advanced: '✓' },
              { label: 'Switch Layout', essential: '✗', advanced: '✓' },
              { label: 'Wire Looping', essential: '✗', advanced: '✓' },
            ])}

            {renderExpandableSection('external', 'External Development', [
              { label: 'Compound Wall', essential: '✗', advanced: '✓' },
              { label: 'Gate Design', essential: '✗', advanced: '✓' },
              { label: 'Handrail', essential: '✗', advanced: '✓' },
              { label: 'Septic Tank / External Sewage Connection', essential: '✗', advanced: '✓' },
            ])}

            {renderExpandableSection('site', 'Client Requisites', [
              { label: 'Soil Testing Report – for structural feasibility', essential: 'required', advanced: 'required' },
              { label: 'FMB Sketch – official site mapping', essential: 'required', advanced: 'required' },
              { label: 'Site Borders – clearly marked boundaries', essential: 'required', advanced: 'required' },
              { label: 'Site Orientation – for natural light optimization', essential: 'required', advanced: 'required' },
              { label: 'Access Roads and Surroundings', essential: 'required', advanced: 'required' },
              { label: 'Site Photographs – terrain understanding', essential: 'required', advanced: 'required' },
            ])}

            <tr className="delivery-row1">
              <td className="service-name1">Engagement Period</td>
              <td className="plan-essential1">30 Working Days</td>
              <td className="plan-advanced1">40 Working Days</td>
            </tr>
          </tbody>
        </table>

        <div className="pricing-footer1">
          <div className="plan-footer1 essential-footer1">
         
             <a
              href="https://wa.me/919047788033?text=Hello, I'd like to proceed with booking the Essential Plan for Architectural Design."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button1 essential-button1"
            >
              Get Quote
            </a>
          </div>
          <div className="plan-footer1 advanced-footer1">
            <a
              href="https://wa.me/919047788033?text=Hello, I'd like to proceed with booking the Advanced Plan for Architectural Design."
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button1 advanced-button1"
            >
              Get Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureTable;