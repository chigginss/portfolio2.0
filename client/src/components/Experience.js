import React, { Component } from 'react';
import '../css/portfolio.scss';
import Resume from '../content/CierraHigginsResume.pdf';
import Divider from './Divider.js';
import styled from 'styled-components'

class Experience extends Component {
  
  render() {
    return (
      <div className="experience">
          <Divider text={'EXPERIENCE'}/>
          <div className="experienceTitle">Bad Romance</div>
          <p className="meText">
            I have over 3 years experience in Web, iOS and Android development. Most recently I worked at <a className="link" href="hbomax.com">HBO MAX</a>, and previously at 
            <a className="link" href="grokker.com"> Grokker.</a> 
           </p>
            <div className="columnContainer">
              <div className="column">
                <div className="skillTitle">JAVASCRIPT (ES6)</div>
                <div className="skillTitle">PYTHON</div>
                <div className="skillTitle">TYPESCRIPT</div>
                <div className="skillTitle">MONGODB</div>
                <div className="skillTitle">(S)CSS</div>
                <div className="skillTitle">HTML</div>
              </div>
              <div className="column">
                <div className="skillTitle">NODE.JS</div>
                <div className="skillTitle">REACT</div>
                <div className="skillTitle">REACT NATIVE</div>
                <div className="skillTitle">EXPRESS.JS</div>
                <div className="skillTitle">JEST</div>
                <div className="skillTitle">POSTGRESQL</div>
              </div>
              <div className="column">
                <div className="skillTitle">D3.JS</div>
                <div className="skillTitle">AWS</div>
                <div className="skillTitle">GIT</div>
                <div className="skillTitle">LINUX</div>
                <div className="skillTitle">JIRA</div>
                <div className="skillTitle">CONFLUENCE</div>
              </div>
            </div>
            <a className="resumeButton" download="resume" href={Resume} target="_blank">DOWNLOAD RESUME</a>
        </div>
    );
  }
}

export default Experience;