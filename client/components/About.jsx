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
                Driven by a passion for helping customers solve problems. Known for my attention to detail and determination, I thrive on tackling challenges and finding the most effective—not always the easiest—solutions. With a deep admiration for developers and their ability to turn concepts into solutions, I knew a career shift into coding would suit me. As a reliable, people-focused professional, Im excited to continue applying my problem-solving skills in the world of web development.
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('whyTech')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Why Tech</h3>
              <p className={`about-text ${activeHeading === 'whyTech' ? 'active' : ''}`}>
                After years in tech sales, I found myself captivated by the developers and engineers who could bring ideas to life from the ground up. I realized that while sales was rewarding, it didnt allow me to tap into my true strength—creativity. So, I decided to pivot and pursue a career that could. I recently completed a coding bootcamp at the University of Minnesota, and Im eager to continue growing my skills in the languages and technologies I know, while exploring and getting certified in new ones.
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('mySkills')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>My Skills</h3>
              <p className={`about-text ${activeHeading === 'mySkills' ? 'active' : ''}`}>
                My skillset consists of: HTML, CSS, JavaScript, MongoDB, SQL, React, Express, Node.js, Handlebars, JQuery, Bootstrap, TypeScript, and more. I'm excited to learn more, specifically: Angular, Python, AWS, and Microsoft's PowerAutomate platform.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};