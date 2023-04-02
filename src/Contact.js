import React, { useEffect, useState, useRef } from 'react';
import './portfolio.scss';
import LinkedInIcon from './LinkedInIcon.js';
import GitHubIcon from './GitHubIcon.js';
import MailIcon from './MailIcon.js';

export default function Contact() {

  const [isVisible, setVisible] = useState(true);
  const domRef = useRef();
  useEffect(() => {
    const current = domRef.current;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(current);
    return () => observer.unobserve(current);
  }, []);

  return (
    <div className={`contact fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div id="contact">
        <div className="contactContent">
            <h1 className="leftTitle">Contact Me</h1>
        </div>
        <div className="socialIcons" >
          <a href="mailto:cierramhiggins@gmail.com">
              <MailIcon className={"darkIcon"} />
          </a>
          <a href='https://www.linkedin.com/in/cierra-m-higgins/'>
              <LinkedInIcon className={"darkIcon"} />
          </a>
          <a href='https://github.com/chigginss'>
              <GitHubIcon className={"darkIcon"} />
          </a>
        </div>
      </div>
    </div>
  );

}
