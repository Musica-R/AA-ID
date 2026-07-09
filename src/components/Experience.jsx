import React from 'react';
import '../styles/Experience.css';

const Experience = () => {
  return (
    <section className="experience-section">
      <div className="experience-container">

        <span className="experience-subtitle">Experience & Credentials</span>
        <h2>Professional Profile</h2>

        <div className="experience-grid">

          {/* LEFT – MAIN EXPERIENCE */}
          <div className="experience-card primary">
            <h3>Interior Designer</h3>
            <p className="duration">3+ Years of Industry Experience</p>

            <p className="description">
              An Interior Designer with 3+ years of experience in creating residential and
              commercial spaces, with a strong focus on space planning, material selection,
              and execution detailing.
            </p>
          </div>

          {/* RIGHT – DETAILS */}
          <div className="experience-card secondary">
            <ul>
              <li>
                <strong>Studio</strong>
                <span>AA&ID</span>
              </li>

              <li>
                <strong>Education</strong>
                <span>B.Arch – Bachelor of Architecture</span>
              </li>

              <li>
                <strong>Freelance Work</strong>
                <span>Residential & Commercial Projects</span>
              </li>

              <li>
                <strong>Blueprint Services</strong>
                <span>2D Drawings with Architect Approval</span>
              </li>

              <li>
                <strong>Architect License</strong>
                <span>CA/2023/165127</span>
              </li>

              <li>
                <strong>Contact</strong>
                <span>ashickaarchndinterior@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
