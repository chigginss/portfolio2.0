import React, { Component } from 'react';
import '../css/portfolio.scss';
import portrait from '../images/portrait1.jpg';
import Divider from './Divider.js';

class About extends Component {

  render() {
    return (
      <div className="about">
        <div id={'about'} />
        <div className="aboutMeContainer">
          <img className="portrait" src={portrait} alt="portrait" />
          <div className="aboutMe">
            <div className="leftTitle">Hi! I'm Cierra</div>
            <p className="aboutMeText">I'm a Software Engineer currently located in New Zealand. I enjoy creating highly responsive applications and websites.</p>
            <p className="aboutMeText">When I'm not coding, I love going on hikes, playing video games and working on photo and video projects.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;