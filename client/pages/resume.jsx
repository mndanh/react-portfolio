import React from 'react';
import { danheerresume } from '../src/assets/pdf'

const ResumePage = () => {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-container">
        <div>
          <a href={danheerresume} download>
              <button>Download Resume (PDF)</button>
          </a>
        </div>
      </div>
    </div>
    );
};

export default ResumePage;