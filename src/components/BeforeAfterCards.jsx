import React, { useState, useRef, useCallback, useEffect } from 'react';
import '../styles/BeforeAfterCards.css';

const BeforeAfterSlider = ({ title, beforeImg, afterImg, isModal = false }) => {
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
    <div
      className={`ba-image-container ${isModal ? 'ba-image-container-modal' : ''}`}
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

      {/* Bottom overlay with title + toggle */}
      <div className="ba-overlay">
        <h3 className="ba-overlay-title">{title}</h3>
        <div className="ba-overlay-toggle">
          <span
            className={`ba-toggle-text ${sliderPos > 50 ? 'active' : ''}`}
            onClick={() => handleTogglePosition('before')}
          >
            Before
          </span>
          <span className="ba-toggle-divider">|</span>
          <span
            className={`ba-toggle-text ${sliderPos <= 50 ? 'active' : ''}`}
            onClick={() => handleTogglePosition('after')}
          >
            After
          </span>
        </div>
      </div>
    </div>
  );
};

const BeforeAfterCard = ({ project, onExpand }) => {
  return (
    <div className="ba-card">
      <BeforeAfterSlider
        title={project.title}
        beforeImg={project.beforeImg}
        afterImg={project.afterImg}
      />
      <button
        className="ba-expand-btn"
        onClick={() => onExpand(project)}
        aria-label="View full size"
        type="button"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M8 21H5a2 2 0 0 1-2-2v-3M16 21h3a2 2 0 0 0 2-2v-3" />
        </svg>
      </button>
    </div>
  );
};

const BeforeAfterModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [project]);

  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="ba-modal-backdrop" onClick={onClose}>
      <div className="ba-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="ba-modal-close" onClick={onClose} aria-label="Close preview" type="button">
          &#10005;
        </button>
        <BeforeAfterSlider
          title={project.title}
          beforeImg={project.beforeImg}
          afterImg={project.afterImg}
          isModal
        />
      </div>
    </div>
  );
};

const BeforeAfterCards = () => {
  const projects = [
    {
      title: 'Living Area',
      beforeImg: '/assets/13.jpeg',
      afterImg: '/assets/3.jpeg'
    },
    {
      title: 'Wash Basin Area',
      beforeImg: '/assets/7.jpeg',
      afterImg: '/assets/10.jpeg',
    },
    {
      title: 'Dressing Area',
      beforeImg: '/assets/16.jpeg',
      afterImg: '/assets/4.jpeg',
    },
    {
      title: 'Foyer Storage Unit',
      beforeImg: '/assets/15.jpeg',
      afterImg: '/assets/2.jpeg'
    },
    {
      title: 'Wardrobe Design',
      beforeImg: '/assets/12.jpeg',
      afterImg: '/assets/8.jpeg',
    },

    {
      title: 'Dressing Wardrobe',
      beforeImg: '/assets/9.jpeg',
      afterImg: '/assets/6.jpeg'
    },
     {
      title: 'Pooja Room',
      beforeImg: '/assets/14.jpeg',
      afterImg: '/assets/5.jpeg'
    },
  ];

  const [modalProject, setModalProject] = useState(null);

  return (
    <section className="ba-section" id="makeover">
      <div className="ba-section-header">
        <span className="ba-eyebrow">Our Work</span>
        <h2 className="ba-title">Spaces We <em>Transform</em></h2>
        <p className="ba-subtitle">Explore our before &amp; after transformations</p>
      </div>

      <div className="ba-cards-container">
        {projects.map((project, index) => (
          <BeforeAfterCard
            key={index}
            project={project}
            onExpand={setModalProject}
          />
        ))}
      </div>

      <BeforeAfterModal
        project={modalProject}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
};

export default BeforeAfterCards;