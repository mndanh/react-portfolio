import React from 'react';
import { Projects, About, Contact, Icons, Certs } from '../components';
import { backgroundImage } from '../src/assets/pictures';
import '../App.css';

export default function HomePage(){

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
        padding: '0',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}
      >
        <div className="text-container">
          <h1>HELLO, I'M DAN HEER. POWER PLATFORM AND FULL STACK WEB DEVELOPER</h1>
        </div>
      </div>

      <div className="divider"></div>

      <section id="certs">
        <Certs />
      </section>

      <div className="divider"></div>

      <section id="projects">
        <Projects />
      </section>

      <div className="divider"></div>

      <section id="icons">
          <Icons/>
      </section>

      <div className="divider"></div>

      <section id="about">
        <About />
      </section>

      <div className="divider"></div>

      <section id="contact">
        <Contact />
      </section>
      </>
    );
};