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
                Driven by a passion for helping customers solve problems. Known for my attention to detail and determination, I thrive on tackling challenges and finding the most effective—not always the easiest—solutions. With a deep admiration for automation developers and their ability to turn concepts into solutions, I knew a career shift into Power Platform Development would suit me. As a reliable, people-focused professional, I am excited to continue applying my problem-solving skills in the world of Power Platform Development.
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('whyTech')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>Why Automation</h3>
              <p className={`about-text ${activeHeading === 'whyTech' ? 'active' : ''}`}>
                After years in tech sales, working daily with automation developers, I found myself captivated by their ability and vision to bring ideas to life from the ground up. I realized that while sales was rewarding, it did not allow me to tap into my true strength—creativity. So, I decided to pivot and pursue a career that could. I recently completed a full stack coding bootcamp at the University of Minnesota in September 2024. Following that, I became certified in Microsoft's Power Platform, passing the PL-400 certification exam in October 2024. I am eager to continue growing my skills in Power Platform and various languages and technologies to help build and scale automation programs.
              </p>
            </div>
            <div
              className="about-item"
              onMouseEnter={() => handleMouseEnter('mySkills')}
              onMouseLeave={handleMouseLeave}
            >
              <h3>My Skills</h3>
              <p className={`about-text ${activeHeading === 'mySkills' ? 'active' : ''}`}>
                My skillset consists of: Microsoft Power Platform, HTML, CSS, JavaScript, MongoDB, SQL, React, Express, Node.js, Handlebars, JQuery, Bootstrap, TypeScript, and more. I'm excited to continue learning, specifically: Azure, PowerBI, Microsoft Fabric, C#, Angular, Python, and AWS.
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};