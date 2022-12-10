import React from 'react';
// components
import About from './About.js';
import Experience from './Experience.js';
import Header from './Header.js';
import Contact from './Contact.js';
// SCSS
import '../css/portfolio.scss';

export default function Home() {

  return (
      <div className="content">
        <Header/>
        <div className="welcomeTextContainer">
          <div className="welcomeText">
              <div className="hugeTitle lineUp">My name is</div>
              <div className="displayTitle lineUp"> Cierra Higgins</div>
              <div className="hugeTitle lineUp">I'm a Full Stack Software Engineer.</div>
              <a className="resumeButton" href="#about">GET TO KNOW ME</a>
          </div>
        </div>
        <div className="mainSection fadeIn">
          <About/>
          <Experience/>
          <Contact />
        </div>
        <span className="footerText">Designed and built by Cierra Higgins</span>
    </div>
  );
}
 