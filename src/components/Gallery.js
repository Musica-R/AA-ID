import React, { useState } from 'react';
import '../styles/Gallery.css';

/* IMPORT YOUR 4 IMAGES */
import officeImg from '../assets/projects/5.jpeg';
import restaurantImg from '../assets/projects/2.jpeg';
import hotelImg from '../assets/projects/6.jpeg';
import houseImg from '../assets/projects/8.jpeg';
import { useNavigate } from "react-router-dom";


const galleryItems = [
  {
    id: 1,
    img: officeImg,
    label: 'Living',
    area: 'office'
  },
  {
    id: 2,
    img: restaurantImg,
    label: 'Living',
    area: 'restaurant'
  },
  {
    id: 3,
    img: hotelImg,
    label: 'Bedroom',
    area: 'hotel'
  },
  {
    id: 4,
    img: houseImg,
    label: 'Kitchen',
    area: 'house'
  }
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);
  const navigate = useNavigate();
  return (
    <section id="projects" className="gallery-section">
      <div className="gallery-container">
        <div className="gallery-grid">
          {/* TEXT BLOCK */}

          <div className="gallery-text">
            <h2>
              My Portfolio of <span>Thoughtful Designs</span>
            </h2>
            <p>
              Explore a selection of my residential and commercial projects, where
              architectural expertise meets functional interior design to create spaces
              that are both timeless and practical.
            </p>
            <br />
            <p>
              Every project reflects a personalized approach, balancing aesthetics,
              functionality, and the unique vision of each client to create spaces that
              inspire everyday living and working.
            </p>
          </div>


          {/* IMAGE CARDS */}
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`gallery-card gallery-${item.area}`}
              onClick={() => setSelectedImg(item.img)}
            >
              <img src={item.img} alt={item.label} />
              <div className="gallery-gradient" />
              <span className="gallery-tag">{item.label}</span>
            </div>
          ))}

          {/* SEE MORE BUTTON */}
          <button className="gallery-more-btn"  onClick={() => navigate("/gallery")} >
            See More Projects
            <span className="arrow">&#8594;</span>
          </button>
        </div>
      </div>

      {/* MODAL */}
      {selectedImg && (
        <div className="gallery-modal" onClick={() => setSelectedImg(null)}>
          <span className="modal-close">&times;</span>
          <img src={selectedImg} alt="Project View" />
        </div>
      )}
    </section>
  );
};

export default Gallery;