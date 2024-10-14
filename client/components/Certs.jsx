import React from 'react';
import { uofmn, mpowerplatform } from '../src/assets/icons'
import '../App.css';

export default function Certs() {
  return (
    <div className="certifications-section">
      <div className="certification left-cert">
        <img src= {uofmn} alt="University of Minnesota Logo" className="cert-logo1" />
        <div className="cert-info">
          <h3>University of Minnesota</h3>
          <p>Full Stack Web Development Certification</p>
          <p>Completed September 2024</p>
        </div>
      </div>

      <div className="certification right-cert">
        <img src= {mpowerplatform} alt="Microsoft PL-400 Logo" className="cert-logo2" />
        <div className="cert-info">
          <h3>Microsoft</h3>
          <p>PL-400 Power Platform Developer Associate Cartification</p>
          <p>Completed October 2024</p>
        </div>
      </div>
    </div>
  );
};
