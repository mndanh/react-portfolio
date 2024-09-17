import React from 'react';
import { testresume2 } from '../src/assets/pdf'

const ResumePage = () => {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-container">
        <div>
          <a href={testresume2} download>
              <button>Download Resume (PDF)</button>
          </a>
        </div>
      </div>
    </div>
    );
};

export default ResumePage;
