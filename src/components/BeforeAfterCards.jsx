import React, { useState, useRef, useCallback, useEffect } from 'react';
import '../styles/BeforeAfterCards.css';

const BeforeAfterSlider = ({ title, beforeImg, afterImg }) => {
  const [sliderPos, setSliderPos] = useState(50); // % position
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  // Measure container width after mount, and keep it in sync on resize
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => setContainerWidth(el.offsetWidth);
    updateWidth(); // set correct width immediately after mount

    const resizeObserver = new ResizeObserver(updateWidth);
    resizeObserver.observe(el);

    return () => resizeObserver.disconnect();
  }, []);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let percent = ((clientX - rect.left) / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));
    setSliderPos(percent);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.touches[0].clientX);
  };

  const handleTogglePosition = (target) => {
    setSliderPos(target === 'before' ? 100 : 0);
  };

  return (
    <div className="ba-card">
      <div className="ba-card-header">
        <h3>{title}</h3>
        <div className="ba-toggle-group">
          <button
            className={`ba-toggle-btn ${sliderPos > 50 ? 'active' : ''}`}
            onClick={() => handleTogglePosition('before')}
          >
            Before
          </button>
          <button
            className={`ba-toggle-btn ${sliderPos <= 50 ? 'active' : ''}`}
            onClick={() => handleTogglePosition('after')}
          >
            After
          </button>
        </div>
      </div>

      <div
        className="ba-image-container"
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        {/* After image (base layer, full width) */}
        <img src={afterImg} alt="After" className="ba-img ba-img-after" draggable="false" />

        {/* Before image (clipped layer) */}
        <div
          className="ba-before-wrapper"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={beforeImg}
            alt="Before"
            className="ba-img ba-img-before"
            style={{ width: `${containerWidth}px` }}
            draggable="false"
          />
        </div>

        {/* Slider handle */}
        <div
          className="ba-slider-line"
          style={{ left: `${sliderPos}%` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="ba-slider-handle">
            <span className="ba-arrow left">&#8249;</span>
            <span className="ba-arrow right">&#8250;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterCards = () => {
  const projects = [
    {
      title: 'Residence Facade',
      beforeImg: '/assets/1a.jpg',
      afterImg: '/assets/hero2.jpeg'
    },
    {
      title: 'Exterior Concept',
      beforeImg: '/assets/2.jpg',
      afterImg: '/assets/hero4.jpeg',
    },

  ];
  

  return (
    <section className="ba-section" id="makeover">
      <div className="ba-section-header">
        <span className="ba-eyebrow">Transformations</span>
        <h2 className="ba-title">Before and After</h2>
      </div>

      <div className="ba-cards-container">
        {projects.map((project, index) => (
          <BeforeAfterSlider
            key={index}
            title={project.title}
            beforeImg={project.beforeImg}
            afterImg={project.afterImg}
          />
        ))}
      </div>
    </section>
  );
};

export default BeforeAfterCards;