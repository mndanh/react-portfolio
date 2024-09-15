import React, { useState } from 'react';
import { profileImage } from '../src/assets/pictures';

export default function About() {
    const [activeHeading, setActiveHeading] = useState(null);
    const handleMouseEnter = (heading) => {
        setActiveHeading(heading);
    };
    const handleMouseLeave = () => {
        setActiveHeading(null);
    };

  return (
    <section id="about" className="about-section">
        <h2>DAN HEER</h2>
        <div className="about-content">
          <img src={profileImage} alt="Dan Heer" className="profile-image" />
          <div className="about-details">
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('background')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Background</h3>
              <p className={`about-text ${activeHeading === 'background' ? 'active' : ''}`}>
                This is where you can write about your background...
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('whyTech')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Why Tech</h3>
              <p className={`about-text ${activeHeading === 'whyTech' ? 'active' : ''}`}>
                This is where you can explain why you chose a career in tech...
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('mySkills')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>My Skills</h3>
              <p className={`about-text ${activeHeading === 'mySkills' ? 'active' : ''}`}>
                This is where you can list your skills and what you're good at...
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};