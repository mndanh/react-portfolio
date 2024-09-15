import React from 'react';
import '../App.css';
import { cssIcon, expressIcon, github2Icon, handlebarsIcon, mongodbIcon, htmlIcon, javascriptIcon, jqueryIcon, mysqlIcon, nodeIcon, reactIcon } from '../src/assets/icons';

export default function Icons() {

  return (
    <section id="icons" className="icons-section">
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
  );
};