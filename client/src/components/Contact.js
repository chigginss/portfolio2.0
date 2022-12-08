import React, { Component } from 'react';
import '../css/portfolio.scss';
import LinkedInIcon from '../icons/LinkedInIcon.js';
import GitHubIcon from '../icons/GitHubIcon.js';
import Divider from './Divider.js';


class Contact extends Component {

  render() {
    return (
      <div className="contact">
        <div className="contactContent">
          <Divider text={'CONTACT'}/>
          <div id="contact">
              <h1 className="centerTitleDark">Let's Chat!</h1>
              <div className="contactMeText">I'm currently looking for new opportunities, in New Zealand, the US and everywhere in-between.</div>
          </div>
          <a className="resumeButton" href="mailto:cierramhiggins@gmail.com">CONTACT ME</a>
        </div>
        <div className="socialIcons" >
          <a href='https://github.com/chigginss'>
              <GitHubIcon className={"darkIcon"} />
          </a>
          <a href='https://www.linkedin.com/in/cierra-m-higgins/'>
              <LinkedInIcon className={"darkIcon"} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;