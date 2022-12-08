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
    <div className={`experience fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      <div id="experience" className='experienceTitle'>Projects && Experience</div>
      <p className='aboutMeText'>
        I have over 3 years experience in Web, iOS and Android development. Most recently I worked at <a className='link' href='hbomax.com'>HBO MAX</a>, and previously at 
        <a className='link' href='grokker.com'> Grokker.</a> </p>
        <p  className='aboutMeText'>In my free time, I've build several React/Express sites (like this one), several Instagram Effects, and small projects with Blender and Unity.</p>
        <div className='columnContainer'>
          <div className='column'>
            <div className='skillTitle'>JAVASCRIPT (ES6)</div>
            <div className='skillTitle'>PYTHON</div>
            <div className='skillTitle'>TYPESCRIPT</div>
            <div className='skillTitle'>MONGODB</div>
            <div className='skillTitle'>(S)CSS</div>
            <div className='skillTitle'>HTML</div>
          </div>
          <div className='column'>
            <div className='skillTitle'>NODE.JS</div>
            <div className='skillTitle'>REACT</div>
            <div className='skillTitle'>REACT NATIVE</div>
            <div className='skillTitle'>EXPRESS.JS</div>
            <div className='skillTitle'>JEST</div>
            <div className='skillTitle'>POSTGRESQL</div>
          </div>
          <div className='column'>
            <div className='skillTitle'>D3.JS</div>
            <div className='skillTitle'>AWS</div>
            <div className='skillTitle'>GIT</div>
            <div className='skillTitle'>LINUX</div>
            <div className='skillTitle'>JIRA</div>
            <div className='skillTitle'>CONFLUENCE</div>
          </div>
        </div>
        <a className='resumeButton' download='resume' href={Resume} rel="noreferrer" target='_blank'>DOWNLOAD RESUME</a>
    </div>
  );
}