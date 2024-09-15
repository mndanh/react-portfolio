import React, { useState } from 'react';
import { pinIcon, phoneIcon, mailIcon } from '../src/assets/icons';
import '../App.css';

export default function Contact() {
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

  return (
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
  );
};