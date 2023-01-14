import React, { Component } from 'react';
import '../css/portfolio.scss';
import Resume from '../content/CierraHigginsResume.pdf';

export default function Experience() {

  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  
  return (
    <div id='experience' className={`experience fade-in-section ${isVisible ? 'visible' : 'notVisible'}`} ref={domRef}>
      <div className='leftTitle'>Experience</div>
      <p className='aboutMeText'> I have over 3 years experience in Web, iOS and Android development. I've worked at <a className='link' href="https://hbomax.com" target="_blank" rel="noreferrer">HBO Max</a> and <a className='link' href="https://grokker.com" target="_blank" rel="noreferrer">Grokker</a></p>
      <p className='aboutMeText'>Outside of work, I've built Instagram Effects with Spark AR, 
      sites like this using React, and Visulaztions in D3.</p>
      <div className='experienceContent'>
        <div className='skillColumnContainer'>
          <div className='skillColumn'>
            <div className='skillTitle'>JAVASCRIPT (ES6)</div>
            <div className='skillTitle'>PYTHON</div>
            <div className='skillTitle'>TYPESCRIPT</div>
            <div className='skillTitle'>MONGODB</div>
            <div className='skillTitle'>(S)CSS</div>
            <div className='skillTitle'>HTML</div>
          </div>
          <div className='skillColumn'>
            <div className='skillTitle'>NODE.JS</div>
            <div className='skillTitle'>REACT</div>
            <div className='skillTitle'>REACT NATIVE</div>
            <div className='skillTitle'>EXPRESS.JS</div>
            <div className='skillTitle'>JEST</div>
            <div className='skillTitle'>POSTGRESQL</div>
          </div>
          <div className='skillColumn'>
            <div className='skillTitle'>D3.JS</div>
            <div className='skillTitle'>AWS</div>
            <div className='skillTitle'>GIT</div>
            <div className='skillTitle'>LINUX</div>
            <div className='skillTitle'>JIRA</div>
            <div className='skillTitle'>CONFLUENCE</div>
          </div>
        </div>
      </div>
      <div className='resumeButtonContainer'>
          <a className='resumeButton' download='resume' href={Resume} rel="noreferrer" target='_blank'> DOWNLOAD RESUME</a>
      </div>
    </div>
  );
}