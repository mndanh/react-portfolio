import React, { useState } from 'react';
import backgroundImage from '../src/assets/pictures/Minneapolis.jpg';
import profileImage from '../src/assets/pictures/profile.jpg';
import '../App.css';
import cssIcon from '../src/assets/icons/css.svg';
import expressIcon from '../src/assets/icons/express.svg';
import github2Icon from '../src/assets/icons/github2.svg';
import handlebarsIcon from '../src/assets/icons/handlebars.svg';
import mongodbIcon from '../src/assets/icons/mongodb.svg';
import htmlIcon from '../src/assets/icons/html.svg';
import javascriptIcon from '../src/assets/icons/javascript.svg';
import jqueryIcon from '../src/assets/icons/jquery.svg';
import mysqlIcon from '../src/assets/icons/mysql.svg';
import nodeIcon from '../src/assets/icons/node.svg';
import reactIcon from '../src/assets/icons/react.svg';
import pinIcon from '../src/assets/icons/location-pin.svg';
import phoneIcon from '../src/assets/icons/cell-phone.svg';
import mailIcon from '../src/assets/icons/email.svg';


export default function HomePage(){
const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});
const [formErrors, setFormErrors] = useState('');
const [formSubmitted, setFormSubmitted] = useState(false);

const handleChange = (e) => {
    setFormData({
    ...formData,
    [e.target.name]: e.target.value,
    });
};

const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
    setFormErrors('All fields are required.');
    return;
    }
console.log('Sending email to mndanh@gmail.com...');
    setFormSubmitted(true);
    setFormErrors('');
};
const [activeHeading, setActiveHeading] = useState(null);
const handleMouseEnter = (heading) => {
    setActiveHeading(heading);
};
const handleMouseLeave = () => {
    setActiveHeading(null);

    };
    return (
        <>
      <div
        className="hero-section"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '100vh',
          width: '100vw',
          margin: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div className="text-container">
          <h1>HELLO, I'M DAN HEER. FULL STACK WEB DEVELOPER</h1>
        </div>
      </div>

      <div className="divider"></div>

      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="projects-container">
          {/* Each project will be displayed as a card */}
          <div className="project-card">
            <h3>Project Title 1</h3>
            <p>Short description of the project.</p>
          </div>
          <div className="project-card">
            <h3>Project Title 2</h3>
            <p>Short description of the project.</p>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </section>

      <div className="divider"></div>

      <section className="icons-section">
        <div className="icons-container">
          <img src={htmlIcon} alt="html" title="html" className="icon" />
          <img src={cssIcon} alt="css" title="css" className="icon" />
          <img src={reactIcon} alt="React" className="icon" />
          <img src={mongodbIcon} alt="mongoDB" className="icon" />
          <img src={javascriptIcon} alt="JavaScript" className="icon" />
          <img src={expressIcon} alt="Express" className="icon" />
          <img src={mysqlIcon} alt="MySQL" className="icon" />
          <img src={nodeIcon} alt="Node" className="icon" />
          <img src={jqueryIcon} alt="jQuery" className="icon" />
          <img src={handlebarsIcon} alt="handlebars" className="icon" />
          <img src={github2Icon} alt="GitHub" className="icon" />
        </div>
      </section>

      <div className="divider"></div>

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

      <div className="divider"></div>

      <section id="contact" className="contact-section">
        <h2>CONTACT ME</h2>
        <div className="contact-info">
          <div className="contact-item">
            <img src={pinIcon} alt="Pin Icon" className="contact-icon" />
            <span>Minneapolis, MN</span>
          </div>
          <div className="contact-item">
            <img src={phoneIcon} alt="Phone Icon" className="contact-icon" />
            <span>Phone: (612) 849-0398</span>
          </div>
          <div className="contact-item">
            <img src={mailIcon} alt="Mail Icon" className="contact-icon" />
            <span>Email: mndanh@gmail.com</span>
          </div>
        </div>

        <h3>Reach out to connect!</h3>

        {formErrors && <p className="error-message">{formErrors}</p>}
        {formSubmitted && <p className="success-message">Message sent successfully!</p>}

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button type="submit">SEND MESSAGE</button>
        </form>
      </section>
      </>
    );
};