import React from 'react';

const ResumePage = () => {
  return (
    <div className="resume-page">
      <h1>My Resume</h1>
      <div className="resume-container">
        <iframe 
            src="https://docs.google.com/document/d/1NJoyU9_vSoiWhFplnI3PD-b19kXgtJ_Q/pub?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            title="Resume"
            allowFullScreen>
        </iframe>
    </div>
        <a href="https://docs.google.com/document/d/1NJoyU9_vSoiWhFplnI3PD-b19kXgtJ_Q/export?format=pdf" download>
            <button>Download Resume</button>
        </a>
    </div>
    );
};

export default ResumePage;
