import React, { useState, useEffect } from 'react';
import '../styles/Projects.css';

/* IMPORT YOUR 26 IMAGES */
import p1 from '../assets/projects/1.jpeg';
import p2 from '../assets/projects/2.jpeg';
import p3 from '../assets/projects/3.jpeg';
import p4 from '../assets/projects/4.jpeg';
import p5 from '../assets/projects/5.jpeg';
import p6 from '../assets/projects/6.jpeg';
import p7 from '../assets/projects/7.jpeg';
import p8 from '../assets/projects/8.jpeg';
import p9 from '../assets/projects/9.jpeg';
import p10 from '../assets/projects/10.jpeg';
import p11 from '../assets/projects/11.jpeg';
import p12 from '../assets/projects/12.jpeg';
import p13 from '../assets/projects/13.jpeg';
import p14 from '../assets/projects/14.jpeg';
import p15 from '../assets/projects/15.jpeg';
import p16 from '../assets/projects/16.jpeg';
import p17 from '../assets/projects/17.jpeg';
import p18 from '../assets/projects/18.jpeg';
import p19 from '../assets/projects/19.jpeg';
import p20 from '../assets/projects/20.jpeg';
import p21 from '../assets/projects/21.jpeg';
import p22 from '../assets/projects/22.jpeg';
import p23 from '../assets/projects/23.jpeg';
import p24 from '../assets/projects/24.jpeg';
import p25 from '../assets/projects/25.jpeg';
import p26 from '../assets/projects/26.jpeg';

const projects = [
  { id: 1, img: p1, category: 'Living' },
  { id: 2, img: p2, category: 'Living' },
  { id: 3, img: p3, category: 'Living' },
  { id: 4, img: p4, category: 'Kitchen' },
  { id: 5, img: p5, category: 'Living' },
  { id: 6, img: p6, category: 'Bedroom' },
  { id: 7, img: p7, category: 'Kitchen' },
  { id: 8, img: p8, category: 'Kitchen' },
  { id: 9, img: p9, category: 'Bedroom' },
  { id: 10, img: p10, category: 'Bedroom' },
  { id: 11, img: p11, category: 'Kitchen' },
  { id: 12, img: p12, category: 'Kitchen' },
  { id: 13, img: p13, category: 'Kitchen' },
  { id: 14, img: p14, category: 'Kitchen' },
  { id: 15, img: p15, category: 'Kitchen' },
  { id: 16, img: p16, category: 'Kitchen' },
  { id: 17, img: p17, category: 'Bedroom' },
  { id: 18, img: p18, category: 'Kitchen' },
  { id: 19, img: p19, category: 'Living' },
  { id: 20, img: p20, category: 'Bedroom' },
  { id: 21, img: p21, category: 'Bedroom' },
  { id: 22, img: p22, category: 'Bedroom' },
  { id: 23, img: p23, category: 'Bedroom' },
  { id: 24, img: p24, category: 'Kitchen' },
  { id: 25, img: p25, category: 'Bedroom' },
  { id: 26, img: p26, category: 'Bedroom' }
];

const categories = ['All', 'Bedroom', 'Kitchen', 'Living'];
const MOBILE_LIMIT = 6;

const Projects = () => {
  const [active, setActive] = useState('All');
  const [selectedImg, setSelectedImg] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const filtered =
    active === 'All' ? projects : projects.filter((p) => p.category === active);

  const visibleProjects =
    isMobile && !showAll ? filtered.slice(0, MOBILE_LIMIT) : filtered;

  const handleCategoryChange = (cat) => {
    setFade(false); // start fade-out
    setTimeout(() => {
      setActive(cat);
      setShowAll(false);
      setFade(true); // fade-in after data change
    }, 200); // match transition duration in CSS
  };

  return (
    <section  className="projects-section">
      <div className="projects-container">
        <span className="projects-subtitle">Portfolio</span>
        <h2>Selected Works</h2>

        {/* FILTERS */}
        <div className="project-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={active === cat ? 'active' : ''}
              onClick={() => handleCategoryChange(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className={`project-grid ${fade ? 'fade-in' : 'fade-out'}`}>
          {visibleProjects.map((item) => (
            <div
              className="project-card"
              key={item.id}
              onClick={() => setSelectedImg(item.img)}
            >
              <img src={item.img} alt={item.category} />
              <div className="project-overlay">
                <span>{item.category}</span>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE (MOBILE ONLY) */}
        {isMobile && filtered.length > MOBILE_LIMIT && !showAll && (
          <div className="see-more-wrapper">
            <button
              className="see-more-btn"
              onClick={() => setShowAll(true)}
            >
              See More Projects
            </button>
          </div>
        )}
      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="project-modal" onClick={() => setSelectedImg(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImg} alt="Project View" />
        </div>
      )}
    </section>
  );
};

export default Projects;
